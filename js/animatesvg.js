/* Shapes */
var svgContainer = document.getElementById('bm');
var animItem = bodymovin.loadAnimation({
  wrapper: bm,
  animType: 'svg',
  loop: true,
  autoplay:true,
  path: 'js/data.json'
});