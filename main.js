noseX= 0;
noseY=0;
function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes);
}

function draw()
{
      image(video,0,0,300,300)
}
function take_snapshot()
{
    save("filter.png")
}

function modelloaded()
{
    console.log("posenet is Initialized");
}

function gotposes(results)
{
         if(results.length > 0)
         {
            console.log(results);
        noseX = result[0].pose.nose.x-15;
        noseY = result[0].pose.nose.y-15;
        console.log("x cordinate = "+ noseX)
        console.log("y cordinate = "+ noseY)
         }
}
