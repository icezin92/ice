const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('E-MAIL').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>ENVIANDO...</p>`

  let pronto = `<p>FEITO, LOGO ENTRAREMOS EM CONTATO</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})