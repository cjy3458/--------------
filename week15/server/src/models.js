// 몽구스 스키마를 만드는 파일

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  part: {
    type: String,
    required: true,
  },
});

// members는 콜렉션 이름을 members라고 지정했기 때문에 접근하기 위해 작성!

module.exports = mongoose.model("Member", memberSchema, "members");
