import { v4 as uuidv4 } from 'uuid';
import vinyl from './assets/Vinyl.png';
import makzo from './assets/makzo-album.jpg';
import forestLore from './assets/forest-lore.jpg';
import homeCourt from './assets/home-coming.jpg';
import reflection from './assets/reflection-album.jpg';
import lax from './assets/Tfle-album.jpg';
import directions from './assets/directions-album.jpg';
import essentials from './assets/essentials-album.jpg';
import sleepyFish from './assets/sleepy-fish.jpg';
import philanthrope from './assets/philanthrope.jpg';

const chillhop = () => {
    return [        
        {
            id: uuidv4(),
            name: "Seascape",
            artist: "Makzo",
            vinyl: `${vinyl}`,
            cover: `${makzo}`,                                    
            color: ['#E68670', '#38508F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11773'
        },
        {
            id: uuidv4(),
            name: "Oasis",
            artist: "Makzo",
            vinyl: `${vinyl}`,
            cover: `${makzo}`,            
            color: ['#E68670', '#38508F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11768'
        },        
        {
            id: uuidv4(),
            name: "Kinsfolk",
            artist: "Aarigod",
            vinyl: `${vinyl}`,
            cover: `${forestLore}`,            
            color: ['#9CBA64', '#4E3D2A'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997'
        },
        {
            id: uuidv4(),
            name: "Maple",
            artist: "Arbour, Aarigod",
            vinyl: `${vinyl}`,
            cover: `${forestLore}`,            
            color: ['#9CBA64', '#4E3D2A'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=13015'
        },
        {
            id: uuidv4(),
            name: "Home Court",
            artist: "Blue Wednesday, Shopan",
            vinyl: `${vinyl}`,
            cover: `${homeCourt}`,            
            color: ['#FEBCAC', '#3D1919'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11233'
        },
        {
            id: uuidv4(),
            name: "Keep Going",
            artist: "Swørn",
            vinyl: `${vinyl}`,
            cover: `${reflection}`,            
            color: ['#E7B5B5', '#834A81'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222'
        },
        {
            id: uuidv4(),
            name: "Lax Incense",
            artist: "Mama Aiuto, Daphné",
            vinyl: `${vinyl}`,
            cover: `${lax}`,            
            color: ['#458390', '#703031'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125'
        },
        {
            id: uuidv4(),
            name: "Déjà Vu",
            artist: "Blue Wednesday, Shopan",
            vinyl: `${vinyl}`,
            cover: `${directions}`,            
            color: ['#D8A1C9', '#5C6DC0'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11229'
        },
        {
            id: uuidv4(),
            name: "Belly Breathing",
            artist: "Birocratic",
            vinyl: `${vinyl}`,
            cover: `${essentials}`,            
            color: ['#7DCBB3', '#DD8C8E'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8675'
        },        
        {
            id: uuidv4(),
            name: "Woodpecker",
            artist: "Sleepy Fish",
            vinyl: `${vinyl}`,
            cover: `${sleepyFish}`,            
            color: ['#904C30', '#369EB7'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10033'
        },
        {
            id: uuidv4(),
            name: "Wildlife",
            artist: "Philanthrope",
            vinyl: `${vinyl}`,
            cover: `${philanthrope}`,            
            color: ['#E58762', '#454B2D'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10263'
        },
        {
            id: uuidv4(),
            name: "Serendipity",
            artist: "Philanthrope, The Field Tapes",
            vinyl: `${vinyl}`,
            cover: `${philanthrope}`,             
            color: ['#E58762', '#454B2D'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10249'
        }        
    ]
};

export default chillhop;
