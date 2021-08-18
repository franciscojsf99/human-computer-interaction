class NFCScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.icons = [
      new Icon({x: '130px', y: '190px'}, 40, "images/nfc.png", "shareNFC")  // main.js
    ];

    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.message = new Message("Are you sure you want to share to nearby devices?", 30, 75);
    this.node.appendChild(getHTML(this.message));

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.display();
	}

  shareNFC() {
    console.log("Share to NFC")
    return this;
  }

  update() { this.bar.update(); }
}
