

    const emoji = document.getElementById('emoji');
    let angle = 0;
    let direction = 1;

    function swivel() {
      angle += direction; // Adjust the swivel speed as needed

      if (angle >= 20 || angle <= -20) {
        direction *= -1; // Reverse direction at the edges
      }

      emoji.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(swivel);
    }

    swivel();