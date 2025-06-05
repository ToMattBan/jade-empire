import { IString } from "~/interfaces/interfaces";
import { closeClient, openDb } from "~/utils/db";

export default defineEventHandler(async (event) => {
  const body: IString = await readBody(event)
  console.log("🚀 ~ defineEventHandler ~ body:", body)

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
  } finally {
    closeClient();
  }

  if (!success) throw createError({
    statusCode: 500,
    statusMessage: JSON.stringify(response)
  })

  return {
    statusCode: 200
  }
})
