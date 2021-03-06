'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesTable = document.getElementById('salesTable');
var newFormElement = document.getElementById('addLocation');
var allStores = [];
var hourlyTotals = [];



//+++++++++++++++++++++++++++++++++++++CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++
var StoreByLocation = function(locationName, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale,
  this.customersPerHour = [];
  this.calcCustomersPerHour = function(){

    for(var i = 0; i < hoursOpen.length; i++){
      this.customersPerHour.push((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
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
};
//+++++++++++++++++++++++++++++++END OF CONSTRUCTOR++++++++++++++++++++++++++++

StoreByLocation.prototype.render = function() {
  this.calcCookiesSoldEachHour();
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hoursOpen.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);

  salesTable.appendChild(trEl);
};

function calcHourlyTotals() {
  for(var i = 0; i < hoursOpen.length; i++){
    var hourlySum = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlySum += allStores[j].cookiesSoldEachHour[i];
    }
    hourlyTotals.push(hourlySum);
  }
};

function calcGrandTotal() {
  var sum = 0;
  for (var i = 0; i < hourlyTotals.length; i++){
    sum += hourlyTotals[i];
  }
  return sum;
};

function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hoursOpen.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
//this is for the store rows
};

function makeFooterRow(){
  calcHourlyTotals();
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Totals Per Hour';
  trEl.appendChild(thEl);

  for(var i = 0; i < hourlyTotals.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotals[i];
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
  };
  var totalthEl = document.createElement('th');
  totalthEl.textContent = calcGrandTotal();
  trEl.appendChild(totalthEl);
  salesTable.appendChild(trEl);
};

function cookiesPerHourRows(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
};

new StoreByLocation('Pike Place', 23, 65, 6.3);
new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
new StoreByLocation('Seattle Center', 11, 38, 3.7);
new StoreByLocation('Capitol Hill', 20, 38, 2.3);
new StoreByLocation('Alkai', 2, 16, 4.6);





//-------------------------------BUTTON EVENT-----------------------------
function handleNewLocationSubmit(event) {
  event.preventDefault();
  if (!event.target.location.value || !event.target.minimum.value || !event.target.maximum.value || !event.target.average.value === null) {
    return alert('Please fill in all fields!');
  }
  var locationName = event.target.location.value;
  var minCustomers = event.target.minimum.value;
  var maxCustomers = event.target.maximum.value;
  var avgCookiesPerSale = event.target.average.value;

  var newLocationAddition = new StoreByLocation(locationName, minCustomers, maxCustomers, avgCookiesPerSale);
  event.target.location.value = null;
  event.target.minimum.value = null;
  event.target.maximum.value = null;
  event.target.average.value = null;

  allStores.push(newLocationAddition);
  newLocationAddition.render();
};
makeHeaderRow();
cookiesPerHourRows();
makeFooterRow();
// calcHourlyTotals();
calcGrandTotal();

newFormElement.addEventListener('submit', handleNewLocationSubmit);
