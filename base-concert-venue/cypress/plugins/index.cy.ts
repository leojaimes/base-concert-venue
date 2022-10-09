import { resetDB } from "@/__tests__/__mocks__/db/utils/reset-db";

export default (on: any, config: any) => {
  on("task", {
    "db:reset": () => resetDB().then(() => null),
  });
};
