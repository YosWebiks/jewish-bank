import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../types/redux";

export default function Credit() {
  const treasure = useSelector((s: any) => s.treasure);
  const credit = useSelector((s: any) => s.credit);
  const dispatch = useDispatch();
  ("");
  const [buisness, setBuisness] = useState("");
  const [amount, setAmount] = useState<number>();

  const makeAPayment = () => {
    dispatch({
      type: Actions.NEW_CHARGE,
      payload: {
        buisness,
        date: new Date(),
        amount,
      },
    });
  };
  return (
    <div>
      <h1>${(+treasure).toLocaleString()}</h1>
      <div className="new-charge">
        <input
          type="text"
          value={buisness}
          onChange={(e) => setBuisness(e.target.value)}
          placeholder="buisness"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          placeholder="amount"
        />
        <button onClick={makeAPayment}>Make a Payment</button>
      </div>
      <ul>
        {credit.map((p: any, i:number) => (
          <li key={i}>
            {p.buisness} - {p.amount}$
          </li>
        ))}
      </ul>
    </div>
  );
}
