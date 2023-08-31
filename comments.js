// Create web server
// Step 1: Import the 'http' module
const http = require('http');

// Step 2: Create a server using the http module
const server = http.createServer((req, res) => {
  // Step 3: Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Step 4: Write the response content
  res.end('Hello, world!\n');
});

// Step 5: Define the port to listen on
const port = 3000;

// Step 6: Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



