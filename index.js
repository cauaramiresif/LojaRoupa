const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const html = `
    <div>
        <a href="/camisas">Camisas</a>
        <a href="/bermudas">Bermudas</a>
        <a href="/meias">Meias</a>
    </div>
    `
    res.send(html)
})

app.get('/camisas', (req, res) => {
    const html = `
    <div>
        <a href="/camisas">Camisas</a>
        <p>Polo Branca: R$ 30,00. <a href="">Ver mais</a></p>
        <p>Regata do Chaves: R$ 100,00. <a href="">Ver mais </a></p>
        <a href="/bermudas">Bermudas</a>
        <a href="/meias">Meias</a>
    </div>
    `
    res.send(html)
})


app.get('/', (req, res) => {
    const html = `
    <div>
        
    </div>
    `
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})