class MapScreen extends Screen
{
	constructor(parentScreen) {
		super(parentScreen);

    this.node.id = "mapcontaner"

    this.bar = this.getBar();
    this.node.appendChild(getHTML(this.bar));

    this.wrong = true;
    this.path_1on = false;
    this.stage = 0;
    this.icons = [
      new Icon({x: '5px', y: '25px'}, 40, "images/map-pin.svg", "launchPointsOfInterestScreen"), // main.js
      new Icon({x: '130px', y: '165px'}, 20, "images/position.png", "") // main.js
    ];

    for (let i = 0; i < this.icons.length; i++) {
      this.node.appendChild(getHTML(this.icons[i]));
    }

    this.canvas = document.createElement("canvas");
    this.canvas.id = 'map';
    this.canvas.setAttribute("width", "300px");
    this.canvas.setAttribute("height", "280px");
    this.canvas.style.marginTop = "20px";
    this.canvas.style.borderBottomLeftRadius = "25px";
    this.canvas.style.borderBottomRightRadius = "25px";
    this.canvas.style.backgroundColor = "#ddddbb";

    this.node.appendChild(this.canvas);

    this.ons = {
      'museum': false,
      'hotel': false,
      'restaurant': false
    }

    this.display();

    document.getElementById("images/position.png").style.transform = "rotate(45deg)";

    this.makeMap();

	}

  update() {
    this.bar.update();
    this.makeMap();

    if ( this.path_1on )
      this.makeRoute();
  }

  makeMap() {
    var ctx = document.getElementById("map").getContext("2d");

    ctx.fillStyle = "grey";
    ctx.fillRect(  0,  25, 300, 10);
    ctx.fillRect(  0,  75, 300, 10);
    ctx.fillRect(  0, 150, 300, 10);
    ctx.fillRect(  0, 225, 300, 10);

    ctx.fillRect(  40,  0, 10, 300);
    ctx.fillRect( 100,  0, 10, 300);
    ctx.fillRect( 180,  0, 10, 300);
    ctx.fillRect( 260,  0, 10, 300);

    ctx.fillStyle = "#444444"
    ctx.fillRect( 0, 0, 50, 50);
  }

  toggleMuseum() {
    if (this.ons['museum'])
      this.hideMuseum();
    else
      this.showMuseum();
  }

  toggleRestaurant() {
    if (this.ons['restaurant'])
      this.hideRestaurant();
    else
      this.showRestaurant();
  }

  toggleHotel() {
    if (this.ons['hotel'])
      this.hideHotel();
    else
      this.showHotel();
  }

  toggleAll() {
    if (this.ons['hotel'] && this.ons['museum'] && this.ons['restaurant']) {
      this.hideHotel();
      this.hideMuseum();
      this.hideRestaurant();
    }
    else {
      this.showHotel();
      this.showMuseum();
      this.showRestaurant();
    }
  }


  showMuseum() {
    if (this.ons['museum']) return;
    var cont = document.getElementById("mapcontaner");

    this.ons['museum'] = true;
    cont.appendChild(getHTML(new Icon({x: '233px', y: '-195px'}, 25, "images/bluemuseum.png", "launchMuseumStats1")) );
    cont.appendChild(getHTML(new Icon({x: '50px', y: '-45px'}, 25, "images/bluemuseum.png", "launchMuseumStats2")) );
  }

  showRestaurant() {
    if (this.ons['restaurant']) return;
    var cont = document.getElementById("mapcontaner");
    this.ons['restaurant'] = true;

    cont.appendChild(getHTML(new Icon({x: '153px', y: '-195px'}, 25, "images/bluerestaurant.png", "launchRestaurantStats1")) );
    cont.appendChild(getHTML(new Icon({x: '110px', y: '-45px'}, 25, "images/bluerestaurant.png", "launchRestaurantStats2")) );
  }

  showHotel() {
    if (this.ons['hotel']) return;
    var cont = document.getElementById("mapcontaner");

    this.ons['hotel'] = true;

    cont.appendChild(getHTML(new Icon({x: '73px', y: '-195px'}, 25, "images/bluehotel.png", "launchHotelStats1")) );
    cont.appendChild(getHTML(new Icon({x: '190px', y: '-45px'}, 25, "images/bluehotel.png", "launchHotelStats2")) );
  }

