module.exports = (req, res) => {
    let body = req.body;
    let result = eval(body);
    res.body(result);
  };