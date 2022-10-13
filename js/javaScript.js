var button = document.querySelector(".courseButton");
var coursesArray = ["The complete 2022 Web Development Bootcamp by Dr. Angela  at Udemy  (50%)",
  "HR (Human Resource) at Top International Academy ",
  "ReactJS The complete course for Beginners by Meta Brains at Udemy",
  "Accounting using Microsoft Excel by Top Target Academy for Training, Consulting and Research ",
  "Leadership and Communication Skills by Top Target Academy for Training, Consulting and Research",
  "CCNAv7: Introduction to Networks at Cisco networking Academy",
  "Adobe Photoshop & Adobe Premiere at Macos Organization",
  "Graphic communication at Canvas Network ",
  "CRM: Customer Relationship Management at Udemy",
  "English Language Course at Eliza International Language Institute",
  "Computer Network and Its Fundamentals at Udemy",
  "Project Management: Becomi;ng a”Successful Project Manager” at Udemy"
];

button.addEventListener("click", function() {
  button.remove();
  document.querySelector(".courseHide").classList.replace("courseHide", "courseVisible");
  var i = 0;
  var interval = setInterval(function() {
    var list = document.querySelector(".listOfCourses");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(coursesArray[i]));

    list.appendChild(li);
    i++;
    if (i == coursesArray.length) {
      removeCourse();
    };
  }, 1000);

  function removeCourse() {
    clearInterval(interval);
  }

});

var buttonExperience = document.querySelector(".experienceButton");
buttonExperience.addEventListener("click", function(){
  buttonExperience.remove();
  document.querySelector(".experienceHide").classList.replace("experienceHide", "experienceVisible");
  
})
