import express from 'express';
import path from 'path';
import dotEnv from 'dotenv';
// import bodyParser from 'body-parser';
import handlebars from 'express-handlebars';
import cors from 'cors';
import morgan from 'morgan';

dotEnv.config();
const app = express();
app.use(cors());
// app.use(bodyParser())
// Htttp logger
app.use(morgan('combined'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, res) => {
    return res.render('home');
})

app.get('/news',(req,res)=>{
    res.render('news')
})
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

// Serves static files (we need it to import a css file)
app.use(express.static('public'));
// Sets a basic route
app.get('/', (req, res) => res.send('Hello World !'));

app.listen(process.env.PORT||3000, () => {
    console.log(`🚀  Server ready at ${process.env.PORT|3000}`);
});