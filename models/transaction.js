const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  traType: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true,
  },
  category: { type: String, required: true },
  date: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  createdAt: { type: Date, default: Date.now },
  updatedAt:  {type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
