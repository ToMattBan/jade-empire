import { IString } from "~/interfaces/interfaces";
import { openDb } from "~/utils/db";

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
  }

  return allStrings;
})
