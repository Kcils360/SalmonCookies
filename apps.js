'use strict';
// open from 6:00 AM to 8:00 PM
// //var location = {
//     minCustsHr:  ,
//     maxCustHr:  ,
//     avgCoockiPerCust:  ,
//     cookiesPerHr: [] ,
//     custPertHr: [] ,
//     totalCookiesDay:  ,
//     (methods to calculate customer and cookie totals)
//     (method to calcutlate customers per hour)
// var allStores = [];
// var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// function CookieStand(locationName, minCustomers, maxCustomers, avgCookiesPerSale){
//   this.locationName = locationName;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.avgCookiesPerSale = avgCookiesPerSale;
//   this.hourlyCookies = [];
//   this.customersPerHour = function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   };
//   this.cookiesPerHour = function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   };
//   this.cookiesPerDay = function(){
//     var total = 0;
//     for(var i = 0; i < hoursOpen.length; i++){
//       total += this.hourlyCookies[i];
//     }
//     return total;
//   };
//   this.render = function(){
//     var pikeUL = document.getElementById('pike');
//     for(var i = 0; i < hoursOpen.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + pikePlc.hourlyCookies[i] + ' cookies';
//       pikeUL.appendChild(liEl);
//     }
//     var total = document.getElementById('pike');
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total - ' + pikePlc.cookiesPerDay(total);
//     total.appendChild(liEl);
//   };
//   allStores.push(this);
// };
//
//
//1st and Pike Location
// var pikePlc = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < hoursOpen.length; i++){
//       total += this.hourlyCookies[i];
//     }
//     return total;
//   },
//   render: function(){
//     var pikeUL = document.getElementById('pike');
//     for(var i = 0; i < hoursOpen.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + pikePlc.hourlyCookies[i] + ' cookies';
//       pikeUL.appendChild(liEl);
//     }
//     var total = document.getElementById('pike');
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total - ' + pikePlc.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
// new CookieStand('Pike Place', 23 ,65 ,6.3);

// pikePlc.customersPerHour();
// pikePlc.cookiesPerHour();
// pikePlc.render();
// //
// //SeaTac Location
// var seaTac = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerSale: 1.2,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < hoursOpen.length; i++){
//       total += this.hourlyCookies[i];
//     }
//     return total;
//   },
//   render: function(){
//     var seatacUL = document.getElementById('seatac');
//     for(var i = 0; i < hoursOpen.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + seaTac.hourlyCookies[i] + ' cookies';
//       seatacUL.appendChild(liEl);
//     }
//     var total = document.getElementById('seatac');
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total - ' + seaTac.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
// seaTac.customersPerHour();
// seaTac.cookiesPerHour();
// seaTac.render();
//
// //Seattle Center location
// var seaCent = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < hoursOpen.length; i++){
//       total += this.hourlyCookies[i];
//     }
//     return total;
//   },
//   render: function(){
//     var seacentUL = document.getElementById('seacent');
//     for(var i = 0; i < hoursOpen.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + seaCent.hourlyCookies[i] + ' cookies';
//       seacentUL.appendChild(liEl);
//     }
//     var total = document.getElementById('seacent');
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total - ' + seaCent.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
// seaCent.customersPerHour();
// seaCent.cookiesPerHour();
// seaCent.render();
//
// //Capitol Hill location
// var capHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < hoursOpen.length; i++){
//       total += this.hourlyCookies[i];
//     }
//     return total;
//   },
//   render: function(){
//     var caphillUL = document.getElementById('caphill');
//     for(var i = 0; i < hoursOpen.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + capHill.hourlyCookies[i] + ' cookies';
//       caphillUL.appendChild(liEl);
//     }
//     var total = document.getElementById('caphill');
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total - ' + capHill.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
// capHill.customersPerHour();
// capHill.cookiesPerHour();
// capHill.render();
//
// //Alkai location
// var alKai = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < hoursOpen.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < hoursOpen.length; i++){
//       total += this.hourlyCookies[i];
//     }
//     return total;
//   },
//   render: function(){
//     var alkaiUL = document.getElementById('alkai');
//     for(var i = 0; i < hoursOpen.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpen[i] + ': ' + alKai.hourlyCookies[i] + ' cookies';
//       alkaiUL.appendChild(liEl);
//     }
//     var total = document.getElementById('alkai');
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total - ' + alKai.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
// alKai.customersPerHour();
// alKai.cookiesPerHour();
// alKai.render();
//---------------------------------------------------------------------------
//-----------------------------------------------------------------------------
var allStores = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function StoreByLocation(locationName, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale,
  this.customersPerHour = [];
  this.calcCustomersPerHour = function(){
    for(var i = 0; i< hoursOpen.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
    this.calcCustomersPerHour();//this calls the first fucntion, in order to use those numbers to run
    for(var i = 0; i < hoursOpen.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];//while we already have access to cookiesSoldEachHour, run the total
    }
  };
  this.totalCookiesPerDay = 0;
  this.render = function(){
    var pikeList = document.getElementById('pike');

    this.calcCustomersPerHour();
    for (var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      pikeList.appendChild(liEl);
  };
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ': ' + 'cookies';
  pikeList.appendChild(liEl)
  }
  allStores.push(this);
  this.calcCookiesSoldEachHour();
  this.render(allStores);
};

new StoreByLocation('Pike Place', 23, 65, 6.3);
new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
new StoreByLocation('Seattle Center', 11, 38, 3.7);
new StoreByLocation('Capitol Hill', 20, 38, 2.3);
new StoreByLocation('Alkai', 2, 16, 4.6);

function cookiesPerHourTableHeadrow(){
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('th');
  tdEl.textContent = 'Location';
  trEl.appendChild(tdEl);



}
//-----------------------------------------------------------------------
//-------------------------------------------------------------____----------
// THIS SHIT WORKS


var allStores = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesTable = document.getElementById('salesTable')


function StoreByLocation(locationName, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale,
  this.customersPerHour = [];
  this.calcCustomersPerHour = function(){
    for(var i = 0; i< hoursOpen.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
    this.calcCustomersPerHour();//this calls the first fucntion, in order to use those numbers to run
    for(var i = 0; i < hoursOpen.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];//while we already have access to cookiesSoldEachHour, run the total
    }
  };
  this.totalCookiesPerDay = 0;
  allStores.push(this);

  this.render = function(){
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    for(var i = 0; i < hoursOpen.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);

    salesTable.appendChild(trEl);
  }

this.calcCookiesSoldEachHour();
//this is the end of the constructor
};

new StoreByLocation('Pike Place', 23, 65, 6.3);
new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
new StoreByLocation('Seattle Center', 11, 38, 3.7);
new StoreByLocation('Capitol Hill', 20, 38, 2.3);
new StoreByLocation('Alkai', 2, 16, 4.6);

function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursOpen.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  };

  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);


  salesTable.appendChild(trEl)
//this is for the store rows
};
function cookiesPerHourRows(){
    for(var i = 0; i < allStores.length; i++){
      allStores[i].render();
    }
};

makeHeaderRow();
cookiesPerHourRows();
