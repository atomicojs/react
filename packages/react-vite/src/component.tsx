import { MyComponent } from "component/react";

console.log(
  <h1>
    welcome <span>1</span>
  </h1>,
  <span></span>
);

export function MyComponentReact() {
  return (
    <>
      <h1>welcome eeeeee romass</h1>
      <h1>welcome eeeeee romassssssss</h1>
      <MyComponent onClick={({ currentTarget }) => {}} />
    </>
  );
}
