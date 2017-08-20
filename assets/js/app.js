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

  const background = [
    {
      'timeOfDay': 'morning',
      'img': 'assets/img/background/morningsf.jpg',
      'banner': 'Good Morning',
      'timeStart': '4',
      'timeEnd': '11'
    },
    {
      'timeOfDay': 'afternoon',
      'img': 'assets/img/background/afternoonsea.jpg',
      'banner': 'Good Afternoon',
      'timeStart': '12',
      'timeEnd': '16'
    },
    {
      'timeOfDay': 'evening',
      'img': 'assets/img/background/nightny.jpg',
      'banner': 'Good Evening',
      'timeStart': '16',
      'timeEnd': '4'
    }
  ]

//https://stackoverflow.com/questions/9468055/what-does-new-in-javascript-do-anyway
// the new operator produces an object that inherits from f.prototype

$(document).ready(function(){
  // debugger;
  let currentHour = new Date().getHours()

  // debugger;
  // thought:
    // need an if to check the current system hours to determine what picture and message to show
    // based on the time - add an image to the jumbo tron and banner from object
    // based on the time - update the lead class css
  // NOTE: there should be a way to do this with a for-loop but not sure how to get there
  // tried with a for-loop but couldnt get it to work

  if ( currentHour <= background[0].timeEnd ) {
    let k = 0;
    $('.jumbotron').css('background-image', `url(${background[k].img})`);
    $('.jumbotron-banner').text(`${background[k].banner}`).css('color', 'black');
    $('.lead').css('color', 'white');
  } else if ( currentHour >= background[1].timeStart && currentHour < background[1].timeEnd ) {
    let k = 1;
    $('.jumbotron').css('background-image', `url(${background[k].img})`);
    $('.jumbotron-banner').text(`${background[k].banner}`).css('color', 'black');
    $('.lead').css('color', 'black');
  } else if ( currentHour >= background[2].timeStart) {
    let k = 2;
    $('.jumbotron').css('background-image', `url(${background[k].img})`);
    $('.jumbotron-banner').text(`${background[k].banner}`).css('color', 'white');
    $('.lead').css('color', 'white');
  }

  // this is a loop to go through the portfolio to load pictures and words
  for ( let i = 0; i<portfolio.length; i++ ) {
    $('.portfolio-column').eq(i).append(`<a href='${portfolio[i].companyLink}'><img class='port-pics' src=${portfolio[i].img}></a><p>I worked at ${portfolio[i].companyName} as a ${portfolio[i].role}</p>`);
  }

});

// code to test later:

// $('nav').find('a').on('click', function() {
//   let href = $(this).attr('href');
//   console.log(href);
//   $("html, body").delay(20000).animate({
//       'scrollTop': '$(href).offset().top',
//   }, 1000);
// });

// $('.jumbotron-banner').fadeOut(function() {
//   $(this).text("Good Morning")
// }).fadeIn();
