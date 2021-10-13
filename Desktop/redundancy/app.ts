class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  numberInput: HTMLInputElement;
  currencyIn: HTMLSelectElement;
  currencyOut: HTMLSelectElement;
  currOut: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.numberInput = this.element.querySelector(
      "#numInput"
    ) as HTMLInputElement;
    this.currencyIn = this.element.querySelector(
      "in-amount"
    ) as HTMLSelectElement;
    this.currencyOut = this.element.querySelector(
      "out-amount"
    ) as HTMLSelectElement;

    this.currOut = this.element.querySelector("numOut") as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
  }
  private configure() {
    this.element.addEventListener("submit", this.conv.bind(this));
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private conv(event: Event) {
    const select1 = document.getElementById("currencyIn") as HTMLSelectElement;
    const from = select1.value;
    const select2 = document.getElementById("currencyOut") as HTMLSelectElement;
    const to = select2.value;
    const rateEl = document.getElementById("rate");

    /*const app=document.getElementById("app");
    const p=document.createElement('p');
    app?.appendChild(p);*/
    /* let result=+this.numberInput.value * USD;
      p.textContent= "€ " + result.toString();*/
    //p.remove();

    if (from === "USD" && to === "EUR") {
      const USD = 0.85;

      console.log(+this.numberInput.value * USD);
    } else if (from === "USD" && to === "YEN") {
      const USD = 109.39;
      console.log(+this.numberInput.value * USD);
    } else if (from === "USD" && to === "GBP") {
      const USD = 0.72;
      console.log(+this.numberInput.value * USD);
    } else if (from === "EUR" && to === "USD") {
      const EUR = 1.18;
      console.log(+this.numberInput.value * EUR);
    } else if (from === "EUR" && to === "YEN") {
      const EUR = 128.89;
      console.log(+this.numberInput.value * EUR);
    } else if (from === "EUR" && to === "GBP") {
      const EUR = 0.85;
      console.log(+this.numberInput.value * EUR);
    } else if (from === "YEN" && to === "USD") {
      const YEN = 0.0091;
      console.log(+this.numberInput.value * YEN);
    } else if (from === "YEN" && to === "EUR") {
      const YEN = 0.0078;
      console.log(+this.numberInput.value * YEN);
    } else if (from === "YEN" && to === "GBP") {
      const YEN = 0.0066;
      console.log(+this.numberInput.value * YEN);
    } else if (from === "YEN" && to === "YEN") {
      console.log(+this.numberInput.value);
    } else if (from === "USD" && to === "USD") {
      console.log(+this.numberInput.value);
    } else if (from === "GBP" && to === "GBP") {
      console.log(+this.numberInput.value);
    } else if (from === "EUR" && to === "EUR") {
      console.log(+this.numberInput.value);
    }
  }
}
const prjInput = new ProjectInput();
