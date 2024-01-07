import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: {product: Product}) {
    return (
        <Card>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                    <Card.Text>${product.price}</Card.Text>
                    {product.countInStock === 0 ? (
                        <Button variant="light" disabled>Out of stock</Button>
                        ) : (
                            <Button>Add to cart</Button>
                        )}
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProductItem