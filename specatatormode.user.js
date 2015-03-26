// ==UserScript==
// @name          Specatator Mode
// @namespace     http://reddit.com/u/samwilber
// @description   Never accidentally join a game again
// @include       http://tangent.jukejuice.com*
// @include       http://tagpro-*.koalabeast.com*
// @author        turtlemansam and help from bizkut's script
// @version       1.0
// @grant         GM_getValue
// @grant         GM_setValue
// ==/UserScript==

$(document).ready(function(){
    $('article div.section.smaller:eq(0)').append("<input type='checkbox' id='tglSpec'>Spectator Mode</input>");
    if (GM_getValue("specMode") === true) {
    $("#tglSpec").prop('checked', true);
    }
    $("#tglSpec").on('change', function () {
    if ($(this).is(":checked")) {
        GM_setValue("specMode", true)
    } else {
        GM_setValue("specMode", false)
    }
    })
    if (GM_getValue("specMode") === true) {
        if(document.URL.search('games/find?r=')>=0) {
        window.location.href = "/";
        }
    }
});
