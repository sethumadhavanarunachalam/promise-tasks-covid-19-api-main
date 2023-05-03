 //scirpt.js
 let div=document.createElement("div");
 div.setAttribute("class","main1");
 
 let formgroup=document.createElement("div");
 formgroup.setAttribute("class","form-group");
 
 let input=document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("class","form-control");
 input.setAttribute("id","main");
 input.setAttribute("placeholder","Enter a country Name");
 input.style.width="520px";
 
 let button=document.createElement("button");
 button.setAttribute("type","button");
 button.classList.add("btn","btn-primary");
 button.innerHTML="Search";
 button.style.marginLeft="200px";
 button.style.marginTop="20px";
 button.style.backgroundColor="white";
 button.style.color="grey";
 button.addEventListener("click",foo);
 //for active cases
 let active=document.createElement("div");
 active.setAttribute("id","active");
 //for deaths cases
 let deaths=document.createElement("div");
 deaths.setAttribute("id","deaths");
 //for recoverd cases
 let recovered=document.createElement("div");
 recovered.setAttribute("id","recovered");
 
 formgroup.append(input,button,active,deaths,recovered); 
 div.append(formgroup);
 document.body.append(div);
 
 //fetch teh data using covid api
 async function foo(){
 try {
 let countryname=document.getElementById("main").value;
 
 let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
 let res1= await res.json();
 //for access last index values
 
 let index=res1.length-1;
 
 //active
 active.innerHTML=`Total Active cases:${res1[index].Active}`;
 //deaths
 deaths.innerHTML=`Total Death cases:${res1[index].Deaths}`;
 //recovered
 recovered.innerHTML=`Total Recovered cases:${res1[index].Recovered}`;
 } catch (error) {
   console.log(error);
 }
 
 }

