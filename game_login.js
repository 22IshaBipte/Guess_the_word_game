function addUser(){
    player_1= document.getElementById("input1").value
    player_2= document.getElementById("input2").value
    localStorage.setItem("player_1name",player_1)
    localStorage.setItem("player_2name",player_2)
    window.location="game_page.html"
}