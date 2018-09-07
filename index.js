/* HTML 

header 
<h1>

Tabs/Preset Background
- <nav>, <h1>, <p>, <radio>

Form
<form>, <input type="text">, <label>

Display
<div>
<h1 id="names"></h1>
<p>
<h3>
</div>

css 
display: flex/grid
if grid, grid-template-columns: 1fr 1fr
if flex in one container (width: 50%)
if flex, flex-wrap: wrap 
if float, float: left

JS (event)
event: keydown, on every time
transition between backgrounds: 
-transition between clicking
-actually change the backgrounds
first initials in the display 
something like this: display.style.color = 'red'
-onClick new image loads for background 

*/

document.addEventListener("DOMContentLoaded", function(event) {
  
    console.log("DOM fully loaded and parsed");
    
    ( "#firstname" ).keyup(function() {
  alert( "Handler for .keyup() called." )
  
  let firstName = document.getElementById("firstName").value
  
  (".invitation-first").innerHTML(firstname);
  });
})

