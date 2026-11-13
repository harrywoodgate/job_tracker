import { supabase } from "../supabaseClient";
import { vi } from "vitest";
import type { User, Session } from "@supabase/supabase-js";
import useEditSettings from "../hooks/useEditSettings";
import useManageApplications from "../hooks/useManageApplications";

const mockUser = {
  id: "123",
  email: "example@email.com",
} as User;

const mockSession = {
  access_token: "mock-access-token",
  refresh_token: "mock-refresh-token",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  user: mockUser,
} as Session;

export default function mockHooks() {
  vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
    data: {
      user: mockUser,
      session: mockSession,
    },
    error: null,
  });

  vi.mocked(supabase.auth.signUp).mockResolvedValue({
    data: {
      user: mockUser,
      session: mockSession,
    },
    error: null,
  });

  vi.mocked(supabase.auth.getSession).mockResolvedValue({
    data: { session: mockSession },
    error: null,
  });

  vi.mocked(supabase.auth.onAuthStateChange).mockImplementation((callback) => {
    callback("SIGNED_IN", mockSession);

    return {
      data: {
        subscription: {
          id: "mock-subscription-id",
          callback,
          unsubscribe: vi.fn(),
        },
      },
    };
  });

  vi.mocked(useEditSettings).mockReturnValue({
    user: {
      display_name: "",
      current_email: "",
      new_email: "",
      new_password: "",
      confirm_password: "",
      created_at: "",
    },
    settingsDispatch: vi.fn(),
  });

  vi.mocked(useManageApplications).mockReturnValue({
    applicationHistory: [],
    addApplication: vi.fn(),
    updateApplication: vi.fn(),
    deleteApplication: vi.fn(),
  });
}
