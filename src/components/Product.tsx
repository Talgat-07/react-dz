import { FC } from "react";
import { Card, Group, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface AppProps {
  product: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: [index: string];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  };
}

const Product: FC<AppProps> = ({ product }) => {
  const nav = useNavigate();
  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card onClick={() => nav(`product/${product.id}`)} shadow="xl" p="xl">
        {/*<Card.Section>*/}
        <Image src={product.images[0]} />
        {/*</Card.Section>*/}
        <Group position="left" sx={{ marginTop: "20px" }}>
          <Text weight="500">{product.title}</Text>
          <Text>{product.description}</Text>
          <Text weight="600">{product.price}$</Text>
        </Group>
      </Card>
    </div>
  );
};

export default Product;
