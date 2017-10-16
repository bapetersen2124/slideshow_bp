var slideshow = {
  photoList : ["family","dog","beach","city","mountains","selfie"],
  currentPhotoIndex : 3,
  current : function() {
    console.log("Current photo is " + this.photoList[this.currentPhotoIndex]);
  },
  next : function() {for (var i = 0; i < this.photoList.length; i++) {
    if (this.currentPhotoIndex < this.photoList.length-1){
      console.log("The next photo in your album is " + this.photoList[this.currentPhotoIndex+1]);
    } else {
      console.log("End of album!");
    }
  }
},
  previous : function() {for (var i = this.photoList.length; i > 0; i--) {
      if (this.currentPhotoIndex !=0) {
        console.log("The previous photo in your album is " + this.photoList[this.currentPhotoIndex-1]);
      } else {
        console.log("Beginning of album!");
      }
    }
  }
}

this.slideshow.current();
this.slideshow.next();
this.slideshow.previous();
