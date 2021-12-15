interface IBussinesData {
    addressProof?: string
    businessName?: string
    bussinessEmail?: string
    bussinessPhoneNumber?: string
    comercialName?: string
    constitutionDate?: string
    industry?: string
    nacionality?: string
    rfc?: string
    taxRegime?: string
}

interface IBussinessAddressData {
    city?: string
    colony?: string
    country?: string
    inNumber?: number
    nacionalState?: string
    outNumber?: number
    postalNumber?: number
    street?: string
}

interface IPersonData {
    birthCountry: string
    birthDate: string
    birthEntity: string
    civilStatus: string
    gender: string
    identityDocument: string
    personCurp: string
    personEmail: string
    personNacionality: string
    personName: string
    personPhoneNumber: string
    personRfc: string
}

interface IPersonAddressData {
    personCity: string
    personColony: string
    personCountry: string
    personInNumber: number
    personNacionalState: string
    personOutNumber: number
    personPostalNumber: number
    personStreet: string
}

interface IBankData {
    bankName: string
    code: string
}

export const getLocalStorage = () => {
    
    const bussinesData:IBussinesData = JSON.parse( localStorage.getItem( 'bussinesForm' ) || '{}' )
    const bussinesAddressData:IBussinessAddressData = JSON.parse( localStorage.getItem( 'bussinesAddress' ) || '{}' )
    const personData:IPersonData = JSON.parse( localStorage.getItem( 'personForm' ) || '{}' )
    const personAddressData:IPersonAddressData = JSON.parse( localStorage.getItem( 'personAddress' ) || '{}' )
    const bankData:IBankData = JSON.parse( localStorage.getItem( 'bankForm' ) || '{}' )

    return {
        bussinesData,
        bussinesAddressData,
        personData,
        personAddressData,
        bankData,
    }
}
