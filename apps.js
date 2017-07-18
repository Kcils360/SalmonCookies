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
var pikePlc = {
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
      liEl.textContent = hoursOpen[i] + ': ' + pikePlc.hourlyCookies[i] + ' cookies';
      pikeUL.appendChild(liEl);
    }
    var total = document.getElementById('pike');
    liEl = document.createElement('li');
    liEl.textContent = 'total - ' + pikePlc.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};

pikePlc.customersPerHour();
pikePlc.cookiesPerHour();
pikePlc.render();

//SeaTac Location
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
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
    var seatacUL = document.getElementById('seatac');
    for(var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + seaTac.hourlyCookies[i] + ' cookies';
      seatacUL.appendChild(liEl);
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

//Seattle Center location
var seaCent = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerSale: 3.7,
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
    var seacentUL = document.getElementById('seacent');
    for(var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + seaCent.hourlyCookies[i] + ' cookies';
      seacentUL.appendChild(liEl);
    }
    var total = document.getElementById('seacent');
    liEl = document.createElement('li');
    liEl.textContent = 'total - ' + seaCent.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};
seaCent.customersPerHour();
seaCent.cookiesPerHour();
seaCent.render();

//Capitol Hill location
var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerSale: 2.3,
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
    var caphillUL = document.getElementById('caphill');
    for(var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + capHill.hourlyCookies[i] + ' cookies';
      caphillUL.appendChild(liEl);
    }
    var total = document.getElementById('caphill');
    liEl = document.createElement('li');
    liEl.textContent = 'total - ' + capHill.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};
capHill.customersPerHour();
capHill.cookiesPerHour();
capHill.render();

//Alkai location
var alKai = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerSale: 4.6,
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
    var alkaiUL = document.getElementById('alkai');
    for(var i = 0; i < hoursOpen.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + alKai.hourlyCookies[i] + ' cookies';
      alkaiUL.appendChild(liEl);
    }
    var total = document.getElementById('alkai');
    liEl = document.createElement('li');
    liEl.textContent = 'total - ' + alKai.cookiesPerDay(total);
    total.appendChild(liEl);
  }
};
alKai.customersPerHour();
alKai.cookiesPerHour();
alKai.render();
