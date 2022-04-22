import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Interaction Between Components Test!";

  handleElementReceived = (event) => {
    const childSource = this.template.querySelector("c-inter-component-poc");
    childSource.setElementTransfered(event.detail);
  };

  handleDeleteItem = (event) => {
    console.log(event);
    const childTarget = this.template.querySelector(
      "c-inter-component-poc-target"
    );
    childTarget.removeElement(event.detail);
  };
}
