
const converter=require("bech32-converting")


const key=converter('moa').toBech32('2333000000000000000000000000000000023330000000000000000000000000')

console.log(key)

