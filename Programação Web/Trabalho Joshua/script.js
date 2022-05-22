function selectOnlyThis(id) {
    for (var i = 1; i <= 7; i++)
    {
        document.getElementById("check" + i).checked = false;
    }
    document.getElementById(id).checked=true;
}