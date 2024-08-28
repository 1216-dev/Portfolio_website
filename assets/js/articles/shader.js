const examples = [...document.querySelectorAll('.example')];

examples.forEach(example => {
  const controls = example.querySelector('.controls');

  const handleChange = e => {
    example.className = 'example';
    example.classList.add(e.target.value ? `example--${e.target.value}` : '');
  };

  const select = controls.querySelector('select');
  select.addEventListener('change', handleChange);
});

if (window.IntersectionObserver !== undefined) {
  const shaders = [...document.querySelectorAll('.shader')].slice(1);
  shaders.forEach(shader => {
    shader.classList.add('is-waiting');
    const observer = new IntersectionObserver((changes, observer) => {
      changes.forEach(change => {
        if (change.intersectionRatio > 0) {
          shader.classList.remove('is-waiting');
        } else {
          shader.classList.add('is-waiting');
        }
      });
    });
    observer.observe(shader);
  });
}
