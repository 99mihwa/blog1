const express = require('express');
const app = express();
const port = 3000;
const blogRouter = require("./routes/main");
const connect = require("./schemas");
connect();
const requestMiddleware = (req, res, next) => {
    console.log("클라이언트 입력 주소:", req.originalUrl, "-", new Date())
    next();
  }
const bodyParser = require('body-parser');

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.json());

app.use(requestMiddleware);

app.use("/", blogRouter);
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.urlencoded({ extended: false }));





