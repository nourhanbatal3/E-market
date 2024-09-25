import dotenv from'dotenv'; // instead of require easier import a constant from a fun called kza
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url'; // to make the next code
// main file (e.g., app.js)
import Product from './models/Product.js'; // Correct way to import default export
import indexRouter from './routes/index.js';
 import categoryRouter from './routes/category.js';
 import contactRouter from './routes/contact.js';
 import User from './models/User.js'

// Database connection calling 
dotenv.config(); 


const mongoURL = process.env.MONGODB_URL;

if (!mongoURL) {
  console.error('MongoDB URL not found in environment variables');
  process.exit(1);  // Exit if URL is undefined
}

mongoose.connect(mongoURL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));
// Resolve file and directory paths

const __filename = fileURLToPath(import.meta.url); //m4 fahma 7aga
const __dirname = path.dirname(__filename);

const app = express();


// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true})) //meen dahhhhh

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/category', categoryRouter);
app.use('/contact', contactRouter);


const PORT = process.env.PORT || 4000;

app.get('/signup',(req,res) => {
  res.render('signup');
})
app.get('/login',(req,res) => {
  res.render('login');
})
app.get('/checkout',(req,res) => {
  res.render('checkout');
})


//Another way 
app.get("/getcart/:productId", async(req,res) => {
  const id = req.params.productId;
  try{
    const product = await Product.findById(id);
    res.json(article);
    return;
  } catch(error){
    console.log("error ",id);
    return res.send("error");
  }
});

app.post('/register', async (req,res) =>{
  const {name,email,password,confirmPasword} = req.body
  const user = new User({
    name,
    email,
    password,
    confirmPasword
  })
  await user.save()
  console.log(user)  
  res.send("mission complete")

})
app.post('/log', async (req,res) =>{
  const {name,email,password,confirmPasword} = req.body
  const user = new User({
    name,
    email,
    password,
    confirmPasword
  }
)
  await user.save()
  console.log(user)
  res.send("mission complete")

})
app.post('/submit', async (req,res) =>{
  const {firstName,lastName,email,address,nameOnCard,cardNumber,expiration,CVV,totalPrice,quantity} = req.body
  const product = new Product({
    firstName,
    lastName,
    email,
    address,
    nameOnCard,
    cardNumber,
    expiration,
    CVV,
    totalPrice,
    quantity
  
  }
)
  await product.save()
  console.log(product)
  res.send("mission complete")

})
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});