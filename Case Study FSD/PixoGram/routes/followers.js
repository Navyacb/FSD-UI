var express = require('express');
var router = express.Router();
var passport = require('passport');
const userController = require('../controllers/users');

const {Followers} = require('../models/followers');
const {user} = require('../models/users');
router.get('/:userId', async function(req, res, next) {
    const followers = await Followers.find({userId: req.params.userId});
    console.log('users'+followers);
    if (followers.length==0) {
        console.log('No followers found');
        res.render('followers', { data:{ titleView: 'Followers Page', user: { _id:req.params.userId }, followers: followers  } });
    }
    else {
        console.log('Inside get followers');
        let followIDs=[];
        for (let i=0;i<followers.length;i++)
            followIDs.push(followers[i].followUserId);
        console.log(followIDs);
        userController.getUsers(followIDs,function(err,cust){
            res.render('followers', { data:{ titleView: 'Followers Page', user: { _id:req.params.userId }  , followers: followers, users:cust } });

        })
}});
router.delete(':userId', async function(req, res, next) {

    console.log(req.params.userId);
    const result = await Followers.deleteMany({userId:req.params.userId});
    console.log(result);
    res.send({success: true,  message: "record deleted"});
});

router.delete(':userId/:followUserId', async function(req, res, next) {
    console.log(req.params.userId);
    const result = await Followers.deleteOne({userId:req.params.userId, followUserId:req.params.followUserId});
    console.log(result);
    res.send({success: true,  message: "record deleted"});
});
module.exports = router;

