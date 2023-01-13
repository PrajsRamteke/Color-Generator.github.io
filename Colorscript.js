const getColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    let hexcolor = "#" + randomColor;

    document.body.style.backgroundColor = hexcolor;
    document.getElementById("codetext").innerText = hexcolor;
    navigator.clipboard.writeText(hexcolor);
 }

  document.getElementById("btn").addEventListener("click", getColor)

  getColor();
  