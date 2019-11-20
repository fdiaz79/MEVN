const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const posts = require('./routes/api/posts');

//initialize the app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));