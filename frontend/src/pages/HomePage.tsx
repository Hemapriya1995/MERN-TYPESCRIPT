import { Col, Row } from "react-bootstrap";

import type { Product } from "../types/Products";
import type { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../Hooks/ProductHooks";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {getError(error as unknown as ApiError)}
    </MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Amazon</title>
      </Helmet>
      {products!.map((product: Product) => (
        <Col key={product.slug} sm={12} md={6} lg={4} className="mb-3">
          <ProductItem product={product}></ProductItem>
        </Col>
      ))}
    </Row>
  );
}
