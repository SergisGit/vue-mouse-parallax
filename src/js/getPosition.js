// Helper function to get an element's exact position
export default function getPosition(el) {
  var box = el.getBoundingClientRect();
  return {
    y: box.top,
    x: box.left
  };
}