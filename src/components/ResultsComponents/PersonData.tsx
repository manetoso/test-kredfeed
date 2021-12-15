import { getLocalStorage } from "../../utils/getLocalStorage"
import { Highlighter } from "../UI"

export const PersonData = () => {
    const {
        personData
    } = getLocalStorage()
    return (
        <section>
            <ul>
                <li>
                    <Highlighter>Datos del Representante Legal</Highlighter>
                </li>
                <li>
                    <label>Nombre: </label>
                    <span className="font-normal text-stone-500">{personData.personName}</span>
                </li>
                <li>
                    <label>Género: </label>
                    <span className="font-normal text-stone-500">{personData.gender}</span>
                </li>
                <li>
                    <label>Fecha de Nacimiento: </label>
                    <span className="font-normal text-stone-500">{personData.birthDate}</span>
                </li>
                <li>
                    <label>Entidad Federativa de nacimiento: </label>
                    <span className="font-normal text-stone-500">{personData.birthEntity}</span>
                </li>
                <li>
                    <label>País de Nacimiento: </label>
                    <span className="font-normal text-stone-500">{personData.birthCountry}</span>
                </li>
                <li>
                    <label>Nacionalidad: </label>
                    <span className="font-normal text-stone-500">{personData.personNacionality}</span>
                </li>
                <li>
                    <label>CURP: </label>
                    <span className="font-normal text-stone-500">{personData.personCurp}</span>
                </li>
                <li>
                    <label>RFC: </label>
                    <span className="font-normal text-stone-500">{personData.personRfc}</span>
                </li>
                <li>
                    <label>Estado Civil: </label>
                    <span className="font-normal text-stone-500">{personData.civilStatus}</span>
                </li>
                <li>
                    <label>Documento de identificación: </label>
                    <span className="font-normal text-stone-500">{personData.identityDocument}</span>
                </li>
                <li>
                    <label>Correo electrónico: </label>
                    <span className="font-normal text-stone-500">{personData.personEmail}</span>
                </li>
                <li>
                    <label>Número de Teléfono: </label>
                    <span className="font-normal text-stone-500">{personData.personPhoneNumber}</span>
                </li>
            </ul>
        </section>
    )
}
