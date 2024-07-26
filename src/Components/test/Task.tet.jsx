import Task from "../ListTasks/Components/Task";

test("popover responds to hover", () => {
    render(<Task />);
      const nullPopover = screen.queryByText(/Todo/i);
    expect(nullPopover).not.toBeInTheDocument();
  });