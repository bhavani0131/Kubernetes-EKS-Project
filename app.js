const express = require('express');
const os = require('os');
const app = express();
const PORT = 8084;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>K8s Deployment Demo</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  .card {
    background: rgba(255,255,255,0.97);
    border-radius: 20px;
    padding: 50px 60px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 520px;
    animation: fadeUp 0.6s ease-out;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .icon { font-size: 60px; margin-bottom: 10px; }
  h1 {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 32px;
    margin-bottom: 8px;
  }
  .subtitle { color: #666; font-size: 15px; margin-bottom: 30px; }
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    text-align: left;
  }
  .info-box {
    background: #f5f5fb;
    border-left: 4px solid #764ba2;
    border-radius: 8px;
    padding: 14px 16px;
  }
  .info-label { font-size: 11px; text-transform: uppercase; color: #888; letter-spacing: 0.5px; }
  .info-value { font-size: 15px; font-weight: 600; color: #333; margin-top: 4px; word-break: break-all; }
  .badge {
    display: inline-block;
    margin-top: 25px;
    padding: 8px 20px;
    background: #e8f5e9;
    color: #2e7d32;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }
  .badge::before { content: "● "; }
  footer { margin-top: 25px; font-size: 12px; color: #aaa; }
</style>
</head>
<body>
  <div class="card">
    <div class="icon">☸️</div>
    <h1>Live on Kubernetes</h1>
    <p class="subtitle">Deployed via GitHub Actions → ECR → EKS</p>
    <div class="info-grid">
      <div class="info-box">
        <div class="info-label">Pod Hostname</div>
        <div class="info-value">${os.hostname()}</div>
      </div>
      <div class="info-box">
        <div class="info-label">App Version</div>
        <div class="info-value">v3</div>
      </div>
      <div class="info-box">
        <div class="info-label">Platform</div>
        <div class="info-value">${os.platform()} / ${os.arch()}</div>
      </div>
      <div class="info-box">
        <div class="info-label">Server Time</div>
        <div class="info-value">${new Date().toLocaleTimeString()}</div>
      </div>
    </div>
    <div class="badge">Running & Healthy</div>
    <footer>Refresh to see load balancing across pods</footer>
  </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

