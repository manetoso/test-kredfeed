import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react';
import Swal from 'sweetalert2'

import {
    TextInput,
    SelectInput,
    FileInput
} from '../'
import { Highlighter } from '../../UI';
import { FormContext } from '../../../contexts/FormContext';

export const BussinessForm = () => {
    const {
        bussinessForm,
    } = useContext(FormContext)
    return (
        <Formik
            onSubmit={ ( values ) => {
                console.log( values )
                window.localStorage.setItem( 'bussinesForm', JSON.stringify( values ) )
                Swal.fire({
                    icon: 'success',
                    position: 'top-end',
                    title: 'Datos Guardados',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500,
                    timerProgressBar: true
                })
                bussinessForm.setBussinessForm({
                    finished: true,
                    isMounted: false
                })
            }}
            initialValues={{
                businessName: '',
                comercialName: '',
                nacionality: '',
                constitutionDate: '',
                rfc: '',
                taxRegime: '',
                industry: '',
                addressProof: '',
                bussinessEmail: '',
                bussinessPhoneNumber: ''
            }}
            validationSchema={
                Yup.object({
                    businessName: Yup.string()
                        .required( 'Requerido' ),
                    comercialName: Yup.string()
                        .required( 'Requerido' ),
                    nacionality: Yup.string()
                        .required( 'Requerido' ),
                    constitutionDate: Yup.string()
                        .required( 'Requerido' ),
                    rfc: Yup.string()
                        .required( 'Requerido' )
                        .matches(
                            RegExp('^([A-Z??\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z]{2}[0-9]{1}))?$'),
                            'El RFC debe tener un formato valido'
                        ),
                    taxRegime: Yup.string()
                        .required( 'Requerido' )
                        .notOneOf( [ '' ], 'Esta opci??n no es v??lida'),
                    industry: Yup.string()
                        .required( 'Requerido' )
                        .notOneOf( [ '' ], 'Esta opci??n no es v??lida'),
                    addressProof: Yup.string()
                        .required( 'Requerido' ),
                    bussinessEmail: Yup.string()
                        .required( 'Requerido' )
                        .email( 'El email debe tener un formato valido' ),
                    bussinessPhoneNumber: Yup.string()
                        .required( 'Requerido' )
                        .matches(
                            RegExp('^(\\(\\+?\\d{2,3}\\)[\\*|\\s|\\-|\\.]?(([\\d][\\*|\\s|\\-|\\.]?){6})(([\\d][\\s|\\-|\\.]?){2})?|(\\+?[\\d][\\s|\\-|\\.]?){8}(([\\d][\\s|\\-|\\.]?){2}(([\\d][\\s|\\-|\\.]?){2})?)?)$'),
                            'N??mero de tel??fono no valido'
                        ),
                })
            }
        >
            {
                ( formik ) => (
                    <Form>
                        <div className='space-y-4'>
                            <Highlighter>Datos de la Empresa</Highlighter>
                            <TextInput
                                number={1}
                                label="Raz??n Social"
                                name="businessName"
                            />
                            <TextInput
                                number={2}
                                label="Nombre Comercial"
                                name="comercialName"
                            />
                            <TextInput
                                number={3}
                                label="Nacionalidad"
                                name="nacionality"
                            />
                            <TextInput
                                number={4}
                                label="Fecha de constituci??n"
                                name="constitutionDate"
                                type="date"
                            />
                            <TextInput
                                number={5}
                                label="RFC"
                                name="rfc"
                                description='ORP830422DI6, ORP830422-DI6, ORP830422'
                            />
                            <SelectInput
                                number={6}
                                label="R??gimen Fiscal"
                                name="taxRegime"
                            >
                                <option value="">Escoja una opci??n</option>
                                <option value="salaried">R??gimen de asalariados</option>
                                <option value="fee">R??gimen de actividades profesionales (Honorarios)</option>
                                <option value="propertyLeasing">R??gimen de arrendamiento de inmuebles</option>
                                <option value="empresarialActivity">R??gimen de actividad empresarial</option>
                                <option value="fiscalIncorporation">R??gimen de incorporaci??n fiscal</option>
                                <option value="moralPerson">Personas morales del r??gimen general</option>
                                <option value="moralPersonNoLucrative">Personas morales con fines no lucrativos.</option>
                            </SelectInput>
                            <SelectInput
                                number={7}
                                label="Industria"
                                name="industry"
                            >
                                <option value="">Escoja una opci??n</option>
                                <option value="alimentary">Alimentaria</option>
                                <option value="textile">Textil</option>
                                <option value="chemistry">Qu??mica</option>
                                <option value="iron&steel">Sider??rgica (dedicada a la producci??n de hierro y acero)</option>
                                <option value="military">Militar</option>
                                <option value="cement">Cementera</option>
                                <option value="tour">Tur??stica</option>
                                <option value="forest">Forestal</option>
                                <option value="automotive">Automovil??stica</option>
                            </SelectInput>
                            <FileInput
                                number={8}
                                label='Comprobante de domicilio'
                                name='addressProof'
                            />
                            <TextInput
                                number={9}
                                label="Correo electr??nico"
                                name="bussinessEmail"
                            />
                            <TextInput
                                number={10}
                                label="N??mero de Tel??fono"
                                name="bussinessPhoneNumber"
                                description='Sin extenci??n: 1231231234, Con extenci??n: +52-1231231234'
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
