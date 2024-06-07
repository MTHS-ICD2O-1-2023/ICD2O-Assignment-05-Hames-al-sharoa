// Copyright (c) 2024 hames al sharoa All rights reserved
//
// Created by:hames al sharoa
// Created on: may 2024 
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-5/sw.js", {
    scope: "/ICS2O-Assignment-5/",
  })
}

/**
 * This function reverses user input.
 */
function myButtonClicked() {
  let text = document.getElementById("userInput").value
  let reversedText = ""
  for (let counter = text.length - 1; counter >= 0; counter--) {
    // text.length - 1 gets the last character in text
    reversedText += text[counter] // refers to the character at the end of text and adds it into reversedText
  }
  document.getElementById("reverse").innerHTML =
    reversedText + "<br><br>Cool, isn't it?"
}