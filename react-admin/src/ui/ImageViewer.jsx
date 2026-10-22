import { useEffect } from "react";
import { IconDown, IconX } from "./icons.jsx";

export default function ImageViewer({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  if (!image) return null;

  const download = () => {
    let name = (image.name || "image").replace(/[^\w.\- ]+/g, "_");
    if (!/\.[a-z0-9]{2,4}$/i.test(name)) name += ".jpg";

    const a = document.createElement("a");
    a.href = image.src;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="adm-viewer is-open" role="dialog" aria-modal="true">
      <div className="adm-viewer-img-wrap">
        <img alt="Complaint image" src={image.src} />
      </div>

      <p className="adm-viewer-name">{image.name || ""}</p>

      <div className="adm-viewer-acts">
        <button type="button" className="adm-vact adm-vact--close" onClick={onClose}>
          <IconX />
          Close
        </button>
        <button type="button" className="adm-vact adm-vact--down" onClick={download}>
          <IconDown />
          Download
        </button>
      </div>
    </div>
  );
}
