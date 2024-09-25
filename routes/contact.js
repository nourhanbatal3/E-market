import express from 'express';
const router = express.Router(); // import indexRouter from...

router.get('/', (req, res) => {
  res.render('main');
}); //1

router.get('/contact', (req, res) => {
  res.render('contact.ejs');
}); //2

export default router; //3