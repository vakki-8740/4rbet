import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FIELD_ORDER,
  STATUS,
  formatDateTime,
  statusOf
} from "../lib/admin.js";
import { deleteComplaint, updateStatus } from "../lib/complaints.js";
import { useComplaints } from "../lib/useComplaints.js";
import Shell from "../ui/Shell.jsx";
import Avatar from "../ui/Avatar.jsx";
import StatusPopup from "../ui/StatusPopup.jsx";
import ImageViewer from "../ui/ImageViewer.jsx";
import { useToast } from "../ui/Toast.jsx";
import { IconBack, IconCheck, IconEye, IconInbox, IconLock, IconWarn } from "../ui/icons.jsx";

export default function Complaint() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { list, ready } = useComplaints();

  const [rec, setRec] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState(null);

  const fromList = list.find((r) => r.id === id) || null;

  useEffect(() => {
    if (fromList) setRec(fromList);
  }, [fromList]);

  const loading = !rec && !ready;
  const missing = !rec && ready;

  const imgs = ((rec && rec.images) || []).filter((im) => im && im.dataUrl);
  const d = (rec && rec.data) || {};
  const st = statusOf(rec);
  const tight = imgs.length >= 2;

  const changeStatus = (next) => {
    updateStatus(rec.id, next).then((res) => {
      if (res.ok) {
        setRec((old) => (old ? { ...old, status: next, statusAt: new Date().toISOString() } : old));
        toast("Update Successful");
      } else {
        toast("Update nahi hua \u2014 " + (res.error || "storage full"), true);
      }
    });
  };

  const remove = () => {
    if (!window.confirm("Ye complaint permanently delete karein?")) return;
    deleteComplaint(rec.id).then((res) => {
      if (res.ok) navigate("/", { replace: true });
      else toast("Delete nahi hua \u2014 " + (res.error || "storage full"), true);
    });
  };

  return (
    <Shell>
      <main className="adm">
        <div className="adm-top">
          <Link className="adm-back" to="/">
            <IconBack />
            Home
          </Link>
        </div>

        {(loading || missing) && (
          <div className="adm-box">
            <div className="adm-empty" style={{ padding: "44px 20px" }}>
              <div className="adm-empty-ico">{missing ? <IconWarn size={26} /> : <IconInbox size={26} />}</div>
              <h3>{missing ? "Complaint nahi mili" : "Loading complaint..."}</h3>
              <p>
                {missing
                  ? "Ye complaint delete ho chuki hai ya link galat hai."
                  : "Cloud se data aa raha hai."}
              </p>
              {missing && (
                <Link className="btn" to="/">
                  Back to Home
                </Link>
              )}
            </div>
          </div>
        )}

        {rec && (
          <>
            <section className="adm-detail-head">
              <Avatar className="adm-ava adm-detail-ava" />
              <div className="adm-detail-who">
                <h1>{d.userName || "Unknown User"}</h1>
                <p>
                  {formatDateTime(rec.submittedAt)}{" \u00b7 "}{rec.id || ""}
                </p>
              </div>
              <span className={"adm-status adm-status--" + st}>{STATUS[st]}</span>
            </section>

            <section className="adm-box" style={{ marginBottom: 14 }}>
              <div className="adm-box-head">
                <h2>Status</h2>
                <span>User panel me bhi dikhega</span>
              </div>
              <div className="adm-statusbtn-wrap">
                <button type="button" className="btn adm-status-btn" onClick={() => setPopup(true)}>
                  <IconCheck />
                  Status Update
                </button>
              </div>
            </section>

            <section className="adm-box" style={{ marginBottom: 14 }}>
              <div className="adm-box-head">
                <h2>Complaint Details</h2>
                <span>{rec.category || "Complaint"}</span>
              </div>

              <div className="adm-rows">
                {FIELD_ORDER.map((f) => {
                  const val = d[f.key];
                  if (val === undefined || val === null || String(val).trim() === "") return null;

                  if (f.secret) {
                    return (
                      <div className="adm-row" key={f.key}>
                        <span className="adm-row-k">{f.label}</span>
                        <span className="adm-row-v is-secret">
                          {revealed ? String(val) : "\u2022".repeat(String(val).length)}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div className="adm-row" key={f.key}>
                      <span className="adm-row-k">{f.label}</span>
                      <span className={"adm-row-v" + (f.key === "detail" ? " is-plain" : "")}>
                        {String(val)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="adm-acts">
                {!d.password && !imgs.length ? (
                  <p className="adm-none">Is complaint me password aur image kuch nahi hai.</p>
                ) : (
                  <>
                    {d.password && (
                      <button
                        type="button"
                        className="adm-act adm-act--soft"
                        onClick={() => setRevealed((v) => !v)}
                      >
                        {!tight && <IconLock />}
                        <span>
                          {tight
                            ? revealed
                              ? "Hide"
                              : "Password"
                            : revealed
                            ? "Hide Password"
                            : "Show Password"}
                        </span>
                      </button>
                    )}

                    {imgs.map((im, i) => (
                      <button
                        key={i}
                        type="button"
                        className="adm-act"
                        onClick={() => setImage({ src: im.dataUrl, name: im.name })}
                      >
                        <IconEye />
                        Image {i + 1}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </section>

            <section className="adm-box adm-danger">
              <div className="adm-note">
                Complaint delete karne se wo user ke mailbox se bhi hat jayegi.
              </div>
              <div className="adm-form">
                <button type="button" className="btn btn--block" onClick={remove}>
                  Delete This Complaint
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      <StatusPopup
        open={popup}
        current={st}
        onClose={() => setPopup(false)}
        onUpdate={changeStatus}
      />

      <ImageViewer image={image} onClose={() => setImage(null)} />
    </Shell>
  );
}
