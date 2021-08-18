class Description extends Element {
	constructor(msg, fontSize) {
		super()
    this.element.style.marginTop = "0px";
    this.element.style.textAlign = "center";
    this.element.style.width = "250px";
    this.element.style.height = fontSize * 2 + "px";
    this.element.style.border = "4px white groove";

    this.para = document.createElement("p");
    this.para.style.marginTop = fontSize + "px";

    this.txt = document.createElement("strong");
    this.txt.style.fontSize = fontSize+"px";
    this.txt.innerHTML = msg;

    this.para.appendChild(this.txt);
    this.element.appendChild(this.para);
	}

  message() { return this.txt.innerHTML; }
}
