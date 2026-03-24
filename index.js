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

app.get('/bermudas', (req, res) => {
    const html = `
    <div>
        <a href="/camisas">Camisas</a>
        <a href="/bermudas">Bermudas</a>
        <p>Bermuda Branca: R$ 20,00. <a href="/bermudas/bermudabranca">Ver mais</a></p>
        <p>Bermuda do Quico: R$ 80,00. <a href="/bermudas/bermudadoquico">Ver mais </a></p>
        <a href="/meias">Meias</a>
    </div>
    `
    res.send(html)
})

app.get('/bermudas/bermudabranca', (req, res) => {
    const html = `
    <div>
        <p>Bermuda Branca</p>
        <p>R$20,00</p>
        <p>Tamanhos: P, M, G, GG</p>
    </div>
    `
    res.send(html)
})

app.get('/bermudas/bermudadoquico', (req, res) => {
    const html = `
    <div>
        <p>Bermuda do Quico</p>
        <p>R$80,00</p>
        <p>Tamanhos: P, M, G, GG</p>
    </div>
    `
    res.send(html)
})

app.get('/meias', (req, res) => {
    const html = `
    <div>
        <a href="/camisas">Camisas</a>
        <a href="/bermudas">Bermudas</a>
        <a href="/meias">Meias</a>
        <p>Meia Branca: R$ 10,00. <a href="/meias/meiapreta">Ver mais</a></p>
        <p>Meia Preta: R$ 10,00. <a href="/meias/meiapreta">Ver mais </a></p>
    </div>
    `
    res.send(html)
})

app.get('/meias/meiabranca', (req, res) => {
    const html = `
    <div>
        <p>Meia Branca</p>
        <p>R$10,00</p>
        <p>Tamanhos: P, M, G, GG</p>
    </div>
    `
    res.send(html)
})

app.get('/meias/meiapreta', (req, res) => {
    const html = `
    <div>
        <p>Meia Preta</p>
        <p>R$10,00</p>
        <p>Tamanhos: P, M, G, GG</p>
    </div>
    `
    res.send(html)
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})