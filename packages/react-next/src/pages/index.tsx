import "@atomico/wrapper/allow-deduple";
import { MyComponent } from "component/react/next";

export default function Home() {
  return (
    <main>
      <h1>welcome!</h1>
      <MyComponent message="welcome">
        <h1>Slot - random !!!!</h1>
      </MyComponent>
      <MyComponent message="welcome">
        <h1>Slot!!!</h1>
      </MyComponent>
    </main>
  );
}
