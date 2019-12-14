// const funcs = require('./funcs')

// funcs.greeting()
// funcs.add(3, 3)



// const http = require('http')
// const port = 3000


// const handler = (request, response) => {
//     console.log('new user')
//     response.end('Hello node')
// }

// const server = http.createServer(handler)

// server.listen(port, (err) => {
//     if (err)
//         return console.log('something\'s wrong')
//     console.log('server is running')
// })

const generateTitle = () => {
    return 'Pseudowygenerowany tytul'
}

const express = require('express') // pobranie funkcji
const app = express()   // zmienna bazowa aplikacji
const port = 3000   // port na ktorym bedzie dzialac

app.set('view engine', 'hbs') // handlebars.js dla widoków

// GET /
app.get('/', function (request, response) {

    let title = generateTitle()

    response.render('index', {
        pageTitle: title,
        pageBody: 'hello there'
    })
})

// GET /kontakt
app.get('/kontakt', (request, response) => {
    response.send('Kontakt do mnie')
})


// nasluchiwanie aplikacji - zaczyna dzialac
app.listen(port)

/* INICJALIZACJA npm
   katalog_aplikacji> npm init
   zapisuje to w package.json

   INSTALACJA express.js
   katalog_aplikacji> npm install express
   tworzy package-lock.json - nie ruszać
   tworzy katalog node_modules z modułami

   INSTALACJA handlebars.js
   katalog_aplikacji> npm isntall hbs

   widoki z rozszerzeniem .hbs w katalogu views
   paramatry w .hbs: {{parameter}}
*/
