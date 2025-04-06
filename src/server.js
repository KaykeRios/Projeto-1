const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'register.html'));
});

app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'forgot-password.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', '404.html'));
});

app.get('/blank', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'blank.html'));
});

app.get('/buttons', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'buttons.html'));
});

app.get('/cards', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'cards.html'));
});

app.get('/charts', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'charts.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'tables.html'));
});

app.get('/utilities-animation', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'utilities-animation.html'));
});

app.get('/utilities-border', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'utilities-border.html'));
});

app.get('/utilities-color', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'utilities-color.html'));
});

app.get('/utilities-other', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'utilities-other.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
