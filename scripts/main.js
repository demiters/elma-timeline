'use strict';

$(document).ready(function() {
  createStoryJS({
    type: 'timeline',
    width: '100%',
    height: '100%',
    // Path to JSON or link to Google Spreadsheet
    source: 'https://docs.google.com/spreadsheet/pub?key=0AldnkYMPn1tydFVzX3lCUjR2eGtqMjZVZlMwT3pYZHc&output=html',
    embed_id: 'elma-timeline',
    // Reverse order of display
    start_at_end: false,
    start_at_slide: '0',
    start_zoom_adjust: '-3',
    // Allow bookmarking slides using the hashtag
    hash_bookmark: true,
    font: 'SansitaOne-Kameron',
    debug: true
    //lang: 'en',
    //maptype: 'watercolor',
    //gmap_key: '', // For Google Maps API if using
    // Optional CSS
    //css: 'path_to_css/timeline.css',
    // Optional JS
    //js: 'path_to_js/timeline-min.js'
  });
});