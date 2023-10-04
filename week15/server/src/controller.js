const Member = require("./models");
exports.greetMember = (req, res, next) => {
  return res.render("greeting.ejs");
};
exports.getMemberList = (req, res, next) => {
  Member.find().then((memberListData) => {
    return res.render("attendance.ejs", { members: memberListData });
  });
};
exports.createMembers = (req, res, next) => {
  const name = req.body.name;
  const department = req.body.department;
  const part = req.body.part;
  const member = new Member({
    name: name,
    department: department,
    part: part,
  });
  member
    .save()
    .then((newMember) => {
      // return res.redurect('/members');
      return res.status(201).json({
        message: "New member successfully created",
        newMemberInfo: newMember,
      });
    })
    .catch((err) => console.log("err", err));
};
