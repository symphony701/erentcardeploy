import {Car} from "./car";
import {Client} from "./client";

export interface Reservation{
  "id":number,
  "reserveDate":Date,
  "returnDate":Date,
  "mount":number,
  "status":number,
  "car":Car
  "client":Client
}
