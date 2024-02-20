let x = false;
function ColerChessTable()
{
    for(let i = 1; i <= 8; i++)
    {
        for(let j = 1; j <= 8; j++)
        {
            let id = "a"+i+j;
            if((i%2 == 1 && j%2 == 0) || (i%2 == 0 && j%2 == 1))
            {
                document.getElementById(id).style.backgroundColor = "rgb(231, 150, 58)";
            }
            else
            {
                document.getElementById(id).style.backgroundColor = "white";
            }
            if(document.getElementById(id).dataset.type == "Available" && document.getElementById(id).dataset.color == "None")
            {
                document.getElementById(id).dataset.type = "None";
            }
            else if(document.getElementById(id).dataset.type == "Available" && document.getElementById(id).dataset.color != "None")
            {
                document.getElementById(id).dataset.type = document.getElementById(id).children[0].dataset.type;
            }
        }
    }
}
let select = false, order = true;
let PreviousId;
function Step(id)
{
    let type = document.getElementById(id).dataset.type;
    let color = document.getElementById(id).dataset.color;
    if(order == true && color == "Black" && type != "Available")
    {
        select = false;
        PreviousId = "";
        ColerChessTable();
        console.log("select");
        console.log(select);
        console.log("order");
        console.log(order);
        return;
    }
    else if(order == false && color == "White" && type != "Available")
    {
        select = false;
        PreviousId = "";
        ColerChessTable();
        console.log("select");
        console.log(select);
        console.log("order");
        console.log(order);
        return;
    }
    if(type == "None"){
        if(select == true)
        {
            ColerChessTable();
            select = false;
            PreviousId = "";
        }
    }else if(type == "Available"){
        
        select = false;
        document.getElementById(id).innerHTML = document.getElementById(PreviousId).innerHTML;
        if(document.getElementById(id).dataset.type == "King")
        {
            if(document.getElementById(id).dataset.color == "White")
            {
            }
            else
            {
            }
        }
        document.getElementById(id).dataset.type = document.getElementById(PreviousId).dataset.type;
        document.getElementById(id).dataset.color = document.getElementById(PreviousId).dataset.color;        
        document.getElementById(PreviousId).innerHTML = "";
        document.getElementById(PreviousId).dataset.type = "None";
        document.getElementById(PreviousId).dataset.color = "None";
        ColerChessTable();
        PreviousId = "";
        order = !order;
    }
    else{
        if(id == PreviousId)
        {
            ColerChessTable();
            select = false;
            PreviousId = "";
        }
        else
        {
            console.log(PreviousId);
            console.log("123adf");
            ColerChessTable();
            if(type == "Pawn")
            {
                PawnStep(id);
            }
            else if(type == "Rook")
            {
                RookStep(id);
            }
            else if(type == "Knight")
            {
                KnightStep(id);
            }
            else if(type == "Bishop")
            {
                BishopStep(id);
            }
            else if(type == "Queen")
            {
                QueenStep(id);
            }
            select = true;
            PreviousId = id;
        }
    }
    console.log("select");
    console.log(select);
    console.log("order");
    console.log(order);
    
}
function PawnStep(id)
{
    let color = document.getElementById(id).dataset.color;
    let siteX = parseInt(id[1]), siteY = parseInt(id[2]);
    if(color == "White")
    {
        if(siteX != 2)
        {
            siteX++;
            if(siteX > 8) return;
            if(document.getElementById("a" + siteX + siteY).dataset.type == "None" )
            {
                document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                document.getElementById("a" + siteX + siteY).style.backgroundColor = "blue";
            }
            else
            {
                if(document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                }
            }
            if(siteY + 1 <= 8){
                siteY++;
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                }
            }
            if(siteY - 1 >= 1)
            {
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                }
            }
        }
        else
        {
            for(let i = 0; i <= 1; i++)
            {
                siteX++;
                if(document.getElementById("a" + siteX + siteY).dataset.type == "None")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "blue";
                }
                else
                {
                    if(document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                    {
                        document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                        document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                        break;
                    }
                }
            }
        }
    }
    else
    {
        if(siteX != 7)
        {
            siteX--;
            if(siteX < 1) return;
            if(document.getElementById("a" + siteX + siteY).dataset.type == "None" )
            {
                document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                document.getElementById("a" + siteX + siteY).style.backgroundColor = "blue";
            }
            else
            {
                if(document.getElementById("a" + siteX + siteY).dataset.color == "White")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                }
            }
            if(siteY + 1 <= 8){
                siteY++;
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                }
            }
            if(siteY - 1 >= 1)
            {
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                }
            }
        }
        else
        {
            for(let i = 0; i <= 1; i++)
            {
                siteX--;
                if(document.getElementById("a" + siteX + siteY).dataset.type == "None")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = "blue";
                }
                else
                {
                    if(document.getElementById("a" + siteX + siteY).dataset.color == "White")
                    {
                        document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                        document.getElementById("a" + siteX + siteY).style.backgroundColor = "Red";
                        break;
                    }
                }
            }
        }
    }
}
function SubRookStep(id, color)
{
    if(color == "White")
    {
        if(document.getElementById(id).dataset.type == "None")
        {
            document.getElementById(id).dataset.type = "Available";
            document.getElementById(id).style.backgroundColor = "blue";
        }
        else
        {
            if(document.getElementById(id).dataset.color == "Black")
            {
                document.getElementById(id).dataset.type = "Available";
                document.getElementById(id).style.backgroundColor = "red";
                return 1;
            }
            else
            {
                return 1;
            }
        }
    }
    else
    {
        if(document.getElementById(id).dataset.type == "None")
        {
            document.getElementById(id).dataset.type = "Available";
            document.getElementById(id).style.backgroundColor = "blue";
        }
        else
        {
            if(document.getElementById(id).dataset.color == "White")
            {
                document.getElementById(id).dataset.type = "Available";
                document.getElementById(id).style.backgroundColor = "red";
                return 1;
            }
            else
            {
                return 1;
            }
        }
    }
    return 0;
}
function RookStep(id)
{
    let color = document.getElementById(id).dataset.color;
    let siteX = parseInt(id[1]), siteY = parseInt(id[2]);
    while(1)
    {
        siteX++;
        if(siteX <= 8)
        {
            if(SubRookStep("a" + siteX + siteY, color) == 1) break;
        }
        else break;
    }
    siteX = parseInt(id[1]), siteY = parseInt(id[2]);
    while(1)
    {
        siteX--;
        if(siteX >= 1)
        {
            if(SubRookStep("a" + siteX + siteY, color) == 1) break;
        }
        else break;
    }
    siteX = parseInt(id[1]), siteY = parseInt(id[2]);
    while(1)
    {
        siteY++;
        if(siteY <= 8)
        {
            if(SubRookStep("a" + siteX + siteY, color) == 1) break;
        }
        else break;
    }
    siteX = parseInt(id[1]), siteY = parseInt(id[2]);
    while(1)
    {
        siteY--;
        if(siteY >= 1)
        {
            if(SubRookStep("a" + siteX + siteY, color) == 1) break;
        }
        else break;
    }
}
function SubKnightStep(siteX, siteY, id)
{
    if(document.getElementById("a" + siteX + siteY).dataset.type == "None")
    {
        document.getElementById("a" + siteX + siteY).style.backgroundColor = "blue";
        document.getElementById("a" + siteX + siteY).dataset.type = "Available";
    }
    else if(document.getElementById("a" + siteX + siteY).dataset.type != "None")
    {
        if(document.getElementById("a" + siteX + siteY).dataset.color != document.getElementById(id).dataset.color)
        {
            document.getElementById("a" + siteX + siteY).style.backgroundColor = "red";
            document.getElementById("a" + siteX + siteY).dataset.type = "Available";
        }
    }
}
function KnightStep(id)
{
    let siteX = parseInt(id[1]) + 2, siteY = parseInt(id[2]);
    if(siteX <= 8)
    {
        siteY++;
        if(siteY <= 8)
        {
            SubKnightStep(siteX, siteY, id);
        }
        siteY-=2;
        if(siteY >= 1)
        {
            SubKnightStep(siteX, siteY, id);
        }
    }
    siteX = parseInt(id[1]) - 2;
    siteY = parseInt(id[2]);
    if(siteX >= 1)
    {
        siteY++;
        if(siteY <= 8)
        {
            SubKnightStep(siteX, siteY, id);
        }
        siteY -= 2;
        if(siteY >= 1)
        {
            SubKnightStep(siteX, siteY, id);
        }
    }
    siteX = parseInt(id[1]);
    siteY = parseInt(id[2]) + 2;
    if(siteY <= 8)
    {
        siteX++;
        if(siteX <= 8)
        {
            SubKnightStep(siteX, siteY, id);
        }
        siteX-=2;
        if(siteX >= 1)
        {
            SubKnightStep(siteX, siteY, id);
        }
    }
    siteX = parseInt(id[1]);
    siteY = parseInt(id[2]) - 2;
    if(siteY >= 1)
    {
        siteX++;
        if(siteX <= 8)
        {
            SubKnightStep(siteX, siteY, id);
        }
        siteX-=2;
        if(siteX >= 1)
        {
            SubKnightStep(siteX, siteY, id);
        }
    }
}
function BishopStep(id)
{
    let siteX = parseInt(id[1]), siteY = parseInt(id[2])
    while(1)
    {
        if(siteX == 8 || siteY == 8) break;
        siteX++; siteY++;
        if (SubRookStep("a" + siteX + siteY, document.getElementById(id).dataset.color) == 1) break;
    }
    siteX = siteX = parseInt(id[1]); siteY = parseInt(id[2]);
    while(1)
    {
        if(siteX == 8 || siteY == 1) break;
        siteX++; siteY--;
        if (SubRookStep("a" + siteX + siteY, document.getElementById(id).dataset.color) == 1) break;
    }
    siteX = siteX = parseInt(id[1]); siteY = parseInt(id[2]);
    while(1)
    {
        if(siteX == 1 || siteY == 8) break;
        siteX--; siteY++;
        if (SubRookStep("a" + siteX + siteY, document.getElementById(id).dataset.color) == 1) break;
    }
    siteX = siteX = parseInt(id[1]); siteY = parseInt(id[2]);
    while(1)
    {
        if(siteX == 1 || siteY == 1) break;
        siteX--; siteY--;
        if (SubRookStep("a" + siteX + siteY, document.getElementById(id).dataset.color) == 1) break;
    }
}
function QueenStep(id)
{
    BishopStep(id);
    RookStep(id);
}
document.addEventListener("DOMContentLoaded", function() {
    ColerChessTable();
});

