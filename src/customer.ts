import { Tranaction } from "./types/transaction";
const { v4: uuidv4 } = require('uuid');

export class Customer{
    private _name: string;
    private _id: string;
    private _transaction: Tranaction[];

    constructor(name: string)
    {
        this._name = name;
        this._transaction = [];
        this._id = uuidv4();
    }

    get getName():string{
        return this._name;
    }

    get getId():string{
        return this._id;
    }

    get getTransactions(): Tranaction[]
    {
        return this._transaction;
    }

    getBalance(): number{
        let balance: number = 0;
        this._transaction.forEach(
            (t)=>{
                balance += t.amount;
            }
        )
        return balance;
    }

    addTransaction(amount: number): boolean{
        const balance = this.getBalance();
        if(balance - amount > 0)
        {   
            const time_now :string = new Date().toString();
            const new_transation : Tranaction = {
                amount: amount,
                date: time_now
            }
            this._transaction.push(new_transation)
            return true;
        }
        else
        {
            return false;
        }
    }

}