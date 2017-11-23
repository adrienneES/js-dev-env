import './index.css';
import numeral from 'numeral';
debugger; // eslint-disable-line no-debugger
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this class`); // eslint-disable-line no-console
