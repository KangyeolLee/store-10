import axios from 'axios';

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL =
  process.env.SERVER_API_HOST || `https://${window.location.host}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const throwError = (e: any) => {
  throw new Error(e.response?.data?.message || e.message || e);
};

export default {
  async post<T>(url: string, body?: T) {
    try {
      const res = await client.post(url, body);
      return res.data.result;
    } catch (e) {
      return throwError(e);
    }
  },

  async get<T>(url: string): Promise<T> {
    try {
      const res = await client.get(url);
      return res.data.result;
    } catch (e) {
      return throwError(e);
    }
  },

  async delete<T>(url: string, body?: T): Promise<T> {
    try {
      const res = await client.delete(url, body);
      return res.data.result;
    } catch (e) {
      return throwError(e);
    }
  },

  async put<T>(url: string, body: T) {
    try {
      const res = await client.put(url, body);
      return res.data.result;
    } catch (e) {
      return throwError(e);
    }
  },

  async patch<T>(url: string, body: T) {
    try {
      const res = await client.patch(url, body);
      return res.data.result;
    } catch (e) {
      return throwError(e);
    }
  },
};
