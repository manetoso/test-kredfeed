import { ErrorMessage, useField } from "formik"

interface ISelectInput {
    number: number
    label: string
    name: string
    description?: string
    placeholder?: string
    [x: string]: any
}

export const SelectInput = ( { number, label, description, ...props }:ISelectInput ) => {
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
                    <select
                        { ...field } { ...props }
                        autoComplete="off"
                        className="p-2 rounded-md font-normal w-full border border-red-500"
                    />
                )
                : (
                    <select
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
