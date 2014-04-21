
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect('/add')
};

/*exports.partial = function (req, res) {
  var name = req.params.name;
  res.render('partials/partial' + name);
};*/