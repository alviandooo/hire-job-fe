import axios from "axios";

export default function handler(req, res) {
  try {
    const { email, password } = req.body;

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login`, {
        email,
        password,
      })
      .then((response) => res.status(response.status).json(response.data))
      .catch((err) => {
        const errorMsg =
          err?.response?.data?.messages ??
          err.response?.data?.message?.email?.message ??
          err.response?.data?.message?.password?.message;
        res.status(err.response?.status ?? 500).json(errorMsg);
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
