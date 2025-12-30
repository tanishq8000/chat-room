import { useEffect, useState } from "react";
import Join from "./Components/Join";
import Chat from "./Components/Chat";
import socket from "./socket";

export default function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      {!username ? (
        <Join onJoin={setUsername} />
      ) : (
        <Chat username={username} onLeave={() => setUsername("")} />
      )}
    </>
  );
}
