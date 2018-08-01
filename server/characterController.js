let characters = [
    {
        name: 'Luke Skywalker',
        skin_color: 'fair',
        gender: 'male',
        eye_color: 'blue',
        id: 1
    },
    {
        name: 'C-3PO',
        skin_color: 'gold',
        gender: 'n/a',
        eye_color: 'yellow',
        id: 2
    },
    {
        name: 'Darth Vader',
        skin_color: 'white',
        gender: 'male',
        eye_color: 'yellow',
        id: 3
    },
    {
        name: 'Leia Organa',
        skin_color: 'light',
        gender: 'female',
        eye_color: 'brown',
        id: 4
    },
    {
        name: 'Obi-Wan Kenobi',
        skin_color: 'fair',
        gender: 'male',
        eye_color: 'blue-gray',
        id: 5
    },
    {
        name: 'Biggs Darklighter',
        skin_color: 'light',
        gender: 'male',
        eye_color: 'brown',
        id: 6
    }
]

module.exports = {
    getCharacters: (req, res) => {
       setTimeout(() => {
        res.status(200).send(characters)
       }, 5000)
    }
}