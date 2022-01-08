// NAV TAB                   NAV TAB                              NAV TAB
function openTab(evt, tabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.querySelector("button").click();
// NAV TAB                   NAV TAB                              NAV TAB


// DESTINATION                DESTINATION                          DESTINATION
function openTabD(evt, tabName) {

  var i, tabcontentD, tablinksD, tabnameD;

  tabcontentD = document.getElementsByClassName("tabcontentD");
  for (i = 0; i < tabcontentD.length; i++) {
    tabcontentD[i].style.display = "none";
  }

  tablinksD = document.getElementsByClassName("tablinksD");
  for (i = 0; i < tablinksD.length; i++) {
    tablinksD[i].className = tablinksD[i].className.replace(" active", "");
  }
  tabnameD = document.querySelectorAll(tabName);
  for (i = 0; i < tabnameD.length; i++) {
    document.querySelectorAll(tabName)[i].style.display = "block";
  }
  evt.currentTarget.className += " active";
}
document.querySelector(".tabD button").click();
// DESTINATION                DESTINATION                          DESTINATION


// CREW                      CREW                                    CREW
function openTabC(evt, tabName) {

  var i, tabcontentC, tablinksC, tabnameC;

  tabcontentC = document.getElementsByClassName("tabcontentC");
  for (i = 0; i < tabcontentC.length; i++) {
    tabcontentC[i].style.display = "none";
  }

  tablinksC = document.getElementsByClassName("tablinksC");
  for (i = 0; i < tablinksC.length; i++) {
    tablinksC[i].className = tablinksC[i].className.replace(" active", "");

  }
  tabnameC = document.querySelectorAll(tabName);
  for (i = 0; i < tabnameC.length; i++) {
    document.querySelectorAll(tabName)[i].style.display = "block";
  }
  evt.currentTarget.className += " active";
}
var slideindex = 0;

function showSlide() {
  var i, tabcontentC, tablinksC;
  tabcontentC = document.getElementsByClassName("tabcontentC");
  for (i = 0; i < tabcontentC.length; i++) {
    tabcontentC[i].style.display = "none";
  }
  tablinksC = document.getElementsByClassName("tablinksC");
  for (i = 0; i < tablinksC.length; i++) {
    tablinksC[i].className = tablinksC[i].className.replace(" active", "");
  }
  slideindex++;
  if (slideindex > tablinksC.length) {
    slideindex = 1
  }
  tablinksC[slideindex - 1].click();

};

var theInterval;
var cbuttons = document.querySelectorAll('#CREW button');

function startSlide(t) {
  theInterval = setInterval(showSlide, t);
};

function stopSlide() {
  clearInterval(theInterval);
};

for (i = 0; i < cbuttons.length; i++) {
  document.querySelectorAll('#CREW button')[i].addEventListener("click", function() {
    stopSlide();
    var b;
    for (b = 0; b < cbuttons.length; b++) {
      if (cbuttons[b].className === 'tablinksC active') {
        slideindex = b + 1;
      }
    };
    startSlide(10000);
  });
};
document.querySelector(".tabC button").click();

// CREW                      CREW                                    CREW

// TECHNOLOGY                TECHNOLOGY                             TECHNOLOGY
function openTabT(evt, tabName) {

  var i, tabcontentT, tablinksT, tabnameT;

  tabcontentT = document.getElementsByClassName("tabcontentT");
  for (i = 0; i < tabcontentT.length; i++) {
    tabcontentT[i].style.display = "none";
  }

  tablinksT = document.getElementsByClassName("tablinksT");
  for (i = 0; i < tablinksT.length; i++) {
    tablinksT[i].className = tablinksT[i].className.replace(" active", "");

  }
  tabnameT = document.querySelectorAll(tabName);
  for (i = 0; i < tabnameT.length; i++) {
    document.querySelectorAll(tabName)[i].style.display = "block";
  }
  evt.currentTarget.className += " active";
}
document.querySelector(".tabT button").click();
// TECHNOLOGY                TECHNOLOGY                             TECHNOLOGY

// BURGER                        BURGER                             BURGER
const gridN = document.querySelector('.gridN');
let menuOpen = false;
gridN.addEventListener('click', () => {
  if (!menuOpen) {
    gridN.classList.add('open');
    menuOpen = true;
  } else {
    gridN.classList.remove('open');
    menuOpen = false;
  }
})
// BURGER                        BURGER                             BURGER
let vh = window.innerHeight * 0.01;
for (i = 0; i < document.querySelectorAll('.tabcontent').length; i++) {
  document.querySelectorAll('.tabcontent')[i].style.setProperty('--vh', `${vh}px`);

};

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  for (i = 0; i < document.querySelectorAll('.tabcontent').length; i++) {
    document.querySelectorAll('.tabcontent')[i].style.setProperty('--vh', `${vh}px`);

  };
});
