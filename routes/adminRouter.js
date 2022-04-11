const router = require("express").Router();
const { userController,timeController } = require("../controllers");
const { auth } = require("../middleware");
const { authAdmin } = require("../middleware");

router.get("/all-infor", auth, authAdmin, userController.getUsersAllInfor);

router.patch(
  "/update_role/:id",
  auth,
  authAdmin,
  userController.updateUsersRole
);

router.delete("/delete/:id", auth, authAdmin, userController.deleteUser);

module.exports = router;
