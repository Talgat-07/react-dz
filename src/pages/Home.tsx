import { useEffect, useState } from "react";
import { api } from "../api/request.tsx";
import Product from "../components/Product.tsx";
import { Container, Group } from "@mantine/core";

const Home = () => {
  const [isProducts, setProducts] = useState<[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("");
      setProducts(res.data.products);
    };

    fetchProducts();
  }, []);
  return (
    <Container size="xl">
      <Group position="center">
        {isProducts.map((e, i) => (
          <Product key={i} product={e} />
        ))}
      </Group>
    </Container>
  );
};

export default Home;
