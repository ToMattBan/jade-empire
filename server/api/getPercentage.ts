import { openDb } from "~/utils/db";

function getPercentage(number: number, total: number): number {
  return number * 100 / total;
}

export default defineEventHandler(async (event) => {
  const percentage = {
    revising: 0,
    translated: 0,
    pending: 0,
  }

  /* percentage.revising = 0;
  percentage.translated = 4.157530780907404;
  percentage.pending = 95.84246921909259; */

  try {
    const database = await openDb('everything');
    const collection = database.collection('strings');

    const revising = await collection.countDocuments({ status: "revising" });
    const translated = await collection.countDocuments({ status: "translated" });
    const pending = await collection.countDocuments({ status: "pending" });

    const totalRows = revising + translated + pending;

    percentage.revising = getPercentage(revising, totalRows);
    percentage.translated = getPercentage(translated, totalRows);
    percentage.pending = getPercentage(pending, totalRows);
  } catch (e) {
    console.error(e);
  }

  return percentage;
})
