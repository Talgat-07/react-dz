import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/request.tsx";
import { ActionIcon, Card, Container, Image, Text } from "@mantine/core";
import "../style/productDetails.sass";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

interface AppProduct {
  brand?: string;
  category?: string;
  description?: string;
  discountPercentage?: number;
  id?: number;
  images: string[];
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  title?: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [isProduct, setProduct] = useState<AppProduct>({ images: [""] });
  const [isImg, setImg] = useState<string>("");
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await api.get(`/${id}`);
      setProduct(res.data);
      setImg(res.data.images[0]);
    };
    fetchProduct();
  }, [id]);

  const changeImg = (b: boolean): void => {
    const idImg = isProduct.images?.findIndex((el) => el === isImg);
    console.log(idImg, b, length);
    if (b) {
      if (0 === idImg) {
        setImg(isProduct.images[isProduct.images?.length - 1]);
        return;
      }
      setImg(isProduct.images[idImg - 1]);
    } else {
      if (isProduct.images?.length - 1 === idImg) {
        setImg(isProduct.images[0]);
        return;
      }
      setImg(isProduct.images[idImg + 1]);
    }
  };

  return (
    <Container size="md">
      <Card>
        <Card className="div">
          <Image
            sx={{ position: "absolute", top: "0", left: "0", width: "100%" }}
            src={isImg}
          />
          <ActionIcon
            onClick={() => changeImg(true)}
            radius="xl"
            size="xl"
            color="blue"
          >
            <ChevronLeft />
          </ActionIcon>
          <ActionIcon
            onClick={() => changeImg(false)}
            radius="xl"
            size="xl"
            color="blue"
          >
            <ChevronRight />
          </ActionIcon>
        </Card>
        <Text weight={500}>Title: {isProduct.title}</Text>
        <Text>Description: {isProduct.description}</Text>
        <Text>Category: {isProduct.category}</Text>
        <Text>price: {isProduct.price}</Text>
        <Text>Discount: {isProduct.discountPercentage}%</Text>
      </Card>
    </Container>
  );
};

export default ProductDetails;
