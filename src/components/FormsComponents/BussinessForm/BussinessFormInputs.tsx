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
                            RegExp('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z]{2}[0-9]{1}))?$'),
                            'El RFC debe tener un formato valido'
                        ),
                    taxRegime: Yup.string()
                        .required( 'Requerido' )
                        .notOneOf( [ '' ], 'Esta opción no es válida'),
                    industry: Yup.string()
                        .required( 'Requerido' )
                        .notOneOf( [ '' ], 'Esta opción no es válida'),
                    addressProof: Yup.string()
                        .required( 'Requerido' ),
                    bussinessEmail: Yup.string()
                        .required( 'Requerido' )
                        .email( 'El email debe tener un formato valido' ),
                    bussinessPhoneNumber: Yup.string()
                        .required( 'Requerido' )
                        .matches(
                            RegExp('^(\\(\\+?\\d{2,3}\\)[\\*|\\s|\\-|\\.]?(([\\d][\\*|\\s|\\-|\\.]?){6})(([\\d][\\s|\\-|\\.]?){2})?|(\\+?[\\d][\\s|\\-|\\.]?){8}(([\\d][\\s|\\-|\\.]?){2}(([\\d][\\s|\\-|\\.]?){2})?)?)$'),
                            'Número de teléfono no valido'
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
                                label="Razón Social"
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
                                label="Fecha de constitución"
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
                                label="Régimen Fiscal"
                                name="taxRegime"
                            >
                                <option value="">Escoja una opción</option>
                                <option value="salaried">Régimen de asalariados</option>
                                <option value="fee">Régimen de actividades profesionales (Honorarios)</option>
                                <option value="propertyLeasing">Régimen de arrendamiento de inmuebles</option>
                                <option value="empresarialActivity">Régimen de actividad empresarial</option>
                                <option value="fiscalIncorporation">Régimen de incorporación fiscal</option>
                                <option value="moralPerson">Personas morales del régimen general</option>
                                <option value="moralPersonNoLucrative">Personas morales con fines no lucrativos.</option>
                            </SelectInput>
                            <SelectInput
                                number={7}
                                label="Industria"
                                name="industry"
                            >
                                <option value="">Escoja una opción</option>
                                <option value="alimentary">Alimentaria</option>
                                <option value="textile">Textil</option>
                                <option value="chemistry">Química</option>
                                <option value="iron&steel">Siderúrgica (dedicada a la producción de hierro y acero)</option>
                                <option value="military">Militar</option>
                                <option value="cement">Cementera</option>
                                <option value="tour">Turística</option>
                                <option value="forest">Forestal</option>
                                <option value="automotive">Automovilística</option>
                            </SelectInput>
                            <FileInput
                                number={8}
                                label='Comprobante de domicilio'
                                name='addressProof'
                            />
                            <TextInput
                                number={9}
                                label="Correo electrónico"
                                name="bussinessEmail"
                            />
                            <TextInput
                                number={10}
                                label="Número de Teléfono"
                                name="bussinessPhoneNumber"
                                description='Sin extención: 1231231234, Con extención: +52-1231231234'
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
