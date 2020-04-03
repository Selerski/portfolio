window.onload = () => {

  if (window.innerWidth > 600) {

    setInterval(() => {
      animateCircles();
    }, 1000);

    function animateCircles() {
      const circle = document.createElement('div');
      circle.setAttribute('class', 'circle');
      const landing = document.querySelector('#landing');
      landing.appendChild(circle);

      circle.style.left = Math.random() * window.innerWidth + 'px';
      circle.style.top = Math.random() * window.innerWidth + 'px';

      circle.style.borderColor = '#6A1B9A';
      circle.style.transition = 'all 1s linear 0s';

      circle.style.left = circle.offsetLeft - 100 + 'px';
      circle.style.top = circle.offsetTop - 100 + 'px';

      circle.style.width = '200px';
      circle.style.zIndex = '1';
      circle.style.height = '200px';
      circle.style.borderWidth = '2px';
      circle.style.opacity = 0;

      setTimeout(() => {
        circle.remove();
      }, 1000);
    }

    var controller = new ScrollMagic.Controller();
    var slides = new TimelineMax()

      .to('#slideContainer', 0.5, { z: -150 })
      .to('#slideContainer', 1, { x: '-25%' })
      .to('#slideContainer', 0.5, { z: 0 });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#portfolio',
      triggerHook: 'onLeave',
      duration: '400%'
    })
      .setPin('#portfolio')
      .setTween(slides)
      .addTo(controller);
  } else {
    return;
  }
};
