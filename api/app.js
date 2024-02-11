const express = require('express');
const axios = require('axios');
const moment = require('moment-timezone');

const app = express();
const port = 3000;

app.use(express.json());

const frontendUrl = process.env.FRONTEND_URL;
app.use((req, res, next) => {
    const origin = req.get('origin');
    if (!origin || origin === frontendUrl || origin === 'http://localhost:5173') {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    } else {
        res.status(403).json({ error: 'Not allowed by CORS' });
    }
});

function getTimestamp() {
    const now = moment().tz('Europe/Berlin').format();
    return now;
}

const devmode = false;

const tuerchenData = [
    {
        date: moment('2023-12-01T00:00:00.000Z').tz('UTC').format(),
        title: '1. Türchen',
        content: '',
        image: '',
        video: '/Q75nmYj8WaFvcq9N7R2jv6o23h2eNSnWxLnk2U5C/1_3iiQA9ZbQ2RPz3bLz52pS36S2ZWRUBDomH5Z62Vo.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-02T00:00:00.000Z').tz('UTC').format(),
        title: '2. Türchen',
        content: '',
        image: '',
        video: '/yYjgbAZDvMjE4L7Xsyyw5pvpfzT5bCHqy5wNp5bu/2_xhh9bcPpmLiTrHiRTFzKoT3KhxGTzzdNzb3eK3G2.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-03T00:00:00.000Z').tz('UTC').format(),
        title: '3. Türchen',
        content: '',
        image: '',
        video: '/96T4sghA445RkeJJTvb85h7y2mmX8bhHGQKs4E37/3_6KCyQ7Zhw8s9yrkra65Wg7pQ8ZaL6F425f3cC9T2.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-04T00:00:00.000Z').tz('UTC').format(),
        title: '4. Türchen',
        content: '',
        image: '',
        video: '/Xs8CXiW99Yj6Gf4eZH29Z82PtxRXkaLaJF3R2qo9/4_ZaXY8LmFCyjnRb5yLStyqupWq4bK2X6ZsXwawj2b.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-05T00:00:00.000Z').tz('UTC').format(),
        title: '5. Türchen',
        content: '',
        image: '',
        video: '/ZTDbxtQYxGmA8En4hpU9GWWrNGh52MLenkVMvrnL/5_tLHRNbT3SWuUHhAYqoP2tbWsjQukij6Ymzmg6zqi.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-06T00:00:00.000Z').tz('UTC').format(),
        title: '6. Türchen',
        content: '',
        image: '',
        video: '/3VX3tRHQiDVnukV6mXLWBWf5z5z7MBCuuFaq9Uq6/6_cPAsw9xASGWnoHLNhfyRfCbM7AFRVU7cdaxoq8Qj.mp4',
        buttonlink: 'https://narilah.flippi.cloud/',
        buttontext: 'Gewinnspiel ist beendet',
        buttondisabled: true,
    },
    {
        date: moment('2023-12-07T00:00:00.000Z').tz('UTC').format(),
        title: '7. Türchen',
        content: '',
        image: '',
        video: '/Ehn793Ma7LbXXjwnq46VzfLE7tiB47MWvkXWeFWw/7_eS8yE8ZSM5WoRwjiY6UbQ9Mvmgmhxsiu95bNyGqq.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-08T00:00:00.000Z').tz('UTC').format(),
        title: '8. Türchen',
        content: '',
        image: '',
        video: '/hvAUsWXg9owbBV4mjLhzgWogZjHfmw3XRfN5QKG9/8_LBGJkugHw2HcVnut5NFVAPsZt6mEks2qiB4FgRci.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-09T00:00:00.000Z').tz('UTC').format(),
        title: '9. Türchen',
        content: '',
        image: '',
        video: '/ng7JHRCzmw5ayDJZNr4t8oX7oEy4NU67Z5svdVj6/9_wPvf5VXGvKsLtiXZ5QwQFb3EU7qNmFSyHxhz5LYb.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-10T00:00:00.000Z').tz('UTC').format(),
        title: '10. Türchen',
        content: '',
        image: '',
        video: '/LDxtnaRG88uPRK8EgznCp7mZvX2gD54qZq5XzTGL/10_t3LUkkx9n8Pqw83HBH3hni6nSUALpzmBzMErwuJK.mp4',
        buttonlink: 'https://narilah.flippi.cloud',
        buttontext: 'Gewinnspiel ist beendet',
        buttondisabled: true,
    },
    {
        date: moment('2023-12-11T00:00:00.000Z').tz('UTC').format(),
        title: '11. Türchen',
        content: '',
        image: '',
        video: '/U4nBidZqu83isizMT4W4baqqsRTN5pLmWFtaLR2G/11_irMJN3svLZCdGzcu7ahp96J8iJvDS4JiVWd49Kvn.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-12T00:00:00.000Z').tz('UTC').format(),
        title: '12. Türchen',
        content: '',
        image: '',
        video: '/k4y7Z6jAeBVngusdD9cfhefNfdGT4BDx5pG5VsoS/12_DGAzYy83JAFwwGL9p9fMJFpgp4XEAmkeWnfDEGKk.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-13T00:00:00.000Z').tz('UTC').format(),
        title: '13. Türchen',
        content: '',
        image: '',
        video: '/aQoXjDzTBDG7S8eQhMFyz26RcfaXCzSNK6B2qRTm/13_gkqNi6Qikgz9qDdTv8LT9gyMiLc7bV62GMNarTas.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-14T00:00:00.000Z').tz('UTC').format(),
        title: '14. Türchen',
        content: '',
        image: '',
        video: '/AGXTB8oeUsNbS7nbT5cuyjQzUWhR87mpATvFjgkS/14_QfJeBMEY5TUnfaeVhqYEKRwEPfhpLSu7MA5QJLte.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-15T00:00:00.000Z').tz('UTC').format(),
        title: '15. Türchen',
        content: '',
        image: '',
        video: '/PhXrPf9G9tJgbmHsdeptgZ2oUxRnR3HZkCDyAf5p/15_5LFnSQWTPN8w7DKPxDmc4JW9X4XjHabwwkW7Nhn7.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-16T00:00:00.000Z').tz('UTC').format(),
        title: '16. Türchen',
        content: '',
        image: '',
        video: '/Ewr39rVYvJjxgirirSpsH3SxrdkzL6R24m6kLDhH/16_oCytXsfazrabUtGSwKLmKehgP68pRkF5rF7nfq6h.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-17T00:00:00.000Z').tz('UTC').format(),
        title: '17. Türchen',
        content: '',
        image: '',
        video: '/7VKXU8nN4jrFpHVjhybfdhxK5de4ESsPLZKGrW6Z/17_43wpTdJHkS3Y7DuX3Aguz2evuTp26WSe7kFaPQCd.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-18T00:00:00.000Z').tz('UTC').format(),
        title: '18. Türchen',
        content: '',
        image: '',
        video: '/BnnAfm45XY3xmqBBc8E6Xu46XQgTndbWgG32HguJ/18_sto5xPF8WvPy2yVAAA8gnL5QUqDgB9xMchtuzhuf.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-19T00:00:00.000Z').tz('UTC').format(),
        title: '19. Türchen',
        content: '',
        image: '',
        video: '/4abvWwP4t55G3X9wujKjmmAbjH8Pnv3yQ7aweiUY/19_VP9jRX78nqVA9PsqESGLbxB9uD6HquQdzXPfxaQd.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-20T00:00:00.000Z').tz('UTC').format(),
        title: '20. Türchen',
        content: '',
        image: '',
        video: '/pK5FmYMFei6JnNpWMi9pYafHwpFm7PTjC6utdBQX/20_fkfJ9Xo2SWVyqh7dy85CKZyGpnKU4q48wRweH842.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-21T00:00:00.000Z').tz('UTC').format(),
        title: '21. Türchen',
        content: '',
        image: '',
        video: '/JvmYdcm5bpARBQLAt3GmGTAAkx5GxVrSA3dKJkgS/21_mvqh8yEMrrw5DBTB4sX576huKAQqioyaFp7MJuru.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-22T00:00:00.000Z').tz('UTC').format(),
        title: '22. Türchen',
        content: '',
        image: '',
        video: '/YzZLbRX64WXPhRBURsb5v7E6SneBxRY7XyZJ2p5G/22_bcmQCq2JjpDxF3vXSw63BmgSYHb82TFX4m6LyNhM.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-23T00:00:00.000Z').tz('UTC').format(),
        title: '23. Türchen',
        content: '',
        image: '',
        video: '/7btSe9okourEtYgJDfzhroWzLxMReP7qztpCXtVJ/23_pQ9EjiUetLznc62i84Sjc49aPAwYYWKwmzGfE659.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    },
    {
        date: moment('2023-12-24T00:00:00.000Z').tz('UTC').format(),
        title: '24. Türchen',
        content: '',
        image: '',
        video: '/F6RGKHs5hXz89SKS2iXfGUisktPEfzfgM6xSLeq9/24_Hic59deQUuubmLpa8N7CtpdpP575tCBQjemLE5yw.mp4',
        buttonlink: '',
        buttontext: '',
        buttondisabled: false,
    }
]

