import { useState } from "react";
import { Counter, CheckboxList, Checkbox } from "components/react";
import "./App.css";

function App() {
  const [checkbox, setCheckbox] = useState("one");

  return (
    <>
      <h1>Vite + React</h1>
      <hr />
      <Counter></Counter>
      <hr />
      <CheckboxList
        onChangeCheckboxList={(event) => {
          console.log(event);
          setCheckbox(event.detail);
        }}
      >
        <Checkbox value="one" label="one" checked={checkbox === "one"} />
        <Checkbox value="two" label="two" checked={checkbox === "two"} />
      </CheckboxList>
      <h1>{checkbox}</h1>
    </>
  );
}

export default App;
