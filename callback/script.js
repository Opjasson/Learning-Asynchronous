// callback

// Synchrounous callback
// function hallo(nama) {
//     alert(`Hallo ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukan nama anda : ');
//     callback(nama)
// }

// tampilkanPesan(hallo)

// synchronous callback

// const mhs = [
//     {
//         "nama" : "Jasson nurmagomedove",
//         "jabatan" : "Junior programmer",
//         "email" : "jasson@gmai.com",
//         "alamat" : "jalan mejasem baru 4",
//         "id"    : 1
//     },

//     {
//         "nama" : "RObert stewart",
//         "jabatan" : "Junior programmer",
//         "email" : "roberth@gmai.com",
//         "alamat" : "jalan priuk jaya",
//         "id"    : 2
//     },

//     {
//         "nama" : "Agus styanovanto",
//         "jabatan" : "Junior programmer",
//         "email" : "agus@gmai.com",
//         "alamat" : "jalan angkasa raya",
//         "id"    : 3
//     }

// ];

// console.log('Mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++){
//         const date = Date();
//     }
//     console.log(m.nama)
// });
// console.log('Selesai');

// Asynchrounous callback
// Get data menggunakan ajax vanilla javascript
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if ( xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// console.log('Mulai')
// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama))
// }, () => {
    
// })
// console.log('Selesai')

// Asynchronous java script
// get data menggunakan J query

console.log('Mulai')
$.ajax({
    url : 'data/mahasiswa.json',
    success : (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    }, 
    error : (e) => {
        console.log(e)
    }
});
console.log('Selesai')