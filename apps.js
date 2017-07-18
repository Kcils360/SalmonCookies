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
var hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

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
      liEl.textContent = hoursOpen[i] + ': ' + pike.hourlyCookies[i] + ' cookies this hour';
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
