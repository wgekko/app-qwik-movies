import { component$ } from "@builder.io/qwik";

import styles from "./footer.module.css";

export default component$(() => {
  

  return (
    <footer>
      <div class="container">
        <a href="#" target="_blank" class={styles.anchor}>
          <span>Made by Walter Gomez - FullStack-Developer</span>
          <span class={styles.spacer}>|</span>          
        </a>
      </div>
    </footer>
  );
});
