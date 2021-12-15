import { createContext, Dispatch, SetStateAction, useState } from "react"

interface IStateContext {
    bussinessForm: {
        finished: boolean,
        isMounted: boolean,
        setBussinessForm: Dispatch<SetStateAction<{ finished: boolean; isMounted: boolean; }>>
    },
    bussinessAddress: {
        finished: boolean,
        isMounted: boolean,
        setBussinessAddress: Dispatch<SetStateAction<{ finished: boolean; isMounted: boolean; }>>
    },
    personForm: {
        finished: boolean,
        isMounted: boolean,
        setPersonForm: Dispatch<SetStateAction<{ finished: boolean; isMounted: boolean; }>>
    },
    personAddress: {
        finished: boolean,
        isMounted: boolean,
        setPersonAddress: Dispatch<SetStateAction<{ finished: boolean; isMounted: boolean; }>>
    },
    bankForm: {
        finished: boolean,
        isMounted: boolean,
        setBankForm: Dispatch<SetStateAction<{ finished: boolean; isMounted: boolean; }>>
    },
}

export const FormContext = createContext<IStateContext>({
        bussinessForm: {
            finished: false,
            isMounted: false,
            setBussinessForm: () => {}
        },
        bussinessAddress: {
            finished: false,
            isMounted: false,
            setBussinessAddress: () => {}
        },
        personForm: {
            finished: false,
            isMounted: false,
            setPersonForm: () => {}
        },
        personAddress: {
            finished: false,
            isMounted: false,
            setPersonAddress: () => {}
        },
        bankForm: {
            finished: false,
            isMounted: false,
            setBankForm: () => {}
        }
    })

export const FormContextProvider = ( {children}:any ) =>{
    const [bussinessForm, setBussinessForm] = useState({
        finished: false,
        isMounted: false
    })
    const [bussinessAddress, setBussinessAddress] = useState({
        finished: false,
        isMounted: false
    })
    const [personForm, setPersonForm] = useState({
        finished: false,
        isMounted: false
    })
    const [personAddress, setPersonAddress] = useState({
        finished: false,
        isMounted: false
    })
    const [bankForm, setBankForm] = useState({
        finished: false,
        isMounted: false
    })
    return(
        <FormContext.Provider value={{
            bussinessForm: {
                finished: bussinessForm.finished,
                isMounted: bussinessForm.isMounted,
                setBussinessForm
            },
            bussinessAddress: {
                finished: bussinessAddress.finished,
                isMounted: bussinessAddress.isMounted,
                setBussinessAddress
            },
            personForm: {
                finished: personForm.finished,
                isMounted: personForm.isMounted,
                setPersonForm
            },
            personAddress: {
                finished: personAddress.finished,
                isMounted: personAddress.isMounted,
                setPersonAddress
            },
            bankForm: {
                finished: bankForm.finished,
                isMounted: bankForm.isMounted,
                setBankForm
            },
        }}>
            { children }
        </FormContext.Provider>
    )
}