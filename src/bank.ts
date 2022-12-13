import { Customer } from "./customer";


class Branch{
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
        const notFound:boolean = this._customers.every(
            (c)=>{
                return c.getId !== new_customer.getId;
            })

        if(notFound){
            this._customers.push(new_customer)
            return true;
        }
        else{
            return false;
        }
    }

    addCustomerTransaction(id:string, amount:number) : boolean {
        // check if id exit
        for(let i = 0; i<this._customers.length; i++)
        {
            if(this._customers[i].getId === id)
            {
                const success: boolean =
                 this._customers[i].addTransaction(amount);
                return success;
            }
        }
        return false;

    }

    findCustomer(id:string): Customer | null{
        for(let i = 0; i<this._customers.length; i++)
        {
            if(this._customers[i].getId === id)
            {
                return this._customers[i];
            }
        }
        return null;
    }
}

class Bank{
    private _name: string;
    private _branches: Branch[];

    constructor(name: string){
        this._name = name;
        this._branches = [];
    }

    addbarnch(branch: Branch): boolean{
        
    }

}
