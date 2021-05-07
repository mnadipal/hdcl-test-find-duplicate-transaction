export interface Transaction {
  id: number,
    source: string,
    target: string,
    amount: number,
    description: string
}

let transactions: Transaction[] = [
  { id: 1, source: 'A', target: 'B', amount: 300, description: 'tikkie' },
  { id: 2, source: 'B', target: 'B', amount: 43, description: 'tikkie' },
  { id: 3, source: 'A', target: 'B', amount: 300, description: 'tikkie' },
  { id: 4, source: 'C', target: 'B', amount: 300, description: 'fd' },
  { id: 5, source: 'A', target: 'B', amount: 300, description: 'tikkie' }
]

let eachEle: Transaction;
let duplicates: Transaction[];

const result = findDuplicateTransactions(transactions); 
console.log(result);

export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
  transactions.forEach(e => {
    eachEle = e;
    let res = transactions.filter(findDuplicates);
    if(res.length > 1) {
        duplicates = duplicates.concat(res);
    }
});
  return duplicates;
}
function findDuplicates(value: Transaction, index: number) {
  if( value.source === eachEle['source'] && value.target === eachEle['target']
   && value.amount === eachEle['amount'] && value.description === eachEle['description']){
      transactions.splice(index, 1)
      return value;
  };
};