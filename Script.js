// Tab system
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('[data-tab-content]').forEach(c => c.style.display = 'none');

    this.classList.add('active');
    const target = this.dataset.tab;
    document.querySelector(`[data-tab-content="${target}"]`).style.display = 'block';
  });
});

// Leaderboard fetch (mock)
const leaderboard = document.getElementById('leaderboard-list');
leaderboard.innerHTML = `
  <div class="leaderboard-item"><span>1. 0xabc...123</span><span class="tag success">12.4 ETH</span></div>
  <div class="leaderboard-item"><span>2. 0xdef...456</span><span class="tag success">9.8 ETH</span></div>
  <div class="leaderboard-item"><span>3. 0xghi...789</span><span class="tag success">7.3 ETH</span></div>
`;

// Gas needle
function updateGas() {
  const value = Math.random() * 100;
  document.getElementById("gas-needle").style.left = `${value}%`;
  document.getElementById("current-gas").textContent = `${value.toFixed(1)} Gwei`;
}
setInterval(updateGas, 3000);
updateGas();

// Wallet
document.getElementById("connect-wallet").addEventListener("click", () => {
  document.querySelector('#wallet-info p').innerHTML = 'Connected: <span class="tag success">0x...123</span>';
});
