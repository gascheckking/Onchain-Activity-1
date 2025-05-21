export default function handler(req, res) {
  res.status(200).json({
    type: "farcaster-frame",
    image: "https://yourdomain.vercel.app/og-image.png",
    buttons: [{ label: "Open Dashboard" }],
    post_url: "https://yourdomain.vercel.app"
  });
}
