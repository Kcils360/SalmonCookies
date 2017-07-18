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
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//1st and Pike Location
var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  hourlyCookies: [],
  customersPerHour: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
      this.hourlyCookies.push(cookiesPer);
    }
    return this.hourlyCookies;
  },

  cookiesPerDay: function(){
    var total = 0;
    for(var i = 0; i < hoursOpen.length; i++){
      total += this.hourlyCookies[i];
    }
    return total;
  },
  render: function(){
    var pikeUL = document.getElementById('pike');
    for(var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + pike.hourlyCookies[i] + ' cookies';
      pikeUL.appendChild(liEl);
    }
    var total = document.getElementById('pike');
    liEl = document.createElement('li');
    liEl.textContent = 'total - ' + pike.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};

pike.customersPerHour();
pike.cookiesPerHour();
pike.render();

//SeaTac Location
var seaTac = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  hourlyCookies: [],
  customersPerHour: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < hoursOpen.length; i++){
      var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
      this.hourlyCookies.push(cookiesPer);
    }
    return this.hourlyCookies;
  },

  cookiesPerDay: function(){
    var total = 0;
    for(var i = 0; i < hoursOpen.length; i++){
      total += this.hourlyCookies[i];
    }
    return total;
  },
  render: function(){
    var pikeUL = document.getElementById('seatac');
    for(var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + seaTac.hourlyCookies[i] + ' cookies';
      pikeUL.appendChild(liEl);
    }
    var total = document.getElementById('seatac');
    liEl = document.createElement('li');
    liEl.textContent = 'total - ' + seaTac.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};
seaTac.customersPerHour();
seaTac.cookiesPerHour();
seaTac.render();
