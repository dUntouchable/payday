//original source :  http://timelessname.com/sandbox/matrix.html
//set the canvas to take the 1/3rd screen
canvas.height = window.screen.height/3;
canvas.width = window.screen.width;

//one entry in the array per column of text
//each value represent the current y position of the column. (in canvas 0 is at the top and positive y values go downward)
var columns = []
for (i = 0; i < 256; columns[i++] = 1);

//executed once per frame
function step() {
    //Slightly darkens the entire canvas by drawing a mostly transparent black rectangle over the entire canvas
    //this explains both the initial flash from white to black (by default the canvas is white and progressively becomes black) as well as the fading of characters.
    canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

    //Orange
    canvas.getContext('2d').fillStyle = '#f4511e';
    //for each column
    columns.map(function (value, index) {
        //fromCharCode converts unicode code points ( http://en.wikipedia.org/wiki/Code_point ) to a string
        //the code points are in the range 30000-30032 (0x7530-0x7550) (田-畐)
        //which fall in the CJK Unified Ideographs block ( http://en.wikipedia.org/wiki/CJK_Unified_Ideographs )
        var character = String.fromCharCode(3e4 +
                                            Math.random() * 33);
        //draw the character
        canvas.getContext('2d').fillText(character, //text
                                         index * 10, //x
                                         value //y
                                        );

        //move down the character
        //f the character is lower than 758 then there is a random chance of it being reset
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
    })
}

//1000/33 = ~30 times a second
setInterval(step, 33)
