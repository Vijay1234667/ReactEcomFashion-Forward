import CosmeticsSalesSection from "./CosmeticsSalesSection";
import DiscoverLatestOffer from "./DiscoverLatestOffer";
import HomeBrandCompany from "./HomeBrandCompany";
import HomeElectronicSection from "./HomeElectronicSection";
import HomeMainProductSection from "./HomeMainProductSection";
import HomeNewslaterSection from "./HomeNewslaterSection";
import HomeParallaxSection from "./HomeParallaxSection";
import HomeProductCaption from "./HomeProductCaption";
import HomeSection1 from "./HomeSection1";
import HomeSection3 from "./HomeSection3";
import HomeTrendingSection from "./HomeTrendingSection";

function HomePage() {
    return (
        <>
            <HomeSection1 />
            {/* <HomeSection2/> */}
            <HomeSection3 />
            <HomeProductCaption />
            <HomeMainProductSection />
            <DiscoverLatestOffer />
            <HomeElectronicSection />
            <HomeParallaxSection />
            <CosmeticsSalesSection />
            <HomeTrendingSection />
            <HomeNewslaterSection />
            <HomeBrandCompany />
        </>
    );
}
export default HomePage;