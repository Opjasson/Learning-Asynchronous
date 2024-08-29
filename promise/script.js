// Promise
// Object yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asyncrhonous dimasa yang akan datang
// janji (terpenuhi / ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi ( then / catch)

// Contoh 1

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         resolve('Janji telah ditepati!')
//     }else {
//         reject('Ingkar janji')
//     }
// });

// janji1
//     .then(response => console.log('Ok! : ' + response))
//     .catch(response => console.log('Not ok! : ' + response))

// Contoh 2 

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('Mulai')
// // console.log(janji2.then(() => console.log(janji2)))
// janji2 
//     .finally(()=> console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))
// console.log('Selesai')

// Promise.all()

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'Avengers',
            sutradara : 'Jasson',
            pemeran : 'Azmi'
        }])
    }, 1000);
});

const cuaca  = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Bandung',
            temp : 26,
            kondisi : 'Cerah berawan'
        }]);
    }, 500)
});

// film
//     .then(response => console.log(response))
// cuaca.then(response => console.log(response))

// Promise.all([film, cuaca])
//     .then(response => console.log(response))

// Menggunakan spread operator
Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })