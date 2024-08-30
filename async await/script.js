// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('selesai')
//     },2000)
// })

// console.log('mulai')
// coba.then(() => console.log(coba))
// console.log('selesai')

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            },waktu)
        }else {
            reject('Terlalu lama')
        }
        })
}

// const coba = cobaPromise()
//     coba.then(() => console.log(coba))
//     coba.catch(() => console.log(coba))

// Didalam async await tidak bisa menggunakan then()
// Gunakan block try and catch untuk menangkap data
async function cobaAsync() {

    try {
        const coba = await cobaPromise()
        console.log(coba)

    }catch (err) {
        console.log(err)
    }
}

console.log('mulai')
cobaAsync();
console.log('berhenti')