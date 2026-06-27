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

const music =
document.getElementById("music");

// ======================
// MUSIC BUTTON
// ======================

const musicBtn =
document.getElementById("musicToggle");

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
// BUKA UNDANGAN
// ======================

const openBtn =
document.getElementById("openInvitation");

if(openBtn){

openBtn.addEventListener("click",()=>{

document.body.classList.add("opened");

music.play().catch(()=>{});

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
// UCAPAN COUNT
// ======================

const wishesCount =
document.getElementById("wishCount");

if(wishesCount){

let count = 0;

wishesCount.innerText = count;

}

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyvcRz8d3AK6LXRee9LleZgv_DeYXgWX0IzkKp7YFKHD8BLNjCQXSME-Kz_pkFNdBXWqA/exec";

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

// ======================
// GALLERY SLIDER PREMIUM
// ======================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide = slides.length - 1;

}

showSlide(currentSlide);

}

function startAutoSlide(){

autoSlide = setInterval(nextSlide,3000);

}

function stopAutoSlide(){

clearInterval(autoSlide);

}

if(nextBtn && prevBtn){

nextBtn.addEventListener("click",()=>{

nextSlide();

stopAutoSlide();

startAutoSlide();

});

prevBtn.addEventListener("click",()=>{

prevSlide();

stopAutoSlide();

startAutoSlide();

});

}

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

currentSlide = index;

showSlide(currentSlide);

stopAutoSlide();

startAutoSlide();

});

});

const slider =
document.querySelector(".slider-track");

if(slider){

let startX = 0;

slider.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

stopAutoSlide();

});

slider.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX;

if(startX-endX>50){

nextSlide();

}

if(endX-startX>50){

prevSlide();

}

startAutoSlide();

});

}

startAutoSlide();

