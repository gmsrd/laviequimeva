"use strict"

/**
 * Script for getting images from a specific Instagram account and render it in the background
 * Compatible with IE 10+
 */

var wall = document.querySelector('.wall')
var fetchUrl = 'https://api.instagram.com/v1/users/2986498929/media/recent/?access_token=228003586.ec8da13.cb6c8cb6a0ff45b88a850621dd284791'
var list = []
var stringList = ''

/**
 * AJAX request and pictures markup building
 */
var req = new XMLHttpRequest()
req.open('GET', fetchUrl, false)
req.send(null)

if (req.status === 200) {

// Parsing JSON
    var response = JSON.parse(req.responseText)

    // Building pictures markup
    response.data.map(function (item) {
        list.push('<div class="picture" style="background-image: url(' + item.images.standard_resolution.url + ')"></div>')
    })

    // Concatenate pictures for rendering
    list.map(function (item) {
        stringList += item
    })

    // Rendering in the DOM
    wall.innerHTML = stringList


} else {
    console.log("Response status: %d (%s)", req.status, req.statusText)
}
