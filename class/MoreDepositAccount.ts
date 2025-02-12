import { DioAccount } from "./DioAccount"

export class MoreDepositAccount extends DioAccount {
      
    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
    }
  
    deposit = (value: number) => {
        this.setBalance(value + 10)
        console.log('Seu novo saldo é: ', this.getBalance())
    }
  }