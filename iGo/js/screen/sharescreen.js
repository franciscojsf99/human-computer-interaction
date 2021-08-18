class ShareScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);
    this.icons = [
      new CaptionIcon({x: '40px', y: '50px'}, 80, "images/myweb.svg", "shareToMyWeb", "Myweb"), // main.js
      new CaptionIcon({x: '40px', y: '160px'}, 80, "images/facebook.svg", "shareToFacebook", "Facebook"), // main.js
      new CaptionIcon({x: '180px', y: '50px'}, 80, "images/twitter.svg", "shareToTwitter", "Twitter"), // main.js
      new CaptionIcon({x: '180px', y: '160px'}, 80, "images/instagram.svg", "shareToInstagram", "Instagram")  // main.js
    ];

    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));
    for (let i = 0; i < this.icons.length; i++)
      this.node.appendChild(getHTML(this.icons[i]));

		this.display();
	}

  shareToMyWeb() {
    return this.gotoNew(new AddShareInfoScreen(screen, "MyWeb"));
  }

  shareToTwitter() {
    return this.gotoNew(new AddShareInfoScreen(screen, "Twitter"));
  }

  shareToFacebook() {
    return this.gotoNew(new AddShareInfoScreen(screen, "Facebook"));
  }

  shareToInstagram() {
    return this.gotoNew(new AddShareInfoScreen(screen, "Instagram"));
  }

  update() { this.bar.update(); }
}
