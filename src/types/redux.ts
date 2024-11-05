export interface TreasureAction {
  type: Actions;
  payload: { [key: string]: any };
}

export enum Actions{
    NEW_CHARGE="NEW_CHARGE",
    MONTHLY_PAYMENT="MONTHLY_PAYMENT",
    TRANSFER_MONEY="TRANSFER_MONEY",
    CHARGE_INTEREST="CHARGE_INTEREST",   
}