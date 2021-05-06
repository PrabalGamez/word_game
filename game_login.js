function login(){
    player1name=document.getElementById("player1_name").value;
    player2name=document.getElementById("player2_name").value;
    localStorage.setItem("Player 1=", player1name);
    localStorage.setItem("Player 2=", player2name);
    window.location="game_page.html";
}