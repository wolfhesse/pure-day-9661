/*
 * GET home page.
 */

exports.eins = function(req,res) {
	res.render("eins", { title: 'eins', name:'eins'});
};

exports.index = function(req, res) {
    res.render('index', {
        title: 'Express',
        name: 'roger'
    });
};
