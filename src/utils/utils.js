const validateName = (name) => {
    const rgx = /^[a-zA-Z\s]*$/;

    if (rgx.test(name)) {
        return true;
    }

    return false;
};

const validateEmail = (email) => {
    const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (rgx.test(email)) {
        return true;
    }

    return false;
};

export { validateName, validateEmail };
