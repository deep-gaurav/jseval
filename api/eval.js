module.exports = (req, res) => {
  let body = req.body;
  let result = eval(body);
  res.status(200).send(req.body);
  // res.body(result);
};