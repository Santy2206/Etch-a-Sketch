export function addGrid(grid,times){
  times=times*times
  for(let i=0;i<times;i--){
    let div=document.createElement("div")
    grid.append(div)

  }
}