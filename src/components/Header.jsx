const Header = () => {
    return (
        <>
            <header>
                <div className="logo-camera">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" />
                        </svg>
                    </a>
                </div>
                <div className="header-title">
                    <h2>TALLERES DE FOTOGRAFÍA</h2>
                </div>
                <div>
                    <nav>
                        <ul className="menu">
                            <li>
                                <a href="#">Revelado B&N</a>
                            </li>
                            <li>
                                <a href="#">Cianotipia</a>
                            </li>
                            <a className="contacto" href="#">
                                Contacto
                            </a>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
export default Header;
