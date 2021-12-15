import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react'
import Swal from 'sweetalert2'

import { TextInput } from '../'
import { Highlighter } from '../../UI'
import { FormContext } from '../../../contexts/FormContext'

export const BankFormInputs = () => {
    const {
        bankForm,
    } = useContext(FormContext)
    return (
        <Formik
            onSubmit={ ( values ) => {
                console.log( values )
                window.localStorage.setItem( 'bankForm', JSON.stringify( values ) )
                Swal.fire({
                    icon: 'success',
                    position: 'top-end',
                    title: 'Datos Guardados',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500,
                    timerProgressBar: true
                })
                bankForm.setBankForm({
                    finished: true,
                    isMounted: false
                })
            }}
            initialValues={{
                bankName: '',
                code: ''
            }}
            validationSchema={
                Yup.object({
                    bankName: Yup.string()
                        .required( 'Requerido' ),
                    code: Yup.string()
                        .required( 'Requerido' )
                        .min( 17, 'La clave debe de tener al menos 17 caracteres alfanuméricos' ),
                })
            }
        >
            {
                ( formik ) => (
                    <Form>
                        <div className='space-y-4'>
                            <Highlighter>Datos Bancarios</Highlighter>
                            <TextInput
                                number={1}
                                label="Banco"
                                name="bankName"
                            />
                            <TextInput
                                number={2}
                                label="Clave Bancaria"
                                name="code"
                            />
                            <div className='flex justify-end items-end mt-5'>
                                <button
                                    type='submit'
                                    className='
                                    bg-transparent p-2 rounded-lg
                                    border-2 border-zinc-700
                                    text-zinc-700
                                    hover:bg-zinc-700 hover:text-white
                                    transition ease-in-out duration-300
                                '>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}
