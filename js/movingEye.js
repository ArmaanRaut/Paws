// function for eye movement
var eBalls = document.getElementsByClassName("pupil");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  // event.clientX => get the horizontal of the onmousemove
  // event.clientY => get the vertical of the onmousemove
  // window.innerWidth => get the browser width
  // window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    eBalls[i].style.left = x;
    eBalls[i].style.top = y;
    eBalls[i].style.transform = "translate(-"+x+",-"+y+")";
  }

}
