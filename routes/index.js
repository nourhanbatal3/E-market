import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main');
});

router.get('/home', (req, res) => {
  res.render('main');
});
//router.post("/submit",addtocart)

export default router;

