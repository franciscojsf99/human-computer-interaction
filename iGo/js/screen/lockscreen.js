class LockScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);

    this.time = new LockTime();
    this.bpm = new LockBpm();
		this.node.appendChild( getHTML(this.time) );
		this.node.appendChild( getHTML(this.bpm) );

		this.display();
	}

  lock() { return this; }

  unlock() {
    if (this.parentScreen == null)
    	return this.gotoNew(new HomeScreen(this));
    else
      return this.parentScreen.removeChild();
  }

  update() {
    this.time.update();
    this.bpm.update();
  }

  goBack() { return this; }
  goHome() { return this.unlock(); }
}

class LockTime extends Element
{
	constructor() {
		super();
		this.element.style.marginTop = "95px";

    this.time = new iGoTime();

		this.HTMLtime = document.createElement("strong");
    this.HTMLtime.id = "lock_time";
		this.HTMLtime.style.fontSize = "80px";
    this.HTMLtime.innerHTML = this.time.update();
    this.element.appendChild(this.HTMLtime);
	}

  update() {
    document.getElementById("lock_time").innerHTML = this.time.update();
  }
}

class LockBpm extends Element
{
	constructor() {
		super();
		this.element.style.marginTop = "270px";

		this.heart = document.createElement("img");
		this.heart.src = "images/bpm.png";
		this.heart.style.width = "20px";

    this.count = Math.floor((Math.random() * 100) + 50);
		this.bpm = document.createElement("strong");
		//this.bpm.style.color = "#ee2222";
		this.bpm.innerHTML = "  "+this.count+" bpm";

    this.element.appendChild(this.heart);
    this.element.appendChild(this.bpm);
	}

  update() {
    this.count += Math.floor((Math.random() * 10) - 5);
		this.bpm.innerHTML = "  "+this.count+" bpm";
  }
}
