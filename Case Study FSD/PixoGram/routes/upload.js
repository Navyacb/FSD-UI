var express = require('express');
var router = express.Router();
router.get('/:userId', async function( req, res, next) {
    console.log("Inside Upload");
    res.render('singlemedia', { data:{ titleView: 'Single Media Page',user: { _id:req.params.userId }} });
});

module.exports = router;