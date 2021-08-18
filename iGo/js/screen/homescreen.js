class HomeScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);

    this.icons = [
      new CaptionIcon({x: '25px', y: '60px'}, 80, "images/gallery.svg", "launchApp1", "Gallery"), // main.js
      new CaptionIcon({x: '110px', y: '155px'}, 80, "images/map-pin.svg", "launchApp3", "Map"), // main.js
      new CaptionIcon({x: '195px', y: '60px'}, 80, "images/camera.svg", "launchApp2", "Capture")  // main.js
      //new Icon({x: '25px', y: '225px'}, 50, "images/definitions.svg", "unimplemented")  // main.js
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));


    this.bar = new TopBar();
    this.node.appendChild(getHTML(this.bar));
		this.display();
	}

  lock() {
    return this.parentScreen.removeChild();
  }

  goHome() { return this; }
  goBack() { return this; }
}

class TopBar extends Element
{
  constructor() {
    super();
    this.element.style.position = "absolute";
    this.element.style.marginTop = "3px";
    this.element.style.width = "300px";
    this.element.style.height = "20px";

    this.time = new TopBarTime();
    this.bpm = new TopBarBpm(Math.floor(Math.random() * 50) + 80);
    this.element.appendChild(getHTML(this.time));
    this.element.appendChild(getHTML(this.bpm));
  }

  update() {
    this.time.update();
    this.bpm.update();
  }
}

class TopBarTime extends Element
{
  constructor() {
    super();
    this.element.style.position = "absolute";
    this.element.style.marginLeft = "243px";
    this.element.style.width = "40px";
		this.element.style.textAlign = "right";

    this.time = new iGoTime();

    this.HTMLtime = document.createElement("strong");
    this.HTMLtime.id = "bar_time";
    this.HTMLtime.style.fontSize = "13px";
    this.HTMLtime.innerHTML = this.time.update();

    this.element.appendChild(this.HTMLtime);
  }

  update() {
    document.getElementById("bar_time").innerHTML = this.time.update();
  }
}

class TopBarBpm extends Element
{
	constructor(bpm) {
		super();
		this.element.style.position = "absolute";
    this.element.style.marginLeft = "18px";
    this.element.style.width = "80px";
		this.element.style.textAlign = "left";

    this.val = bpm;

		this.bpm = document.createElement("strong");
    this.bpm.style.fontSize = "13px";
    this.bpm.innerHTML = bpm + " bpm";

    this.element.appendChild(this.bpm);
	}

  update() {
		this.bpm.innerHTML = this.val+" bpm";
  }
}
