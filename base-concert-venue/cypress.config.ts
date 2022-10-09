import { defineConfig } from "cypress";

import { resetDB } from "@/__tests__/__mocks__/db/utils/reset-db";
import { addBand } from "@/lib/features/bands/queries";
import { Band } from "@/lib/features/bands/types";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        "db:reset": () => resetDB().then(() => null),
        "add:band": (newBand: Band) => {
          console.log("adding band");

          addBand(newBand);

          return null;
        },
      });
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
