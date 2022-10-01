import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux/es/exports";

export default function ProductDetails() {
  const [data, setData] = useState();
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    const product = response.data;
    setData(product);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);
  console.log(data);
  return (
    <div>
      <img src={data?.image} alt={data?.title} />
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      <p>{data?.category}</p>
      <p>{data?.price}</p>
    </div>
  );
}
