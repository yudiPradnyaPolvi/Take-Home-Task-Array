console.log("Tugas Array")
/*
1. Buat method untuk menambahkan data ke dalam suatu array.
2. Buat method untuk mengambil data dari dalam array berdasarkan index
3. buat method untuk mengganti nilai dari sebuah index pada array
*/

/*
let data = []
function input (data){
console.log ("menampilkan data "+ data[0])
}
input ["nasi","tahu"]
*/


// menggunakan procedure bisa
//Menambahkan data
let datas = ["susu","teh"]
let inputs=datas.push("kopi","es kelapa")
 
function inputDatas(datas= []){

    console.log("Data Setelah Ditambah "+datas)
}
inputDatas (datas)

//menampilkan data dengan index
function readDatas(datas= []){
    

    console.log("Membaca Data dengan Index = "+datas[2])
}
readDatas (datas)
//mengedit data 

let dataBarus =datas.splice(1,1,"es Josu","green tea")
function editDatas (datas= []){

    console.log("Data Setelah diUbah = "+datas)
}
editDatas (datas)




// Menggunakan annonymus Procedure
let data1 = ["nasi goreng","nasi bakar"]
let input1=data1.push("ikan bakar","udang bakar")
//menyiapkan array dalam arrow function  
const inputData1 = function(data1= []){

    console.log("Data Setelah Ditambah "+data1)
}
inputData1 (data1)
//menampilkan data dengan index
const readData1 = function(data1= []){
    

    console.log("Membaca Data dengan Index = "+data1[2])
}
readData1 (data1)
//mengedit data 

let dataBaru1 =data1.splice(1,1,"iga bakar","bakso")

const editData1 = function (data1= []){
    

    console.log("Data Setelah diUbah = "+data1)
}
editData1 (data1)






// Menggunakan arrow procedure
let data2 = ["kuda","sapi"]
let input2=data2.push("naga","kambing")
//menyiapkan array dalam arrow function  
const inputData2 = (data2= [])=>{

    console.log("Data Setelah Ditambah "+data2)
}
inputData2 (data2)
//menampilkan data dengan index
const readData2 = (data2= [])=>{
    

    console.log("Membaca Data dengan Index = "+data2[1])
}
readData2 (data2)
//mengedit data 

let dataBaru2=data2.splice(1,1,"kucing","kelinci")

const editData2 = (data2= [])=>{
    

    console.log("Data Setelah diUbah = "+data2)
}
editData2 (data2)

