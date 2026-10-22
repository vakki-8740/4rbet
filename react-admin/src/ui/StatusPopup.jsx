import { useEffect, useState } from "react";
import { STATUS } from "../lib/admin.js";

const OPTIONS = [
  { key: "pending", label: "Pending" },
  { key: "previewing", label: "Previewing" },
  { key: "successful", label: "Successful" }
];

export default function StatusPopup({ open, current, onClose, onUpdate }) {
  const [picked, setPicked] = useState(current || null);

  useEffect(() => {
    if (open) setPicked(current || null);
  }, [open, current]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="adm-pop is-open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="adm-pop-box" role="dialog" aria-modal="true">
        <div className="adm-pop-head">
          <h3>Update Status</h3>
          <p>Ek status choose karein, phir Update dabayein.</p>
        </div>

        <div className="adm-pop-body">
          {OPTIONS.map((o) => (
            <button
              key={o.key}
              type="button"
              className={
                "adm-opt adm-opt--" + o.key + (picked === o.key ? " is-on" : "")
              }
              onClick={() => setPicked(o.key)}
            >
              <i></i>
              {STATUS[o.key]}
            </button>
          ))}

          <button
            type="button"
            className="btn btn--block"
            disabled={!picked}
            style={{ opacity: picked ? 1 : 0.45 }}
            onClick={() => {
              if (!picked) return;
              onClose();
              onUpdate(picked);
            }}
          >
            Update
          </button>

          <button type="button" className="adm-pop-close" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
