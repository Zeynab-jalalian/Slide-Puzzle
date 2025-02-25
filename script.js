document.addEventListener("DOMContentLoaded",()=>{
    const cells=[...document.querySelectorAll(".cell")];
    const puzzle=document.querySelector(".puzzle");
    const shuffleButton=document.getElementById("shuffle-button");
    const winMessage=document.getElementById("win-message");
   
    const isAdjacent=(index1,index2)=>{
     const[row1,col1]=[Math.floor(index1/3),index1 % 3];
     const[row2,col2]=[Math.floor(index2/3),index2 % 3];
     return(Math.abs(row1 - row2) + Math.abs(col1 - col2))===1;
    }
    const swapCells=(cell1,cell2)=>{
        [cell1.innerHTML,cell2.innerHTML]=[cell2.innerHTML,cell1.innerHTML];
        cell1.classList.toggle("empty");
        cell2.classList.toggle("empty");
    }
    const getAdjancentIndices=index=>{
        const [row,col]=[Math.floor(index/3),index%3];
        return [
         row > 0 ? index - 3:null,
         row < 2 ? index + 3:null,
         row > 0 ? index - 1:null,
         row < 2 ? index + 1:null
        ].filter(n => n!==null);
    };
  
    
    
})