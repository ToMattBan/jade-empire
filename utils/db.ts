import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || '';
let client: MongoClient;

export function openClient() {
  client = new MongoClient(uri);
}

export async function closeClient() {
  await client.close();
}

export async function openDb(dbName: string) {
  if (!client) await openClient();
  return client.db(dbName);
}