window.onload = function() {
   console.log( 'window loaded' );

   var url = 'https://restcountries.eu/rest/v1';
   var request = new XMLHttpRequest();
   request.open( "GET", url );

   request.onload = function() {
     if (request.status == 200) {
       var jsonString = request.responseText;
       countries = JSON.parse( jsonString );
       var country = countries[0];
       populateSelect(countries);
     }
   }

   request.send( null );
  }


  function populateSelect(countries){
   //get a select box from the DOM
   //loop round countries and add an option tag for each
   console.log(countries);
   var dropdown = document.getElementById('dropdown');

   countries.forEach( function(country, index) {
     var countryOption = document.createElement('option');
     countryOption.text = country.name;
     countryOption.value = index;
     dropdown.appendChild(countryOption);
   })

   dropdown.onchange = function( e ) {
     var countryIndex =  e.target.value;
     var selectedCountry = countries[ countryIndex ]
     displayCountryInformation( selectedCountry );
   }
  }

  function displayCountryInformation( country ) {
   var title = document.getElementById( 'countryName' )
   title.innerText = "You have selected " + "" + country.name
   var capital = document.getElementById( 'countryCapital')
   capital.innerText = "The capital of this country is: " + "" + country.capital
   var population = document.getElementById('countryPopulation')
   population.innerText = country.population + " " + "people live there!"
   localStorage.setItem('selectedCountry', JSON.stringify(country));
  }

  






//   console.log( 'window loaded');

//   var url = 'https://restcountries.eu/rest/v1';
//   var request = new XMLHttpRequest();
//   request.open( "GET", url); //still not made connection to server just yet
//   request.onload = function() {
//     if( request.status === 200){
//       var jsonString = request.responseText;
//       console.log( jsonString )
//       var countries = JSON.parse( jsonString );
//       var country = countries[0];
//       console.log( country )
//       console.log( country.name )
//     }
//     // console.log( request.responseText );//still not sent request just yet
//   }
//   request.send( null )
//   console.log(request);
// }