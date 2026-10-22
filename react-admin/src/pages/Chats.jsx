import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shortTime, userName } from "../lib/admin.js";
import { watchChats } from "../lib/chat.js";
import Shell from "../ui/Shell.jsx";
import Avatar from "../ui/Avatar.jsx";
import { IconBell, IconChat, IconChev } from "../ui/icons.jsx";

export default function Chats() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = watchChats((l) => setList(l));
    return () => unsub && unsub();
  }, []);

  let unread = 0;
  list.forEach((c) => {
    unread += Number(c.unreadAdmin || 0);
  });

  useEffect(() => {
    document.title = (unread ? "(" + unread + ") " : "") + "Chats \u2014 4R-ADMIN";
    return () => {
      document.title = "4R-ADMIN";
    };
  }, [unread]);

  return (
    <Shell>
      <main className="adm">
        <div className="adm-head">
          <h1>Chats</h1>
          <p>Jis user se baat karni ho us par tap karein.</p>
        </div>

        <section className="adm-stats">
          <div className="adm-stat">
            <span className="adm-stat-ico">
              <IconChat />
            </span>
            <b>{list.length}</b>
            <small>Total Chats</small>
          </div>

          <div className="adm-stat adm-stat--today">
            <span className="adm-stat-ico">
              <IconBell />
            </span>
            <b>{unread}</b>
            <small>Unread</small>
          </div>
        </section>

        <section className="adm-box">
          <div className="adm-box-head">
            <h2>Users</h2>
            <span>{list.length}</span>
          </div>

          <div className="adm-box-body">
            {!list.length ? (
              <div className="adm-empty">
                <div className="adm-empty-ico">
                  <IconChat size={26} />
                </div>
                <h3>Abhi koi chat nahi hai</h3>
                <p>Jab user Online Chat page se message bhejega, wo yahan dikhega.</p>
                <a className="btn" href="../online-chat.html">Open User Chat</a>
              </div>
            ) : (
              list.map((c) => {
                const n = Number(c.unreadAdmin || 0);
                const last = c.lastText || "Chat shuru karein";
                const prefix = c.lastWho === "admin" ? "You: " : "";

                return (
                  <button
                    key={c.id}
                    type="button"
                    className="adm-card adm-chat"
                    onClick={() => navigate("/chats/" + encodeURIComponent(c.id))}
                  >
                    <Avatar />

                    <span className="adm-cmid">
                      <span className="adm-cname">{userName(c)}</span>
                      <span className="adm-chat-last">{prefix + last}</span>
                      <span className="adm-cwhen">{shortTime(c.updatedAt || c.createdAt)}</span>
                    </span>

                    <span className="adm-cright">
                      {n > 0 && <span className="adm-unread">{n > 99 ? "99+" : n}</span>}
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
