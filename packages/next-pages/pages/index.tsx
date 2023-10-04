import { Counter, Checkbox } from "components/react";
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
      <Counter></Counter>
      <Checkbox />
      <h1>{show ? "true" : "false"}</h1>
    </>
  );
}
