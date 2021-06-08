const express = require('express');
const app = express();
const cors = require('cors')
const taskRoutes = require('./routes/taskRoutes');
const categorieRoutes = require('./routes/categorieRoutes');
const bodyParser = require('body-parser');

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/', function (req, res) {
    res.send('I\'m Working')
});

app.use(taskRoutes);
app.use(categorieRoutes);


app.listen(3001,()=> console.log("listening on port 3001"));