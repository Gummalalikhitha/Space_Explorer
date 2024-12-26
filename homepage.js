function showContent(section) {
    const content = document.getElementById('content');
    switch (section) {
      case 'objects':
        content.innerHTML = '<p>Explore celestial objects like stars, planets, and asteroids!</p>';
        break;
      case 'facts':
        content.innerHTML = '<p>Did you know? The universe is around 13.8 billion years old.</p>';
        break;
      case 'images':
        content.innerHTML = '<img src="space-image.jpg" alt="Space" class="space-image">';
        break;
      case 'videos':
        content.innerHTML = '<p>Watch amazing videos of space exploration!</p>';
        break;
      default:
        content.innerHTML = '<p>Select a section to explore.</p>';
    }
  }
  