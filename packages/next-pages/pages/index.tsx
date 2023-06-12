import { ReactComponent } from "../components/atomico";
import { useState, useEffect } from "react";
export default function () {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);
  return (
    <>
      <h1>welcome</h1>
      <ReactComponent
        show={show}
        onclick={() => {
          console.log("Event dom!", event);
        }}
        onClick={(event) => {
          console.log("Event react!", event);
        }}
      ></ReactComponent>
      <h1>{show ? "true" : "false"}</h1>
    </>
  );
}
