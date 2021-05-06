document.addEventListener("DOMContentLoaded", function(event) { 
  start()
});


let draw;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let radius = 10
let minRadius = 2
let maxRadius = 30

function pincelSize () {
  $('#increase').click(function () {
    radius = radius + 2;

    if (radius >= maxRadius) {
       radius = maxRadius;
    } 
    $('#pincelVal').text(radius)
  })

  $('#decrease').click(function () {
    radius = radius - 2;

    if (radius <= minRadius) {
       radius = minRadius;
    } 
    $('#pincelVal').text(radius)
  })
}

function start() {
  pincelSize();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //Eventos
  $("#canvas").mousedown(press);
  $("canvas").mousemove(paint);
  $("canvas").mouseup(leave);

  function press() {
    draw = true;
    context.moveTo(event.pageX, event.pageY);
  }

  function paint() {
    if (draw) {
      context.lineWidth = radius*2;
      context.lineTo(event.pageX, event.pageY);
      context.stroke();

      context.beginPath();
      context.arc(event.pageX, event.pageY, radius, 0, 2 * Math.PI);
      context.fill();

      context.beginPath()
      context.moveTo(event.pageX, event.pageY);
    }
  }

  function leave(){
    draw = false;
  }
}
