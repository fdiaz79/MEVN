const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

//initialize the app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));