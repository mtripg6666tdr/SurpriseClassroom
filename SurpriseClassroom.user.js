// ==UserScript==
// @name         Surprise classroom
// @namespace    https://scrpg.tyanoyu.net/
// @version      0.3
// @description  Let's surprise someone who uses Google Classroom!
// @author       mtripg6666tdr
// @match        https://classroom.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=classroom.google.com
// @grant        none
// @require      https://raw.githubusercontent.com/mtripg6666tdr/visitor-survey-confetti/master/lib/visitor-survey-confetti.js
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", ()=>{
        const canvas = document.createElement('canvas');
        canvas.width = "100%";
        canvas.height = "100%";
        canvas.style.position = "fixed";
        canvas.style.zIndex = 900;
        canvas.style.top = canvas.style.right = "0px";
        canvas.style.pointerEvents = "none";
        document.getElementsByTagName("body")[0].appendChild(canvas);
        const confetti = new Confetti(canvas);
        console.log(confetti);
        confetti.InitializeConfetti();
        document.addEventListener("click", ()=>confetti.DeactivateConfetti());
    });
    // Your code here...
})();