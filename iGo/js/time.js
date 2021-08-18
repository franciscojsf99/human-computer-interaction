class iGoTime
{
  constructor() {
    this.update();
  }

  update() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    this.time = (h<10? "0"+h : h) + ":" + (m<10? "0"+m : m);
    return this.time;
  }
}