app.get('/api/', async (req, res) => {
    res.json(getTimestamp());
});

app.get('/api/tuerchen/:id', async (req, res) => {
    const id = req.params.id;
    const currentTimestamp = getTimestamp();

    if (id >= 1 && id <= tuerchenData.length) {
        const tuerchen = tuerchenData[id - 1];

        const tuerchenDate = tuerchen.date;
        if (devmode === true) {
            res.json({
                title: tuerchen.title,
                content: tuerchen.content,
                image: tuerchen.image,
                video: tuerchen.video,
                buttonLink: tuerchen.buttonlink,
                buttonText: tuerchen.buttontext,
                buttonDisabled: tuerchen.buttondisabled,
            });
        } else {
            if (currentTimestamp >= tuerchenDate) {
                res.json({
                    title: tuerchen.title,
                    content: tuerchen.content,
                    image: tuerchen.image,
                    video: tuerchen.video,
                    buttonLink: tuerchen.buttonlink,
                    buttonText: tuerchen.buttontext,
                    buttonDisabled: tuerchen.buttondisabled,
                });
            } else {
                res.status(403).json({ error: 'Türchen kann noch nicht geöffnet werden' });
            }
        }
    } else {
        res.status(404).json({ error: 'Türchen nicht gefunden' });
    }
});

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`API listening at Port ${port}`);
});
