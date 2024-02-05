export type UserData = {
    userId: number;
    username: string;
    firstName: string;
    lastName: string;
    avatarURL: string;
    email: string;
    bio: string;
    followers: number;
};

export type PostData = {
    id: number;
    title: string;
    description: string;
    date: string;
    tags: string[];
    likes: number;
    comments: number;
    imageURL: string;
    userId: number;
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLikes() {
    return Math.random() < 0.5 ? getRandomNumber(0, 1000) : getRandomNumber(1000, 50_000);
}

function generateComments() {
    return Math.random() < 0.75 ? getRandomNumber(0, 500) : getRandomNumber(500, 5_000);
}

function getRandomDate(): Date {
    const now = new Date();
    const randomValue = Math.random();
    let randomDate: Date;

    if (randomValue < 0.2) {
        // 20% chance from now to an hour ago
        const randomMilliseconds = Math.random() * 60 * 60 * 1000; // 1 hour in milliseconds
        randomDate = new Date(now.getTime() - randomMilliseconds);
    } else if (randomValue < 0.7) {
        // 50% chance from an hour to a week
        const randomMilliseconds = Math.random() * (6 * 24 * 60 * 60 * 1000); // 6 days in milliseconds
        randomDate = new Date(now.getTime() - randomMilliseconds);
    } else {
        // Rest from a week to years
        const randomDays = Math.random() * 365;
        const randomMilliseconds = randomDays * 24 * 60 * 60 * 1000;
        randomDate = new Date(now.getTime() - randomMilliseconds);
    }

    return randomDate;
}

export const users: UserData[] = [
    {
        userId: 1,
        username: "NatureExplorer",
        firstName: "Alice",
        lastName: "Johnson",
        avatarURL: "https://i.pravatar.cc/300",
        email: "alice.johnson@example.com",
        bio: "Adventurous soul with a deep love for nature. Exploring the wonders of the world and capturing moments along the way.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 2,
        username: "CoffeeLover",
        firstName: "Bob",
        lastName: "Smith",
        avatarURL: "https://i.pravatar.cc/300",
        email: "bob.smith@example.com",
        bio: "Fueling creativity with caffeine. Passionate about the art of brewing and savoring every cup.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 3,
        username: "CodeNinja",
        firstName: "Charlie",
        lastName: "Davis",
        avatarURL: "https://i.pravatar.cc/300",
        email: "charlie.davis@example.com",
        bio: "Mastering the digital realm with lines of code. Coding is not just a skill; it's an art.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 4,
        username: "BeachAdventurer",
        firstName: "Diana",
        lastName: "Miller",
        avatarURL: "https://i.pravatar.cc/300",
        email: "diana.miller@example.com",
        bio: "Chasing sunsets and waves. Beach lover, adventure seeker, and a perpetual dreamer.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 5,
        username: "HomeChef",
        firstName: "Ethan",
        lastName: "Clark",
        avatarURL: "https://i.pravatar.cc/300",
        email: "ethan.clark@example.com",
        bio: "Creating culinary magic in the heart of the kitchen. From spices to flavors, every dish tells a delicious story.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 6,
        username: "MorningHiker",
        firstName: "Fiona",
        lastName: "Williams",
        avatarURL: "https://i.pravatar.cc/300",
        email: "fiona.williams@example.com",
        bio: "Embracing the serenity of dawn on hiking trails. Each step is a journey, and every sunrise is a new beginning.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 7,
        username: "AdventureSeeker",
        firstName: "Gary",
        lastName: "Anderson",
        avatarURL: "",
        email: "gary.anderson@example.com",
        bio: "Exploring the world one adventure at a time. Life is a journey, and I'm here for the ride!",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 8,
        username: "BookWorm",
        firstName: "Helen",
        lastName: "Taylor",
        avatarURL: "https://i.pravatar.cc/300",
        email: "helen.taylor@example.com",
        bio: "Diving into books like it's a bottomless cup of coffee. Words have the power to transport and transform.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 9,
        username: "GlobeTrotter",
        firstName: "Ian",
        lastName: "Johnson",
        avatarURL: "https://i.pravatar.cc/300",
        email: "ian.johnson@example.com",
        bio: "Jet-setting across the globe in pursuit of new cultures, cuisines, and connections. Passport stamps tell my story.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 10,
        username: "TechEnthusiast",
        firstName: "Jessica",
        lastName: "Brown",
        avatarURL: "https://i.pravatar.cc/300",
        email: "jessica.brown@example.com",
        bio: "Drowning in a sea of tech marvels. Code runs through my veins, and innovation fuels my passion.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 11,
        username: "FitnessFanatic",
        firstName: "Kevin",
        lastName: "Martinez",
        avatarURL: "",
        email: "kevin.martinez@example.com",
        bio: "Transforming sweat into success. Fitness isn't just a hobby; it's a lifestyle.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 12,
        username: "ArtLover",
        firstName: "Lily",
        lastName: "Garcia",
        avatarURL: "https://i.pravatar.cc/300",
        email: "lily.garcia@example.com",
        bio: "Brushing life's canvas with a palette of passion. Art is my language, and every stroke tells a story.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 13,
        username: "MountainExplorer",
        firstName: "Mark",
        lastName: "Taylor",
        avatarURL: "https://i.pravatar.cc/300",
        email: "mark.taylor@example.com",
        bio: "Conquering peaks and valleys, because life's greatest adventures happen off the beaten path.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 14,
        username: "YogaEnthusiast",
        firstName: "Natalie",
        lastName: "Smith",
        avatarURL: "https://i.pravatar.cc/300",
        email: "natalie.smith@example.com",
        bio: "Finding balance on and off the mat. Embracing serenity in a chaotic world.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 15,
        username: "GourmetChef",
        firstName: "Oscar",
        lastName: "Johnson",
        avatarURL: "https://i.pravatar.cc/300",
        email: "oscar.johnson@example.com",
        bio: "Turning ingredients into culinary poetry. In my kitchen, every dish tells a delicious tale.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 16,
        username: "TravelBlogger",
        firstName: "Paige",
        lastName: "Davis",
        avatarURL: "",
        email: "paige.davis@example.com",
        bio: "Embarking on a virtual journey through pixels and prose. Every post is a passport stamp to inspiration.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 17,
        username: "WellnessGuru",
        firstName: "Quincy",
        lastName: "Smith",
        avatarURL: "https://i.pravatar.cc/300",
        email: "quincy.smith@example.com",
        bio: "Nourishing mind, body, and soul. Because a well-balanced life is the ultimate wealth.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 18,
        username: "NightSkyWatcher",
        firstName: "Rachel",
        lastName: "Miller",
        avatarURL: "https://i.pravatar.cc/300",
        email: "rachel.miller@example.com",
        bio: "Lost in the cosmos, chasing stars and celestial wonders. In the quiet of the night, I find my solace.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 19,
        username: "AdventurePhotographer",
        firstName: "Samuel",
        lastName: "Clark",
        avatarURL: "https://i.pravatar.cc/300",
        email: "samuel.clark@example.com",
        bio: "Freezing moments in time through the lens. Every click is a journey captured in pixels.",
        followers: getRandomNumber(0, 2_000_000),
    },
    {
        userId: 20,
        username: "GardeningEnthusiast",
        firstName: "Tara",
        lastName: "Williams",
        avatarURL: "https://i.pravatar.cc/300",
        email: "tara.williams@example.com",
        bio: "Planting seeds of joy, one bloom at a time. In the garden, I find tranquility and growth.",
        followers: getRandomNumber(0, 2_000_000),
    },
];

export const posts: PostData[] = [
    {
        id: 1,
        title: "Exploring the Sunset",
        description: "A breathtaking view of the sunset from the mountains.",
        date: getRandomDate().toISOString(),
        tags: ["nature", "sunset", "adventure"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 2,
        title: "Coffee Time ☕",
        description: "Enjoying a cozy afternoon with a cup of coffee.",
        date: getRandomDate().toISOString(),
        tags: ["coffee", "relax", "cozy"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 3,
        title: "Coding Vibes",
        description: "Late-night coding session with ambient lighting.",
        date: getRandomDate().toISOString(),
        tags: ["coding", "tech", "night"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 4,
        title: "Weekend Getaway",
        description: "Relaxing by the beach on a sunny weekend.",
        date: getRandomDate().toISOString(),
        tags: ["beach", "vacation", "sunshine"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 5,
        title: "Homemade Delight",
        description: "Trying out a new recipe in the kitchen.",
        date: getRandomDate().toISOString(),
        tags: ["cooking", "foodie", "homemade"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 6,
        title: "Morning Hike",
        description: "Starting the day with a refreshing hike in the woods.",
        date: getRandomDate().toISOString(),
        tags: ["hiking", "nature", "morning"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 7,
        title: "Artistic Expression",
        description: "Creating a masterpiece with colors and canvas.",
        date: getRandomDate().toISOString(),
        tags: ["art", "creativity", "painting"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 8,
        title: "City Lights",
        description: "Dazzling city lights during a night stroll.",
        date: getRandomDate().toISOString(),
        tags: ["cityscape", "nightlife", "urban"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 9,
        title: "Fitness Journey",
        description: "Pushing the limits at the gym with an intense workout.",
        date: getRandomDate().toISOString(),
        tags: ["fitness", "workout", "health"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 10,
        title: "Sunflower Fields",
        description: "Lost in the beauty of endless sunflower fields.",
        date: getRandomDate().toISOString(),
        tags: ["nature", "flowers", "scenery"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 11,
        title: "Family Picnic",
        description: "Quality time with loved ones in the park.",
        date: getRandomDate().toISOString(),
        tags: ["family", "picnic", "together"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 12,
        title: "Bookworm Corner",
        description: "Cozy reading nook with a favorite book in hand.",
        date: getRandomDate().toISOString(),
        tags: ["reading", "books", "cozy"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 13,
        title: "Snowy Adventures",
        description: "Embracing the winter wonderland with snow activities.",
        date: getRandomDate().toISOString(),
        tags: ["winter", "snow", "adventure"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 14,
        title: "Puppy Love",
        description: "Cuddling with the cutest furry friend in the world.",
        date: getRandomDate().toISOString(),
        tags: ["pets", "dogs", "love"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 15,
        title: "Tech Setup Goals",
        description: "Upgraded my workspace with the latest gadgets.",
        date: getRandomDate().toISOString(),
        tags: ["technology", "workspace", "gadgets"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 16,
        title: "Epic Road Trip",
        description: "Crossing scenic landscapes on an unforgettable road trip.",
        date: getRandomDate().toISOString(),
        tags: ["roadtrip", "adventure", "travel"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 17,
        title: "Gourmet Delights",
        description: "Savoring exquisite dishes at a fine dining restaurant.",
        date: getRandomDate().toISOString(),
        tags: ["foodie", "culinary", "gourmet"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 18,
        title: "Yoga Retreat",
        description: "Finding serenity through yoga in a peaceful retreat.",
        date: getRandomDate().toISOString(),
        tags: ["yoga", "wellness", "retreat"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 19,
        title: "City Skyline at Dusk",
        description: "Admiring the city lights as the sun sets.",
        date: getRandomDate().toISOString(),
        tags: ["cityscape", "sunset", "urban"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 20,
        title: "Mountain Retreat",
        description: "Disconnecting from the world in a cozy mountain cabin.",
        date: getRandomDate().toISOString(),
        tags: ["mountains", "retreat", "nature"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    }, {
        id: 21,
        title: "Sailing into the Horizon",
        description: "Embarking on a sailing adventure, feeling the wind and waves beneath the open sky. The sea stretches endlessly, offering a sense of freedom and tranquility.",
        date: getRandomDate().toISOString(),
        tags: ["sailing", "adventure", "ocean"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 22,
        title: "Magical Forest Stroll",
        description: "Wandering through an enchanted forest, surrounded by towering trees and vibrant foliage. The air is filled with the sweet scent of nature, and every step unveils a new mystery.",
        date: getRandomDate().toISOString(),
        tags: ["nature", "forest", "exploration"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 23,
        title: "Sunset Kayaking",
        description: "Paddling along a serene river as the sun sets, casting warm hues across the water. Each stroke of the paddle feels like a rhythmic dance, creating ripples that mirror the colors of the sky.",
        date: getRandomDate().toISOString(),
        tags: ["kayaking", "sunset", "nature"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 24,
        title: "Artisan Coffee Tasting",
        description: "Indulging in a curated coffee tasting experience, exploring the diverse flavors and aromas of specialty beans. Each sip is a journey into the world of coffee craftsmanship.",
        date: getRandomDate().toISOString(),
        tags: ["coffee", "tasting", "artisan"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 25,
        title: "Vintage Bookstore Find",
        description: "Getting lost in a charming vintage bookstore, discovering hidden literary gems and old tales. The scent of aged paper and the creaking of wooden shelves create a nostalgic atmosphere.",
        date: getRandomDate().toISOString(),
        tags: ["books", "bookstore", "vintage"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 26,
        title: "Tropical Paradise Retreat",
        description: "Escaping to a secluded tropical paradise with pristine beaches and lush greenery. The sound of gentle waves and the touch of soft sand create a perfect backdrop for relaxation.",
        date: getRandomDate().toISOString(),
        tags: ["travel", "retreat", "paradise"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 27,
        title: "Culinary Masterclass",
        description: "Immersing in a culinary masterclass, learning the art of gastronomy from skilled chefs. From knife skills to exquisite plating, every moment is a step toward becoming a culinary maestro.",
        date: getRandomDate().toISOString(),
        tags: ["culinary", "cooking", "masterclass"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 28,
        title: "Sunrise Mountain Hike",
        description: "Conquering a challenging mountain trail as the first light of dawn breaks. The panoramic views from the summit unveil a breathtaking canvas of nature waking up to a new day.",
        date: getRandomDate().toISOString(),
        tags: ["hiking", "sunrise", "mountains"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 29,
        title: "Skydiving Adventure",
        description: "Soaring through the skies, feeling the rush of adrenaline during an exhilarating skydiving adventure. The vast expanse below and the wind in your face create an unforgettable experience.",
        date: getRandomDate().toISOString(),
        tags: ["adventure", "skydiving", "extreme"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 30,
        title: "Cherry Blossom Wonderland",
        description: "Strolling through a mesmerizing cherry blossom garden in full bloom. The delicate petals create a pink canopy overhead, and the air is filled with the sweet fragrance of spring.",
        date: getRandomDate().toISOString(),
        tags: ["nature", "cherryblossoms", "spring"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    }, {
        id: 31,
        title: "Aerial Photography Expedition",
        description: "Taking to the skies for an aerial photography expedition, capturing stunning landscapes and cityscapes from a unique perspective. The world unfolds beneath the lens in breathtaking detail.",
        date: getRandomDate().toISOString(),
        tags: ["photography", "aerial", "expedition"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 32,
        title: "Coastal Bike Ride",
        description: "Cruising along scenic coastal roads on a bike, feeling the cool ocean breeze and hearing the rhythmic crash of waves. Each turn reveals new coastal vistas and picturesque seascapes.",
        date: getRandomDate().toISOString(),
        tags: ["cycling", "coastal", "adventure"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 33,
        title: "Stargazing Night",
        description: "Spending a tranquil night under the stars, away from city lights, and immersed in the beauty of the cosmos. The constellations come alive, creating a magical celestial display.",
        date: getRandomDate().toISOString(),
        tags: ["stargazing", "night", "astronomy"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 34,
        title: "Ancient Ruins Exploration",
        description: "Embarking on an archaeological adventure, exploring ancient ruins and unraveling the mysteries of civilizations long past. Each stone tells a story of history and cultural heritage.",
        date: getRandomDate().toISOString(),
        tags: ["exploration", "history", "archaeology"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 35,
        title: "Farm-to-Table Harvest",
        description: "Participating in a farm-to-table experience, harvesting fresh produce from the fields and enjoying a delicious meal prepared with locally sourced ingredients. Connecting with the essence of sustainable living.",
        date: getRandomDate().toISOString(),
        tags: ["farmtotable", "harvest", "sustainability"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 36,
        title: "Traditional Festive Celebration",
        description: "Immersing in the vibrant colors and traditions of a festive celebration, with lively music, traditional dances, and an array of cultural festivities. Each moment is a celebration of community and heritage.",
        date: getRandomDate().toISOString(),
        tags: ["festive", "culture", "celebration"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 37,
        title: "Oceanfront Yoga Retreat",
        description: "Finding inner peace and rejuvenation in an oceanfront yoga retreat. The rhythmic sound of waves serves as a backdrop to serene yoga sessions, fostering mindfulness and well-being.",
        date: getRandomDate().toISOString(),
        tags: ["yoga", "retreat", "oceanfront"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 38,
        title: "Hot Air Balloon Adventure",
        description: "Soaring high above the landscapes in a hot air balloon, witnessing breathtaking views and enjoying the tranquility of the skies. The world unfolds below, creating a surreal and memorable experience.",
        date: getRandomDate().toISOString(),
        tags: ["adventure", "hotairballoon", "sky"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 39,
        title: "Cultural Street Festival",
        description: "Diving into the heart of a cultural street festival, where vibrant stalls showcase art, music, and diverse cuisines. The lively atmosphere creates a mosaic of cultural expressions and joyful interactions.",
        date: getRandomDate().toISOString(),
        tags: ["culture", "festival", "street"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 40,
        title: "Winter Cabin Retreat",
        description: "Embracing the coziness of a winter cabin retreat, surrounded by snow-covered landscapes. A crackling fireplace, warm blankets, and the serenity of a winter wonderland create the perfect escape.",
        date: getRandomDate().toISOString(),
        tags: ["winter", "cabin", "retreat"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    }, {
        id: 41,
        title: "Epic Mountain Biking",
        description: "Embarking on an epic mountain biking adventure, conquering challenging trails and rugged terrain. The thrill of downhill descents and the physical exertion create an adrenaline-fueled experience.",
        date: getRandomDate().toISOString(),
        tags: ["mountainbiking", "adventure", "outdoors"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 42,
        title: "Mystical Moonlit Beach",
        description: "Strolling along a moonlit beach, where the silvery glow of the moon illuminates the sands and casts enchanting shadows. The rhythmic sound of waves enhances the magical ambiance.",
        date: getRandomDate().toISOString(),
        tags: ["beach", "moonlit", "night"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 43,
        title: "Rural Farm Life",
        description: "Immersing in the simplicity of rural farm life, from tending to crops and animals to enjoying the serene countryside. Each day unfolds with the charm of nature and the warmth of community.",
        date: getRandomDate().toISOString(),
        tags: ["farm", "rurallife", "nature"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 44,
        title: "Glowing Firefly Night",
        description: "Experiencing the enchantment of a night illuminated by fireflies, creating a twinkling spectacle in the darkness. The magical dance of these bioluminescent insects adds a touch of wonder to the evening.",
        date: getRandomDate().toISOString(),
        tags: ["nature", "fireflies", "night"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 45,
        title: "Historic Castle Exploration",
        description: "Delving into the history and grandeur of a historic castle, exploring its majestic halls, towers, and ancient artifacts. The echoes of the past resonate within the stone walls of this architectural marvel.",
        date: getRandomDate().toISOString(),
        tags: ["history", "castle", "exploration"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 46,
        title: "Astrophotography Night",
        description: "Capturing the beauty of the night sky through astrophotography, where distant galaxies, stars, and celestial bodies come to life in stunning detail. Each photograph is a cosmic masterpiece.",
        date: getRandomDate().toISOString(),
        tags: ["astrophotography", "night", "space"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 47,
        title: "Colorful Hot Air Balloon Festival",
        description: "Witnessing a vibrant hot air balloon festival, where the sky is adorned with a kaleidoscope of colors. The serene ascent of balloons creates a picturesque scene against the backdrop of the open sky.",
        date: getRandomDate().toISOString(),
        tags: ["hotairballoon", "festival", "colorful"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 48,
        title: "Culinary Fusion Feast",
        description: "Indulging in a culinary feast that blends flavors from diverse cuisines, creating a harmonious fusion of tastes and aromas. Each dish is a culinary masterpiece that delights the senses.",
        date: getRandomDate().toISOString(),
        tags: ["culinary", "foodie", "fusion"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 49,
        title: "Mindful Meditation Retreat",
        description: "Retreating to a serene location for a mindful meditation experience, finding inner peace and tranquility. The gentle sounds of nature and guided meditation sessions create a rejuvenating escape.",
        date: getRandomDate().toISOString(),
        tags: ["meditation", "retreat", "mindfulness"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
    {
        id: 50,
        title: "Aurora Borealis Spectacle",
        description: "Chasing the elusive Northern Lights and witnessing the breathtaking spectacle of the Aurora Borealis. The dancing colors across the night sky create a mesmerizing display of natural wonder.",
        date: getRandomDate().toISOString(),
        tags: ["auroraborealis", "northernlights", "nature"],
        likes: generateLikes(),
        comments: generateComments(),
        imageURL: `https://picsum.photos/seed/${Math.random() * 99999}/500/300`,
        userId: getRandomNumber(1, 20)
    },
].sort(() => Math.random() - 0.5);

