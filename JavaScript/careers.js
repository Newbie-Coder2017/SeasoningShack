window.onload = pageReady;

function pageReady() {
  
  var btnLocImg = document.getElementsByClassName("store-front");
  var annexBtn = document.getElementById("annex-img");
  var kenBtn = document.getElementById("kensington-img");
  var jobListAll = document.getElementById("job-container");
  var annexJob = document.getElementById("annex-job");
  var kenJob = document.getElementById("kensington-job");

  annexBtn.onclick = showAnnex;

  function showAnnex() {
    jobListAll.style.display = "block";
    annexJob.style.display = "block";
    kenJob.style.display = "none";
    appliForm.style.display = "none";
  }
  
  kenBtn.onclick = showKen;
  
  function showKen() {
    jobListAll.style.display = "block";
    kenJob.style.display = "block";
    annexJob.style.display = "none";
    appliForm.style.display = "none";
  }

  // SHOW PANEL CONTENT
  var acc = document.getElementsByClassName("title-accordion");
  var i;
  var d;
  var s;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panelAcc = this.nextElementSibling;
      if (panelAcc.style.maxHeight){
        panelAcc.style.maxHeight = null;
        appliForm.style.display = "none";
      } else {
        panelAcc.style.maxHeight = panelAcc.scrollHeight + "px";
      } 
    });
  }

  // JOB OBJECT
  
  var jobPost1 = {
    name: "Host/Hostess",
    duties: [
    "Greeting guests in a timely manner and seating them according to the sections and rotations of the restaurants", 
    "Accommodating guests to receive the best guest experience", 
    "Answering phone calls and providing information about events, reservations, deliveries and takeout", 
    "Maintain orderly queues; Monitor and measure waiting times", 
    "Assisting service staff with restocking supplies and running food when needed"],
    skills: [
    "Excellent customer service skills", 
    "Strong communication and interpersonal skills, both written and oral",
    "A positive, team-oriented attitude", 
    "Ability to multi-task in a fast-paced environment", 
    "Must be able to work with minimal to no supervision", 
    "Can work a flexible schedule including opening, closing, weekends, and holidays", 
    "Smart serve certification is an asset, but not required", 
    "Must be eligible to work in Canada"]
  };
  
  var jobPost2 = {
    name: "Foods and Beverage Server",
    duties: [
    "Greeting patrons, making recommendations, and answering questions regarding food and beverages", 
    "Maintain product knowledge of all food and beverage items served", 
    "Taking food orders and relaying to kitchen and bar staff", 
    "Preparing and serving specialty food and beverages to guests on a timely manner", 
    "Present bill to patrons and accept payment", 
    "Cleaning and maintaining food service supplies"],
    skills: [
    "Excellent customer service skills", 
    "Strong communication and interpersonal skills", 
    "Ability to multi-task in a fast-paced environment", 
    "Ability to work with minimal supervision and have strong initiative", 
    "Must have a smart serve certification", 
    "Must be eligible to work in Canada", 
    "Can work a flexible schedule including opening, closing, weekends, and holidays"]
  };
  
  // JOB TITLE ARRAY
  var jobVacancy = {
    name:[jobPost1, jobPost2]
  };
  

  var classDuties = document.getElementsByClassName("list-container");
  var classDuties2 = document.getElementsByClassName("list2-container");
  var jobName = document.getElementsByClassName("job-name");
  var jobList = jobVacancy.name;

  for (i = 0; i < jobList.length; i++) {
    jobName[i].innerHTML = jobList[i].name;
  }

  for (i = 0; i < jobList.length; i++) {
    for (d = 0; d < jobList[i].duties.length; d++) {
      classDuties[i].innerHTML += "<li>" + jobVacancy.name[i].duties[d] + "</li>";
    }
    for (s = 0; s < jobList[i].skills.length; s++) {
      classDuties2[i].innerHTML += "<li>" + jobVacancy.name[i].skills[s] + "</li>";
    }
  }
  
  var applyBtn = document.getElementById("apply-btn");
  var applyBtn2 = document.getElementById("apply2-btn");
  var appliForm = document.getElementById("form-container");
  var jobNameForm = document.getElementsByClassName("job-name-form");

  function showAppliForm() {
    appliForm.style.display = "block";
  }
    
  applyBtn.onclick = showAppliForm;
  applyBtn2.onclick = showAppliForm;
    
   
    
    
    
    
    
    
    

} //end of ONLOAD function