const payload = {
    "/": {
    },
    "/api/game/2DPM": {
        lastest: '1.2.15',
        compatible: '1.2.0',
        download: 'http://45.118.132.215:8080/2DPM.zip',
    },
    "/api/init": {
        games: [
            {
                id: 1,
                name: "Clucking Hell",
                splash: "https://placekitten.com/200/250?image=1",
                splash_hash: "a85032fcba6a6392a35f5c2c87449730",
                lastest: '1.2.15',
                compatible: '1.2.0',
                hidden: false,
                maintenance: true,
            },
            {
                id: 2,
                name: "The Crypt",
                splash: "https://placekitten.com/200/250?image=2",
                splash_hash: "b24d816da24a4077b9c812c3cc46b275",
                lastest: '3.2.7',
                compatible: '3.0.0',
                hidden: false,
                maintenance: false,
            },
            {
                id: 3,
                name: "Fear Museum",
                splash: "https://placekitten.com/200/250?image=3",
                splash_hash: "87b3d1c3c4e00a0b71d9963c89a74988",
                lastest: '1.14.51',
                compatible: '1.14.50',
                hidden: false,
                maintenance: false,
            },
            {
                id: 4,
                name: "Wolf Arena",
                splash: "https://placekitten.com/200/250?image=4",
                splash_hash: "9dbbe4d8988f868173f6ad9ea8b60a19",
                lastest: '2.3.7',
                compatible: '2.2.0',
                hidden: false,
                maintenance: false,
            },
            {
                id: 5,
                name: "Fear Dungeon",
                splash: "https://placekitten.com/200/250?image=5",
                splash_hash: "91903e676cd3fdf6df6fcb9ecc0117dc",
                lastest: '0.1.4',
                compatible: '0.1.0',
                hidden: false,
                maintenance: false,
            },
        ]
    },
    "/api/hub_data": [
        {
            id: "1",
            name: "Clucking Hell",
            preview: "https://placekitten.com/200/250?image=1",
            preview_hash: "a85032fcba6a6392a35f5c2c87449730",
            last_version: '1.2.15',
            compatible_version: '1.2.0',
            hidden: false,
            maintenance: true,
        },
        {
            id: "2",
            name: "The Crypt",
            preview: "https://placekitten.com/200/250?image=2",
            preview_hash: "b24d816da24a4077b9c812c3cc46b275",
            last_version: '3.2.7',
            compatible_version: '3.0.0',
            hidden: false,
            maintenance: false,
        },
        {
            id: "3",
            name: "Fear Museum",
            preview: "https://placekitten.com/200/250?image=3",
            preview_hash: "87b3d1c3c4e00a0b71d9963c89a74988",
            last_version: '1.14.51',
            compatible_version: '1.14.50',
            hidden: false,
            maintenance: false,
        },
        {
            id: "4",
            name: "Wolf Arena",
            preview: "https://placekitten.com/200/250?image=4",
            preview_hash: "9dbbe4d8988f868173f6ad9ea8b60a19",
            last_version: '2.3.7',
            compatible_version: '2.2.0',
            hidden: false,
            maintenance: false,
        },
        {
            id: "5",
            name: "Fear Dungeon",
            preview: "https://placekitten.com/200/250?image=5",
            preview_hash: "91903e676cd3fdf6df6fcb9ecc0117dc",
            last_version: '0.1.4',
            compatible_version: '0.1.0',
            hidden: false,
            maintenance: false,
        },
    ],
    "/api/me": {
        uid: 1348609886,
        address: "0xcc33B3A9cC0c15Fd669f5bdCD8d66bb6e808eBB3",
        balance: "41.381442410775089207",
        bio: "Lol !",
        name: "Mr Bean",
        id: "mr_bean",
        owned_products: [0, 1, 4],
        avatar: "https://placekitten.com/300/300",
        avatar_hash: "9efb03360374af06d044c9e7a7382e61",
        socials: {
            google: "mrbean@gmail.com",
            twitter: "@realMrBean",
            telegram: "@mrbeantg",
        },
    }
}

export default payload;