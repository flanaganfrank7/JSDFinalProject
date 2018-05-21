 function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menu").style.visibility='hidden';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menu").style.visibility='visible';
}


let userData = {
"user1": [
    {
    "id": 1,
    "venueName":"Subway",
    "cat":"QSR",
    "la": 40.76727216,
    "lo": -73.99392888,
    "timestamp":"monday"
    },
    {
    "id": 2,
    "venueName":"TJ Maxx",
    "cat":"Retail",
    "la": 40.745577216,
    "lo": -73.98392888,
    "timestamp":"wednesday"
    }
    ]
}

function test(){
    console.log(userData.user1[1].id)
}
test();

// SHOW JOE HOW TO PLOT FROM JS
    map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-73.98392888, 40.745577216]
                    },
                    "properties": {
                        "title": "Mapbox DC",
                        "icon": "monument"
                    }
                }, {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.414, 37.776]
                    },
                    "properties": {
                        "title": "Mapbox SF",
                        "icon": "harbor"
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
        });
    });


/*
// Thinking about importing data


// FETCH THE DATA
function makeCall(){
    fetch(VariableForGoogleSheetLink)
        // If this doesnt work, may need to JSON.parse()
        .then(res => res.json())
        .then(data => {
            plot(data)
        })
}

// PLOT THE POINTS
function plot(data){
// Path to Data
    pathToData.forEach( d => {
        // Mapbox Syntax for Plotting Points/Creating Marker Should Go Here
        position : {lat: d.la, lon: d.lo},
        map: map,
        title: d.venueName
        // Will need to add if/else to style point
        // If d.cat = QSR then style = teal, else if d.cat = Retail then style = pink, etc. etc.
    })
}

// ADD A HOVER INFO BOX
// Going to want to reveal info about each point on the map on hover
*/
