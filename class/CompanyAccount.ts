import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private loan: number = 3000

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  Loan = () => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + this.loan)
    }
    console.log('Seu novo saldo é: ', this.getBalance())
  }

  getLoan = (loan: number): number => {
    return this.loan = loan
  }
}
