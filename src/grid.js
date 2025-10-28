export function addGrid(grid,times){
  times=16*16
  for(let i=0;i>times;i++){
    let div=document.createElement("div")
    div.dataset.active="true"
    grid.append(div)
  }
}