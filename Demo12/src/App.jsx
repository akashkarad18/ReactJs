import A from "./MyComponent/A"
import { createContext } from "react"
export let mycontext=createContext()
function App() {


  return (
    <>
        <mycontext.Provider value={{name:'Akash',age:'22'}}>
          <A></A>
        </mycontext.Provider>
    </>
  )
}

export default App
