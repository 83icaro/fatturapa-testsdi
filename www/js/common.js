// configuration for jshint
/* jshint browser: true, devel: true */

"use strict";

// GET url and on success if element id is supplied, show response text inside element
function get(url, element) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if (request.status == 200) {
            if (element) {
                document.getElementById(element).innerHTML = request.responseText;
            }
        } else {
            console.error(request.responseText);
        }
    };
    console.log('GETting ' + url);
    request.send();
}

// POST parameter=element.value to url
function post(url, parameter, element) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onload = function() {
        if ((request.status != 200) && (request.status != 201)) {
            console.error(request.responseText);
        } esle {
            EventBus.$emit('refreshTables'):
        }
    };
    if (parameter && element) {
        var value = document.getElementById(element).value;
        var data = parameter + '=' + value; // TODO urlescape !
        console.log('POSTing ' + data + ' to ' + url);
        request.send(data);
    } else {
        request.send();
    }
}