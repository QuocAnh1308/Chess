let x = false;

let pawnElements = document.getElementsByClassName("pawn");
for (let i = 0; i < pawnElements.length; i++) {
    pawnElements[i].onclick = function() {
        
    };
}



function Step(id)
{
    let x = parseInt(id[1]);
    let y = id[2];
    document.getElementById("a"+(x+2)+y).style.backgroundColor = "rgb(148, 148, 143)";
    document.getElementById("a"+(x+1)+y).style.backgroundColor = "rgb(148, 148, 143)";
}

function ColerChessTable()
{
    for(let i = 1; i <= 8; i++)
    {
        for(let j = 1; j <= 8; j++)
        {
            if((i%2 == 1 && j%2 == 0) || (i%2 == 0 && j%2 == 1))
            {
                let id = "a"+i+j;
                document.getElementById(id).style.backgroundColor = "rgb(229, 165, 69)";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    ColerChessTable();
    Step("a23");
});