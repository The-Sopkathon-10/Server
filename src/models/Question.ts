import mongoose from "mongoose";
import { QuestionInfo } from "../interfaces/question/questionInfo";

const QuestionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  question: {
    type: String,
    required: true,
  },
  choices: {
    type: [String],
  },
  decision: {
    type: String,
  },
  content: {
    type: String,
  },
});

export default mongoose.model<QuestionInfo & mongoose.Document>("Question", QuestionSchema);
