import Count from "../Count";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Count", () => {
  it("숫자 증가", () => {
    renderCounter();
    const button = screen.getByText("+");

    fireEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

// describe("Count", () => {
//   it("렌더링", () => {
//     renderCounter();
//     expect(screen.getByText("Count")).toBeInTheDocument();
//   });

//   it("숫자 증가", () => {
//     renderCounter();
//     const button = screen.getByText("+");

//     fireEvent.click(button);

//     expect(screen.getByText("1")).toBeInTheDocument();
//   });

//   it("숫자 감소", () => {
//     renderCounter();

//     const button = screen.getByText("-");
//     fireEvent.click(button);

//     expect(screen.getByText("-1")).toBeInTheDocument();
//   });
// });

function renderCounter() {
  return render(<Count />);
}
