import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

it("show reservations per user correctly", async () => {
  render(<UserReservations userId={1} />);
  const purshaseButton = await screen.findByRole("button", {
    name: "Purchase more tickets",
  });
  expect(purshaseButton).toBeInTheDocument();
});

it("no render your tickets heading when user no have tickets", async () => {
  render(<UserReservations userId={2} />);
  const yourTicketsHeading = await screen.queryByRole("heading", {
    name: "Your Tickets",
  });
  expect(yourTicketsHeading).not.toBeInTheDocument();
});
