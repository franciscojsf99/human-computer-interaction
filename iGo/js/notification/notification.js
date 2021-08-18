class Notification
{
  constructor(parentScreen, msg, timeout, backTimes) {
    if ( parentScreen != null ) parentScreen.saveState();
    this.parentScreen = parentScreen;
    this.node = document.createElement("div");
    this.node.class = "notification";

    // frame screen
    this.node.style.position = "absolute";
    this.node.style.width = "300px";
    this.node.style.height = "100px";
    this.node.style.borderRadius = "25px";
    this.node.style.borderRadius = "25px";
    this.node.style.color = "#eeeeee";
    this.node.style.backgroundColor = "#1e1e1e";
    this.node.setAttribute("onclick", "goBackButton()");

    document.getElementById("notification").setAttribute("onclick", "goBackButton("+backTimes+")");

    this.message = msg;
    this.node.appendChild(getHTML(this.message));

    setTimeout(deleteNotification, timeout);
  }

  display() {
    let notif = document.getElementById("notification");
    notif.style.height = "300px";
    notif.innerHTML = this.node.outerHTML;
  }

  selfDestroy() {
    let notif = document.getElementById("notification");
    notif.style.height = "0px";
    notif.innerHTML = "";
  }



  update() {
  }
}
