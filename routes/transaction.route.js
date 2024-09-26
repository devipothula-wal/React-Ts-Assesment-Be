const express = require("express");
const {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transactionController");
const router = express.Router();
const { authMiddleware } = require('../middlewares/authrization');
const _ = require('lodash')

// get all transactions
router.get("/", authMiddleware,  async (req, res,next) => {
  try {
    const result = await getTransactions(_.get(req.user, 'userId'));
    res.status(200).send({ success: true, data: result });
  } catch (err) {

    next({
      status: 500,
      message:err.message || 'Something went wrong try again!'
  })
  }
});

// create new transaction
router.post("/", authMiddleware,  async (req,res,next) => {
  try {
    const result = await createTransaction(req.body);
    res.status(200).send({ success: true, data: result });
  } catch (err) {

    next({
      status: 500,
      message:err.message || 'Something went wrong try again!'
  })
  }
});

// create new transaction
router.put("/:id", authMiddleware, async (req, res,next) => {
  try {
    const { id } = req.params;
    const result = await updateTransaction(id, req.body);
    res.status(200).send({ success: true, data: result });
  } catch (err) {

    next({
      status: 500,
      message:err.message || 'Something went wrong try again!'
  })
  }
});

// delete existing transaction
router.delete("/:id", authMiddleware, async (req, res,next) => {
  try {
    const result = await deleteTransaction(req.params.id);
    res.status(200).send({ success: true, data: result });
  } catch (err) {

    next({
      status: 500,
      message:err.message || 'Something went wrong try again!'
  })
  }
});

module.exports = router;
