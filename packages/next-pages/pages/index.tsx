import { ReactComponent } from "../components/atomico";
export default function () {
  return (
    <>
      <h1>welcome</h1>
      <ReactComponent
        onclick={() => {
          console.log("OUT!");
        }}
      ></ReactComponent>
    </>
  );
}
