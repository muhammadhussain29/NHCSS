// Data for Images
let images = [
    {
        "caption": "image",
        "link": "imgs/img-5.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-7.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-8.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-1.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-3.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-4.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-4.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-7.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-1.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-8.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-5.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-7.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-8.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-1.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-3.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-4.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-4.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-7.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-1.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-8.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-5.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-7.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-8.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-1.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-3.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-4.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-4.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-7.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-6.jpg",
        "orientation": "square"
    }, {
        "caption": "image",
        "link": "imgs/img-1.jpg",
        "orientation": "wide"
    }, {
        "caption": "image",
        "link": "imgs/img-2.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-8.jpg",
        "orientation": "tall"
    }, {
        "caption": "image",
        "link": "imgs/img-5.jpg",
        "orientation": "square"
    }
]



// --------------------------------------------------------variables-------------------------------------------------//
let gallery = document.getElementById('gallery');
let galleryBTN = document.getElementById('gallery-btn');
let galleryBTNLess = document.getElementById('gallery-btn-less');
let limit = 15;
let index = 0;

// -----------------------------------------function to display pictures -------------------------------------------//
function print() {
    for (index; index <= limit && index < images.length; index++) {

        // Create a new 'a' element for each image
        let img = document.createElement('a');
        img.setAttribute("data-lightbox", "models");
        img.setAttribute("href", images[index].link);
        img.setAttribute("data-title", images[index].caption);

        img.setAttribute("data-aos", "fade")
        img.setAttribute("data-aos-duration", "1500")
        img.setAttribute("data-aos-easing", "ease-out")

        img.classList.add(images[index].orientation);

        // Create and append the image element inside the 'a' element
        let imageElement = document.createElement("img");
        imageElement.src = images[index].link;
        img.appendChild(imageElement);

        // Append the 'a' element to the gallery container
        gallery.appendChild(img);

        // console.log(img);
    }
}
print();

// ------------------------------Buttons to show more and less images-----------------------------------------//
galleryBTN.addEventListener('click', () => {
    // console.log(gallery.innerHTML)
    console.log(index)
    console.log(limit)
    if (gallery.innerHTML != "") {
        index = limit + 1;
        limit += 8;
        // console.log("ran")
    }
    print();

    if (index >= images.length) {
        galleryBTN.classList.add('hide');
        galleryBTNLess.classList.remove('hide');
    }
});
galleryBTNLess.addEventListener('click', () => {
    gallery.innerHTML = "";
    limit = 15;
    index = 0;
    print();
    galleryBTN.classList.remove('hide');
    galleryBTNLess.classList.add('hide');
})


