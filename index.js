document.body.style.border="15px solid yellow";
//document.body.style="5px solid black"
//document.body.style.boxShadow="2px 2px 5px black"

document.body.style.backgroundImage = "url('paper2.jpeg')";
let deviceheight=window.innerHeight;
let devicewidth=window.innerWidth;
const home=document.createElement("div");
document.body.append(home);
home.style.minHeight=deviceheight*0.962+"px";
home.style.minWidth=devicewidth*0.9+"px";
//home.style.backgroundColor="red";

/////////////////////////////////////////////////////////
// creating navbar///////////////////////////////////////
////////////////////////////////////////////////////////


const ul=document.createElement("ul");
home.append(ul);

//creating list item 1


const li1=document.createElement("li");
ul.append(li1);

const navlink1=document.createElement("a");
navlink1.href="#";
navlink1.style.textDecoration="none";
navlink1.style.color="black";

const listcontent1=document.createElement("div");
navlink1.append(listcontent1);
li1.append(navlink1);
navlink1.style.color="yellow";
li1.style.border="2px solid grey";
li1.style.borderRadius="28px";
li1.style.boxShadow="5px 5px 5px grey";

//



const h1a=document.createElement("h1");
listcontent1.append(h1a);
//h1a.style.marginLeft="30px";
//h1a.style.marginRight="30px";
li1.style.backgroundColor="black";


h1a.innerText="home";

//creating list item 2

const li2=document.createElement("li");
ul.append(li2);

const navlink2=document.createElement("a");
navlink2.href="#about";
navlink2.style.textDecoration="none";
navlink2.style.color="black";


const listcontent2=document.createElement("div");
navlink2.append(listcontent2);
li2.append(navlink2);
navlink2.style.color="yellow";
li2.style.border="2px solid grey";
li2.style.borderRadius="28px";
li2.style.boxShadow="5px 5px 5px grey";


const h2a=document.createElement("h1");
listcontent2.append(h2a);
//h2a.style.marginLeft="30px";
//h2a.style.marginRight="30px";
li2.style.backgroundColor="black";
h2a.innerText="About";

//creating list item 3

const li3=document.createElement("li");
ul.append(li3);

const navlink3=document.createElement("a");
navlink3.href="#skill";
navlink3.style.textDecoration="none";
navlink3.style.color="black";


const listcontent3=document.createElement("div");
navlink3.append(listcontent3)
li3.append(navlink3);
navlink3.style.color="yellow";
li3.style.border="2px solid grey";
li3.style.borderRadius="28px";
li3.style.boxShadow="5px 5px 5px grey";


const h3a=document.createElement("h1");
listcontent3.append(h3a);
//h3a.style.marginLeft="30px";
//h3a.style.marginRight="30px";
li3.style.backgroundColor="black";
h3a.innerText="Skills";

//list item 4

const li4=document.createElement("li");
ul.append(li4);

const navlink4=document.createElement("a");
navlink4.href="#projects";
navlink4.style.textDecoration="none";
navlink4.style.color="black";

const listcontent4=document.createElement("div");
navlink4.append(listcontent4);
li4.append(navlink4);
navlink4.style.color="yellow";
li4.style.border="2px solid grey";
li4.style.borderRadius="28px";
li4.style.boxShadow="5px 5px 5px grey";


const h4a=document.createElement("h1");
listcontent4.append(h4a);
//h4a.style.marginLeft="30px";
//h4a.style.marginRight="30px";
li4.style.backgroundColor="black";
h4a.innerText="Projects";


// list content 5

const li5=document.createElement("li");
ul.append(li5);

const navlink5=document.createElement("a");
navlink5.href="#contact";
navlink5.style.textDecoration="none";
navlink5.style.color="yellow";


const listcontent5=document.createElement("div");
navlink5.append(listcontent5);
li5.append(navlink5);
li5.style.border="2px solid grey";
li5.style.borderRadius="28px";
li5.style.boxShadow="5px 5px 5px grey";

const h5a=document.createElement("h1");
//h5a.style.marginLeft="30px";
//h5a.style.marginRight="30px";
listcontent5.append(h5a);
li5.style.backgroundColor="black";
h5a.innerText="Contact";

/// setting up style 

ul.style.display="flex";
ul.style.listStyle="none";
ul.style.gap="1rem";
ul.style.flexWrap="wrap";
//ul.style.border="2px solid black";
ul.style.marginLeft="10px";
ul.style.marginRight="10px";
ul.style.marginTop="100px";
ul.style.fontFamily="monospace";

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// adding some attraction/////////////////////////////////////
/////////////////////////////////////////////////////////////

