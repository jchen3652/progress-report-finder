var start = 8400; // Recommended: 8400
var end = 9900; // Recommended: 9900
var semester = 2;

function getInfo(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      if (xmlHttp.responseText.includes('Unable To Acquire Required Data For Report') || xmlHttp.responseText.includes('No report generated')) {
        // do nothing
      } else {
        console.log(theUrl);
      }
    }
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

console.log('Fetching progress reports... please wait... ')
for (var i = start; i <= end; i++) {
  getInfo('https://mistar.oakland.k12.mi.us/novi/StudentPortal/Home/PrintProgressReport/2017' + i + '%5ESH' + semester);
}
