import { createContext } from "react";
import Bank from "../types/Bank";

const BankContext = createContext<Bank>({
    treasure:10000,
    users:[{
        name:"Yo",
        account_id:"12345"
    },{
        name:"Jo",
        account_id:"54321"
    }]
})

export default BankContext