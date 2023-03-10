import axios from "axios";

export default function handler(req, res) {
  const { limit } = req.query;

  try {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?keyword=&limit=${limit}&page=1&order=DESC&sortBy=id`
      )
      .then((response) => {
        const result = response?.data?.data;
        result.limit = limit;
        res.status(response?.status).json(result);
      })
      .catch((err) => {
        res.status(err?.response?.status).json("Eror data");
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}
