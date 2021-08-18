class GalleryScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.imgManager = imgManager;
    this.pictable = null

    if (this.imgManager.size() > 0) {
      this.node.appendChild(getHTML((this.pictable = new PicsTable(115, this.imgManager.getAllImages(), "launchImageScreen"))));

      this.icons = [
        new Icon({x:'130px', y:'255px'}, 40, "images/images.svg", "launchMultipleSelectionScreen") // main.js
      ];

      for (let i = 0; i < this.icons.length; i++)
        this.node.appendChild(getHTML(this.icons[i]));
    }
    else
      this.node.appendChild(getHTML(new Message("No pictures stored on this device.", 30, 1009)));

    this.hasBeenDeletedImg = false;
		this.display();
	}

  getOffset() {
    return this.pictable.table.scrollLeft
  }

  display() {
    super.display()
    if (this.hasBeenDeletedImg ) {
      let grid = document.getElementById("table_pics")
      let box = grid.parentNode;
      box.removeChild(grid);
      this.hasBeenDeletedImg = false;
      if (this.imgManager.size() === 0) {
        box.appendChild(getHTML(new Message("No pictures stored on this device.", 30, 100)));
        this.hideAllButtons();
      } else {
        box.appendChild(getHTML((this.pictable = new PicsTable(115, this.imgManager.getAllImages(), "launchImageScreen"))));
      }
    }
  }

  hideAllButtons() {
    document.getElementById("images/images.svg").style.display = "none";
  }
}

class PicsTable extends Element
{
  constructor(img_size, pic_list, img_func) {
    super();
    this.element.id = "table_pics";
    this.element.style.height = 22+(img_size*2)+"px";
    this.element.style.marginTop = "20px";
    this.element.style.overflowX = "scroll";

    this.table = document.createElement("table");
    this.table.align = "left";

    let j = 0;
    for (let i = 1; i < 3; i++) {
      let trow = this.table.insertRow(-1);
      //for (; j < i*pic_list.length/2; j++) { // [ [0,1,2,3,4,5], [6,7,8,9,10] ]
      for (; j < pic_list.length; j+=2) { // [ [0,2,4,6,8,10], [1,3,5,7,9] ]
        let tdata = trow.insertCell(-1);
        let img = document.createElement("img");
        img.id = pic_list[j]+j;
        img.src = pic_list[j];
        img.setAttribute('onclick', img_func+'('+j+')');
        img.style.objectFit = "cover"; // can also be done with div wrapper and overflow:hidden
        img.style.width = img_size+"px";
        img.style.height = img_size+"px";
        tdata.innerHTML = img.outerHTML;
      }
      j=1;
    }
    this.element.appendChild(this.table);
  }

}