  hideMuseum() {
    var cont = document.getElementById("images/bluemuseum.png");
    cont.parentNode.removeChild(cont);
    var cont = document.getElementById("images/bluemuseum.png");
    cont.parentNode.removeChild(cont);

    this.ons['museum'] = false;

  }
  hideRestaurant() {
    var cont = document.getElementById("images/bluerestaurant.png");
    cont.parentNode.removeChild(cont);
    var cont = document.getElementById("images/bluerestaurant.png");
    cont.parentNode.removeChild(cont);

    this.ons['restaurant'] = false;

  }
  hideHotel() {
    var cont = document.getElementById("images/bluehotel.png");
    cont.parentNode.removeChild(cont);
    var cont = document.getElementById("images/bluehotel.png");
    cont.parentNode.removeChild(cont);

    this.ons['hotel'] = false;
  }


  makeRoute() {
    if (!this.path_1on)
      document.getElementById("helper").innerHTML += "<button id='next' type='button' onclick='nextStage()'>Next Step!</button>"

    this.path_1on = true;

    this.makeMap(); // clean


    var rot = document.getElementById("images/position.png");
    var pos = rot.parentNode;
    var ctx = document.getElementById("map").getContext("2d");
    ctx.fillStyle = "red";

    switch (this.stage) {
      case 0:
        ctx.fillRect(  150,  150, 35, 10);
        ctx.fillRect(  180,  75, 75, 10);

        ctx.fillRect(  180,  75, 10, 85);

        rot.style.transform = "rotate(45deg)";
        pos.style.marginLeft = "130px";
        pos.style.marginTop = "165px"
        break;

      case 1:
        ctx.fillRect(  180,  75, 75, 10);

        ctx.fillRect(  180,  75, 10, 85);

        rot.style.transform = "rotate(45deg)";
        pos.style.marginLeft = "155px";
        pos.style.marginTop = "165px"
        break;

      case 2:
        ctx.fillRect(  180,  75, 75, 10);

        ctx.fillRect(  180,  75, 10, 40);

        rot.style.transform = "rotate(-45deg)";
        pos.style.marginLeft = "175px";
        pos.style.marginTop = "135px"
        break;

      case 3:
        ctx.fillRect(  180,  75, 75, 10);

        rot.style.transform = "rotate(-45deg)";
        pos.style.marginLeft = "175px";
        pos.style.marginTop = "110px"

        if (this.wrong)
          document.getElementById("helper2").innerHTML = "<button id='wrong' type='button' onclick='wrongStage()'>Wrong Step!</button>";

        this.wrong = false;
        break;

      case 4:
        ctx.fillRect(  210,  75, 45, 10);

        rot.style.transform = "rotate(45deg)";
        pos.style.marginLeft = "185px";
        pos.style.marginTop = "90px"

        var lol = document.getElementById("wrong");
        if (lol !== null)lol.parentNode.removeChild(lol);
        break;

      case 5:
        rot.style.transform = "rotate(135deg)";
        pos.style.marginLeft = "235px";
        pos.style.marginTop = "85px"
        break;

      case 100:
        ctx.fillRect(  180,  75, 75, 10);
        ctx.fillRect(  180,  35, 10, 40);

        rot.style.transform = "rotate(-45deg)";
        pos.style.marginLeft = "175px";
        pos.style.marginTop = "37px"
    }
  }

  nextStage() {
    if (this.stage == 100) this.stage = 3;
    if (this.stage < 5) this.stage++;
    else {
      this.addNotification("Reached your destination!", 20, 40, 2000, 0);
      var lol = document.getElementById("next");
      lol.parentNode.removeChild(lol);
      this.path_1on = false;
    }
  }

  wrongStage() {
    this.stage = 100;

    this.addNotification("Wrong way! Go Back!", 20, 40, 2000, 0);
    var lol = document.getElementById("wrong");
    lol.parentNode.removeChild(lol);
  }
}
