// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab, .tab-content').forEach(el => {
      el.classList.remove('active');
    });
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Gas needle simulation
function updateNeedle() {
  const val = Math.random() * 100;
  document.getElementById("needle").style.left = `${val}%`;
}
setInterval(updateNeedle, 3000);
updateNeedle();