import styles from "../App.module.css";
import { createMemo, onCleanup } from "solid-js";

const Counter = (props) => {
    const timmer = setInterval(props.increment, 1000);
    onCleanup(() => clearInterval(timmer));
  
    const text = createMemo(() =>
        props.counter % 2 === 0 ? "Number is par" : "Number not par"
    );

    return (
      <>
        <h2>My counter is: {props.counter}</h2>
  
        <p>{text}</p>
        <button class={styles.button} onClick={props.increment}>
          Increment
        </button>
      </>
    );
  };

  export default Counter;