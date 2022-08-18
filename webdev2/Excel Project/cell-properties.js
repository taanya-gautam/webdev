//storage
 let sheetDB = [];
 for (let i= o;i<rows; i++){
    let sheetRow =[];
    for (let j=0; j<cols; j++){
        let cellProp = {
            bold:false,
            italic:false,
            underline:false,
            alignment : "left",
            fontFamily : "monospace",
            fontSize : "14",
            fontColor : "#000000",
            BGcolor : "#000000"       //for black color

        }
        sheetRow.push(cellProp)

    }
    sheetDB.push(sheetRow);
 }

 //selectors for cell properties
 let bold = document.querySelector(".bold");
 let italic = document.querySelector(".italic");
 let underline = document.querySelector(".underline");
 let fontFamily = document.querySelector(".font-family-prop");
 let fontSize = document.querySelector(".font-size-prop");
 let fontColor = document.querySelector(".font-color");
 let BGcolor = document.querySelector(".BGcolor-prop");
 let align = document.querySelectorAll(".alignment");
 let leftAlign = alignment[0];
 let centerAlign = alignment[1];
 let rightAlign = alignment[2];

 let addressBar = document.querySelector(".address-bar");

//application of two-way binding(cells properties & storage)
 //attach property listener
 bold.addEventListener("click" , (e)=>{
    let address = addressBar.value ;
    activeCell(address);

 })
 function activeCell(address){
    let [rid ,cid] =decodeRIDCIDFromAddress(address);
    //access cell & storage
    let cell =document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);

 }
 function decodeRIDCIDFromAddress(address){
    // address= "A1"
    let rid = Number(address.slice(1)-1);//"1" -->0
    let cid = Number(String.charCodeAt(0))- 65;  //"A"-->65
    return[rid, cid];

 }
