class ImgDefinitionScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);

    this.sliders = [
      new Slider({x: 75, y: 50 } , 190, "images/light-up.svg", updateBrightness, 25, 200, 'a'),
      new Slider({x: 75, y: 125} , 190, "images/contrast.svg", updateContrast, 25, 175, 'b'),
      new Slider({x: 75, y: 200 }, 190, "images/stopwatch.svg", updateTimeout, 0, 10, 'c')
    ]

    for (let i = 0; i < this.sliders.length; i++) {
      this.node.appendChild(getHTML(this.sliders[i]));
    }

    this.display();

    this.updateBrightness();
    this.updateContrast();
    this.updateTimeout();

    document.getElementById("slidera").oninput = function() { updateBrightness(this.value) }
    document.getElementById("slidera").value = picture_brightness
    document.getElementById("sliderb").oninput = function() { updateContrast(this.value) }
    document.getElementById("sliderb").value = picture_contrast
    document.getElementById("sliderc").oninput = function() { updateTimeout(this.value) }
    document.getElementById("sliderc").value = picture_timeout
	}

  updateBrightness() {
    document.getElementById("slider_value_a").innerHTML = picture_brightness;
  }

  updateContrast() {
    document.getElementById("slider_value_b").innerHTML = picture_contrast;
  }

  updateTimeout() {
    document.getElementById("slider_value_c").innerHTML = picture_timeout;
  }
}

class Slider extends Element
{
  constructor(position, width, img_src, handler, min, max, id) {
    super()
    this.handler = handler;

    this.element.class = "slidecontainer"
    this.element.style.width = width+"px"
    this.element.style.marginLeft = position.x+'px';
    this.element.style.marginTop = position.y+'px';

    this.img = document.createElement("img");
    this.img.id = img_src;
    this.img.src = img_src;
    this.img.style.width = "30px";
    this.img.style.height = "30px";
    this.img.style.marginLeft = position.x-30-width/2+'px'
    this.element.appendChild(this.img);

    this.slider = document.createElement("input");
    this.slider.setAttribute("class", "slider")
    this.slider.id =  "slider" + id
    this.slider.type  = "range"
    this.slider.min   = "" + min
    this.slider.max   = "" + max
    this.element.appendChild(this.slider);

    this.element.appendChild(getHTML(new SliderValue(20, 250-position.x, id)))
  }
}


class SliderValue extends Element {
  constructor(size, marginLeft, id) {
    super()
    this.element.style.marginTop = "-25px";
    this.element.style.marginLeft = marginLeft+"px";
    this.element.style.width = "40px";
    this.element.style.textAlign = "right";

    this.txt = document.createElement("strong");
    this.txt.id = "slider_value_"+id;
    this.txt.style.fontSize = size+"px";
    this.element.appendChild(this.txt);
  }
}
