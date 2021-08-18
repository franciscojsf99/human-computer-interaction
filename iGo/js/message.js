class Message extends Element {
	constructor(msg, size, marginTop) {
		super()
    this.element.style.marginTop = marginTop+"px";
    this.element.style.marginLeft = "15px";
    this.element.style.width = "270px";
    this.element.style.textAlign = "center";

    this.txt = document.createElement("strong");
    this.txt.style.fontSize = size+"px";
    this.txt.innerHTML = msg;
    this.element.appendChild(this.txt);
	}
}
