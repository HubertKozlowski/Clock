import "../css/normalize.css";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", function() {

function initLocalClocks() {
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  var hands = [
    {
      hand: 'hourhand',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutehand',
      angle: (minutes * 6)
    },
    {
      hand: 'secondhand',
      angle: (seconds * 6)
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
  var container = document.querySelector('.minutes-container');
  var secondAngle = container.getAttribute("data-second-angle");
  if (secondAngle > 0) {
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
    	moveMinuteHands(container);
    }, delay);
  }
}

function moveMinuteHands(containers) {

  containers.style.webkitTransform = 'rotateZ(6deg)';
  containers.style.transform = 'rotateZ(6deg)';

  setInterval(function() {

    if (containers.angle === undefined) {
    	containers.angle = 12;
    } else {
    	containers.angle += 6;
    }
    containers.style.webkitTransform = 'rotateZ('+ containers.angle +'deg)';
    containers.style.transform = 'rotateZ('+ containers.angle +'deg)';

  }, 60000);
}

function moveSecondHands() {
  var container = document.querySelector('.seconds-container');
  setInterval(function() {

    if (container.angle === undefined) {
    	container.angle = 6;
    } else {
    	container.angle += 6;
    }

    container.style.webkitTransform = 'rotateZ('+ container.angle +'deg)';
    container.style.transform = 'rotateZ('+ container.angle +'deg)';

  }, 1000);
}

initLocalClocks();
moveSecondHands();
setUpMinuteHands();

});
