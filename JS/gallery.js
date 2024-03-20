// Data for Images
let images = [
    {
        "caption": "Ration Drive",
        "link": "gallery/img-1.webp",
        "orientation": "square"
    },{
        "caption": "Ration Drive",
        "link": "gallery/img-2.webp",
        "orientation": "wide"
    },{
        "caption": "Ration Drive",
        "link": "gallery/img-3.webp",
        "orientation": "tall"
    },{
        "caption": "Ration Drive",
        "link": "gallery/img-4.webp",
        "orientation": "square"
    },{
        "caption": "Ration Drive",
        "link": "gallery/img-5.webp",
        "orientation": "square"
    },{
        "caption": "Workshop on Graphics Design",
        "link": "gallery/img-6.webp",
        "orientation": "square"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-7.webp",
        "orientation": "wide"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-8.webp",
        "orientation": "square"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-9.webp",
        "orientation": "square"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-10.webp",
        "orientation": "square"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-11.webp",
        "orientation": "square"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-12.webp",
        "orientation": "wide"
    },{
        "caption": "Civil Aviation Visit",
        "link": "gallery/img-13.webp",
        "orientation": "square"
    },{
        "caption": "Workshop on Web-Development",
        "link": "gallery/img-14.webp",
        "orientation": "square"
    },{
        "caption": "Workshop on Web-Development",
        "link": "gallery/img-15.webp",
        "orientation": "square"
    },{
        "caption": "Workshop on Web-Development",
        "link": "gallery/img-16.webp",
        "orientation": "square"
    },{
        "caption": "Session on time managment",
        "link": "gallery/img-17.webp",
        "orientation": "square"
    },{
        "caption": "Session on time managment",
        "link": "gallery/img-18.webp",
        "orientation": "tall"
    },{
        "caption": "Session on time managment",
        "link": "gallery/img-19.webp",
        "orientation": "square"
    },{
        "caption": "Session on time managment",
        "link": "gallery/img-20.webp",
        "orientation": "square"
    },{
        "caption": "Session on IOT",
        "link": "gallery/img-21.webp",
        "orientation": "square"
    },{
        "caption": "Session on IOT",
        "link": "gallery/img-22.webp",
        "orientation": "square"
    },{
        "caption": "Session on IOT",
        "link": "gallery/img-23.webp",
        "orientation": "wide"
    },{
        "caption": "Session on IOT",
        "link": "gallery/img-24.webp",
        "orientation": "tall"
    },{
        "caption": "Session on IOT",
        "link": "gallery/img-25.webp",
        "orientation": "square"
    },{
        "caption": "Social Service Work",
        "link": "gallery/img-26.webp",
        "orientation": "square"
    },{
        "caption": "Social Service Work",
        "link": "gallery/img-27.webp",
        "orientation": "square"
    },{
        "caption": "Social Service Work",
        "link": "gallery/img-28.webp",
        "orientation": "square"
    },{
        "caption": "Social Service Work",
        "link": "gallery/img-29.webp",
        "orientation": "tall"
    },{
        "caption": "Social Service Work",
        "link": "gallery/img-30.webp",
        "orientation": "wide"
    },{
        "caption": "Social Service Work",
        "link": "gallery/img-31.webp",
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


