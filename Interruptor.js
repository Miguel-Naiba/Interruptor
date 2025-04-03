const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function LigarLampada (){
    lampada.src="aatrox/Aatrox_Alado_Render.webp";
}
function DesligarLampada(){
    lampada.src="aatrox/Aatrox_Render.webp";
}
ligar.addEventListener("click", LigarLampada)
desligar.addEventListener("click", DesligarLampada)