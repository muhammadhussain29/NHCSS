// Example data for recent events
let eventData = [
  {
    heading: 'Event 1',
    speaker: 'Speaker 1',
    date: '21-June-2023',
    time: '11:00 PM',
    location: 'Numl Auditorium',
    bgImg: "url('../imgs/poster temp.jpg')"
  },
  {
    heading: 'Event 2',
    speaker: 'Speaker 2',
    date: '25-June-2023',
    time: '2:00 PM',
    location: 'Conference Hall',
    bgImg: "url('../imgs/poster temp.jpg')"
  },
  {
    heading: 'Event 3',
    speaker: 'Speaker 3',
    date: '25-June-2023',
    time: '2:00 PM',
    location: 'Conference Hall',
    bgImg: "url('../imgs/poster temp.jpg')"
  },
  {
    heading: 'Event 4',
    speaker: 'Speaker 4',
    date: '25-June-2023',
    time: '2:00 PM',
    location: 'Conference Hall',
    bgImg: "url('../imgs/poster temp.jpg')"
  },
  {
    heading: 'Event 5',
    speaker: 'Speaker 5',
    date: '25-June-2023',
    time: '2:00 PM',
    location: 'Conference Hall',
    bgImg: "url('../imgs/poster temp.jpg')"
  },
  {
    heading: 'Event 6',
    speaker: 'Speaker 6',
    date: '25-June-2023',
    time: '2:00 PM',
    location: 'Conference Hall',
    bgImg: "url('../imgs/poster temp.jpg')"
  }
];

// Set the date to countdown to
const countdownDate = new Date("2024-03-15T00:00:00Z").getTime();

// Update the countdown every second
const countdown = setInterval(function () {

  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  // If the countdown is over, show some text
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    // You can add a message here when the countdown is over
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


// event cards list
// Function to create event card with given data
function createEventCard(bgImg, heading, speaker, date, time, location) {
  let card = document.createElement('div');
  card.classList.add('event-card', 'rounded', 'm-2', 'd-inline-block');
  card.setAttribute('data-aos', 'fade');
  card.setAttribute('data-aos-duration', '1500');
  card.setAttribute('data-aos-easing', 'ease');
  card.style.backgroundImage = bgImg;

  let detail = document.createElement('div');
  detail.classList.add('detail', 'p-2');

  let headingElement = document.createElement('h3');
  headingElement.classList.add('px-1', 'col-white', 'heading-2');
  headingElement.textContent = heading;

  let speakerElement = document.createElement('p');
  speakerElement.classList.add('px-1', 'col-lightgrey', 'txt-1');
  speakerElement.textContent = speaker;

  let ul = document.createElement('ul');
  let dateLi = createListItem('col-lightgrey', 'txt-1', date);
  let timeLi = createListItem('col-lightgrey', 'txt-1', time);
  let locationLi = createListItem('col-lightgrey', 'txt-1', location);

  ul.appendChild(dateLi);
  ul.appendChild(timeLi);
  ul.appendChild(locationLi);


  let viewImagesBtn = document.createElement('button');
  viewImagesBtn.classList.add('btn', 'mx-3');
  let viewImagesBtnLink = document.createElement('a');
  viewImagesBtnLink.setAttribute('href', 'gallery.html')
  viewImagesBtnLink.textContent = 'View Images';
  viewImagesBtn.appendChild(viewImagesBtnLink);

  detail.appendChild(headingElement);
  detail.appendChild(speakerElement);
  detail.appendChild(ul);
  detail.appendChild(viewImagesBtn);

  card.appendChild(detail);

  return card;
}

// Helper function to create list items
function createListItem(colClass, txtClass, text) {
  let li = document.createElement('li');
  li.classList.add(colClass, txtClass);
  li.textContent = text;
  return li;
}

// Create and append event cards
let eventCardsContainer = document.getElementById('eventCardsContainer');
eventData.forEach(event => {
  let card = createEventCard(event.bgImg, event.heading, event.speaker, event.date, event.time, event.location);
  eventCardsContainer.appendChild(card);
});
