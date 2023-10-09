import { useState } from "react";
import { validateName, validateEmail } from "../utils/utils";
import Alert from "./Alert";

const Formulario = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [checkpass, setCheckpass] = useState("");
    const [error, setError] = useState("");
    const [SuccessReg, setSuccessReg] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateData = (e) => {
        e.preventDefault();

        //Validación

        if (!validateName(name)) {
            setError("* El nombre contiene caracteres inválidos");
            return;
        }

        if (email.trim() !== "" && !validateEmail(email)) {
            setError("* El correo no es válido");
            return;
        }

        if (name.trim() === "" || email.trim() === "" || pass.trim() === "" || checkpass.trim() === "") {
            setError("* Todos los campos deben llenarse");
            return;
        }

        if (pass !== checkpass) {
            setError("* Las contraseñas no coinciden");
            return;
        }

        if (pass.length < 6) {
            setError("* La contraseña debe tener al menos 8 caracteres");
            return;
        }

        setSuccessReg(true);
        setError("");
    };

    return (
        <>
            <form className="form" onSubmit={validateData}>
                <div className="inputs">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            style={{ marginBottom: "20px" }}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="pass">
                        <div className="form-group">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="pass"
                                placeholder="Contraseña"
                                className="form-control"
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                            />
                        </div>
                        <svg
                            type="button"
                            onClick={togglePasswordVisibility}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-eye-slash"
                            viewBox="0 0 40 15"
                            style={{ marginLeft: "10px" }}
                        >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />

                            {passwordVisible ? "Ocultar" : "Mostrar"}
                        </svg>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="checkpass"
                            placeholder="Confirma tu contraseña"
                            className="form-control"
                            onChange={(e) => setCheckpass(e.target.value)}
                            value={checkpass}
                        />
                    </div>
                    <button type="submit" className="button-color">
                        Registrarme
                    </button>

                    <Alert SuccessReg={SuccessReg} error={error} />
                </div>
            </form>
        </>
    );
};
export default Formulario;
