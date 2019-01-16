var images = ["images/250X110571325734.jpg","images/250X110668568400.jpg","images/paz_250x110103131473.jpg"];
var titles = ["yellow click&amp;pick","טיפז","שטחי מסחר פז סנטר"];
var index=0;

function imageFliper() {
    document.getElementById("flipTitle").innerHTML=titles[index];
    document.getElementById("flipImage").src=images[index];
    index++;
    if (index>=3) {
        index=0;
    }
}

function onload() {
    setInterval(imageFliper,5000);
}