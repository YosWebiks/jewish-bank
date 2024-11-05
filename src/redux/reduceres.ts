import { combineReducers } from "redux";
import { Actions, TreasureAction } from "../types/redux";

export const treasureReducer = (
  state: number = 8000,
  action: TreasureAction
) => {
  console.log("TREASURE REDUCER:", action);
  switch (action.type) {
    case Actions.CHARGE_INTEREST:
      return state * 0.95;
    case Actions.MONTHLY_PAYMENT:
      return state - action.payload.amount;
    case Actions.NEW_CHARGE:
      return state - action.payload.amount;
    default:
      return state;
  }
};

export const creditReducer = (
  state: any[] = [
    {
      buisness: "Moshe OO Banave",
      date: new Date(),
      amount: 150,
      charged: false,
    },
    {
      buisness: "Banave and their Abba",
      date: new Date(),
      amount: 860,
      charged: false,
    },
  ],
  action: TreasureAction
) => {
  console.log("CREDIT REDUCER:", action);
  switch (action.type) {
    case Actions.MONTHLY_PAYMENT:
      return state.map((p) => ({ ...p, charged: true }));
    case Actions.NEW_CHARGE:
      return [
        ...state,
        {
          buisness: action.payload.buisness,
          date: action.payload.date,
          amount: action.payload.amount,
          charged: false,
        },
      ];
    default:
      return state;
  }
};

export const transactionsReducer = (
  state: any[] = [],
  action: TreasureAction
) => {
  console.log("TRANSACTION REDUCER:", action);
  switch (action.type) {
    case Actions.TRANSFER_MONEY:
      return [
        ...state,
        {
          from: action.payload.from,
          date: action.payload.date,
          to: action.payload.to,
          amount: action.payload.amount,
        },
      ];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  treasure: treasureReducer,
  credit: creditReducer,
  transactions: transactionsReducer,
});
