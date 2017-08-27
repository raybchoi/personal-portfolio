// sanity check
console.log("app.js linked.");
const workExp = [
    {
      'companyName': 'Intuit',
      'role': 'Lead Global Product Manager for Find-A-ProAdvisor',
      'companyLink': 'https://quickbooks.intuit.com/find-an-accountant/',
      'dates': '2016 - 2017',
      'img': 'assets/img/workExp/qb_logo.png',
    },
    {
      'companyName': 'Ernst and Young (EY)',
      'role': 'Manager in the Technology Advisory Practice',
      'companyLink': 'https://www.ey.com',
      'dates': '2011 - 2014',
      'img': 'assets/img/workExp/ey_logo.gif',
    },
    {
      'companyName': 'Accenture',
      'role': 'Consultant in the Technology Advisory Group',
      'companyLink': 'https://www.accenture.com',
      'dates': '2007 - 2011',
      'img': 'assets/img/workExp/acn_logo.png',
    }
  ];

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
      'timeEnd': '17'
    },
    {
      'timeOfDay': 'evening',
      'img': 'assets/img/background/nightny.jpg',
      'banner': 'Good Evening',
      'timeStart': '17',
      'timeEnd': '4'
    }
  ];

  const projects = [
      {
        'projectName': 'Memory Game',
        'goal': 'Creating a basic game leveragin JS and HTML',
        'img': 'assets/img/portfolio/memorygame.png',
        'link': '#'
      },
      {
        'projectName': 'Gettysburg',
        'goal': 'jQuery and manipulating the DOM',
        'img': 'assets/img/portfolio/gettysburgaddress.jpg',
        'link': '#'
      },
      {
        'projectName': 'Mr. Fox',
        'goal': 'jQuery and accessing Objects / Arrays',
        'img': 'assets/img/portfolio/mrfox.jpg',
        'link': '#'
      },
      {
        'projectName': 'Functions',
        'goal': 'Learning how to use higher order functions',
        'img': 'assets/img/portfolio/functions.png',
        'link': '#'
      },
      {
        'projectName': 'Ninja Turtles Racing Game',
        'goal': 'Week 1 Capstone: HTML, jQuery, manipulating the DOM',
        'img': 'assets/img/portfolio/ninjaturtlesracing.png',
        'link': 'http://raychoi.me/03_01_racing_game/'
      }
    ];

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
  for ( let i = 0; i<workExp.length; i++ ) {
    $('.work-experience-column').append(`
      <div class="col-md-6">
        <div class='work-experience-div work-experience-div-${[i]}'>
        <img class='work-experience-pics' src=${workExp[i].img}>
        <p class='picture-subtitle'>${workExp[i].role}</p>
          </div>
        </div>
      </div>
      `);
  }

  // }
// on click of the QB icon
// show information about the job
/*
  console.log($('.work-experience-pics[0]'));
  $('.work-experience-div-0').on('click', function (){
    // alert('hi');
    $(this).fadeOut(function (){
      // $(this).remove('img, p');
      // $('p').remove();
      $('.work-experience-column').eq(0).fadeIn(function (){
        $('.work-experience-column').eq(0).html(`<p>Outcomes: </p>
          <p>•	Provide career coaching and mentorship to developers who aspire to become Product Managers</p>`)
      });
    });
  });
*/
  for ( let i = 0; i<projects.length; i++ ) {
    //$('.portfolio-column').eq(i).append(`<a href='${portfolio[i].companyLink}'><img class='port-pics' src=${portfolio[i].img}></a><p>I worked at ${portfolio[i].companyName} as a ${portfolio[i].role}</p>`);
    $('.projects-columns').append(`
      <div class="col-md-6">
        <div class='projects-div'>
        <a href='${projects[i].link}' target='_blank'><img class='projects-pics' src=${projects[i].img}></a>
        <p class='picture-subtitle project-word'>Name of Project:</p> <p class='picture-subtitle'>${projects[i].projectName}</p>
        <p class='goal'>Goal: ${projects[i].goal}</p>
        </div>
      </div>
      `);
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


// <p class='compName'>Company Name: ${workExp[i].companyName}</p>
