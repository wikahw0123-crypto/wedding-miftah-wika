// ======================
// DATA TANGGAL AKAD
// ======================

const weddingDate = new Date("Oct 10, 2026 08:00:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

if(document.getElementById("days")){
document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
}

if(distance < 0){

clearInterval(countdown);

document.getElementById("days").innerText = "0";
document.getElementById("hours").innerText = "0";
document.getElementById("minutes").innerText = "0";
document.getElementById("seconds").innerText = "0";

}

},1000);


// ======================
// BUKA UNDANGAN
// ======================

const openBtn =
document.getElementById("openInvitation");

if(openBtn){

openBtn.addEventListener("click", ()=>{

document.body.classList.add("opened");

const music =
document.getElementById("music");

if(music){

music.play().catch(()=>{});

}

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

// ======================
// NAMA TAMU DARI URL
// ======================

const urlParams = new URLSearchParams(window.location.search);

const guestName = urlParams.get("to");

const guestElement = document.getElementById("guest-name");

if(guestElement){

if(guestName){

guestElement.innerText =
decodeURIComponent(guestName.replace(/\+/g,' '));

}else{

guestElement.innerText = "Bapak/Ibu/Saudara/i";

}

}


// ======================
// COPY REKENING
// ======================

function copyText(text){

navigator.clipboard.writeText(text)
.then(()=>{

})
.catch(err=>{

console.log(err);

});

}


// Rekening Wika

const copyWika = document.getElementById("copyWika");

if(copyWika){

copyWika.addEventListener("click", ()=>{

copyText("7179397107");

const copyMsgWika =
document.getElementById("copyMsgWika");

copyMsgWika.innerText =
"Nomor rekening berhasil disalin ❤️";

setTimeout(() => {
  copyMsgWika.innerText = "";
}, 3000);
    
});

}


// Rekening Miftah

const copyMiftah = document.getElementById("copyMiftah");

if(copyMiftah){

copyMiftah.addEventListener("click", ()=>{

copyText("4460710222");

const copyMsgMiftah =
document.getElementById("copyMsgMiftah");

copyMsgMiftah.innerText =
"Nomor rekening berhasil disalin ❤️";

setTimeout(() => {
  copyMsgMiftah.innerText = "";
}, 3000);    
    
});

}


// ======================
// SCROLL ANIMATION
// ======================

const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ======================
// NAVIGATION ACTIVE
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".bottom-nav a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ======================
// MUSIC BUTTON
// ======================

const musicBtn =
document.getElementById("musicToggle");

const music =
document.getElementById("music");

if(musicBtn && music){

musicBtn.addEventListener("click", ()=>{

if(music.paused){

music.play();

musicBtn.innerHTML = "🎵";

}else{

music.pause();

musicBtn.innerHTML = "🔇";

}

});

}


// ======================
// UCAPAN COUNT
// ======================

const wishesCount =
document.getElementById("wishCount");

if(wishesCount){

let count = 0;

wishesCount.innerText = count;

}

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbz12EAKhaAP4Av4vz5CgM__tkm1iCs5ZuTOo1NnqAtP0nnzi7c_ZYW0i0BeoYLNPi7vhA/exec";

const wishForm = document.getElementById("wishForm");
const wishList = document.getElementById("wishList");

if (wishForm) {

loadWishes();

wishForm.addEventListener("submit", async (e) => {

e.preventDefault();

const nama =
document.getElementById("nama").value;

const kehadiran =
document.getElementById("kehadiran").value;

const ucapan =
document.getElementById("ucapan").value;

await fetch(SCRIPT_URL, {

method: "POST",

mode: "no-cors",

body: JSON.stringify({
nama,
kehadiran,
ucapan
})

});

const rsvpMsg =
document.getElementById("rsvpMessage");

rsvpMsg.innerText =
"Ucapan berhasil dikirim ❤️";

setTimeout(() => {
  rsvpMsg.innerText = "";
}, 3000);
    
wishForm.reset();

loadWishes();

});

}

async function loadWishes() {

const res = await fetch(SCRIPT_URL);

const data = await res.json();

wishList.innerHTML = "";

// UPDATE JUMLAH UCAPAN
if (wishesCount) {
    wishesCount.innerText = data.length;
}

data.reverse().forEach(item => {

wishList.innerHTML += `

<div class="wish-card">

<h4>${item.nama}</h4>

<small>${item.kehadiran}</small>

<p>${item.ucapan}</p>

</div>

`;

});

}
