const names = [
    {name: "John"},
    {name: "Kyle"}
]

const findX = names.find((name)=> {
    return name.name === "fasdf";
})

console.log(findX)

if(findX === undefined){
    console.log("hej")
}