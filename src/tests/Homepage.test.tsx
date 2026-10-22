import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";
import userEvent from "@testing-library/user-event";

function setup() {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);

  return { user };
}

describe("Homepage", () => {
  it("login button takes you to login page", async () => {
    const { user } = setup();

    const loginButton = screen.getByRole("link", { name: "Log in" });
    await user.click(loginButton);

    expect(
      screen.getByRole("heading", { name: "Welcome back!" }),
    ).toBeInTheDocument();
  });
  it("get started button takes you to signup page", async () => {
    const { user } = setup();

    const getStartedButton = screen.getByRole("link", {
      name: "Get started for free",
    });
    await user.click(getStartedButton);

    expect(
      screen.getByRole("heading", { name: "Create your account" }),
    ).toBeInTheDocument();
  });
  it("sign up free button takes you to signup page", async () => {
    const { user } = setup();

    const getStartedButton = screen.getByRole("link", { name: "Sign up free" });
    await user.click(getStartedButton);

    expect(
      screen.getByRole("heading", { name: "Create your account" }),
    ).toBeInTheDocument();
  });
});
