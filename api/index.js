export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Viewer</title>
<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>
</head>
<body>
<iframe src="https://blackdognewmedia.co.uk"></iframe>
</body>
</html>`);
}
