import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

const Registro = () => {
    return (
        <>
            <div className="container">
                <img src="https://images.unsplash.com/photo-1622751055415-9162949fda8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2524&q=80" />
                <div className="svgs">
                    <SocialButton ig="https://www.instagram.com/" github="https://github.com/" linkedin="https://www.linkedin.com/" />
                    <Formulario />
                </div>
            </div>
        </>
    );
};
export default Registro;
