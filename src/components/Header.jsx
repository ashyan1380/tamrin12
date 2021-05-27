import React from 'react'
import propTypes from "prop-types"
import Bottun from "./Bottun"

const Header = ({headerTitle},...props) => {
    const handleClick = () => {
        console.log("handled :))");
    };
    return (
        <header className="header">
            <h1 className="test">{headerTitle}</h1>
            <Bottun bottunLabel="ADD" classes="btn--green" onClick={handleClick}></Bottun>
            {/* <Bottun bottunLabel="DELET" classes="btn--red"></Bottun>
            <Bottun bottunLabel="SAVE" classes="btn--black" ></Bottun> */}
        </header>
    )
} 

Header.defaultProps = {
    HeaderTitle: "default header",
}
Header.propTypes = {
    headerTitle: propTypes.string,
};
// another way to style jsx is object
// const headingStyle = {
//     color:"black",
//     backgoundColor:"blue",
// }
export default Header;
