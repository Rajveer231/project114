nose_x= 0;
nose_y= 0;

function preload()
{
    clown_nose=loadImage('https://postimg.cc/zyg0Rsbj');
}

function setup()
{
    canvas = createCanvas(640,480);
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('Model is loaded');
}
function take_snapshot()
{
    save('myfilter.png');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        nose_x = results[0].pose.nose.x-15;
        nose_y = results[0].pose.nose.y-15;
    }
}