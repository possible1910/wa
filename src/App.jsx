import React, { useState } from "react";
import ChatsTab from "./ChatsTab";
import StatusTab from "./StatusTab";
import CallsTab from "./CallsTab";
import "./WhatsappBottomTabs.css";

export default function App() {
  const [tab, setTab] = useState("chats");

  let Content;
  if (tab === "chats") Content = ChatsTab;
  else if (tab === "status") Content = StatusTab;
  else Content = CallsTab;

  return (
    <div className="wa-container">
      <header className="wa-header">
        <span className="wa-title">WhatsApp</span>
      </header>
      <main className="wa-main">
        <Content />
      </main>
      <nav className="wa-bottom-tabs">
        <button
          className={tab === "chats" ? "active" : ""}
          onClick={() => setTab("chats")}
        >
          <span role="img" aria-label="Chats">💬</span>
          <span>Chats</span>
        </button>
        <button
          className={tab === "status" ? "active" : ""}
          onClick={() => setTab("status")}
        >
          <span role="img" aria-label="Status">🟢</span>
          <span>Status</span>
        </button>
        <button
          className={tab === "calls" ? "active" : ""}
          onClick={() => setTab("calls")}
        >
          <span role="img" aria-label="Calls">📞</span>
          <span>Calls</span>
        </button>
      </nav>
    </div>
  );
}
