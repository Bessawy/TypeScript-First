import { Customer } from "./customer";
import { Branch } from "./branch";


export class Bank{
    private _name: string;
    private _branches: Branch[];

    constructor(name: string){
        this._name = name;
        this._branches = [];
    }

    checkBranch(branch: Branch){
        const notFound:boolean = this._branches.every(
            (b)=>{
                return b.getName !== branch.getName;
            })
        return !notFound
    }

    findBranchByName(name: string): Branch[]|null{
        let found_branches: Branch[] = []
        for(let i = 0; i<this._branches.length; i++)
        {
            if(this._branches[i].getName.toLowerCase().includes(name.toLowerCase()))
            {
                found_branches.push(this._branches[i])
            }
        }
        
        if(found_branches.length === 0)
        {
            return null;
        }
        else{
            return found_branches;
        }
    }

    addBranch(branch: Branch): boolean{

        const notFound:boolean = !this.checkBranch(branch)
            
        if(notFound){
                this._branches.push(branch)
                return true;
            }
            else{
                return false;
            } 
    }

    addCustomer(branch: Branch, customer: Customer): boolean{
        for(let i = 0; i<this._branches.length; i++)
        {
            if(this._branches[i].getName === branch.getName)
            {
                const success: boolean =
                 this._branches[i].addCustomer(customer);
                return success;
            }
        }
        return false;
    }

    addCustomerTransaction(branch: Branch, customer_id: string
        , amount:number) : boolean{

        const notFound:boolean = !this.checkBranch(branch)
        if(notFound){
            return false
        }

        for( let i = 0; i<this._branches.length; i++)
        {
            if(this._branches[i].getName === branch.getName)
            {
                this._branches[i].addCustomerTransaction(customer_id, amount)

            }
        }
            return false
        }


        listCustomers(branch: Branch, printToggle: boolean):boolean{
            const found = this.findBranchByName(branch.getName)
            if(!found)
            {
                return false
            }

            if(printToggle){
                found.forEach(
                    (b) => {
                        b.getCutomers.forEach((c)=>{
                            console.log(`-----Customer-----: ${c.getName} ---id: ${c.getId}`)
                            console.log(`-transactions-`)
                            if(c.getTransactions.length === 0)
                            {
                                console.log(" No Transactions")
                            }
                            else{
                                c.getTransactions.forEach(
                                    (t)=>{
                                        console.log(`-amount: ${t.amount} -date: ${t.date}`)
                                    }
                                )
                            }
                        })
                    }
                )
            }   
            
            return true

        }

}