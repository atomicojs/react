import { Counter } from "components/react";
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
      <Counter count={10} />
      <h1>{show ? "true" : "false"}</h1>
    </>
  );
}
