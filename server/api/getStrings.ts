import { IString } from "~/interfaces/interfaces";
import { openDb } from "~/utils/db";

export default defineEventHandler(async () => {
  const database = await openDb("everything");
  const collection = database.collection<IString>("strings");

  const allStrings: IString[] = [];

  const cursor = collection.find({});

  for await (const doc of cursor) {
    allStrings.push({
      ...doc,
      newTranslation: doc.translated,
      searchOriginal: doc.original.toLowerCase(),
      searchTranslated: doc.translated.toLowerCase()
    });
  }

  return allStrings;
});