for(var bdaycountdown = 60; bdaycountdown > 0; bdaycountdown--)
{
    if (bdaycountdown > 30)
    {
        console.log(bdaycountdown,"days. My birthday is so far away.")
    }
    else if(bdaycountdown <=30 && bdaycountdown>5)
    {
        console.log(bdaycountdown,"days. It's getting closer.")
    }
    else if(bdaycountdown <=5 && bdaycountdown>0)
    {
        console.log(bdaycountdown,"DAYS! MY BIRTHDAY IS ALMOST HERE!")
    }
    else
    {
        console.log("I don't celebrate my birthday.")
    }
}