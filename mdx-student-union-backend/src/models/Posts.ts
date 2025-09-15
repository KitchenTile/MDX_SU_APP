import mongoose from "mongoose";

const options = { discriminatorKey: "type", timestamps: true };

const basePostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String },
    tags: [
      {
        type: String,
      },
    ],
  },
  options
);

interface IEvent {
  title: string;
  venue: string;
  sDate: Date;
  eDate: Date;
  location: string;
}

interface ICommunication {
  body: string;
  author: string;
}

export const PostModel = mongoose.model("Post", basePostSchema);

export const EventModel = PostModel.discriminator(
  "event",
  new mongoose.Schema<IEvent>({
    venue: String,
    sDate: Date,
    eDate: Date,
    location: String,
  })
);

export const CommunicationModel = PostModel.discriminator(
  "communication",
  new mongoose.Schema<ICommunication>({
    body: String,
    author: String,
  })
);


