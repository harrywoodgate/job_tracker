import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../routes";
import mockHooks from "./mockHooks";
import userEvent from "@testing-library/user-event";
import useManageApplications from "../hooks/useManageApplications";
import { useQuery } from "@tanstack/react-query";

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

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

const mockAddApplication = vi.fn();
const mockDeleteApplication = vi.fn();
const mockUpdateApplication = vi.fn();

function setup() {
  mockHooks();

  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard/applications"],
  });
  render(<RouterProvider router={router} />);
  const user = userEvent.setup();

  vi.mocked(useManageApplications).mockReturnValue({
    applicationHistory: [
      {
        id: "",
        current_status: "applied",
        job_title: "example job title",
        company: "example company",
        job_type: "remote",
        applied: "2026-01-01",
        response: "",
        interview: "",
        offer: "",
        rejected: "",
      },
    ],
    addApplication: mockAddApplication,
    updateApplication: mockUpdateApplication,
    deleteApplication: mockDeleteApplication,
  });
  vi.mocked(useQuery).mockReturnValue({
    data: { data: { logo: { url: null } } },
  } as ReturnType<typeof useQuery>);

  return { user };
}

describe("applications", () => {
  it("form calls add application function", async () => {
    const { user } = setup();

    const jobTitleInput = await screen.findByPlaceholderText(
      "e.g. Coffee Barista",
    );
    const companyInput = await screen.findByPlaceholderText("e.g. Acme Inc");
    const dateInput = await screen.findByLabelText("Date *");
    const saveApplicationButton = await screen.findByRole("button", {
      name: "Save application",
    });

    await user.type(jobTitleInput, "example job title");
    await user.type(companyInput, "example company");
    await user.type(dateInput, "2026-01-01");
    await user.click(saveApplicationButton);
    expect(mockAddApplication).toHaveBeenCalled();
  });
  it("edit button fills form with correct inputs and calls update function", async () => {
    const { user } = setup();

    const editButton = await screen.findByText("Edit");
    await user.click(editButton);
    expect(
      await screen.findByPlaceholderText("e.g. Coffee Barista"),
    ).toHaveValue("example job title");
    expect(await screen.findByPlaceholderText("e.g. Acme Inc")).toHaveValue(
      "example company",
    );
    expect(await screen.findByLabelText("Date *")).toHaveValue("2026-01-01");

    const saveApplicationButton = await screen.findByRole("button", {
      name: "Save application",
    });
    await user.click(saveApplicationButton);
    expect(mockUpdateApplication).toHaveBeenCalled();
  });
  it("delete button calls delete function", async () => {
    const { user } = setup();

    const deleteButton = await screen.findByText("Delete");
    await user.click(deleteButton);
    expect(mockDeleteApplication).toHaveBeenCalled();
  });
  it("add button highlights correct status", async () => {
    const { user } = setup();

    const addButton = await screen.findAllByRole("button", { name: "Add" });
    await user.click(addButton[0]);
    const appliedStatusButton = await screen.findByRole("button", {
      name: "Applied",
    });
    expect(appliedStatusButton).toHaveClass("bg-blue-700");
  });
  it("sorts applications by date", async () => {
    const { user } = setup();

    vi.mocked(useManageApplications).mockReturnValue({
      applicationHistory: [
        {
          id: "1",
          current_status: "applied",
          job_title: "job one",
          company: "example company",
          job_type: "remote",
          applied: "2026-01-01",
          response: "",
          interview: "",
          offer: "",
          rejected: "",
        },
        {
          id: "2",
          current_status: "applied",
          job_title: "job two",
          company: "example company",
          job_type: "remote",
          applied: "2026-01-02",
          response: "",
          interview: "",
          offer: "",
          rejected: "",
        },
      ],
      addApplication: mockAddApplication,
      updateApplication: mockUpdateApplication,
      deleteApplication: mockDeleteApplication,
    });
    const newestFirst = await screen.findByText("Newest first");
    await user.click(newestFirst);
    const applications = await screen.findAllByTestId("application");
    expect(applications[0]).toHaveTextContent("job two");
  });
});
