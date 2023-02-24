const present_page = document.getElementById("curr-page")
const API_URL = "https://api.github.com/repositories/1296269/issues"
let pagenumber = 1;
let pagesize = 5;

function Githubissues (pagenumber){

fetch(API_URL + `?page=${pagenumber}&per_page=${pagesize}` )
.then((responce)=>responce.json())
.then((issues)=>{
    const issue_store  = document.getElementById("Container")
    issue_store.innerHTML = ''
    issues.forEach((issue)=>{
        present_page.innerHTML = `current-page : ${pagenumber}`;
        const newelement = document.createElement("div")
        newelement.className ="issue"
        newelement.innerHTML = `
           <h3>${issue.title}</h3>
           <p>${issue.body}</p>
        `
        issue_store.appendChild(newelement);
    });

});
}
Githubissues(pagenumber);

const nextpage = document.getElementById("next-page");
const prevpage = document.getElementById("prev-page");

prevpage.addEventListener("click",()=>{
    if(pagenumber>1){
        pagenumber--;
    }
    Githubissues(pagenumber)
})

nextpage.addEventListener("click",()=>{
        pagenumber++
        Githubissues(pagenumber)
})