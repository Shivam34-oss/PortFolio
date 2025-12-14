import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./authui.module.css";
import API from "../../services/api";

export default function AuthUI() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setForm({ name: "", email: "", password: "" });
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const url = mode === "login" ? "/auth/login" : "/auth/register";
      const payload = mode === "login"
        ? { email: form.email, password: form.password }
        : form;

      const { data } = await API.post(url, payload);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      resetForm();
      setMsg("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (error) {
      setMsg(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.switch}>
          <button
            className={mode === "login" ? styles.active : ""}
            onClick={() => {
              setMode("login");
              resetForm();
            }}
          >
            Login
          </button>

          <button
            className={mode === "signup" ? styles.active : ""}
            onClick={() => {
              setMode("signup");
              resetForm();
            }}
          >
            Signup
          </button>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          {mode === "signup" && (
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
            />
          )}

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
          />

          <button type="submit">
            {mode === "login" ? "Login" : "Create account"}
          </button>

          {msg && <p className={styles.msg}>{msg}</p>}
        </form>
      </div>
    </div>
  );
}

