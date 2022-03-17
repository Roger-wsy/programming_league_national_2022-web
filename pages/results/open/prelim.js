import Head from "next/head";
import useSWR from "swr";
import json from "../../../data/open.json";

async function fetcher(input, init) {
  const res = await fetch(input, init);
  return res.json();
}

const Home = ({ uni, json }) => {
  const { data } = useSWR("/api/open", fetcher);

  return (
    <div className="h-[100vh] bg-gray-900">
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/PLN-Glitch 1.png" />
      </Head>
      <div className="tracking-widest layout">
        <div className="flex items-center justify-between w-full mb-8">
          <h2 className="w-full font-medium tracking-widest text-transparent font-surrend bg-clip-text bg-gradient-to-r from-purple-300 to-red-600">
            PLN 2022 Open Preliminary
          </h2>
          <div className="">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codeforces.com/spectator/ranklist/d687fe4a28a7a1529ac15ac331fe5c9f"
              className="px-4 py-2 text-white bg-red-500 rounded-md"
            >
              LIVE
            </a>
          </div>
        </div>
        <div className="relative w-full mb-10 group">
          <div className="absolute transition duration-500 rounded-md -inset-0.5 bg-gradient-to-r from-purple-800 to-red-800 opacity-100 group-hover:duration-200 group-hover:opacity-100 blur" />
          <div className="relative grid w-full grid-cols-12 py-5 text-center bg-gray-900 rounded-md dark:bg-gray-900">
            <div className="px-1 py-1 font-bold text-center">#</div>
            <div className="col-span-4 px-1 py-1 font-bold text-left">who</div>
            <div className="px-1 py-1 font-bold">=</div>
            <div className="px-1 py-1 font-bold">penalty</div>
            <div className="px-1 py-1 font-bold">A</div>
            <div className="px-1 py-1 font-bold">B</div>
            <div className="px-1 py-1 font-bold">C</div>
            <div className="px-1 py-1 font-bold">D</div>
            <div className="px-1 py-1 font-bold">E</div>
          </div>
        </div>
        <div className="w-full">
          {data?.data.map((d, i) => {
            const team_idx = json?.data?.findIndex((da) => {
              return da?.["Team Name"] === d?.who?.split(":")[0];
            });

            const team = json?.data[team_idx];
            {
              /* console.log(data); */
            }
            return (
              <div className="relative w-full mb-8 group" key={i}>
                <div
                  className={`absolute transition duration-500 rounded-md -inset-0.5 bg-gradient-to-r from-purple-800 to-red-800 ${
                    i <= 2 ? "opacity-90" : i <= 9 ? "opacity-50" : "opacity-20"
                  } group-hover:duration-200 group-hover:opacity-100 blur`}
                />
                <div className="relative grid w-full grid-cols-12 py-5 text-center bg-gray-900 rounded-md dark:bg-gray-900">
                  <div className="col-span-1 text-center">{d?.["#"]}</div>
                  <div className="col-span-4 px-3 text-left">
                    <div>
                      <span className="font-bold">
                        {d?.who?.split(": ")[0]}
                      </span>
                      : {d?.who?.split(": ")[1]}
                    </div>
                    <div className={`grid w-full grid-cols-3 gap-5 my-4`}>
                      {team && uni?.findIndex((u) => u === team?.uni1) !== -1 && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/uni/${team?.uni1}.png`}
                          className="object-contain w-full h-14"
                          alt="uni"
                          title={`${team?.name1}`}
                        />
                      )}
                      {team && uni?.findIndex((u) => u === team?.uni2) !== -1 && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/uni/${team?.uni2}.png`}
                          className="object-contain w-full h-14"
                          alt="uni"
                          title={`${team?.name2}`}
                        />
                      )}
                      {team && uni?.findIndex((u) => u === team?.uni3) !== -1 && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/uni/${team?.uni3}.png`}
                          className="object-contain w-full h-14"
                          alt="uni"
                          title={`${team?.name3}`}
                        />
                      )}
                    </div>
                  </div>
                  <div className="">{d?.["="]}</div>
                  <div className="">{d?.penalty}</div>
                  <div className="">{d?.a}</div>
                  <div className="">{d?.b}</div>
                  <div className="">{d?.c}</div>
                  <div className="">{d?.d}</div>
                  <div className="">{d?.e}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const uni = [
    "UM",
    "USM",
    "UMTERENGGANU",
    "MONASH",
    "UTM",
    "IICP",
    "TARUC",
    "UTMARA",
    "PBP",
    "UKM",
    "NOTTINGHAM",
    "UPM",
    "ERICAN",
    "USIM",
    "TAYLOR",
    "NILAI",
    "APU",
    "UTMMELAKA",
    "MULTIMEDIA",
    "MSU",
    "IIUM",
    "UMKELANTAN",
    "NO",
    "UTP",
    "UMPAHANG",
    "UNITEN",
    "UTAR",
    "UKL",
    "UMSARAWAK",
    "XIAMEN",
    "SWINBURNE",
    "UCSI",
  ];
  return {
    props: {
      uni,
      json,
    },
  };
};
