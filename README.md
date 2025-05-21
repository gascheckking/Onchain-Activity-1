# WarpAI – Onchain Tracker & Activity Dashboard

**Byggd av:** Spawniz  
**Plattformar:** Warpcast + Zora + Base  
**Demo Live:** [https://warplate.vercel.app](https://warplate.vercel.app)  
**Token:** [Zora WarpAI Coin](https://zora.co/coin/base:0x8ab57bdfc4e900b62f309bfaa6e1802755330ca6)

---

## ⚡ Översikt

WarpAI är en onchain-dashboard miniapp för Web3-användare. Här spårar du dina gas-kostnader, claimar XP, följer mintade tokens, och håller koll på din position i leaderboard – i realtid.

---

## ✅ Funktioner (MVP)

- Wallet Connect (Mock)
- Gas Tracker med färg-needle (Owlracle mock)
- Tabbaserad UI (Overview, Gas, Wallet, Leaderboard, Settings)
- Responsive layout för mobil (375px)
- Leaderboard (Mock)
- Farcaster Frame-ready
- Enkla TX-simuleringar (Quick Mint, Buy)

---

## 🔮 Kommande Funktioner

- WalletConnect (wagmi/viem)
- Zora API-integration (Leaderboard, Mint feed)
- XP från smart contract (WarpXP.sol)
- Public profile pages
- Snapshot generator
- QuickBuy / Mint real TX
- Premium features ($)

---

## 🛠 Teknisk Stack

| Del           | Teknik                            |
| ------------- | --------------------------------- |
| Frontend      | HTML, CSS, JavaScript             |
| Hosting       | Vercel                            |
| Wallet        | ethers.js, Rabby / MetaMask       |
| API           | Owlracle (gas), Zora (snart)      |
| Contracts     | WarpPoints.sol, WarpXP.sol (Base) |
| Frames        | fc:frame, POST to `/api/frame`    |

---

## 📦 Filstruktur
