export const API_ENDPOINT = 'https://api.sampleapis.com/futurama/';

export const ROUTES  = [
    {
        ID: 0,
        PATH: '/info',
        LABEL: 'About',
    },
    {
        ID: 1,
        PATH: '/characters',
        LABEL: 'Characters',
        SUBS: [
            {
                ID: 0,
                PATH: '/Philip',
                LABEL: 'Philip Jay Fry',
                ORDER: 0,
            },
            {
                ID: 1,
                PATH: '/Turanga',
                LABEL: 'Turanga Leela',
                ORDER: 1
            },
        ]
    },
    {
        ID: 2,
        PATH: '/cast',
        LABEL: 'Cast',
    },
    {
        ID: 3,
        PATH: '/episodes',
        LABEL: 'Episodes',
        SUBS: [
            {
                ID: 0,
                PATH: '/season01',
                LABEL: 'Season 1',
                ORDER: 0
            },
            {
                ID: 1,
                PATH: '/season02',
                LABEL: 'Season 2',
                ORDER: 1
            },
            {
                ID: 2,
                PATH: '/season03',
                LABEL: 'Season 3',
                ORDER: 2
            },
            {
                ID: 3,
                PATH: '/season04',
                LABEL: 'Season 4',
                ORDER: 3
            },
            {
                ID: 4,
                PATH: '/season05',
                LABEL: 'Season 5',
                ORDER: 4
            },
            {
                ID: 5,
                PATH: '/season06',
                LABEL: 'Season 6',
                ORDER: 5
            },
            {
                ID: 6,
                PATH: '/season07',
                LABEL: 'Season 7',
                ORDER: 6
            },
            {
                ID: 7,
                PATH: '/season08',
                LABEL: 'Season 8',
                ORDER: 7
            },
            {
                ID: 8,
                PATH: '/season09',
                LABEL: 'Season 9',
                ORDER: 8
            },
            {
                ID: 9,
                PATH: '/season10',
                LABEL: 'Season 10',
                ORDER: 9
            },
        ]
    },
    {
        ID: 4,
        PATH: '/questions',
        LABEL: 'Quiz',
    },
    {
        ID: 5,
        PATH: '/inventory',
        LABEL: 'Inventory',
    },
]