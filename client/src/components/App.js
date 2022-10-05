import React from "react";
import Login from "./Login.js";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import ContactsProvider from "../contexts/ContactsProvider";
import ConversationsProvider from "../contexts/ConversationsProvider.js";
import { SocketProvider } from "../contexts/SocketProvider.js";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
