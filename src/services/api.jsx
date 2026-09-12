
const API_URL =  import.meta.env.VITE_API_URL;

export async function apiRequest(endpoint, options = {}) {
    const {
        method = "GET",
        body,
        headers = {},
        ...rest
    } = options;

    const accessToken =
        sessionStorage.getItem("accessToken");

    const authHeaders = accessToken
        ? {
              Authorization: `Bearer ${accessToken}`,
          }
        : {};

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            method,

            headers: {
                "Content-Type":
                    "application/json",

                ...authHeaders,
                ...headers,
            },

            body: body
                ? JSON.stringify(body)
                : undefined,

            ...rest,
        }
    );

    let data = {};

    try {
        data = await response.json();
    } catch {
        data = {};
    }

    if (!response.ok) {
        const error = new Error(
            data.message ||
                "Something went wrong"
        );

        error.status = response.status;
        error.data = data;

        throw error;
    }

    return data;
}

export { API_URL };
