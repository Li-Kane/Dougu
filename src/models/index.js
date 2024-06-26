// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserOrStorage = {
  "USER": "USER",
  "STORAGE": "STORAGE"
};

const Change = {
  "CHANGE": "CHANGE",
  "NOCHANGE": "NOCHANGE"
};

const { Organization, User, OrgUserStorage, Container, Equipment } = initSchema(schema);

export {
  Organization,
  User,
  OrgUserStorage,
  Container,
  Equipment,
  UserOrStorage,
  Change
};