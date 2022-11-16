
let last_left_position;

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  let h = window.innerHeight - $("#lottie_cat").height();
  let w = window.innerWidth - $("#lottie_cat").width();

  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  let newq = makeNewPosition();

  console.log("zsfvgsvf");

 

  TweenLite.to(myclass, 1, {
    css: {
      top: newq[0],
      left: newq[1],
    },
  });

  if (last_left_position > newq[1]) {
    $("#lottie_cat").addClass("cat_back");
  } else {
    $("#lottie_cat").removeClass("cat_back");
  }

  last_left_position = newq[1];
}

let timeout;
let MoveInterval;
$(window).on("mousemove", function moveContain_cursor(e) {
  clearTimeout(timeout);
  clearInterval(MoveInterval);
  timeout = setTimeout(function () {
    console.log("mouse not move");
    MoveInterval = setInterval(function () {
      animateDiv("#lottie_cat");
    }, 5000);
  }, 5000);

  if (
    last_left_position > e.clientX &&
    Math.abs(last_left_position) >= $("#lottie_cat").width()
  ) {
    $("#lottie_cat").addClass("cat_back");
  } else {
    $("#lottie_cat").removeClass("cat_back");
  }


  const mouse ={
    x: e.clientX,
    y:e.clientY
  }

  const cat= document.querySelector("#lottie_cat");
  const catRect = cat.getBoundingClientRect();
  const angle =  Math.atan((catRect.y + catRect.height/2 - mouse.y) / (catRect.x + catRect.width/2 - mouse.x) );
console.log("--------------------Angle de mouvement------------------");
console.log("angle:",angle);


  TweenLite.to("#lottie_cat", 1, {
    css: {
      left: mouse.x,
      top: mouse.y,
    },
    onComplete: () => {
      TweenLite.to("#lottie_cat", 0.3, {
        css: {
          opacity: 0,
        },
      });
    },
    onStart: () => {
      TweenLite.to("#lottie_cat", 0.3, {
        css: {
          opacity: 1,
        },
      });
    },
  });

  last_left_position = e.clientX;
});
