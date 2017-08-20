// sanity check
console.log("app.js linked.");
const portfolio = [
    {
      'companyName': 'Intuit',
      'role': 'Lead Global Product Manager for Find-A-ProAdvisor',
      'companyLink': 'https://quickbooks.intuit.com/find-an-accountant/',
      'dates': '2016 - 2017',
      'img': 'assets/img/qb_logo.png',
    },
    {
      'companyName': 'Ernst and Young (EY)',
      'role': 'Manager in the Technology Advisory Practice',
      'companyLink': 'https://www.ey.com',
      'dates': '2011 - 2014',
      'img': 'assets/img/ey_logo.gif',
    },
    {
      'companyName': 'Accenture',
      'role': 'Consultant in the Technology Advisory Group',
      'companyLink': 'https://www.accenture.com',
      'dates': '2007 - 2011',
      'img': 'assets/img/acn_logo.png',
    }
  ];;

//https://stackoverflow.com/questions/9468055/what-does-new-in-javascript-do-anyway
// the new operator produces an object that inherits from f.prototype
  $(document).ready(function(){
    let currentHour = new Date().getHours()
    if ( currentHour < 11 ) {
      $('.jumbotron-banner').text("Good Morning");
      // $('.jumbotron-banner').fadeOut(function() {
      //   $(this).text("Good Morning")
      // }).fadeIn();
      console.log('Good Morning');
    } else if ( currentHour >= 11 && currentHour <= 13 ) {
      $('.jumbotron-banner').text(`Good Afternoon`);
      console.log('Good Afternoon');
    } else {
      $('.jumbotron-banner').text(`Good Evening`).fadeIn(1000);
    };
      // $('.display-3').text(`Good Evening`);
      console.log('Good Evening');

  // $('nav').find('a').on('click', function() {
  //   let href = $(this).attr('href');
  //   console.log(href);
  //   $("html, body").delay(20000).animate({
  //       'scrollTop': '$(href).offset().top',
  //   }, 1000);
  // });

  for ( let i = 0; i<portfolio.length; i++ ) {
      $('.port').eq(i).append(`<a href='${portfolio[i].companyLink}'><img class='port-pics' src=${portfolio[i].img}></a><p>I worked at ${portfolio[i].companyName} as a ${portfolio[i].role}</p>`);
    }

  // $('.port').eq(0).append(`<img class='port-pics' src=${portfolio[0].img}>`);
  // $('.port').eq(1).append(`<img class='port-pics' src=${portfolio[1].img}>`);
  // $('.port').eq(2).append(`<img class='port-pics' src=${portfolio[2].img}>`);
});
