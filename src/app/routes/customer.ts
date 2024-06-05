import { createCustomerController } from '@/src/app/controller/createCustomer';

const express = require('express');

const router = express.Router();

console.log('customers route');

router.post('/', createCustomerController);

module.exports = router;
