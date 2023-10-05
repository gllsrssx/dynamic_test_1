import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export function Section(props) {
    const {title, children} = props;
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}