module.exports = (req, res) => {
  let body = req.body;
  let result = eval(body);
  res.status(200).send(result);
  // res.body(result);
};