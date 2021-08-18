class PointsOfInterestScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.icons = [
      new CaptionIcon({x:'35px', y:'60px'}, 80, "images/museum.png", "toggleMuseum", "Museum"),
      new CaptionIcon({x:'35px', y:'165px'}, 80, "images/hotel.png", "toggleHotel", "Hotel"),
      new CaptionIcon({x:'185px', y:'60px'}, 80, "images/restaurant.png", "toggleRestaurant", "Restaurant"),
      new CaptionIcon({x:'185px', y:'165px'}, 80, "images/map-pin.svg", "toggleAll", "All")
    ];

    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

    this.node.appendChild(getHTML(new Message("      Points of Interest", 20, 20)));
    this.display();
	}
}
