const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./band-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', bandRoutes);
router.use("/api", apiRoutes);

module.exports = router;
