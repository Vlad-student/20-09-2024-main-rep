import Timer from "./components/Timer/Timer";
import { useState } from "react";




function App() {
  const[show, setShow] = useState (false);
  const changeShow = () => setShow(!show)
  return (
    <>
    <button onClick={changeShow}>switch show timer </button>
      {show && <Timer/>}
    </>
  );
}

export default App;
 