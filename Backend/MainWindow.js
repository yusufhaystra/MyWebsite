

"use strict";

window.onload =Window_Loading;
//window.addEventListener("load", Window_Loading);

// Runs when the main window is loaded (not imported my modules yet)
function Window_Loading(){
    // Runs when the main window is loaded.
    // Importing my modules:
    console.log("a");
    require(['Frontend/UserControls/MotorCard.js'], Window_Loaded); // Tries to import the MotorCard.js module. When finishes importing, calls Window_Loaded function 
}

// Runs when the main window is loaded (imported my modules successfully)
function Window_Loaded(){

    let wpMain = document.getElementById("WP_Main");


    wpMain.appendChild(new MotorCard("Boxer Motor").MotorCardDiv);
    wpMain.appendChild(new MotorCard("V Motor").MotorCardDiv);
    wpMain.appendChild(new MotorCard("I Motor").MotorCardDiv);

    wpMain.appendChild(new MotorCard("W Motor").MotorCardDiv);
    wpMain.appendChild(new MotorCard("Opposite Motor").MotorCardDiv);

    // wpMain.appendChild(new MotorCard("B Motor").MotorCardDiv);
    // wpMain.appendChild(new MotorCard("C Motor").MotorCardDiv);
    //console.log(new MotorCard("Boxer Motor"));
   

}