const attraction=document.createElement("div");
home.append(attraction);
attraction.style.width=devicewidth*0.8+"px";
attraction.style.height=deviceheight*0.6+"px";
//attraction.style.backgroundColor="red";
attraction.style.marginLeft=devicewidth*0.076+"px";
attraction.style.marginRight=devicewidth*0.1+"px";
attraction.style.marginTop=devicewidth*0.07+"px";
attraction.style.marginBottom=devicewidth*0.07+"px";
attraction.style.border="2px solid black";

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// creating about me div////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const about=document.createElement("div");
document.body.append(about);
about.id="about";
//about.style.marginTop="5px";
about.style.minHeight=deviceheight*0.9+"px";
about.style.minWidth=devicewidth*0.9+"px";
//about.style.backgroundColor="RED";

const greet=document.createElement("h1");
about.append(greet);
let wordgreet="hello";
greet.innerText=wordgreet;
about.style.textAlign="center";
greet.style.fontFamily="monospace";
greet.style.fontWeight="100%";
greet.style.fontSize=devicewidth*0.3+"px";
greet.style.textShadow="5px 5px 5px grey";
greet.style.color="black";


// hello greeting type writer animation

let tae1=0;
tae1=Number(tae1);
let tae2="";
setInterval(typewriter,450)
function typewriter(){
 tae2=tae2+wordgreet.charAt(tae1);
 greet.innerText=tae2;
 tae1++;
 if(tae1>=7){
    tae1=0;
    tae2="";
 }
}
// creating week day for about me content
const date=new Date();
const week =date.getDay();
let weekdays=["Sunday","Monday","Tueseday","Wednesday","Thurseday","Friday","Saturday"]
let weekday=weekdays[week];

// adding about me content 

const aboutcontent=document.createElement("h1");
about.append(aboutcontent);
aboutcontent.innerText="Beautiful"+" "+weekday+" "+"isn't it.Hey ! I am Akash Agarwal I am 19 years old I deemed to be an backend developer currently I am persuing Bachelor of Computer Applications from Chandigarh University ";
aboutcontent.style.fontWeight="100";
aboutcontent.style.textShadow="1px 1px 1px grey";

if(devicewidth>300){
   aboutcontent.style.fontSize=deviceheight*0.06+"px";
}


aboutcontent.style.fontFamily="monospace";


//console.log(document.innerHeight);

/////////////////////////////////////////////////////////////////
///////////skillls and others //////////////////////////
//////////////////////////////////////////////////


const skillsandothers=document.createElement("div");
document.body.append(skillsandothers);
skillsandothers.id="skill";
skillsandothers.style.minHeight=deviceheight*0.99+"px";
skillsandothers.style.minWidth=devicewidth*0.9+"px";
//skillsandothers.style.backgroundColor="red";
//skillsandothers.style.marginTop="10px";


const myskillstatement=document.createElement("h6");
skillsandothers.append(myskillstatement);
myskillstatement.innerText="Skills";
myskillstatement.style.textAlign="center";
myskillstatement.style.fontFamily="monospace";
myskillstatement.style.fontWeight="100%";
myskillstatement.style.fontSize=devicewidth*0.25+"px";
myskillstatement.style.marginTop="100px"
myskillstatement.style.textShadow="7px 7px 7px grey";

const skillset=document.createElement("div");
skillsandothers.append(skillset);
skillset.style.marginTop="80px";

const skill1=document.createElement("img");
skill1.src="html.png";
skill1.className="skill";
skill1.style.height="235px";
skill1.style.width="215px";
skill1.style.marginTop="15px";
//skill1.style.boxShadow="20px 20px 20px black"

const skill2=document.createElement("img");
skill2.src="css3.png";
skill2.className="skill";
skill2.style.height="260px";
skill2.style.width="255px";
skill2.style.marginTop="0px";



const skill3=document.createElement("img");
skill3.src="javascript.png";
skill3.className="skill";
skill3.style.height="215px";
skill3.style.width="215px";
skill3.style.marginTop="35px";


const skill4=document.createElement("img");
skill4.src="linux.png";
skill4.className="skill";
skill4.style.height="220px";
skill4.style.width="220px";
skill4.style.marginTop="25px";



