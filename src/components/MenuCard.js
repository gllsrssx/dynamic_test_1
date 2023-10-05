import { MenuProduct } from "./MenuProduct";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export function MenuCard(props) {
    const { products } = props;
    return (
        <div>
            {products.filter(p => p.type === "fris").length > 0 && (
                <>
                    <h1>Fris</h1>
                    <Container className="p-0">
                        {products
                            .filter(p => p.type === "fris")
                            .map(p => <MenuProduct key={p.name} product={p} />)}
                    </Container>
                </>
            )}
            {products.filter(p => p.type === "cocktail").length > 0 && (
                <>
                    <h1>Onze cocktail</h1>
                    <Container className="p-0">
                        {products
                            .filter(p => p.type === "cocktail")
                            .map(p => <MenuProduct key={p.name} product={p} />)}
                    </Container>
                </>
            )}
            {products.filter(p => p.type === "tap").length > 0 && (
                <>
                    <h1>Van onze tap</h1>
                    <Container className="p-0">
                        {products
                            .filter(p => p.type === "tap")
                            .map(p => <MenuProduct key={p.name} product={p} />)}
                    </Container>
                </>
            )}
            {products.filter(p => !p.type).length > 0 && (
                <>
                    <h1>Menu</h1>
                    <Container className="p-0">
                        {products
                            .filter(p => !p.type)
                            .map(p => <MenuProduct key={p.name} product={p} />)}
                    </Container>
                </>
            )}
        </div>
    );
}

MenuCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}