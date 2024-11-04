import User from "./User"

export default interface Transaction {
    amount:number
    from: User
    to:User
}
