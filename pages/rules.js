import { useState } from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";
import { motion } from "framer-motion";

import rules from "../data/rules";

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
  down:{
    y:-300,
    opacity:0.0
  },
  after: {
    y: 0,
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
        <link rel="icon" href="/images/PLN-Glitch 1.png" />
      </Head>
      <Layout bg="bg5">
        <motion.div
          className="relative"
          initial="down"
          variants={variant}
          animate="after"
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/image 3.png" alt="3" />
          <div className="relative my-10">
            <h1 className="tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
              RULES & REGULATIONS
            </h1>
            <h1 className="tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
              RULES & REGULATIONS
            </h1>
            <h1 className="tracking-[0.4em] font-surrend text-[#00C2FF]">
              RULES & REGULATIONS
            </h1>
          </div>
        </motion.div>
        <div className="grid w-full gap-10 lg:grid-cols-2">
          <div
            className={`max-h-[65vh] lg:max-h-[75vh] space-y-10 overflow-y-scroll overflow-x-hidden scrollbar`}
          >
            {rules.map((r, i) => (
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
                      indexClick !== i && "scale_left scale-75  opacity-70"
                    }`}
                  >
                    <div className="text-lg text-justify border_box sm:text-2xl">
                      {r.title}
                    </div>
                  </div>
                  <div
                    className={`flex pt-5 ${
                      indexClick !== i && "scale_left scale-75  opacity-70"
                    }`}
                  >
                    <div className="relative">
                      <p className="p-4 text-xl border-b-4 border-t-4 border-[#00C2FF] tracking-wider gradient_text sm:text-2xl">
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
                        <h2 className="font-normal tracking-widest">ANSWER</h2>
                      </div>
                      <div className="flex items-center h-full p-5">
                        <div>
                          <h3
                            className="whitespace-pre-wrap a_underline"
                            dangerouslySetInnerHTML={{
                              __html: rules[indexClick].text,
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
          <motion.div className="hidden lg:block border-4 border-[#00FFC2] text-[#00FFC2] rounded-3xl" initial="normal" animate="after" variants={variant} transition={{duration:2}}>
            <div className="flex justify-center border-b-4 border-[#00FFC2]">
              <h2 className="font-normal tracking-widest">RULES</h2>
            </div>
            <div className="flex items-center h-full p-5">
              <div>
                <div className="mb-5">
                  <h3
                    className="whitespace-pre-wrap a_underline text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: rules[indexClick].text,
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
      rules,
    },
  };
};
