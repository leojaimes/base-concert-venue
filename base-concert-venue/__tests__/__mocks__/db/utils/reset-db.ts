import { readFakeData } from "@/__tests__/__mocks__/fakeData/";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

import { fakeUserReservations } from "../../fakeData/userReservations";

export const resetDB = async () => {
  // fake safe against  resetting production db!

  const safeToReset = process.env.NODE_ENV === "test";

  if (safeToReset === false) {
    console.log(
      "WARNING: database reset unavailable outside test environment! "
    );

    return;
  }
  // overwrithing data in files
  const { fakeBands, fakeReservations, fakeShows, fakeUsers } =
    await readFakeData();
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
