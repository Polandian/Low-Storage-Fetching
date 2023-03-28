let nowdate = new Date()
let deadline = new Date("2030-12-20T03:24:00")

//TODO: REPLACE DEADLINE!!!
//TODO: REPLACE DEADLINE!!!
//TODO: REPLACE DEADLINE!!!

function isBefore(date1, date2) {
   return date1 < date2;
}
function FileError2(){
   let errortext = document.getElementById("errortext")
   window.onload = function(){
      errortext.innerHTML = "OPEN-ALPHA IS OVER, THANKS FOR TESTING."
      errortext.style.display = "block"
      console.log("error: file don't exist")
      document.body.style.backgroundColor = "black";
   }
}

if(isBefore(nowdate, deadline) == true){
   //! use localstorage https://stackoverflow.com/questions/34847231/how-to-save-progress-in-an-html-game
   //? localstorage is pretty cheatable system, but i let users have the most fun they can, i won't stop them from using cheats
   //? also localstorage is easiest way for saving data (also saves if you wanna make a web game) also better than cookies as you can disable cookies + cookies expire + L + ratio + plundered

   //! CHECK FILE "LOCALSTORAGE VARIABLE EXPLANAION.HTML" TO SEE EVERY LOCALSTORAGE VARIABLE AND THEIR PURPOSE!

   let audio = new Audio("default.mp3") //?sound

   //! console.log's are tests
   //! most of the functions explains themselfs
   //! and this kind of texts are messages, js will ignore them

   function playVideo(x){ //?explains itself
      let video = document.getElementById(x)
      video.play()
   } 

   function setaudio(x){ //?explains itself
      audio = new Audio(x)
   }
   function playaudio(){ //?explains itself
      audio.play()
   }
   function stopaudio(){ //?explains itself
      audio.pause()
      audio.currentTime = 0
   }
   function pauseaudio(){ //?explains itself
      audio.pause()
   }

   function show(x){ //?sets x to block (use example show("thisgamebest")) 
      document.getElementById(x).style.display = "block"
   }
   function hide(x){ //?sets x to none (use example hide("thisgamesucks"))
      document.getElementById(x).style.display = "none"
   }

   function setHTML(x, y){
      document.getElementById(x).innerHTML = y
   }

   function setstart(){ //! when button is pressed (which is assaigned onclick() on HTML file) it sets local gamestarted variable true, so it'll never show again
                        //? game is STARTED (moved to later part to stop speedrun)
      hide("startnewgame") //? hides start button
      setTimeout(() => {
         show("start") //? (the movie one, check the assets if you wanna see it)
         localStorage.removeItem("localmarch")
      }, 1000);
      setTimeout(() => {
         hide("start") //? same but hidden
      }, 3000);
      setTimeout(() => {
         show("video") 
         playVideo("video")
         //? shows intro
      }, 4000);
      setTimeout(() => {
         if(document.getElementById("video").paused){ //? yes, .paused is a thing
            hide("video")
            console.log("starting works") //? after 31 seconds the function worked, because uhh idk how to check when video stopped (this is different from what i did, i check if video is ended AFTER 31 seconds)
         }
      }, 31000);
      setTimeout(() => {
         localStorage.setItem('gamestarted', "true") //? moved here
         show("farmland")
         show("economy")
         show("army")
         show("relationship")
         show("cities")
         show("healthcare")
         show("happinessindex")
         show("voting")
         show("education")
         show("internet")
         show("ant")
         localStorage.setItem("pageon", "ant")
      }, 33000)
   }

   function sendmarch(){
      let march = document.getElementById("marchtext").value
      localStorage.setItem("localmarch", march)
      console.log("MARCH SET")
      alert("March has been set!")
      hide("ant")
      show("marchbook")
      localStorage.setItem("pageon", null)
   }

   function showmarch(){
      let ineededtomakethisvariableelseitdoesntwork = document.getElementById("marchbox").style.display
      setHTML("marchboxtext", localStorage.getItem("localmarch"))
      if(ineededtomakethisvariableelseitdoesntwork == "none"){
         show("marchbox")
         localStorage.setItem("pageon", "marchbox")
      }
      if(ineededtomakethisvariableelseitdoesntwork == "block"){
         hide("marchbox")
         localStorage.setItem("pageon", null)
      }
   }

   document.addEventListener("keyup", function(event) {
      if (event.key === 'Enter') {
         let nn = document.getElementById("inputcountryname").value
         localStorage.setItem("localcountry", nn)
         alert("Your country's name is: " + nn)
      }
   });


   function farmland(){ //TODO: farmland my booyyyy!
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function economy(){ //TODO: keep this shi good else you ain't livin' anymore
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function cities(){ //TODO: shows ur cities conquer more bro
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }
   function relationships(){ //TODO: not your gf/wife it's about country relation ships
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function army(){ //TODO: turkşsh army best
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function healthcare(){ //TODO: you don't want your people to die do you
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function hpi(){ //TODO: happiness index
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function voting(){ //TODO: democracy only works on smart folks so keep your people smart
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function education(){ //TODO: educate children well
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   function internet(){ //TODO: bro
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("localcountry")){
         
      }
   }

   window.onload = function(){
      if(localStorage.getItem("gamestarted") == null){
         localStorage.setItem("gamestarted", "false") // if gamestarted doesn't exists 
         localStorage.removeItem("localmarch")        //(which i made it to be like that for new players else it would always be false and you would always be at start menu)
                                                      // it will create it and make it false (game ain't started)
      }
      if(localStorage.getItem('gamestarted') == "false"){
         show("startnewgame") // shows start button if game didn't start
      }
      if(localStorage.getItem('gamestarted') == "true"){
         show("farmland")
         show("economy")
         show("army")
         show("relationship")
         show("cities")
         show("healthcare")
         show("happinessindex")
         show("voting")
         show("education")
         show("internet")
      }
      if(localStorage.getItem('localmarch') == null && localStorage.getItem("gamestarted") == "true"){
         show("ant")
      }
      if(localStorage.getItem("localmarch") != null && localStorage.getItem("gamestarted") == "true"){
         show("marchbook")
      }
      if(localStorage.getItem("pageon") == "marchbox"){
         show("marchbox")
      }
      setHTML("marchboxtext", localStorage.getItem("localmarch"))
   }
}

if(isBefore(nowdate, deadline) == false){
   FileError2()
}