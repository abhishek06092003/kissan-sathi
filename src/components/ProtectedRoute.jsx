import {
  Navigate,
} from "react-router-dom";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

import {
  useEffect,
  useState,
} from "react";

const ProtectedRoute = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =

      onAuthStateChanged(

        auth,

        (currentUser) => {

          setUser(currentUser);

          setLoading(false);
      });

    return () =>
      unsubscribe();

  }, []);

  // LOADING

  if (loading) {

    return (

      <div className="min-h-screen bg-[#071018] flex items-center justify-center text-white text-3xl">

        Loading...

      </div>
    );
  }

  // NOT LOGGED IN

  if (!user) {

    return <Navigate to="/login" />;
  }

  // LOGGED IN

  return children;
};

export default ProtectedRoute;