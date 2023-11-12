//Navigation to navigation different areas along the continuous page

const Nav =() =>{
    return(
        <nav className="flex flex-row p-20 text-opacity-30">
            <h1 className="text-2xl ml-0 m-auto">Alexandra Winter</h1>
            <ul className="flex flex-row">
                <li>
                    <a href="#"><p>Home</p></a>
                </li>
                <li>
                    <a href="#"><p>AboutMe</p></a>
                </li>
                <li>
                    <a href="#"><p>Reviews</p></a>
                </li>
                <li>
                    <a href="#"><p>Technology</p></a>
                </li>
                <li>
                    <a href="#"><p className="contactPage">Contact Me</p></a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;