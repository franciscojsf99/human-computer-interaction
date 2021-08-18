const descriptions = [
  "So great!",
  "Enjoying my holiday",
  "Little by little",
  "Namastay at home!",
  "Be a nice human",
  "Living La Vida Loca"
];

const fontSize = 15;

class DescriptionScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.descList = [];
    for (let i = 0; i < descriptions.length; i++)
      this.descList.push(new Description(descriptions[i], fontSize));

    this.descTable = new DescriptionTable(this.descList, "addDescription");
    this.node.appendChild(getHTML(this.descTable));

    document.getElementById("screen_frame").innerHTML = this.node.outerHTML;
	}

  addDescription(index) {Description
    this.parentScreen.addDescription(descriptions[index]);
    return this.goBack();
  }
}


class DescriptionTable extends Element
{
  constructor(list, func) {
    super();
    this.element.id = "table_descript";
    this.element.style.height = "250px";
    this.element.style.marginTop = "20px";
    this.element.style.overflowY = "scroll";

    this.table = document.createElement("table");
    this.table.align = "center";

    let i = 0;
    for (let i = 0; i < list.length; i++) {
      let trow = this.table.insertRow(-1);
      trow.style.width = "250px";
      trow.style.height = fontSize*3+"px";
      let tdata = trow.insertCell(-1);
      tdata.style.width = "250px";
      tdata.style.height = fontSize*3+"px";
      list[i].element.setAttribute('onclick', func+'(\"'+list[i].message()+'\")');
      tdata.innerHTML = list[i].element.outerHTML;
    }
    this.element.appendChild(this.table);
  }

}
