const NoneColor = "blue";
const EnemyColor = "red";
const TableColor = "rgb(231, 150, 58)";
let x = false, select = false, order = true, PreviousId;
function ResetAll()
{
    for(let x = 1; x <= 8; x++)
    {
        for(let y = 1; y <=8; y++)
        {
            document.getElementById("a" + x + y).dataset.type = "None";
            document.getElementById("a" + x + y).dataset.color = "None";
            document.getElementById("a" + x + y).innerHTML = "";
        }
    }
}
function restart()
{
    ResetAll();
    x = false; select = false; order = true; PreviousId = "";
    document.getElementById("a11").outerHTML = '<button id="a11" onclick="Step(\'a11\')" data-type="Rook" data-color="White"><img src="Rook.png" data-type="Rook"></button> '
    document.getElementById("a12").outerHTML = '<button id="a12" onclick="Step(\'a12\')" data-type="Knight" data-color="White"><img src="Knight.png" data-type="Knight"></button> '
    document.getElementById("a13").outerHTML = '<button id="a13" onclick="Step(\'a13\')" data-type="Bishop" data-color="White"><img src="Bishop.png" data-type="Bishop"></button> '
    document.getElementById("a14").outerHTML = '<button id="a14" onclick="Step(\'a14\')" data-type="King" data-color="White"><img src="King.png" data-type="King"></button> '
    document.getElementById("a15").outerHTML = '<button id="a15" onclick="Step(\'a15\')" data-type="Queen" data-color="White"><img src="Queen.png" data-type="Queen"></button> '
    document.getElementById("a16").outerHTML = '<button id="a16" onclick="Step(\'a16\')" data-type="Bishop" data-color="White"><img src="Bishop.png" data-type="Bishop"></button> '
    document.getElementById("a17").outerHTML = '<button id="a17" onclick="Step(\'a17\')" data-type="Knight" data-color="White"><img src="Knight.png" data-type="Knight"></button> '
    document.getElementById("a18").outerHTML = '<button id="a18" onclick="Step(\'a18\')" data-type="Rook" data-color="White"><img src="Rook.png" data-type="Rook"></button> '
    document.getElementById("a21").outerHTML = '<button id="a21" onclick="Step(\'a21\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a22").outerHTML = '<button id="a22" onclick="Step(\'a22\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a23").outerHTML = '<button id="a23" onclick="Step(\'a23\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a24").outerHTML = '<button id="a24" onclick="Step(\'a24\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a25").outerHTML = '<button id="a25" onclick="Step(\'a25\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a26").outerHTML = '<button id="a26" onclick="Step(\'a26\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a27").outerHTML = '<button id="a27" onclick="Step(\'a27\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a28").outerHTML = '<button id="a28" onclick="Step(\'a28\')" data-type="Pawn" data-color="White"><img src="Pawn.png" data-type="Pawn"></button> '
    document.getElementById("a71").outerHTML = '<button id="a71" onclick="Step(\'a71\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a72").outerHTML = '<button id="a72" onclick="Step(\'a72\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a73").outerHTML = '<button id="a73" onclick="Step(\'a73\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a74").outerHTML = '<button id="a74" onclick="Step(\'a74\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a75").outerHTML = '<button id="a75" onclick="Step(\'a75\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a76").outerHTML = '<button id="a76" onclick="Step(\'a76\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a77").outerHTML = '<button id="a77" onclick="Step(\'a77\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a78").outerHTML = '<button id="a78" onclick="Step(\'a78\')" data-type="Pawn" data-color="Black"><img src="BalckPawn.webp" data-type="Pawn" class="BlackImg" ></button>'
    document.getElementById("a81").outerHTML = '<button id="a81" onclick="Step(\'a81\')" data-type="Rook" data-color="Black"><img src="BlackRook.png" data-type="Rook" class="BlackImg" ></button>'
    document.getElementById("a82").outerHTML = '<button id="a82" onclick="Step(\'a82\')" data-type="Knight" data-color="Black"><img src="BlackKnight.png" data-type="Knight" class="BlackImg" ></button>'
    document.getElementById("a83").outerHTML = '<button id="a83" onclick="Step(\'a83\')" data-type="Bishop" data-color="Black"><img src="BlackBishop.png" data-type="Bishop" class="BlackImg" ></button>'
    document.getElementById("a84").outerHTML = '<button id="a84" onclick="Step(\'a84\')" data-type="Queen" data-color="Black"><img src="BalckQueen.webp" data-type="Queen" class="BlackImg" ></button>'
    document.getElementById("a85").outerHTML = '<button id="a85" onclick="Step(\'a85\')" data-type="King" data-color="Black"><img src="BlackKing.png" data-type="King" class="BlackImg" ></button>'
    document.getElementById("a86").outerHTML = '<button id="a86" onclick="Step(\'a86\')" data-type="Bishop" data-color="Black"><img src="BlackBishop.png" data-type="Bishop" class="BlackImg" ></button>'
    document.getElementById("a87").outerHTML = '<button id="a87" onclick="Step(\'a87\')" data-type="Knight" data-color="Black"><img src="BlackKnight.png" data-type="Knight" class="BlackImg" ></button>'
    document.getElementById("a88").outerHTML = '<button id="a88" onclick="Step(\'a88\')" data-type="Rook" data-color="Black"><img src="BlackRook.png" data-type="Rook" class="BlackImg" ></button>'
    document.getElementById("end").style.display = "none";
    document.getElementById("shadow").style.display = "none";
    ColerChessTable();
}   
function ColerChessTable()
{
    console.log("ColorChessTable");
    for(let i = 1; i <= 8; i++)
    {
        for(let j = 1; j <= 8; j++)
        {
            let id = "a"+i+j;
            if((i%2 == 1 && j%2 == 0) || (i%2 == 0 && j%2 == 1))
            {
                document.getElementById(id).style.backgroundColor = TableColor;
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
        console.log("King123");
        select = false;
        if(document.getElementById(id).dataset.color != "None")
        {
            if(document.getElementById(id).children[0].dataset.type == "King")
            {
                document.getElementById(id).innerHTML = document.getElementById(PreviousId).innerHTML;
                console.log("king");
                if(document.getElementById(id).dataset.color == "White")
                {
                    document.getElementById("result").innerHTML = "Black Win";
                    document.getElementById("end").style.display = "flex";
                    document.getElementById("shadow").style.display = "block";
                }
                else
                {
                    document.getElementById("result").innerHTML = "White Win";
                    document.getElementById("end").style.display = "flex";
                    document.getElementById("shadow").style.display = "block";
                }
            }
        }
        document.getElementById(id).innerHTML = document.getElementById(PreviousId).innerHTML;
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
            else if(type == "King")
            {
                KingStep(id);
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
                document.getElementById("a" + siteX + siteY).style.backgroundColor = NoneColor;
            }
            if(siteY + 1 <= 8){
                siteY++;
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = EnemyColor;
                }
            }
            if(siteY - 2 >= 1)
            {
                siteY-=2;
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "Black")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = EnemyColor;
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
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = NoneColor;
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
                document.getElementById("a" + siteX + siteY).style.backgroundColor = NoneColor;
            }
            if(siteY + 1 <= 8){
                siteY++;
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "White")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = EnemyColor;
                }
            }
            if(siteY - 2 >= 1)
            {
                siteY-=2
                if(document.getElementById("a" + siteX + siteY).dataset.type != "None" && document.getElementById("a" + siteX + siteY).dataset.color == "White")
                {
                    document.getElementById("a" + siteX + siteY).dataset.type = "Available";
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = EnemyColor;
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
                    document.getElementById("a" + siteX + siteY).style.backgroundColor = NoneColor;
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
            document.getElementById(id).style.backgroundColor = NoneColor;
        }
        else
        {
            if(document.getElementById(id).dataset.color == "Black")
            {
                document.getElementById(id).dataset.type = "Available";
                document.getElementById(id).style.backgroundColor = EnemyColor;
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
            document.getElementById(id).style.backgroundColor = NoneColor;
        }
        else
        {
            if(document.getElementById(id).dataset.color == "White")
            {
                document.getElementById(id).dataset.type = "Available";
                document.getElementById(id).style.backgroundColor = EnemyColor;
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
        document.getElementById("a" + siteX + siteY).style.backgroundColor = NoneColor;
        document.getElementById("a" + siteX + siteY).dataset.type = "Available";
    }
    else if(document.getElementById("a" + siteX + siteY).dataset.type != "None")
    {
        if(document.getElementById("a" + siteX + siteY).dataset.color != document.getElementById(id).dataset.color)
        {
            document.getElementById("a" + siteX + siteY).style.backgroundColor = EnemyColor;
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
    let siteX = parseInt(id[1]), siteY = parseInt(id[2]);
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
function KingStep(id)
{
    let siteX = parseInt(id[1]), siteY = parseInt(id[2]);
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
    siteY++;
    siteX++;
    if(siteX <= 8)
    {
        SubKnightStep(siteX, siteY, id);
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
    siteX-=2;
    if(siteX >= 1)
    {
        if(siteY >= 1)
        {
            SubKnightStep(siteX, siteY, id);
        }
        siteY++;
        SubKnightStep(siteX, siteY, id);
        siteY++;
        if(siteY <= 8)
        {
            SubKnightStep(siteX, siteY, id);
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    ColerChessTable();
});

