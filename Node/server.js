const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const path = require('path');
const adminRouter=require('./router/adminrouter')
const pizzaRouter=require('./router/pizzarouter')
const pastaRouter=require('./router/pastarouter')
const breadRouter=require('./router/breadrouter')
const burgerRouter=require('./router/burgerrouter')
const chopsueyRouter=require('./router/chopsueyrouter')
const chowmeinRouter=require('./router/chowmeinrouter')
const drinksRouter=require('./router/drinksrouter')
const hotdrinksRouter=require('./router/hotdrinksrouter')
const maggiRouter=require('./router/maggirouter')
const newarrivalRouter=require('./router/newarrivalrouter')
const riceRouter=require('./router/ricerouter')
const sandwichRouter=require('./router/sandwichrouter')
const shakesRouter=require('./router/shakesrouter')
const snacksRouter=require('./router/snacksrouter')
const soyaRouter=require('./router/soyarouter')


app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'my-app/build')));

process.setMaxListeners(0)
// const dbURI='mongodb://akashsahu495:fbhacker1@ds011715.mlab.com:11715/blood'
mongoose.connect("mongodb://localhost:27017/database",{ useNewUrlParser: true });
// mongoose.connect(dbURI)
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/my-app/build/index.html'));
  });
  
app.use('/',adminRouter);
app.use('/pizza',pizzaRouter);
app.use('/pasta',pastaRouter);
app.use('/bread',breadRouter);
app.use('/chopsuey',chopsueyRouter);
app.use('/drinks',drinksRouter);
app.use('/hotdrinks',hotdrinksRouter);
app.use('/burger',burgerRouter);
app.use('/maggi',maggiRouter);
app.use('/chowmein',chowmeinRouter);
app.use('/rice',riceRouter);
app.use('/sandwich',sandwichRouter);
app.use('/newarrival',newarrivalRouter);
app.use('/snacks',snacksRouter);
app.use('/shakes',shakesRouter);
app.use('/soya',soyaRouter);

const port = process.env.PORT || 8081;

app.listen(port,()=>{
    console.log("server is listening at port 8081")
})