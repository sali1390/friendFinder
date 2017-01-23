var path = require('path');
var friendsData = require('../data/friends.js')

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    })
    
    function compareUsers(req, res){
        for (var i=0; i<friendsData.length; i++){
            var scoreDifference=0;
            for (var p=0; p<friendsData[i].scores.length; p++){
                scoreDifference += Math.abs(friendsData[i].scores[p] - parseInt(req[p]));     
            }
            if (scoreDifference < 15){
                return(friendsData[i]);
            }
        }
    }
    
    app.post('/api/friends', function(req, res){
        var scores = (req.body.scores);
        
        friendsData.push(req.body);
        
        res.json(compareUsers(scores));
    })
}