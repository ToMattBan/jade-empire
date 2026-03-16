import { IString, IUpdateString } from "~/interfaces/interfaces";
import { openDb } from "~/utils/db";

export default defineEventHandler(async (event) => {
  const res = event.node.res;

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
  });

  const database = await openDb("everything");
  const collection = database.collection<IString>("strings");

  const changeStream = collection.watch();

  const send = (data: IUpdateString) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  changeStream.on("change", (change) => {
    if (change.operationType === "update") {
      send({
        _id: change.documentKey._id,
        translated: change.updateDescription.updatedFields?.translated,
        status: change.updateDescription.updatedFields?.status
      });
    }
  });

  const interval = setInterval(() => {
    res.write(":keepalive\n\n")
  }, 20000)

  event.node.req.on("close", async () => {
    clearInterval(interval);
    changeStream.close();
    res.end();
  });
});