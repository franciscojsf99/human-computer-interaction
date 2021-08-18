class ActionCompletedScreen extends Screen
{
	constructor(parentScreen, msg, marginTop, goBackTimes) {
  	super(parentScreen);

    this.goBackTimes = goBackTimes;

    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.node.setAttribute("onclick", "goBackButton("+goBackTimes+")");
    this.node.appendChild(getHTML(new Message(msg, 30, marginTop)));

  	this.display();
  }
  update() { this.bar.update(); }
}
