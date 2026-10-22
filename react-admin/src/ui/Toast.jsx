import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastCtx = createContext(() => {});

export function useToast() {
  return useContext(ToastCtx);
}

export function ToastProvider({ children }) {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  const toast = useCallback((text, isError) => {
    setMsg(text);
    setErr(!!isError);
    setShow(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 2200);
  }, []);

  return (
    <ToastCtx.Provider value={toast}>
      {children}
      <div
        className={
          "adm-toast" + (err ? " adm-toast--err" : "") + (show ? " is-show" : "")
        }
        aria-live="polite"
      >
        {msg}
      </div>
    </ToastCtx.Provider>
  );
}
