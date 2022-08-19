//storage
 let sheetDB = [];
 for (let i=0;i<rows; i++){
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
 let fontColor =document.querySelector(".font-color-prop");
 let BGcolor = document.querySelector(".BGcolor-prop");
 let alignment= document.querySelectorAll(".alignment");
 let leftAlign = alignment[0];
 let centerAlign = alignment[1];
 let rightAlign = alignment[2];

 
 let activeColorProp = "#d1d8e0";
 let inactiveColorProp = "#ecf0f1";

//application of two-way binding(cells properties & storage)
 //attach property listener
 bold.addEventListener("click" , (e)=>{
    let address = addressBar.value ;
    let [cell ,cellProp] = activeCell(address);
    //modification

    cellProp.bold = !cellProp.bold ;  //data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; //UI change(1)
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // UI change(2)

 })
 italic.addEventListener("click" , (e)=>{
   let address = addressBar.value ;
   let [cell ,cellProp] = activeCell(address);
   //modification

   cellProp.italic = !cellProp.italic ;  //data change
   cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; //UI change(1)
   italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // UI change(2)

})
underline.addEventListener("click" , (e)=>{
   let address = addressBar.value ;
   let [cell ,cellProp] = activeCell(address);
   //modification

   cellProp.underline = !cellProp.underline ;  //data change
   cell.style.textDecoration = cellProp.underline ? "underline" : "normal"; //UI change(1)
   underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // UI change(2)

})
fontSize.addEventListener("change" , (e)=>{
   let address = addressBar.value ;
   let [cell ,cellProp] = activeCell(address);
   //modification

   cellProp.fontSize = fontSize.value ;  //data change
   cell.style.fontSize = cellProp.fontSize + "px"; //UI change(1)
   fontSize.value = cellProp.fontSize;
})
fontFamily.addEventListener("change" , (e)=>{
   let address = addressBar.value ;
   let [cell ,cellProp] = activeCell(address);
   //modification

   cellProp.fontFamily = fontFamily.value ;  //data change
   cell.style.fontFamily = cellProp.fontFamily; //UI change(1)
   fontFamily.value = cellProp.fontFamily;
})
fontColor.addEventListener("change" , (e)=>{
   let address = addressBar.value ;
   let [cell ,cellProp] = activeCell(address);
   //modification

   cellProp.fontColor = fontColor.value ;  //data change
   cell.style.color = cellProp.fontColor; //UI change(1)
   fontColor.value = cellProp.fontColor;
})
BGcolor.addEventListener("change" , (e)=>{
   let address = addressBar.value ;
   let [cell ,cellProp] = activeCell(address);
   //modification

   cellProp.BGcolor = BGcolor.value ;  //data change
   cell.style.backgroundColor = cellProp.BGcolor; //UI change(1)
   BGcolor.value = cellProp.BGcolor;
})
alignment.forEach((alignElem)=>{
   alignElem.addEventListener("click" ,(e) => {
      let address = addressBar.value ;
      let [cell ,cellProp] = activeCell(address);

      let alignValue = e.target.classList[0];
      cellProp.alignment = alignValue;  //data change
      cell.style.textAlign = cellProp.alignment; //UI change(1)

      switch(alignValue){
         case "left" :
            leftAlign.style.backgroundColor = activeColorProp;
            centerAlign.style.backgroundColor = inactiveColorProp;
            rightAlign.style.backgroundColor = inactiveColorProp;
         break;
         case "center" :
            leftAlign.style.backgroundColor = inactiveColorProp;
            centerAlign.style.backgroundColor = activeColorProp;
            rightAlign.style.backgroundColor = inactiveColorProp;
         break;
         case "right":
            leftAlign.style.backgroundColor = inactiveColorProp;
            centerAlign.style.backgroundColor = inactiveColorProp;
            rightAlign.style.backgroundColor = activeColorProp;
         break;

      }
   })
})

 function activeCell(address){
    let [rid ,cid] =decodeRIDCIDFromAddress(address);
    //access cell & storage
    let cell =document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell ,cellProp];

 }
 function decodeRIDCIDFromAddress(address){
    // address= "A1"
    let rid = Number(address.slice(1)-1);//"1" -->0
    let cid = Number(address.charCodeAt(0))- 65;  //"A"-->65
    return[rid, cid];

 }
