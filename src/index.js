import './index.css';
import {getUsers, deleteUser} from './api/userApi';

import numeral from 'numeral';

debugger; // eslint-disable-line no-debugger
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this class`); // eslint-disable-line no-console
getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.email}</td></tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

const deleteLinks = global.document.getElementsByClassName('deleteUser');

//must use Array.from to create a real array from DOM collection
//getElementsByClassName returns an array-like collection
Array.from(deleteLinks, link=>{
  link.onclick = function (event) {
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes["data-id"].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
});
});
