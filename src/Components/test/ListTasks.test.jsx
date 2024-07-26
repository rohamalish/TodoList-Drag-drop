import CreateTaks from "../CreateTaks";
import ListTasks from "../ListTasks/Components/ListTasks";
import '@testing-library/jest-dom/extend-expect';

test("ListTasks renders without crashing", () => {
    render(<ListTasks />)
});

test("input focus", () => {
    render(<CreateTaks />);
    expect(inputField).toHaveAccessibleName();
});

test("Form submission should not call add method if input field is empty", () => {
    render(<CreateTaks />);
    const btn = screen.getByText(/add/i);
  });