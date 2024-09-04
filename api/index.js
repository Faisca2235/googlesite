import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await fetch(`https://api.screenshotapi.net/screenshot?token=HK3CH8H-QFR4WVM-N3DJ92G-YK4SX4J&url=${encodeURIComponent(url)}&full_page=true`);
    const data = await response.json();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ screenshotUrl: data.screenshot });
  } catch (error) {
    res.status(500).json({ error: 'Failed to take screenshot' });
  }
}
