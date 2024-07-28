import { Document, model, models, Schema } from "mongoose";

export interface ILecture extends Document {
  _id: string;
  title: string;
  course: Schema.Types.ObjectId;
  lessons: Schema.Types.ObjectId[];
  order: number;
  created_at: Date;
  _destroy?: boolean;
}

const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
});

const Lecture = models.Lecture || model<ILecture>("Lecture", lectureSchema);

export default Lecture;
