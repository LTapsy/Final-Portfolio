var limit = 0;

$(document).keydown(function(e) { 
    if (e.which == '39') { //right key
        direction = "right";
        animate="walk";
        ItemsMoveRight() 
        moveRight();
        faceRight();
    }
    else if (e.which == '38') { //up Key
        direction = "up"
        animate="jump";
        if(jump=="false"){
            jump = "true"
            setTimeout(jumpUp, 700)
            idle=0;
        }
    }  
    else if (e.which == '37') { //left Key
        direction = "left";
        animate="walk";
        moveLeft();
        faceLeft();
    } 
    else if (e.which == '32') { //Space key
        animate="jump";
        if(jump=="false"){
            jump = "true"
            setTimeout(jumpUp, 700)
            idle=0;
        }
    }
    else if (e.which == '40') { //down arrow
        animate="sit";
    }
    else{
        animate="idle";
        idle=0;
    }
}); 


$(document).keyup(function(e) { 
    if (e.which == '39') { //right key
        animate="idle";
        movementStop();
    }
    else if (e.which == '37') { //left Key
        animate="idle";
        movementStop();
    }
    else if (e.which == '40') { //down arrow
        animate="idle";
    }
}); 

function jumpDown() {
    $(".characterContainer").finish().animate({ 
        top: "0",
    }); 
    
    shadow.className = "shadow";
    setTimeout(jumpingBoolean, 400)
};

function jumpDownLeft() {
    $(".characterContainer").finish().animate({ 
        top: "0",
    }); 
    if(limit>=-350){
            
    }
    limit += 100;
    shadow.className = "shadow";
    setTimeout(jumpingBoolean, 400)
};

function jumpDownRight() {
    $(".characterContainer").finish().animate({ 
        top: "0"
    });
    movementStop();
    limit -= 100;
    shadow.className = "shadow";
    setTimeout(jumpingBoolean, 400)
};

function jumpingBoolean(){
    jump="false";
    animate="idle";
}

function jumpUp(){
    if(direction == "right"){
        $(".characterContainer").finish().animate({ 
            top: "-200"
        }); 
        moveRight();
        limit -= 250;
        shadow.className = "shadowSmall";
        setTimeout(jumpDownRight, 400)
    }
    else{
        $(".characterContainer").finish().animate({ 
            top: "-200"
        });
        shadow.className = "shadowSmall";
        setTimeout(jumpDown, 400)
    }
}


function moveLeft(){

}
function moveRight(){
    frontEndBoard.style = "animation-play-state: running;";
    ground.style = "animation-play-state: running;";
    frontPlants.style = "animation-play-state: running;";
    frontTrees.style = "animation-play-state: running;";
    backPlants.style = "animation-play-state: running;";
    backTrees.style = "animation-play-state: running;";
}

function movementStop(){
    frontEndBoard.style = "animation-play-state: paused;";
    ground.style = "animation-play-state: paused;";
    frontPlants.style = "animation-play-state: paused;";
    frontTrees.style = "animation-play-state: paused;";
    backPlants.style = "animation-play-state: paused;";
    backTrees.style = "animation-play-state: paused;";
}


function ItemsMoveRight(){
    // $(".frontEndBoard").finish().animate({ 
    //     left: '-=15'
    // });
    // fron.style = "animation-play-state: running;";
}