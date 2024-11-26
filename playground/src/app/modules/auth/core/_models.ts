export interface AuthModel {
    api_token: string
    refreshToken?: string
}

export interface UserAddressModel {
    addressLine: string
    city: string
    state: string
    postCode: string
}

export interface UserCommunicationModel {
    email: boolean
    sms: boolean
    phone: boolean
}

export interface UserModel {
    id: number
    username: string
    password: string | undefined
    email: string
    first_name: string
    last_name: string
    fullname?: string
    occupation?: string
    companyName?: string
    phone?: string
    roles?: Array<number>
    pic?: string
    auth?: AuthModel
    communication?: UserCommunicationModel
    address?: UserAddressModel
}