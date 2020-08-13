/*Check Viewport */

function checkViewport(elem) {
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var elementTop = elem.offset().top;
  var elementBottom = elementTop + elem.outerHeight();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

/*End Check Viewport */

/* Light Box Script */

$(".eventImage").click(function() {
  var fileLink = $(this).attr("file");
  $(".lightBox").fadeIn(500);
  $(".lightBox").css("display", "flex");
  $(".lightBox .slideShow").css("display", "block");
  $(".lightBoxContent iFrame").css("display", "block");
  $(".lightBoxContent iFrame").attr("src", fileLink);
});

$(".teamProfiles figure").click(function() {
  $(".lightBox").fadeIn(500);
  $(".lightBox").css("display", "flex");
  $(".lightBoxContent .teamMemberLightBox").css("display", "flex");
  $(".lightBoxContent iFrame").css("display", "none");

  var teamMemberName = $(this)
    .children("figcaption")
    .children(".teamName")
    .text();
  var teamMemberRole = $(this)
    .children("figcaption")
    .children(".teamRole")
    .text();
  var teamMemberDescription = $(this)
    .children("figcaption")
    .children("." + project)
    .html();
  var teamMemberLinkedin = $(this)
    .children(".teamProfileImage")
    .attr("linkedin");
  var profilePicture = $(this)
    .children(".teamProfileImage")
    .attr("src");
  $(".teamMemberLightBox .teamName").text(teamMemberName);
  $(".teamMemberLightBox .teamRole").text(teamMemberRole);
  $(".teamMemberLightBox .roleDescription").html(teamMemberDescription);
  $(".teamMemberLightBox .teamProfileImage img").attr("src", profilePicture);
  $(".teamMemberLightBox .teamProfileImage a").attr("href", teamMemberLinkedin);
});

$(".partnerLogosContainer figure").click(function() {
  $(".lightBox").fadeIn(500);
  $(".lightBox").css("display", "flex");
  $(".lightBoxContent .projectLightBox").css("display", "flex");
  $(".lightBoxContent iFrame").css("display", "none");

  var weoffer = $(this)
    .children("figcaption")
    .children(".weOfferContent")
    .text();

  var weprovide = $(this)
  .children("figcaption")
  .children(".weProvideContent")
  .text();

  var weadvise = $(this)
  .children("figcaption")
  .children(".weAdviseContent")
  .text();

  $(".projectLightBox .weOfferContent").text(weoffer);
  $(".projectLightBox .weProvideContent").text(weprovide);
  $(".projectLightBox .weAdviseContent").text(weadvise);
});

$(".lightBoxBackground").click(function() {
  $(".lightBox").css("display", "none");
  $(".lightBoxContent iFrame").attr("src", "");
  $(".lightBox .slideShow").css("display", "none");
  $(".lightBoxContent iFrame").css("display", "none");
  $(".lightBoxContent .contactUsForm").css("display", "none");
  $(".lightBoxContent .teamMemberLightBox").css("display", "none");
});

$(".exitIcon").click(function() {
  $(".lightBox").css("display", "none");
  $(".lightBoxContent iFrame").attr("src", "");
  $(".lightBox .slideShow").css("display", "none");
  $(".lightBoxContent iFrame").css("display", "none");
  $(".lightBoxContent .contactUsForm").css("display", "none");
  $(".lightBoxContent .teamMemberLightBox").css("display", "none");
});

// $(".contactUsButton").click(function() {
//   $(".lightBox").fadeIn(500);
//   $(".lightBoxContent .contactUsForm").css("display", "block");
//   $(".lightBox").css("display", "flex");
// });

/* End Light Box Script */

/*Project Information Script */

var projectLinks = $(".projectNavigation .projectCarousel .projectLinks img");
var index = 0;

$(document).ready(function() {
  if (
    window.location.pathname == "/" ||
    window.location.pathname.indexOf("professional") != -1 ||
    window.location.pathname.indexOf("index.html") != -1
  ) {
    // $(window).resize(function() {
    //   $(projectLinks)[0].scrollIntoView(false);
    //   index = 0;
    //   sortContent(0);
    // });
    var anchor = window.location.href.substring(
      window.location.href.indexOf("#"),
      window.location.href.indexOf("&")
    );
    if (window.location.href.indexOf("#") != -1) {
      index = projectLinks.index($(anchor.toString()));
      sortContent(index);
      $(".aboutProject")[0].scrollIntoView();
    } else {
      sortContent(index);
    }
  }
});

function sortTeam(projectMembers) {
  var teamProfiles = $(".teamProfiles figure");
  $(teamProfiles).each(function() {
    if ($.inArray($(this).attr("id"), projectMembers) != -1) {
      $(this).css("display", "block");
    } else {
      $(this).css("display", "none");
    }
  });
}

function sortImages(projectImages) {
  $(".sideContentImages")
    .children()
    .remove();
  $(projectImages).each(function() {
    $(".sideContentImages").append("<img src='" + this + "'>");
  });
}
function sortImages2(projectImages) {
  $(".ContentImages")
    .children()
    .remove();
  $(projectImages).each(function() {
    $(".ContentImages").append("<img src='" + this + "'>");
  });
}
var project = "";
function sortContent(index) {
  $("body").css("overflow", "hidden");

  $(projectLinks).stop(true, true);
  $(projectLinks).fadeOut();
  $($(projectLinks)[index]).fadeIn();
  var projectName = $($(projectLinks)[index]).attr("id");
  project = projectName;

  $(".projectInformation").css("display", "none");
  switch (projectName) {
    case "lifeweAdviseContent":
      $(".projectHeadline").text("");
      $(".projectConcept").text("");
      $(".projectDescription").text(
        " Bringing LIFE3’s mission and initiatives to life through a complete redesign of the website. LIFE3 is committed to educating its community by participating in events to demonstrate how product development and design is applied to building mobile and web applications. LIFE3 enables startups to build and create product releases while empowering early-to-mid career professionals with the opportunity to work on real business problems."
      );
      $(".weOffer").text(
        "LIFE3 has been working with a full-stack developer, User Experience Designers, and a Visual Designer to illustrate the value provided to both professional and business development through a unique business model."
      );

      $(".adviseList").css("display", "block");
      $(".adviseList ul")[0].innerHTML =
        "<li>User Persona </li> <li>Competitive Analysis</li>";
      $(".adviseList ul")[1].innerHTML =
        "<li>Empathy Maps </li> <li>User Stories</li>";
      $(".adviseList ul")[2].innerHTML =
        "<li>Design Requirements </li> <li>Hi-Fidelity Wireframe</li>";
      $(".mobileServicesTable .adviseList ul")[0].innerHTML =
        "<li>User Persona </li> <li>Competitive Analysis</li>";
      $(".mobileServicesTable .adviseList ul")[1].innerHTML =
        "<li>Empathy Maps </li> <li>User Stories</li>";
      $(".mobileServicesTable .adviseList ul")[2].innerHTML =
        "<li>Design Requirements </li> <li>Hi-Fidelity Wireframe</li>";
      var projectImages = [
        "Assets/Images/GroupImages/LIFE3 WEB TEAM.png",
        "Assets/Images/GroupImages/LIFE3 TEAM PIX.png"
      ];
      var projectMembers = [
        "omarD",
        "paoloA",
        "albertoC",
        "tremayneS",
        "hongG"
      ];
      break;
    case "generator":
      $(".projectHeadline").text("Bushwick Generator Value Proposition");
      $(".projectConcept").text(
        "Gathering the voice of the community for the purpose of connecting low-to-mid income community residents to desirable workforce development opportunities made possible through creative, social entrepreneurs."
      );
      $(".projectDescription").text(
        "LIFE3 supported this concept by leading user experience designers to gather relevant qualitative data from resident entrepreneurs, as well as local community members, and then provide this as a catalog of opportunities for the community to decide on what they want to receive as training to further their careers."
      );
      $(".weOffer").text(
        "Bushwick Generator required User Experience design to discover the varying personas involved. LIFE3 worked with interns from CUNY Techworks UX Design program to map out User Personas and Journey Maps of resident entrepreneurs along with local residents."
      );
      $($(".adviseList")[2]).css("display", "none");
      $($(".mobileServicesTable .adviseList")[2]).css("display", "none");
      $(".adviseList ul")[0].innerHTML =
        "<li>User Surverys </li> <li>User Flows</li> <li>User Persona</li> <li>Competitive Analysis</li>";
      $(".adviseList ul")[1].innerHTML =
        "<li>Empathy Maps </li> <li>As-Is Scenario</li> <li>Idea Prioritization</li><li>User Stories</li>";
      $(".mobileServicesTable .adviseList ul")[0].innerHTML =
        "<li>User Surverys </li> <li>User Flows</li> <li>User Persona</li> <li>Competitive Analysis</li>";
      $(".mobileServicesTable .adviseList ul")[1].innerHTML =
        "<li>Empathy Maps </li> <li>As-Is Scenario</li> <li>Idea Prioritization</li><li>User Stories</li>";
      var projectImages = [
        "Assets/Images/GroupImages/generatorOne.jpg",
        "Assets/Images/GroupImages/generatorTwo.jpg"
      ];
      var projectMembers = ["omarD", "paulS", "lisettG", "sabeenA"];

      break;
    case "tvSensei":
      $(".projectHeadline").text("TVSensei Value Proposition");
      $(".projectConcept").text(
        "Teacher-made lessons for entertaining educational experiences enabled through an application that elicits teacher-student interactions, through digital media, for purposes of learning English as a Second Language."
      );
      $(".projectDescription").text(
        "LIFE3 supported TVSensei from the very conception of an idea and presented a plan to build a product for teachers and students to use. Once user personas were clearly defined we proceeded to create Hi-Fidelity wireframes for the teacher and student user interfaces."
      );
      $(".weOffer").text(
        "As a tech start-up, within pre-seed funding stages, TVSensei required a solution that would showcase its concept while keeping costs low. Through collaboration with CUNY Techworks UX Design program, LIFE3 was able to hire and allocate interns to deliver on TVSensei’s mobile application design needs."
      );
      $(".adviseList").css("display", "block");
      $(".adviseList ul")[0].innerHTML =
        "<li>User Persona</li> <li>Competitive Analysis</li>";
      $(".adviseList ul")[1].innerHTML =
        "<li>Empathy Maps </li> <li>User Stories</li>";
      $(".adviseList ul")[2].innerHTML =
        "<li>Design Requirements </li> <li>Hi-Fidelity Wireframe</li>";
      $(".mobileServicesTable .adviseList ul")[0].innerHTML =
        "<li>User Persona</li> <li>Competitive Analysis</li>";
      $(".mobileServicesTable .adviseList ul")[1].innerHTML =
        "<li>Empathy Maps </li> <li>User Stories</li>";
      $(".mobileServicesTable .adviseList ul")[2].innerHTML =
        "<li>Design Requirements </li> <li>Hi-Fidelity Wireframe</li>";

      var projectImages = [
        "Assets/Images/GroupImages/tvsenseiOne.jpg",
        "Assets/Images/GroupImages/tvsenseiTwo.png"
      ];
      var projectMembers = ["omarD", "sabeenA", "hongG"];

      break;
    case "pratt":
      $(".projectDescription").text(
        "LIFE3 is working with undergraduate, School of Design, students from Pratt Institute to implement a user experience approach to the interior design of a neighborhood tech hub. Students are being introduced to traditional mobile and web application design principles to identifying the needs of the community. By identifying pain points of community members students are able to implement an empathetic and user-centric approach to the architecture design of an urban neighborhood that demands strong neighborhood inclusion."
      );
      $(".projectInformation h1").text("How We work with Pratt Students");
      var projectImages = [
        "../Assets/Images/GroupImages/prattOne.png",
        "../Assets/Images/GroupImages/prattTwo.png",
        "../Assets/Images/GroupImages/prattweAdviseContent.jpg",
        "../Assets/Images/GroupImages/prattFive.jpg"
      ];
      var projectMembers = [];

      break;
    case "cunyTech":
      $(".projectDescription").text(
        "LIFE3 is harmonizing value between start-ups and entry-level career professionals by working with recent CUNY Techworks User Experience (UX) graduates to help various start-ups by driving ideas for mobile and website design from conceptualization to development. Interns were responsible for synthesize qualitative data from design thinking sessions and user interviews to build user personas, journey maps, and user journeys driven by real business projects. User interface mock-ups and hi-fidelity wireframes were also created to drive business value proposition for mobile and website design and development."
      );
      $(".projectInformation h1").text("How We work with Cuny Interns");
      var projectImages = [
        "../Assets/Images/GroupImages/cunyTechOne.jpg",
        "../Assets/Images/GroupImages/cunyTechTwo.jpg"
      ];
      var projectMembers = [];

      break;
    case "mucktracker":
      $(".projectHeadline").text("Mucktracker Value Proposition");
      $(".projectConcept").text(
        "Mucktracker’s platform allows students to survey coverage of newsworthy events and compare reporting from a range of diverse sources. Through data visualization, digital annotation, and organizational tools, students improve their 21st century media literacy skills in a fresh, relevant, and engaging way."
      );
      $(".projectDescription").text(
        "Mucktracker had a need for design of an application for students to research current news in a visually appealing way. This led to design of the Search Engine Result Page (SERP) from both a User Interface (UI) perspective as well as on advisement on the use of Application Program Interfaces (APIs) to access news from different news sources."
      );
      $(".weOffer").text(
        "LIFE3 consulted with company stakeholders, gathered business requirements, led User Interface design, and presented requirements for a Minimum Viable Product (MVP). We presented various options for User Interface design, tied the design to API functionality, and advised on the implementation of Artificial Intelligence as part of their MVP release."
      );
      //$(".phasesTable tr")[3].innerHTML = "<th>p1</th><th>p2</th><th>p3</th>"
      $(".adviseList").css("display", "block");
      // $(".adviseList p")[2].innerHTML = "Functional Specs";
      // $(".adviseList p")[3].innerHTML = "Application Design";
      // $(".adviseList p")[4].innerHTML = "Application Development";
      $(".adviseList ul")[0].innerHTML =
        "<li>User Requirements</li> <li>API Specifications</li>";
      $(".adviseList ul")[1].innerHTML =
        "<li>Hi-Fidelity Wireframe </li> <li>Mock-ups</li>";
      $(".adviseList ul")[2].innerHTML =
        "<li>Development Roadmap </li> <li>AI implementation</li>";
      // $(".mobileServicesTable .adviseList p")[2].innerHTML = "Functional Specs";
      // $(".mobileServicesTable .adviseList p")[3].innerHTML = "Application Design";
      // $(".mobileServicesTable .adviseList p")[4].innerHTML = "Application Development";
      $(".mobileServicesTable .adviseList ul")[0].innerHTML =
        "<li>User Requirements</li> <li>API Specifications</li>";
      $(".mobileServicesTable .adviseList ul")[1].innerHTML =
        "<li>Hi-Fidelity Wireframe </li> <li>Mock-ups</li>";
      $(".mobileServicesTable .adviseList ul")[2].innerHTML =
        "<li>Development Roadmap </li> <li>AI implementation</li>";

      var projectImages = [      ];
      var projectMembers = ["omarD","micaelaR"]; 

      break;
      /*   for new client energy economic development corp   */
    case "energyedc":
      $(".projectHeadline").text("Energy Economic Development Corp Value Proposition");
      $(".projectConcept").text(
        "Energy EDC was founded with the goal of using energy as a vehicle to create green jobs. We believe that retrofitting buildings and using their energy savings to pay for the service, parts, and labor needed is an organic way to fund a Twenty First century workforce. The jobs that can be created from doing this represent the New Deal of our time."
      );
      $(".projectDescription").text(
        "As a result of COVID-19 Clean Energy training delivered through Energy Economic Development Corp had to be converted from in-person classes to virtual online classes, in a very rapid fashion. This provided an opportunity to create a remote training program that makes optimal use of digital tools for training and facilitating employment opportunities within clean energy industries. Additionally, we are supporting improved student acquisition through digital marketing of the training program."
      );
      $(".weOffer").text(
        "LIFE3 is offering Product Design Services to support high student satisfaction with online, clean energy, training. The team implemented surveys and user interviews to gather qualitative data which informed how to adjust the use of digital tools resulting in an optimal remote learning experience. We also created a more prominent digital presence by designing a program flyer and landing page. "
      );
      $(".adviseList").css("display", "block");
      $(".adviseList ul")[0].innerHTML =
        "<li>User Personas</li> <li>Competitive Analysis </li>";
      $(".adviseList ul")[1].innerHTML =
        "<li>Journey Maps</li> <li>User Stories</li>";
      $(".adviseList ul")[2].innerHTML =
        "<li>Program Flyer Design</li> <li>Webpage Design</li>";
        
       
      $(".mobileServicesTable .adviseList ul")[0].innerHTML =
        "<li>User Personas</li> <li>Competitive Analysis </li>";
      $(".mobileServicesTable .adviseList ul")[1].innerHTML =
        "<li>Journey Maps</li> <li>User Stories</li>";
      $(".mobileServicesTable .adviseList ul")[2].innerHTML =
        "<li>Program Flyer Design</li> <li>Webpage Design</li>";

      var projectImages = [      ];
      var projectMembers = ["omarD","sabineS","katherineF","smithC"];

      break;
      
    /*  --------Template for Adding Client Information ----------- 


    case "generator":
      $(".projectHeadline").text("*insert client name here* Value Proposition");
      $(".projectConcept").text(
        "*insert project concept here*"
      );
      $(".projectDescription").text(
        "*insert project description here*"
      );
      $(".weOffer").text(
        "*insert 'We Offer' text here*"
      );

        *---- OPTIONAL: If you want to disable any lists in the 'We Advise' section, use the code below and replace the '2' with 
        the index of the list you want to disable.  The index of '0' represents the first list (User Experience Design).
        
      $($(".adviseList")[2]).css("display", "none");
      $($(".mobileServicesTable .adviseList")[2]).css("display", "none");

        ----*

      $(".adviseList ul")[0].innerHTML =
        "<li>*insert list items here for first list in desktop view* </li>";
      $(".adviseList ul")[1].innerHTML =
        "<li>*insert list items here for second list in desktop view*</li>";
      $(".adviseList ul")[2].innerHTML =
        "<li>*insert list items here for third list in desktop view*</li>";
        
       
      $(".mobileServicesTable .adviseList ul")[0].innerHTML =
        "<li>*insert list items here for first list in mobile view*</li>";
      $(".mobileServicesTable .adviseList ul")[1].innerHTML =
        "<li>*insert list items here for second list in mobile view*</li>";
      $(".mobileServicesTable .adviseList ul")[2].innerHTML =
        "<li>*insert list items here for third list in mobile view*</li>";

      var projectImages = [
        "*insert link for project images here.  Seperate multiple links with comma*",
      ];
      var projectMembers = ["*insert team member IDs here. Seperate multiple IDs with commas*"];

      break;

      */
  }
  $(".projectInformation").fadeIn(function() {
    setTimeout(function() {
      $("body").css("overflow-y", "scroll");
    }, 500);
  });

  sortImages(projectImages);
  sortImages2(projectImages);
  sortTeam(projectMembers);
}

$(".carouselControls").click(function() {
  if ($(this).hasClass("fa-chevron-left")) {
    index--;
    if (index <= -1) {
      index = $(projectLinks).length - 1;
    }
  }

  if ($(this).hasClass("fa-chevron-right")) {
    index++;
    if (index >= $(projectLinks).length) {
      index = 0;
    }
  }
  sortContent(index);
});

/*End Project Information Script */

/* Contact Us Script */

/* End Contact Us Script */
