import { IString } from "~/interfaces/interfaces";
import { closeClient, openDb } from "~/utils/db";

export default defineEventHandler(async (event) => {
  let allStrings: IString[] = [];

  try {
    const database = await openDb('everything');
    const collection = database.collection<IString>('strings');

    const searchResult = await collection.find({})

    for await (const doc of searchResult) {
      allStrings.push(doc as IString);
    }
  } catch (e) {
    console.error(e);
  } finally {
    closeClient()
  }

  return allStrings;
})
