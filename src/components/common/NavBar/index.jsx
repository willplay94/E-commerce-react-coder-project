import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <nav className="navBar" style={{display: "flex", backgroundColor: "#3b3b3bff"}}>
            <div className="logo">
                Logo
            </div>
            <ul className="navList" style={{display: "flex", gap: "10px", listStyle: "none"}}>
                <li className="navItem">
                    <a href="#" style={{textDecoration: "none", color: "inherit"}}>Enlace 1</a>
                </li>
                <li className="navItem">
                    <a href="#" style={{textDecoration: "none", color: "inherit"}}>Enlace 2</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;