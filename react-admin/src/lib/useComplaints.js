import { useCallback, useEffect, useState } from "react";
import { cacheRead, listComplaints, subscribe } from "./complaints.js";

export function useComplaints() {
  const [list, setList] = useState(cacheRead);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    return listComplaints().then((l) => {
      setList(l);
      setReady(true);
      return l;
    });
  }, []);

  useEffect(() => {
    let alive = true;

    const unsub = subscribe((l) => {
      if (alive) setList(l);
    });

    refresh();

    const onSync = () => {
      if (alive) setList(cacheRead());
    };
    const onFocus = () => {
      refresh();
    };

    window.addEventListener("4r-sync", onSync);
    window.addEventListener("focus", onFocus);

    return () => {
      alive = false;
      if (unsub) unsub();
      window.removeEventListener("4r-sync", onSync);
      window.removeEventListener("focus", onFocus);
    };
  }, [refresh]);

  return { list, ready, refresh };
}
