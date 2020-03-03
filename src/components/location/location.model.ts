import { Client } from '../client/client.model'

export class location {
_id: string;
  name: string;
  storeNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  phone1: string;
  phone2: string;
  contact: string;
  email: string;
  addedDate: Date;
  removedDate: Date;
  notes: string;
  active: boolean;
  client: Client;
}