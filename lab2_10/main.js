let url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
fetch(url)
  .finally(alert('запрос выполнен'))
  .then(response => response.json())
  .then(function(out){
    document.querySelector('.title').innerText = `Title: ${out.title} (${out.original_title})`
    document.querySelector('.description').innerText = `Description: ${out.description}`
    document.querySelector('.director').innerText = `Director: ${out.director}`
    document.querySelector('.date').innerText = `Release date: ${out.release_date}`
  })
  .catch(error => console.log(error));
