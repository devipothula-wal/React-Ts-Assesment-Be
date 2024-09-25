const express = require("express");
const router = express.Router();

const transactionRouter = require('./transaction.route')
const userRouter = require('./user.route')

router.use('/transaction', transactionRouter);
router.use('/user', userRouter);

module.exports = router;