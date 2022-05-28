const router = require("express").Router();
const { User } = require("../../models");
const { Band } = require("../../models");
const { Coordinator } = require("../../models");
const { SetList } = require("../../models");
const { Tag } = require("../../models");
const { Song } = require("../../models");
const withAuth = require("../../utils/auth");

// GET / api / Songs
router.get("/", (req, res) => {
  // Check for query keys
  const keys = Object.keys(req.query).length;
  
  if(keys){
    console.log("Query");
    const band_id = req.query.band_id;
    Band.findOne({
      where: { id: band_id },
      include: [
        {
          model: Song
        }
    ]
    })
    .then((dbSongData) => res.json(dbSongData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });    
  } else {
    Song.findAll()
    .then((dbSongData) => res.json(dbSongData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }  
});

module.exports = router;
  