import React from "react";

export default function ChatsTab() {
  return (
    <div className="wa-chats">
      <div className="wa-chat">
        <img className="wa-avatar" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Avatar" />
        <div>
          <div className="wa-chat-title">Alice</div>
          <div className="wa-chat-snippet">Hey! What's up?</div>
        </div>
        <span className="wa-chat-time">09:23</span>
      </div>
      <div className="wa-chat">
        <img className="wa-avatar" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Avatar" />
        <div>
          <div className="wa-chat-title">Bob</div>
          <div className="wa-chat-snippet">See you soon.</div>
        </div>
        <span className="wa-chat-time">08:15</span>
      </div>
    </div>
  );
}
