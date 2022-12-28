import MainLayout from "../../layouts/MainLayout"
import SearchDocterAppointment from "../../components/SearchDocterAp"
import ClinicSpecialities from "../../components/ClinicSpecialities"
import BookOurDoctor from "../BookOurDoctor"
import AvailableFeatures from "../Available Features"

const Home = () =>{
    return(
        <MainLayout>
        <SearchDocterAppointment/>
        <ClinicSpecialities/>
        <BookOurDoctor/>
        <AvailableFeatures/>
        </MainLayout>
    )
}
export default Home