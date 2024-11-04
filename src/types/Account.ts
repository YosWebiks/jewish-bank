import Loan from "./Loan"
import Transaction from "./Transaction"

export default interface Account {
    balance:number
    id:string
    loans:Loan[]
    transactions:Transaction[]
}