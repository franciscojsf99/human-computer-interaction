class AddShareInfoScreen extends Screen
{
	constructor(parentScreen, site) {
		super(parentScreen);
    this.icons = [
      new CaptionIcon({x: '40px', y: '60px'}, 80, "images/add-location.png", "addLocation", "Location"), // main.js
      new CaptionIcon({x: '180px', y: '60px'}, 80, "images/text.svg", "launchDescriptionScreen", "Description"), // main.js
      new CaptionIcon({x: '110px', y: '160px'}, 80, "images/share.svg", "shareToSite", "Share"), // main.js
    ];


    this.site = site;
    this.bar = this.getBar();

    this.description = null;

    this.node.appendChild(getHTML(this.bar));
    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.hasLocation = false;

		this.display();
	}

  addLocation() {

    let img = document.getElementById("images/add-location.png");

    img.src = "images/remove-location.png";
    img.setAttribute("onclick", "removeLocation()");
  }

  removeLocation() {
    let img = document.getElementById("images/add-location.png");
    img.src = "images/add-location.png";
    img.setAttribute("onclick", "addLocation()");
  }

  addDescription(msg) {
    this.description = msg
    // TODO
  }

  remDescription() {
    this.description = null;
    // TODO
  }

  getSite() { return this.site; }
  shareWithInfo() {
    console.log("Shared");
    return this;
  }

  update() { this.bar.update(); }
}
