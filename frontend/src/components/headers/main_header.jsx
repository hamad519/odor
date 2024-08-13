import ShippingIcon from '/src/assets/images/flag/shipping.png'
import StoreIcon from '/src/assets/images/flag/picking.png'
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';
function MainHeader() {
    return (
        <>
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper pl-65">
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="main-menu">
                            <li className="d-none d-lg-block"><button id="openButton" className="side-bar-btn"><i
                                className="fa-sharp text-white fa-light mr-60 fa-bars"></i></button>
                            </li>
                            <li>
                                <Link to='/'>Home</Link>
                                {/* <L href="#0"></L> */}

                            </li>
                            <li>
                                <Link to='/about'>About Us</Link>

                            </li>
                            <li>
                                <Link to="#">Pages <i className="fa-regular fa-angle-down"></i></Link>
                                <ul className="sub-menu">

                                    <li className="subtwohober">
                                    </li>
                                    <li className="subtwohober">
                                        <Link to="/cart">
                                            Cart Page
                                        </Link>
                                    </li>
                                    <li className="subtwohober">
                                        <Link to="/checkout">
                                            Checkout Page
                                        </Link>
                                    </li>
                                    <li className="subtwohober">
                                        <Link to="/register">
                                            Register
                                        </Link>
                                    </li>
                                    <li className="subtwohober">
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="subtwohober">
                                        <Link to="/error">
                                            404 Error
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                        <div className="shipping__item d-none d-sm-flex align-items-center">
                            <div className="menu__right d-flex align-items-center">
                                <div className="thumb">
                                    <img src="src/assets/images/flag/picking.png" alt="image" />
                                </div>
                                <div className="content">
                                    <p>
                                        Picking up?
                                    </p>
                                    <div className="items">
                                        <select className="form__select p-0">
                                            <option value="1">
                                                Select Store
                                            </option>
                                            <option value="2">
                                                Store One
                                            </option>
                                            <option value="3">
                                                Store Two
                                            </option>
                                            <option value="3">
                                                Store Three
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__right d-flex align-items-center">
                                <div className="thumb">
                                    <img src="src/assets/images/flag/shipping.png" alt="image" />
                                </div>
                                <div className="content">
                                    <p>
                                        Free Shipping <br /> on order <strong>over $100</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar />
        </>
    );
}
export default MainHeader