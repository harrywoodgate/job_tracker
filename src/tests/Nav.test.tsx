import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";
import mockHooks from "./mockHooks";
import userEvent from "@testing-library/user-event";
import useMediaQuery from "../hooks/useMediaQuery";
import { supabase } from "../supabaseClient";

vi.mock("../supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
      getUser: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
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
  mockHooks();
  vi.mocked(useMediaQuery).mockReturnValue(true);

  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard"],
  });
  render(<RouterProvider router={router} />);

  const user = userEvent.setup();
  return { user };
}

describe("nav", () => {
  it("navigates to user dashboard", async () => {
    const { user } = setup();

    const dashboardLink = await waitFor(() =>
      screen.getByRole("link", { name: "Dashboard" }),
    );
    await user.click(dashboardLink);

    expect(
      screen.getByRole("heading", { name: "Applications Trend" }),
    ).toBeInTheDocument();
  });
  it("navigates to applications", async () => {
    const { user } = setup();

    const applicationsLink = await waitFor(() =>
      screen.getByRole("link", { name: "Applications" }),
    );
    await user.click(applicationsLink);

    expect(
      screen.getByRole("heading", { name: "Applications" }),
    ).toBeInTheDocument();
  });
  it("navigates to settings", async () => {
    const { user } = setup();

    const settingsLink = await waitFor(() =>
      screen.getByRole("link", { name: "Settings" }),
    );
    await user.click(settingsLink);

    expect(
      screen.getByRole("heading", { name: "Settings" }),
    ).toBeInTheDocument();
  });
  it("logs out", async () => {
    const { user } = setup();
    vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: null });

    const logOutButton = await waitFor(() =>
      screen.getByRole("button", { name: "Log out" }),
    );
    await user.click(logOutButton);

    expect(supabase.auth.signOut).toHaveBeenCalled();
  });
});
