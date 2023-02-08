import axios from "axios";

export default function handler(req, res) {
  const { keyword, limit, page, order, sortBy } = req.query;
  console.log(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=${limit}&page=${page}&order=${order}&sortBy=${sortBy}&keyword=${keyword}`
  );
  try {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=${limit}&page=${page}&order=${order}&sortBy=${sortBy}&keyword=${keyword}`
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
