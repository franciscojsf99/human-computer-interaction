class ImagesManager
{
  constructor() {
    this.images = [ "images/dogs01.png",
                    "images/dogs02.png",
                    "images/dogs03.png",
                    "images/dogs04.png",
                    "images/dogs05.png",
                    "images/dogs06.png",
                    "images/dogs07.png",
                    "images/dogs08.png",
                    "images/dogs09.png",
                    "images/dogs10.png",
                    "images/dogs11.png",
                    "images/dogs12.png",
                    "images/dogs13.png",
                    "images/dogs14.png",
                    "images/dogs15.png"
                  ];

    this.index = 0;
    this.hasBeenDeletedImg = false;
    this.hasBeenLastImageDeleted = false;
  }

  size() { return this.images.length; }

  getAllImages() { return this.images; }

  getImage(index) { return this.images[index]; }

  goToImage(index) {
    this.index = index;
    return this.images[index];
  }

  goToPrevImage() {
    if (this.hasPrevImage())
      this.index--;
    return this.images[ this.index ];
  }

  goToNextImage() {
    if (this.hasNextImage()) 
      this.index++;
    return this.images[ this.index ];
  }

  hasPrevImage() { return 0 < this.index; }
  hasNextImage() { return this.index < this.images.length-1; }
  
  hasLastImageBeenDeleted() {
    if (!this.hasBeenLastImageDeleted)
      return false;
    this.hasBeenLastImageDeleted = false;
    return true;
  }

  deleteImage() {
    this.images.splice(this.index, 1);
    if ( this.index === this.images.length ) {
      this.index--;
      this.hasBeenLastImageDeleted = true;
    } else
      this.hasBeenLastImageDeleted = false;
  }

  deleteImages(indexes) {
    indexes.sort((a, b) => b - a); // sorted in descending order

    for (let i = 0; i < indexes.length; i++)
      this.images.splice(indexes[i], 1);
  }

  addImage(img) {
    this.images.unshift(img);
  }

}