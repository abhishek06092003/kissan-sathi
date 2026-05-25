import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

const Login = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async (e) => {

      e.preventDefault();

      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      setError("");
      setLoading(true);

      try {

        await signInWithEmailAndPassword(

          auth,

          email,

          password
        );

        navigate("/");

      } catch (err) {

        console.log(err);

        if (err.code === "auth/invalid-email") {
          setError("Invalid email address");
        } else if (err.code === "auth/user-not-found") {
          setError("User not found. Please sign up first");
        } else if (err.code === "auth/wrong-password") {
          setError("Incorrect password");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
  };

  return (

    <div className="min-h-screen bg-[#071018] flex items-center justify-center p-5">

      <form

        onSubmit={handleLogin}

        className="w-96 h-96 bg-[#112233]/70 border border-[#1d3d4f] rounded-3xl p-10 flex flex-col items-center justify-center"

      >

        <h1 className="text-4xl font-bold text-[#00ff99] text-center">

          Login

        </h1>

        <div className="mt-6 space-y-3 w-full">

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="w-full bg-[#0b1622] p-4 rounded-xl text-white placeholder:text-white/70 caret-white outline-none text-center text-sm auth-input"

          />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            className="w-full bg-[#0b1622] p-4 rounded-xl text-white placeholder:text-white/70 caret-white outline-none text-center text-sm auth-input"

          />

        </div>

        {error && (

          <p className="text-red-400 mt-3 text-center text-xs">

            {error}

          </p>

        )}

        <button

          type="submit"

          disabled={loading}

          className="w-full bg-[#00ff99] text-white py-3 rounded-xl font-bold mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition text-center text-sm"

        >

          {loading ? "Logging in..." : "Login"}

        </button>

        <p className="text-gray-400 mt-4 text-center text-xs">

          No account?

          <Link
            to="/signup"
            className="text-[#00ff99] ml-1"
          >

            Signup

          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;