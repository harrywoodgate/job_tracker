import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";
import mockHooks from "./mockHooks";
import useEditSettings from "../hooks/useEditSettings";
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
  mockHooks();
  vi.mocked(useMediaQuery).mockReturnValue(true);

  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard/userDashboard"],
  });
  render(<RouterProvider router={router} />);
}

describe("user dashboard", () => {
  it("renders users display name", async () => {
    setup();

    vi.mocked(useEditSettings).mockReturnValue({
      user: {
        display_name: "example user",
        current_email: "",
        new_email: "",
        new_password: "",
        confirm_password: "",
        created_at: "",
      },
      settingsDispatch: vi.fn(),
    });

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Welcome back, example user!" }),
      ).toBeInTheDocument();
    });
  });
});
