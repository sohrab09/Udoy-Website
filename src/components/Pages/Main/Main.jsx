import ContactTeam from "../../ContactTeam/ContactTeam"
import Facility from "../../Facility/Facility"
import OurWork from "../../OurWork/OurWork"
import Packages from "../../Packages/Packages"
import Slider from "../../Slider/Slider"

const Main = () => {

    document.title = "Udoy Internet - A Brand of ADN Telecom"

    return (
        <div>
            <Slider />
            <OurWork />
            <Packages />
            <Facility />
            <ContactTeam />
        </div>
    )
}

export default Main