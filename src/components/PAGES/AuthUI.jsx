import React, { useState } from "react";
import styles from "./authui.module.css";

export default function AuthUI() {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  function onChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // simple front-end validation demo
    if (!form.email || !form.password || (mode === "signup" && !form.name)) {
      setMsg("Please fill all required fields.");
      return;
    }
    setMsg(`${mode === "login" ? "Logged in" : "Account created"} (demo) — form values: ${JSON.stringify(form)}`);
    // reset password for demo convenience
    setForm({ name: "", email: "", password: "" });
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.switch}>
          <button className={mode==="login"?styles.active:""} onClick={()=>{setMode("login"); setMsg("");}}>Login</button>
          <button className={mode==="signup"?styles.active:""} onClick={()=>{setMode("signup"); setMsg("");}}>Signup</button>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          {mode === "signup" && (
            <label>
              <span>Name</span>
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
            </label>
          )}

          <label>
            <span>Email</span>
            <input name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
          </label>

          <label>
            <span>Password</span>
            <input name="password" type="password" value={form.password} onChange={onChange} placeholder="********" />
          </label>

          <button className={styles.submit} type="submit">{mode === "login" ? "Login" : "Create account"}</button>

          {msg && <p className={styles.msg}>{msg}</p>}
        </form>
      </div>
    </div>
  );
}
