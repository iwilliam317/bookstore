const app = require('./config/server.js');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});