function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
  }
  
  function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
  }
  
  function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); // '      ' => ''
  
    if (!enteredPlayername) { // enteredPlayername === ''
      event.target.firstElementChild.classList.add('error');
      errorsOutputElement.textContent = 'Please enter a valid name!';
      return;
    }
  
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}

/*This function here prevents the browser default behaviour of sending HTTP request.This
    is the first and foremost method in form submission*/
/*Here, FormData is a built-in blueprint, which takes a form and automatically 
    extracts the input that is entered in the form.Now,here FormData is a already a given blueprint for form submission
    using which we use that for our use cases, as below.new, here simply allows us to create an object instance */
/*By using the get command we get the access to the data by formData.
    trim is a built in function which get rids of the whitespace before and after the input.*/
/*Return here will ensure that if this if there is a invalid input the code working will stop*/
   /*Empty string is a falsy value*/
/*So, here we have used dynamic construction to change
the player name dynamically and this will actually short our code to a large extent.First, we use the 'data' property
of html to both to save player 1 and player 2, next we target that particular data property using the (event.target.dataset.playerid),
and give it a variable value(because it will change between 1 and 2 dynamically as the user clicks),in this case the
variable is editedPlayer, and then we give id's to the section carrying the player name element in HTML.Next, we
target the particular id, using slector and give it a dynamic constructor value in this case like this ('player-' + editedPlayer + '-data')
, where the editedPlayer will dynamically change between 1 and 2 as the buttons are clicked, nect we change the text content.*/