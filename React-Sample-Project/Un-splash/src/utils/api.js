import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: " Client-ID 0xTVoU52QMP7jis94m2l7AnGW-A19jT6dOD088t3JWc",
  },
});

export default api;
