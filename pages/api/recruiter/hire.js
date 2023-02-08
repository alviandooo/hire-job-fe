import axios from "axios";

export default function hire(req, res) {
  const { user_id, purpose, fullname, email, phone_number, description } =
    req.body;

  const data = {
    user_id,
    purpose,
    fullname,
    email,
    phone_number,
    description,
  };

  try {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/send-invitation`, data)
      .then((response) => {
        res.status(200).json("Hiring is successfully!");
      })
      .catch((err) => {
        const errorMsg =
          err?.response?.data?.messages ??
          err?.response?.data?.message?.fullname?.message ??
          err?.response?.data?.message?.email?.message ??
          err?.response?.data?.message?.company?.message ??
          err?.response?.data?.message?.position?.message ??
          err?.response?.data?.message?.phone_number?.message ??
          err?.response?.data?.message?.password?.message;
        res.status(err?.response?.status ?? 500).json(errorMsg);
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
