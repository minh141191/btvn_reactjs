import {Link} from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand"><Link to={`/`}><i className="bi bi-houses-fill" style={{fontSize:30,marginLeft: 20}}></i></Link></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"><Link to={`/create`}><i
                                    className="bi bi-person-plus" style={{fontSize:30, marginLeft: 20}}></i></Link></a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link active" aria-current="page" href="#">PointAVG</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                            {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                            {/*        Ranked Academic*/}
                            {/*    </a>*/}
                            {/*    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                            {/*        <li><a className="dropdown-item" href="#">Excellent</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Good</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Average</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Poor</a></li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
);
}
export default Navbar;
