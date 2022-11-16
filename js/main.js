$(document).ready(function () {
    


});





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
  //   $(myclass).animate({ top: newq[0], left: newq[1] }, 1000, function () {
  //     //   animateDiv(myclass);
  //     console.log("zsfvgsvf");
  //   });
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
  
    if (last_left_position > e.clientX && Math.abs(last_left_position) >= $("#lottie_cat").width()) {
      $("#lottie_cat").addClass("cat_back");
    } else {
      $("#lottie_cat").removeClass("cat_back");
    }
  
  
  
  
    TweenLite.to("#lottie_cat", 1, {
      css: {
        left: e.clientX,
        top: e.clientY,

      },
    });
  
    last_left_position = e.clientX;
  });
  