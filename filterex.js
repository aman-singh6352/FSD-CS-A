const num = [1,2,3,4,5,6,7,8,9]
const even = num.filter((n) => (n%2 == 0))
                .map((n) => (n*n))
                .reduce((n, s) => (n+s),0);
console.log(even);