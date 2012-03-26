/*
 * GET eins page.
 */

exports.eins = function(req, res) {
    res.render('eins', {
        title: 'Eins',
        name: 'eins'
    });
};

exports.zwo = function(req, res) {
    var world = {
        title: '2er world',
        name: 'sample world'};
    res.render('index',world);
};