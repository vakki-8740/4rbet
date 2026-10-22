import { useNavigate } from "react-router-dom";
import { counts, shortTime, statusOf, STATUS } from "../lib/admin.js";
import { useComplaints } from "../lib/useComplaints.js";
import Shell from "../ui/Shell.jsx";
import Avatar from "../ui/Avatar.jsx";
import { IconChev, IconClock, IconInbox } from "../ui/icons.jsx";

export default function Home() {
  const { list } = useComplaints();
  const navigate = useNavigate();
  const c = counts(list);

  return (
    <Shell>
      <main className="adm">
        <div className="adm-head">
          <h1>Admin Home</h1>
          <p>Saari complaints yahan dekhein aur status update karein.</p>
        </div>

        <section className="adm-stats">
          <div className="adm-stat">
            <span className="adm-stat-ico">
              <IconInbox />
            </span>
            <b>{c.total}</b>
            <small>Total Complaints</small>
          </div>

          <div className="adm-stat adm-stat--today">
            <span className="adm-stat-ico">
              <IconClock />
            </span>
            <b>{c.today}</b>
            <small>Today Complaints</small>
          </div>
        </section>

        <section className="adm-box">
          <div className="adm-box-head">
            <h2>All Complain</h2>
            <span>{c.total}</span>
          </div>

          <div className="adm-box-body">
            {!list.length ? (
              <div className="adm-empty">
                <div className="adm-empty-ico">
                  <IconInbox size={26} />
                </div>
                <h3>Koi complaint nahi mili</h3>
                <p>Jab user complaint bhejega wo yahan dikhegi.</p>
                <a className="btn" href="../index.html">Open User Panel</a>
              </div>
            ) : (
              list.map((rec) => {
                const st = statusOf(rec);
                const d = rec.data || {};

                return (
                  <button
                    key={rec.id}
                    type="button"
                    className="adm-card"
                    onClick={() => navigate("/complaint/" + encodeURIComponent(rec.id))}
                  >
                    <Avatar />

                    <span className="adm-cmid">
                      <span className="adm-cname">{d.userName || "Unknown User"}</span>
                      <span className="adm-cat">{rec.category || "Complaint"}</span>
                      <span className="adm-cwhen">{shortTime(rec.submittedAt)}</span>
                    </span>

                    <span className="adm-cright">
                      <span className={"adm-status adm-status--" + st}>{STATUS[st]}</span>
                      <span className="adm-chev">
                        <IconChev />
                      </span>
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </section>
      </main>
    </Shell>
  );
}
