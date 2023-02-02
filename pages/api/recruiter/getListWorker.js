import axios from "axios";

export default function handler(req, res) {
  try {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/list`)
      .then((response) => {
        res.status(response?.status).json(response?.data?.data);
      })
      .catch((err) => {
        res.status(err?.response?.status).json("Eror data");
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
