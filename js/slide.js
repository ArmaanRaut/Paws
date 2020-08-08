// Constant assignment
// asigning children element of slide to slides
const slides=document.querySelector(".slider").children;
// asigning prev, next and indicator
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
// initializing index = 0
let index=0;

// Event listener for control arrows 
  prev.addEventListener("click",function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
  })
  next.addEventListener("click",function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
  })
// End of Event listener

// creation of circle indicators from JS to Html
  function circleIndicator(){
    for (let i = 0; i < slides.length; i++) {
      // below code adds div element to the indicator div
      const div = document.createElement("div");
            // div.innerHTML=i+1; //remove this comment if you want to display number of slide in circle indicator
          //  Set the attribute in the created div element
          div.setAttribute("onclick","indicateSlide(this)")
          // setting div id
          div.id=i;
          // adding active class
          if(i==0){
            div.className="active";
          }
          // append the created div elements to the indicator div
          indicator.appendChild(div);
    }
  }
  // calling the circleIndicator() function
  circleIndicator(); 

  // indicateSlide(element) function makes the slide response to clicks 
  function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator(); 
    resetTimer();
  }

  // Update the cicle indicator with respect to its corresponding image slide
  function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length;i++){
      indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
  }

  // These function make the control arrow buttons work 
  // if else function makes sure the 1st image slide comes back after the last image and vise-versa
  function prevSlide(){
    if(index==0){
      index=slides.length-1;
    }
    else{
      index--;
    }
    changeSlide();
  }
  function nextSlide(){
    if(index==slides.length-1){
      index=0;
    }
    else{
      index++;
    }
    changeSlide();
  }

// this function changes the silde upon click or automatically 
  function changeSlide(){
      for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
      }
    slides[index].classList.add("active");
  }

// autoplay function
// reseting the timer on selection of any control
  function resetTimer(){
    // when click to indicator or controls button stop timer
    clearInterval(timer);
    // then started again timer
    timer=setInterval(autoPlay,6000);
  }

  // autoplay function
  function autoPlay(){
    nextSlide();
    updateCircleIndicator();
  }
 // timer
  let timer=setInterval(autoPlay,6000);

