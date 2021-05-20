let url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
let title = document.querySelector('.title')
    description = document.querySelector('.description')
    director = document.querySelector('.director')
    date = document.querySelector('.date')
fetch(url)
  .finally(alert('запрос выполнен'))
  .then(response => response.json())
  .then(out => output(out))
  .catch(error => console.log(error));

function output(out){
  title.innerText = `${out.title} (${out.original_title})`
  description.innerText = `Description: ${out.description}`
  director.innerText = `Director: ${out.director}`
  date.innerText = `Release date: ${out.release_date}`
}