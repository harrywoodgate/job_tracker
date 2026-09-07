import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import type { Session } from "@supabase/supabase-js";

export default function ProtectedRoute({
  children,
}: {
  children: React.JSX.Element;
}) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session),
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!session) return <Navigate to="/" replace />;

  return children;
}
