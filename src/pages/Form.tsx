import { AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import {
    BankFormInputs,
    BussinessAddressInput,
    BussinessForm,
    LegalPersonInputs,
    LegalPersonAddressInputs
} from '../components/FormsComponents'

import { 
    PageAnimation,
    MainColumn,
    CardsContainer
} from "../components/UI"
import { FormContext } from '../contexts/FormContext'

export const Forms = () => {
    const {
        bussinessForm,
        bussinessAddress,
        personForm,
        personAddress,
        bankForm
    } = useContext(FormContext)
    
    const bussinessFormCancel = () => {
        bussinessForm.setBussinessForm({
            isMounted: false,
            finished: false
        })
    }
    const bussinessAddressCancel = () => {
        bussinessAddress.setBussinessAddress({
            isMounted: false,
            finished: false
        })
    }
    const personFormCancel = () => {
        personForm.setPersonForm({
            isMounted: false,
            finished: false
        })
    }
    const personAddressCancel = () => {
        personAddress.setPersonAddress({
            isMounted: false,
            finished: false
        })
    }
    const bankFormCancel = () => {
        bankForm.setBankForm({
            isMounted: false,
            finished: false
        })
    }
    return (
        <>
            <PageAnimation>
                <AnimatePresence exitBeforeEnter>
                    {
                        bussinessForm.isMounted ?
                        <MainColumn cancelFunc={ bussinessFormCancel } >
                            <BussinessForm />
                        </MainColumn>
                        : bussinessAddress.isMounted ?
                        <MainColumn cancelFunc={ bussinessAddressCancel } >
                            <BussinessAddressInput />
                        </MainColumn>
                        : personForm.isMounted ?
                        <MainColumn cancelFunc={ personFormCancel } >
                            <LegalPersonInputs />
                        </MainColumn>
                        : personAddress.isMounted ?
                        <MainColumn cancelFunc={ personAddressCancel } >
                            <LegalPersonAddressInputs />
                        </MainColumn>
                        : bankForm.isMounted ?
                        <MainColumn cancelFunc={ bankFormCancel } >
                            <BankFormInputs />
                        </MainColumn>
                        :   <CardsContainer />
                    }
                </AnimatePresence>
            </PageAnimation>
        </>
    )
}

export default Forms