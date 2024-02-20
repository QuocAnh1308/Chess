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
        document.getElementById(id).dataset.type = document.getElementById(PreviousId).dataset.type;
        document.getElementById(id).dataset.color = document.getElementById(PreviousId).dataset.color;
        document.getElementById(id).innerHTML = document.getElementById(PreviousId).innerHTML;
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
            ColerChessTable();
            if(type == "Pawn")
            {
                PawnStep(id);
            }
            else if(type == "Rook")
            {
                RookStep(id);
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
document.addEventListener("DOMContentLoaded", function() {
    ColerChessTable();
});

