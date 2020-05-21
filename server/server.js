const express = require('express');
const cors = require('cors');
const port = 8000;

require('./config/mongoose.config');

const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyRoutes = require('./routes/product.routes');
AllMyRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));