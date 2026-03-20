import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.js";
import sendCredentialsEmail from "../utils/sendEmail.js";

const handleUserSignup = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, designation, address } = req.body;

        // Basic validation
        if (!fullName || !email || !phoneNumber || !designation) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate designation
        if (!["Developer", "Manager", "HR", "Intern"].includes(designation)) {
            return res.status(400).json({ message: "Invalid designation" });
        }

        // Generate login credentials
        const logInID = designation.slice(0, 3).toUpperCase() + phoneNumber.toString().slice(-4)
        const logInPassword = Math.random().toString(36).slice(-8)

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phoneNumber }, { logInID }]
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email or phone number" });
        }

        // Create user (password auto-hashed by pre-save hook)
        const user = await User.create({
            logInID,
            logInPassword,
            fullName,
            email,
            phoneNumber,
            designation,
            address
        });

        // Send email with credentials
        try {
            await sendCredentialsEmail(email, logInID, logInPassword, fullName);
            console.log('Welcome email sent to', email);
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Don't fail signup if email fails
        }

        res.status(201).json({
            message: "User registered successfully! Check your email for login credentials.",
            data: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                designation: user.designation,
                address: user.address,
                logInID: user.logInID
            }
        });

    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const handleUserLogin = async (req, res) => {
    try {
        const { logInID, logInPassword } = req.body;

        if (!logInID || !logInPassword) {
            return res.status(400).json({ message: "login ID and password are required" });
        }

        const user = await User.findOne({ logInID }).select("+logInPassword");
        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(logInPassword, user.logInPassword);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid login credentials" });
        }

        const token = generateToken(user._id);

        const userData = await User.findById(user._id).select('-logInPassword');

        res.status(200).json({
            message: "Login successful",
            token,
            data: userData
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { handleUserSignup, handleUserLogin };
