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

        if (pass !== checkpass) {
            setError("* Las contraseñas no coinciden");
            return;
        }

        if (name.trim() === "" || email.trim() === "" || pass.trim() === "" || checkpass.trim() === "") {
            setError("* Todos los campos deben llenarse");
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
                        <input type="text" name="name" placeholder="Nombre" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
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
                    <div className="form-group">
                        <input
                            type="password"
                            name="pass"
                            placeholder="Contraseña"
                            className="form-control"
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                        />
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
