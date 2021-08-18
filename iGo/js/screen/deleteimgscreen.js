class DeleteImageScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.icons = [
      new Icon({x: '130px', y: '175px'}, 40, "images/trash.svg", "deleteImage")  // main.js
    ];

    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.message = new Message("Are you sure you want to delete?", 30, 95);
    this.node.appendChild(getHTML(this.message));

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.display();
	}

  deleteImage() {
    this.parentScreen.deleteImage();
    return this;
  }

  update() { this.bar.update(); }
}
