import { IString } from "~/interfaces/interfaces";
import { openDb } from "~/utils/db";

export default defineEventHandler(async (event) => {
  const body: IString = await readBody(event)

  let success = false;

  try {
    const database = await openDb('everything');
    const collection = database.collection('strings');

    const res = await collection.updateOne(
      { original: body.original },
      {
        $set: {
          status: body.status,
          translated: body.translated
        }
      }
    )

    success = res.modifiedCount > 0;
  } catch (e) {
    console.error(e);
  }

  return {
    status: success ? 200 : 500
  }
})
