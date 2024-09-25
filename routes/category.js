import express from 'express';
const router = express.Router(); // import indexRouter from...
//import {addtocart,addtocart2} from '../controller/cart_config.js';

router.get('/', (req, res) => {
  res.render('main');
}); //1

router.get('/category', (req, res) => {
  res.render('category.ejs');
}); //2

//router.post("/addtocart",addtocart)
//router.post("/addtocart2",addtocart2)


export default router; //3