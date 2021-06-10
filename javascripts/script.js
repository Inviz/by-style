var parallaxes = Array.prototype.slice.call(document.querySelectorAll('.parallax'));

var frame;
window.onscroll = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    parallaxes.forEach((parallax) => {

      var weights = Array.prototype.slice.call(parallax.querySelectorAll('[parallax-weight]'));

      weights.forEach((weight) => {
        var number = parseInt(weight.getAttribute('parallax-weight'));
        var translateY = (window.scrollY / 1000) * number;
        weight.style.opacity = 1 - Math.max(0, Math.min(1, window.scrollY / ((1000 - number) * 4)))
        weight.style.transform = 'translateY(' + (-translateY) + 'px)'
      })
    })
  })
}