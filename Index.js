const Button = document.getElementById("button")
const Paragraph = document.getElementById("Paragraph")

function ClickFunction(){
    let img = document.createElement("img");
    img.src = "https://c.tenor.com/knU8vgTEPekAAAAC/tenor.gif"
    img.width = 200;
    img.height = 200;
    document.getElementById("GifFlower").appendChild(img);
    Button.remove();
    let leftimg = document.createElement("leftimg");
    leftimg.src = "https://i.pinimg.com/564x/c0/20/4b/c0204b8d4659ff46197a9e5916dfda2a.jpg"
    document.getElementById("LeftImage").appendChild(leftimg);
    Paragraph.innerText = 
    "Hi Khe!, I made this website or document for you since ayaw mo naman ng chats and para di mo nato mabura or ewan pero kung ayaw mo naman ng ganito is pwede moko ichat and idedelete ko to lahat. But anyways I want to greet you a happy birthday, this might be the worst or not the weirdest gift you might recieve this day since wala narin akong sapat na budget or 'di na umabot yung pera ko specifically para sayo or para sa bday mo and so I kind'a felt sad 'di'ko manlang kaya kang bigyan ng kahit simpleng regalo pero okay narin kasi alam kong 'di mo naman yung kakailanganin or like parang 'di mo naman na ako mamimiss or some sort so yeah. Anyways I sent this link to you to serve as a gift and siguro to let you know that I'm still waiting and will wait. I don't know how to be sweet enough but I tried and I'm still trying. To all those gifts I gave there's always a"
}