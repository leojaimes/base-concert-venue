import { resetDB } from "@/__tests__/__mocks__/db/utils/reset-db";

export default (on: any, config: any) => {
  // this function was written in cypress.config.ts
  on("task", {
    "db:reset": () => resetDB().then(() => null),
  });
};
