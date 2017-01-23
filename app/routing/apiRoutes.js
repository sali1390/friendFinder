var path = require('path');
var friendsData = require('../data/friends.js')

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    })
    
    function compareUsers(scores){
        for (var i=0; i<friendsData.length; i++){
            var scoreDifference=0;
            for (var p=0; p<friendsData[i].scores.length; p++){
                scoreDifference += Math.abs(friendsData[i].scores[p] - parseInt(scores[p]));
            }
            console.log(scoreDifference);
            if (scoreDifference <= 10){
                return friendsData[i];
            }     
        }
    }
    
    app.post('/api/friends', function(req, res){
        var scores = (req.body.scores);
        
        compareUsers(scores);
        
        friendsData.push(req.body);
    })
}