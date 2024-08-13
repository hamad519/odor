import HeroBanner from "../components/bannners/heroBanner";
import RegisterForm from "../components/forms/registerForm";
import Preloader from "../components/loader/preLoader";

function Registration(){
    return(
        <>
        <Preloader/>
        <HeroBanner pageTitle="Create Account"/>
        <RegisterForm/>
        </>
    );
}
export default Registration