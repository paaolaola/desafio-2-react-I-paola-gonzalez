const Alert = ({ SuccessReg, error }) => {
    return <div className="alert">{SuccessReg ? <p className="bg-success">Registro exitoso!</p> : error ? <p className="bg-danger">{error}</p> : null}</div>;
};

export default Alert;
