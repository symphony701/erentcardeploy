import {Car} from "./car";
import {Plan} from "./plan";

export interface Owner{
  "id":number;
  "names":string;
  "lastNames":string;
  "email":string;
  "Password":string;
  "contactNumber":number;
  "dni":number;
  "image":string;
  "rating":number;
  "plan":Plan;
  "cars":Car[];
}
