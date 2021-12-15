import { getLocalStorage } from "../../utils/getLocalStorage"
import { Highlighter } from "../UI"

export const PersonAddressData = () => {
    const {
        personAddressData
    } = getLocalStorage()
    return (
        <section>
            <ul>
                <li>
                    <Highlighter>Dirección del Representante Legal</Highlighter>
                </li>
                <li>
                    <label>Calle: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personStreet}</span>
                </li>
                <li>
                    <label>Número Exteriror: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personOutNumber}</span>
                </li>
                <li>
                    <label>Número Interior: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personInNumber}</span>
                </li>
                <li>
                    <label>Código Postal: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personPostalNumber}</span>
                </li>
                <li>
                    <label>Colonia: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personColony}</span>
                </li>
                <li>
                    <label>Ciudad: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personCity}</span>
                </li>
                <li>
                    <label>Estado: </label>
                    <span className="font-normal text-stone-500">{personAddressData.personNacionalState}</span>
                </li>
                <li>
                    <label>País : </label>
                    <span className="font-normal text-stone-500">{personAddressData.personCountry}</span>
                </li>
            </ul>
        </section>
    )
}
