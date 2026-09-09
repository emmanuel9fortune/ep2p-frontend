import { apiRequest } from "./api";

export const checkEmail = async (email) => {
    return apiRequest("/api/auth/check-email", {
        method: "POST",
        body: {
            email: email.trim().toLowerCase(),
        },
    });
};

export const checkPhone = async (phone) => {
    return apiRequest("/api/auth/check-phone", {
        method: "POST",
        body: {
            phone: phone.trim(),
        },
    });
};

export const registerUser = async ({
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    password,
}) => {
    return apiRequest("/api/auth/register", {
        method: "POST",
        body: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            dateOfBirth,
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            password,
        },
    });
};

export const verifyEmailOTP = async ({
    email,
    otp,
}) => {
    return apiRequest("/api/auth/verify-email-otp", {
        method: "POST",
        body: {
            email: email.trim().toLowerCase(),
            otp: otp.trim(),
        },
    });
};

export const loginUser = async ({
    email,
    password,
}) => {
    return apiRequest("/api/auth/login", {
        method: "POST",
        body: {
            email: email.trim().toLowerCase(),
            password,
        },
    });
};

export const resendEmailOTP = async ({ email }) => {
    return apiRequest("/api/auth/resend-email-otp", {
        method: "POST",
        body: {
            email: email.trim().toLowerCase(),
        },
    });
};

export const getCurrentUser = async () => {
    return apiRequest("/api/auth/me", {
        method: "GET",
    });
};

export const logoutUser = async () => {
    return apiRequest("/api/auth/logout", {
        method: "POST",
    });
};
