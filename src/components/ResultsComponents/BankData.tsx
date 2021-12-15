import { getLocalStorage } from "../../utils/getLocalStorage"
import { Highlighter } from "../UI"

export const BankData = () => {
    const {
        bankData
    } = getLocalStorage()
    return (
        <section>
            <ul>
                <li>
                    <Highlighter>Datos Bancarios</Highlighter>
                </li>
                <li>
                    <label>Banco: </label>
                    <span className="font-normal text-stone-500">{bankData.bankName}</span>
                </li>
                <li>
                    <label>Clave bancaria: </label>
                    <span className="font-normal text-stone-500">{bankData.code}</span>
                </li>
            </ul>
        </section>
    )
}
