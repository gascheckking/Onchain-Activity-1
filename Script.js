document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
      tab.classList.add("active");
      const id = tab.dataset.tab;
      document.getElementById(id).classList.add("active");
    });
  });

  // Placeholder gas updater until API is added
  function fakeGas() {
    const val = Math.random() * 100;
    document.getElementById("gas-needle").style.left = `${val}%`;
    document.getElementById("gwei-value").innerText = `${val.toFixed(1)} Gwei`;
  }
  fakeGas();
  setInterval(fakeGas, 30000);

  // Claim XP mock
  document.getElementById("claim-xp").addEventListener("click", () => {
    const msg = "✅ You claimed 20 XP!";
    document.getElementById("claim-result").innerText = msg;
  });

  // Connect wallet (mocked)
  document.getElementById("connect").addEventListener("click", () => {
    document.getElementById("wallet-address").innerText = "0xa42...bb52";
    document.getElementById("warp-token").innerText = "1337 WARP";
  });

  // Load leaderboard (mocked)
  const lb = document.getElementById("leaderboard-list");
  lb.innerHTML = `
    <li>1. 0x123...abcd – 420 XP</li>
    <li>2. 0x456...ef01 – 369 XP</li>
    <li>3. 0x789...7890 – 256 XP</li>
  `;
});