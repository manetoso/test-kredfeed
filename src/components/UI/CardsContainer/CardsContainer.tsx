import { motion } from "framer-motion"
import { useContext } from "react"

import { FormContext } from "../../../contexts/FormContext"
import { Card, Toast } from "../"

export const CardsContainer = () => {
    const {
        bussinessForm,
        bussinessAddress,
        personForm,
        personAddress,
        bankForm
    } = useContext(FormContext)

    const handleDoneBussinesForm = () => {
        bussinessForm.setBussinessForm({
            finished: true,
            isMounted: true
        })
    }
    const handleUnDoneBussinesForm = () => {
        bussinessForm.setBussinessForm({
            finished: false,
            isMounted: false
        })
        window.localStorage.removeItem( 'bussinesForm' )
        Toast({
            title: 'Datos Eliminados',
            icon: 'warning'
        })
    }
    const handleDoneBussinesAddress = () => {
        bussinessAddress.setBussinessAddress({
            finished: true,
            isMounted: true
        })
    }
    const handleUnDoneBussinesAddress = () => {
        bussinessAddress.setBussinessAddress({
            finished: false,
            isMounted: false
        })
        window.localStorage.removeItem( 'bussinesAddress' )
        Toast({
            title: 'Datos Eliminados',
            icon: 'warning'
        })
    }
    const handleDonePersonForm = () => {
        personForm.setPersonForm({
            finished: true,
            isMounted: true
        })
    }
    const handleUnDonePersonForm = () => {
        personForm.setPersonForm({
            finished: false,
            isMounted: false
        })
        window.localStorage.removeItem( 'personForm' )
        Toast({
            title: 'Datos Eliminados',
            icon: 'warning'
        })
    }
    const handleDonePersonAddress = () => {
        personAddress.setPersonAddress({
            finished: true,
            isMounted: true
        })
    }
    const handleUnDonePersonAddress = () => {
        personAddress.setPersonAddress({
            finished: false,
            isMounted: false
        })
        window.localStorage.removeItem( 'personAddress' )
        Toast({
            title: 'Datos Eliminados',
            icon: 'warning'
        })
    }
    const handleDoneBankForm = () => {
        bankForm.setBankForm({
            finished: true,
            isMounted: true
        })
    }
    const handleUnDoneBankForm = () => {
        bankForm.setBankForm({
            finished: false,
            isMounted: false
        })
        window.localStorage.removeItem( 'bankForm' )
        Toast({
            title: 'Datos Eliminados',
            icon: 'warning'
        })
    }

    return (
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="
                grid grid-cols-2 gap-5
                md:flex md:flex-wrap
                text-slate-900 font-bold text-xl
            ">
                <Card
                    title='Datos de la empresa'
                    isDone={ bussinessForm.finished }
                    setDone={ handleDoneBussinesForm }
                    unsetDone={ handleUnDoneBussinesForm }
                />
                <Card
                    title='Dirección de la empresa'
                    isDone={ bussinessAddress.finished }
                    setDone={ handleDoneBussinesAddress }
                    unsetDone={ handleUnDoneBussinesAddress }
                />
                <Card
                    title='Datos del representante legal'
                    isDone={ personForm.finished }
                    setDone={ handleDonePersonForm }
                    unsetDone={ handleUnDonePersonForm }
                />
                <Card
                    title='Dirección del representante legal'
                    isDone={ personAddress.finished }
                    setDone={ handleDonePersonAddress }
                    unsetDone={ handleUnDonePersonAddress }
                />
                <Card
                    title='Datos Bancarios'
                    isDone={ bankForm.finished }
                    setDone={ handleDoneBankForm }
                    unsetDone={ handleUnDoneBankForm }
                />
            </motion.section>
    )
}
