<!DOCTYPE html>
<html>
  <head>
    <title>Simple Web Application</title>
  </head>
  <body>
    <h1>Welcome to the Simple Web Application</h1>
    <p>This is a simple web application built using serverless architecture on AWS.</p>
    <p>Backend response: <span id="response"></span></p>
    <script>
      fetch('/backend')
        .then(response => response.text())
        .then(text => document.getElementById('response').innerHTML = text)
    </script>
  </body>
</html>
