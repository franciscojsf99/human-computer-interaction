class Icon extends Element
{
  constructor(position, size, img_src, click_func) {
    super();
    this.element.style.width =size+"px"
    this.element.style.height =size+"px"

    this.element.style.marginLeft = position.x;
    this.element.style.marginTop = position.y;

    this.img = document.createElement("img");
    this.img.id = img_src;
    this.img.src = img_src;
    this.img.style.width = size+"px";
    this.img.style.height = size+"px";
    this.img.setAttribute('onclick', click_func+'()');
    this.element.appendChild(this.img);
  }
}

class CaptionIcon extends Icon
{
  constructor(position, size, img_src, click_func, caption) {
    super(position, size, img_src, click_func);

    this.caption = document.createElement("b");
    this.caption.style.fontSize = "14px";
    this.caption.innerHTML = caption;

    this.element.appendChild(this.caption);
  }
}
