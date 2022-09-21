
let timerId;
    
function startInterval(){
    timerId = setInterval(growCircle,parseInt($("#interval").val()));
}    

function stopInterval(){
    clearInterval(timerId);
}


function releaseCircle(){
    $("#circle").hide();
}



function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createCircle(){
    for(let i=0;i < parseInt($("#count").val());i++){
        $("body").append($("<div>",{
            "id": "circle",
            "css":  {
                    "width":parseInt($("#width").val()) , 
                    "height":parseInt($("#width").val()), 
                    "background-color":getRandomColor(),
                    "margin-left":getRandomInt(400),
                    "margin-top":getRandomInt(400)
                    },
                    "click": function(){
                        this.remove();
                    },

                    }));
    }
}

$("button").on("click",clickclick);

function clickclick(){
    createCircle();
    startInterval();
}



function growCircle(){
   let size = parseInt($("#circle").height())+parseInt($("#growth").val());
   $("#circle").height(size);
   $("#circle").width(size);
} 
console.log(parseInt($("#count").val()))