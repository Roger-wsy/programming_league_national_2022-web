import { createContext } from "react";

export const StateContext = createContext({
    preState:"",
    curState:"",
    changePreState:(state)=>{},
    changeCurState:(state)=>{}
})