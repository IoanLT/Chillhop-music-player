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
            color: ['hsl(48.1,97.6%,67.5%)', 'hsl(224.1,39%,43.7%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11773'
        },
        {
            id: uuidv4(),
            name: "Oasis",
            artist: "Makzo",
            vinyl: `${vinyl}`,
            cover: `${makzo}`,            
            color: ['hsl(48.1,97.6%,67.5%)', 'hsl(224.1,39%,43.7%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11768'
        },        
        {
            id: uuidv4(),
            name: "Kinsfolk",
            artist: "Aarigod",
            vinyl: `${vinyl}`,
            cover: `${forestLore}`,            
            color: ['hsl(82.3,74.6%,75.3%)', 'hsl(36.9,31.7%,16.1%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997'
        },
        {
            id: uuidv4(),
            name: "Maple",
            artist: "Arbour, Aarigod",
            vinyl: `${vinyl}`,
            cover: `${forestLore}`,            
            color: ['hsl(82.3,74.6%,75.3%)', 'hsl(36.9,31.7%,16.1%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=13015'
        },
        {
            id: uuidv4(),
            name: "Home Court",
            artist: "Blue Wednesday, Shopan",
            vinyl: `${vinyl}`,
            cover: `${homeCourt}`,            
            color: ['hsl(31,95.5%,90%)', 'hsl(13.7,59.4%,26.1%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11233'
        },
        {
            id: uuidv4(),
            name: "Keep Going",
            artist: "Swørn",
            vinyl: `${vinyl}`,
            cover: `${reflection}`,            
            color: ['hsl(356.4,48.1%,90%)', 'hsl(307.6,40%,23.7%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222'
        },
        {
            id: uuidv4(),
            name: "Lax Incense",
            artist: "Mama Aiuto, Daphné",
            vinyl: `${vinyl}`,
            cover: `${lax}`,            
            color: ['hsl(191.5,35.6%,80%)', 'hsl(10.1,75%,20%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125'
        },
        {
            id: uuidv4(),
            name: "Déjà Vu",
            artist: "Blue Wednesday, Shopan",
            vinyl: `${vinyl}`,
            cover: `${directions}`,            
            color: ['hsl(316.4,40.7%,80%)', 'hsl(234.1,25.2%,40%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11229'
        },
        {
            id: uuidv4(),
            name: "Belly Breathing",
            artist: "Birocratic",
            vinyl: `${vinyl}`,
            cover: `${essentials}`,            
            color: ['hsl(161.5,42.9%,75%)', 'hsl(358.5,56.2%,71.4%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8675'
        },        
        {
            id: uuidv4(),
            name: "Woodpecker",
            artist: "Sleepy Fish",
            vinyl: `${vinyl}`,
            cover: `${sleepyFish}`,            
            color: ['hsl(45.8,51.4%,85.5%)', 'hsl(197.7,58.3%,32%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10033'
        },
        {
            id: uuidv4(),
            name: "Wildlife",
            artist: "Philanthrope",
            vinyl: `${vinyl}`,
            cover: `${philanthrope}`,            
            color: ['hsl(16.7,57.8%,81%)', 'hsl(73.8,23.2%,22%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10263'
        },
        {
            id: uuidv4(),
            name: "Serendipity",
            artist: "Philanthrope, The Field Tapes",
            vinyl: `${vinyl}`,
            cover: `${philanthrope}`,             
            color: ['hsl(16.7,57.8%,81%)', 'hsl(73.8,23.2%,22%)'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10249'
        }        
    ]
};

export default chillhop;
