import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";
import userEvent from "@testing-library/user-event";
import { supabase } from "../supabaseClient";
import mockHooks from "./mockHooks";
import useMediaQuery from "../hooks/useMediaQuery";

vi.mock("../supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
      getUser: vi.fn(),
      signUp: vi.fn(),
    },
  },
}));

vi.mock("../hooks/useEditSettings", () => ({
  default: vi.fn(),
}));

vi.mock("../hooks/useManageApplications", () => ({
  default: vi.fn(),
}));

vi.mock("../hooks/useMediaQuery", () => ({
  default: vi.fn(),
}));

function setup() {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/signup"],
  });
  render(<RouterProvider router={router} />);

  mockHooks();
  vi.mocked(useMediaQuery).mockReturnValue(true);

  return { user };
}

describe("sign up", () => {
  it("calls supabase sign up function with correct inputs", async () => {
    const { user } = setup();
    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "email@example.com",
    );
    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "password123",
    );
    await user.type(
      screen.getByPlaceholderText("Confirm password"),
      "password123",
    );
    await user.click(screen.getByRole("button", { name: "Create Account" }));

    expect(supabase.auth.signUp).toHaveBeenCalledWith({
      email: "email@example.com",
      password: "password123",
    });
  });
  it("redirects to dashboard on signup", async () => {
    const { user } = setup();
    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "email@example.com",
    );
    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "password123",
    );
    await user.type(
      screen.getByPlaceholderText("Confirm password"),
      "password123",
    );
    await user.click(screen.getByRole("button", { name: "Create Account" }));
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Applications Trend" }),
      ).toBeInTheDocument();
    });
  });
  it("link takes user to log in page", async () => {
    const { user } = setup();

    const loginLink = screen.getByRole("link", { name: "Log in" });
    await user.click(loginLink);

    expect(
      screen.getByRole("heading", { name: "Sign in to your account" }),
    ).toBeInTheDocument();
  });
});
