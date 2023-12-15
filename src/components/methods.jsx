function saveHistory(all) {
     localStorage.setItem('all_transactions', JSON.stringify(all))
}

export function getHistory() {
     const history = localStorage.getItem('all_transactions');
     if (history != null) {
          return JSON.parse(history);
     } else {
          return [];
     }
}

export function addTransaction(newTransaction) {
     let history = getHistory();
     console.log(history);
     history.push(newTransaction);
     saveHistory(history);
}

export function getBalance() {
     let history = getHistory();
     let incomes = 0;
     let expenses = 0;
     history.forEach(element => {
          if (element.type === 'income') {
               incomes += parseFloat(element.amount);
          } else {
               expenses -= parseFloat(element.amount);
          }
     });
     return incomes + expenses;
}