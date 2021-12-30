class Account{
    constructor(name,accno,balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    getBalance(){
        return `${this.name} account balance is : र ${this.balance}`;
    }
    getBalance2(){
        return`account balance is : र ${this.balance}`;
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance = this.balance - amount;
            console.log(`Debited amount is : र ${amount}`);
         return `Remaining ${this.getBalance2()}`;
        }else{
            return `Insuffisient balance check your balance... `;
        }
       
        }
        credited(num){
            this.balance = this.balance + num;
            console.log(`Credit amount is: र${num}`);
            return `Total ${this.getBalance2()}`
        }
        }    
  

const vignesh = new Account("Vignesh", 1998 , 35_000);
const abdul = new Account("Abdul", 1976 , 85_000);
const kalithas = new Account("Kalithas", 149 , 65_000);

console.log(vignesh);
console.log(abdul);
console.log(kalithas);

console.log(vignesh.getBalance());

console.log(vignesh.withdraw(5_000));

console.log(vignesh.credited(10_000));



console.log(abdul.getBalance());

console.log(abdul.withdraw(10_000));

console.log(abdul.credited(15_000));




console.log(kalithas.getBalance());

console.log(kalithas.withdraw(15_000));


console.log(kalithas.credited(30_000));
