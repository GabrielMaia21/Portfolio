document.querySelectorAll('input[type="range"]').forEach(slider => {
  const spanId = `sliderValue-${slider.id.split('-')[1]}`;
  const span = document.getElementById(spanId);

  slider.addEventListener('input', () => {
    span.textContent = slider.value + "%";
  });
});