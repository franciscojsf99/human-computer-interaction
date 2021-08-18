class ImageScreen extends Screen
{
	constructor(parentScreen, index) {
		super(parentScreen);

    this.node.id = ""
    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.imgManager = this.parentScreen.imgManager;
    this.picture = new Picture(this.imgManager, index);

    this.node.appendChild(getHTML(this.picture));

    this.icons = [
      new Icon({x:'10px', y:'130px'}, 30, "images/left.svg", "goLeftImage"), // main.js //go to left image
      new Icon({x:'260px', y:'130px'}, 30, "images/right.svg", "goRightImage"), // main.js //go to right image
      new Icon({x:'15px', y:'265px'}, 20, "images/trash.svg", "launchDeleteImageScreen"), // main.js
      new Icon({x:'130px', y:'255px'}, 40, "images/share.svg", "launchShareScreen"), // main.js
      new Icon({x:'265px', y:'265px'}, 20, "images/nfc.png", "launchNFCScreen")  // main.js
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.hasBeenDeletedImg = false;
		this.display();

    this.showLeftRightButtonCorrectly();
	}

  display() {
    super.display();

    if (this.hasBeenDeletedImg && this.imgManager.size() === 0) { // necessarily like this in case you lock and unlock
    	let pic = document.getElementById("picture");
    	pic.style.display = "none";
    	pic.parentNode.appendChild(getHTML(new Message("No pictures stored on this device.", 30, 100)));

	    document.getElementById("images/trash.svg").style.display = "none";
	    document.getElementById("images/share.svg").style.display = "none";
	    document.getElementById("images/nfc.png").style.display = "none";
    }
    else if (this.hasBeenDeletedImg) {
      this.showRightImage();
      this.showLeftImage();
      if (this.imgManager.hasLastImageBeenDeleted()) this.showRightImage();
    }
    this.hasBeenDeletedImg = false;
    this.showLeftRightButtonCorrectly();
  }

  goBack() {
  	if (this.imgManager.size() === 0)
  		return this.goHome();
  	else
  		return super.goBack();
  }

  showRightImage() {
    document.getElementById("picture").src = this.imgManager.goToNextImage();
    this.showLeftRightButtonCorrectly();
  }

  showLeftImage() {
    document.getElementById("picture").src = this.imgManager.goToPrevImage();
    this.showLeftRightButtonCorrectly();
  }

  deleteImage() {
    this.imgManager.deleteImage();
    this.hasBeenDeletedImg = true;
    this.parentScreen.hasBeenDeletedImg = true;
  }

  showLeftRightButtonCorrectly() {
  	if ( this.imgManager.hasPrevImage() )
  		document.getElementById("images/left.svg").style.display = "";
  	else
      document.getElementById("images/left.svg").style.display = "none";

    if ( this.imgManager.hasNextImage() )
    	document.getElementById("images/right.svg").style.display = "";
    else
      document.getElementById("images/right.svg").style.display = "none";
  }
}

class Picture extends Element
{
  constructor(imgManager, index) {
    super()
    this.element.class = "img_frame";
    this.element.id = "img_frame";
    this.element.style.marginTop = "20px";
    this.element.style.height = "230px";

    this.imgManager = imgManager;

    let img = document.createElement("img");
    img.id = "picture";
    img.src = this.imgManager.goToImage(index);
    img.style.width = 300+"px";
    img.style.height = 235+"px";
    img.style.objectFit = "contain";

    this.element.appendChild(img);
  }
}
