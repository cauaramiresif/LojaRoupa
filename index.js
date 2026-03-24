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
        <p>Polo Branca: R$ 30,00. <a href="/camisas/polobranca">Ver mais</a></p>
        <p>Regata do Chaves: R$ 100,00. <a href="/camisas/regatadochaves">Ver mais </a></p>
        <a href="/bermudas">Bermudas</a>
        <a href="/meias">Meias</a>
    </div>
    `
    res.send(html)
})


app.get('/camisas/polobranca', (req, res) => {
    const html = `
    <div>
        <p>Polo Branca</p>
        <p>R$30,00</p>
        <p>Tamanhos: P, M, G, GG</p>
    </div>
    `
    res.send(html)
})

app.get('/camisas/regatadochaves', (req, res) => {
    const html = `
    <div>
        <p>Regata do Chaves</p>
        <p>R$100,00</p>
        <p>Tamanhos: P, M, G, GG</p>
    </div>
    `
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})