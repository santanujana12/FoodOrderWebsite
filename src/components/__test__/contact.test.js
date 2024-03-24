import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

// Local imports for testing
import Contact from "../Contact/Contact";

// Checking if the Contact Component rendered
test('Should test if the contact component rendered', () => { 
    render(<Contact/>);

    const heading = screen.getByRole("heading",{level:1});

    // Assertion
    expect(heading).toBeInTheDocument();
 })

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
 });