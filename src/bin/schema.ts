import { db } from "../config/initDb.ts";

(async () => {
  console.info("Updating Schema...");
  await db.sync({ drop: true });
})();
