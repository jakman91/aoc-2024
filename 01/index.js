let list1 = [3, 4, 2, 1, 3, 3];
let list2 = [4, 3, 5, 3, 9, 3];

list1.sort();
list2.sort();

let distance = 0;

for (let i = 0; i < list1.length; i++) {
    distance += Math.abs(list1[i]-list2[i]);
}

console.log(distance);