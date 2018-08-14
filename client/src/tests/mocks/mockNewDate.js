import sinon from 'sinon';
const clock = sinon.useFakeTimers(new Date(2011, 9, 1).getTime());
console.log(new Date());

export default clock;
