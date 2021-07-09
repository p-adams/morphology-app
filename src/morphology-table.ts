import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("morphology-table")
export class MorphologyTable extends LitElement {
  @property()
  root: String = "فعل";
  tense: "past" | "present" | "future" = "past";
  render() {
    return html`<div>morphology table</div>`;
  }
}
