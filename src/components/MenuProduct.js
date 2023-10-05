import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

function ProductSizePercentage(props) {
    const { product } = props;

    if (product.size && product.percentage)
        return (
            <span className="fs-6 text-primary">
                &nbsp;({product.size}cl - {product.percentage}%)
            </span>
        );
    else if (product.size)
        return (
            <span className="fs-6 text-primary">
                &nbsp;({product.size}cl)
            </span>
        );
    else if (product.percentage)
        return (
            <span className="fs-6 text-primary">
                &nbsp;({product.percentage}%)
            </span>
        );
    else return;
}

function ProductNote(props) {
    const { product } = props;
    if (!product.note) return;

    return (
        <Row className="fs-6 text-primary">
            <Col>
                {product.note}
            </Col>
        </Row>
    );
}

export function MenuProduct(props) {
    const { product } = props;
    if (!product?.name) return;

    return (
        <div>
            <Row className="fs-3">
                <Col>
                    {product.name}
                    <ProductSizePercentage product={product} />
                </Col>
                <Col>
                    {product.price} &euro;
                </Col>
            </Row>
            <ProductNote product={product} />
        </div>
    );
}


MenuProduct.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.number,
        note: PropTypes.string,
        percentage: PropTypes.string,
        type: PropTypes.string,
    }).isRequired,
}