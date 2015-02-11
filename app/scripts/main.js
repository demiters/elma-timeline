'use strict';

$(document).ready(function() {
  createStoryJS({
    type:       'timeline',
    width:      '100%',
    height:     '600',
    // Path to JSON or link to Google Spreadsheet
    source:     'https://docs.google.com/spreadsheet/pub?key=0AldnkYMPn1tydFVzX3lCUjR2eGtqMjZVZlMwT3pYZHc&output=html', 
    embed_id:   'elma-timeline'
  });
});