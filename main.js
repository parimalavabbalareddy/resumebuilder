
function newpage() {
window.open('resume.html','_self')
}
function loadJSON(file,callback) {
var rawfile= new xmlhttpRequest();
rawfile.overrideMimeType("application/json");
rawfile.open("GET",file,true);
rawfile.onreadystatechange=function(){
if (rawfile.readystate===4 && rawfile.status=="200") {
  callback(rawfile.responceText);
     }
  }
rawfile.send();
}
loadJSON("resume.json", function(text) {
var data = JSON.parse(text);

basic(data.basics);

});
var main=document.getElementById('maindiv');
var left=document.getElementById('leftdiv');
var right=document.getElementById('rightdiv');


function basic(basics) {

  var c1 =document.createElement("div");
c1.classList.add("child1");
var image=document.createElement("img")  ;
image.src=basics.picture;
var head1=document.createElement("h1");
head1.textcontent=basics.name;
var head3=document.createElement("h3");
head3.textcontent=basics.label1;
lc1.appendchild(image);
lc1.appendchild(head1);
lc1.appendchild(head3);
left.appendchild(c1);


}
