import { useState } from "react";

const BASE = import.meta.env.BASE_URL;
const SRC = BASE + "USER-ICON/2288510.png";

export default function Avatar({ className = "adm-ava" }) {
  const [fail, setFail] = useState(false);

  return (
    <span className={className}>
      {fail ? (
        <span className="adm-ava-fb">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>
      ) : (
        <img src={SRC} alt="" onError={() => setFail(true)} />
      )}
    </span>
  );
}
