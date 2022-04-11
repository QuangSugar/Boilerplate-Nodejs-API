const router = require("express").Router();

router.use("/user", require("./userRouter"));

router.use("/auth", require("./auth"));

router.use("/admin", require("./adminRouter"));

router.use("/upload", require("./upload"));

module.exports = router;
