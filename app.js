const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/hobbies', (req, res) => {
    res.render('hobbies', { title: 'Hobbies' });
});

app.get('/social', (req, res) => {
    res.render('social', { title: 'Social Media Account' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Number' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
