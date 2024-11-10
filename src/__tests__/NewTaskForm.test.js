import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByText(/Add task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const codeCount = screen.getAllByText(/Code/).length; // Change to getAllByText

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByText(/Add task/));

  expect(screen.getByText(/Pass the tests/)).toBeInTheDocument();

  expect(screen.getAllByText(/Code/).length).toBe(codeCount + 1); // Change to getAllByText
});
