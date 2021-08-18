var deviceName = [
  "Drone_Ines",
  "Gopro_Francisco",
  "Phone_Joao",
  "ExternalCamera1",
  "ExternalCamera2",
  "ExternalCamera3",
  "ExternalCamera4"
]

class SyncCameraScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.icons = [
      new Icon({x:'130px', y:'240px'}, 40, "images/magnifying-glass.svg", "searchDevices") // search
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.node.appendChild(getHTML(new Message("Sync", 25, 15)));

    this.noDevice = new Message("No Devices", 40,125);
    this.noDevice.element.id = "nodevice";
    this.node.appendChild(getHTML(this.noDevice));

    this.display();
	}

  searchDevices() {
    let nod = document.getElementById("nodevice");
    if (nod != null) nod.parentNode.removeChild(nod);

    let td = document.getElementById("table_devie");
    if (td != null) td.parentNode.removeChild(td);

    document.getElementById("screen_frame").appendChild(getHTML(new LoadindSymbol({x:"105px", y:"110px"}, 80)))

    setTimeout( function() {
      screen.showSearchResults();
    }, 1500)
  }

  showSearchResults() {
    let load = document.getElementById("loadindSymbol");
    load.parentNode.removeChild(load);
    document.getElementById("screen_frame").appendChild(getHTML(new DevicesTable(deviceName, "launchCameraScreen")));
  }

}

class LoadindSymbol extends Element
{
  constructor(position, size) {
    super();
    this.element.style.width =size+"px"
    this.element.style.height =size+"px"

    this.element.style.marginLeft = position.x;
    this.element.style.marginTop = position.y;

    this.img = document.createElement("img");
    this.img.id = "loadindSymbol";
    this.img.src = "images/loading.gif";
    this.img.style.width = size+"px";
    this.img.style.height = size+"px";
    this.element.appendChild(this.img);
  }
}

class DevicesTable extends Element
{
  constructor(list, func) {
    super();
    this.element.id = "table_devie";
    this.element.style.height = "180px";
    this.element.style.marginTop = "50px";
    this.element.style.overflowY = "scroll";

    this.table = document.createElement("table");
    this.table.align = "center";

    let device_list = [];
    for (let i = 0; i < list.length; i++) {
      device_list.push(new Device(list[i], 15))
    }

    for (let i = 0; i < device_list.length; i++) {
      let trow = this.table.insertRow(-1);
      trow.style.width = "250px";
      trow.style.height = 15*3+"px";
      let tdata = trow.insertCell(-1);
      tdata.style.width = "250px";
      tdata.style.height = 15*3+"px";
      device_list[i].element.setAttribute('onclick', func+'()');
      tdata.innerHTML = device_list[i].element.outerHTML;
    }
    this.element.appendChild(this.table);
  }

}

class Device extends Element {
  constructor(msg, fontSize) {
    super()
    this.element.style.marginTop = "0px";
    this.element.style.textAlign = "center";
    this.element.style.width = "250px";
    this.element.style.height = fontSize * 2 + "px";
    this.element.style.border = "4px white groove";

    this.para = document.createElement("p");
    this.para.style.marginTop = fontSize + "px";

    this.txt = document.createElement("strong");
    this.txt.style.fontSize = fontSize+"px";
    this.txt.innerHTML = msg;

    this.para.appendChild(this.txt);
    this.element.appendChild(this.para);
  }

  message() { return this.txt.innerHTML; }
}
