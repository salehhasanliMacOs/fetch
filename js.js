const body = document.querySelector('body')
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => json.map(user=>{
        const div = document.createElement('div')
        div.classList.add('users')

        div.innerHTML = `
        
        <p>name: ${user.name}</p>
        <p>username: ${user.username}</p>
        <p>email: ${user.email}</p>
        <p>street: ${user.address.street}</p>
        <p>suite: ${user.address.suite}</p>
        <p>city: ${user.address.city}</p>
        <p>zipcode: ${user.address.zipcode}</p>
        <p>phone: ${user.phone}</p>
        <p>website: ${user.website}</p>
        <p>companyname: ${user.company.name}</p>
        `
        body.appendChild(div)
        
      }))