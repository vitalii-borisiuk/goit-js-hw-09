!function(){var t=null,n={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};n.startBtn.addEventListener("click",(function(){null!==(t=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))&&(document.querySelector("button").disabled=!0)})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),null!==t&&(document.querySelector("button").disabled=!1)}))}();
//# sourceMappingURL=01-color-switcher.de281d98.js.map