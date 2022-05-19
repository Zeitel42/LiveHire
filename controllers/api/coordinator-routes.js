const router = require("express").Router();
const { Coordinator } = require("../../models/");
// const withAuth = require("../../utils/auth");

// GET / api / coordinators
router.get("/", (req, res) => {
  Coordinator.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbCoordinatorData) => res.json(dbCoordinatorData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/coordinators/1
router.get("/:id", (req, res) => {
  Coordinator.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    //   include: [
    //     {
    //       model: Post,
    //       attributes: ["id", "title", "post_url", "created_at"],
    //     },
    //     {
    //       model: Comment,
    //       attributes: ["id", "comment_text", "created_at"],
    //       include: {
    //         model: Post,
    //         attributes: ["title"],
    //       },
    //     },
    //     {
    //       model: Post,
    //       attributes: ["title"],
    //       through: Vote,
    //       as: "voted_posts",
    //     },
    //   ],
  })
    .then((dbCoordinatorData) => {
      if (!dbCoordinatorData) {
        res.status(404).json({ message: "No coordinator found with this id" });
        return;
      }
      res.json(dbCoordinatorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
