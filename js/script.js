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

  for (var j = 0; j < hands.length; j++) {

    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = `rotateZ('.'+ hands[j].angle +'deg')`;
        elements[k].style.transform = `rotateZ('.'+ hands[j].angle +'deg')`;

        if (hands[j].hand === 'minutes') {
          	elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}

initLocalClocks()
