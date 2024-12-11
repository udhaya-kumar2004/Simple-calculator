var outputscreen=document.getElementById("output");

function display(num)
{
    outputscreen.value += num;
}
var equal=document.getElementById("equal")

function calculate()
{
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(error)
    {
        alert("invaild")
    }
}
function cl()
{
    outputscreen.value= "";
  
}

function del()
{
    outputscreen.value=outputscreen.value.slice(0,-1);

}