class Screen
{
  constructor(parentScreen) {
    if ( parentScreen != null ) parentScreen.saveState();
    this.parentScreen = parentScreen;
    this.childScreen = null;
    this.node = document.createElement("div");
    this.node.class = "screen";

    // frame screen
    this.node.style.position = "absolute";
    this.node.style.width = "300px";
    this.node.style.height = "300px";
    this.node.style.borderRadius = "25px";

    this.notification = null;

    // topbar
    this.bar = null;
  }

  saveState() {
    this.node = document.getElementById("screen_frame").firstChild;
  }

  display() { // overides existing screen(this.bar)) in html
    document.getElementById("screen_frame").innerHTML = this.node.outerHTML;
  }

  goBack() {
    if (this.notification != null)
      return this.removeNotification()
    return this.parentScreen.removeChild();
  }

  goHome() {
    this.notification = null;
    this.parentScreen.removeChild();
    return this.parentScreen.goHome();
  }

  lock() {
    return this.gotoNew(new LockScreen(this));
  }

  gotoNew(childScreen) {
    this.notification = null;
    this.childScreen = childScreen;
    return childScreen;
  }

  removeChild() {
    this.childScreen = null;
    this.display();
    return this;
  }

  removeNotification() {
    if (this.notification != null) {
      this.notification.selfDestroy();
    }
    this.notification = null;
    return this;
  }

  addNotification(txt, size, marginTop, timeout, backTimes) {
    this.notification = new Notification(this, new Message(txt, size, marginTop), timeout, backTimes);
    this.notification.display();
    return this;
  }

  getBar() {
    if (this.bar != null)
      return this.bar;

    return this.parentScreen.getBar();
  }

  update() {
    if (this.bar != null)
      this.bar.update();
  }
}
