!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";document.addEventListener("DOMContentLoaded",function(){function a(){document.getElementById("results").innerHTML="<img src='img/ajax-loader.gif'>";var a=new XMLHttpRequest,b=document.getElementById("search").value;a.open("GET","http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=afvalkalender&postcode="+b,!0),a.send(),a.onreadystatechange=function(){if(""===b)return void(document.getElementById("results").innerHTML="");4===this.readyState&&200===this.status&&('{"verwerk":}'===this.responseText?document.getElementById("results").innerHTML="Geen gegevens":document.getElementById("results").innerHTML=JSON.parse(this.responseText).verwerk)}}document.getElementById("search").addEventListener("keyup",a);var b=new XMLHttpRequest;b.open("GET","http://www.dennisvanriet.nl/gemeentebalkendam/index.php?data=openingstijden",!0),b.send(),b.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var a=JSON.parse(this.responseText);Object.keys(a.openingstijden).forEach(function(b){document.getElementById("openingstijden").innerHTML+="<p>"+b+" : "+a.openingstijden[b]+"</p>"})}}})},{}]},{},[1]);