function initLocalClocks() {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  var hands = [
    {
      hand: 'hourhand',
      angle: (hours * 30) + (minutes / 2) -90
    },
    {
      hand: 'minutehand',
      angle: (minutes * 6) - 90
    },
    {
      hand: 'secondhand',
      angle: (seconds * 6) - 90
    }
  ];

	for (var i = 0; i < hands.length; i++) {
			var elements = document.querySelectorAll('.' + hands[i].hand);

			for (var j = 0; j < elements.length; j++) {
					elements[j].style.webkitTransform = 'rotateZ('+ hands[i].angle +'deg)';
					elements[j].style.transform = 'rotateZ('+ hands[i].angle +'deg)';

					if (hands[i].hand === 'minutehand') {
	          	elements[j].parentElement.setAttribute('data-second-angle', hands[i + 1].angle);
	        }

			}
	}
}


function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}

/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}


initLocalClocks();
setUpMinuteHands();
