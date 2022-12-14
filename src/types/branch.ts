import { Customer } from "./customer";

export class Branch{
    private _name: string;
    private _customers: Customer[];

    constructor(name:string)
    {
        this._name = name;
        this._customers = [];
    }

    get getName():string{
        return this._name;
    }

    get getCutomers(): Customer[]{
        return this._customers;
    }

    addCustomer(new_customer : Customer):boolean
    {
        const found: Customer | null = this.findCustomer(new_customer.getId);

        if(!found){
            this._customers.push(new_customer)
            return true;
        }
        else{
            return false;
        }
    }

    addCustomerTransaction(id:string, amount:number) : boolean {
        // check if id exit

        const customer: Customer | null = this.findCustomer(id);
        if(customer)
        {
            const success: boolean =
                 customer.addTransactions(amount);
                return success;
        }
        else{
            return false
        }
    }

    findCustomer(id:string): Customer | null{

        const found: Customer | undefined = this._customers.find((c)=>c.getId === id )

        if(found)
        {
            return found;
        }
        return null;
    }
}