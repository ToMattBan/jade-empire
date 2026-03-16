import { IString } from '~/interfaces/interfaces'
import { openDb } from '~/utils/db'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'text/event-stream')
  setHeader(event, 'Cache-Control', 'no-cache')
  setHeader(event, 'Connection', 'keep-alive')

  const database = await openDb('everything');
  const collection = database.collection<IString>('strings');

  const changeStream = collection.watch();

  const send = (data: any) => {
    event.node.res.write(`data: ${JSON.stringify(data)}\n\n`)
  }

  changeStream.on('change', (change) => {
    if (change.operationType === 'update') {
      send({
        type: 'update',
        id: change.documentKey._id,
        updatedFields: change.updateDescription.updatedFields
      })
    }
  })

  event.node.req.on('close', () => {
    changeStream.close()
  })
})