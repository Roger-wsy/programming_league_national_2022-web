import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { StateContext } from "../store/state-context";

const Sidebar = () => {
  const router = useRouter()
  const ctx = useContext(StateContext)

  const changePreviousState = (state) => {
    ctx.changePreState(state)
  }
  const changeCurrentState = (state) => {
    ctx.changeCurState(state)
  }
  const changeState = (state)=>{
    changePreviousState(ctx.curState)
    changeCurrentState(state)
  }
  return (
    <div>
      <div className="bg-transparent fixed top-0 left-0 h-full flex items-center justify-between space-y-5 p-6 w-[90px] flex-col">
        <div className="flex flex-col items-center" >
          <Link href="/" >
            <a className="block" onClick={()=>{changeState("")}}>
              <div className="mb-5">
                <Image
                  src="/images/PLN-Glitch 1.png"
                  width="300"
                  height="300"
                  alt="logo"
                />
              </div>
            </a>
          </Link>
          <div className="space-y-10" >
            <Link href="/about" >
              <a className="block" onClick={()=>{changeState("aboutus")}} className={router.pathname == "/about" ? "active block" : " block"}>
                <h3 className="rotate-180 cursor-pointer vertical strike">ABOUT US</h3>
              </a>
            </Link>
            <Link href="/overview" >
              <a className="block" onClick={()=>{changeState("overview")}} className={router.pathname == "/overview" ? "active block" : "block"}>
                <h3 className="rotate-180 cursor-pointer vertical strike" >OVERVIEW</h3>
              </a>
            </Link>
            <Link href="/faq" >
              <a className="block" onClick={()=>{changeState("faq")}} className={router.pathname == "/faq" ? "active block" : "block"}>
                <h3 className="rotate-180 cursor-pointer vertical strike" >FAQ</h3>
              </a>
            </Link>
            <Link href="/results">
              <a className="block"  onClick={()=>{changeState("results")}} className={router.pathname == "/results" ? "active block" : "block"}>
                <h3 className="rotate-180 cursor-pointer vertical strike" >RESULTS</h3>
              </a>
            </Link>
            <Link href="/announcement" >
              <a className="block" onClick={()=>{changeState("announcement")}} className={router.pathname == "/announcement" ? "active block" : "block"}>
                <h3 className="rotate-180 cursor-pointer vertical strike" >
                  ANNOUNCEMENT
                </h3>
              </a>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
              ></path>
              <circle fill="white" cx="16.806" cy="7.207" r="1.078"></circle>
              <path
                fill="white"
                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
