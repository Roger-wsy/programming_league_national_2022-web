// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const fetcher = await fetch(
      "https://codeforces.com/spectator/ranklist/9cd46284fc158604d5bc326b86e04dc5"
    );
    const html = await fetcher.text();

    const $ = cheerio.load(html);
    // console.log(html);
    const data = [];
    const tableHeaders = [];
    $("table.standings > tbody > tr").each((index, element) => {
      if (index === 0) {
        const ths = $(element).find("th");
        $(ths).each((i, element) => {
          if (i <= 3) {
            tableHeaders.push($(element).text().toLowerCase());
          } else {
            const a = $(element).find("a");
            tableHeaders.push($(a).text().toLowerCase());
          }
        });
        return true;
      }

      const tds = $(element).find("td");
      const tableRow = {};
      $(tds).each((i, element) => {
        tableRow[tableHeaders[i]] = $(element).text();
      });
      data.push(tableRow);
    });
    data.map((d) => {
      Object.keys(d).forEach((k) => (d[k] = d[k].trim()));
    });
    console.log(data);

    return res.status(200).json({ data, message: "ok" });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
}
