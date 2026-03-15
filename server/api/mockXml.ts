import { IString } from "~/interfaces/interfaces"

export default defineEventHandler((event) => {
  return [
    {
      "_id": "1",
      "status": "translated",
      "original": "ERROR: UNEXPECTED CHARACTER",
      "translated": "ERROR: UNEXPECTED CHARACTER",
      "changedNow": false
    },
    {
      "_id": "2",
      "status": "revising",
      "original": "ERROR: FATAL COMPILER ERROR",
      "translated": "ERROR: FATAL COMPILER ERROR",
      "changedNow": false
    },
    {
      "_id": "3",
      "status": "pending",
      "original": "ERROR: PROGRAM COMPOUND STATEMENT AT START",
      "translated": "",
      "changedNow": false
    },
    {
      "_id": "4",
      "status": "translated",
      "original": "ERROR: UNEXPECTED END COMPOUND STATEMENT",
      "translated": "ERROR: UNEXPECTED END COMPOUND STATEMENT",
      "changedNow": false
    },
    {
      "_id": "5",
      "soundId": "1235",
      "status": "translated",
      "original": "ERROR: AFTER END COMPOUND STATEMENT",
      "translated": "ERROR: AFTER END COMPOUND STATEMENT",
      "changedNow": false
    }
  ] as IString[]
})
