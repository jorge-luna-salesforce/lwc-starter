import { api, LightningElement } from "lwc";

export default class DeleteItemButton extends LightningElement {
  @api
  deleteitem;

  handleButtonClick = () => {
    this.dispatchEvent(
      new CustomEvent("deleteitem", { detail: this.deleteitem })
    );
  };
}