const skill5=document.createElement("img");
skill5.src="github.png";
skill5.className="skill";
skill5.style.height="215px";
skill5.style.width="215px";
skill5.style.marginTop="14px";



const skill6=document.createElement("img");
skill6.src="git.png";
skill6.className="skill";
skill6.style.height="245px";
skill6.style.width="245px";



const skill7=document.createElement("img");
skill7.src="java.png";
skill7.className="skill";
skill7.style.height="245px";
skill7.style.width="245px";
skill7.style.marginTop="1px"

// creating list of skill

const ulskill=document.createElement("ul");
skillset.append(ulskill);
ulskill.style.marginTop="40px";

const lis1=document.createElement("li");
ulskill.append(lis1);
lis1.append(skill1);

const lis2=document.createElement("li");
ulskill.append(lis2);
lis2.append(skill2);


const lis3=document.createElement("li");
ulskill.append(lis3);
lis3.append(skill3);

const lis4=document.createElement("li");
ulskill.append(lis4);
lis4.append(skill4);

const lis5=document.createElement("li");
ulskill.append(lis5);
lis5.append(skill5);

const lis6=document.createElement("li");
ulskill.append(lis6);
lis6.append(skill6);

const lis7=document.createElement("li");
ulskill.append(lis7);
lis7.append(skill7);

/////////////////////////////////////////////////////////////
////////////////////////////projects section//////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const projects=document.createElement("div");
document.body.append(projects);
projects.id="projects"
projects.style.minHeight=deviceheight*0.99+"px";
projects.style.minWidth=devicewidth*0.9+"px";

//creating heading


const myprojectstatement=document.createElement("h6");
projects.append(myprojectstatement);
myprojectstatement.innerText="Projects";
myprojectstatement.style.textAlign="center";
myprojectstatement.style.fontFamily="monospace";
myprojectstatement.style.fontWeight="100%";
myprojectstatement.style.fontSize=devicewidth*0.19+"px";
myprojectstatement.style.textShadow="7px 7px 7px grey"
//myprojectstatement.style.marginBottom="8px";



//creating list of project 

const ulprojects=document.createElement("ul");
projects.append(ulprojects);
ulprojects.style.marginTop="80px";


//creating project item 1

const liproject1=document.createElement("li");
ulprojects.append(liproject1);


const project1=document.createElement("div");
liproject1.append(project1);
project1.style.border="2px solid black";
project1.style.maxHeight="800px";
project1.style.maxWidth="340px";
project1.style.textAlign="center";
project1.style.marginLeft="25px";
project1.style.marginRight="15px";
project1.style.marginBottom="35px";
project1.style.backgroundColor="yellow";
project1.style.boxShadow="-15px 25px 15px grey"
project1.style.border="5px solid black";
project1.style.borderRadius="20px";



const projectimage1=document.createElement("img");
projectimage1.src="project1img.jpeg";
projectimage1.style.height="200px";
projectimage1.style.width="200px";
project1.append(projectimage1);
projectimage1.style.marginTop="18px";

projectimage1.style.border="2px solid black";
projectimage1.style.borderRadius="20px";
projectimage1.style.boxShadow="5px 5px 5px black";

const projecttitle1=document.createElement("h1");
project1.append(projecttitle1);
projecttitle1.innerText="Snakes and ladders game -js";
projecttitle1.style.marginTop="18px";

projecttitle1.style.fontWeight="100";
projecttitle1.style.fontFamily="monospace";
projecttitle1.style.textShadow="1px 1px 1px grey";
projecttitle1.style.fontSize="35px"

const projectdescription1=document.createElement("p");
project1.append(projectdescription1);
projectdescription1.innerText="Im this project I created snakes and ladders game using java script only using DOM api this game have working snakes and ladders when you hits one it will process your streak ";
projectdescription1.style.marginTop="18px";
projectdescription1.style.marginLeft="5px";
projectdescription1.style.marginRight="5px";
projectdescription1.style.fontWeight="100";
projectdescription1.style.fontFamily="monospace";
projectdescription1.style.textShadow="1px 1px 1px grey";
projectdescription1.style.fontSize="25px";
projectdescription1.style.marginBottom="20px";

/*
const aboutmore1=document.createElement("button");
project1.append(aboutmore1);
aboutmore1.style.marginTop="18px";
aboutmore1.style.marginBottom="18px";
*/

const aboutmorelink1=document.createElement("a");
aboutmorelink1.href="https://github.com/myselfakashagarwal/snake-ladder-game";
aboutmorelink1.innerText="more";
project1.append(aboutmorelink1);

