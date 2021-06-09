import { createApp } from "vue";
import App from "./App.vue";

class VueJSMfe extends HTMLElement {
  constructor() {
    super();
    this.app = createApp(App);
  }

  connectedCallback() {
    this.app.mount(this);
  }

  disconnectCallback() {
    this.app.unmount(this);
  }
}
window.customElements.define("hello-world", VueJSMfe);
