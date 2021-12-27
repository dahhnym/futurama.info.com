export const API_ENDPOINT = 'https://api.sampleapis.com/futurama/';
export const CASTIMAGE_ENDPOINT = 'https://m.media-amazon.com/images/M/'
export const HOMEPAGE_IMAGE_URL = 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/76640126_10157377205601620_4399745411187736576_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=_xT0nBYFSb4AX_2IEJ9&_nc_ht=scontent-ssn1-1.xx&oh=00_AT8Gx00Yifm0svSK7WbeHLXHXvxH4KbQXttiN1uCsa9ZcQ&oe=61F018C5';

export const MEDIA_QUERY_ENDPOINT = {
    MOBILE: '640px',
    TABLET: '1280px',
    LAPTOP: '1580px',
    DESKTOP: '1920px',
    LARGE: '2560px'
  }

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

export const CASTIMAGE_ROUTES = [
    {
        PATH: 'MV5BMTYxMTE5OTEzNF5BMl5BanBnXkFtZTcwNzUxOTA4MQ@@._V1_UY317_CR76,0,214,317_AL_.jpg',
        LABEL: 'Billy West'
    },
    {
        PATH: 'MV5BNDU0ODA0NjMzMF5BMl5BanBnXkFtZTcwMjYyMTk3MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        LABEL: 'Katey Sagal'
    },
    {
        PATH: 'MV5BMzI2NTk1MzYxOV5BMl5BanBnXkFtZTcwMDE2MDQ4Nw@@._V1_UY317_CR9,0,214,317_AL_.jpg',
        LABEL: 'John DiMaggio'
    },
    {
        PATH: 'MV5BMTQxMTQ1NzY5N15BMl5BanBnXkFtZTcwMDY5NDUwOA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        LABEL: 'Tress MacNeille'
    },
    {
        PATH: 'MV5BMjU5ZWU2YzItZDU5Ny00NmFiLTljY2UtMmQyMDBjM2FkMjJjXkEyXkFqcGdeQXVyMjM2NTI3MA@@._V1_UY317_CR31,0,214,317_AL_.jpg',
        LABEL: 'Phil LaMarr'
    },
    {
        PATH: 'MV5BZjdhYTVjN2MtNDcyZC00MzRhLWJjNTgtZWQ3NzZkOTFhZGYwXkEyXkFqcGdeQXVyNDY2MDU4ODA@._V1_UX214_CR0,0,214,317_AL_.jpg',
        LABEL: 'Lauren Tom'
    },
    {
        PATH: 'MV5BMmI2N2FlYzEtMzEyMi00NWQ1LTk0MjYtNzI2MGRjMmYxZDM2XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX667_.jpg',
        LABEL: 'Maurice LaMarche'
    },
    {
        PATH: 'MV5BMTQ0NDQ2ODY5OV5BMl5BanBnXkFtZTYwMTQxOTgy._V1_UY317_CR9,0,214,317_AL_.jpg',
        LABEL: 'David Herman'
    },
    {
        PATH: 'MV5BMGFmNGMzNzItMDVkNy00ZmU3LThhNjAtMWJmYjUwMmFlZjE4XkEyXkFqcGdeQXVyMTMzMTM4Mjg0._V1_UY317_CR9,0,214,317_AL_.jpg',
        LABEL: 'Kath Soucie'
    },
    {
        PATH: 'MV5BMjM2MzU2ODYxMV5BMl5BanBnXkFtZTgwMzQ3MjcwMjE@._V1_UY317_CR12,0,214,317_AL_.jpg',
        LABEL: 'Frank Welker'
    },
    {
        PATH: 'MV5BMTYwNTk1NTA3Nl5BMl5BanBnXkFtZTYwNTAyMTM1._V1_UY317_CR22,0,214,317_AL_.jpg',
        LABEL: 'Dawnn Lewis'
    },
    {
        PATH: 'MV5BMTU3MzkzNDI0NV5BMl5BanBnXkFtZTYwMTMyNzE3._V1_UX214_CR0,0,214,317_AL_.jpg',
        LABEL: 'Tom Kenny'
    },
    {
        PATH: 'MV5BMjAyNDY5NDEwOV5BMl5BanBnXkFtZTcwMjY0ODYyMQ@@._V1_UY317_CR6,0,214,317_AL_.jpg',
        LABEL: 'Dan Castellaneta'
    },
    {
        PATH: 'MV5BNDU4MDUwMTAxOV5BMl5BanBnXkFtZTgwNjEzOTU4NjE@._V1_UY317_CR12,0,214,317_AL_.jpg',
        LABEL: 'George Takei'
    },
    {
        PATH: 'MV5BMjA3OTAxODMyNF5BMl5BanBnXkFtZTgwNDcwMTY3MTE@._V1_UX214_CR0,0,214,317_AL_.jpg',
        LABEL: 'Phil Hendrie'
    },

]