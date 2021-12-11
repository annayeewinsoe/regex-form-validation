const inputs = document.querySelectorAll('input')

const patters = {
  username: /^[a-z\d]{4,12}$/i, 
  email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  phone: /^\d{11}$/,
  website: /^(www\.)([a-z\d-]{4,})\.([a-z]{2,8})$/,
}

const validate = (field, regex) => {
  if(regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
}

inputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patters[e.target.id])
  })
})