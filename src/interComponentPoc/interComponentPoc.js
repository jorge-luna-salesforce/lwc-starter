import { api, track, LightningElement } from "lwc";

export default class InterComponentPoc extends LightningElement {
  @api simpleParameterName;

  @track
  data = [
    {
      id: 1,
      name: "Panther 1",
      picture: "https://i.gifer.com/2ESB.gif",
      draggable: true
    },
    {
      id: 2,
      name: "Bear 2",
      picture: "https://i.gifer.com/4MY9.gif",
      draggable: true
    },
    {
      id: 3,
      name: "Dog 3",
      picture: "https://i.gifer.com/fxTX.gif",
      draggable: true
    },
    {
      id: 4,
      name: "Lion 4",
      picture: "https://i.gifer.com/4M1O.gif",
      draggable: true
    }
  ];

  internalElementsTransfered = [];

  @api
  setElementTransfered(elementId) {
    this.internalElementsTransfered.push(elementId);
    this.data.forEach((element) => {
      element.draggable = !this.internalElementsTransfered.includes(element.id);
    });
  }

  handleDragStart = (event) => {
    const toTransfer = this.data.find((x) => x.id == event.toElement.value);
    console.log("DRAG STARTED!", toTransfer);
    event.dataTransfer.setData("application/json", JSON.stringify(toTransfer));
  };

  handleDeleteEvent = (event) => {
    this.internalElementsTransfered = [
      ...this.internalElementsTransfered.filter((x) => x !== event.detail)
    ];

    this.data.forEach((element) => {
      element.draggable = !this.internalElementsTransfered.includes(element.id);
    });

    const itemToDelete = { ...this.data.find((x) => x.id === event.detail) };
    this.dispatchEvent(
      new CustomEvent("deleteitem", {
        detail: itemToDelete.name
      })
    );
  };
}
