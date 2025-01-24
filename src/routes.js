const express = require("express");
const customersController = require("./controllers/CustomersController");
const router = express.Router();


router.route("/customers").get(customersController.all);
router.route("/customers/:id").get(customersController.one);
router.route("/customers").post(customersController.create);
router.route("/customers/:id").put(customersController.update);
router.route("/customers/:id").delete(customersController.delete);

module.exports = router;