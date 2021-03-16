const router = require('express').router();

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;