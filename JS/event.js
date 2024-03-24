// Example data for recent events
let eventData = [
  {
    heading: 'Ration Drive',
    speaker: 'donate now',
    bgImg: "poster/poster-1.webp",
    txt: "Embrace the spirit of giving this Ramadan! Join our Ramadan Ration Drive a chance to make a meaningful impact."
  },
  {
    heading: 'computer Graphics',
    speaker: 'Aziz Sethar',
    bgImg: "poster/poster-2.webp",
    txt: "The Department of Computer Science at NUML University Hyderabad organized an insightful session with Aziz Sethar held on February 28, 2024! Grateful for the engaging exploration of computer graphics."
  },
  {
    heading: 'CAA seminar',
    speaker: 'Impact of 5G, Artificial Intelligence, & Cyber Security',
    bgImg: "poster/poster-3.webp",
    txt: "Civil Aviation Training Institute, Hyderabad presents a one-day seminar on the Impact of 5G, Artificial Intelligence, & Cyber Security in Aviation on Feb 15, 2024, "
  },
  {
    heading: 'freelance matrix',
    speaker: 'pradeep k',
    bgImg: "poster/poster-4.webp",
    txt: "NHCSS organized a session on Freelance Matrix at Hyderabad Campus. The session was conducted by Mr. Pardeep Kumar"
  },
  {
    heading: 'time and focus',
    speaker: 'muhammad ali',
    bgImg: "poster/poster-5.webp",
    txt: "NHCSS organized an event on Time and Focus Management with the collaboration of Youth Club. Muhammad Ali was the guest speaker, he presented his ideology regarding the said topic in the light of Islam."
  },
  {
    heading: 'IOT Workshop',
    speaker: 'alee r',
    bgImg: "poster/poster-6.webp",
    txt: "Explore the future of Smart Cities and IoT with Alee R. at NUML University, Hyderabad. "
  }
];

// Set the date to countdown to
const countdownDate = new Date("2024-03-20T00:00:00Z").getTime();

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

// Event Card Generated Dynamicaly
let cards = document.getElementsByClassName('cards')[0];
function eventCard() {
  return `
  <div class="card p-4">
            <div class="img-holder">
                <img src="${eventData[index].bgImg}" alt="">
            </div>
            <div class="card-content">
                <h2 class="heading-2 col-blue">${eventData[index].heading}</h2>
                <h3 class="txt-1 text-capitalize">${eventData[index].speaker}</h3>
                <p class="txt-2">${eventData[index].txt}</p>
                <button class="btn">
                    <a href="gallery.html">Gallery</a>
                </button>
            </div>
        </div>
  `;
}
let index = 0;
while (index < eventData.length) {
  cards.innerHTML += eventCard();
  index += 1;
}