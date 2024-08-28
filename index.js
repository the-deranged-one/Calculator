const display=document.getElementById("display");
function appendtodisplay(input)
{
    display.value= display.value + input;
}

function calculate()
{
    try
    {
        display.value=eval(display.value);
    }
    catch(err)
    {
        display.value="Error";
    }
}
function clearDisplay()
{
    display.value='';
}