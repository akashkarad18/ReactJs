import { useSelector,useDispatch } from "react-redux"

import { increase,decrease } from "./Actions/Index"
function App() {
  const mystate = useSelector((state)=>state.inc_des)
  const dispatch = useDispatch()
  return (
    <>
      <h1>{mystate}</h1>

      <button onClick={()=>dispatch(increase())}>add</button>
      <button onClick={()=>dispatch(decrease())}>add</button>
    </>
  )
}

export default App
