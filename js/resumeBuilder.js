var bio = {
  "name": "Lemuel Reyes",
  "role": "Web Developer",
  "contacts": {
    "mobile": "778-870-0463",
    "email": "reyeslemuelj@gmail.com",
    "github": "https://github.com/LemuelReyes/",
    "located": "Vancouver, Canada"
  },
  "welcomeMessage": "Welcome to my resume - all built with pure html / css / and javascript",
  "skills": ["html", "css", "javascript", "jquery", "git", "postcss/bem methodologies"],
  "picture": "./images/me.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", 'Lemuel Reyes');
var formattedRole = HTMLheaderRole.replace("%data%", 'Web Developer');
var mobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var email = HTMLemail.replace("%data%", bio.contacts["email"]);
var github = HTMLgithub.replace("%data%", bio.contacts["github"]);
var located = HTMLlocation.replace("%data%", bio.contacts["located"]);
var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var picture = HTMLbioPic.replace("%data%", bio.picture);

$("#header").append([formattedName, formattedRole, mobile, email, github, located, welcome, picture, HTMLskillsStart]);

// renders the skills section
for (var i = 0; i < bio.skills.length; i++) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkill);
}

// renders work section
function displayWork(){
var work = {
  "jobs": [{
    "employer": "Filmex Immigration",
    "title": "Admin Assistant",
    "dates": "2010-2017",
    "description": "Filing, client-side service, data entry"
  },
  {
    "employer": "La Casa",
    "title": "Maintenance Personell",
    "dates": "2014",
    "description": "Landscape, Laundry, Clean"
  }
]
}

for (var i = 0; i < work.jobs.length; i++) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i]["employer"]);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i]["title"]);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i]["dates"]);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i]["description"]);
  $(".work-entry:last").append(formattedDescription);
}
}

displayWork();

// $(document).click(function(loc){
//   var x = loc.PageX;
//   var y = loc.PageY;
//
//   logClicks(x,y);
//
// });
//

// render project section
projects.display = function() {

  var projects = {
      "project": [{
        "title": "Travelsite",
        "dates": "August 2017",
        "description": "A site for a travel agency.",
        "images": ""
      },
      {
        "title": "Outdoormusts",
        "dates": "June 2017",
        "description": "A site for outdoor gear.",
        "images": ""
      },
      {
        "title": "Brix",
        "dates": "Feb 2017",
        "description": "A quickly coded real estate website.",
        "images": ""
      }
    ]
  }

  for (var i = 0; i < projects.project.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i]["title"]);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i]["dates"]);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i]["description"]);
    $(".project-entry:last").append(formattedDescription);

     if (projects.project[i]["images"].length > 0 ){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i]["images"]);
        $(".project-entry:last").append(formattedImage);
     }
  }
}
projects.display();

//render education section

function education() {
  var education = {
    "schools": [{
      "name": "Red Academy",
      "program": "Part Time, Front-End Web Development",
      "year": "2015",
      "recognition": "Certificate of Completion"
    },
    {
      "name": "Red Academy",
      "program": "Full Time, Front-End Web Development",
      "year": "2016",
      "recognition": "Diploma"
    },
    {
      "name": "Freecodecamp",
      "program": "Front-End Curriculum",
      "year": "2017",
      "recognition": "In progress"
    },
    {
      "name": "Udemy",
      "program": "Git course",
      "year": "2017",
      "recognition": "Certificate of Completion"
    }
    ]
  }

  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[i]["name"]);
    $(".education-entry:last").append(formattedName);
    var formattedYear = HTMLschoolDates.replace("%data%", education.schools[i]["year"]);
    $(".education-entry:last").append(formattedYear);
    var formattedProgram = HTMLschoolMajor.replace("%data%", education.schools[i]["program"]);
    $(".education-entry:last").append(formattedProgram);
    var formattedRecognition = HTMLschoolDegree.replace("%data%", education.schools[i]["recognition"]);
    $(".education-entry:last").append(formattedRecognition);
  }
}

education();


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);
