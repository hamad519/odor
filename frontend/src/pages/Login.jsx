import HeroBanner from "../components/bannners/heroBanner";
import LoginForm from "../components/forms/loginForm";
import Preloader from "../components/loader/preLoader";

function Login(){
    return(
        <>
        <>
        <Preloader/>
        <HeroBanner pageTitle="Sign In"/>
        <LoginForm/>
        </>
        </>
    );
}
export default Login