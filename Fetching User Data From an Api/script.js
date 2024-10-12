document.getElementById('getUsersBtn').addEventListener('click', () => {



    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {

            //clear the user list

            const userList = document.getElementById('userList');
            userList.innerHTML = '';


            //loop through the users data and create list items


            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(listItem);

                console.log(userList);
                
            });
             

        })
        
        .catch(error => {
            console.error('Error:', error);
         });
    



});