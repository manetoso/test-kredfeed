import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react';
import Swal from 'sweetalert2'

import { TextInput } from '../';
import { Highlighter } from '../../UI';
import { FormContext } from '../../../contexts/FormContext';

export const BussinessAddressInput = () => {
    const {
        bussinessAddress,
    } = useContext(FormContext)
    return (
        <Formik
            onSubmit={ ( values ) => {
                console.log( values )
                window.localStorage.setItem( 'bussinesAddress', JSON.stringify( values ) )
                Swal.fire({
                    icon: 'success',
                    position: 'top-end',
                    title: 'Datos Guardados',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500,
                    timerProgressBar: true
                })
                bussinessAddress.setBussinessAddress({
                    finished: true,
                    isMounted: false
                })
            }}
            initialValues={{
                street: '',
                outNumber: 0,
                inNumber: 0,
                postalNumber: 0,
                colony: '',
                city: '',
                nacionalState: '',
                country: '',
            }}
            validationSchema={
                Yup.object({
                    street: Yup.string()
                        .required( 'Requerido' ),
                    outNumber: Yup.number()
                        .required( 'Requerido' ),
                    inNumber: Yup.number(),
                    postalNumber: Yup.number()
                        .required( 'Requerido' )
                        .min( 5, 'Debe tener al menos 5 números' ),
                    colony: Yup.string()
                        .required( 'Requerido' ),
                    city: Yup.string()
                        .required( 'Requerido' ),
                    nacionalState: Yup.string()
                        .required( 'Requerido' ),
                    country: Yup.string()
                        .required( 'Requerido' ),
                })
            }
        >
            {
                ( formik ) => (
                    <Form>
                        <div className='space-y-4'>
                            <Highlighter>Datos de la entidad (Dirección)</Highlighter>
                            <TextInput
                                number={1}
                                label="Calle"
                                name="street"
                            />
                            <TextInput
                                number={2}
                                label="Número Exteriror"
                                name="outNumber"
                                type='number'
                            />
                            <TextInput
                                number={3}
                                label="Número Interior"
                                name="inNumber"
                                type='number'
                            />
                            <TextInput
                                number={4}
                                label="Código Postal"
                                name="postalNumber"
                                type="number"
                            />
                            <TextInput
                                number={5}
                                label="Colonia"
                                name="colony"
                            />
                            <TextInput
                                number={6}
                                label="Ciudad"
                                name="city"
                            />
                            <TextInput
                                number={7}
                                label="Estado"
                                name="nacionalState"
                            />
                            <TextInput
                                number={8}
                                label="País"
                                name="country"
                            />
                        </div>
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
                    </Form>
                )
            }
        </Formik>
    )
}
