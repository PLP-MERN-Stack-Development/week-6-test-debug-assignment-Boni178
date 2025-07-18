import mongoose from 'mongoose';

const BugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved'],
    default: 'open'
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Bug', BugSchema);
