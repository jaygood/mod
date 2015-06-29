const express = require('express');
const app = express();

//Create a static file server
app.use(express.static(`${__dirname}/public`));

app.get('/api/okay', function(req, res) {
  res.send('okay');
});

const port = process.env.PORT || 6661;
app.listen(port, () => {
  console.log(`Express server started on port: ${port}`);
});

