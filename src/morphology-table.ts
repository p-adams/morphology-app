import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

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
      grid-template-columns: 10% auto auto auto;
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
  root: String = "فعل";
  tense: "past" | "present" | "future" = "past";
  render() {
    return html`<div class="table-container">
      <div class="table-header">
        <h3>Morphology Table</h3>
        <!-- implement language toggle -->
        <button>Lang</button>
      </div>
      <div class="table">
        <div class="cell-header">person & gender</div>
        <div class="cell-header">plural</div>
        <div class="cell-header">dual</div>
        <div class="cell-header">singular</div>
        <div class="cell-row">third > masculine</div>
        <div class="cell-row">فعلوا</div>
        <div class="cell-row">فعلا</div>
        <div class="cell-row">فعل</div>
        <div class="cell-row">third > feminine</div>
        <div class="cell-row">فعلن</div>
        <div class="cell-row">فعلتا</div>
        <div class="cell-row">فعلت</div>
        <div class="cell-row">second > masculine</div>
        <div class="cell-row">فعلتم</div>
        <div class="cell-row">فعلتما</div>
        <div class="cell-row">فعلت</div>
        <div class="cell-row">second > feminine</div>
        <div class="cell-row">فعلتن</div>
        <div class="cell-row">فعلتما</div>
        <div class="cell-row">فعلت</div>
        <div class="cell-row">first > masculine & feminine</div>
        <div class="cell-row">فعلنا</div>
        <div class="cell-row"></div>
        <div class="cell-row">فعلت</div>
      </div>
    </div>`;
  }
}
