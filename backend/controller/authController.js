import User from "../models/User.js";
import bcrypt from "bcryptjs";

/* REGISTER (SIGNUP) */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
   const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //  NO TOKEN ON SIGNUP
    return res.status(201).json({
      message: "Account created successfully. Please login.",
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

/*  LOGIN*/
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // TOKEN ONLY ON LOGIN
    return res.json({
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

