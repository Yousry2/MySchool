
# MySchool
This is the home for the My School Project built with Angular.
  
## Live Demo :
  
http://grelix.com:8080/schoolweb/

## Getting started :
  
1- Install angular cli from here https://github.com/angular/angular-cli  
2- Download MySchool app  
3- Using terminal, Goto app directory   
4- run npm install   
5- run ng serve command  
4- Open localhost:4200 in your browser  

## Project status :
  
1- Retrieve all schools in the system in the left nav menu    
2- Retrieve departments for every school in sub menu items    
3- Clicking on deparment menu items will hide the nav menu and fetch all quizes assigned to this department in drop down list  
4- For every quiz we have there is a form with several fields/attributes appears when selecting a quiz  
5- Enter data in the form and submit the form values will be printed in the console  

## Dynamic Fields Attribures (mock-fields.ts file) :

key: Identifer   
label: placeholder  
controlType: type   
required: true|false    
options: (used with 'dropdown' field type) array of key/value options for select component   
order: Element order inside the form   
dependant: dependant element key  
quizId: which quiz should this field appear in   

