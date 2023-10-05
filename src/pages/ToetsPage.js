import PropTypes from "prop-types";
import { MenuCard } from "../components/MenuCard";

export function ToetsPage(props) {
    const { products } = props;
    return (
        <div className="mx-3">
            <MenuCard products={products} />
        </div>
    );
}


ToetsPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}