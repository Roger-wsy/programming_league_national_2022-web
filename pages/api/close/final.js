// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const fetcher = await fetch(
      "https://codeforces.com/spectator/ranklist/afe951732d851c42fff038300cc5a392"
    );
    // const fetcher = await fetch(
    //   "https://codeforces.com/spectator/ranklist/d9df5eba4659c1f0281d0bbbbc70e3e2"
    // );
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
            const a = $(element).find("span");
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
    // console.log(data);
    data.pop();

    return res.status(200).json({ data, message: "ok" });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
}
