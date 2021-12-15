import { getLocalStorage } from "../../utils/getLocalStorage"
import { Highlighter } from "../UI"

export const BussinessData = () => {
    const {
        bussinesData,
    } = getLocalStorage()
    return (
        <section>
            <ul>
                <li>
                    <Highlighter>Datos de la Empresa</Highlighter>
                </li>
                <li>
                    <label>Razón Social: </label>
                    <span className="font-normal text-stone-500">{bussinesData.businessName}</span>
                </li>
                <li>
                    <label>Nombre Comercial: </label>
                    <span className="font-normal text-stone-500">{bussinesData.comercialName}</span>
                </li>
                <li>
                    <label>Nacionalidad: </label>
                    <span className="font-normal text-stone-500">{bussinesData.nacionality}</span>
                </li>
                <li>
                    <label>Fecha de constitución: </label>
                    <span className="font-normal text-stone-500">{bussinesData.constitutionDate}</span>
                </li>
                <li>
                    <label>RFC: </label>
                    <span className="font-normal text-stone-500">{bussinesData.rfc}</span>
                </li>
                <li>
                    <label>Régimen Fiscal: </label>
                    <span className="font-normal text-stone-500">{bussinesData.taxRegime}</span>
                </li>
                <li>
                    <label>Industria: </label>
                    <span className="font-normal text-stone-500">{bussinesData.industry}</span>
                </li>
                <li>
                    <label>Comprobante de domicilio: </label>
                    <span className="font-normal text-stone-500">{bussinesData.addressProof}</span>
                </li>
                <li>
                    <label>Correo electrónico: </label>
                    <span className="font-normal text-stone-500">{bussinesData.bussinessEmail}</span>
                </li>
                <li>
                    <label>Número de Teléfono: </label>
                    <span className="font-normal text-stone-500">{bussinesData.bussinessPhoneNumber}</span>
                </li>
            </ul>
        </section>
    )
}
