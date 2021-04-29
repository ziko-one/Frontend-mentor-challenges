const form = document.getElementById('form');
const first = document.getElementById('firstName');
const last = document.getElementById('last Name');
const email = document.getElementById('email');
const password = document.getElementById('password');




const form = document.getElementById('form');
form = addEventListener('submit', e => {
  e.preventDefault();

    
  const firstName = form['firstName'].value;
  const lastName = form['lastName'].value;
  const email = form['email'].value;
  const password = form['password'].value;

	if (firstName === '') {
		addErrorTo('firstname', 'First Name is required');
	} else {
		removeErrorFrom('firstname');
	}

	if (lastName === '') {
		addErrorTo('lastname', 'Last Name is required');
	} else {
		removeErrorFrom('lastname');
	}

	if (email === '') {
		addErrorTo('email', 'Email is required');
	} else if (!isValid(email)) {
		addErrorTo('email', 'Email is not valid');
	} else {
		removeErrorFrom('email');
	}

	if (password === '') {
		addErrorTo('password', 'Password is required');
	} else {
		removeErrorFrom('password');
	}
});

function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removeErrorFrom(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}

function isValid(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}