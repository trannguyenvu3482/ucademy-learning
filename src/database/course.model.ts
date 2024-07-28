import { ECourseLevel, ECourseStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  slug: string;
  status: ECourseStatus;
  created_at: Date;
  author: Schema.Types.ObjectId;
  level: ECourseLevel;
  views: number;
  order: number;
  rating: number[];
  info: {
    requirements: string[];
    benefits: string[];
    qa: {
      question: string;
      answer: string;
    }[];
  };
  lectures: Schema.Types.ObjectId[];
  _destroy?: boolean;
}

const userSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  intro_url: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  sale_price: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINNER,
  },
  views: {
    type: Number,
    default: 0,
  },
  rating: {
    type: [Number],
    default: [5],
  },
  info: {
    requirements: {
      type: [String],
    },
    benefits: {
      type: [String],
    },
    qa: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },
  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
  _destroy: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
});

const Course = models.Course || model<ICourse>("Course", userSchema);

export default Course;
