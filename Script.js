document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Gas updater (simulated)
function updateGasMeter() {
  const gwei = Math.floor(Math.random() * 80) + 1;
  const needle = document.getElementById("gas-needle");
  const label = document.getElementById("gwei-value");
  const position = Math.min(gwei, 80);
  needle.style.left = `${position}%`;
  label.innerText = `${gwei} Gwei`;
}
setInterval(updateGasMeter, 3000);
updateGasMeter();

// Wallet Connect placeholder
document.getElementById("connect-wallet").addEventListener("click", () => {
  document.getElementById("wallet-status").innerText = "Connected: 0x...1337";
});