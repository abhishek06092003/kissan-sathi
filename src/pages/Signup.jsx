import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: "", color: "" };
  
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;
  
  const strengths = [
    { score: 0, label: "", color: "" },
    { score: 1, label: "Weak", color: "text-red-400" },
    { score: 2, label: "Fair", color: "text-yellow-400" },
    { score: 3, label: "Good", color: "text-blue-400" },
    { score: 4, label: "Strong", color: "text-green-400" }
  ];
  
  return strengths[score];
};

const Signup = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const passwordStrength = getPasswordStrength(password);

  const handleSignup =
    async (e) => {

      e.preventDefault();

      if (!email || !password || !confirmPassword) {
        setError("Please fill in all fields");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email");
        return;
      }

      setError("");
      setLoading(true);

      try {

        await createUserWithEmailAndPassword(

          auth,

          email,

          password
        );

        navigate("/login");

      } catch (err) {

        console.log(err);

        if (err.code === "auth/email-already-in-use") {
          setError("Email already registered");
        } else if (err.code === "auth/weak-password") {
          setError("Password is too weak");
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

        onSubmit={handleSignup}

        className="w-96 h-screen-fit bg-[#112233]/70 border border-[#1d3d4f] rounded-3xl p-10 flex flex-col items-center justify-center"

      >

        <h1 className="text-4xl font-bold text-[#00ff99] text-center">

          Signup

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

          {password && (
            <div className="flex items-center justify-center text-xs gap-2">
              <span>Strength:</span>
              <span className={passwordStrength.color}>
                {passwordStrength.label}
              </span>
            </div>
          )}

          <input

            type="password"

            placeholder="Confirm Password"

            value={confirmPassword}

            onChange={(e) =>
              setConfirmPassword(
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

          {loading ? "Signing up..." : "Signup"}

        </button>

        <p className="text-gray-400 mt-4 text-center text-xs">

          Already have account?

          <Link
            to="/login"
            className="text-[#00ff99] ml-1"
          >

            Login

          </Link>

        </p>

      </form>

    </div>
  );
};

export default Signup;