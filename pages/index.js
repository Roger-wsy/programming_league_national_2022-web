import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layouts/Layout";

const variant = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
};

const aboutus_variant = {
  title: {
    x: -100,
    opacity: 0.0,
  },
  logo: {
    x: 100,
    opacity: 0.0,
  },
  up: {
    y: 300,
    opacity: 0.0,
  },
  after: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programming League National 2022</title>
        <meta name="description" content="Programming League is an annual competitive programming contest organised by the FCSIT, UM. In 2022, it will be Malaysia's largest programming contest!" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
        <link rel="canonical" href="https://www.programming-league.com"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Programming League National 2022"/>
        <meta property="og:description" content="Programming League is an annual competitive programming contest organised by the FCSIT, UM. In 2022, it will be Malaysia's largest programming contest!"/>
        <meta property="og:url" content="https://www.programming-league.com"/>
        <meta property="og:site_name" content="Programming League"/>
        <meta property="og:image" content="https://www.programming-league.com/images/General Backdrop.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="628"/>
        <meta property="fb:app_id" content="2807450235954335"/>
        <link rel="icon" href="/images/PLN-Glitch 1.png" />
      </Head>
      <Layout bg="bg1">
        <div className="grid items-center justify-center w-full h-screen gap-4 lg:grid-cols-2">
          <motion.div
            variants={variant}
            initial="before"
            animate="after"
            transition={{ duration: 1 }}
          >
            <div>
              <div className="relative mb-4">
                <h6 className="text-4xl md:text-[45px] tracking-widest font-extralight text-[white] z-10 absolute -top-[3px] -left-[3px]">
                  UNIVERSITI MALAYA
                </h6>
                <h6 className="text-4xl md:text-[45px] tracking-widest font-extralight text-[#FF00F5] absolute -top-[1px] -left-[1px]">
                  UNIVERSITI MALAYA
                </h6>
                <h6 className="text-4xl md:text-[45px] tracking-widest font-extralight text-[#00C2FF]">
                  UNIVERSITI MALAYA
                </h6>
              </div>
            </div>
            <div className="mb-10 space-y-3">
              <div className="relative">
                <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                  PROGRAMMING
                </h1>
                <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                  PROGRAMMING
                </h1>
                <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                  PROGRAMMING
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    LEAGUE
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    LEAGUE
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    LEAGUE
                  </h1>
                </div>
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    20
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    20
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    20
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    NATIONAL
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    NATIONAL
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    NATIONAL
                  </h1>
                </div>
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    22
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    22
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    22
                  </h1>
                </div>
              </div>
            </div>
            <Link href="/register">
              <a>
                <div className="flex items-center justify-end w-full">
                  <div className="relative">
                    <div className="absolute -top-[3px] left-0 bg-[#FCEF41] btn_1 z-10 px-11 py-2 cursor-pointer">
                      <h3 className="font-bold text-black">REGISTER NOW!</h3>
                    </div>
                    <div className="absolute -top-2 -left-1 bg-[#FF00F5] btn_1 px-11 py-2 cursor-pointer">
                      <h3 className="font-bold text-black">REGISTER NOW!</h3>
                    </div>
                    <div className="bg-[#00C2FF] px-11 py-2 btn_1 cursor-pointer">
                      <h3 className="font-bold text-black">REGISTER NOW!</h3>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={variant}
            initial="before"
            animate="after"
            transition={{ duration: 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/PLN-Glitch 1.gif"
              alt="logo"
              className="object-contain w-full h-[300px] lg:h-[400px] px-8"
            />
          </motion.div>
        </div>
        <div className="w-full pt-80">
          <div
            className="grid w-full gap-4 p-10 lg:grid-cols-2"
            style={{ background: "rgba(55,65,81,0.7)", borderRadius: "20px" }}
          >
            <div>
              <motion.div
                className="relative"
                variants={aboutus_variant}
                initial="title"
                viewport={{ once: true }}
                whileInView="after"
                transition={{ duration: 1 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/image 3.png" alt="3" />
                <div className="relative my-10">
                  <h1 className="2xl:text-6xl tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    ABOUT US
                  </h1>
                  <h1 className="2xl:text-6xl tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    ABOUT US
                  </h1>
                  <h1 className="2xl:text-6xl tracking-[0.4em] font-surrend text-[#00C2FF]">
                    ABOUT US
                  </h1>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                variants={aboutus_variant}
                initial="title"
                viewport={{ once: true }}
                whileInView="after"
                transition={{ duration: 1 }}
              >
                <p className="mb-10 text-lg font-medium tracking-widest text-justify sm:text-2xl">
                  The Programming League is an annual nationwide competitive programming competition 
                  held by the Computer Society of Universiti Malaya (PEKOM) starting from 2014 where 
                  teams of 3 will compete to solve algorithmic problems in the given time.
                </p>
                <p className="mb-10 text-lg font-medium tracking-widest text-justify sm:text-2xl">
                  This event invites all undergraduate students across Malaysia to tackle real-world 
                  problems and challenge other teams in becoming the best among the field!
                </p>
                <p className="mb-10 text-lg font-medium tracking-widest text-justify sm:text-2xl">
                  As the committee members of Programming League National 2022, we aim to expose university 
                  students to competitive programming and discover potential problem solvers to support the 
                  industry’s growth as well as building a substantial technology ecosystem.
                </p>
              </motion.div>
            </div>
            <motion.div
              variants={aboutus_variant}
              initial="logo"
              viewport={{ once: true }}
              whileInView="after"
              transition={{ duration: 1 }}
              className="relative items-center hidden sm:block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/PLN-Glitch 1.gif"
                alt="logo"
                className="object-contain w-full h-[400px] lg:h-[600px]"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] pt-52">
          <div className="w-full">
            <div className="flex justify-center mt-10 mb-16">
              <motion.div
                variants={aboutus_variant}
                initial="up"
                viewport={{ once: true }}
                whileInView="after"
                transition={{ duration: 1 }}
                className="relative"
              >
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute -top-10"
                  src="/images/image 3.png"
                  alt="3"
                />
                <h1 className="tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                  SPONSORS
                </h1>
                <h1 className="tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                  SPONSORS
                </h1>
                <h1 className="tracking-[0.4em] font-surrend text-[#00C2FF]">
                  SPONSORS
                </h1>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={aboutus_variant}
            initial="up"
            viewport={{ once: true }}
            whileInView="after"
            transition={{ duration: 1 }}
            className="flex items-center flex-col relative p-4 rounded-[20px]">

            <h2 className="font-agency text-[#FFFFFF] font-extralight tracking-[0.05em]">Diamond Sponsors</h2>
            <div className="w-full  flex items-center justify-center">
              <a
                href="https://www.moneylion.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/moneylion.png"
                  alt="Money Lion Logo"
                  className="object-contain w-[250px] lg:w-[500px] h-[100px] lg:h-[80px] cursor-pointer"
                />
              </a>
              <a
                href="https://www.maxis.com.my/en/home/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/maxis.png"
                  alt="Maxis Logo"
                  className="object-contain w-[250px] lg:w-[500px] h-[100px] lg:h-[180px] cursor-pointer"
                />
              </a>
            </div>
            <h2 className="color-[#FFFFFF] font-normal font-agency mt-6">Platinum Sponsors</h2>
            <div className="w-full flex items-center justify-around">
              <a 
                href="https://www.fusionexgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/fusionex.png"
                  alt="MRANTI Logo"
                  className="object-contain w-[80px] lg:w-[150px] h-[100px] cursor-pointer"
                />
              </a>
              <a 
                href="https://www.nintex.com/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/nintex.png"
                  alt="MRANTI Logo"
                  className="object-contain w-[80px] lg:w-[150px] h-[100px] cursor-pointer"
                />
              </a>
              <a 
                href="http://mranti.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/mranti.png"
                  alt="MRANTI Logo"
                  className="object-contain w-[80px] lg:w-[150px] h-[100px] cursor-pointer"
                />
              </a>
            </div>
            <h2 className="color-[#FFFFFF] font-normal font-agency mt-8">Benefits-in-kind Sponsors</h2>
            <a                 
              href="https://go.thecads.com/rubiqe_UM "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/cads.png"
                alt="CADS Logo"
                className="object-contain w-[70px] lg:w-[120px] h-[80px] cursor-pointer"
              />
            </a>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              viewBox="0 0 24 24"
              // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path
                fill="white"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"
              ></path>
            </svg>
            <h2 className="mt-10 font-medium tracking-widest text-justify">
              Interested to be a sponsor?
            </h2>
            <h2 className="mb-10 font-medium tracking-widest text-justify">
              sponsorpln2122@gmail.com
            </h2> */}
          </motion.div>
        </div>
      </Layout>
    </div>
  );
}
