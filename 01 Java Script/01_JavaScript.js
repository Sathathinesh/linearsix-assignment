
/* 01
Extend JS Date object with a method daysTo() which returns number of complete days between
any pair of JS date objects: d1.daysTo(d2) should return quantity of complete days from d1 to
d2
*/
Date.prototype.daysTo = function(d2) {
    
    const oneDay = 24 * 60 * 60 * 1000; 
    const d1Midnight = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const d2Midnight = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  
    return Math.abs(Math.floor((d2Midnight - d1Midnight) / oneDay));
};
  
  // Example usage:
  const d1 = new Date('2024-10-01');
  const d2 = new Date('2024-10-10');
  console.log(d1.daysTo(d2)); // Output: 9
  

 
/* 02
Please order by Total 
Develop a program which produces ordered array of sales. Input: array of objects with the
following structure {amount: 10000, quantity: 10}. Output: new array of ordered sales. Array
element structure should be: {amount: 10000, quantity: 10, Total: 100000}, where Total =
amount * quantity. Please order by Total and note that input array shall remain intact.
*/
function orderByTotal(salesArray) {
    
    return salesArray.map(sale => ({
      ...sale,
      Total: sale.amount * sale.quantity
    })).sort((a, b) => b.Total - a.Total); 
}
  
  // Example usage:
  const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 5 },
    { amount: 20000, quantity: 2 }
  ];
  
  const orderedSales = orderByTotal(sales);
  console.log(orderedSales);
  /*
  Output:
  [
    { amount: 10000, quantity: 10, Total: 100000 },
    { amount: 20000, quantity: 2, Total: 40000 },
    { amount: 5000, quantity: 5, Total: 25000 }
  ]
  */
  

/** 03
Develop a program “Object Projection”. Input: any JSON object; prototype object. Output:
projected object. Projected object structure shall be intersection of source object and
prototype object structures. Values of properties in projected object shall be the same as
values of respective properties in source object
*/
function objectProjection(source, prototype) {
    const projected = {};
    for (let key in prototype) {
      if (key in source) {
        projected[key] = source[key]; 
      }
    }
    return projected;
}
  
  // Example usage:
  const source = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer',
    location: 'SL'
  };
  
  const prototype = {
    name: '',
    age: 0
  };
  
  const projectedObject = objectProjection(source, prototype);
  console.log(projectedObject); 
  // Output: { name: 'Alice', age: 30 }
  