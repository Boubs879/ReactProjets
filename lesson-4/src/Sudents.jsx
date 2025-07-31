import PropTypes from 'prop-types';
import React, { useContext } from "react";
import { AddProduct } from "./CartContext";

function Sudents(props){
    const { Increment } = useContext(AddProduct);
    return(
        <div className="Products">
            <img src = {props.image} alt="" />
            <p>{props.article}</p>
            <button onClick={Increment}>Commander</button>
        </div>
    );
}
Sudents.propTypes = {
    article : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
}

export default Sudents;