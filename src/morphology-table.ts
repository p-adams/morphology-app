import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("morphology-table")
export class MorphologyTable extends LitElement {
  static styles = css`
    .table-container {
      display: grid;
      grid-template-columns: 75px auto auto auto;
    }
    .cell-header {
      border: 1px solid lightgray;
      text-align: center;
    }
  `;
  @property()
  root: String = "فعل";
  tense: "past" | "present" | "future" = "past";
  render() {
    return html`<div class="table-container">
      <div class="cell-header empty"></div>
      <div class="cell-header">plural</div>
      <div class="cell-header">dual</div>
      <div
        class="
        cell-header"
      >
        singular
      </div>
    </div>`;
  }
}
