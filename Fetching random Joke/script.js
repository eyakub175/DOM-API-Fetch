document.getElementById('getJokeBtn').addEventListener('click' , ()=>{


       fetch('https://official-joke-api.appspot.com/random_joke')
             .then(response => response.json())
             .then(data =>
             {
                document.getElementById('joke').textContent = `${data.setup} - ${data.punchline}`;
             })
             .catch(error => 
                {
                console.log('Error:', error);
             } )
             


});