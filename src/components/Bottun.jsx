import React from 'react'
import propTypes from "prop-types"


const Bottun = ({bottunLabel, classes, onClick})=>{
    return(
     <bottun onClick={onClick} className={`btn ${classes} btn--curve`}>{bottunLabel}</bottun>
    )
}
Bottun.propTypes = {
    addLable: propTypes.string,
    classes: propTypes.string,
    onClick: propTypes.func,
};
export default Bottun;