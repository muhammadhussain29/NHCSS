// Data of society member
const data = [
    {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }, {
        "img": "../imgs/profile.jpg",
        "name": "member",
        "Role": "Role"
    }
]

let grid = document.getElementsByClassName('grid')[0];

function generateMemberProfile() {
    return `
    <div class="member d-flex flex-column align-items-center justify-content-center" data-aos="fade" data-aos-duration="1000" >
    <div class="imgbox">
    <img src="${data[index].img}" alt="${data[index].name}">
    </div>
    <div class="details d-flex flex-column align-items-center justify-content-center">
    <div class="heading-2 col-blue">${data[index].name}</div>
    <div class="txt-1">${data[index].Role}</div>
    </div>
    </div>
    `;
}

let index = 0;
while (index < data.length) {
    grid.innerHTML += generateMemberProfile();
    index += 1;
}
