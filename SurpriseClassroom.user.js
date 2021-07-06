// ==UserScript==
// @name         Surprise classroom
// @namespace    https://scrpg.tyanoyu.net/
// @version      0.5
// @description  Let's surprise someone who uses Google Classroom!
// @author       mtripg6666tdr
// @match        https://classroom.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=classroom.google.com
// @grant        none
// @require      https://raw.githubusercontent.com/mtripg6666tdr/visitor-survey-confetti/master/lib/visitor-survey-confetti.js?1625320668085
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", ()=>{
        // Create Canvas
        const canvas = document.createElement('canvas');
        canvas.width = "100%";
        canvas.height = "100%";
        canvas.style.position = "fixed";
        canvas.style.zIndex = 900;
        canvas.style.top = canvas.style.right = "0px";
        canvas.style.pointerEvents = "none";
        const body = document.getElementsByTagName("body")[0]
        body.appendChild(canvas);
        // Initialize confetti
        const confetti = new Confetti(canvas);
        console.log(confetti);
        confetti.InitializeConfetti();
        // Controller
        if(sessionStorage.getItem("controllerHide") === "1"){
            return;
        }
        const controllerContainer = document.createElement("div");
        controllerContainer.style.position = "fixed";
        controllerContainer.style.zIndex = 999;
        controllerContainer.style.bottom = "0px";
        controllerContainer.style.left = "0px";
        const stopButton = document.createElement("button");
        stopButton.textContent = "Stop";
        stopButton.style.backgroundColor = "rgba(0,0,0,0)";
        stopButton.style.display = "inline-block";
        stopButton.style.border = "none";
        stopButton.addEventListener("click", ()=>{
            if(confetti.confettiActive){
                confetti.DeactivateConfetti();
                stopButton.textContent = "Restart";
            }else{
                confetti.RestartConfetti();
                stopButton.textContent = "Stop";
            }
        });
        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.backgroundColor = "rgba(0,0,0,0)";
        closeButton.style.display = "inline-block";
        closeButton.style.border = "none";
        closeButton.addEventListener("click", ()=>{
            sessionStorage.setItem("controllerHide", "1");
            controllerContainer.style.display = "none";
        });
        controllerContainer.appendChild(stopButton);
        controllerContainer.appendChild(closeButton);
        body.appendChild(controllerContainer);
        // Resize Confetti
        window.addEventListener("resize", ()=>{
            confetti.ResizeConfetti();
        });
    });
})();