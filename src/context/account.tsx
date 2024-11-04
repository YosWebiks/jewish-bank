import { createContext } from "react";
import Account from "../types/Account";

const AccountContext = createContext<Account>({
    balance:5000,
    id:"12345",
    loans:[],
    transactions:[]
})

export default AccountContext