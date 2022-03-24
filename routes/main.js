const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const Writing = require("../schemas/writing")
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
	res.render("../static/main");
});

//포스팅 목록 조회
router.get("/postingList", async (req, res) => {  
  const writing = await Writing.find().sort({date: -1});
  res.json({ writing });
  console.log("json전송완료");
});

router.get("/postingList_render", async (req, res, next) => {  
  res.render("../static/postingList");
  console.log("render완료");
  });  

//포스팅 양식
router.get('/recordPosting', (req, res) => {
	res.render("../static/recordForm");
});

//포스팅 입력값 저장
router.post("/recordPostingSave", async(req, res) => {
    let { name, title, content, postPassword } = req.body;
    let dataList = Writing.find({});
    let postNumber = await dataList.countDocuments() + 1
    let date = new Date
      await Writing.create({ postNumber: postNumber, date: date, name: name, title: title, content: content, postPassword: postPassword });
      res.send("저장이 완료되었습니다!")
    }
  //}
  );
     
module.exports = router;