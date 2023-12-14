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