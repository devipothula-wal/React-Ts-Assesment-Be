const Transaction = require("../models/transaction");

exports.getTransactions = async (userId) => {
  const transactions = await Transaction.find({userId});
  return transactions;
};

exports.createTransaction = async (dataObj) => {
  const { title, amount, traType, category, date,userId } = dataObj;
  const transaction = await Transaction.create({title,amount,traType,category,date,userId});
  return transaction;
};

exports.updateTransaction = async (id, data) => {
  if (data._id)delete data._id
  await Transaction.findByIdAndUpdate(id, data);
  return { message: "Transaction updated successfully" };
};

exports.deleteTransaction = async (id) => {
  await Transaction.findByIdAndDelete(id);
  return { message: "Transaction  deleted successfully" };
};
