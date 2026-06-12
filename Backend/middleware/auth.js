import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import Admin from "../Models/admin.model.js";

const generateToken = (payload) => {
    return jwt.sign({ payload }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

const verifyToken = async (req, res, next) => {
    try {
        let token;
        const authHeader = req.headers.authorization;

        // // NOTE: For debugging 401s in production (Render), check whether the cookie is being received.
        // // Remove/disable these logs after fixing.
        // console.log('[auth.verifyToken] incoming', {
        //     authorizationHeaderPresent: !!authHeader,
        //     cookiesPresent: !!req.cookies,
        //     cookieTokenPresent: !!req.cookies?.token,
        //     cookieKeys: req.cookies ? Object.keys(req.cookies) : [],
        // });

        if (authHeader) {
            if (authHeader.startsWith('Bearer ')) {
                token = authHeader.substring(7);
            } else {
                // Support clients that send the raw token in Authorization header
                token = authHeader.trim();
            }
        } else if (req.cookies.token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(401).json({
                message: "No token, authorization denied",
                debug: {
                    hasAuthHeader: !!authHeader,
                    hasCookieToken: !!req.cookies?.token,
                },
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Try to authenticate as a User first.
        const user = await User.findById(decoded.payload).select('-logInPassword');
        if (user) {
            req.user = user;
            return next();
        }

        // If not a user, try Admin.
        const admin = await Admin.findById(decoded.payload).select('-logInPassword');
        if (!admin) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = admin;
        next();
    } catch (error) {
        // console.log('[auth.verifyToken] error', error?.name, error?.message);
        res.status(401).json({ message: "Invalid token" });
    }
};

export { generateToken, verifyToken };

