/*********************************************************Exercise 1********************************************/
// const StringFormatter = function(){

//     const capitalizeFirst = function(name){
//          console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
//     }

//     const skewerCase = function(str){
//         let name = str. replace(' ', '-');
//         console.log(name)
//     }

//     return{
//         capitalizeFirst,
//         skewerCase
//     }
// }

// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box



/*********************************************************Exercise 2********************************************/
const Bank = function(){
    let money = 500

    const depositCash = (cash) => money += cash

    const checkBalance = function(){
        console.log(money)
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950