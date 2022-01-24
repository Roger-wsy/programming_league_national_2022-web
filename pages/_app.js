import '../styles/globals.css'
import { StateContext } from '../store/state-context'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [curState,setCurState] = useState("")
  const [preState,setPreState] = useState("")

  const changePreState = (state)=>{
    setPreState(state)
  }
  const changeCurState = (state)=>{
    setCurState(state)
  }
  const stateValue = {
    curState:curState,
    preState:preState,
    changePreState:changePreState,
    changeCurState:changeCurState
  }
  return <StateContext.Provider value={stateValue}>
      <Component {...pageProps} />
    </StateContext.Provider>
}

export default MyApp
