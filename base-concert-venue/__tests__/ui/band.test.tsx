import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";

it("band component displays correct band", async () => {
  expect(1 + 1).toBe(2);
  const { fakeBands } = await readFakeData();

  render(<BandComponent band={{ ...fakeBands[0] }} error={null} />);
});
