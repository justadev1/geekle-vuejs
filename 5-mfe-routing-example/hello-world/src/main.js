import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app');

class VueJSMfe extends HTMLElement {
  constructor() {
    super();
    this.app = createApp(App);
  }

  connectedCallback() {
    this.app.mount(this);
  }

  disconnectedCallback() {
    this.app.unmount(this);
  }
}

window.customElements.define("hello-world", VueJSMfe);
