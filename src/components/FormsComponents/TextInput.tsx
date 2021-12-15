import { ErrorMessage, useField } from "formik"

interface ITextInput {
    number: number
    label: string
    name: string
    description?: string
    value?: string
    type?: 'text' | 'email' | 'password' | 'date' | 'number'
    placeholder?: string
    [x: string]: any
}

export const TextInput = ( { number, label, description, value, ...props }:ITextInput ) => {
    const [ field, meta ] = useField( props )
    return (
        <div className="space-y-0">
            <div className="space-x-1 -ml-3">
                <span className="text-lg text-stone-600">{number}</span>
                <label htmlFor={ props.id || props.name }>{ label }</label>
            </div>
            {
                description != null &&
                <span className="text-sm text-stone-600">{ description }</span>
            }
            {
                meta.touched && meta.error ? (
                    <input
                        { ...field } { ...props }
                        autoComplete="off"
                        value={ value }
                        className="p-2 rounded-md font-normal w-full border border-red-500"
                    />
                )
                : (
                    <input
                        { ...field } { ...props }
                        autoComplete="off"
                        className="p-2 rounded-md font-normal w-full"
                    />
                )
            }
            <ErrorMessage name={ props.name } component="span" className="text-sm text-red-500 text-right" />
        </div>
    )
}
