const express = require("express");
const {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transactionController");
const router = express.Router();

// get all transactions
router.get("/:userId", async (req, res,next) => {
  try {
    const result = await getTransactions(req.params.userId);
    res.status(200).send({ success: true, data: result });
  } catch (err) {

    next({
      status: 500,
      message:err.message || 'Something went wrong try again!'
  })
  }
});

// create new transaction
router.post("/", async (req,res,next) => {
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
router.put("/:id", async (req, res,next) => {
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
router.delete("/:id", async (req, res,next) => {
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
