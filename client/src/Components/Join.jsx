import React, { useState } from "react";

const Join = ({ onJoin }) => {
  const [name, setName] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onJoin(name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 animate-fade-in">
          {/* Icon/Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Welcome!
          </h1>
          <p className="text-white/80 text-center mb-8">
            Enter your name to join the chat room
          </p>

          {/* Form */}
          <form onSubmit={handleJoin} className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input-field"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={!name.trim()}
            >
              Join Chat Room
            </button>
          </form>

          {/* Decorative Element */}
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-white/60 text-center mt-6 text-sm">
          Connect with people in real-time
        </p>
      </div>
    </div>
  );
};

export default Join;

