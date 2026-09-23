function FriendsList(namesArr) {
  this.namesArr = namesArr;
}

const qtyNames = process.argv[3];
const names = process.argv.slice(4);

console.log(names);
