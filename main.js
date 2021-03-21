var inputs1=[];
var inputs2=[];

function getParagraph1()
{
    for( var i=1; i<=6; i++)
    {
    var y=document.getElementById("para1_ibox_"+i).value;
    console.log(y);
    inputs1.push(y)
    }
    console.log(inputs1);
    document.getElementById("showParagraph1").innerHTML=inputs1.join(". ");
}

function getParagraph2()
{
    for( var i=1; i<=6; i++)
    {
        var z=document.getElementById("para2_ibox_"+i).value;
        console.log(z);
        inputs2.push(z)
    }
    console.log(inputs2);
    document.getElementById("showParagraph2").innerHTML=inputs2.join(". ");
}