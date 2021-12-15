import { MainColumn, PageAnimation } from "../components/UI"
import {
    BussinessData,
    BussinessAddressData,
    PersonData,
    PersonAddressData,
    BankData
} from '../components/ResultsComponents/';

export const CapturedData = () => {
    return (
        <>
            <PageAnimation>
                <MainColumn showResults>
                    <BussinessData />
                    <BussinessAddressData />
                    <PersonData />
                    <PersonAddressData />
                    <BankData />
                </MainColumn>
            </PageAnimation>
        </>
    )
}

export default CapturedData