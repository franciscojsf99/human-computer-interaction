function getHTML(element) { return element.getElementHTML(); }

class Element { // contains html element but you need to return the html element not the object itself;
	constructor() {
		this.element = document.createElement("div");
		this.element.style.position = "absolute";
    this.element.style.width = "100%";
	}
	
	getElementHTML() {
		return this.element;
	}

  update() {}
}
