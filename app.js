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
