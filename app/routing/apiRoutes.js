var friendData = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    var userScores = req.body.scores;
    var totalDiffsArr = [];
    for (var i = 0; i < friendData.length; i++) {
      var friendScores = friendData[i].scores;
      var diffs = [];
      var totalDiff = 0;

      for (var j = 0; j < friendScores.length; j++) {
        diffs.push(Math.abs(userScores[j] - friendScores[j]));
      }

      for (var k = 0; k < diffs.length; k++) {
        totalDiff += diffs[k];
      }

      totalDiffsArr.push(totalDiff);
    }

    var min = totalDiffsArr.reduce((a, b) => Math.min(a, b));
    var matchIndex = totalDiffsArr.indexOf(min);
    var match = friendData[matchIndex];

    friendData.push(req.body);
    res.json(match);
  });
};
