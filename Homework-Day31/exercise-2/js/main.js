const slidesData = [
    {
      image: "https://picsum.photos/id/25/800/400",
      title: "Slide 1",
    },
    {
      image: "https://picsum.photos/id/27/800/400",
      title: "Slide 2",
    },
    {
      image: "https://picsum.photos/id/28/800/400",
      title: "Slide 3",
    },
    {
      image: "https://picsum.photos/id/29/800/400",
      title: "Slide 4",
    },
    {
      image: "https://picsum.photos/id/25/800/400",
      title: "Slide 1",
    },
    {
      image: "https://picsum.photos/id/27/800/400",
      title: "Slide 2",
    },
    {
      image: "https://picsum.photos/id/28/800/400",
      title: "Slide 3",
    },
    {
      image: "https://picsum.photos/id/29/800/400",
      title: "Slide 4",
    },
];

let slideIndex = 1;

const showData = (slidesData) => {
    const slideContainer = document.getElementById("slideshow");
    const dotContainer = document.getElementById("myDot");

    slideContainer.innerHTML = ""; 
    dotContainer.innerHTML = "";

    slidesData.forEach((item, index) => {
        const slide = document.createElement("div");
        slide.classList.add("mySlides", "fade");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        image.style.width = "100%"; 

        const title = document.createElement("div");
        title.classList.add("text");
        title.textContent = item.title;

        slide.appendChild(image);
        slide.appendChild(title);
        slideContainer.appendChild(slide);

        const totalDot = Math.min(4, slidesData.length);
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.onclick = () => currentSlide(index + 1);
        dotContainer.appendChild(dot);
    });

    const prevButton = document.createElement("a");
    prevButton.classList.add("prev");
    prevButton.innerHTML = "&#10094;";
    prevButton.onclick = () => plusSlides(-1);

    const nextButton = document.createElement("a");
    nextButton.classList.add("next");
    nextButton.innerHTML = "&#10095;";
    nextButton.onclick = () => plusSlides(1);

    slideContainer.appendChild(prevButton);
    slideContainer.appendChild(nextButton);

    transferSlide(slideIndex);
};

const plusSlides = (n) => {
    transferSlide(slideIndex += n);
};

const currentSlide = (n) => {
    transferSlide(slideIndex = n);
};

const transferSlide = (n) => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // display only 4 dots
    

};

showData(slidesData);