aboutmorelink1.style.marginLeft="8px";
aboutmorelink1.style.marginRight="8px";
aboutmorelink1.style.marginTop="8px";
aboutmorelink1.style.marginBottom="8px";
aboutmorelink1.style.border="2px solid black";
aboutmorelink1.style.backgroundColor="yellow";
aboutmorelink1.style.color="black";
aboutmorelink1.style.fontFamily="monospace";
aboutmorelink1.style.textDecorationLine="none";
aboutmorelink1.style.fontWeight="100";
aboutmorelink1.style.fontSize="20px";
aboutmorelink1.style.padding="10px 20px 20px 20px";
aboutmorelink1.style.borderRadius="10px";
aboutmorelink1.style.border="5px solid black";

//creating project2


const liproject2=document.createElement("li");
ulprojects.append(liproject2);


const project2=document.createElement("div");
liproject2.append(project2);
project2.style.border="2px solid black";
project2.style.maxHeight="800px";
project2.style.maxWidth="340px";
project2.style.textAlign="center";
project2.style.marginLeft="25px";
project2.style.marginRight="15px";
project2.style.marginBottom="35px";
project2.style.backgroundColor="yellow";
project2.style.boxShadow="-15px 25px 15px grey"
project2.style.border="5px solid black";
project2.style.borderRadius="20px";

const projectimage2=document.createElement("img");
projectimage2.src="projectdefault.gif";
projectimage2.style.height="200px";
projectimage2.style.width="200px";
project2.append(projectimage2);
projectimage2.style.marginTop="18px";
projectimage2.style.border="2px solid black";
projectimage2.style.borderRadius="20px";
projectimage2.style.boxShadow="5px 5px 5px black";

const projecttitle2=document.createElement("h1");
project2.append(projecttitle2);
projecttitle2.innerText="personal portfolio website";
projecttitle2.style.marginTop="18px";

projecttitle2.style.fontWeight="100";
projecttitle2.style.fontFamily="monospace";
projecttitle2.style.textShadow="1px 1px 1px grey";
projecttitle2.style.fontSize="35px"

const projectdescription2=document.createElement("p");
project2.append(projectdescription2);
projectdescription2.innerText="In this project I created personal portfolio website using every possible beginer level concepts of java script and html and css  ";
projectdescription2.style.marginTop="18px";
projectdescription2.style.marginLeft="5px";
projectdescription2.style.marginRight="5px";
projectdescription2.style.fontWeight="100";
projectdescription2.style.fontFamily="monospace";
projectdescription2.style.textShadow="1px 1px 1px grey";
projectdescription2.style.fontSize="25px";
projectdescription2.style.marginBottom="20px";

/*
const aboutmore2=document.createElement("button");
project2.append(aboutmore2);
aboutmore2.style.marginTop="18px";
aboutmore2.style.marginBottom="18px";
*/
const aboutmorelink2=document.createElement("a");
aboutmorelink2.href="https://github.com/myselfakashagarwal/personal-portfolio";
aboutmorelink2.innerText="more";
project2.append(aboutmorelink2);

aboutmorelink2.style.marginLeft="8px";
aboutmorelink2.style.marginRight="8px";
aboutmorelink2.style.marginTop="8px";
aboutmorelink2.style.marginBottom="8px";
aboutmorelink2.style.border="2px solid black";
aboutmorelink2.style.backgroundColor="yellow";
aboutmorelink2.style.color="black";
aboutmorelink2.style.fontFamily="monospace";
aboutmorelink2.style.textDecorationLine="none";
aboutmorelink2.style.fontWeight="100";
aboutmorelink2.style.fontSize="20px";
aboutmorelink2.style.padding="10px 20px 20px 20px";
aboutmorelink2.style.borderRadius="10px";
aboutmorelink2.style.border="5px solid black";


//creating project 3

const liproject3=document.createElement("li");
ulprojects.append(liproject3);


const project3=document.createElement("div");
liproject3.append(project3);
project3.style.border="2px solid black";
project3.style.maxHeight="500px";
project3.style.maxWidth="340px";
project3.style.textAlign="center";
project3.style.backgroundColor="yellow";
project3.style.boxShadow="-15px 25px 15px grey"
project3.style.border="5px solid black";
project3.style.borderRadius="20px";
project3.style.marginLeft="25px";
project3.style.marginRight="15px";
project3.style.marginBottom="35px";

