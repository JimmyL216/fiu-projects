function reply_click(clicked_id)
{
  var display = document.getElementById('demo');

    if (display.innerHTML == "0") {
      display.innerHTML = (clicked_id);

    }
    display.innerHTML += (clicked_id);
}

function clear() {
  var display = document.getElementById('demo');
    display.innerHTML = "0";

  
}
