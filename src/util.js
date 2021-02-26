import { v4 as uuidv4 } from 'uuid';

const chillhop = () => {
    return [
        {
            id: uuidv4(),
            name: "Belly Breathing",
            artist: "Birocratic",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
            active: false,
            color: ['#7DCBB3', '#6E8DA1'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8675'
        },
        {
            id: uuidv4(),
            name: "Kinsfolk",
            artist: "Aarigod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            active: false,
            color: ['#617949', '#4C3C29'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997'
        },
        {
            id: uuidv4(),
            name: "Maple",
            artist: "Arbour, Aarigod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            active: false,
            color: ['#617949', '#4C3C29'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=13015'
        },
        {
            id: uuidv4(),
            name: "Home Court",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
            active: false,
            color: ['#624732', '#0A080D'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11233'
        },
        {
            id: uuidv4(),
            name: "Peninsula",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
            active: false,
            color: ['#624732', '#0A080D'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10556'
        },
        {
            id: uuidv4(),
            name: "Lax Incense",
            artist: "Mama Aiuto, Daphné",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            active: false,
            color: ['#20370D', '#330C0C'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125'
        },
        {
            id: uuidv4(),
            name: "Déjà Vu",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            active: false,
            color: ['#8E719D', '#73587C'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11229'
        }
    ]
};

export default chillhop;
