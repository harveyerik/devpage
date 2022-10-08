import darkmode from "./darkmode.js";
import getData from "./getData.js";
import getStorage from "./getStorage.js";
import modalLogic from "./modalLogic.js";
import switchButton from "./switchButton.js";
import validateForm from "./validateForm.js";
import getProjects from "./getProjects.js";

const d = document;

// darkmode.js 
const $buttonDark = d.getElementById("darkmode");
const $app = d.querySelector("body");

// modalLogic.js
const $linkProjects = d.getElementById("viewProjects");
const $sectionProjects = d.getElementById("sectionProjects");
const $closeSectionProjects = d.getElementById("closeSectionProjects");
const $nextPageSkillsToProjects = d.getElementById("nextPageSkillsToProjects");
const $nextPageSkillsToProjectsTwo = d.getElementById(
  "nextPageSkillsToProjectsTwo"
);

// switchButton.js
const $projectsSkills = d.getElementById("projectsSkills");
const $projectsTrue = d.getElementById("projectsTrue");

// validateForm.js
const $formContactName = d.getElementById("formContactName");
const $formContactText = d.getElementById("formContactText");
const $formContactAll = d.getElementById("formContactAll");
const $catchErrors = d.getElementById("catchErrors");


// getData.js
const $name = d.getElementById("theName");
const $description = d.getElementById("theDescription");
const $imgJust = d.getElementById("imgCustom");
const $linkPortfolio = d.getElementById("viewPortfolio");
const $linkGitHub = d.getElementById("githubLink");
const $linkTwitter = d.getElementById("twitterLink");
const $linkDev = d.getElementById("devLink");

// getProjects.js
const $fatherSectionProjects = d.getElementById("fatherSectionProjects")

darkmode($app, $buttonDark)
modalLogic(
  $linkProjects,
  $closeSectionProjects,
  $sectionProjects,
  $nextPageSkillsToProjects,
  $nextPageSkillsToProjectsTwo
  )
switchButton($projectsTrue , $projectsSkills)
validateForm( $formContactAll, $formContactName, $formContactText ,$catchErrors)
getStorage($app,$buttonDark)
getData(
  $name,
  $description,
  $imgJust, 
  $linkPortfolio,
  $linkGitHub,
  $linkTwitter,
  $linkDev
)
getProjects($fatherSectionProjects)
