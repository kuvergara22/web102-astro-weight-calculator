// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
   planets.reverse();
  
  for (var i = 0; i < planets.length; i++) {
    var select = document.getElementById("planets");
    var option = document.createElement("option"),
      txt = document.createTextNode(planets[i][0]);
    option.appendChild(txt);
    option.setAttribute("value", planets[i][0]);
    select.insertBefore(option, select.lastChild)
    
  }
  function calculateWeight(weight,planetName) {
    // 2. Write the code to return the correct weight
    var planet = planets.find(function(item){
       
        return item[0] == planetName;
        });
    var totalWeight = planet[1];
    
    return weight * totalWeight;
}
  function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
   var weight = parseFloat(document.getElementById("user-weight").value);
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
   
    var planetName = document.getElementById("planets").value;
    // 5. Create a variable called result and assign the value of the new calculated weight.
   
    var theResult = calculateWeight(weight,planetName);
    // 6. Write code to display the message shown in the screenshot.
   
    return document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + theResult + 'lbs!';
  }