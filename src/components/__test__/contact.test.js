import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

// Local imports for testing
import Contact from "../Contact/Contact";

// Grouped Test case
describe("Testing of Contact us component",()=>{
  // Checking if the Contact Component rendered
  // it is an Alias of Test
  it("Should test if the contact component rendered", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", { level: 1 });

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  // Checking if the button tag is rendered
  test("Should test if the button tag in contact component rendered", () => {
    render(<Contact />);

    // Querrying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  // Checking if the textboxes are rendered and there are 2 textboxes
  test("Should test if there are two textboxes contact component rendered", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBox.length).toBe(2);
    // Alt approach
    expect(inputBox.length).not.toBe(3);
  });
})
