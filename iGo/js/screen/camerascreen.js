class CameraScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.imgManager = imgManager;

    this.timeMsg;

    this.picture = new CaptureImage();
    this.node.appendChild(getHTML(this.picture));

    this.icons = [
      new Icon({x:'30px', y:'250px'}, 30,  "images/gallery.svg", "launchApp1"),      // go to gallery
      new Icon({x:'130px', y:'240px'}, 40, "images/circle.svg", "capture"),          // capture
      new Icon({x:'240px', y:'250px'}, 30, "images/sound-mix.svg", "launchImgDefinitionScreen"), // definitions
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.display();
	}

  update() {
    super.update();
    this.updateImage();
  }

  updateImage() {
    this.picture.brightness = picture_brightness;
    this.picture.contrast = picture_contrast;
    this.picture.updateFilter();
  }

  capture() {
    this.timing(picture_timeout);
  }

  timing(sec) {
    let timer = document.getElementById("timer");
    if ( timer!=null ) timer.parentNode.removeChild(timer);

    if (sec == 0) {
      this.imgManager.addImage(this.picture.getImg(), picture_brightness, picture_contrast);
      this.picture.capture();
    }
    else {
      let timer = new Message(sec, 175, 50);
      timer.element.id = "timer";
      document.getElementById("screen_frame").appendChild(getHTML(timer));
      setTimeout(function() {timing(--sec);}, 1000);
    }
  }

  goBack() {
    return this.parentScreen.goBack();
  }

  toggle() {
    this.picture.toggleShrink();
  }

}

function timing(sec) {screen.timing(sec);}

class CaptureImage extends Element
{
  constructor() {
    super();
    this.element.style.height = "100%";

    this.picture = document.createElement("img");

    this.picture.style.objectFit = "cover";
    this.picture.style.overflow = "hidden";
    this.picture.style.height = "300px";
    this.picture.style.width = "300px";
    this.picture.style.borderRadius = "25px";
    this.picture.src = "images/dogs11.png";
    this.picture.id = "capture";

    this.oldbrightness = 1000;
    this.brightness = 100;

    this.blur = 0;
    this.oldblur = 10;

    this.contrast = 100

    this.picture.style.filter =  "brightness("+this.brightness+"%) blur("+this.blur+"px) contrast("+this.contrast+"%)"

    this.element.appendChild(this.picture);

  }

  getImg() {
    return this.picture.src;
  }

  capture() {
    this.toggleShrink();
    setTimeout(toggleCaptureImage, 100);
  }

  toggleShrink() {
    var tmp = this.brightness;
    this.brightness = this.oldbrightness;
    this.oldbrightness = tmp;

    tmp = this.blur;
    this.blur = this.oldblur;
    this.oldblur = tmp;

    this.updateFilter();
  }

  updateFilter() {
    document.getElementById("capture").style.filter = "brightness("+this.brightness+"%) blur("+this.blur+"px) contrast("+this.contrast+"%)"
  }
}
