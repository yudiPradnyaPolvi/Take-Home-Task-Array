console.log ("Function Method")

console.log ("Menambahkan Data dengan Function Method")
let data = ["susu","teh"]
let inputs=data.push("kopi","es kelapa")
function inputDatas(datas= []){
    data = datas 
   
}
function getDatas (){
    return data
}

data =getDatas()
console.log ("Data Setelah Ditambah = "+data)  


console.log ("Membaca index dengan Function Method")

let data1 = ["susu","teh"]
let inputs1=data1.push("kopi","es kelapa")
function readDatas(datas1= []){
    
    data1 = datas1
   
}
function getDatas1 (){
    return data1
}

data1 =getDatas1()

console.log("Membaca Data dengan Index = "+ data1[2])

console.log ("Mengganti Value pada Array Menggunakan Function Method")
let data2 = ["susu","teh"]
let dataBarus = data2.splice(1,1,"es Josu","green tea")

function readData(datas2= []){
    
  data2 = datas2
   
}
function getDatas2 (){
    return data2
}

data2 =getDatas2()
console.log("Data Setelah diUbah = "+ data2)