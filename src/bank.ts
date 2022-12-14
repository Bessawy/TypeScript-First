
import { Bank } from "./types/bank"
import { Branch } from "./types/branch"
import { Customer } from "./types/customer"

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

const bra : null | Branch[] = arizonaBank.findBranchByName("west")
if(bra){
    console.log(bra[0].getCutomers)
}

customer1.addTransactions(-1000)
console.log("Customer 1 balance with id: " + customer1.getId + " is: " + customer1.getBalance())
console.log("--------------Branch exist: ", arizonaBank.listCustomers(westBranch, true))
console.log("--------------Branch exist: ", arizonaBank.listCustomers(sunBranch,true))