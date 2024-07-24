import Logo from '/src/assets/images/logo/logo.svg'
import Flag from '/src/assets/images/flag/us.png'
function TopHeader(){
    return (
        <>
        <div className="top__header pt-30 pb-30">
        <div className="container">
            <div className="top__wrapper">
                <a href="index.html" className="main__logo">
                    <img src={Logo} alt="logo__image"/>
                </a>
                <div className="search__wrp">
                    <input placeholder="Search for" aria-label="Search"/>
                    <button><i className="fa-solid fa-search"></i></button>
                </div>
                <div className="account__wrap">
                    <div className="account d-flex align-items-center">
                        <div className="user__icon">
                            <a href="#0">
                                <i className="fa-regular fa-user"></i>
                            </a>
                        </div>
                        <a href="#0" className="acc__cont">
                            <span>
                                My Account
                            </span>
                        </a>
                    </div>
                    <div className="cart d-flex align-items-center">
                        <span className="cart__icon">
                            <i className="fa-regular fa-cart-shopping"></i>
                        </span>
                        <a href="#0" className="c__one">
                            <span>
                                $0.00
                            </span>
                        </a>
                        <span className="one">
                            0
                        </span>
                    </div>
                    <div className="flag__wrap">
                        <div className="flag">
                            <img src={Flag} alt="flag"/>
                        </div>
                        <select name="flag">
                            <option value="0">
                                Usa
                            </option>
                            <option value="1">
                                Canada
                            </option>
                            <option value="2">
                                Australia
                            </option>
                            <option value="3">
                                Germany
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default TopHeader