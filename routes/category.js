import express from 'express';
const router = express.Router(); 
router.get('/', (req, res) => {
  res.render('main');
}); //1

router.get('/category', (req, res) => {
  res.render('category.ejs');
}); //2




export default router; //3