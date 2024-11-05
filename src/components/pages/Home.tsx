import React, { useContext } from 'react'
import AccountContext from '../../context/account'
import BankContext from '../../context/bank'
import Bank from '../../types/Bank'
import Account from '../../types/Account'
import { useSelector } from 'react-redux'

export default function Home() {
    const account:Account = useContext(AccountContext)
    const bank:Bank = useContext(BankContext)
    const treasure = useSelector((state:any)=>state.treasure)
    const clacPrec = (b:number, t:number) =>{
        return ((b/t)*100).toFixed(1)
    }
  return (
    <div>
        <h1>Bank Treasure is {(+treasure).toLocaleString()}$</h1>
        <h4>Balance: {account.balance}$</h4>
        <h5>You own {clacPrec(account.balance, bank.treasure)}% of the banks treasure!!</h5>
    </div>
  )
}
