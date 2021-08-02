import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tense } from "./datatypes/types";
import { producePastTenseConjugationsFromRoot } from "./helpers/verbs";
@customElement("morphology-table")
export class MorphologyTable extends LitElement {
  static styles = css`
    .table-header {
      display: flex;
      justify-content: space-between;
      margin: 0 0 10px 0;
    }
    .table {
      display: grid;
      grid-template-columns: auto auto auto;
    }
    .cell-header,
    .cell-row {
      padding: 10px;
      border: 1px solid lightgray;
      text-align: center;
      word-wrap: break-all;
    }
  `;
  @property()
  root: string = "فعل";
  tense: tense = "past";

  verbRowsTemplate(root: string) {
    return producePastTenseConjugationsFromRoot(root).map(
      (v) => html`<div class="cell-row">${v}</div>`
    );
  }

  render() {
    return html`<div class="table-container">
      <div class="table-header">
        <h3>Morphology Table</h3>
        <!-- implement language toggle -->
        <button>Lang</button>
      </div>
      <div class="table">
        <div class="cell-header">plural</div>
        <div class="cell-header">dual</div>
        <div class="cell-header">singular</div>
        ${this.verbRowsTemplate(this.root)}
      </div>
    </div>`;
  }
}
