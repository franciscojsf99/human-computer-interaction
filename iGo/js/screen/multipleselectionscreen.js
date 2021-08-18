class MultipleSelectionScreen extends Screen
{
	constructor(parentScreen, offset) {
		super(parentScreen);
    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.imgManager = this.parentScreen.imgManager;
    this.node.appendChild(getHTML((this.pictable = new PicsTable(115, this.imgManager.getAllImages(), "selectImg"))));
    this.pictable.element.scrollLeft += 10;


    this.icons = [
      new Icon({x:'15px', y:'265px'}, 20, "images/trash.svg", "launchDeleteImageScreen"), // main.js
      new Icon({x:'130px', y:'255px'}, 40, "images/share.svg", "launchShareScreen"), // main.js
      new Icon({x:'265px', y:'265px'}, 20, "images/nfc.png", "launchNFCScreen"),  // main.js
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.message = new Message("Select your pictures", 30, 265)
    this.message.txt.style.fontSize = "20px"
    this.message.txt.id = "show-message";
    this.node.appendChild(getHTML(this.message));
    this.imagesSelected = [];
    this.hasBeenDeletedImg = false;
		this.display();

    this.hideAllButtons();

	}

  display() {
    super.display();

    if (this.hasBeenDeletedImg ) {
      let grid = document.getElementById("table_pics")
      let box = grid.parentNode;
      box.removeChild(grid);
      this.hasBeenDeletedImg = false;
      if (this.imgManager.size() === 0) {
        box.appendChild(getHTML(new Message("No pictures stored on this device.", 30, 100)));
        this.hideAllButtons();
      } else {
        box.appendChild(getHTML(new PicsTable(115, this.imgManager.getAllImages(), "selectImg")));
        this.hideAllButtons();
        this.showMessage();
      }
    }
  }

  goBack() {
    if (this.imgManager.size() === 0)
      return super.goBack().goBack();

    return super.goBack();
  }

  imgSelected(index) {
    this.imagesSelected.push(index);

    let img = document.getElementById(this.imgManager.getImage(index)+index)
    img.setAttribute("onclick", "unselectImg("+index+")");
    img.style.width = "95px";
    img.style.height = "95px";
    img.style.margin = "10px";

    if (this.imagesSelected.length === 1) {
      this.hideMessage();
      this.showOptionsButtons();
    }
  }

  imgUnselected(index) {
    this.imagesSelected = this.imagesSelected.filter(item => item !== index);

    let img = document.getElementById(this.imgManager.getImage(index)+index);
    img.setAttribute("onclick", "selectImg("+index+")");
    img.style.width = "115px";
    img.style.height = "115px";

    img.style.margin = "0px";

    if (this.imagesSelected.length === 0) {
      this.hideAllButtons();
      this.showMessage();
    }
  }

  hideMessage() {
    document.getElementById("show-message").style.display = "none";
  }

  hideAllButtons() {
    document.getElementById("images/trash.svg").style.display = "none";
    document.getElementById("images/share.svg").style.display = "none";
    document.getElementById("images/nfc.png").style.display = "none";
  }

  showMessage() {
    document.getElementById("show-message").style.display = "";
  }

  showOptionsButtons() {
    document.getElementById("images/trash.svg").style.display = "";
    document.getElementById("images/share.svg").style.display = "";
    document.getElementById("images/nfc.png").style.display = "";
  }

  deleteImage() {
    this.imgManager.deleteImages(this.imagesSelected);
    this.hasBeenDeletedImg = true;
    this.parentScreen.hasBeenDeletedImg = true;
    this.imagesSelected = [];
  }
}
