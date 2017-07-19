'use strict';

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

    for(var i = 0; i < hoursOpen.length; i++){
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
  };

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
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);


  salesTable.appendChild(trEl);
//this is for the store rows
};
function cookiesPerHourRows(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
};

makeHeaderRow();
cookiesPerHourRows();
