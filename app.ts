import { CompanyAccount } from './class/CompanyAccount'
import { MoreDepositAccount } from './class/MoreDepositAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.getBalance()
peopleAccount.deposit(30)
peopleAccount.withdraw(40)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getBalance()
companyAccount.deposit(70)
companyAccount.withdraw(10)
companyAccount.Loan()
const moreDepositAccount: MoreDepositAccount = new MoreDepositAccount('Klayver', 30)
moreDepositAccount.getBalance()
moreDepositAccount.deposit(30)