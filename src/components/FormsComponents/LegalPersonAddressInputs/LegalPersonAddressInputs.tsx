import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react';
import Swal from 'sweetalert2'

import { TextInput } from '../';
import { Highlighter } from '../../UI';
import { FormContext } from '../../../contexts/FormContext';

export const LegalPersonAddressInputs = () => {
    const {
        personAddress,
    } = useContext(FormContext)
    return (
        <Formik
            onSubmit={ ( values ) => {
                console.log( values )
                window.localStorage.setItem( 'personAddress', JSON.stringify( values ) )
                Swal.fire({
                    icon: 'success',
                    position: 'top-end',
                    title: 'Datos Guardados',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500,
                    timerProgressBar: true
                })
                personAddress.setPersonAddress({
                    finished: true,
                    isMounted: false
                })
            }}
            initialValues={{
                personStreet: '',
                personOutNumber: 0,
                personInNumber: 0,
                personPostalNumber: 0,
                personColony: '',
                personCity: '',
                personNacionalState: '',
                personCountry: '',
            }}
            validationSchema={
                Yup.object({
                    personStreet: Yup.string()
                        .required( 'Requerido' ),
                    personOutNumber: Yup.string()
                        .required( 'Requerido' ),
                    personInNumber: Yup.string(),
                    personPostalNumber: Yup.string()
                        .required( 'Requerido' )
                        .min( 5, 'Debe tener al menos 5 números' ),
                    personColony: Yup.string()
                        .required( 'Requerido' ),
                    personCity: Yup.string()
                        .required( 'Requerido' ),
                    personNacionalState: Yup.string()
                        .required( 'Requerido' ),
                    personCountry: Yup.string()
                        .required( 'Requerido' ),
                })
            }
        >
            {
                ( formik ) => (
                    <Form>
                        <div className='space-y-4'>
                            <Highlighter>Datos del representante legal (Dirección)</Highlighter>
                            <TextInput
                                number={1}
                                label="Calle"
                                name="personStreet"
                            />
                            <TextInput
                                number={2}
                                label="Número Exteriror"
                                name="personOutNumber"
                                type='number'
                            />
                            <TextInput
                                number={3}
                                label="Número Interior"
                                name="personInNumber"
                                type='number'
                            />
                            <TextInput
                                number={4}
                                label="Código Postal"
                                name="personPostalNumber"
                                type="number"
                            />
                            <TextInput
                                number={5}
                                label="Colonia"
                                name="personColony"
                            />
                            <TextInput
                                number={6}
                                label="Ciudad"
                                name="personCity"
                            />
                            <TextInput
                                number={7}
                                label="Estado"
                                name="personNacionalState"
                            />
                            <TextInput
                                number={8}
                                label="País"
                                name="personCountry"
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
