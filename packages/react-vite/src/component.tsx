import { MyComponent } from "component/react";

export function MyComponentReact() {
  return (
    <>
      <h1>welcome eeeeee romass</h1>
      <h1>welcome eeeeee romassssssss</h1>
      <MyComponent
        message="Message from react 5ss"
        onincrement={({ currentTarget }) => {
          console.log({
            currentTarget,
            counter: currentTarget.count,
          });
        }}
      />
    </>
  );
}
