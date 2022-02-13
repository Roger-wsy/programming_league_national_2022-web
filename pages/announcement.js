import { useState } from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";
import { motion } from "framer-motion";
import announcement from "../data/announcement";


const local_variant = {
  hidden: {
    scale: 0.5,
    opacity: 0.0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const variant = {
  normal: {
    opacity: 0,
  },
  left:{
    x:"100vw",
    opacity:0.0
  },
  after: {
    y: 0,
    x: 0,
    top: "auto",
    left: "auto",
    opacity: 1,
  },
};

export default function Home({ rules }) {
  const [indexClick, setIndexClick] = useState(0);

  return (
    <div>
      <Head>
        <title>Programming League</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout bg="bg6">
        <motion.div
          className="relative"
          initial="left"
          variants={variant}
          animate="after"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/image 3.png" alt="3" />
          <div className="relative my-10">
            <h1 className="tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
              ANNOUNCEMENT
            </h1>
            <h1 className="tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
              ANNOUNCEMENT
            </h1>
            <h1 className="tracking-[0.4em] font-surrend text-[#00C2FF]">
              ANNOUNCEMENT
            </h1>
          </div>
        </motion.div>
        <div className="grid w-full gap-10 lg:grid-cols-2">
          <div
            className={`max-h-[65vh] lg:min-h-[75vh] space-y-10 overflow-y-scroll overflow-x-hidden scrollbar`}
          >
            {announcement.map((a, i) => (
              <div key={i}>
                <motion.div
                  viewport={{ once: true }}
                  initial="hidden"
                  whileInView="show"
                  variants={local_variant}
                  className={`grid grid-cols-4 gap-10 cursor-pointer`}
                  onClick={(_) => setIndexClick(i)}
                >
                  <div
                    className={`col-span-3 ${
                      indexClick !== i && "scale_left scale-75"
                    }`}
                  >
                    <div className="text-lg text-justify border_box sm:text-2xl">
                      {a.title}
                    </div>
                  </div>
                  <div
                    className={`flex pt-5 ${
                      indexClick !== i && "scale_left scale-75"
                    }`}
                  >
                    <div className="relative">
                      <p className="p-4 text-xl border-b-4 border-t-4 border-[#00C2FF] tracking-wider gradient_text">
                        {i + 1 <= 9 ? `0${i + 1}` : i + 1}
                      </p>
                      <div className="absolute -top-2 -right-0 w-5 h-1 bg-[#00C2FF]"></div>
                    </div>
                  </div>
                </motion.div>
                {/* mobile */}
                {indexClick === i && (
                  <div className="block p-5 mt-5 lg:hidden">
                    <div className="border-4 border-[#00FFC2] text-[#00FFC2] rounded-3xl">
                      <div className="flex justify-center border-b-4 border-[#00FFC2]">
                        <h2 className="font-normal tracking-widest">
                          ANNOUNCEMENT
                        </h2>
                      </div>
                      <div className="flex items-center h-full p-5">
                        <div>
                          <h3
                            className="whitespace-pre-wrap a_underline"
                            dangerouslySetInnerHTML={{
                              __html: announcement[indexClick].text,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <motion.div className="hidden lg:block border-4 border-[#00FFC2] text-[#00FFC2] rounded-3xl" variants={variant} initial="normal" animate="after" transition={{duration:2}}>
            <div className="flex justify-center border-b-4 border-[#00FFC2]">
              <h2 className="font-normal tracking-widest">ANNOUNCEMENT</h2>
            </div>
            <div className="flex items-center h-full p-5">
              <div>
                <div className="mb-5">
                  <h3
                    className="whitespace-pre-wrap a_underline text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: announcement[indexClick].text,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      announcement,
    },
  };
};
