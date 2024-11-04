import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PagesRouter from "./components/pages/PagesRouter";
import BankContext from "./context/bank";
import Bank from "./types/Bank";
import Account from "./types/Account";
import AccountContext from "./context/account";

export default function App() {
  const [bank, setBank] = useState<Bank>({
    treasure: 10000,
    users: [
      {
        name: "Yo",
        account_id: "12345",
      },
      {
        name: "Jo",
        account_id: "54321",
      },
    ],
  });
  const [account, setAccount] = useState<Account>({
    balance: 5000,
    id: "12345",
    loans: [],
    transactions: [],
  });
  return (
    <div className="app">
      <BankContext.Provider value={bank}>
        <AccountContext.Provider value={account}>
          <Routes>
            <Route path="auth/*" element={<AuthRouter />} />
            <Route path="pages/*" element={<PagesRouter />} />
          </Routes>
        </AccountContext.Provider>
      </BankContext.Provider>
    </div>
  );
}
