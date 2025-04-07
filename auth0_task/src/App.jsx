import "./App.css";
import React from "react"; // ✅ Add this line
import Auth from "./Pages/Auth";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  // const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_AUDIENCE, "AUDIENCE");

  return (
    <>
      <Auth0Provider
        clientId={import.meta.env.VITE_CLIENT_ID}
        domain={import.meta.env.VITE_AUTH_DOMAIN}
        authorizationParams={{
          redirect_uri: import.meta.env.VITE_REDIRECT_URL,
          audience: import.meta.env.VITE_AUDIENCE,
        }}
      >
        <Auth />
      </Auth0Provider>
    </>
  );
}

export default App;
