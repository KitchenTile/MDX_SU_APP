import mongoose from "mongoose";

interface IEvent {
  title: string;
  venue: string;
  sDate: Date;
  eDate: Date;
  location: string;
}

const eventSchema = new mongoose.Schema<IEvent>({
  title: { type: String, required: true },
  venue: { type: String, required: true },
  sDate: { type: Date, required: true, unique: true },
  eDate: { type: Date, required: true, unique: true },
  location: { type: String, required: false },
});

const EventModel = mongoose.model<IEvent>("User", eventSchema);

export default EventModel;
