const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer');
const checkAuth = require('../middleware/check-auth');

router.post("/", CustomerController.add_customer_add);

router.get("/", CustomerController.get_customer_get);

router.get("/:customerId", CustomerController.get_customer_by_id);

router.put("/:customerId", CustomerController.update_customer_update);

router.delete("/delete-customer/:customerId", CustomerController.delete_customer_delete)

module.exports = router;