// Store meter elements
var hm = document.getElementById("health-meter");
var mm = document.getElementById("mana-meter");

var healthBtns = [
  document.querySelector(".healthy-btn"),
  document.querySelector(".scratched-btn"),
  document.querySelector(".damaged-btn"),
  document.querySelector(".warning-btn"),
  document.querySelector(".critical-btn"),
  document.querySelector(".ko-btn")
];

var manaBtns = [
  document.querySelector(".mana-oom-btn"),
  document.querySelector(".mana-twenty-btn"),
  document.querySelector(".mana-forty-btn"),
  document.querySelector(".mana-sixty-btn"),
  document.querySelector(".mana-eighty-btn"),
  document.querySelector(".mana-full-btn")
];

// Add event listeners to health meter buttons
healthBtns.forEach(function(elem){
  elem.addEventListener("click", function(e){
    hm.className = "";                                 // Clear all other classes
    hm.classList.add(this.getAttribute("data-health"));// Add new class
  });
});

// Add event listeners to mana meter buttons
manaBtns.forEach(function(elem){
  elem.addEventListener("click", function(e){
    mm.className = "";                                 // Clear all other classes
    mm.classList.add(this.getAttribute("data-mana"));// Add new class
  });
});