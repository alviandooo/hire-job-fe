import axios from "axios";

export default function handler(req, res) {
  try {
    const { fullname, email, phone_number, password } = req.body;

    const data = { fullname, email, phone_number, password };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/register`, data)
      .then((response) => res.status(201).json("Register is successfully!"))
      .catch((err) => {
        const errorMsg =
          err?.response?.data?.messages ??
          err?.response?.data?.message?.fullname?.message ??
          err?.response?.data?.message?.email?.message ??
          err?.response?.data?.message?.phone_number?.message ??
          err?.response?.data?.message?.password?.message;
        res.status(err?.response?.status ?? 500).json(errorMsg);
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
