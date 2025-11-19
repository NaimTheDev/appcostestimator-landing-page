const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export const JOIN_BETA_ENDPOINT = `${API_BASE_URL}/api/join-beta`;
