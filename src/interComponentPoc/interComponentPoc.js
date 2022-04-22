import { api, LightningElement } from "lwc";

export default class InterComponentPoc extends LightningElement {
  @api simpleParameterName;

  data = [
    {
      id: 1,
      name: "Panther 1",
      picture: "https://i.gifer.com/2ESB.gif"
    },
    {
      id: 2,
      name: "Bear 2",
      picture: "https://i.gifer.com/4MY9.gif"
    },
    {
      id: 3,
      name: "Dog 3",
      picture: "https://i.gifer.com/fxTX.gif"
    },
    {
      id: 4,
      name: "Lion 4",
      picture: "https://i.gifer.com/4M1O.gif"
    }
  ];

  handleDragStart = (event) => {
    const toTransfer = this.data.find((x) => x.id == event.toElement.value);
    console.log("DRAG STARTED!", toTransfer);
    event.dataTransfer.setData("application/json", JSON.stringify(toTransfer));
  };
}
