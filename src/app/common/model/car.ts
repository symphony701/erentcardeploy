import {Brand} from "./brand";
import {Feature} from "./feature";
import {Owner} from "./owner";

export interface Car{
  "id":number,
  "model":string,
  "plateNumber":string,
  "type":string,
  "mileage":number,
  "description":string,
  "image":string,
  "dayCost":number,
  "rating":number,
  "state":number,
  "brand":Brand,
  "owner_id":number
  "features":Feature[]
  "owner":Owner
}
