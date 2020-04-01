exports.defaultPage = (req, res, next) => {
    res.render('index', {
        title: 'Voopik Backend Challenge',
        madeBy: 'Amol Saini',
        email: 'amol.saini567@gmail.com',
        mobNo: '8126544009'
    })
};