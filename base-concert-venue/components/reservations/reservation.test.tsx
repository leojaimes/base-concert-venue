import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

it("reservation shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

it("reservation page shows 'sold out' message and NOT purchase button if there are no seats available", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);
  const soldOutMessage = await screen.findByText(/Show is sold out!/i);

  expect(soldOutMessage).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", {
    name: /purchase/i,
  }); //

  expect(purchaseButton).not.toBeInTheDocument();
});
