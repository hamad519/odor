import E_Liquid from './premiumComponents/Best_E_Liquid'
import NewVaping from './premiumComponents/New_to_Vaping'
import VapeMode from './premiumComponents/vape_mode'
import viewBG from '/src/assets/images/bg/view-bg.jpg'
function PremiumSolu() {
    return (
        <>
            <section className="view-area">
                <div className="bg-image view__bg"
                style={{ backgroundImage: `url(${viewBG})` }}
                ></div>
                <div className="container">
                    <div className="row g-4">
                        <E_Liquid />
                        <div className="col-lg-6">
                            <NewVaping />
                            <VapeMode />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PremiumSolu