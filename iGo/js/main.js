var screen = null;
var imgManager = new ImagesManager();

function init() {
  screen = new LockScreen(null);
}
function update() {
  screen.update();
  requestAnimationFrame(update);
}

var possibleDbclick = false;

function lockButton() {
  screen = screen.lock();
}
function goHomeButton() {
  if ( !possibleDbclick ) {
    possibleDbclick = true;

    setTimeout( function() {
        if (possibleDbclick) {
          possibleDbclick = false;
          screen = screen.goHome();
        }
      },
      300 );
  }
  else {
    lockButton();
    possibleDbclick = false;
  }
}

function goBackButton(n = 1) {
  for (let i = 0; i < n; i++) {
    screen = screen.goBack();
  }
}

function launchApp1() {
  screen = screen.gotoNew(new GalleryScreen(screen));
}

function launchApp2() {
  screen = screen.gotoNew(new SyncCameraScreen(screen));
}

function launchApp3() {
  screen = screen.gotoNew(new MapScreen(screen));
}

function launchMultipleSelectionScreen() {
  var offset = screen.getOffset();
  screen = screen.gotoNew(new MultipleSelectionScreen(screen, offset));
}

function selectImg(index) {
  screen.imgSelected(index);
}

function unselectImg(index) {
  screen.imgUnselected(index);
}

function launchShareScreen() {
  screen = screen.gotoNew(new ShareScreen(screen));
}

function launchDescriptionScreen() {
  screen = screen.gotoNew(new DescriptionScreen(screen));
}

function shareToMyWeb() {
  screen = screen.shareToMyWeb();
}

function shareToTwitter() {
  screen = screen.shareToTwitter();
}

function shareToFacebook() {
  screen = screen.shareToFacebook();
}

function shareToInstagram() {
  screen = screen.shareToInstagram();
}

function addLocation() {
  screen.addLocation();
}

function removeLocation() {
  screen.removeLocation();
}

function addDescription(msg) {
  console.log(msg);
  screen = screen.addDescription(msg);
}

function shareToSite() {
  site = screen.getSite()
  screen = screen.shareWithInfo();
  screen = screen.goBack();
  screen = screen.goBack();
  screen = screen.addNotification("Shared successfully to "+site, 20, 40, 5000)
}

function launchImgDefinitionScreen() {
  screen = screen.gotoNew(new ImgDefinitionScreen(screen));
}

function launchNFCScreen() {
  screen = screen.gotoNew(new NFCScreen(screen));
}

function shareNFC() {
  screen = screen.shareNFC();
  screen = screen.goBack();
  screen = screen.addNotification("Shared NFC successfully", 20, 40, 2000)
}

function launchDeleteImageScreen() {
  screen = screen.gotoNew(new DeleteImageScreen(screen));
}

function deleteImage() {
  screen = screen.deleteImage();
  screen = screen.goBack();
  screen = screen.addNotification("Deleted successfully", 20, 40, 2000);
}

function launchImageScreen(selectedImageIndex) {
  screen = screen.gotoNew(new ImageScreen(screen, selectedImageIndex));
}

function goRightImage() {
  screen.showRightImage();
}

function goLeftImage() {
  screen.showLeftImage();
}

function deleteNotification() {
  screen.removeNotification();
}

function searchDevices() {
  screen.searchDevices();
}

function launchCameraScreen() {
  screen = screen.gotoNew(new CameraScreen(screen));
}

function toggleCaptureImage() {
  screen.toggle();
}

function capture() {
  screen.capture();
}

function launchPointsOfInterestScreen() {
  screen = screen.gotoNew(new PointsOfInterestScreen(screen));
}

function toggleMuseum() {
  goBackButton();
  screen.toggleMuseum();
}

function launchMuseumStats1() {
  screen = screen.gotoNew(new StatsMuseumScreen(screen, 0));
}

function launchMuseumStats2() {
  screen = screen.gotoNew(new StatsMuseumScreen(screen, 1));
}


function toggleRestaurant() {
  goBackButton();
  screen.toggleRestaurant();
}

function launchRestaurantStats1() {
  screen = screen.gotoNew(new StatsRestaurantScreen(screen, 0));
}

function launchRestaurantStats2() {
  console.log('a');
  screen = screen.gotoNew(new StatsRestaurantScreen(screen, 1));
}

function toggleHotel() {
  goBackButton();
  screen.toggleHotel();
}

function launchHotelStats1() {
  screen = screen.gotoNew(new StatsHotelScreen(screen, 0));
}

function launchHotelStats2() {
  screen = screen.gotoNew(new StatsHotelScreen(screen, 1));
}

function toggleAll() {
  goBackButton();
  screen.toggleAll();
}

function makeRoute() {
  goBackButton();
  screen.makeRoute();
}

function nextStage() {
  screen.nextStage();
}

function wrongStage() {
  screen.wrongStage()
}

var picture_brightness = 100;
var picture_contrast   = 100;
var picture_timeout    = 0;

function updateBrightness(val) { picture_brightness = val; screen.updateBrightness(); }
function updateContrast(val)   { picture_contrast   = val; screen.updateContrast(); }
function updateTimeout(val)    { picture_timeout    = val; screen.updateTimeout(); }

function unimplemented() {
  alert("Looks like you stumbled into an unimplemented feature. How sad");
}