const projectimage3=document.createElement("img");
projectimage3.src="projectdefault.gif";
projectimage3.style.height="200px";
projectimage3.style.width="200px";
project3.append(projectimage3);
projectimage3.style.marginTop="18px";
projectimage3.style.border="2px solid black";
projectimage3.style.borderRadius="20px";
projectimage3.style.boxShadow="5px 5px 5px black";

const projecttitle3=document.createElement("h1");
project3.append(projecttitle3);
projecttitle3.innerText="Rubber ducky ";
projecttitle3.style.marginTop="18px";
projecttitle3.style.fontWeight="100";
projecttitle3.style.fontFamily="monospace";
projecttitle3.style.textShadow="1px 1px 1px grey";
projecttitle3.style.fontSize="35px"

const projectdescription3=document.createElement("p");
project3.append(projectdescription3);
projectdescription3.innerText="In this project I created a rubber ducky with rasberry pi pico which can crack pin password using bruteforce";
projectdescription3.style.marginTop="18px";
projectdescription3.style.marginLeft="5px";
projectdescription3.style.marginRight="5px";
projectdescription3.style.fontWeight="100";
projectdescription3.style.fontFamily="monospace";
projectdescription3.style.textShadow="1px 1px 1px grey";
projectdescription3.style.fontSize="25px"
projectdescription3.style.marginBottom="20px";

/*
const aboutmore3=document.createElement("button");
project3.append(aboutmore3);
aboutmore3.style.marginTop="18px";
aboutmore3.style.marginBottom="18px";
*/
const aboutmorelink3=document.createElement("a");
aboutmorelink3.href="";
aboutmorelink3.innerText="no-more-😂";
project3.append(aboutmorelink3);

aboutmorelink3.style.marginLeft="8px";
aboutmorelink3.style.marginRight="8px";
aboutmorelink3.style.marginTop="8px";
aboutmorelink3.style.marginBottom="8px";
aboutmorelink3.style.border="2px solid black";
aboutmorelink3.style.backgroundColor="yellow";
aboutmorelink3.style.color="black";
aboutmorelink3.style.fontFamily="monospace";
aboutmorelink3.style.textDecorationLine="none";
aboutmorelink3.style.fontWeight="100";
aboutmorelink3.style.fontSize="20px";
aboutmorelink3.style.padding="10px 20px 20px 20px";
aboutmorelink3.style.borderRadius="10px";
aboutmorelink3.style.border="5px solid black";

//creating project 4

const liproject4=document.createElement("li");
ulprojects.append(liproject4);


const project4=document.createElement("div");
liproject4.append(project4);
project4.style.marginTop="25px";
project4.style.border="2px solid black";
project4.style.maxHeight="800px";
project4.style.maxWidth="340px";
project4.style.textAlign="center";
//project4.style.backgroundColor="yellow";
project4.style.boxShadow="-15px 25px 15px grey"
project4.style.border="5px solid black";
project4.style.borderRadius="20px";
project4.style.marginLeft="25px";
project4.style.marginRight="15px";
project4.style.marginBottom="35px";

const projectimage4=document.createElement("img");
//projectimage4.src="thiswebsite.png";
projectimage4.style.height="200px";
projectimage4.style.width="200px";
project4.append(projectimage4);
projectimage4.style.marginTop="18px";
projectimage4.style.border="2px solid black";
projectimage4.style.borderRadius="20px";
projectimage4.style.boxShadow="5px 5px 5px black";

const projecttitle4=document.createElement("h1");
project4.append(projecttitle4);
projecttitle4.innerText="This website 😅";
projecttitle4.style.marginTop="18px";
projecttitle4.style.fontWeight="100";
projecttitle4.style.fontFamily="monospace";
projecttitle4.style.textShadow="1px 1px 1px grey";
projecttitle4.style.fontSize="35px"
const projectdescription4=document.createElement("p");
project4.append(projectdescription4);
projectdescription4.innerText="I created this website 98% using javascript i tried to implement every concept of java script i can making this website was fun and 😫 same time by the way thankyou for visiting my website ";
projectdescription4.style.marginTop="18px";
projectdescription4.style.marginLeft="5px";
projectdescription4.style.marginRight="5px";
projectdescription4.style.fontWeight="100";
projectdescription4.style.fontFamily="monospace";
projectdescription4.style.textShadow="1px 1px 1px grey";
projectdescription4.style.fontSize="25px";
projectdescription4.style.marginBottom="20px";


