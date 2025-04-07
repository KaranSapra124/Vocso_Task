import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import axios from "axios";
const Login = () => {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
    error,
    user,
    loginWithPopup,
    logout,
  } = useAuth0();

  useEffect(() => {
    if (user) {
      const fetchToken = async () => {
        const authToken = await getAccessTokenSilently();
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/v1/verify-token`,
          {
            token: authToken,
            email: user.email,
          }
        );
      };
      fetchToken();
    }
  }, [user]);

  if (isLoading)
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center mt-10">
        Oops! {error.message}
      </div>
    );

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-[350px]">
        {isAuthenticated ? (
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome back 👋
            </h1>
            <p className="text-sm text-gray-600 mb-4">You are logged in as</p>
            <p className="font-bold text-indigo-600">{user.email}</p>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Login to Continue
            </h1>
            <button
              onClick={() => loginWithPopup()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-200"
            >
              Login with Auth0
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
