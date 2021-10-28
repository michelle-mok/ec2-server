import { createServer } from 'http';
import { readFile } from 'fs';

const PORT = process.argv[2];

const whenIncomingRequest = (request, response) => {
  console.log('request url', request.url);

  var filePath = '.' + request.url;

  var extname = String(path.extname(filePath)).toLowerCase();
  var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

  var contentType = mimeTypes[extname] || 'application/octet-stream';
  
  readFile(filePath, (error, content) => {
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(content, 'utf-8');
  });
};

createServer(whenIncomingRequest).listen(PORT)
