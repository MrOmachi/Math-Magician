import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Calculator from "./Calculator";

describe("Testing the App UI", () => {
  test("Testing home UI component", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  // test("Calculator UI component", async () => {
  //   render(
  //     <Router>
  //       <Calculator />
  //     </Router>
  //   );
  //   const btn = await screen.findAllByRole("button");
  //   expect(btn.length).toBe(19);
  // });

  // test("Quote UI component", () => {
  //   render(
  //     <Router>
  //       <Quotes />
  //     </Router>
  //   );

  //   const str = screen.getByText(
  //     /Mathematics is not about numbers, equations, computations or algorithms, it is about understanding - William Paul Thurston/i
  //   );

  //   expect(str).toBeInTheDocument();
  // });
});
