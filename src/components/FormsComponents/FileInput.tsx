import { ErrorMessage, useField } from "formik"

interface IFileInput {
    number: number
    label: string
    name: string
    placeholder?: string
    [x: string]: any
}

export const FileInput = ( { number, label, ...props }:IFileInput ) => {
    const [ field, meta ] = useField( props )
    return (
        <div className="space-y-0">
            <div className="space-x-1 -ml-3">
                <span className="text-lg text-stone-600">{number}</span>
                <label htmlFor={ props.id || props.name }>{ label }</label>
            </div>
            {
                meta.touched && meta.error ? (
                    <input
                        { ...field } { ...props }
                        autoComplete="off"
                        type="file"
                        className="
                        w-full
                        rounded-md
                        bg-white
                        "
                    />
                )
                : (
                    <input
                        { ...field } { ...props }
                        autoComplete="off"
                        type="file"
                        className="
                        w-full
                        rounded-md
                        bg-white
                    "/>
                )
            }
            <ErrorMessage name={ props.name } component="span" className="text-sm text-red-500 text-right" />
        </div>
    )
}
