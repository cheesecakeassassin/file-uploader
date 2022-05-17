// Declaring port for server to be hosted on
const PORT = process.env.PORT || 3001;
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `${__dirname}/public/files/temp`
  })
);

app.post('/upload', (req, res, next) => {
  let uploadFile = req.files.file;
  const name = uploadFile.name;
  const md5 = uploadFile.md5;
  const saveAs = `${md5}_${name}`;
  uploadFile.mv(`${__dirname}/public/files/${saveAs}`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json({ status: 'uploaded', name, saveAs });
  });
});

app.get('/', (req, res) => {
  return res.status(200).send("It's working");
});

// Runs Express server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});