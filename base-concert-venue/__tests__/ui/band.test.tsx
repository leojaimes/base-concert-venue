import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";

it("band component displays correct band", async () => {
  expect(1 + 1).toBe(2);
  const { fakeBands } = await readFakeData();

  render(<BandComponent band={{ ...fakeBands[0] }} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /The Wandering Bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});
it("error sended from backend respose getStaticProps", async () => {
  const message = `something is wron from getStatiProps`;
  const error = `Could not retrieve band data: ${message}`;
  render(<BandComponent band={null} error={message} />);
  const heading = screen.getByRole("heading", {
    name: error,
  });
  expect(heading).toBeInTheDocument();
});
