var a0 = new Audio("sounds/ao00.mp3")
var awp = new Audio("sounds/awp.mp3")
var a7 = new Audio("sounds/a7.mp3")
var hs =new Audio("sounds/hs.mp3")
var srsly = new Audio("sounds/travis2.mp3")
var nuke =new Audio("sounds/nuke.mp3")
var flash =new Audio("sounds/flash.mp3")
function roll(){
  var randomNumber1 = Math.floor((Math.random()*6)+1);
  var randomNumber2 = Math.floor((Math.random()*6)+1);
  document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

  if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerText = "hm";
  }else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerText = "hmm";
  }else{
    document.querySelector(".container h1").innerText = "7elwa 🤝";
  }
}
function roll2(){
  var randomNumber1 = Math.floor((Math.random()*5)+1);
  var randomNumber2 = Math.floor((Math.random()*5)+1);
  document.querySelector(".img1").setAttribute("src","images/" + randomNumber1 + ".jpeg");
  document.querySelector(".img2").setAttribute("src","images/" + randomNumber2 + ".jpeg");

  if(randomNumber1 ==1 && randomNumber2 == 2 || randomNumber1==2 && randomNumber2 == 1){
    document.querySelector(".container h1").innerText = "trinc ☀️➡️ sbace";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    flash.pause();
    a0.currentTime = 0;
    a0.play();
  }else if(randomNumber1 ==1 && randomNumber2 == 3 || randomNumber1 ==3 && randomNumber2 == 1){
    document.querySelector(".container h1").innerText = "kkk ☢️ sbace";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    flash.currentTime=0;
    nuke.currentTime=0;
    a7.currentTime = 0;
    a7.play();
    nuke.play();
    flash.play();
  }else if(randomNumber1 ==1 && randomNumber2 == 4 || randomNumber1 ==4 && randomNumber2 == 1){
    document.querySelector(".container h1").innerHTML = "sbace 💀 sbace";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    a7.currentTime = 0;
    a7.play();
  }else if(randomNumber1 ==1 && randomNumber2 == 5 || randomNumber1 ==5 && randomNumber2 == 1){
    document.querySelector(".container h1").innerText = "ranE 👏 sbace";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    a7.currentTime = 0;
    hs.currentTime=0;
    hs.play();
    a7.play();
  }else if(randomNumber1 ==2 && randomNumber2 == 3 || randomNumber1 ==3 && randomNumber2 == 2){
    document.querySelector(".container h1").innerText = "trinc ☀️➡️ kkk";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    a0.currentTime = 0;
    a0.play();
  }else if(randomNumber1 ==2 && randomNumber2 == 4 || randomNumber1 ==4 && randomNumber2 == 2){
    document.querySelector(".container h1").innerHTML = "cringe <h2>︻デ═一</h2>🤯 trinc";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    hs.currentTime=0;
    awp.currentTime = 0;
    a7.currentTime=0;
    awp.play();
    hs.play();
    a7.play();
  }else if(randomNumber1 ==2 && randomNumber2 == 5 || randomNumber1 ==5 && randomNumber2 == 2){
    document.querySelector(".container h1").innerHTML = "ranE <h2>︻デ═一</h2> trinc";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    awp.currentTime = 0;
    awp.play();
  }else if(randomNumber1 ==3 && randomNumber2 == 4 || randomNumber1 ==4 && randomNumber2 == 3){
    document.querySelector(".container h1").innerHTML = "cringe <h2>︻デ═一</h2>🤯 kkk";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    hs.currentTime = 0;
    awp.currentTime = 0;
    a7.currentTime = 0;
    hs.play();
    awp.play();
    a7.play();
  }else if(randomNumber1 ==3 && randomNumber2 == 5 || randomNumber1 ==5 && randomNumber2 == 3){
    document.querySelector(".container h1").innerHTML = "ranE <h2>︻デ═一︻デ═一</h2>🚪🤯 kkk";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    hs.currentTime=0;
    awp.currentTime = 0;
    hs.play();
    awp.play();
  }else if(randomNumber1 ==4 && randomNumber2 == 5 || randomNumber1 ==5 && randomNumber2 == 4){
      document.querySelector(".container h1").innerHTML = "cringe <h2>︻デ═一</h2>🤯 ranE";
      a0.pause();
      awp.pause();
      a7.pause();
      hs.pause();
      srsly.pause();
      nuke.pause();
      flash.pause();
      hs.currentTime = 0;
      awp.currentTime = 0;
      hs.play();
      awp.play();
  }else{
    document.querySelector(".container h1").innerText = "7elwa 🤝";
    a0.pause();
    awp.pause();
    a7.pause();
    hs.pause();
    srsly.pause();
    nuke.pause();
    flash.pause();
    a0.currentTime = 0;
    awp.currentTime = 0;
    a7.currentTime=0;
    hs.currentTime=0;
    srsly.currentTime=0;
    srsly.play();
  }
}

document.querySelector(".yalla button").onclick = function(){
  document.querySelector(".yalla button").classList.add("doos")
  document.querySelector(".yalla button").classList.add("a7a")
  roll2();
  setTimeout(function(){
    document.querySelector(".yalla button").classList.remove("doos")
    document.querySelector(".yalla button").classList.remove("a7a")
  },100)
};
