const pacman = document.getElementById("pacman");
const eye = document.querySelector("#pacman>img");
pacman.style.overflow="hidden"
eye.src = "./assets/img/images.jpg";
eye.alt = "oeil de pacuman";
eye.width= 50
console.dir(pacman);//pos d'origin
let posLeft = 0;
let posTop = 0;
const mp3 = new Audio("./assets/sound/HMNHart_Battements de coeur (ID 0218)_LS.mp3")
function sound(){
    mp3.play()
}
document.body.addEventListener(
    "keyup",
    function (event) {

        // console.dir(event);
        //  "ArrowLeft" "ArrowUp" "ArrowRight" "ArrowDown" ==>event.code
        switch (event.code) {
            case "ArrowLeft":
                console.log("touche left");
                if (pacman.offsetLeft) {
                    posLeft = pacman.offsetLeft - 50;
                    pacman.style.left = posLeft + "px";
                }else{
                   console.log("change de sens") ;
                   sound();
                }

                break;

            case "ArrowUp":
                console.log("touche Up");
                if (pacman.offsetTop ) {
                    posTop = pacman.offsetTop - 50;
                    pacman.style.top = posTop + "px";

                }else{
                    console.log("change de sens") ;
                    sound();
                }

                break;

            case "ArrowRight":
                console.log("touche right");
                if (pacman.offsetLeft < 350) {
                    posLeft = pacman.offsetLeft + 50;
                    pacman.style.left = posLeft + "px";

                }else{
                    console.log("change de sens") ;
                    sound();
                }

                console.dir(pacman);//pos apres deplacement
                break;

            case "ArrowDown":
                console.log("touche down");
                if (pacman.offsetTop < 550) {
                    posTop = pacman.offsetTop + 50;
                    pacman.style.top = posTop + "px";

                }else{
                    console.log("change de sens") ;
                    sound();
                }

                break;

            default:
                break;
        }
    }
);
