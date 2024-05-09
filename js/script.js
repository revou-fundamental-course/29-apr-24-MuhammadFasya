// Ini JavaScript

function validation() {
  console.log("Good");
}

// Section Slide
let indexSlide = 1; // [0, 1, 2]
showSlide(1);

// Trigger Slide
function nextSlide(n) {
  console.log("nextSlide: " + n);
  showSlide((indexSlide += n));
}

// Slide Logic
function showSlide(index) {
  let listImage = document.getElementsByClassName("banner-item");
  console.log(listImage);
  console.log("Banyaknya image: " + listImage.length);

  //  Reset Slide
  if (index > listImage.length) indexSlide = 1;

  // Hide all images
  let i = 0;
  while (i < listImage.length) {
    listImage[i].style.display = "none";
    i++;
  }

  // Show only one image
  listImage[indexSlide - 1].style.display = "block";
  console.log("showSlide: " + index);
}

setInterval(() => nextSlide(1), 2000);
