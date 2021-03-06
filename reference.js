//Reference JS is a collection of useful Mapbox Documentation
//Not to be referenced in the index file
//More like a glossary/unbloat app.js


// IMPORTANT MAPBOX STYLE INFO
// mapboxgl.accessToken = 'pk.eyJ1IjoiZmxhbmFnYW5mcmFuazciLCJhIjoiY2pncXpmN2N3MG90MjMzbWxkZTBicjB3NCJ9.ycGp1T4CKi8BVcd31RxzZA';
// var map = new mapboxgl.Map({
//     container: 'map',
//         // Use for JS Plot
//         // center:[-77.03238901390978, 38.913188059745586],
//         // Use for Studio Plot
//         center: [-74.0632, 40.7332],
//         zoom: 12, 
//         style: 'mapbox://styles/flanaganfrank7/cjgqvimcr000d2rnu4cjal1v7'
//     });


// INFO WINDOW FROM HOVER
    // map.on('load', function() {

    //     // Add a layer showing the places.
    //     map.addLayer({
    //         "id": "places",
    //         "type": "symbol",
    //         "source": {
    //             "type": "geojson",
    //             "data": {
    //                 "type": "FeatureCollection",
    //                 "features": [{
    //                     "type": "Feature",
    //                     "properties": {
    //                         "description": "<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
    //                         "icon": "theatre"
    //                     },
    //                     "geometry": {
    //                         "type": "Point",
    //                         "coordinates": [-74.0662, 40.7353]
    //                     }
    //                 }, {
    //                     "type": "Feature",
    //                     "properties": {
    //                         "description": "<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
    //                         "icon": "theatre"
    //                     },
    //                     "geometry": {
    //                         "type": "Point",
    //                         "coordinates": [-77.003168, 38.894651]
    //                     }
    //                 }, {
    //                     "type": "Feature",
    //                     "properties": {
    //                         "description": "<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>",
    //                         "icon": "bar"
    //                     },
    //                     "geometry": {
    //                         "type": "Point",
    //                         "coordinates": [-77.090372, 38.881189]
    //                     }
    //                 }
    //                 }]
    //             }
    //         },
    //         "layout": {
    //             "icon-image": "{icon}-15",
    //             "icon-allow-overlap": true
    //         }
    //     });

    //     // Create a popup, but don't add it to the map yet.
    //     var popup = new mapboxgl.Popup({
    //         closeButton: false,
    //         closeOnClick: false
    //     });

    //     map.on('mouseenter', 'places', function(e) {
    //         // Change the cursor style as a UI indicator.
    //         map.getCanvas().style.cursor = 'pointer';

    //         var coordinates = e.features[0].geometry.coordinates.slice();
    //         var description = e.features[0].properties.description;

    //         // Ensure that if the map is zoomed out such that multiple
    //         // copies of the feature are visible, the popup appears
    //         // over the copy being pointed to.
    //         while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //             coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    //         }

    //         // Populate the popup and set its coordinates
    //         // based on the feature found.
    //         popup.setLngLat(coordinates)
    //             .setHTML(description)
    //             .addTo(map);
    //     });

    //     map.on('mouseleave', 'places', function() {
    //         map.getCanvas().style.cursor = '';
    //         popup.remove();
    //     });
    // });


    //PLOT FROM JS
    //This is roughly how you'd plot points from the JS instead of Mapbox Studio 
    // map.on('load', function () {

    // map.addLayer({
    //     "id": "points",
    //     "type": "symbol",
    //     "source": {
    //         "type": "geojson",
    //         "data": {
    //             "type": "FeatureCollection",
    //             "features": [{
    //                 "type": "Feature",
    //                 "geometry": {
    //                     "type": "Point",
    //                     "coordinates": [-77.03238901390978, 38.913188059745586]
    //                 },
    //                 "properties": {
    //                     "title": "Mapbox DC",
    //                     "icon": "monument"
    //                 }
    //             }, {
    //                 "type": "Feature",
    //                 "geometry": {
    //                     "type": "Point",
    //                     "coordinates": [-122.414, 37.776]
    //                 },
    //                 "properties": {
    //                     "title": "Mapbox SF",
    //                     "icon": "harbor"
    //                 }
    //             }]
    //         }
    //     },
    //     "layout": {
    //         "icon-image": "{icon}-15",
    //         "text-field": "{title}",
    //         "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //         "text-offset": [0, 0.6],
    //         "text-anchor": "top"
    //     }
    //     });
    // });