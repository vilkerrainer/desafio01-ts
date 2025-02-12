export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

setBalance = (balance: number) =>{
  this.balance = balance
}

getBalance = (): number => {
  return this.balance
}

  deposit = (value: number): void => {
      this.setBalance(value)
      console.log('Seu novo saldo é: ', this.getBalance())
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.getBalance() > value){
      this.setBalance(this.balance - value)
      console.log('Seu novo saldo é: ', this.getBalance())
    }else {
      console.log('Saldo insuficiente ou conta inválida')
    }
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
