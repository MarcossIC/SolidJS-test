import logo from "../logo.svg";
import styles from "./App.module.css";

import { createSignal, createEffect, createMemo, onCleanup } from "solid-js";
import Counter from "./components/Counter";
import ConsumeAPI from "./components/ConsumeApi";

function App() {
  const [counter, setCount] = createSignal(0);
  const increment = () => setCount((current) => current + 1);

  return (
    <div class={styles.App}>
      <h1 class={styles.title}>Hello World</h1>

      <section>
        <Counter counter={counter()} increment={increment} />
      </section>
      <section>
        <ConsumeAPI />
      </section>
    </div>
  );
}

export default App;
