import {Injectable} from "@tsed/common";
import {Event} from "../../models/Event";
import {MemoryCollection} from "../../utils/MemoryCollection";

@Injectable()
export class CalendarEventsService extends MemoryCollection<Event> {
  constructor() {
    super(Event, require("../../../resources/events.json"));
  }

  findById(id: string): Event {
    return this.findOne({_id: id});
  }
}
