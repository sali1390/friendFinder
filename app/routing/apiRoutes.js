var path = require('path');
var friendsData = require('../data/friends.js')

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    })
    app.post('/api/friends', function(req, res){
        var scores = (req.body.scores);
        var scoreTotal=0;
        
        for(var i=0; i<scores.length; i++){
            scoreTotal += parseInt(scores[i]);
            
            console.log(scoreTotal)
        }
        
        friendsData.push(req.body);
    })
}