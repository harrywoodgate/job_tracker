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
    initialEntries: ["/login"],
  });
  render(<RouterProvider router={router} />);
  vi.mocked(useMediaQuery).mockReturnValue(true);

  mockHooks();

  return { user };
}

describe("login", () => {
  it("calls supabase sign in function with correct inputs", async () => {
    const { user } = setup();

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "email@example.com",
    );
    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "password123",
    );
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "email@example.com",
      password: "password123",
    });
  });
  it("redirects to dashboard on sign in", async () => {
    const { user } = setup();

    await user.type(
      screen.getByPlaceholderText("you@example.com"),
      "email@example.com",
    );
    await user.type(
      screen.getByPlaceholderText("Enter your password"),
      "password123",
    );
    await user.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Applications Trend" }),
      ).toBeInTheDocument();
    });
  });
  it("link takes user to sign up page", async () => {
    const { user } = setup();

    const signUpLink = screen.getByRole("link", { name: "Sign up" });
    await user.click(signUpLink);

    expect(
      screen.getByRole("heading", { name: "Create your account" }),
    ).toBeInTheDocument();
  });
});
