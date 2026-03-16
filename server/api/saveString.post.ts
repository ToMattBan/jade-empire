import { IString } from "~/interfaces/interfaces";
import { openDb } from "~/utils/db";

export default defineEventHandler(async (event) => {
  const body: IString = await readBody(event)

  let success = false;
  let response;

  try {
    const database = await openDb('everything');
    const collection = database.collection('strings');

    const res = await collection.updateOne(
      { _id: body._id as any },
      {
        $set: {
          status: body.status,
          translated: body.translated
        }
      }
    )

    response = res;
    success = res.modifiedCount > 0;
  } catch (e) {
    console.error(e);
    response = e;
  }

  if (!success) throw createError({
    statusCode: 500,
    statusMessage: JSON.stringify(response)
  })

  return {
    statusCode: 200
  }
})
