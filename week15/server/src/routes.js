module.exports = function (app) {
  const member = require("./controller");

  app.get("/", member.greetMember); // 노드 서버를 켰을 때 템플릿 엔진을 확인하기 위한 코드

  app.get("/members", member.getMemberList); // 이게 엔드포인트래
  app.post("/members", member.createMembers);
};
