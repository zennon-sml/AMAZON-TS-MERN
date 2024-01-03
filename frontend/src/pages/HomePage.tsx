import { Col, Row } from "react-bootstrap";
import { sampleProducts } from "../data";

export default function HomePage () {
    return (
        <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} className="product-image" />
              </Col>
            ))}
        </Row>
    )
}