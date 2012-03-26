/*
 * GET eins page.
 */

exports.eins = function(req, res) {
    res.render('eins', {
        title: 'Eins',
        name: 'eins'
    });
};
