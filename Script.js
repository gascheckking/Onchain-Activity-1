// Tab navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(item.dataset.tab).classList.add('active');
  });
});

// Live gas update
async function fetchGas() {
  try {
    const res = await fetch("https://api.owlracle.info/v4/base/gas?apikey=demo");
    const json = await res.json();
    const gwei = json.speeds[1].estimatedFee.toFixed(1);
    document.getElementById("gas-value").textContent = `${gwei} Gwei`;
    document.getElementById("gas-fill").style.width = `${Math.min(gwei, 100)}%`;
  } catch (e) {
    document.getElementById("gas-value").textContent = "Error loading gas";
  }
}
fetchGas();
setInterval(fetchGas, 30000);

// Connect wallet (mock)
document.getElementById("connect-wallet").addEventListener("click", () => {
  document.getElementById("wallet-address").textContent = "0x123...ABCD";
});

// Claim XP (mock)
document.getElementById("claim-xp").addEventListener("click", () => {
  alert("XP Claimed!");
});

// Mint WarpAI Coin (mock)
document.getElementById("mint-warpai").addEventListener("click", () => {
  alert("Mint initiated! (mocked)");
});