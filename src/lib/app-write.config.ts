import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  PUBLIC_BUCKET_ID,
  BASE_URL,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(BASE_URL!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const functions = new sdk.Functions(client);
export const users = new sdk.Users(client);
export const health = new sdk.Health(client);
export const messaging = new sdk.Messaging(client);
