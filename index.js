//MAIN NAVBAR
window.onscroll = function () {
    myFunction();
  };
  const mainNavbar = document.querySelector(".main-navbar");
  const logoSpan = document.querySelector(".lioSpan");
  var navLinks = document.getElementsByClassName("navLinks");
  
  function myFunction() {
    if (window.pageYOffset > 20) {
      mainNavbar.classList.add("sticky");
    } else {
      mainNavbar.classList.remove("sticky");
    }
  }
  
  let home = document.querySelector(".home");
  let navEvents = document.querySelector(".nav-events");
  let navGallery = document.querySelector(".nav-gallery");
  let navAboutUs = document.querySelector(".nav-about-us");
  let navTeam = document.querySelector(".nav-teams");
  let navContact = document.querySelector(".nav-contact");
  
  navTeam.addEventListener("click", function () {
    removeActive();
    navTeam.classList.add("active");
  });
  
  navContact.addEventListener("click", function () {
    removeActive();
    navContact.classList.add("active");
  });
  
  home.addEventListener("click", function () {
    removeActive();
    home.classList.add("active");
  });
  
  navAboutUs.addEventListener("click", function () {
    removeActive();
    navAboutUs.classList.add("active");
  });
  
  navEvents.addEventListener("click", function () {
    removeActive();
    navEvents.classList.add("active");
  });
  
  navGallery.addEventListener("click", function () {
    removeActive();
    navGallery.classList.add("active");
  });
  
  function removeActive() {
    navAboutUs.classList.remove("active");
    home.classList.remove("active");
    navEvents.classList.remove("active");
    navGallery.classList.remove("active");
    navTeam.classList.remove("active");
    navContact.classList.remove("active");
  }
  


// TEAMS SECTION

const advisorsLi = document.querySelector(".advisors-li");
const coreTeamLi = document.querySelector(".core-team-li");
const devTeamLi = document.querySelector(".dev-team-li");
const advisors = document.querySelector(".advisors");
const coreTeam = document.querySelector(".core-team");
const devTeam = document.querySelector(".dev-team");

const removeAll = function() {
    advisors.classList.add('d-none');
    coreTeam.classList.add('d-none');
    devTeam.classList.add('d-none');
    advisorsLi.classList.remove('teams-active');
    devTeamLi.classList.remove('teams-active');
    coreTeamLi.classList.remove('teams-active');
}

advisorsLi.addEventListener('click', function(e) {
    removeAll();
    advisors.classList.remove('d-none');
    advisorsLi.classList.add('teams-active');
})

coreTeamLi.addEventListener('click', function(e) {
    removeAll();
    coreTeam.classList.remove('d-none');
    coreTeamLi.classList.add('teams-active');
})

devTeamLi.addEventListener('click', function(e) {
    removeAll();
    devTeam.classList.remove('d-none');
    devTeamLi.classList.add('teams-active');
})

//GALLERY
'use strict'

 let gallery = document.querySelectorAll('.gallery__img');
 let index ;

 let changePosition = function()
 {

    let random = Math.floor(Math.random()*14)+1;

    index = random;

    console.log(index);
 }

 changePosition();

 gallery.forEach((ele) => {

    if(index>14)
    {
        index = 0;
    }

    if(index == 0) {
        index=1;
    }

    if(index!=0 && index <= 14)
    {
        ele.style.background = `url(./Images/Pics/Kriti/gal-${index}.jpg)`;
        ele.style.backgroundSize = `cover`;
        
        index++;
    }
    
 })

 
 let setPhotos = (folder) => {

    let inc = 1;

    gallery.forEach((ele) => {
      
        if(index <= 14)
        {
    
            ele.style.background = `url(./Images/Pics/${folder}/gal-${inc}.jpg)`;
            ele.style.backgroundSize = `cover`;
            
            inc++;
        }
        
     })
    
}

let events = ['Kriti','Collection Drive','Picnic 2019','Picnic 2020','Unleash the Talent'];

let text = document.querySelector('.main-text-event')

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let ind = 0;

next.addEventListener('click', () => {
   
    ind++;

    if(ind > 4)
    {
        ind = 0;
    }

    console.log(ind);
    

    text.textContent = events[ind];

    let folder = events[ind].split(" ").join("-");

     setPhotos(folder);
});

prev.addEventListener('click', () => {
   
    ind--;

    if(ind < 0) {
        ind = 4;
    }
    

    text.textContent = events[ind];

    let folder = events[ind].split(" ").join("-");

     setPhotos(folder);
});
