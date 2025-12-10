import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero Component",()=>{
  test("renders hero heading", () => {
  render(<Hero />);
  const heading = screen.getByRole("heading", { level: 1 });

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/invest in everything/i);
});
});
