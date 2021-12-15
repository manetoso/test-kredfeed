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

export const LegalPersonInputs = () => {
    const {
        personForm,
    } = useContext(FormContext)
    return (
        <Formik
            onSubmit={ ( values ) => {
                console.log( values )
                window.localStorage.setItem( 'personForm', JSON.stringify( values ) )
                Swal.fire({
                    icon: 'success',
                    position: 'top-end',
                    title: 'Datos Guardados',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500,
                    timerProgressBar: true
                })
                personForm.setPersonForm({
                    finished: true,
                    isMounted: false
                })
            }}
            initialValues={{
                personName: '',
                gender: '',
                birthDate: '',
                birthEntity: '',
                birthCountry: '',
                personNacionality: '',
                personCurp: '',
                personRfc: '',
                civilStatus: '',
                identityDocument: '',
                personEmail: '',
                personPhoneNumber: ''
            }}
            validationSchema={
                Yup.object({
                    personName: Yup.string()
                        .required( 'Requerido' ),
                    gender: Yup.string()
                        .required( 'Requerido' ),
                    birthDate: Yup.string()
                        .required( 'Requerido' ),
                    birthEntity: Yup.string()
                        .required( 'Requerido' ),
                    birthCountry: Yup.string()
                        .required( 'Requerido' ),
                    personNacionality: Yup.string()
                        .required( 'Requerido' ),
                    personCurp: Yup.string()
                        .required( 'Requerido' )
                        .matches(
                            RegExp('^([A-Z]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[A-Z]{3}[0-9A-Z]{2})$'),
                            'El CURP debe tener un formato valido'
                        ),
                    personRfc: Yup.string()
                        .required( 'Requerido' )
                        .matches(
                            RegExp('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z]{2}[0-9]{1}))?$'),
                            'El RFC debe tener un formato valido'
                        ),
                    civilStatus: Yup.string()
                        .required( 'Requerido' ),
                    identityDocument: Yup.string()
                        .required( 'Requerido' ),
                    personEmail: Yup.string()
                        .required( 'Requerido' )
                        .email( 'El email debe tener un formato valido' ),
                    personPhoneNumber: Yup.string()
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
                            <Highlighter>Datos del representante legal</Highlighter>
                            <TextInput
                                number={1}
                                label="Nombre"
                                name="personName"
                            />
                            <SelectInput
                                number={2}
                                label="Género"
                                name="gender"
                            >
                                <option value="">Escoja una opción</option>
                                <option value="female">Mujer</option>
                                <option value="male">Hombre</option>
                            </SelectInput>
                            <TextInput
                                number={3}
                                label="Fecha de Nacimiento"
                                name="birthDate"
                                type='date'
                            />
                            <TextInput
                                number={4}
                                label="Entidad Federativa de nacimiento"
                                name="birthEntity"
                            />
                            <TextInput
                                number={5}
                                label="País de Nacimiento"
                                name="birthCountry"
                            />
                            <TextInput
                                number={6}
                                label="Nacionalidad"
                                name="personNacionality"
                            />
                            <TextInput
                                number={7}
                                label="CURP"
                                name="personCurp"
                            />
                            <TextInput
                                number={9}
                                label="RFC"
                                name="personRfc"
                            />
                            <SelectInput
                                number={10}
                                label="Estado Civil"
                                name="civilStatus"
                            >
                                <option value="">Escoja una opción</option>
                                <option value="female">Soltera(o)</option>
                                <option value="female">Casada(o)</option>
                                <option value="female">Divorsiada(o)</option>
                                <option value="female">Separación en proceso judicial</option>
                                <option value="female">Viuda(o)</option>
                                <option value="female">Concubinato</option>
                            </SelectInput>
                            <FileInput
                                number={11}
                                label='Documento de identificación'
                                name='identityDocument'
                            />
                            <TextInput
                                number={12}
                                label="Correo electrónico"
                                name="personEmail"
                            />
                            <TextInput
                                number={13}
                                label="Número de Teléfono"
                                name="personPhoneNumber"
                                description='Sin extención: 1231231234, Con extención: +52-1231231234'
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
