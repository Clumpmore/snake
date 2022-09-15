const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url)
    // const body = req.url === '/style.css'
    //     ? fs.readFileSync('./public/style.css')
    //     : '/index.html' ? fs.readFileSync('./public/index.html')
    //         : '/script.js' ? fs.readFileSync('./public/script.js')
    //             : '/beer.jpg' ? fs.readFileSync('./public/beer.jpg')
    //                 : '/artom.png' ? fs.readFileSync('./public/artom.png')
    //                     : fs.readFileSync('./public/police.png')
    const publicPath = './public'
    let body = null
    try {
        body = fs.readFileSync(`${publicPath}${req.url}`)
    } catch (e) {
        console.log(e)
        body = fs.readFileSync(`${publicPath}/index.html`)
    }
    res.end(body)

});
const port = process.env.PORT || 3001
server.listen(port);

console.log(`server started on port ${port}!`);
