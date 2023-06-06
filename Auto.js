const mostrarData = document.getElementById('mostrarData');
const bodyTable = document.getElementById('bodyTable');
const ocultarData = document.getElementById('ocultarData')


const hideData = () =>{
  bodyTable.innerHTML = ''  
}

const showData = (data) => {
  let html = '';
  data.forEach(element => {
    
    html += `
      <div class='casper'>
        <p>${element.id}</p>
        <p>${element.name}</p>
        <p>${element.username}</p>
        <p>${element.email}</p>
        <p>${element.phone}</p>  
      </div>
    `
    bodyTable.innerHTML = html;
  });

}

async function fetchData() {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(URL);
    const data = await response.json();
      showData(data);
  } catch (error) {
    console.log('Error:', error);
  }
}



  
mostrarData.addEventListener('click', ()=>{
  fetchData();
});


ocultarData.addEventListener('click', ()=>{
  hideData();
})