/*
const aboutmore4=document.createElement("button");
project4.append(aboutmore4);
aboutmore4.style.marginTop="18px";
aboutmore4.style.marginBottom="18px";
*/

const aboutmorelink4=document.createElement("a");
aboutmorelink4.href="";
aboutmorelink4.innerText="thankyou";
project4.append(aboutmorelink4);

aboutmorelink4.style.marginLeft="8px";
aboutmorelink4.style.marginRight="8px";
aboutmorelink4.style.marginTop="8px";
aboutmorelink4.style.marginBottom="8px";
aboutmorelink4.style.border="2px solid black";
aboutmorelink4.style.backgroundColor="yellow";
aboutmorelink4.style.color="black";
aboutmorelink4.style.fontFamily="monospace";
aboutmorelink4.style.textDecorationLine="none";
aboutmorelink4.style.fontWeight="100";
aboutmorelink4.style.fontSize="20px";
aboutmorelink4.style.padding="10px 20px 20px 20px";
aboutmorelink4.style.borderRadius="10px";
aboutmorelink4.style.border="5px solid black";


///////////////////////////////////////////////////////////////
/////////////////// creating contact part//////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


const contact=document.createElement("div");
document.body.append(contact);
contact.id="contact";
contact.style.minHeight=deviceheight*0.99+"px";
contact.style.minWidth=devicewidth*0.9+"px";


//creating heading of contact

const mycontactstatement=document.createElement("h6");
contact.append(mycontactstatement);
mycontactstatement.innerText="Contact";
mycontactstatement.style.textAlign="center";
mycontactstatement.style.fontFamily="monospace";
mycontactstatement.style.fontWeight="100%";
mycontactstatement.style.fontSize=devicewidth*0.2+"px";
mycontactstatement.style.textShadow="15px 15px 15px grey"

//creating list of contact platforms

const ulcontact=document.createElement("ul");
contact.append(ulcontact);

//creating list items

// list item 1


const licontact1=document.createElement("li");
ulcontact.append(licontact1);

//creating list content1

const contactdiv1=document.createElement("div");
licontact1.append(contactdiv1);
licontact1.style.marginTop="15px";
licontact1.style.marginLeft="15px";
licontact1.marginRight="15px";

//adding image which is button which is link to contact platform1

const contactimg1=document.createElement("img");
contactimg1.src="github.png";
contactimg1.style.minHeight="250px";
contactimg1.style.maxWidth="250px";
//contactimg1.style.boxShadow="4px 4px 4px grey"

const contactlink1=document.createElement("a");
contactlink1.href="https://github.com/myselfakashagarwal";
contactdiv1.append(contactlink1);
contactlink1.append(contactimg1);
contactlink1.append(contactimg1);


// list item 2


const licontact2=document.createElement("li");
ulcontact.append(licontact2);

//creating list content2

const contactdiv2=document.createElement("div");
licontact2.append(contactdiv2);
licontact2.style.marginTop="15px";
licontact2.style.marginLeft="15px";
licontact2.marginRight="15px";


//adding image which is button which is link to contact platform1

const contactimg2=document.createElement("img");
contactimg2.src="linkdin.png";
contactimg2.style.minHeight="250px";
contactimg2.style.maxWidth="250px";

const contactlink2=document.createElement("a");
contactlink2.href="https://www.linkedin.com/in/akash-agarwal-82a0b1241/";
contactdiv2.append(contactlink2);
contactlink2.append(contactimg2);
contactlink2.append(contactimg2);

// list item 3


const licontact3=document.createElement("li");
ulcontact.append(licontact3);

//creating list content3

const contactdiv3=document.createElement("div");
licontact3.append(contactdiv3);
licontact3.style.marginTop="15px";
licontact3.style.marginLeft="15px";
licontact3.marginRight="15px";



//adding image which is button which is link to contact platform1

const contactimg3=document.createElement("img");
contactimg3.src="gmail.png";
contactimg3.style.minHeight="250px";
contactimg3.style.maxWidth="250px";

const contactlink3=document.createElement("a");
contactlink3.href="mailto:myselfakashagarwal@gmail.com";

contactdiv3.append(contactlink3);
contactlink3.append(contactimg3);
contactlink3.append(contactimg3);

licontact3.style.marginBottom="15px";


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////adding hoover and 3d effects  etc/////////////////////////
//////////////////////////////////////////////////////////////














































