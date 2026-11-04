import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";
import mockHooks from "./mockHooks";
import saveSettings from "../utils/saveSettings";
import userEvent from "@testing-library/user-event";

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

vi.mock("../utils/saveSettings", () => ({
  default: vi.fn(),
}));

function setup() {
  mockHooks();
  vi.mocked(saveSettings).mockResolvedValue(undefined);

  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard/settings"],
  });
  render(<RouterProvider router={router} />);

  const user = userEvent.setup();
  return { user };
}

describe("settings", () => {
  it("saves settings", async () => {
    const { user } = setup();

    const saveButton = await waitFor(() =>
      screen.getByRole("button", { name: "Save" }),
    );
    await user.click(saveButton);

    expect(saveSettings).toHaveBeenCalled();
  });
  it("opens reset password menu", async () => {
    const { user } = setup();

    const resetPassword = await waitFor(() =>
      screen.getByRole("button", { name: "Reset Password" }),
    );
    await user.click(resetPassword);

    expect(
      screen.getByPlaceholderText("Enter new password here"),
    ).toBeInTheDocument();
  });
});
