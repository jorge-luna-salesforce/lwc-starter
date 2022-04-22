import { track, api, LightningElement } from "lwc";

export default class InterComponentPocTarget extends LightningElement {
  @api simpleParameterName;

  @track
  data = [
    {
      id: 1,
      value: ""
    },
    {
      id: 2,
      value: ""
    },
    {
      id: 3,
      value: ""
    },
    {
      id: 4,
      value: ""
    }
  ];

  handleDropItem = (event) => {
    event.preventDefault();
    const dataReceived = JSON.parse(
      event.dataTransfer.getData("application/json")
    );
    console.log(`DROP RECEIVED! data items received:`, dataReceived);
    let toModify = this.data.find((x) => x.id === event.currentTarget.value);
    if (toModify) {
      toModify.name = dataReceived.name;
      toModify.picture = dataReceived.picture;
      toModify.value = true;
      this.dispatchEvent(
        new CustomEvent("elementreceived", { detail: dataReceived.id })
      );
    }
  };

  handleDragOver = (event) => {
    event.preventDefault();
  };

  handleDragEnter = (event) => {
    event.preventDefault();
  };

  @api
  removeElement = (source) => {
    this.data.forEach((x) => {
      if (x.name === source) {
        x.name = "";
        x.picture = "";
        x.value = false;
      }
      //x.value = false;
    });
  };
}
