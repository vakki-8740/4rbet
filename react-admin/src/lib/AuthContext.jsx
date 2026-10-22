import { createContext, useContext, useEffect, useState } from "react";
import { onAuth } from "./auth.js";

const Ctx = createContext({ user: null, ready: false, error: "" });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    let unsub = () => {};

    try {
      unsub = onAuth((u) => {
        if (!alive) return;
        setUser(u || null);
        setReady(true);
      });
    } catch (err) {
      setError(err && err.message ? err.message : String(err));
      setReady(true);
    }

    return () => {
      alive = false;
      if (unsub) unsub();
    };
  }, []);

  return <Ctx.Provider value={{ user, ready, error }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  return useContext(Ctx);
}
