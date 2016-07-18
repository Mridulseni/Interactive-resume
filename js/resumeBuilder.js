(function(){
  'use strict';

  /** Models **/
  /**
   * This is the Model object for Bio in MVO style.
   * @type {Object}
   */
  var bio = {
    'name': 'Mridul Sen',
    'role': 'Web Developer',
    'contacts': {
      'mobile': '+1 757-739-6261',
      'email': 'mridulish@gmail.com',
      'github': 'https://github.com/Mridulseni',
      'twitter': '@none',
      'location': 'Norfolk, Virginia'
    },
    'welcomeMessage': 'Experience in communicating technical information to people of varying backgrounds. Technically adept at Web programming, database systems and C++ programming language. Worked as a successful lead lab instructor for “Problem Solving and Programming” course in Computer Science Department of Old Dominion University. ' +
      'Adapting to various work cultures, strong work ethic and organizational skills' +
      'I am a passionate learner and I am always willing to share my knowledge with my colleagues.I am seeking a role which capitalizes on my existing capabilities, includes my area of interest and also helps me develop new skills.<br>',
    'skills': [
      'HTML5', 'CSS3', 'Javascript', 'Bootstrap',
      'Abgular JS', 'Mysql','PL/SQL','Mysql',
      'Java',
      'Python',
      'C++',
      'git',
      'GitHub'
    ],
    'biopic': 'images/fry.jpg'
  };

  /**
   * This is the Model object for Education in MVO style.
   * @type {Object}
   */
  var education = {
    'schools': [
      {
        'name': 'Old Dominion University',
        'location': 'Norfolk,Virginia, USA',
        'degree': 'MS',
        'majors': [
          'Computer Science'
        ],
        'dates': '2014 - 2016',
        'url': 'http://www.odu.edu/'
      }
    ],
   
  };

  /**
   * This is the Model object for Work in MVO style.
   * @type {Object}
   */
  var work = {
    'jobs': [
      {
        'employer': 'Old Dominion University',
        'title': 'Lead Teaching Assistant',
        'location': 'Norfolk, Virginia',
        'dates': 'January 2015 - May 2016 (1 year 5 months)',
        'description': 'Instructed CS150 course “Problem Solving and Programming”. Built reputation for working successfully as a lead teaching assistant. Taught undergraduate students how to do effective coding in C++ programming language. Assisted Professor in delivering lectures and assist 80 students each semester with their labs and recitations.  Organized meetings with Faculty and other teaching assistants. Created assignments, projects, and quizzes for students. Graded their assignments and projects.'
      }
    ]
  };

  /**
   * This is the Model object for Projects in MVO style.
   * @type {Object}
   */
  var projects = {
    'projects': [
      {
        'title': 'World Visualization Tool',
        'dates': 'January 2016 – May 2016',
        'description': 'The aim is to expand the World-Vis visualization by allowing for any type of world data. We also aim to add functionality by increasing the number of complementary visualizations. We have focused only on the visual encoding and interaction idiom level of vis design since the domain and data are based on the input.<br><b>Environment: Github, D3, Colorbrewer, Javascript, JQuery, JSON</b>.<br><b>Github link:</b> https://github.com/Mridulseni/World_Visualization',
        'images': [
          'images/197x148.gif',
          'images/197x148.gif'
        ]
      },
      {
        'title': 'E-Portfolio on Information Visualization',
        'dates': 'January 2016 – May 2016',
        'description': 'Created an E-Portfolio on information visualization including a world visualization project, visualization works, blogs and tools. This E-portfolio focuses on visualization created with data. The visualization examples are created using HTML, CSS, D3, Tableau tool, R language.<br><b>Environment: Github, HTML, CSS, LESS, SASS, JavaScript, JQuery</b>.<br><b>Github link:</b>https://github.com/Mridulseni/Eportfolio_on_Information_Visualization',
        'images': [
          'images/197x148.gif',
          'images/197x148.gif'
        ]
      },
      {
        'title': 'Dragonmania',
        'dates': 'March 2016 – May 2016',
        'description': 'Created a website about dragons with a collection of static files. The website consists of different dragon types with detailed description, specifications and review section for users.<br><b>Environment: Github, HTML, CSS, JavaScript, Angular JS</b>.<br> <b>Github link:</b> https://github.com/Mridulseni/Dragonmania',
        'images': [
          'images/197x148.gif',
          'images/197x148.gif'
        ]
      },
      {
        'title': 'E-Portfolio using codepen',
        'dates': 'September 2015 – December 2015',
        'description': 'Created an E-Portfolio with features like creating an image, modifying and image, hiding an image in another image-steganography and displaying to public with webpage.<br><b>Environment: Github, HTML, CSS, JavaScript, Codepen</b>.<br><b> Codepen link:</b> http://codepen.io/mridulish/post/e-portfolio',
        'images': [
          'images/197x148.gif',
          'images/197x148.gif'
        ]
      },
      {
        'title': 'Extraction of SLS Patterns from Protein Structures',
        'dates': 'January 2015 – May 2015',
        'description': 'Studied the SLS from a set of protein structures. An SLS is a segment of protein structure containing a stand of a beta-sheet followed by a loop/turn and then followed by another stand.<br> <b>Environment: Github, C++, CodeBlocks, Chimera.</b><br><b>Github link:</b> https://github.com/Mridulseni/Bio_Informatics',
        'images': [
          'images/capture1.PNG',
          'images/197x148.gif'
        ]
      },
      {
        'title': 'Amazon clone',
        'dates': 'June 2016 – Current',
        'description': 'Working on amazon clone e-commerce website. The clone has features as adding products, search, cart, authentication sign/ signup and facebook login, payment.<br><b>Environment: Nodejs, MongoDB, Stripe payment, Expressjs</b>',
        'images': [
          'images/197x148.gif',
          'images/197x148.gif'
        ]
      }
	  
    ]
  };

  /**
   * This is the Ocutopus object in MVO style.
   * This connects the models and the views.
   * @type {Object}
   */
  var octopus = {
    init: function() {
      // Initialize Views.
      viewBio.init();
      viewEducation.init();
      viewProject.init();
      viewWork.init();

      // Initialize the goole map.
      viewGoogleMap.init();
    },
    getBio: function() {
      return bio;
    },
    getSchools: function() {
      return education.schools;
    },
    
    getJobs: function() {
      return work.jobs;
    },
    getProjects: function() {
      return projects.projects;
    }
  };

  /***** Views *****/
  /**
   * This is the View object for Bio in MVO style.
   * @type {Object}
   */
  var viewBio = {
    init: function() {
      this.$header = $('#header');
      this.$topContacts = $('#topContacts');
      this.$footerContacts = $('#footerContacts');
      this.$main = $('#main');

      // Add the internationalization button to the bottom of the page.
      this.$internationalizeButton = $(internationalizeButton);

      // Add the onclick event listener.
      this.$internationalizeButton.click(function() {
        var iName = viewBio.inName() || function(){};
        $('#name').html(iName);
      });

      // Add the button in the main section.
      this.$main.append(this.$internationalizeButton);

      this.display();
    },
    /**
     * Displays values in the bio section.
     * @return {undefined}
     */
    display: function() {
      var bio = octopus.getBio();

      this.$header.prepend(HTMLheaderRole.replace('%data%', bio.role)).prepend(
        HTMLheaderName.replace('%data%', bio.name));

      this.$header.append(HTMLbioPic.replace('%data%', bio.biopic)).append(
        HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));


      // Append skills if defined.
      if (bio.skills.length > 0) {
        this.$header.append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
          $('#skills').append(HTMLskills.replace('%data%', skill));
        });
      }

      // Contacts at the top of the page.
      this.$topContacts.append(
        HTMLmobile.replace('%data%', bio.contacts.mobile)).append(
        HTMLemail.replace('%data%', bio.contacts.email)).append(
        HTMLtwitter.replace('%data%', bio.contacts.twitter)).append(
        HTMLgithub.replace('%data%', bio.contacts.github)).append(
        HTMLlocation.replace('%data%', bio.contacts.location)
      );

      // Contacts at the bottom of the page.
      this.$footerContacts.append(
        HTMLmobile.replace('%data%', bio.contacts.mobile)).append(
        HTMLemail.replace('%data%', bio.contacts.email)).append(
        HTMLtwitter.replace('%data%', bio.contacts.twitter)).append(
        HTMLgithub.replace('%data%', bio.contacts.github)).append(
        HTMLlocation.replace('%data%', bio.contacts.location));
    },
    /**
     * Make bio.name to internationalized.
     * The last name will be all-uppercased, and the first name will be
     * capitalized.
     *
     * @return {string} new, modified name.
     */
    inName: function() {
      var newName = octopus.getBio().name;

      newName = newName.trim().split(' ');
      newName[0] = newName[0].slice(0, 1).toUpperCase() +
        newName[0].slice(1).toLowerCase();
      newName[1] = newName[1].toUpperCase();
      newName = newName.join(' ');

      return newName;
    }
  };

  /**
   * This is the View object for Education in MVO style.
   * @type {Object}
   */
  var viewEducation = {
    init: function() {
      this.$education = $('#education');

      this.display();
    },
    /**
     * Displays values in the education section.
     * @return {undefined}
     */
    display: function() {
    

      // Add a div, like a container, for each item.
      // Then, all the items are added inside the container.
      octopus.getSchools().forEach(function(school) {
        var schoolNameAndDegree;

        viewEducation.$education.append(HTMLschoolStart);

        // School name followed by the degree earned.
        schoolNameAndDegree = HTMLschoolName.replace('%data%', school.name) +
          HTMLschoolDegree.replace('%data%', school.degree);

        $('.education-entry').append(schoolNameAndDegree).append(
          HTMLschoolDates.replace('%data%', school.dates)).append(
          HTMLschoolLocation.replace('%data%', school.location));

        // Append majors if defined.
        school.majors.forEach(function(major) {
          $('.education-entry').append(HTMLschoolMajor.replace('%data%', major));
        });
      });

      // Append online courses if any.
    
    }
  };

  /**
   * This is the View object for Work in MVO style.
   * @type {Object}
   */
  var viewWork = {
    init: function() {
      this.$workExperience = $('#workExperience');

      this.display();
    },
    /**
     * Displays values in the work section.
     * @return {undefined}
     */
    display: function() {
      octopus.getJobs().forEach(function(job) {
        var employerAndTitle;

        // Add a div for each item, that holds all the related info.
        viewWork.$workExperience.append(HTMLworkStart);

        // Employer name followed by the title.
        employerAndTitle = HTMLworkEmployer.replace('%data%', job.employer) +
          HTMLworkTitle.replace('%data%', job.title);

        $('.work-entry:last').append(employerAndTitle).append(
          HTMLworkDates.replace('%data%', job.dates)).append(
          HTMLworkLocation.replace('%data%', job.location)).append(
          HTMLworkDescription.replace('%data%', job.description));
      });
    }
  };

  /**
   * This is the View object for Projects in MVO style.
   * @type {Object}
   */
  var viewProject = {
    init: function() {
      this.$projects = $('#projects');

      this.display();
    },
    /**
     * Displays values in the projects section.
     * @return {undefined}
     */
    display: function() {
      octopus.getProjects().forEach(function(project) {
        // Add a div for each item, that holds all the related info.
        viewProject.$projects.append(HTMLprojectStart);

        $('.project-entry:last').append(
          HTMLprojectTitle.replace('%data%', project.title)).append(
          HTMLprojectDates.replace('%data%', project.dates)).append(
          HTMLprojectDescription.replace('%data%', project.description));

        // Append project images if defined.
        project.images.forEach(function(image) {
          $('.project-entry:last').append(HTMLprojectImage.replace(
          '%data%', image));
        });
      });
    }
  };

  /**
   * This is the View object for the Google Map in MVO style.
   * @type {Object}
   */
  var viewGoogleMap = {
    init: function() {
      this.$mapDiv = $('#mapDiv');
      this.map = undefined;
      this.currentInfoWindow = undefined;

      this.addInitialEvents();

      this.render();
    },
    render: function() {
      // Add the google map to the page.
      this.$mapDiv.append(googleMap);
    },
    addInitialEvents: function() {
      // Call initializeMap when the DOM is fully ready.
      $(document).ready(this.initializeMap);
    },
    /**
     * Initialize the Google Map. This function needs to be executed after
     * the full DOM constructions.
     * See the documentation below for more details.
     * https://developers.google.com/maps/documentation/javascript/reference
     * @return {[type]} [description]
     */
    initializeMap: function() {
      var locations;

      var mapOptions = {
        disableDefaultUI: true
      };

      /*
      For the map to be displayed, the googleMap var must be
      appended to #mapDiv in resumeBuilder.js.
      */
      viewGoogleMap.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

      // Sets the boundaries of the map based on pin locations
      window.mapBounds = new google.maps.LatLngBounds();

      // locations is an array of location strings returned from locationFinder()
      locations = viewGoogleMap.locationFinder();

      // pinPoster(locations) creates pins on the map for each location in
      // the locations array
      viewGoogleMap.pinPoster(locations);
    },
    /**
     * pinPoster(locations) takes in the array of locations created by
     * locationFinder() and fires off Google place searches for each location
     * @param  {Array} locations  array that contains locations
     * @return {undefined}
     */
    pinPoster: function(locations) {
      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(viewGoogleMap.map);

      // Iterates through the array of locations, creates a search object for each location
      for (var place in locations) {

        // the search request object
        var request = {
          query: locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the
        // callback function with the search results after each search.
        service.textSearch(request, viewGoogleMap.callback);
      }
    },
    /**
     * locationFinder() returns an array of every location string from the JSONs
      written for bio, education, and work.
     * @return {Array} locations
     */
    locationFinder: function() {
      // initializes an empty array
      var locations = [],
        i,
        schools = octopus.getSchools() || [],
        numSchools = schools.length,
        jobs = octopus.getJobs() || [],
        numJobs = jobs.length;

      // adds the single location property from bio to the locations array
      locations.push(octopus.getBio().contacts.location);

      // iterates through school locations and appends each location to
      // the locations array
      for (i = 0; i < numSchools; i++) {
        locations.push(schools[i].location);
      }

      // iterates through work locations and appends each location to
      // the locations array
      for (i = 0; i < numJobs; i++) {
        locations.push(jobs[i].location);
      }

      return locations;
    },
    /**
     * A callback function that will be triggered when the textSearch is
     * completed. Calls a function to create map a marker for the location.
     * TODO: add comments
     * @param  {[type]}   results [description]
     * @param  {[type]}   status  [description]
     * @return {undefined}
     */
    callback: function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        viewGoogleMap.createMapMarker(results[0]);
      }
    },
    /**
     * createMapMarker(placeData) reads Google Places search results to create
     * map pins. placeData is the object returned from search results containing
     * information about a single location.
     * TODO: add comments
     * @param  {[type]} placeData [description]
     * @return {[type]}           [description]
     */
    createMapMarker: function(placeData) {
      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat();  // latitude from the place service
      var lon = placeData.geometry.location.lng();  // longitude from the place service
      var name = placeData.formatted_address;   // name of the place from the place service
      var bounds = window.mapBounds;            // current boundaries of the map window

      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: viewGoogleMap.map,
        position: placeData.geometry.location,
        title: name
      });

      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      // Add clicking event to the event listener. To make only one infoWindow can be
      // open at a time, the newly created infoWindow is stored in currentInfoWindow,
      // so that every time clicking event get fired, I can close the infoWindow before I
      // open the new one.
      google.maps.event.addListener(marker, 'click', function() {
        if (viewGoogleMap.currentInfoWindow !== undefined) {
          viewGoogleMap.currentInfoWindow.close();
        }

        infoWindow.open(viewGoogleMap.map, marker);

        viewGoogleMap.currentInfoWindow = infoWindow;
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      viewGoogleMap.map.fitBounds(bounds);
      // center the map
      viewGoogleMap.map.setCenter(bounds.getCenter());
    }
  };

  octopus.init();
})();
