 //www.javascripttutorial.net/javascript-dom/javascript-radio-button/ 

 /*function doForm () {
  // (B1) FORM DATA OBJECT
  var data = new FormData();

  // (B2) APPEND FIELDS
  var all = document.querySelectorAll("#user_form input, #user_form textarea, #user_form select");
  for (let field of all) {
    // EXCLUDE SUBMIT + BUTTONS
    if (field.type != "submit" && field.type != "button") { 
      // CHECKBOX + RADIO - MUST BE CHECKED
      if (field.type=="radio" || field.type=="checkbox") {
        if (field.checked) { data.append(field.name, field.value); }
      }
      // OTHER FIELDS
      else { data.append(field.name, field.value); }
    }
  }

  // (B3) WHATEVER YOU WANT TO DO NEXT
  // DO CHECKS, SEND TO SERVER, ETC...
  for (let [k, v] of data.entries()) { console.log(k, v); }
  return false;
 }*/
//document.forms[0];
//alert("filer ready!!");
 /*const btn = document.querySelector("#btn");

 function radioGet(){
 const rbs = document.querySelectorAll('input[name = "rad"]');
 let selectedValue;
 for (const rb of rbs) {
  if (rb.checked) {
    selectedValue = rb.value;
      break;
   }
  }
  alert(selectedValue);
 }

 btn.onclick = radioGet();*/