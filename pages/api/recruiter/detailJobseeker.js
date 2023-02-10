import axios from "axios";

export default function handler(req, res) {
  const id = req.query.id;
  try {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/detail/${id}`)
      .then((response) => {
        const result = response?.data?.data;
        res.status(200).json({ data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(err?.response?.status).json("Eror data");
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
