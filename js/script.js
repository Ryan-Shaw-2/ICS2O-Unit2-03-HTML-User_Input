// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets the users street number and name and shows the users address

  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById('address').innerHTML = 'Your address is: ' + streetNumber + ' ' + streetName
}
