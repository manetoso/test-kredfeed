import { Highlighter } from "../UI"
import { getLocalStorage } from '../../utils/getLocalStorage';

export const BussinessAddressData = () => {
    const {
        bussinesAddressData
    } = getLocalStorage()
    return (
        <section>
            <ul>
                <li>
                    <Highlighter>Dirección de la Empresa</Highlighter>
                </li>
                <li>
                    <label>Calle: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.street}</span>
                </li>
                <li>
                    <label>Número Exteriror: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.outNumber}</span>
                </li>
                <li>
                    <label>Número Interior: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.inNumber}</span>
                </li>
                <li>
                    <label>Código Postal: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.postalNumber}</span>
                </li>
                <li>
                    <label>Colonia: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.colony}</span>
                </li>
                <li>
                    <label>Ciudad: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.city}</span>
                </li>
                <li>
                    <label>Estado: </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.nacionalState}</span>
                </li>
                <li>
                    <label>País : </label>
                    <span className="font-normal text-stone-500">{bussinesAddressData.country}</span>
                </li>
            </ul>
        </section>
    )
}
