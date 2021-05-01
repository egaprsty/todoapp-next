export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: 'Kec. Dayeuhluhur',
            kontak: 6,
            dirawat: 3,
            positif: 15
        },
        {
            name: 'Kec. Wanareja',
            kontak: 8,
            dirawat: 5,
            positif: 13
        },
        {
            name: 'Kec. Majenang',
            kontak: 1,
            dirawat: 3,
            positif: 17
        },
        {
            name: 'Kec. Cimanggu',
            kontak: 0,
            dirawat: 1,
            positif: 1
        },
        {
            name: 'Kec. Karangpucung',
            kontak: 0,
            dirawat: 2,
            positif: 19
        },
        {
            name: 'Kec. Cipari',
            kontak: 0,
            dirawat: 2,
            positif: 5
        },
        {
            name: 'Kec. Sidareja',
            kontak: 0,
            dirawat: 0,
            positif: 3
        },
        {
            name: 'Kec. Kedungreja',
            kontak: 0,
            dirawat: 0,
            positif: 2
        },
        {
            name: 'Kec. Patimuan',
            kontak: 0,
            dirawat: 0,
            positif: 6
        },
        {
            name: 'Kec. Gandrungmangu',
            kontak: 0,
            dirawat: 2,
            positif: 15
        },
        {
            name: 'Kec. Bantarsari',
            kontak: 13,
            dirawat: 1,
            positif: 30
        },
        {
            name: 'Kec. Kawunganten',
            kontak: 0,
            dirawat: 0,
            positif: 46
        },
        {
            name: 'Kec. Jeruklegi',
            kontak: 25,
            dirawat: 1,
            positif: 36
        },
        {
            name: 'Kec. Kesugihan',
            kontak: 9,
            dirawat: 0,
            positif: 50
        },
        {
            name: 'Kec. Adipala',
            kontak: 0,
            dirawat: 1,
            positif: 9
        },
        {
            name: 'Kec. Maos',
            kontak: 0,
            dirawat: 0,
            positif: 19
        },
        {
            name: 'Kec. Kroya',
            kontak: 0,
            dirawat: 2,
            positif: 25
        },
        {
            name: 'Kec. Binangun',
            kontak: 0,
            dirawat: 0,
            positif: 8
        },
        {
            name: 'Kec. Sampang',
            kontak: 0,
            dirawat: 0,
            positif: 7
        },
        {
            name: 'Kec. Nusawungu',
            kontak: 0,
            dirawat: 0,
            positif: 1
        },
        {
            name: 'Kec. Cilacap Utara',
            kontak: 22,
            dirawat: 1,
            positif: 69
        },
        {
            name: 'Kec. Cilacap Selatan',
            kontak: 1,
            dirawat: 0,
            positif: 81
        },
        {
            name: 'Kec. Cilacap Tengah',
            kontak: 15,
            dirawat: 2,
            positif: 62
        },
        {
            name: 'Kec. Kampung Laut',
            kontak: 0,
            dirawat: 0,
            positif: 0
        },
    ]))
}
