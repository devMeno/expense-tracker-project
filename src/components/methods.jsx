function saveHistory(all) {
     localStorage.setItem('all_transactions', JSON.stringify(all))
}

export function getHistory() {
     const history = localStorage.getItem('all_transactions');
     if (history != null) {
          return JSON.parse(cart);
     } else {
          return [];
     }
}

export function addTransaction(newTransaction) {
     let history = getHistory();

     history.push(newTransaction);
     saveHistory(history);
}