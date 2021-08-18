class StatsHotelScreen extends Screen
{
	constructor(parentScreen, idx) {
		super(parentScreen);

    let value = [
      {
        'name': "Ritz",
        'img_src': "images/ritz.jpg"
      },
      {
        'name': "Four Seasons",
        'img_src': "images/4seasons.jpg"
      }
    ]

    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.icons = [
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.node.appendChild(getHTML(new Message(value[idx].name, 20, 20)));

    this.img = document.createElement("img");
    this.img.src = value[idx].img_src;
    this.img.style.width = 300+"px";
    this.img.style.height = 150+"px";
    this.img.style.marginTop = "75px";
    this.img.style.objectFit = "contain";

    this.node.appendChild(this.img);

    this.gothere = document.createElement("button");

    this.gothere.style.marginTop = "15px";
    this.gothere.innerHTML = "Go There! (1km)";

    this.gothere.setAttribute("onclick", "makeroute");

    this.node.appendChild(this.gothere);

    this.display();
	}
}
