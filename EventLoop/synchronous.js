function fakeBlockingEvent() {
    let i=0
  while (i <= 10000000000) {
    if (i === 10000000000) {
      return "Completed"
    }
    i++;
  }
}

const a =  fakeBlockingEvent();
const b = fakeBlockingEvent();
const c = fakeBlockingEvent();


console.log(a);
console.log(b);
console.log(c);

