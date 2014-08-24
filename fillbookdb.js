/**
 * Created by Long on 8/21/2014.
 */
var mongoose = require('mongoose')
    , configDB = require('./config/database.js')
    ;

var Book = require('./app/models/book.js');
mongoose.connect(configDB.url); // connect to our database
var done = 0
data = [
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Half a King",
        "author": "Abercrombie, Joe",
        "amazon": "http://www.amazon.com/Half-King-Joe-Abercrombie-ebook/dp/B00HBQWGYO?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "The Widow's House",
        "author": "Abraham, Daniel",
        "amazon": "http://www.amazon.com/Widows-House-Dagger-Coin-ebook/dp/B00H25FC8G?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "The Game of Thrones",
        "author": "Abraham, Daniel; George RR Martin; Tommy Patterson",
        "series": "Graphic Novel #3",
        "amazon": "http://www.amazon.com/Game-Thrones-Graphic-Novel-Three/dp/0440423236?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Forbidden",
        "author": "Adams, Lori",
        "series": "Soulkeepers #1",
        "amazon": "http://www.amazon.com/Forbidden-The-Soulkeepers-ebook/dp/B00DXKHIJU?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "The Goblin Emperor",
        "author": "Addison, Katherine",
        "amazon": "http://www.amazon.com/Goblin-Emperor-Katherine-Addison/dp/076532699X?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Crave the Night",
        "author": "Adrian, Lara",
        "series": "Midnight Breed #12",
        "amazon": "http://www.amazon.com/Crave-Night-Midnight-Breed-Novel-ebook/dp/B00G8EKY94?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Tempted by Midnight",
        "author": "Adrian, Lara",
        "series": "1001 Dark Nights",
        "amazon": "http://www.amazon.com/Tempted-Midnight-Breed-Novella-Nights-ebook/dp/B00H57X85U?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Infatuate",
        "author": "Agresti, Aimee",
        "series": "Gilded Wings #2 (MMP)",
        "amazon": "http://www.amazon.com/Infatuate-Gilded-Wings-Novel-Book/dp/0544232917?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Silver Mirrors",
        "author": "Aguirre, AA",
        "series": "Apparatus Infernum #2",
        "amazon": "http://www.amazon.com/Silver-Mirrors-Apparatus-Infernum-Novel-ebook/dp/B00FX7LVZ8?tag=lookfwd-20"
    },
    {
        "date": "2014-08-04T04:00:00.000Z",
        "title": "Mortal Danger",
        "author": "Aguirre, Ann",
        "series": "Immortal Games #1",
        "amazon": "http://www.amazon.com/Mortal-Danger-Ann-Aguirre/dp/1250024641?tag=lookfwd-20"
    },
    {
        "date": "2014-09-01T04:00:00.000Z",
        "title": "Havoc",
        "author": "Aguirre, Ann",
        "series": "Dred Chronicles #2"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Bloodshifted",
        "author": "Alexander, Cassi",
        "series": "Edie Spencer",
        "amazon": "http://www.amazon.com/Bloodshifted-Spence-Novel-Cassie-Alexander-ebook/dp/B00HFTZWZM?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Bloodshifted",
        "author": "Alexander, Cassie",
        "series": "Edie Spence",
        "amazon": "http://www.amazon.com/Bloodshifted-Spence-Novel-Cassie-Alexander/dp/1250037956?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Demon Creed",
        "author": "Altenburg, Paula",
        "series": "Demon Outlaws",
        "amazon": "http://www.amazon.com/Demon-Creed-Outlaws-ebook/dp/B00FO79GGS?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Demon Creed",
        "author": "Altenburg, Paula",
        "series": "Demon Outlaws #3",
        "amazon": "http://www.amazon.com/Demon-Creed-Outlaws-ebook/dp/B00FO79GGS?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Dark Between the Stars",
        "author": "Anderson, Kevin",
        "series": "Saga of Shadows",
        "amazon": "http://www.amazon.com/Dark-Between-Stars-Shadows-Trilogy-ebook/dp/B00I1VV3II?tag=lookfwd-20"
    },
    {
        "date": "2014-05-26T04:00:00.000Z",
        "title": "Taming His Tutor",
        "author": "Anderson, Natalie",
        "amazon": "http://www.amazon.com/Taming-His-Tutor-Entangled-Brazen-ebook/dp/B00G8BTS80?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Magic Breaks",
        "author": "Andrews, Ilona",
        "series": "Kate Daniels #7",
        "amazon": "http://www.amazon.com/Magic-Breaks-Daniels-Ilona-Andrews-ebook/dp/B00G3L6JV4?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Burn for Me",
        "author": "Andrews, Ilona",
        "series": "Hidden Legacy #1",
        "amazon": "http://www.amazon.com/Burn-Me-Hidden-Legacy-Novel/dp/0062289233?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Crucible",
        "author": "Angelini, Josephine",
        "series": "Crucible #1"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Goddess",
        "author": "Angelini, Josephine",
        "amazon": "http://www.amazon.com/Goddess-Josephine-Angelini/dp/0062012045?tag=lookfwd-20"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "One Bite Per Night",
        "author": "Ann, Brooklyn",
        "series": "Bite #2",
        "amazon": "http://www.amazon.com/One-Bite-Per-Night-Brooklyn/dp/1492604917?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "A Bite at First Sight",
        "author": "Ann, Brooklyn",
        "series": "Bite #3",
        "amazon": "http://www.amazon.com/Bite-First-Sight-Brooklyn-Ann/dp/1402274505?tag=lookfwd-20"
    },
    {
        "date": "2014-09-04T04:00:00.000Z",
        "title": "Rogues",
        "author": "Anthology - George RR Martin, Neil Gaiman, Gillian Flynn",
        "amazon": "http://www.amazon.com/Rogues-George-R-R-Martin/dp/0345537262?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Acolytes of Cthulhu",
        "author": "Anthology - Neil Gaiman, Jorges Luis Borges, Manly Wade Wellman, and Gustaf Meyrink",
        "amazon": "http://www.amazon.com/Acolytes-Cthulhu-Robert-M-Price-ebook/dp/B00HKXSZ5M?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Cabinet of Curiosities: 40 Tales Brief & Sinister",
        "author": "Anthology - Stefan Bachmann, Katherine Catmull, Claire Legrand, Emma Trevayne",
        "amazon": "http://www.amazon.com/Cabinet-Curiosities-Tales-Brief-Sinister-ebook/dp/B00FJ3ACP6?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Games Creatures Play",
        "author": "Anthology: Charlaine Harris, Seanan McGuire, Brandon Sanderson, and more",
        "amazon": "http://www.amazon.com/Games-Creatures-Play-Charlaine-Harris/dp/0425256871?tag=lookfwd-20"
    },
    {
        "date": "2014-03-17T04:00:00.000Z",
        "title": "Sinful Seconds",
        "author": "Anthology: Elisabeth Naughton. Alexandra Ivy, Cynthia Eden, Laura Wright, Katie Reus, Joan Swan",
        "amazon": "http://www.amazon.com/Sinful-Seconds-Elisabeth-Naughton-ebook/dp/B00FZ5K1Y0?tag=lookfwd-20"
    },
    {
        "date": "2014-05-07T04:00:00.000Z",
        "title": "Magic City: Recent Spells",
        "author": "Anthology: Holly Black, Patricia Briggs, Jim Butcher, Simon R. Green, Carrie Vaughn and more",
        "amazon": "http://www.amazon.com/Magic-City-Recent-Paula-Guran/dp/1607014270?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Darker Edge of Desire: Gothic Tales of Romance",
        "author": "Anthology: Mitzi Szereto, Rachel Caine, Kate Douglas and Kelley Armstrong",
        "amazon": "http://www.amazon.com/Darker-Edge-Desire-Gothic-Romance/dp/1940550009?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Lovecraft's Monsters",
        "author": "Anthology: Neil Gaiman, Elizabeth Bear, Joe Lansdale, Caitlin Kiernan",
        "amazon": "http://www.amazon.com/Lovecrafts-Monsters-Ellen-Datlow/dp/161696121X?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "A Mountain Walked",
        "author": "Anthology: T.E.D. Klein, Caitl�n R. Kiernan, Gemma Files, Lois Gresh, Thomas Ligotti, Patrick McGrath, and many others",
        "amazon": "http://www.amazon.com/Mountain-Walked-H-P-Lovecraft/dp/1613470533?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Chasing Before",
        "author": "Appelhans, Lenore",
        "series": "Memory Chronicles #2",
        "amazon": "http://www.amazon.com/Chasing-Before-Memory-Chronicles-ebook/dp/B005C757OA?tag=lookfwd-20"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "River of Nightmares",
        "author": "Archer, Alex",
        "series": "Rogue Angel",
        "amazon": "http://www.amazon.com/River-Nightmares-Rogue-Angel-Archer-ebook/dp/B00FBZCB4W?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Grendel's Curse",
        "author": "Archer, Alex",
        "series": "Rogue Angel",
        "amazon": "http://www.amazon.com/Grendels-Curse-Rogue-Angel-Archer-ebook/dp/B00GPDUWP4?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "White Heart of Justice",
        "author": "Archer, Jill",
        "series": "Noon Onyx #3",
        "amazon": "http://www.amazon.com/White-Heart-Justice-Noon-Novel/dp/0425257177?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Wicked Temptation",
        "author": "Archer, Zoe",
        "series": "Nemesis, Unlimited #3",
        "amazon": "http://www.amazon.com/Wicked-Temptation-Nemesis-Unlimited-Archer/dp/1250015618?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Stone Cold Touch",
        "author": "Armentrout, Jennifer",
        "series": "Dark Elements #2",
        "amazon": "http://www.amazon.com/Stone-Cold-Touch-Dark-Elements-ebook/dp/B00IPDVGKW?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Don't Look Back",
        "author": "Armentrout, Jennifer L",
        "amazon": "http://www.amazon.com/Dont-Look-Novel-Jennifer-Armentrout/dp/1423175123?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The Lux Series (Obsidian & Onyx)",
        "author": "Armentrout, Jennifer L",
        "series": "Lux",
        "amazon": "http://www.amazon.com/Lux-Obsidian-Onyx-Jennifer-Armentrout/dp/1622664485?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Opposition",
        "author": "Armentrout, Jennifer L",
        "series": "Lux #5",
        "amazon": "http://www.amazon.com/Opposition-Lux-Jennifer-L-Armentrout/dp/1622662644?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Rising",
        "author": "Armstrong, Kelley",
        "series": "Darkest Powers #3 (MMP)",
        "amazon": "http://www.amazon.com/Rising-Darkness-Kelley-Armstrong/dp/006179709X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Sea of Shadows",
        "author": "Armstrong, Kelley",
        "series": "Age of Legends #1",
        "amazon": "http://www.amazon.com/Sea-Shadows-Kelley-Armstrong/dp/0062071246?tag=lookfwd-20"
    },
    {
        "date": "2014-08-19T04:00:00.000Z",
        "title": "Visions",
        "author": "Armstrong, Kelley",
        "series": "Cainsville",
        "amazon": "http://www.amazon.com/Visions-Cainsville-Novel-Kelley-Armstrong-ebook/dp/B00G3L19QY?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Otherworld Nights",
        "author": "Armstrong, Kelley",
        "series": "Women of the Otherworld",
        "amazon": "http://www.amazon.com/Otherworld-Nights-Anthology-Novel-ebook/dp/B00INIXTZO?tag=lookfwd-20"
    },
    {
        "date": "2014-12-01T05:00:00.000Z",
        "title": "Bounty Hunt",
        "author": "Armstrong, Kelley",
        "series": "Pack novella (graphic)"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Odin's Ravens",
        "author": "Armstrong, KL; MA Marr",
        "series": "Blackwell Pages #2",
        "amazon": "http://www.amazon.com/Odins-Ravens-Blackwell-Pages-ebook/dp/B00EXTQTVS?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Nightmare Dilemma",
        "author": "Arnett, Mindee",
        "series": "Arkwell Academy #2",
        "amazon": "http://www.amazon.com/Nightmare-Dilemma-Mindee-Arnett/dp/0765333341?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Mine to Claim",
        "author": "Arthur, AC",
        "series": "Shadow Shifters: Damaged Hearts",
        "amazon": "http://www.amazon.com/Mine-Claim-Shadow-Shifters-Damaged-ebook/dp/B00H0V04EY?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Part of Me",
        "author": "Arthur, AC",
        "series": "Shadow Shifters: Damaged Hearts",
        "amazon": "http://www.amazon.com/Part-Me-Shadow-Shifters-Damaged-ebook/dp/B00H0V05AM?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "Hunger for You",
        "author": "Arthur, AC",
        "series": "Shadow Shifters: Damaged Hearts",
        "amazon": "http://www.amazon.com/Hunger-You-Shadow-Shifters-Damaged-ebook/dp/B00H0UT8VK?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Shifter's Claim",
        "author": "Arthur, AC",
        "series": "Shadow Shifters #4",
        "amazon": "http://www.amazon.com/Shifters-Claim-Shadow-C-Arthur-ebook/dp/B00HY09WRQ?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Circle of Desire",
        "author": "Arthur, Keri",
        "series": "Damask Circle #3",
        "amazon": "http://www.amazon.com/Circle-Desire-Damask-Book/dp/0440246571?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Fire Born",
        "author": "Arthur, Keri",
        "series": "Phoenix #1",
        "amazon": "http://www.amazon.com/Fireborn-Souls-Novel-Keri-Arthur-ebook/dp/B00HDMLU02?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Memory Zero",
        "author": "Arthur, Keri",
        "series": "Spook Squad #1",
        "amazon": "http://www.amazon.com/Memory-Zero-Spook-Squad-1/dp/044024658X?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Generation 18",
        "author": "Arthur, Keri",
        "series": "Spook Squad #2",
        "amazon": "http://www.amazon.com/Generation-18-Spook-Squad-2/dp/0440246598?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Beauty's Beast",
        "author": "Ashley, Amanda"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Feral Heat",
        "author": "Ashley, Jennifer",
        "series": "Shifters Unbound #5.5",
        "amazon": "http://www.amazon.com/Feral-Heat-Shifters-Unbound-ebook/dp/B00AEDDSN4?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Wild Wolf",
        "author": "Ashley, Jennifer",
        "series": "Shifters Unbound #6",
        "amazon": "http://www.amazon.com/Wild-Wolf-Shifters-Unbound-ebook/dp/B00COOFQOU?tag=lookfwd-20"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "Scandal and the Duchess",
        "author": "Ashley, Jennifer",
        "series": "Mackenzies #2",
        "amazon": "http://www.amazon.com/Scandal-Duchess-Mackenzies-Jennifer-Ashley-ebook/dp/B00DGZKJ5C?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Rules for a Proper Governess",
        "author": "Ashley, Jennifer",
        "series": "Mackenzies #3",
        "amazon": "http://www.amazon.com/Proper-Governess-Mackenzies-Jennifer-Ashley/dp/0425266036?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Possessed by a Warrior",
        "author": "Ashwood, Sharon",
        "amazon": "http://www.amazon.com/Possessed-Warrior-Sharon-Ashwood-ebook/dp/B00H5I6QZI?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "The Outlanders",
        "author": "Axler, James",
        "amazon": "http://www.amazon.com/Necropolis-Outlanders-James-Axler-ebook/dp/B00GPDUWOU?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "A Demon to Die For",
        "author": "Ayers, Sidney"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "The Dominion Key",
        "author": "Bacon, Lee",
        "series": "Joshua Dread",
        "amazon": "http://www.amazon.com/Joshua-Dread-Dominion-Lee-Bacon/dp/0385743823?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "The Nameless Hero (MMP)",
        "author": "Bacon, Lee",
        "series": "Joshua Dread",
        "amazon": "http://www.amazon.com/Joshua-Dread-Nameless-Lee-Bacon/dp/0307929973?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "A Terrible Beauty",
        "author": "Baker, Nancy",
        "amazon": "http://www.amazon.com/Terrible-Beauty-Nancy-Baker-ebook/dp/B00EXOT73A?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Dawn's Early Light",
        "author": "Ballantine, Pip; Tee Morris",
        "series": "Ministry of Peculiar Occurrences",
        "amazon": "http://www.amazon.com/Dawns-Early-Light-Ministry-Occurrences/dp/0425267318?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Immortal Hunter",
        "author": "Ballenger, Kait",
        "series": "Execution Underground #2",
        "amazon": "http://www.amazon.com/Immortal-Hunter-Execution-Underground-Ballenger-ebook/dp/B00GPDYLKG?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Of Triton",
        "author": "Banks, Anna",
        "series": "Of Poseidon #2 (MMP)",
        "amazon": "http://www.amazon.com/Triton-Anna-Banks/dp/1250044316?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Of Neptune",
        "author": "Banks, Anna",
        "series": "Of Poseidon #3",
        "amazon": "http://www.amazon.com/Neptune-Anna-Banks/dp/1250039606?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Exiled",
        "author": "Banks, Maya",
        "amazon": "http://www.amazon.com/Exiled-Novella-ebook/dp/B00C5R7A9U?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Nauti Enchantress",
        "author": "Banks, Maya",
        "amazon": "http://www.amazon.com/Nauti-Enchantress-Girls-ebook/dp/B00BDQ3AAW?tag=literscap-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Little Knife",
        "author": "Bardugo, Leigh",
        "amazon": "http://www.amazon.com/Little-Knife-Original-Leigh-Bardugo-ebook/dp/B00IHCBE08?tag=lookfwd-20"
    },
    {
        "date": "2014-06-06T04:00:00.000Z",
        "title": "Siege and Storm",
        "author": "Bardugo, Leigh",
        "series": "Grisha #2 (MMP)",
        "amazon": "http://www.amazon.com/Siege-Storm-Grisha-Trilogy-Shadow/dp/125004443X?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Ruin and Rising",
        "author": "Bardugo, Leigh",
        "series": "Grisha #3",
        "amazon": "http://www.amazon.com/Rising-Grisha-Trilogy-Leigh-Bardugo-ebook/dp/B00GVRVEG0?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "The Naturals",
        "author": "Barnes, Jennifer Lynn",
        "series": "The Naturals #1 - MMP",
        "amazon": "http://www.amazon.com/Naturals-Jennifer-Lynn-Barnes/dp/1423168313?tag=lookfwd-20"
    },
    {
        "date": "2014-11-01T04:00:00.000Z",
        "title": "Killer Instinct",
        "author": "Barnes, Jennifer Lynn",
        "series": "The Naturals #2",
        "amazon": "http://www.amazon.com/Killer-Instinct-Naturals-Jennifer-Barnes/dp/1423168321?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "A Matter of Time",
        "author": "Basso, Lisa",
        "series": "Angel Sight #3"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "A Slither of Hope",
        "author": "Basso, Lisa",
        "series": "Angel Sight #2",
        "amazon": "http://www.amazon.com/Slither-Hope-Angel-Sight/dp/193976503X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Steles of the Skies",
        "author": "Bear, Elizabeth",
        "series": "Eternal Sky #3",
        "amazon": "http://www.amazon.com/Steles-Sky-Eternal-Elizabeth-Bear/dp/0765327562?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Spirited",
        "author": "Behre, Mary",
        "series": "Tidewater #1",
        "amazon": "http://www.amazon.com/Spirited-Tidewater-Novel-Mary-Behre-ebook/dp/B00EOAS0BS?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Guarded",
        "author": "Behre, Mary",
        "series": "Tidewater #2",
        "amazon": "http://www.amazon.com/Guarded-Tidewater-Novel-Mary-Behre/dp/0425268624?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Year of the Demon",
        "author": "Bein, Steve",
        "series": "MMP",
        "amazon": "http://www.amazon.com/Year-Demon-Novel-Fated-Blades/dp/0451465202?tag=lookfwd-20"
    },
    {
        "date": "2014-12-04T05:00:00.000Z",
        "title": "Disciple of the Wind",
        "author": "Bein, Steve",
        "series": "Fated Blades",
        "amazon": "http://www.amazon.com/Disciple-Wind-Novel-Fated-Blades/dp/0451470206?tag=lookfwd-20"
    },
    {
        "date": "2014-04-07T04:00:00.000Z",
        "title": "Unnatural",
        "author": "Belfield, JA",
        "series": "Holloway Pack #4"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Banishing the Dark",
        "author": "Bennett, Jenn",
        "series": "Arcadia Bell",
        "amazon": "http://www.amazon.com/Banishing-Dark-The-Arcadia-Bell/dp/1451695098?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Grim Shadows",
        "author": "Bennett, Jenn",
        "series": "Roaring Twenties #2",
        "amazon": "http://www.amazon.com/Grim-Shadows-Jenn-Bennett-ebook/dp/B00GMWZHQM?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Covenant",
        "author": "Benulis, Sabrina",
        "series": "Books of Raziel #2",
        "amazon": "http://www.amazon.com/Covenant-Books-Raziel-ebook/dp/B00BATEIDK?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Dust & Light",
        "author": "Berg, Carol",
        "series": "Santuary",
        "amazon": "http://www.amazon.com/Dust-Light-Sanctuary-Carol-Berg-ebook/dp/B00G3L17ES?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "The Rising King",
        "author": "Berkeley, Shea",
        "series": "Keepers of Life #3",
        "amazon": "http://www.amazon.com/Rising-King-Keepers-Life-Book/dp/1622661508?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Birmingham, John",
        "series": "Dave Hooper #1",
        "amazon": "http://www.amazon.com/David-Hooper-1-John-Birmingham/dp/0345539877?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Written in Red",
        "author": "Bishop, Anne",
        "series": "The Others #1 (MMP)",
        "amazon": "http://www.amazon.com/Written-Red-Others-Anne-Bishop/dp/0451417909?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Murder of Crows",
        "author": "Bishop, Anne",
        "series": "the Others #2",
        "amazon": "http://www.amazon.com/Murder-Crows-Others-Anne-Bishop/dp/0451465261?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Cloak of the Light",
        "author": "Black, Chuck",
        "series": "Wars of the Realm #1",
        "amazon": "http://www.amazon.com/Cloak-Light-Wars-Realm-Book/dp/1601425023?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Black, Holly",
        "series": "Coldtown #2"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Doll Bones",
        "author": "Black, Holly",
        "series": "(MMP)",
        "amazon": "http://www.amazon.com/Doll-Bones-Holly-Black/dp/1416963995?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "The Coldest Girl In Coldtown",
        "author": "Black, Holly",
        "series": "Coldtown #1 (MMP)",
        "amazon": "http://www.amazon.com/Coldest-Girl-Coldtown-Holly-Black/dp/0316213098?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Iron Trial",
        "author": "Black, Holly; Cassandra Clare",
        "series": "Magisterium #1",
        "amazon": "http://www.amazon.com/Iron-Trial-Book-Magisterium/dp/0545522250?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Resistence",
        "author": "Black, Jenna",
        "series": "Replica #2",
        "amazon": "http://www.amazon.com/Resistance-Jenna-Black/dp/0765333724?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Secrets in the Shadows",
        "author": "Black, Jenna",
        "series": "Guardians of the Night #2",
        "amazon": "http://www.amazon.com/Secrets-Shadows-Guardians-Night-Jenna/dp/0765338017?tag=lookfwd-20"
    },
    {
        "date": "2014-07-22T04:00:00.000Z",
        "title": "Shadows on The Soul",
        "author": "Black, Jenna",
        "series": "Guardians of the Night",
        "amazon": "http://www.amazon.com/Shadows-Guardians-Night-Jenna-Black/dp/0765338025?tag=lookfwd-20"
    },
    {
        "date": "2014-11-11T05:00:00.000Z",
        "title": "Revolution",
        "author": "Black, Jenna",
        "series": "Replica #3",
        "amazon": "http://www.amazon.com/Revolution-Replica-Jenna-Black/dp/0765333732?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Black, Shayla",
        "series": "Wicked Lovers #9"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Theirs to Cherish",
        "author": "Black, Shayla",
        "series": "Wicked Lovers #8",
        "amazon": "http://www.amazon.com/Theirs-Cherish-Wicked-Lovers-Novel/dp/0425251233?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Their Virgin Secterary",
        "author": "Black, Shayla; Lexi Blake",
        "series": "Masters of M�nage #6",
        "amazon": "http://www.amazon.com/Their-Virgin-Secretary-Masters-M%C3%A9nage-ebook/dp/B00GRCALV8?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Midnight Thief",
        "author": "Blackburne, Livia",
        "amazon": "http://www.amazon.com/Midnight-Thief-Livia-Blackburne-ebook/dp/B00HVMAS5M?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Wickedly Magical",
        "author": "Blake, Deborah",
        "series": "Baba Yaga prequel",
        "amazon": "http://www.amazon.com/Wickedly-Magical-Deborah-Blake-ebook/dp/B00FX7UK0K?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Wickedly Dangerous",
        "author": "Blake, Deborah",
        "series": "Baba Yaga #1",
        "amazon": "http://www.amazon.com/Wickedly-Dangerous-Baba-Yaga-Novel/dp/0425272923?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Shadows",
        "author": "Blake, EC",
        "amazon": "http://www.amazon.com/Shadows-E-C-Blake-ebook/dp/B00G3L6JNM?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Aristeia",
        "author": "Blake, Kendare",
        "series": "Goddess War #2"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Girl of Nightmares",
        "author": "Blake, Kendare",
        "series": "Anna #2 (MMP)",
        "amazon": "http://www.amazon.com/Girl-Nightmares-Kendare-Blake/dp/0765328682?tag=lookfwd-20"
    },
    {
        "date": "2014-08-14T04:00:00.000Z",
        "title": "Antigoddess",
        "author": "Blake, Kendare",
        "series": "(MMP)",
        "amazon": "http://www.amazon.com/Antigoddess-Goddess-War-Kendare-Blake/dp/0765334461?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Mortal Gods",
        "author": "Blake, Kendare",
        "amazon": "http://www.amazon.com/Mortal-Gods-Goddess-Kendare-Blake/dp/0765334445?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Steal the Sun",
        "author": "Blake, Lexi",
        "amazon": "http://www.amazon.com/Steal-Sun-Thieves-Lexi-Blake-ebook/dp/B00HSNMKF0?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Island of Excess Love",
        "author": "Block, Francesca Lia",
        "amazon": "http://www.amazon.com/Island-Excess-Love-Francesca-Block/dp/0805096310?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "Against the Dawn",
        "author": "Bonilla, Amanda",
        "series": "Shaede Assassin #4"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Healing Stone",
        "author": "Booher, Brock",
        "amazon": "http://www.amazon.com/Healing-Stone-Brock-Booher/dp/146211394X?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Taken",
        "author": "Bowman, Erin",
        "series": "Taken #1",
        "amazon": "http://www.amazon.com/Taken-Erin-Bowman/dp/0062117270?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Frozen",
        "author": "Bowman, Erin",
        "series": "Taken #2",
        "amazon": "http://www.amazon.com/Frozen-Erin-Bowman/dp/0062117297?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Hearts of Chaos",
        "author": "Brady, Kira",
        "series": "Deadglass #3",
        "amazon": "http://www.amazon.com/Hearts-Chaos-Deadglass-Kira-Brady/dp/1420124587?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "The Here and Now",
        "author": "Brashares, Ann",
        "amazon": "http://www.amazon.com/Here-Now-Ann-Brashares/dp/080412132X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Lair of Dreams",
        "author": "Bray, Libba",
        "series": "Diviners #2",
        "amazon": "http://www.amazon.com/Lair-Dreams-A-Diviners-Novel/dp/0316126047?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Tropic of Serpents",
        "author": "Brennan, Marie",
        "series": "Memoir by Lady Trent #2",
        "amazon": "http://www.amazon.com/Tropic-Serpents-Natural-History-Dragons/dp/0765331977?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Untold",
        "author": "Brennan, Sarah Rees",
        "series": "Lynburn Legacy #2",
        "amazon": "http://www.amazon.com/Untold-Sarah-Rees-Brennan-ebook/dp/B00C4BA3WS?tag=lookfwd-20"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "Unmade",
        "author": "Brennan, Sarah Rees",
        "series": "Lynburn Legacy #3",
        "amazon": "http://www.amazon.com/Unmade-Lynburn-Legacy-Book-3/dp/0375870431?tag=lookfwd-20"
    },
    {
        "date": "2014-03-20T04:00:00.000Z",
        "title": "Ninth Grade Slays",
        "author": "Brewer, Heather",
        "series": "Vlad Tod #2",
        "amazon": "http://www.amazon.com/Ninth-Grade-Slays-Chronicles-Vladimir/dp/0803738129?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Night Broken",
        "author": "Briggs, Patricia",
        "series": "Mercy Thompson #8",
        "amazon": "http://www.amazon.com/Night-Broken-Mercy-Thompson-Novel/dp/042525674X?tag=lookfwd-20"
    },
    {
        "date": "2014-10-01T04:00:00.000Z",
        "title": "Night Sky",
        "author": "Brockmann, Suzanne; Melanie Brockmann",
        "series": "Night Sky #1"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Brook, Meljean",
        "series": "Iron Seas #5"
    },
    {
        "date": 2014,
        "title": "Salvage",
        "author": "Brook, Meljean",
        "series": "Iron Seas novella"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Brook, Meljean",
        "series": "Scarsdale Novella"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "The Kraken King and the Scribbling Spinster",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 1",
        "amazon": "http://www.amazon.com/Kraken-King-Part-Scribbling-Spinster-ebook/dp/B00HZ1E530?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "The Kraken King and the Abominable Worm",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 2",
        "amazon": "http://www.amazon.com/Kraken-King-Part-II-Abominable-ebook/dp/B00HZ1E724?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "The Kraken King and the Fox's Den",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 3",
        "amazon": "http://www.amazon.com/Kraken-King-Part-III-Novel-ebook/dp/B00HZ1E4VI?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The Kraken King and the Inevitable Abduction",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 4",
        "amazon": "http://www.amazon.com/Kraken-King-Part-Inevitable-Abduction-ebook/dp/B00HZ1E68E?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "The Kraken King and the Iron Heart",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 5",
        "amazon": "http://www.amazon.com/Kraken-King-Part-Heart-Novel-ebook/dp/B00HZ1E67K?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "The Kraken King and the Crumbling Walls",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 6",
        "amazon": "http://www.amazon.com/Kraken-King-Part-VI-Crumbling-ebook/dp/B00HZ1EE2M?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Kraken King and the Empress's Eyes",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 7",
        "amazon": "http://www.amazon.com/Kraken-King-Part-VII-Empress-ebook/dp/B00HZ1E4CC?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Kraken King and the Greatest Adventure",
        "author": "Brook, Meljean",
        "series": "The Kraken King Pt 8",
        "amazon": "http://www.amazon.com/Kraken-King-Part-VIII-Adventure-ebook/dp/B00HZ1E544?tag=lookfwd-20"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "The Kraken King",
        "author": "Brook, Meljean",
        "series": "Iron Seas #4"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Rebel",
        "author": "Brooks, Cheryl",
        "series": "CatStar Chronicles",
        "amazon": "http://www.amazon.com/Rebel-The-Cat-Star-Chronicles/dp/1402285167?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Last Light",
        "author": "Brown, Tara",
        "amazon": "http://www.amazon.com/Last-Light-Tara-Brown-ebook/dp/B00HHY8YKU?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Incrementalists",
        "author": "Brust, Steven; Skyler White",
        "amazon": "http://www.amazon.com/Incrementalists-Steven-Brust/dp/0765334232?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Nightmare Ink",
        "author": "Burnard, Marcella",
        "series": "Living Ink",
        "amazon": "http://www.amazon.com/Nightmare-Ink-Living-Novel-ebook/dp/B00CLFCP14?tag=lookfwd-20"
    },
    {
        "date": "2014-11-18T05:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Burnard, Marcella",
        "amazon": "http://www.amazon.com/BurnardUnt2-11-Marcella-Burnard-ebook/dp/B00CLFCOZG?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Butcher, Jim",
        "series": "Cinder Spires #2"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Skin Game",
        "author": "Butcher, Jim",
        "series": "Dresden Files #15",
        "amazon": "http://www.amazon.com/Skin-Game-Novel-Dresden-Files/dp/0451464397?tag=lookfwd-20"
    },
    {
        "date": "2014-08-07T04:00:00.000Z",
        "title": "The Aeronaut's Windlass",
        "author": "Butcher, Jim",
        "series": "Cinder Spires #1"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Willing Sacrifice",
        "author": "Butcher, Shannon",
        "series": "Sentinel Wars",
        "amazon": "http://www.amazon.com/Willing-Sacrifice-Sentinel-Wars-ebook/dp/B00EOARAAK?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Fury of Obsession",
        "author": "Callahan, Coreene",
        "series": "Dragonfury #5"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "Knight Avenged",
        "author": "Callahan, Coreene",
        "series": "Circle of Seven #2",
        "amazon": "http://www.amazon.com/Knight-Avenged-2-ebook/dp/B008H5VWVG?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Evernight",
        "author": "Callihan, Kristen",
        "series": "Darkest London #5",
        "amazon": "http://www.amazon.com/Evernight-Darkest-London-Book-5-ebook/dp/B00H25FLSW?tag=lookfwd-20"
    },
    {
        "date": "2014-07-21T04:00:00.000Z",
        "title": "The Seventh Miss Hatfield",
        "author": "Caltabiano, Anna",
        "series": "Hatfield #1"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Pack of Strays",
        "author": "Cameron, Dana",
        "series": "Fangborn #2",
        "amazon": "http://www.amazon.com/Pack-Strays-Fangborn-Novel-Cameron-ebook/dp/B00G3NAPNU?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Thief's Magic",
        "author": "Canavan, Trudi",
        "series": "Millennium's Rule",
        "amazon": "http://www.amazon.com/Thiefs-Magic-Millenniums-Trudi-Canavan-ebook/dp/B00EXTQV2A?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Searching For SKy",
        "author": "Cantor, Jillian",
        "amazon": "http://www.amazon.com/Searching-Sky-Jillian-Cantor/dp/1619633515?tag=lookfwd-20"
    },
    {
        "date": "2014-10-01T04:00:00.000Z",
        "title": "Poison Fruit",
        "author": "Carey, Jacqueline",
        "series": "Agent of Hel #3"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Queen of the Dark Things",
        "author": "Cargill, C. Robert",
        "series": "#2",
        "amazon": "http://www.amazon.com/Queen-Dark-Things-Robert-Cargill-ebook/dp/B00DB32Q6E?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Red Blooded",
        "author": "Carlson, Amanda",
        "series": "Jessica McClain #4",
        "amazon": "http://www.amazon.com/Red-Blooded-Book-Jessica-McClain-ebook/dp/B00HQ2N0GQ?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Manners & Mutiny",
        "author": "Carriger, Gail",
        "series": "Finishing School #4"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Blameless (re-release)",
        "author": "Carriger, Gail",
        "series": "Parasol Protectorate",
        "amazon": "http://www.amazon.com/Blameless-Parasol-Protectorate-Gail-Carriger/dp/0316401765?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Changeless (re-release)",
        "author": "Carriger, Gail",
        "series": "Parasol Protectorate",
        "amazon": "http://www.amazon.com/Changeless-Parasol-Protectorate-Gail-Carriger/dp/0316401773?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Soulless (re-release)",
        "author": "Carriger, Gail",
        "series": "Parasol Protectorate",
        "amazon": "http://www.amazon.com/Soulless-Parasol-Protectorate-Gail-Carriger/dp/0316402419?tag=lookfwd-20"
    },
    {
        "date": "2014-11-05T05:00:00.000Z",
        "title": "Waistcoats & Weaponry",
        "author": "Carriger, Gail",
        "series": "Finishing School #3",
        "amazon": "http://www.amazon.com/Waistcoats-Weaponry-Finishing-School-Carriger-ebook/dp/B00IRIR8E8?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The One",
        "author": "Cass, Kiera",
        "series": "Selection #3",
        "amazon": "http://www.amazon.com/The-One-ebook/dp/B00FJ2YTLK?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Talk Dirty to Me",
        "author": "Cassidy, Dakota",
        "series": "Talk #1",
        "amazon": "http://www.amazon.com/Talk-Dirty-Me-Dakota-Cassidy/dp/077831619X?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Something to Talk About",
        "author": "Cassidy, Dakota",
        "series": "Talk #2",
        "amazon": "http://www.amazon.com/Something-Talk-About-Dakota-Cassidy/dp/0778316270?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Talking After Midnight",
        "author": "Cassidy, Dakota",
        "series": "Talk #3",
        "amazon": "http://www.amazon.com/Talking-After-Midnight-Dakota-Cassidy/dp/0778316319?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "The Accidental Dragon",
        "author": "Cassidy, Dakota",
        "series": "Accidental Friends #8",
        "amazon": "http://www.amazon.com/Accidental-Dragon-Accidentally-Paranormal-Novel-ebook/dp/B00G3L105E?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Hidden",
        "author": "Cast, PC; Kristin Cast",
        "series": "House of Night #10 (MMP)",
        "amazon": "http://www.amazon.com/Hidden-House-Night-Novel-Novels/dp/1250041740?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Redeemed",
        "author": "Cast, PC; Kristin Cast",
        "series": "House of Night #12",
        "amazon": "http://www.amazon.com/Redeemed-House-Night-Novel-Novels-ebook/dp/B00FUX0BWO?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Sympathy for the Demon",
        "author": "Castle, Kendra Leigh"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "The Clockwork Dagger",
        "author": "Cato, Beth",
        "amazon": "http://www.amazon.com/Clockwork-Dagger-Novel-Beth-Cato-ebook/dp/B00HLIYZ5U?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Dark Serpent",
        "author": "Chan, Kylie",
        "series": "Celestial Battle #1",
        "amazon": "http://www.amazon.com/Dark-Serpent-Celestial-Battle-Trilogy-ebook/dp/B00FJ3CK3I?tag=lookfwd-20"
    },
    {
        "date": "2014-03-20T04:00:00.000Z",
        "title": "Masks",
        "author": "Chance, Karen"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Reap the Wind",
        "author": "Chance, Karen",
        "series": "Cassie Palmer #7"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Inamorata",
        "author": "Chance, Megan",
        "amazon": "http://www.amazon.com/Inamorata-Megan-Chance-ebook/dp/B00H8UTBNC?tag=literescap=20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Dualed",
        "author": "Chapman, Elsie",
        "series": "Dualed #1 (MMP)",
        "amazon": "http://www.amazon.com/Dualed-Elsie-Chapman/dp/0307931552?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Divided",
        "author": "Chapman, Elsie",
        "series": "Dualed #2",
        "amazon": "http://www.amazon.com/Divided-Dualed-Sequel-Elsie-Chapman/dp/0449812952?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Graduation Day",
        "author": "Charbonneau, Joelle",
        "series": "Testing #3",
        "amazon": "http://www.amazon.com/Graduation-Day-The-Testing-ebook/dp/B00E78IFZI?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Kissing with Fangs",
        "author": "Chase, Ashlyn",
        "series": "Flirting with Fangs #3",
        "amazon": "http://www.amazon.com/Kissing-Fangs-Ashlyn-Chase/dp/1402275757?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "The Seat of Magic",
        "author": "Cheney, J. Kathleen",
        "series": "Golden City",
        "amazon": "http://www.amazon.com/Seat-Magic-Novel-Golden-City-ebook/dp/B00GY9SJLI?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Splintegrate",
        "author": "Christian, Deborah Teramis"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "The Burning Dark",
        "author": "Christopher, Adam",
        "amazon": "http://www.amazon.com/Burning-Dark-Adam-Christopher/dp/0765335085?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Mortal Instruments (#1-4)",
        "author": "Clare, Cassandra",
        "series": "Mortal Instruments",
        "amazon": "http://www.amazon.com/Mortal-Instruments-Bones-Fallen-Angels/dp/1481400835?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "City of Lost Souls",
        "author": "Clare, Cassandra",
        "series": "Mortal Instruments #5 (MMP)",
        "amazon": "http://www.amazon.com/City-Lost-Souls-Mortal-Instruments/dp/1442416874?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "City of Heavenly Fire",
        "author": "Clare, Cassandra",
        "series": "Mortal Instruments #6",
        "amazon": "http://www.amazon.com/City-Heavenly-Fire-Mortal-Instruments/dp/1442416890?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "The Bane Chronicles",
        "author": "Clare, Cassandra; Sarah Rees Brennan",
        "amazon": "http://www.amazon.com/Bane-Chronicles-ebook/dp/B00C0CPCRC?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Dark Affair",
        "author": "Claremont, Maire",
        "series": "Mad Passions #3",
        "amazon": "http://www.amazon.com/Dark-Affair-Novel-Mad-Passions/dp/0451418018?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Heart of a Highland Warrior",
        "author": "Clenney, Anita",
        "amazon": "http://www.amazon.com/Heart-Highland-Warrior-Anita-Clenney-ebook/dp/B00FPTJX86?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The Professional",
        "author": "Cole, Kresley",
        "amazon": "http://www.amazon.com/Professional-Kresley-Cole/dp/1476762317?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Dark Skye",
        "author": "Cole, Kresley",
        "series": "Immortals After Dark #14",
        "amazon": "http://www.amazon.com/Dark-Skye-Kresley-Cole-ebook/dp/B00GKKTZZU?tag=lookfwd-20"
    },
    {
        "date": "2014-03-31T04:00:00.000Z",
        "title": "Death's Daughter",
        "author": "Collins, Kathleen",
        "series": "Realm Walker #2"
    },
    {
        "date": 2014,
        "title": "Kill City",
        "author": "Collins, Nancy",
        "series": "Sonja Blue"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Mockingjay",
        "author": "Collins, Suzanne",
        "series": "Hunger Games Movie #3",
        "amazon": "http://www.amazon.com/Mockingjay-Final-Book-Hunger-Games/dp/0545663261?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Running with Wolves",
        "author": "Cooke, Cynthia",
        "amazon": "http://www.amazon.com/Running-Wolves-Harlequin-Nocturne-Cynthia/dp/037388592X?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "The Raven's Shadow",
        "author": "Cooper, Elspeth",
        "amazon": "http://www.amazon.com/Ravens-Shadow-Elspeth-Cooper/dp/0765331675?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "The Vast and Brutal Sea",
        "author": "Cordova, Zoraida",
        "series": "Vicious Deep #3",
        "amazon": "http://www.amazon.com/Vast-Brutal-Sea-Vicious-Deep/dp/1402296207?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Honor Among Thieves",
        "author": "Corey, James",
        "series": "Star Wars",
        "amazon": "http://www.amazon.com/Honor-Among-Thieves-Empire-Rebellion-ebook/dp/B00F1W0DFE?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Cibola Burn",
        "author": "Corey, James",
        "series": "Expanse #4",
        "amazon": "http://www.amazon.com/Cibola-Burn-Expanse-James-Corey-ebook/dp/B00FPQA4F0?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Destined for Doon",
        "author": "Corp, Carey; Lorie Langdon",
        "amazon": "http://www.amazon.com/Destined-Doon-Novel-Carey-Corp/dp/0310742331?tag=lookfwd-20"
    },
    {
        "date": "2014-03-15T04:00:00.000Z",
        "title": "The Secret Kiss of Darkness",
        "author": "Courtenay, Christina",
        "amazon": "http://www.amazon.com/Secret-Kiss-Darkness-Christina-Courtenay/dp/1781890676?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Oblivion",
        "author": "Creagh, Kelly",
        "series": "Nevermore #3"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Cremer, Andrea",
        "series": "Inventor's Secret #2"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Invisibility",
        "author": "Cremer, Andrea",
        "series": "(MMP)",
        "amazon": "http://www.amazon.com/Invisibility-Andrea-Cremer/dp/014750998X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "The Inventor's Secret",
        "author": "Cremer, Andrea",
        "series": "Inventor's Secret #1",
        "amazon": "http://www.amazon.com/Inventors-Secret-Andrea-Cremer/dp/0399159622?tag=lookfwd-20"
    },
    {
        "date": "2014-11-04T05:00:00.000Z",
        "title": "Snakeroot",
        "author": "Cremer, Andrea",
        "amazon": "http://www.amazon.com/Snakeroot-Nightshade-Andrea-Cremer/dp/0147508606?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Cracked",
        "author": "Crewe, Eliza",
        "series": "Soul Eater #1",
        "amazon": "http://www.amazon.com/Cracked-ebook/dp/B00CQZ5R8W?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Earth & Sky",
        "author": "Crewe, Megan",
        "series": "Earth & Sky #1"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Girl with the Iron Touch",
        "author": "Cross, Kady",
        "series": "Steampunk Chronicles #2 (MMP)",
        "amazon": "http://www.amazon.com/Girl-Iron-Touch-Steampunk-Chronicles/dp/0373211163?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Girl with the Windup Heart",
        "author": "Cross, Kady",
        "series": "Steampunk Chronicles #4",
        "amazon": "http://www.amazon.com/Girl-Windup-Heart-Steampunk-Chronicles-ebook/dp/B00H5I80W0?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "The Ring and the Crown",
        "author": "Cruz, Melissa de la",
        "series": "The Ring and the Crown #1",
        "amazon": "http://www.amazon.com/Ring-Crown/dp/1423157427?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Cruz, Melissa de la",
        "series": "Frozen novella",
        "amazon": "http://www.amazon.com/Untitled-Frozen-eSpecial-Penguin-ebook/dp/B009KUX3DW?tag=lookfwd-20"
    },
    {
        "date": "2014-09-09T04:00:00.000Z",
        "title": "The Vampires of Manhattan",
        "author": "Cruz, Melissa de la",
        "series": "New Blue Bloods Coven",
        "amazon": "http://www.amazon.com/Vampires-Manhattan-Blue-Bloods-Coven-ebook/dp/B00HQ2N1LU?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Hellsbane Hereafter",
        "author": "Cuccaro, Paige",
        "amazon": "http://www.amazon.com/Hellsbane-Hereafter-Paige-Cuccaro-ebook/dp/B00GETG0AA?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Fear of Trials",
        "author": "Cummings, Lindsay",
        "series": "Murder Complex novella",
        "amazon": "http://www.amazon.com/Fear-Trials-Complex-Novella-HarperTeen-ebook/dp/B00FJ37CX6?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "The Murder Complex",
        "author": "Cummings, Lindsay",
        "series": "Murder Complex",
        "amazon": "http://www.amazon.com/Murder-Complex-Lindsay-Cummings-ebook/dp/B00FJ331X6?tag=lookfwd-20"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "The Fires of Calderon",
        "author": "Cummings, Lindsay",
        "series": "Balance Keepers #1",
        "amazon": "http://www.amazon.com/Balance-Keepers-1-Fires-Calderon-ebook/dp/B00HLIVWLA?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Path of Smoke",
        "author": "Cunningham, Bailey",
        "series": "Parallel Parks #2",
        "amazon": "http://www.amazon.com/Path-Smoke-Novel-Parallel-Parks/dp/0425261077?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Broken",
        "author": "Curley, Marianne",
        "series": "Avena #2",
        "amazon": "http://www.amazon.com/Broken-Avena-Marianne-Curley/dp/1619631687?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Out of the Black",
        "author": "Currie, Evan",
        "series": "Odyssey One",
        "amazon": "http://www.amazon.com/Out-Black-Odyssey-Evan-Currie-ebook/dp/B00F0SI3EM?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Death Sworn",
        "author": "Cypess, Leah",
        "series": "Deathsworn #1",
        "amazon": "http://www.amazon.com/Death-Sworn-Leah-Cypess/dp/0062221213?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Quicksilver Soul",
        "author": "D'Abo, Christine",
        "series": "Shadow Guild",
        "amazon": "http://www.amazon.com/Quicksilver-Soul-Shadow-Guild-Christine-ebook/dp/B00DTUHMBS?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Nailed",
        "author": "D'Abo, Christine",
        "amazon": "http://www.amazon.com/Nailed-Christine-dAbo-ebook/dp/B00GKBHK7Y?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Keeper of the Flame",
        "author": "D'Arc, Bianca",
        "series": "Dragon Knights #7",
        "amazon": "http://www.amazon.com/Keeper-Flame-Dragon-Knights-Samhain/dp/1619216957?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "A Dance of Shadows",
        "author": "Dalglish, David",
        "series": "Shadowdance",
        "amazon": "http://www.amazon.com/Dance-Shadows-Shadowdance-ebook/dp/B00EXTQSBY?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Never Enough",
        "author": "Dane, Lauren",
        "series": "Brown Family #4 (MMP)"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Dane, Lauren",
        "series": "Delicious #4"
    },
    {
        "date": "2014-06-01T04:00:00.000Z",
        "title": "Count on Me",
        "author": "Dane, Lauren",
        "series": "Peta, GA #3"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Best Kind of Trouble",
        "author": "Dane, Lauren",
        "series": "Hurley Boys #1",
        "amazon": "http://www.amazon.com/Best-Kind-Trouble-Lauren-Dane/dp/0373779348?tag=lookfwd-20"
    },
    {
        "date": "2014-12-01T05:00:00.000Z",
        "title": "Broken Open",
        "author": "Dane, Lauren",
        "series": "Hurley Boys #2"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "You and I; Me and You",
        "author": "Davidson, MaryJanice"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Undead and Unsure",
        "author": "Davidson, MaryJanice",
        "series": "Betsy/Undead",
        "amazon": "http://www.amazon.com/Undead-Unsure-MaryJanice-Davidson/dp/0515153494?tag=lookfwd-20"
    },
    {
        "date": "2014-12-01T05:00:00.000Z",
        "title": "Deja New",
        "author": "Davidson, MaryJanice"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Servants of the Storm",
        "author": "Dawson, Delilah",
        "amazon": "http://www.amazon.com/Servants-of-the-Storm-ebook/dp/B00FNVSTD6?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The Unforgiven",
        "author": "Day, Alyssa",
        "series": "League of the Black Swan #2",
        "amazon": "http://www.amazon.com/Unforgiven-League-Black-Swan/dp/0425255786?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Grave Secret",
        "author": "Dean, Sierra",
        "series": "Secret McQueen #6",
        "amazon": "http://www.amazon.com/Grave-Secret-McQueen-Sierra-Dean/dp/1619216914?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Cold Hard Secret",
        "author": "Dean, Sierra",
        "series": "Secret McQueen #7",
        "amazon": "http://www.amazon.com/Cold-Hard-Secret-McQueen-ebook/dp/B00IF33NAS?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "Thunderstruck",
        "author": "Delany, Shannon",
        "series": "Weather Witch #3",
        "amazon": "http://www.amazon.com/Thunderstruck-Weather-Witch-Shannon-Delany/dp/1250018668?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Summer Moon",
        "author": "DeLima, Jan",
        "series": "Celtic Wolves",
        "amazon": "http://www.amazon.com/Summer-Moon-Celtic-Wolves-Novel-ebook/dp/B00ISEOKPG?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Child of a Hidden Sea",
        "author": "Dellamonica, AM",
        "amazon": "http://www.amazon.com/Child-Hidden-Sea-M-Dellamonica-ebook/dp/B00HTJ04E2?tag=lookfwd-20"
    },
    {
        "date": "2014-07-22T04:00:00.000Z",
        "title": "Strange and Ever After",
        "author": "Dennard, Susan",
        "amazon": "http://www.amazon.com/Strange-Ever-After-Susan-Dennard/dp/0062083325?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Turned",
        "author": "DePaul, Virna",
        "series": "Belladonna Agency #1",
        "amazon": "http://www.amazon.com/Turned-Belladonna-Agency-Virna-DePaul/dp/0345542452?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Awakened",
        "author": "DePaul, Virna",
        "series": "Belladonna Agency #2",
        "amazon": "http://www.amazon.com/Awakened-The-Belladonna-Agency-Series/dp/0345542479?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Revealed",
        "author": "DePaul, Virna",
        "series": "Belladonna Agency #3",
        "amazon": "http://www.amazon.com/Revealed-The-Belladonna-Agency-Series/dp/0345542495?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Peacemaker",
        "author": "dePierres, Marianne",
        "amazon": "http://www.amazon.com/Peacemaker-Marianne-Pierres-ebook/dp/B00GEYKVFK?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Dead Silence",
        "author": "Derting, Kimberly",
        "series": "Body Finder",
        "amazon": "http://www.amazon.com/Dead-Silence-Body-Finder-Novel/dp/006208223X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "The Taking",
        "author": "Derting, Kimberly",
        "amazon": "http://www.amazon.com/Taking-Kimberly-Derting-ebook/dp/B00FJ37ETI?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Despain, Bree",
        "series": "Into the Dark #2"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "The Shadow Prince",
        "author": "Despain, Bree",
        "series": "Into the Dark #1",
        "amazon": "http://www.amazon.com/Into-Dark-Book-Shadow-Prince/dp/1606842471?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "DeStefano, Lauren",
        "series": "Internment enovella",
        "amazon": "http://www.amazon.com/Internment-E-Novella-Interstitial-Chronicles-ebook/dp/B00BAWE7R4?tag=lookfwd-20"
    },
    {
        "date": "2014-10-01T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "DeStefano, Lauren",
        "series": "Internment Chronicles #2",
        "amazon": "http://www.amazon.com/Internment-Sequel-w-t-Chronicles-ebook/dp/B00BOUNF5M?tag=lookfwd-20"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "The Zodiac Collector",
        "author": "Diamond, Laura",
        "amazon": "http://www.amazon.com/Zodiac-Collector-Laura-Diamond/dp/1937053636?tag=lookfwd-20"
    },
    {
        "date": "2014-07-22T04:00:00.000Z",
        "title": "Extraction",
        "author": "Diaz, Stephanie",
        "amazon": "http://www.amazon.com/Extraction-Stephanie-Diaz-ebook/dp/B00HTJ76KW?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Lit by Shadows",
        "author": "Dolamore, Jaclyn",
        "series": "Dark Metropolis #2"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Dark Metropolis",
        "author": "Dolamore, Jaclyn",
        "series": "Dark Metropolis #1",
        "amazon": "http://www.amazon.com/Dark-Metropolis-Jaclyn-Dolamore/dp/142316332X?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "The Chronicle of Secret Riven",
        "author": "Domingue, Ronlyn",
        "series": "Keeper of Tales #2",
        "amazon": "http://www.amazon.com/Chronicle-Secret-Riven-Trilogy-ebook/dp/B00DPM7YVI?tag=lookfwd-20"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "Traveler's HOT L",
        "author": "Downing, CR",
        "amazon": "http://www.amazon.com/Travelers-HOT-L-C-R-Downing/dp/1938467892?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Drake, Jocelynn",
        "series": "Asylum Tales",
        "amazon": "http://www.amazon.com/Unti-Asylum-Tales-Asyllum-ebook/dp/B00HYMDS8S?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Title Yet to be Announced",
        "author": "Drake, Jocelynn",
        "series": "Asylum Tales #3 (Part 1)",
        "amazon": "http://www.amazon.com/Unti-Asylum-Tales-Part-Asyllum-ebook/dp/B00HYMDS8S?tag=lookfwd-20"
    },
    {
        "date": "2014-10-21T04:00:00.000Z",
        "title": "Title Yet to be Announced",
        "author": "Drake, Jocelynn",
        "series": "Asylum Tales #3 (Part 2)",
        "amazon": "http://www.amazon.com/Unti-Asylum-Tales-Part-2-ebook/dp/B00IRCZH4C?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Title Yet to be Announced",
        "author": "Drake, Jocelynn",
        "series": "Asylum Tales #3 (Part 3)",
        "amazon": "http://www.amazon.com/Unti-Asylum-Tales-Part-3-ebook/dp/B00IRCZHBK?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Renegade",
        "author": "Driza, Debra",
        "series": "Mila 2.0 #3",
        "amazon": "http://www.amazon.com/MILA-2-0-Renegade-ebook/dp/B00DB2YNDO?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Gilded Lily",
        "author": "Dryden, Delphine",
        "series": "Steam and Seduction #3",
        "amazon": "http://www.amazon.com/Gilded-Steam-Seduction-Delphine-Dryden-ebook/dp/B00HDMMEPW?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Mai Tai For Two",
        "author": "Dryden, Delphine",
        "amazon": "http://www.amazon.com/Mai-Tai-Two-Delphine-Dryden-ebook/dp/B00I66BPYU?tag=lookfwd-20"
    },
    {
        "date": "2014-05-07T04:00:00.000Z",
        "title": "Lament of the Lost Moors",
        "author": "Dufax, Jean; Grzegorz Rosinski",
        "series": "Blackmore Vol 2",
        "amazon": "http://www.amazon.com/Blackmore-Lament-Lost-Moors-2/dp/184918187X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Salvage",
        "author": "Duncan, Alexandra",
        "amazon": "http://www.amazon.com/Salvage-ebook/dp/B00DB362F0?tag=lookfwd-20"
    },
    {
        "date": "2014-08-14T04:00:00.000Z",
        "title": "The Revelation of Gabriel Adam",
        "author": "Duncan, SL",
        "series": "Revelation Saga #1",
        "amazon": "http://www.amazon.com/Revelation-Gabriel-Adam-S-L-Duncan/dp/1605427373?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "The Lost",
        "author": "Durst, Sarah Beth",
        "amazon": "http://www.amazon.com/Lost-Sarah-Beth-Durst/dp/0778317110?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Night Unbound",
        "author": "Duvall, Dianne",
        "series": "Immortal Guardians",
        "amazon": "http://www.amazon.com/Unbound-Immortal-Guardians-Dianne-Duvall/dp/1420129805?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Otherbound",
        "author": "Duyvis, Corinne",
        "amazon": "http://www.amazon.com/Otherbound-Corinne-Duyvis/dp/1419709283?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Bound in Hell",
        "author": "Eden, Cynthia",
        "series": "Bound #6"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "The Girl Next Door",
        "author": "Eden, Cynthia",
        "series": "Shadow Agents: Guts & Glory",
        "amazon": "http://www.amazon.com/Girl-Next-Shadow-Agents-ebook/dp/B00FBZCJL2?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Once Bitten, Twice Burned",
        "author": "Eden, Cynthia",
        "series": "Phoenix Fire #1",
        "amazon": "http://www.amazon.com/Bitten-Twice-Burned-Phoenix-Novel/dp/0758284071?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "I'll Be Slaying You",
        "author": "Eden, Cynthia",
        "series": "Night Watch",
        "amazon": "http://www.amazon.com/Ill-Slaying-You-Night-Watch/dp/0758234317?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Playing With Fire",
        "author": "Eden, Cynthia",
        "series": "Phoenix Fire #2",
        "amazon": "http://www.amazon.com/Playing-Fire-Phoenix-Novel/dp/0758284101?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Eternal Flame",
        "author": "Eden, Cynthia",
        "series": "Night Watch",
        "amazon": "http://www.amazon.com/Eternal-Flame-Night-Watch-Cynthia/dp/075824214X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "When He Was Bad",
        "author": "Eden, Cynthia; Shelly Laurenston",
        "amazon": "http://www.amazon.com/When-Was-Bad-Shelly-Laurenston/dp/0758227272?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Bonded In Shadows",
        "author": "Eden, Tigris; Danielle Romero",
        "series": "Shadow Unit novella",
        "amazon": "http://www.amazon.com/Bonded-Shadows-Shadow-Unit-Novella-ebook/dp/B00H4I97SM?tag=lookfwd-20"
    },
    {
        "date": "2014-03-31T04:00:00.000Z",
        "title": "Cursed",
        "author": "Egan, Alexa",
        "series": "Imnada Brotherhood",
        "amazon": "http://www.amazon.com/Cursed-Complete-Imnada-Brotherhood-Novellas-ebook/dp/B00DPM7WHO?tag=lookfwd-20"
    },
    {
        "date": "2014-03-31T04:00:00.000Z",
        "title": "Vanquish the Curse",
        "author": "Egan, Alexa",
        "series": "Imnada Brotherhood #3",
        "amazon": "http://www.amazon.com/Vanquish-the-Curse-ebook/dp/B00DPM7WHO?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Warrior's Curse",
        "author": "Egan, Alexa",
        "series": "Imnada Brotherhood #4",
        "amazon": "http://www.amazon.com/Warriors-Curse-ebook/dp/B00DPM7Z6W?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "The Pilgrims",
        "author": "Elliot, James",
        "series": "Pendulum",
        "amazon": "http://www.amazon.com/Pilgrims-Pendulum-Trilogy-Will-Elliott-ebook/dp/B00FCQQE20?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Foretold",
        "author": "Elliott, Rinda",
        "series": "Sisters of Fate #1",
        "amazon": "http://www.amazon.com/Foretold-Rinda-Elliott-ebook/dp/B00IGLOKRY?tag=lookfwd-20"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "Forecast",
        "author": "Elliott, Rinda",
        "series": "Sisters of Fate #2"
    },
    {
        "date": "2014-10-01T04:00:00.000Z",
        "title": "Blood of an Ancient",
        "author": "Elliott, Rinda"
    },
    {
        "date": "2014-12-01T05:00:00.000Z",
        "title": "Foresworn",
        "author": "Elliott, Rinda",
        "series": "Sisters of Fate #3"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Assail",
        "author": "Esslemont, Ian",
        "series": "Mazalan Empire",
        "amazon": "http://www.amazon.com/Assail-Malazan-Ian-C-Esslemont-ebook/dp/B00HXZZXAM?tag=lookfwd-20"
    },
    {
        "date": "2014-07-22T04:00:00.000Z",
        "title": "Poison Promise",
        "author": "Estep, Jennifer",
        "series": "Elemental Assassin #11",
        "amazon": "http://www.amazon.com/Poison-Promise-Elemental-Assassin-Jennifer-ebook/dp/B00GEEB23K?tag=lookfwd-20"
    },
    {
        "date": "2014-12-01T05:00:00.000Z",
        "title": "Black Widow",
        "author": "Estep, Jennifer",
        "series": "Elemental Assassin #12"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Til Death",
        "author": "Evangelista, Kate",
        "series": "Fractured Souls",
        "amazon": "http://www.amazon.com/Death-Fractured-Souls-Entangled-ebook/dp/B00EBRKW1U?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Age of the Fifth",
        "author": "Fallon, Leigh",
        "series": "Carrier #3"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Plus One",
        "author": "Fama, Elizabeth",
        "amazon": "http://www.amazon.com/Plus-One-Elizabeth-Fama-ebook/dp/B00H6EOLD0?tag=lookfwd-20"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "Gilded",
        "author": "Farley, Christina",
        "amazon": "http://www.amazon.com/Gilded-Christina-Farley-ebook/dp/B00FN2KR3K?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Feehan, Christine",
        "series": "Ghostwalker"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Air Bound",
        "author": "Feehan, Christine",
        "series": "Sisters of the Heart #3",
        "amazon": "http://www.amazon.com/Air-Bound-Sea-Haven-Novel/dp/0515154636?tag=lookfwd-20"
    },
    {
        "date": "2014-09-09T04:00:00.000Z",
        "title": "Dark Blood",
        "author": "Feehan, Christine",
        "series": "Dark Carpathian #26"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Of Metal and Wishes",
        "author": "Fine, Sarah",
        "amazon": "http://www.amazon.com/Metal-Wishes-Sarah-Fine/dp/144248358X?tag=lookfwd-20"
    },
    {
        "date": "2014-03-06T05:00:00.000Z",
        "title": "Obsidian Mirror (MMP)",
        "author": "Fisher, Catherine",
        "amazon": "http://www.amazon.com/Obsidian-Mirror-Catherine-Fisher/dp/0142426776?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "The Slanted Worlds",
        "author": "Fisher, Catherine",
        "series": "Chronoptika #3",
        "amazon": "http://www.amazon.com/Slanted-Worlds-Obsidian-Mirror-ebook/dp/B00DMCV250?tag=lookfwd-20"
    },
    {
        "date": "2014-11-13T05:00:00.000Z",
        "title": "Circle of Stones",
        "author": "Fisher, Catherine",
        "amazon": "http://www.amazon.com/Circle-Stones-Catherine-Fisher-ebook/dp/B007HU7KPO?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Black Ice",
        "author": "Fitzpatrick, Becca",
        "amazon": "http://www.amazon.com/Black-Ice-Becca-Fitzpatrick-ebook/dp/B00IBHSEN4?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Silent Bite: A Scanguards Wedding",
        "author": "Folsom, Tina",
        "series": "1001 Dark Nights",
        "amazon": "http://www.amazon.com/Silent-Bite--Scanguards-Wedding-Vampire-ebook/dp/B00H57X8BE?tag=lookfwd-20"
    },
    {
        "date": "2014-11-04T05:00:00.000Z",
        "title": "Empire of Shadows",
        "author": "Forster, Miriam",
        "series": "Bhinian Empire #2",
        "amazon": "http://www.amazon.com/Empire-Shadows-Miriam-Forster-ebook/dp/B00ICMFW38?tag=lookfwd-20"
    },
    {
        "date": "2014-11-04T05:00:00.000Z",
        "title": "City of a Thousand Dolls",
        "author": "Forster, Miriam",
        "amazon": "http://www.amazon.com/City-Thousand-Dolls-Miriam-Forster/dp/0062121324?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Soul Bound",
        "author": "Foster, Linda",
        "series": "Realm of Claimed #1",
        "amazon": "http://www.amazon.com/Bound-Realm-Claimed-Linda-Foster/dp/0981676847?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Forged",
        "author": "Frank, Jacquelyn",
        "series": "World of Nightwalkers #4",
        "amazon": "http://www.amazon.com/Forged-World-Nightwalkers-Jacquelyn-Frank/dp/0345534921?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Plague World",
        "author": "Fredsti, Dana",
        "series": "Ashley Parker #3",
        "amazon": "http://www.amazon.com/Plague-World-Dana-Fredsti-ebook/dp/B00FUZPC1C?tag=lookfwd-20"
    },
    {
        "date": "2014-04-10T04:00:00.000Z",
        "title": "Mayday",
        "author": "Friesen, Jonathan",
        "amazon": "http://www.amazon.com/Mayday-ebook/dp/B00DMCV2E6?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Deception's Princess",
        "author": "Friesner, Esther",
        "amazon": "http://www.amazon.com/Deceptions-Princess-Esther-Friesner/dp/0449818640?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Beautiful Ashes",
        "author": "Frost, Jeaniene",
        "series": "Realmwalker #1",
        "amazon": "http://www.amazon.com/Beautiful-Ashes-Jeaniene-Frost/dp/0373779054?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Halfway Hexed",
        "author": "Frost, Kimberly",
        "series": "Southern Witch",
        "amazon": "http://www.amazon.com/Halfway-Hexed-Southern-Witch-Novel/dp/0425267571?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Magical Misfire",
        "author": "Frost, Kimberly",
        "series": "Southern Witch novella",
        "amazon": "http://www.amazon.com/Magical-Misfire-Novella-Southern-Witch-ebook/dp/B00FKEYK1Q?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Slightly Spellbound",
        "author": "Frost, Kimberly",
        "series": "Southern Witch #4",
        "amazon": "http://www.amazon.com/Slightly-Spellbound-Southern-Witch-Novel/dp/0425267547?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Written in My Own Heart's Blood",
        "author": "Gabaldon, Diana",
        "series": "Outlander #8",
        "amazon": "http://www.amazon.com/Written-Own-Hearts-Blood-Outlander/dp/0385344430?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Death",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Death-Neil-Gaiman/dp/1401247164?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "The Books of Magic",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Books-Magic-Neil-Gaiman/dp/1401246869?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Ocean at the End of the Lane",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Ocean-End-Lane-Novel/dp/0062255665?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Chu's Day",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Chus-Day-Neil-Gaiman/dp/0062017837?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Chu's First Day of School",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Chus-First-School-Neil-Gaiman/dp/0062223976?tag=lookfwd-20"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "The Children's Crusade",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Childrens-Crusade-Neil-Gaiman/dp/1401242413?tag=lookfwd-20"
    },
    {
        "date": "2014-07-19T04:00:00.000Z",
        "title": "The Graveyard Book Vol 1",
        "author": "Gaiman, Neil",
        "series": "Graphic Novel",
        "amazon": "http://www.amazon.com/Graveyard-Book-Graphic-Novel-ebook/dp/B00G984VK2?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "The Graveyard Book Vol 2",
        "author": "Gaiman, Neil",
        "series": "Graphic Novel",
        "amazon": "http://www.amazon.com/Graveyard-Book-Graphic-Novel-ebook/dp/B00HPWVW1M?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Fortunately, the Milk",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Fortunately-Milk-Neil-Gaiman/dp/0062224085?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "The Graveyard Book Gold Edition",
        "author": "Gaiman, Neil",
        "amazon": "http://www.amazon.com/Graveyard-Book-Gold-Neil-Gaiman/dp/006234918X?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Hansel and Gretel",
        "author": "Gaiman, Neil",
        "series": "Toon",
        "amazon": "http://www.amazon.com/Hansel-Gretel-Toon-Neil-Gaiman/dp/1935179624?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Hansel and Gretel Deluxe Edition",
        "author": "Gaiman, Neil",
        "series": "Toon",
        "amazon": "http://www.amazon.com/Hansel-Gretel-Deluxe-Toon-Gaiman/dp/1935179659?tag=lookfwd-20"
    },
    {
        "date": "2014-10-21T04:00:00.000Z",
        "title": "The Truth Is a Cave in the Black Mountains: A Tale of Travel and Darkness with Pictures of All...",
        "author": "Gaiman, Neil; Eddie Campbell",
        "amazon": "http://www.amazon.com/Truth-Cave-Black-Mountains-Limited/dp/0062332104?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Hansel and Gretel",
        "author": "Gaiman, Neil; Lorenzo Mattotti",
        "amazon": "http://www.amazon.com/Hansel-Gretel-Toon-Neil-Gaiman/dp/1935179624?tag=lookfwd-20"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "Falls the Shadow",
        "author": "Gaither, Stefanie",
        "amazon": "http://www.amazon.com/Falls-Shadow-Stefanie-Gaither-ebook/dp/B00BSAOF3E?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Night's End",
        "author": "Galenorn, Yasmine",
        "series": "Indigo Court #5",
        "amazon": "http://www.amazon.com/Nights-End-Indigo-Court-Novel-ebook/dp/B00HDMLWJG?tag=lookfwd-20"
    },
    {
        "date": "2014-08-19T04:00:00.000Z",
        "title": "Flight from Hell",
        "author": "Galenorn, Yasmine",
        "series": "Otherworld/Fly by Night novella",
        "amazon": "http://www.amazon.com/Flight-Hell-Night-Yasmine-Galenorn-ebook/dp/B00INIJIMM?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Priestess Dreaming",
        "author": "Galenorn, Yasmine",
        "series": "Otherworld #16",
        "amazon": "http://www.amazon.com/Priestess-Dreaming-Otherworld-Yasmine-Galenorn-ebook/dp/B00ISEOKOC?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Unmarked",
        "author": "Garcia, Kami",
        "series": "Legion #2",
        "amazon": "http://www.amazon.com/Unmarked-Legion-Kami-Garcia-ebook/dp/B00I82881A?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Dangerous Creatures",
        "author": "Garcia, Kami; Margaret Stohl",
        "series": "Dangerous Creatures #1",
        "amazon": "http://www.amazon.com/Dangerous-Creatures-ebook/dp/B00F3GBR4O?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "Temporary Hauntings",
        "author": "Gardner, Craig Shaw",
        "series": "Temporary Magic",
        "amazon": "http://www.amazon.com/Temporary-Hauntings-Intermix-Magic-Novel-ebook/dp/B00DGZI9KY?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Happily Never After",
        "author": "Garey, Terri",
        "series": "Nicki Styx"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Redemption",
        "author": "Garner, Cynthia",
        "series": "Awakening #2",
        "amazon": "http://www.amazon.com/Redemption-T-K-Cynthia-Garner/dp/1455552607?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Vampire's Hunger",
        "author": "Garner, Cynthia",
        "series": "Awakening",
        "amazon": "http://www.amazon.com/Vampires-Hunger-Awakening-Cynthia-Garner-ebook/dp/B00DTUHN62?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Vampire's Thirst",
        "author": "Garner, Cynthia",
        "series": "Awakening",
        "amazon": "http://www.amazon.com/Vampires-Thirst-Awakening-Cynthia-Garner-ebook/dp/B00DY8HALW?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Darkness Bound",
        "author": "Geissinger, JT",
        "series": "Night Prowler",
        "amazon": "http://www.amazon.com/Darkness-Bound-Night-Prowler-Novel-ebook/dp/B00GJ201VG?tag=lookfwd-20"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "Full Fathom Five",
        "author": "Gladstone, Max",
        "amazon": "http://www.amazon.com/Full-Fathom-Five-Max-Gladstone-ebook/dp/B00HXZZXSO?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "The Clockwork Scarab",
        "author": "Gleason, Colleen",
        "series": "Stoker & Holmes #1 (MMP)",
        "amazon": "http://www.amazon.com/Clockwork-Scarab-Stoker-Holmes-Novel/dp/1452128731?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "The Spiritglass Charade",
        "author": "Gleason, Colleen",
        "series": "Stoker & Holmes #2",
        "amazon": "http://www.amazon.com/Spiritglass-Charade-Stoker-Holmes-Novel/dp/1452110719?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Severed Souls",
        "author": "Goodkind, Terry",
        "series": "Sword of Truth",
        "amazon": "http://www.amazon.com/Severed-Souls-Sword-Truth-Goodkind-ebook/dp/B00HBPXSYM?tag=lookfwd-20"
    },
    {
        "date": "2014-09-08T04:00:00.000Z",
        "title": "No One Needs to Know",
        "author": "Grace, Amanda",
        "amazon": "http://www.amazon.com/gp/product/0738736252?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Waking the Dead",
        "author": "Graham, Heather",
        "amazon": "http://www.amazon.com/Waking-Dead-Heather-Graham/dp/0778316122?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "The Awakening",
        "author": "Graham, Heather",
        "amazon": "http://www.amazon.com/Awakening-Heather-Graham/dp/1420132903?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Darkest Flame",
        "author": "Grant, Donna",
        "series": "Dark Kings",
        "amazon": "http://www.amazon.com/Darkest-Flame-Kings-Donna-Grant/dp/1250041368?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Fire Rising",
        "author": "Grant, Donna",
        "series": "Dark Kings",
        "amazon": "http://www.amazon.com/Fire-Rising-Kings-Donna-Grant/dp/1250041376?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Parasitology",
        "author": "Grant, Mira",
        "series": "Parasitology #1",
        "amazon": "http://www.amazon.com/Parasite-Parasitology-Mira-Grant/dp/0316218928?tag=lookfwd-20"
    },
    {
        "date": "2014-11-25T05:00:00.000Z",
        "title": "Symbiont",
        "author": "Grant, Mira",
        "series": "Parasitology #2",
        "amazon": "http://www.amazon.com/Symbiont-Parasitology-Mira-Grant-ebook/dp/B00IRIR7PS?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "The Strange Maid",
        "author": "Gratton, Tessa",
        "series": "United States of Asgard #2",
        "amazon": "http://www.amazon.com/Strange-Maid-United-States-Asgard/dp/0804121753?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Strangeways Versus The Blood Brothers",
        "author": "Graves, Judith",
        "series": "Skinned #1"
    },
    {
        "date": 2014,
        "title": "Hour of the Wolf",
        "author": "Graves, Judith",
        "series": "Skinned #4"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Spellcaster",
        "author": "Gray, Claudia",
        "series": "Spellcaster #1 (MMP)",
        "amazon": "http://www.amazon.com/Spellcaster-Claudia-Gray/dp/0061961213?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Steadfast",
        "author": "Gray, Claudia",
        "series": "Spellcaster #2",
        "amazon": "http://www.amazon.com/Steadfast-Spellcaster-Novel-Claudia-Gray/dp/0061961221?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Half Bad",
        "author": "Green, Sally",
        "series": "Half Life #1",
        "amazon": "http://www.amazon.com/Half-Bad-Life-Trilogy-ebook/dp/B00DGZKJ8O?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Property of a Lady Faire",
        "author": "Green, Simon",
        "series": "Secret Histories",
        "amazon": "http://www.amazon.com/Property-Lady-Faire-Secret-Histories-ebook/dp/B00G3L6L3U?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Chantress",
        "author": "Greenfield, Amy Butler",
        "series": "Chantress #1",
        "amazon": "http://www.amazon.com/Chantress-Amy-Butler-Greenfield/dp/144245704X?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Alchemy",
        "author": "Greenfield, Amy Butler",
        "series": "Chantress #2",
        "amazon": "http://www.amazon.com/Chantress-Alchemy-Amy-Butler-Greenfield/dp/1442457074?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Herald",
        "author": "Greenwood, Lee",
        "series": "The Sundering #6",
        "amazon": "http://www.amazon.com/Herald-Sundering-Book-VI-ebook/dp/B00H6J6KQQ?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "The Polaris Whisper",
        "author": "Gregory, Ken",
        "amazon": "http://www.amazon.com/Polaris-Whisper-Ken-Gregory/dp/085640912X?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Rebel Nation",
        "author": "Grimes, Shaunta",
        "amazon": "http://www.amazon.com/Rebel-Nation-Shaunta-Grimes-ebook/dp/B00G3L6M6Q?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Enslaved by the Others",
        "author": "Haines, Jess",
        "series": "H&W Investigations #6",
        "amazon": "http://www.amazon.com/Enslaved-Others-Investigations-Novel-Haines/dp/1420124048?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Ever After High: The Storybook of Legends #2",
        "author": "Hale, Shannon",
        "amazon": "http://www.amazon.com/Ever-After-High-Storybook-Legends/dp/0316282014?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Dangerous",
        "author": "Hale, Shannon",
        "amazon": "http://www.amazon.com/Dangerous-Shannon-Hale/dp/1599901684?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Title Yet to be Announced",
        "author": "Hale, Shannon",
        "series": "Spirit Animals #4",
        "amazon": "http://www.amazon.com/Spirit-Animals-Book-Shannon-Hale/dp/0545522463?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Death's Redemption",
        "author": "Hall, Marie",
        "amazon": "http://www.amazon.com/Deaths-Redemption-t-Marie-Hall/dp/1455549916?tag=lookfwd-20"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "Kindred of Darkness",
        "author": "Hambly, Barbara",
        "series": "James Asher",
        "amazon": "http://www.amazon.com/Kindred-Darkness-vampire-kidnapping-James/dp/0727883429?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Affliction",
        "author": "Hamilton, Laurell K",
        "series": "Anita Blake #22 (MMP)",
        "amazon": "http://www.amazon.com/Affliction-Anita-Blake-Vampire-Hunter/dp/051515427X?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "A Shiver of Light",
        "author": "Hamilton, Laurell K",
        "series": "Meredith Gentry",
        "amazon": "http://www.amazon.com/Shiver-Light-Merry-Gentry-Novel-ebook/dp/B00G3L6LDU?tag=lookfwd-20"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "Ashes to Ashes",
        "author": "Han, Jenny; Siobhan Vivian",
        "series": "Caitlynn O'Connell #3",
        "amazon": "http://www.amazon.com/Ashes-to-ebook/dp/B00BOUH2L0?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "The Wicked We Have Done",
        "author": "Harian, Sarah",
        "amazon": "http://www.amazon.com/Wicked-We-Have-Done-ebook/dp/B00F3KXOKA?tag=lookfwd-20"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "The Book of Life",
        "author": "Harkness, Deborah",
        "series": "All Souls #3",
        "amazon": "http://www.amazon.com/Book-Life-Deborah-Harkness-ebook/dp/B00G3L6KQI?tag=lookfwd-20"
    },
    {
        "date": "2014-03-08T05:00:00.000Z",
        "title": "Werewolf Sings the Blues",
        "author": "Harlow, Jennifer",
        "series": "Midnight Magic Mystery #2",
        "amazon": "http://www.amazon.com/Werewolf-Sings-Blues-Midnight-Mystery/dp/0738736120?tag=lookfwd-20"
    },
    {
        "date": "2014-06-01T04:00:00.000Z",
        "title": "Enemy Sworn",
        "author": "Harlow, Karin",
        "series": "LOST #3",
        "amazon": "http://www.amazon.com/Enemy-Sworn-ebook/dp/B007EE4UOC?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Storm Bound",
        "author": "Harper, Dani",
        "series": "Grim #2",
        "amazon": "http://www.amazon.com/Storm-Bound-Grim-Dani-Harper-ebook/dp/B00FG6AF2Q?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Better Homes and Hauntings",
        "author": "Harper, Molly",
        "amazon": "http://www.amazon.com/Better-Homes-Hauntings-Molly-Harper-ebook/dp/B00GEEB9MY?tag=lookfwd-20"
    },
    {
        "date": "2014-09-22T04:00:00.000Z",
        "title": "Snow Falling on Bluegrass",
        "author": "Harper, Molly",
        "amazon": "http://www.amazon.com/Snow-Falling-Bluegrass-Molly-Harper-ebook/dp/B00GEEB8NE?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Demon Derby",
        "author": "Harris, Carrie",
        "amazon": "http://www.amazon.com/Demon-Derby-Carrie-Harris/dp/0385742177?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Deadlocked",
        "author": "Harris, Charlaine",
        "amazon": "http://www.amazon.com/Deadlocked-Sookie-Stackhouse-Novel-Blood/dp/0425269639?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Midnight Crossroad",
        "author": "Harris, Charlaine",
        "series": "Midnight, Tx",
        "amazon": "http://www.amazon.com/Midnight-Crossroad-Novel-Texas-ebook/dp/B00FKEYHM8?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "All Together Dead",
        "author": "Harris, Charlaine",
        "amazon": "http://www.amazon.com/All-Together-Dead-Sookie-Stackhouse/dp/0425271552?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Night's Honor",
        "author": "Harrison, Thea",
        "series": "Elder Races #7",
        "amazon": "http://www.amazon.com/Nights-Honor-Novel-Elder-Races-ebook/dp/B00INIQQGI?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "The Monster Within",
        "author": "Hashway, Kelly",
        "series": "#1",
        "amazon": "http://www.amazon.com/Monster-Within-Kelly-Hashway/dp/1937053857?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Rebel Belle",
        "author": "Hawkins, Rachel",
        "amazon": "http://www.amazon.com/Rebel-Belle-Rachel-Hawkins/dp/0399256938?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "School Spirits",
        "author": "Hawkins, Rachel",
        "amazon": "http://www.amazon.com/School-Spirits-Hex-Hall-Novel/dp/1423148509?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Merchant Emperor",
        "author": "Haydon, Elizabeth",
        "series": "Symphony of Angels",
        "amazon": "http://www.amazon.com/Merchant-Emperor-Symphony-Ages-ebook/dp/B00GVQZRE6?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "While We Run",
        "author": "Healey, Karen",
        "series": "When We Wake #2",
        "amazon": "http://www.amazon.com/While-We-Run-ebook/dp/B00EXTQS3M?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Shattered",
        "author": "Hearne, Kevin",
        "series": "Iron Druid Chronicles #7",
        "amazon": "http://www.amazon.com/Shattered-Druid-Chronicles-Kevin-Hearne-ebook/dp/B00FIMYZFQ?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Burn Out",
        "author": "Helvig, Kristi",
        "amazon": "http://www.amazon.com/Burn-Out-Kristi-Helvig/dp/1606844792?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Witches in Red",
        "author": "Hendee, Barb",
        "series": "Mist-Torn Witches",
        "amazon": "http://www.amazon.com/Witches-Red-Novel-Mist-Torn-ebook/dp/B00FX7LYP0?tag=lookfwd-20"
    },
    {
        "date": "2014-04-07T04:00:00.000Z",
        "title": "Beach Blanket Bloodbath",
        "author": "Henry, Mark",
        "series": "Amanda Feral #4"
    },
    {
        "date": 2014,
        "title": "Dawn of the Deadutantes",
        "author": "Henry, Mark",
        "series": "Amanda Feral #5"
    },
    {
        "date": 2014,
        "title": "Ship of Ghouls",
        "author": "Henry, Mark",
        "series": "Amanda Feral #6"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "Poisoned Apples",
        "author": "Heppermann, Christine",
        "amazon": "http://www.amazon.com/Poisoned-Apples-Poems-You-Pretty-ebook/dp/B00HLIVXPA?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Unwept",
        "author": "Hickman, Tracy; Laura Hickman",
        "series": "Nightbirds #1",
        "amazon": "http://www.amazon.com/Unwept-Book-Nightbirds-Tracy-Hickman/dp/0765332035?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Sweet Reckoning",
        "author": "Higgins, Wendy",
        "series": "Sweet #3",
        "amazon": "http://www.amazon.com/Sweet-Reckoning-ebook/dp/B00FJ3768W?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "The Sacrifice",
        "author": "Higson, Charlie",
        "amazon": "http://www.amazon.com/Sacrifice-Enemy-Novel/dp/1423166353?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Hill, Joey W.",
        "series": "Lingerie Shop novella",
        "amazon": "http://www.amazon.com/Untitled-Lingerie-Shop-Novella-ebook/dp/B00BC24MCC?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Hill, Joey W.",
        "series": "Lingerie Shop novella",
        "amazon": "http://www.amazon.com/Untitled-Lingerie-Shop-Novella-ebook/dp/B00BC24MBI?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Hill, Joey W.",
        "series": "Lingerie Shop novella",
        "amazon": "http://www.amazon.com/Untitled-Lingerie-Shop-Novella-ebook/dp/B00BC254E2?tag=lookfwd-20"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Hill, Joey W.",
        "series": "Lingerie Shop novella",
        "amazon": "http://www.amazon.com/Untitled-Lingerie-Shop-Novella-ebook/dp/B00BC24MF4?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Fool's Assassin",
        "author": "Hobb, Robin",
        "amazon": "http://www.amazon.com/Fools-Assassin-Robin-Hobb-ebook/dp/B00HBQUF8S?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "The Return of the Discontinued Man",
        "author": "Hodder, Mark",
        "series": "Burton & Swinburne Adventure",
        "amazon": "http://www.amazon.com/Return-Discontinued-Burton-Swinburne-Adventure-ebook/dp/B00HTM8CTI?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Gilded Ashes",
        "author": "Hodge, Rosamund",
        "series": "Cruel Beauty novella",
        "amazon": "http://www.amazon.com/Gilded-Ashes-Novella-HarperTeen-ebook/dp/B00BEFTQN2?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Retribution of Mara Dyer",
        "author": "Hodkin, Michelle",
        "series": "Mara Dyer",
        "amazon": "http://www.amazon.com/Retribution-Mara-Dyer-Trilogy/dp/1442484233?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Savage",
        "author": "Holder, Nancy; Debbie Vigui�",
        "series": "Wolf Spring Chronicles #3"
    },
    {
        "date": "2014-06-05T04:00:00.000Z",
        "title": "The Source",
        "author": "Horn, JD",
        "series": "Witching Savannah",
        "amazon": "http://www.amazon.com/Source-Witching-Savannah-J-D-Horn-ebook/dp/B00GM54GJS?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Alpha Goddess",
        "author": "Howard, Amalie",
        "amazon": "http://www.amazon.com/Alpha-Goddess-Amalie-Howard/dp/1626362084?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Unravel",
        "author": "Howson, Imogen",
        "amazon": "http://www.amazon.com/Unravel-Imogen-Howson-ebook/dp/B00FNVSUUI?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Marked",
        "author": "Hughes, Alex",
        "series": "Mindspace Investigations #3",
        "amazon": "http://www.amazon.com/Marked-Mindspace-Investigations-Alex-Hughes-ebook/dp/B00F9EZBUQ?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "To Hell and Back",
        "author": "Hughes, Matthew",
        "amazon": "http://www.amazon.com/Hell-Back-Matthew-Hughes-ebook/dp/B00EKJCVAE?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Vampire Trouble",
        "author": "Humphreys, Sara",
        "series": "Dead in the City #2",
        "amazon": "http://www.amazon.com/Vampire-Trouble-Dead-City-Humphreys/dp/1402274092?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Reborn",
        "author": "Hunter, CC",
        "series": "Shadow Falls: After Dark #1",
        "amazon": "http://www.amazon.com/Reborn-Shadow-Falls-After-Dark/dp/1250035910?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "To Love a King",
        "author": "Husk, Shona",
        "series": "Annwyn #3",
        "amazon": "http://www.amazon.com/Love-King-Shona-Husk/dp/140228022X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-03T04:00:00.000Z",
        "title": "City of Halves",
        "author": "Inglis, Lucy",
        "amazon": "http://www.amazon.com/City-Halves-Lucy-Inglis/dp/1909489093?tag=lookfwd-20"
    },
    {
        "date": "2014-05-08T04:00:00.000Z",
        "title": "Painkillers",
        "author": "Ings, Simon",
        "amazon": "http://www.amazon.com/Painkillers-Simon-Ings/dp/057513139X?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "Azagoth",
        "author": "Ione, Larissa",
        "series": "Demonica",
        "amazon": "http://www.amazon.com/Azagoth-Demonica-Novella-1001-Nights-ebook/dp/B00H4JG5PO?tag=lookfwd-20"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "Chained by Night",
        "author": "Ione, Larissa",
        "series": "MoonBound Clan Vampires #2",
        "amazon": "http://www.amazon.com/Chained-Night-Larissa-Ione-ebook/dp/B008TRUAS8?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Veneance Bound",
        "author": "Ireland, Justina",
        "series": "(MMP)",
        "amazon": "http://www.amazon.com/Vengeance-Bound-Justina-Ireland/dp/1442444630?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Promise of Shadows",
        "author": "Ireland, Justina",
        "amazon": "http://www.amazon.com/Promise-Shadows-Justina-Ireland/dp/1442444649?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Alychmist",
        "author": "Irvin, Ian",
        "series": "Wells of Echo Quartet",
        "amazon": "http://www.amazon.com/Alychmist-Well-Echoes-Quartet-Irvine-ebook/dp/B00GR5N662?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Chimaera",
        "author": "Irvin, Ian",
        "series": "Wells of Echo Quartet",
        "amazon": "http://www.amazon.com/Chimaera-Well-Echoes-Quartet-Irvine-ebook/dp/B00GR5N66M?tag=lookfwd-20"
    },
    {
        "date": "2014-06-02T04:00:00.000Z",
        "title": "Justice",
        "author": "Irving, Ian",
        "series": "Tainted Realm",
        "amazon": "http://www.amazon.com/Justice-Tainted-Realm-Ian-Irvine-ebook/dp/B00FPQA5AO?tag=lookfwd-20"
    },
    {
        "date": "2014-03-06T05:00:00.000Z",
        "title": "Some Like It Wicked",
        "author": "Ivy, Alexandra",
        "series": "Hellion's Den #1",
        "amazon": "http://www.amazon.com/Some-Like-Wicked-Hellions-Den-ebook/dp/B00FH1IEA0?tag=lookfwd-20"
    },
    {
        "date": "2014-04-03T04:00:00.000Z",
        "title": "Some Like It Sinful",
        "author": "Ivy, Alexandra",
        "series": "Hellion's Den #2",
        "amazon": "http://www.amazon.com/Some-Like-Sinful-Hellions-Den-ebook/dp/B00FY54N40?tag=lookfwd-20"
    },
    {
        "date": "2014-05-29T04:00:00.000Z",
        "title": "Some Like It Brazen",
        "author": "Ivy, Alexandra",
        "series": "Hellion's Den #3",
        "amazon": "http://www.amazon.com/Some-Like-Brazen-Hellions-Den-ebook/dp/B00GYLVXAK?tag=lookfwd-20"
    },
    {
        "date": "2014-06-04T04:00:00.000Z",
        "title": "Hunt the Darkness",
        "author": "Ivy, Alexandra",
        "series": "Guardians of Eternity #11",
        "amazon": "http://www.amazon.com/Hunt-Darkness-Alexandra-Ivy/dp/142012515X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-14T04:00:00.000Z",
        "title": "Hakan/Severin",
        "author": "Ivy, Alexandra; Laura Wright",
        "series": "Bayou Heat #11-12"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Alex Versus",
        "author": "Jacka, Benedict",
        "series": "Alex Versus #1-4",
        "amazon": "http://www.amazon.com/Alex-Verus-Novels-Books-1-4-ebook/dp/B00HDMLUAW?tag=lookfwd-20"
    },
    {
        "date": "2014-09-01T04:00:00.000Z",
        "title": "Hidden",
        "author": "Jacka, Benedict",
        "series": "Alex Versus"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Ignited",
        "author": "Jackson, Corrine",
        "series": "Sense Thieves #3",
        "amazon": "http://www.amazon.com/Ignited-Sense-Thieves-Corrine-Jackson/dp/0758273355?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "A Plunder of Souls",
        "author": "Jackson, DB",
        "series": "Thieftaker Chronicles",
        "amazon": "http://www.amazon.com/Plunder-Souls-Thieftaker-Chronicles-ebook/dp/B00HXZZYCO?tag=lookfwd-20"
    },
    {
        "date": "2014-10-01T04:00:00.000Z",
        "title": "Samantha Sutton and the Temple of Traitors",
        "author": "Jacobs, Jordan",
        "amazon": "http://www.amazon.com/Samantha-Sutton-Temple-Traitors-Jordan/dp/1402275668?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Dashing",
        "author": "James, Elliott",
        "series": "Pax Arcana",
        "amazon": "http://www.amazon.com/Dashing-Pax-Arcana-Elliott-James-ebook/dp/B00HQ2MY2C?tag=lookfwd-20"
    },
    {
        "date": "2014-06-01T04:00:00.000Z",
        "title": "Votan and Other Stories",
        "author": "James, John",
        "amazon": "http://www.amazon.com/Votan-Other-Novels-Fantasy-Masterworks/dp/057510550X?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Under the Final Moon",
        "author": "Jayne, Hannah",
        "series": "Underworld Detection Agency #6)",
        "amazon": "http://www.amazon.com/Under-Final-Underworld-Detective-Agency/dp/0758281145?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Bad Blood",
        "author": "Jefford, Nikki",
        "series": "Aurora Sky #3"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "The Fifth Season",
        "author": "Jemisin, NK",
        "amazon": "http://www.amazon.com/Fifth-Season-Broken-Earth-ebook/dp/B00H25FCSQ?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Rebels: City of Indra: The Story of Lex and Livia",
        "author": "Jenner, Kendall; Jenner, Kylie",
        "amazon": "http://www.amazon.com/Rebels-City-Indra-Story-Livia-ebook/dp/B00GEECHP2?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Love is the Drug",
        "author": "Johnson, Alaya Dawn",
        "amazon": "http://www.amazon.com/Love-Drug-Alaya-Dawn-Johnson/dp/0545417813?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The Guild",
        "author": "Johnson, Jean",
        "series": "Guardians of Destiny",
        "amazon": "http://www.amazon.com/Guild-Guardians-Destiny-Jean-Johnson-ebook/dp/B00FX7R6S4?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Damnation",
        "author": "Johnson, Jean",
        "series": "Theirs Not To Reason Why #4",
        "amazon": "http://www.amazon.com/Damnation-Theirs-Not-Reason-Why/dp/0425256499?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Birthright",
        "author": "Johnson, Jean",
        "amazon": "http://www.amazon.com/Birthright-ebook/dp/B00DGZKWLS?tag=lookfwd-20"
    },
    {
        "date": "2014-10-21T04:00:00.000Z",
        "title": "Untitled Flame Seas #1",
        "author": "Johnson, Jean",
        "series": "Flame Seas #1",
        "amazon": "http://www.amazon.com/Untitled-Flame-Seas-Fantasy-ebook/dp/B00DGZKHOU?tag=lookfwd-20"
    },
    {
        "date": "2014-03-15T04:00:00.000Z",
        "title": "Impossible Things",
        "author": "Johnson, Kate",
        "amazon": "http://www.amazon.com/Impossible-Things-Kate-Johnson/dp/1781890595?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Untamed Wolf",
        "author": "Johnston, Linda",
        "series": "Alpha Force",
        "amazon": "http://www.amazon.com/Untamed-Alpha-Force-Linda-Johnston-ebook/dp/B00H5I6R8Y?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "Sixth Grave on the Edge",
        "author": "Jones, Darynda",
        "series": "Charley Davidson #6",
        "amazon": "http://www.amazon.com/Sixth-Grave-Edge-Charley-Davidson/dp/1250045630?tag=lookfwd-20"
    },
    {
        "date": "2014-10-21T04:00:00.000Z",
        "title": "Seventh Grave and No Body",
        "author": "Jones, Darynda",
        "series": "Charley Davidson #7",
        "amazon": "http://www.amazon.com/Seventh-Grave-Body-Charley-Davidson/dp/1250045649?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Tease",
        "author": "Jordan, Sophie",
        "series": "Ivy Chronicles",
        "amazon": "http://www.amazon.com/Tease-Ivy-Chronicles-Sophie-Jordan-ebook/dp/B00FJ37AWO?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Kill City Blues",
        "author": "Kadrey, Richard",
        "series": "Sandman Slim (MMP)",
        "amazon": "http://www.amazon.com/Kill-City-Blues-Sandman-Novel/dp/0062197614?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "The Forever Song",
        "author": "Kagawa, Julie",
        "series": "Blood of Eden #3",
        "amazon": "http://www.amazon.com/Forever-Song-Blood-Eden-ebook/dp/B00I66AAFA?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Talon",
        "author": "Kagawa, Julie",
        "amazon": "http://www.amazon.com/Talon-Saga-Julie-Kagawa/dp/0373211392?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "The Invisible",
        "author": "Kahaney, Amelia",
        "amazon": "http://www.amazon.com/gp/product/0062231928?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Kane, Stacia",
        "series": "Downside Ghosts #6"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "The Path to Power",
        "author": "Karen Miller",
        "series": "Tarnished Crown Quintet #1",
        "amazon": "http://www.amazon.com/Path-Power-Tarnished-Crown-ebook/dp/B00GG0GIUO?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Hunt at World's End",
        "author": "Kaufmann, Nicholas",
        "series": "Gabriel Hunt",
        "amazon": "http://www.amazon.com/Gabriel-Hunt-Worlds-End/dp/1781169926?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Die and Stay Dead",
        "author": "Kaufmann, Nicholas",
        "series": "Gabriel Hunt",
        "amazon": "http://www.amazon.com/Die-Stay-Dead-Nicholas-Kaufmann-ebook/dp/B00IQO729O?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "East of Ecstasy",
        "author": "Kaye, Laura",
        "series": "Hearts of the Anemoi #4",
        "amazon": "http://www.amazon.com/Ecstasy-Hearts-Anemoi-Entangled-Select/dp/1622661273?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Way to Babylon",
        "author": "Kearney, Paul",
        "amazon": "http://www.amazon.com/Way-Babylon-Paul-Kearney/dp/1781081891?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "The Darkness of Glengowyn",
        "author": "Kelly, Isabo",
        "series": "Fire and Tears",
        "amazon": "http://www.amazon.com/Darkness-Glengowyn-Fire-Tears-ebook/dp/B00HSOHSCY?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Lailah",
        "author": "Kelly, Nikki",
        "series": "Styclar #1",
        "amazon": "http://www.amazon.com/Lailah-book-1-Styclar-Saga/dp/1250051517?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "The Beast of Callaire",
        "author": "Kelsey, Saruuh",
        "series": "Legend Mirror #1"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Sacrifice",
        "author": "Kemmerer, Brigid",
        "series": "Elemental #4",
        "amazon": "http://www.amazon.com/Sacrifice-Elemental-Brigid-Kemmerer/dp/0758294395?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "A Conversation in Blood",
        "author": "Kemp, Paul",
        "amazon": "http://www.amazon.com/Conversation-Blood-Paul-S-Kemp/dp/0857663747?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Mark of the Tala",
        "author": "Kennedy, Jeffe",
        "series": "The Twelve Kingdoms",
        "amazon": "http://www.amazon.com/Twelve-Kingdoms-Mark-Tala-ebook/dp/B00GYLVPLW?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Enchanting the Beast",
        "author": "Kennedy, Kathryn",
        "series": "Relics of Merlin",
        "amazon": "http://www.amazon.com/Enchanting-Relics-Merlin-Kathryne-Kennedy-ebook/dp/B00HFDVMWA?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Mystically Bound",
        "author": "Kennedy, Stacey",
        "series": "Frostbite #3"
    },
    {
        "date": 2014,
        "title": "Warlocks Be Hexed",
        "author": "Kennedy, Stacey",
        "series": "Magic & Mayhem #3"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Ignited",
        "author": "Kenner, J",
        "amazon": "http://www.amazon.com/Ignited-Wanted-Novel-J-Kenner-ebook/dp/B00HBQWGYY?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "The Last Oprichnik",
        "author": "Kent, Jasper",
        "series": "Danilov Quintet #5"
    },
    {
        "date": 2014,
        "title": "Omega",
        "author": "Kenyon, Sherrilyn",
        "series": "Nevermore #2"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Styxx",
        "author": "Kenyon, Sherrilyn",
        "series": "Dark-Hunter #28 (MMP)",
        "amazon": "http://www.amazon.com/Styxx-Dark-Hunter-Novels-Sherrilyn-Kenyon/dp/1250029899?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Inferno",
        "author": "Kenyon, Sherrilyn",
        "series": "Chronicles of Nick #4 (MMP)",
        "amazon": "http://www.amazon.com/Inferno-Chronicles-Nick-Sherrilyn-Kenyon/dp/1250002869?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Illusion",
        "author": "Kenyon, Sherrilyn",
        "series": "Chronicles of Nick #5",
        "amazon": "http://www.amazon.com/Illusion-Chronicles-Nick-Sherrilyn-Kenyon/dp/1250002842?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Born of Fury",
        "author": "Kenyon, Sherrilyn",
        "series": "League #6",
        "amazon": "http://www.amazon.com/Born-League-Novel-Sherrilyn-Kenyon/dp/1250042968?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Son of No One",
        "author": "Kenyon, Sherrilyn",
        "series": "Dark-Hunter",
        "amazon": "http://www.amazon.com/Son-No-One-Dark-Hunter-Novels/dp/1250029910?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Before the Fall",
        "author": "Kessler, Jackie",
        "series": "Pit and Paradise #1"
    },
    {
        "date": 2014,
        "title": "To Bear an Iron Key",
        "author": "Kessler, Jackie Morse"
    },
    {
        "date": "2014-03-01T05:00:00.000Z",
        "title": "Night Child",
        "author": "Kessler, Lisa",
        "series": "Night #3"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Wanderers",
        "author": "Kim, Susan; Laurence Klaven",
        "series": "Wasteland #2",
        "amazon": "http://www.amazon.com/Wanderers-Wasteland-Susan-Kim-ebook/dp/B00DB30KHQ?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Vortex",
        "author": "Kincaid, SJ",
        "series": "Insignia #2",
        "amazon": "http://www.amazon.com/Vortex-Insignia-S-J-Kincaid/dp/0062093037?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Catalyst",
        "author": "Kincaid, SJ",
        "series": "Insignia #3",
        "amazon": "http://www.amazon.com/Catalyst-S-J-Kincaid-ebook/dp/B00I7ULW52?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Flight of the Golden Harpy",
        "author": "Klaus, Susan",
        "amazon": "http://www.amazon.com/Flight-Golden-Harpy-Susan-Klaus-ebook/dp/B00HTJ04UG?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Wicked Games",
        "author": "Knight, Angela",
        "series": "Mageverse novellas",
        "amazon": "http://www.amazon.com/Wicked-Games-Angela-Knight/dp/0425215652?tag=lookfwd-20"
    },
    {
        "date": "2014-08-06T04:00:00.000Z",
        "title": "Title Yet To Be Announced",
        "author": "Knight, Angela",
        "series": "Familiar #1",
        "amazon": "http://www.amazon.com/Untitled-Familiar-1-ebook/dp/B009RYSB0G?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Love Bites",
        "author": "Knight, Angela",
        "series": "Mageverse",
        "amazon": "http://www.amazon.com/Love-Bites-Angela-Knight/dp/0425254917?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Baltic Gambit",
        "author": "Knight, EE",
        "series": "Vampire Earth #11",
        "amazon": "http://www.amazon.com/Baltic-Gambit-Novel-Vampire-ebook/dp/B00DMCUWPQ?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Alien Collective",
        "author": "Koch, Gini",
        "series": "Katherine �Kitty� Katt #9",
        "amazon": "http://www.amazon.com/Alien-Collective-Gini-Koch/dp/0756407583?tag=lookfwd-20"
    },
    {
        "date": "2014-12-01T05:00:00.000Z",
        "title": "Universal Alien",
        "author": "Koch, Gini",
        "series": "Katherine �Kitty� Katt #10"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Valour and Vanity",
        "author": "Kowal, Mary Robinette",
        "amazon": "http://www.amazon.com/Valour-Vanity-Mary-Robinette-Kowal-ebook/dp/B00HL0MA78?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Shadowmaster",
        "author": "Krinard, Susan",
        "amazon": "http://www.amazon.com/Shadowmaster-Harlequin-Nocturne-Susan-Krinard/dp/0373885911?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Mist",
        "author": "Krinard, Susan",
        "amazon": "http://www.amazon.com/Mist-Susan-Krinard/dp/0765368765?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Black Ice",
        "author": "Krinard, Susan",
        "series": "Midgard #2",
        "amazon": "http://www.amazon.com/Black-Ice-Midgard-Susan-Krinard/dp/0765332094?tag=lookfwd-20"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "Endsinger",
        "author": "Kristoff, Jay",
        "series": "Lotus War #3",
        "amazon": "http://www.amazon.com/Endsinger-Lotus-War-Book-Three/dp/1250001420?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "Hexed",
        "author": "Krys, Michelle",
        "series": "Witch Hunter #1",
        "amazon": "http://www.amazon.com/Hexed-Michelle-Krys/dp/0385743378?tag=lookfwd-20"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "Salt and Storm",
        "author": "Kulper, Kendall",
        "amazon": "http://www.amazon.com/Salt-Storm-Kendall-Kulper-ebook/dp/B00HQ2N0VG?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "The House of the Four Winds",
        "author": "Lackey, Mercedes; James Mallory",
        "series": "One Dozen Daughters #1",
        "amazon": "http://www.amazon.com/House-Four-Winds-Dozen-Daughters-ebook/dp/B00HXZZXV6?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Victories",
        "author": "Lackey, Mercedes; Rosemary Edghill",
        "series": "Shadow Grail #4",
        "amazon": "http://www.amazon.com/Shadow-Grail-Victories-Mercedes-Lackey/dp/0765317648?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Dark Triumph",
        "author": "LaFevers, Robin",
        "series": "His Fair Assassin",
        "amazon": "http://www.amazon.com/Dark-Triumph-Assassins-Assassin-Trilogy/dp/0544227204?tag=lookfwd-20"
    },
    {
        "date": "2014-11-04T05:00:00.000Z",
        "title": "Mortal Heart",
        "author": "LaFevers, Robin",
        "series": "His Fair Assassin #3",
        "amazon": "http://www.amazon.com/Mortal-Heart-Fair-Assassin-Trilogy/dp/0547628404?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Ghost Train to New Orleans",
        "author": "Lafferty, Mur",
        "series": "Shambling Guides #2",
        "amazon": "http://www.amazon.com/Ghost-Orleans-Shambling-Guides-ebook/dp/B00DTUHI5I?tag=lookfwd-20"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "The Geek Girl and the Reluctant Rake",
        "author": "Lamm, Gina"
    },
    {
        "date": 2014,
        "title": "Haven",
        "author": "Langager, Marie"
    },
    {
        "date": "2014-07-14T04:00:00.000Z",
        "title": "Razorhurst",
        "author": "Larbalestier, Justine"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Call of the Siren",
        "author": "Lario, Rosalie",
        "series": "Demons of Infernum #5",
        "amazon": "http://www.amazon.com/Call-Siren-Demons-Infernum-Novel/dp/1622660536?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "The Lascar's Dagger",
        "author": "Larke, Glenda",
        "series": "Forsaken Lands #1",
        "amazon": "http://www.amazon.com/Lascars-Dagger-Forsaken-Lands-ebook/dp/B00CO7FLY2?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Bite Me",
        "author": "Laurenston, Shelly",
        "amazon": "http://www.amazon.com/Bite-Me-Shelly-Laurenston/dp/0758265247?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "The Beast In Him",
        "author": "Laurenston, Shelly",
        "series": "Pride #2",
        "amazon": "http://www.amazon.com/Beast-Him-Pride-Shelly-Laurenston/dp/0758234864?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Prince of Fools",
        "author": "Lawrence, Mark",
        "series": "Red Queen's War",
        "amazon": "http://www.amazon.com/Prince-Fools-Red-Queens-War-ebook/dp/B00G3L1338?tag=lookfwd-20"
    },
    {
        "date": "2014-08-06T04:00:00.000Z",
        "title": "Emperor of Thorns",
        "author": "Lawrence, Mark",
        "series": "Broken Empire",
        "amazon": "http://www.amazon.com/Emperor-Thorns-Broken-Empire-Lawrence/dp/0425256545?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Mystic City",
        "author": "Lawrence, Theo",
        "series": "Mystic City #1 (MMP)",
        "amazon": "http://www.amazon.com/Mystic-City-Trilogy/dp/0385741618?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Toxic Heart",
        "author": "Lawrence, Theo",
        "series": "Mystic City #2",
        "amazon": "http://www.amazon.com/Toxic-Heart-Mystic-Trilogy-ebook/dp/B00B0LP4B8?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "The Curse of the Brimstone Contract",
        "author": "Lawson, Corrina",
        "series": "Steampunk Detectives",
        "amazon": "http://www.amazon.com/Curse-Brimstone-Contract-Steampunk-Detectives-ebook/dp/B00HK6L7TA?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "What Mario Scietto Says",
        "author": "Laybourne, Emila",
        "amazon": "http://www.amazon.com/What-Mario-Scietto-Says-Original-ebook/dp/B00IHCCZGA?tag=lookfwd-20"
    },
    {
        "date": "2014-08-08T04:00:00.000Z",
        "title": "Fragile Destiny",
        "author": "Lazear, Suzanne",
        "series": "Aether Chronicles #3",
        "amazon": "http://www.amazon.com/Fragile-Destiny-Aether-Chronicles-Suzanne/dp/0738739863?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Into the Void",
        "author": "Lebbon, Tim",
        "series": "Dawn of the Jedi",
        "amazon": "http://www.amazon.com/Into-Void-Star-Wars-Dawn/dp/0345545052?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Coldbrook",
        "author": "Lebbon, Tim",
        "amazon": "http://www.amazon.com/Coldbrook-Tim-Lebbon/dp/1781168784?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Ancillary Sword",
        "author": "Leckie, Ann",
        "series": "Imperial Radch #2"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Summerfall",
        "author": "Legrand, Claire",
        "amazon": "http://www.amazon.com/Summerfall-Winterspell-Novella-Claire-Legrand-ebook/dp/B00IBHS6LO?tag=lookfwd-20"
    },
    {
        "date": "2014-08-27T04:00:00.000Z",
        "title": "The Year of Shadows",
        "author": "Legrand, Claire",
        "amazon": "http://www.amazon.com/Year-Shadows-Claire-Legrand-ebook/dp/B005C6GE34?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Winterspell",
        "author": "Legrand, Claire",
        "amazon": "http://www.amazon.com/Winterspell-Claire-Legrand-ebook/dp/B00IBHU4DM?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Stitching Snow",
        "author": "Lewis, RC"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "Tabula Rasa",
        "author": "Lippert-Martin, Kristen",
        "amazon": "http://www.amazon.com/Tabula-Rasa-Kristen-Lippert-Martin/dp/1606845187?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "The Chrysanthemum and the Dandelion",
        "author": "Liu, Ken",
        "series": "Dandelion Dynasty #1"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "The Three Body Problem",
        "author": "Liu, Ken",
        "amazon": "http://www.amazon.com/Three-Body-Problem-Liu-Cixin/dp/0765377063?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Now and For Never",
        "author": "Livingston, Lesley",
        "series": "Never"
    },
    {
        "date": "2014-04-07T04:00:00.000Z",
        "title": "Blue Notes",
        "author": "Lofty, Carie",
        "amazon": "http://www.amazon.com/Blue-Notes-ebook/dp/B00DPM7XQY?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Lofty, Carrie",
        "series": "Christies #3"
    },
    {
        "date": "2014-11-05T05:00:00.000Z",
        "title": "Some Like It Scandalous",
        "author": "Long, Heather",
        "series": "Going Royal",
        "amazon": "http://www.amazon.com/Some-Like-Scandalous-Going-Royal-ebook/dp/B00I15YGB0?tag=lookfwd-20"
    },
    {
        "date": "2014-07-22T04:00:00.000Z",
        "title": "The Fire Wish",
        "author": "Lough, Amber",
        "series": "Jinni Wars",
        "amazon": "http://www.amazon.com/Fire-Wish-Jinni-Wars-ebook/dp/B00I1ZJIZO?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Prodigy",
        "author": "Lu, Marie",
        "series": "Legend #2",
        "amazon": "http://www.amazon.com/Prodigy-Legend-Novel-Marie-Lu/dp/0142427551?tag=lookfwd-20"
    },
    {
        "date": "2014-10-02T04:00:00.000Z",
        "title": "The Young Elites",
        "author": "Lu, Marie",
        "amazon": "http://www.amazon.com/Young-Elites-Marie-Lu-ebook/dp/B00INIXPVW?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "In the End",
        "author": "Lunetta, Demitria",
        "amazon": "http://www.amazon.com/End-Demitria-Lunetta/dp/0062105485?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "To Die Fur",
        "author": "Lyle, Dixie",
        "series": "Whiskey Tango & Foxtrot #2",
        "amazon": "http://www.amazon.com/Die-Whiskey-Tango-Foxtrot-Mystery-ebook/dp/B00IHCYXIS?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Lynn, J",
        "series": "Unchained #2"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Lynn, J",
        "series": "Unchained #3"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Stay With Me",
        "author": "Lynn, J",
        "series": "Wait for You #2",
        "amazon": "http://www.amazon.com/Stay-Me-Wait-You-Lynn-ebook/dp/B00G97XWBC?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Mortal",
        "author": "Maas, Sarah",
        "series": "Court of Thorn & Roses #1"
    },
    {
        "date": "2014-03-13T04:00:00.000Z",
        "title": "The Assassin's Blade",
        "author": "Maas, Sarah",
        "series": "Throne of Glass novella",
        "amazon": "http://www.amazon.com/Assassins-Blade-Throne-Glass-Novellas-ebook/dp/B00H45XC5O?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Crown of Midnight",
        "author": "Maas, Sarah",
        "series": "Throne of Glass #2 (MMP)",
        "amazon": "http://www.amazon.com/Crown-Midnight-Sarah-J-Maas/dp/1619630648?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Heir of Fire",
        "author": "Maas, Sarah",
        "series": "Throne of Glass #3",
        "amazon": "http://www.amazon.com/Heir-Fire-Sarah-J-Maas/dp/1619630656?tag=lookfwd-20"
    },
    {
        "date": 2015,
        "title": "Title Yet To Be Announced",
        "author": "MacAlister, Katie",
        "series": "Dragon #1"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Gated",
        "author": "Parker, Amy Christine",
        "series": "Gated #1",
        "amazon": "http://www.amazon.com/Gated-Amy-Christine-Parker/dp/0449816001?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Astray",
        "author": "Parker, Amy Christine",
        "series": "Gated #2",
        "amazon": "http://www.amazon.com/Astray-Gated-Sequel-Christine-Parker/dp/0449816028?tag=lookfwd-20"
    },
    {
        "date": "2014-10-21T04:00:00.000Z",
        "title": "Beware the Wild",
        "author": "Parker, Natalie",
        "amazon": "http://www.amazon.com/Beware-Wild-Natalie-C-Parker-ebook/dp/B00I2PD8UE?tag=lookfwd-20"
    },
    {
        "date": "2014-04-25T04:00:00.000Z",
        "title": "Acid",
        "author": "Pass, Emma",
        "amazon": "http://www.amazon.com/ACID-Emma-Pass/dp/0385743874?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Just Like Fate",
        "author": "Patrick, Cat; Suzanne Young",
        "amazon": "http://www.amazon.com/Just-Like-Fate-Cat-Patrick/dp/1442472723?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Ask Me",
        "author": "Pauley, Kimberly",
        "amazon": "http://www.amazon.com/Ask-Me-Kimberly-Pauley-ebook/dp/B00FUZPC8K?tag=lookfwd-20"
    },
    {
        "date": "2014-07-15T04:00:00.000Z",
        "title": "The Kiss of Deception",
        "author": "Pearson, Mary",
        "series": "Morrighan Chronicles #1",
        "amazon": "http://www.amazon.com/Kiss-Deception-Morrighan-Chronicles-ebook/dp/B00I1W23A4?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "The Insider",
        "author": "Pearson, Ridley",
        "series": "Kingdom Keepers #7",
        "amazon": "http://www.amazon.com/Kingdom-Keepers-VII-Ridley-Pearson-ebook/dp/B00CB5CTR4?tag=lookfwd-20"
    },
    {
        "date": "2014-06-17T04:00:00.000Z",
        "title": "Red Room",
        "author": "Pearson, Ridley",
        "series": "Risk Agent",
        "amazon": "http://www.amazon.com/Red-Room-Risk-Agent-Novel-ebook/dp/B00G3L6LLW?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Kingdom Keepers Boxed Set",
        "author": "Pearson, Ridley",
        "series": "Kingdom Keepers",
        "amazon": "http://www.amazon.com/Kingdom-Keepers-Boxed-Ridley-Pearson/dp/1484704029?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Fortune's Favors",
        "author": "Perez, Marlene",
        "series": "Nyx Fortuna",
        "amazon": "http://www.amazon.com/Fortunes-Favors-Fortuna-Marlene-Perez-ebook/dp/B00H25FCLS?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Across a Star-Swept Sea",
        "author": "Peterfreund, Diana",
        "series": "(MMP)",
        "amazon": "http://www.amazon.com/gp/product/0062006177?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Given",
        "author": "Pettersson, Vicki",
        "series": "Celestial Blues #3",
        "amazon": "http://www.amazon.com/Given-Celestial-Blues-Book-Three/dp/006206620X?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "The Knight",
        "author": "Pevel, Pierre"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Wolfsbane",
        "author": "Philip, Gillian",
        "series": "Rebel Angel",
        "amazon": "http://www.amazon.com/Wolfsbane-Rebel-Angel-Gillian-Philip-ebook/dp/B00HTJ06BI?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Black Moon Mojo",
        "author": "Phoenix, Adrian",
        "series": "Hoodoo #3"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "Pale Blue Flames",
        "author": "Phoenix, Adrian",
        "series": "Maker's Song #6"
    },
    {
        "date": 2015,
        "title": "After Dark",
        "author": "Pierce, M",
        "series": "Night Owl #3"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Night Owl",
        "author": "Pierce, M",
        "series": "Night Owl #1",
        "amazon": "http://www.amazon.com/Night-Owl-Trilogy/dp/1250058236?tag=lookfwd-20"
    },
    {
        "date": "2014-10-28T04:00:00.000Z",
        "title": "Last Night",
        "author": "Pierce, M",
        "series": "Night Owl #2",
        "amazon": "http://www.amazon.com/Last-Light-Night-Owl-Trilogy/dp/1250058368?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Peacemaker",
        "author": "Pierres, Marianne de",
        "amazon": "http://www.amazon.com/Peacemaker-Marianne-Pierres-ebook/dp/B00GEYKVFK?tag=lookfwd-20"
    },
    {
        "date": "2014-03-13T04:00:00.000Z",
        "title": "Beauty",
        "author": "Pinborough, Sarah",
        "amazon": "http://www.amazon.com/Beauty-Sarah-Pinborough/dp/0575093072?tag=lookfwd-20"
    },
    {
        "date": "2014-05-08T04:00:00.000Z",
        "title": "Poison",
        "author": "Pinborough, Sarah",
        "amazon": "http://www.amazon.com/Poison-Sarah-Pinborough/dp/0575092998?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "Hunted Warrior",
        "author": "Piper, Lindsey",
        "series": "Dragon Kings #3",
        "amazon": "http://www.amazon.com/Hunted-Warrior-Lindsey-Piper-ebook/dp/B00GEECHAM?tag=lookfwd-20"
    },
    {
        "date": "2014-11-08T05:00:00.000Z",
        "title": "The Last Changeling",
        "author": "Pitcher, Chelsea",
        "series": "Faerie Revolutions #1",
        "amazon": "http://www.amazon.com/Last-Changeling-Chelsea-Pitcher/dp/0738740845?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "If I Should Die",
        "author": "Plum, Amy",
        "series": "Revenants #3 (MMP)",
        "amazon": "http://www.amazon.com/Fractured-Truth-Rachel-McClellan/dp/1462113923?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "After the End",
        "author": "Plum, Amy",
        "amazon": "http://www.amazon.com/After-End-Amy-Plum-ebook/dp/B00FJ34XQU?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Sins of the Righteous",
        "author": "Poitevin, Linda",
        "series": "Gregori Legacy"
    },
    {
        "date": "2014-04-10T04:00:00.000Z",
        "title": "Goddess",
        "author": "Powell, Laura",
        "amazon": "http://www.amazon.com/Goddess-Laura-Powell-ebook/dp/B00IUMCCUQ?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Expiration Day",
        "author": "Powell, William Campbell",
        "amazon": "http://www.amazon.com/Expiration-Day-William-Campbell-Powell/dp/0765338289?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Rising Steam",
        "author": "Pratchett, Terry",
        "series": "Discworld",
        "amazon": "http://www.amazon.com/Raising-Steam-Discworld-Terry-Pratchett-ebook/dp/B00FIN0TGY?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "The Science of Discworld",
        "author": "Pratchett, Terry",
        "series": "Discworld",
        "amazon": "http://www.amazon.com/Science-Discworld-Novel-Terry-Pratchett-ebook/dp/B00H6JHQ4G?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "The A-Word",
        "author": "Preble, Joy",
        "series": "Sweet Dead Life #2",
        "amazon": "http://www.amazon.com/-Word-Sweet-Dead-Life-Novel-ebook/dp/B00GQA2E0W?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Third Blood",
        "author": "Price, Kalayna",
        "series": "Haven #3"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Maplecroft",
        "author": "Priest, Cherie",
        "series": "Borden Dispatches",
        "amazon": "http://www.amazon.com/Maplecroft-Borden-Dispatches-Cherie-Priest-ebook/dp/B00IOE3NMG?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "The Legend of Me",
        "author": "Purdy, Rebekah"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "The Winter People",
        "author": "Purdy, Rebekah",
        "amazon": "http://www.amazon.com/Winter-People-Entangled-Teen-ebook/dp/B00H0V1UEC?tag=lookfwd-20"
    },
    {
        "date": "2014-04-22T04:00:00.000Z",
        "title": "Otherwise Engaged",
        "author": "Quick, Amanda",
        "amazon": "http://www.amazon.com/Otherwise-Engaged-Number-Ladies-Lantern-ebook/dp/B00FX7R5QM?tag=lookfwd-20"
    },
    {
        "date": "2014-04-03T04:00:00.000Z",
        "title": "Desiring Lady Caro",
        "author": "Quinn, Ella",
        "series": "Marriage Game #4",
        "amazon": "http://www.amazon.com/Desiring-Lady-Caro-Marriage-Game-ebook/dp/B00FY54N5O?tag=lookfwd-20"
    },
    {
        "date": "2014-10-14T04:00:00.000Z",
        "title": "Snow Like Ashes",
        "author": "Raasch, Sara",
        "series": "Snow Like Ashes #1",
        "amazon": "http://www.amazon.com/Snow-Like-Ashes-Sara-Raasch-ebook/dp/B00HYMBNUS?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Prince's Fire",
        "author": "Raby, Amy",
        "series": "Hearts and Thrones #3",
        "amazon": "http://www.amazon.com/Princes-Fire-Thrones-Amy-Raby/dp/0451417844?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "The Wandering Dragon",
        "author": "Radford, Irene",
        "amazon": "http://www.amazon.com/Wandering-Dragon-Irene-Radford-ebook/dp/B00HZ1E42M?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Feather Bound",
        "author": "Raughley, Sarah",
        "amazon": "http://www.amazon.com/Feather-Bound-Sarah-Raughley-ebook/dp/B00GL3HQBG?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Captured",
        "author": "Redwine, CJ",
        "series": "Savage Chains #1",
        "amazon": "http://www.amazon.com/Savage-Chains-Captured-Caris-Roane-ebook/dp/B00H0V079Q?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "Scarred",
        "author": "Redwine, CJ",
        "series": "Savage Chains #2",
        "amazon": "http://www.amazon.com/Savage-Chains-Scarred-Caris-Roane-ebook/dp/B00H0V0796?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Outcast",
        "author": "Redwine, CJ",
        "series": "Definace novella",
        "amazon": "http://www.amazon.com/Outcast-Defiance-Novella-HarperTeen-Impulse-ebook/dp/B00FOPS4U4?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Deception",
        "author": "Redwine, CJ",
        "series": "Defiance #2 - MMP",
        "amazon": "http://www.amazon.com/Deception-C-J-Redwine/dp/0062117211?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Deliverance",
        "author": "Redwine, CJ",
        "series": "Defiance #3",
        "amazon": "http://www.amazon.com/Deliverance-Number-Couriers-Daughter-Trilogy-ebook/dp/B00H1U9T1S?tag=lookfwd-20"
    },
    {
        "date": "2014-05-23T04:00:00.000Z",
        "title": "Reborn",
        "author": "Reich, Cherie",
        "series": "Fate Challenges #1"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Drowned",
        "author": "Reilly, Nichola",
        "amazon": "http://www.amazon.com/Drowned-Novel-Nichola-Reilly-ebook/dp/B00I66AA9G?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Saint",
        "author": "Reisz, Tiffany",
        "amazon": "http://www.amazon.com/Saint-Tiffany-Reisz-ebook/dp/B00H5I7ZNA?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Sensual Surrender",
        "author": "Reus, Katie",
        "series": "Serafina: Sin City",
        "amazon": "http://www.amazon.com/Sensual-Surrender-Serafina-Sin-City-ebook/dp/B00HGAGY2K?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Bound to Danger",
        "author": "Reus, Katie",
        "series": "Deadly Ops",
        "amazon": "http://www.amazon.com/Bound-Danger-Deadly-Ops-Novel-ebook/dp/B00HZ1E5UI?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Dreamscape",
        "author": "Rich, Christie",
        "series": "Netherworld #1"
    },
    {
        "date": "2014-06-12T04:00:00.000Z",
        "title": "Wings",
        "author": "Richards, Elizabeth",
        "series": "Black City #3",
        "amazon": "http://www.amazon.com/Wings-Black-Novel-Elizabeth-Richards/dp/0399159452?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Revenant",
        "author": "Richardson, Kat",
        "series": "Greywalker",
        "amazon": "http://www.amazon.com/Revenant-Greywalker-Novel-Kat-Richardson-ebook/dp/B00G3L6LY4?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Islands of Rage and Hope",
        "author": "Ringo, John",
        "series": "Black Tide Rising #3",
        "amazon": "http://www.amazon.com/Islands-Rage-Hope-Black-Rising/dp/1476736626?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Declan",
        "author": "Rivers, Rae",
        "series": "Keepers #2"
    },
    {
        "date": 2014,
        "title": "Ethan",
        "author": "Rivers, Rae",
        "series": "Keepers #3"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Shattered",
        "author": "Roane, Caris",
        "series": "Savage Chains #3",
        "amazon": "http://www.amazon.com/Savage-Chains-Shattered-Men-ebook/dp/B00H0V07C8?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Chains of Darkness",
        "author": "Roane, Caris",
        "series": "Men in Chains #2",
        "amazon": "http://www.amazon.com/Chains-Darkness-Men-Caris-Roane/dp/1250035309?tag=lookfwd-20"
    },
    {
        "date": "2014-11-25T05:00:00.000Z",
        "title": "Unchained",
        "author": "Roane, Caris",
        "amazon": "http://www.amazon.com/Unchained-Men-Chains-Caris-Roane/dp/1250035317?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "The Villa",
        "author": "Roberts, Nora",
        "amazon": "http://www.amazon.com/Villa-Nora-Roberts/dp/0425223876?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Sunstone",
        "author": "Robertson, Freya",
        "series": "Heartwood #2",
        "amazon": "http://www.amazon.com/Sunstone-Heartwood-Freya-Robertson-ebook/dp/B00FIMWF2G?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Of Breakable Things",
        "author": "Rolland, A. Lynden",
        "amazon": "http://www.amazon.com/Breakable-Things-Lynden-Rolland/dp/1939765153?tag=lookfwd-20"
    },
    {
        "date": "2014-07-04T04:00:00.000Z",
        "title": "Four: A Divergent Collection",
        "author": "Roth, Veronica",
        "series": "Divergent",
        "amazon": "http://www.amazon.com/Four-Divergent-Collection-Veronica-Roth/dp/0062345214?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "The Doors of Stone",
        "author": "Rothfuss, Patrick",
        "series": "Kingkiller Chronicles #3"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Sanctum",
        "author": "Roux, Madeleine",
        "series": "Asylum",
        "amazon": "http://www.amazon.com/Sanctum-Asylum-Novel-Madeleine-Roux-ebook/dp/B00H1UDZ40?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Reign Storm",
        "author": "Rowen, Michelle",
        "series": "Demon Princess #4"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "From Fear to Eternity",
        "author": "Rowen, Michelle",
        "series": "Immortality Bites",
        "amazon": "http://www.amazon.com/Fear-Eternity-Immortality-Bites-Mystery-ebook/dp/B00HDMLWIW?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "How the White Trash Zombie Got Her Groove Back",
        "author": "Rowland, Diana",
        "amazon": "http://www.amazon.com/White-Trash-Zombie-Groove-Back-ebook/dp/B00HDMRZI8?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Strange Sweet Song",
        "author": "Rule, Adi",
        "amazon": "http://www.amazon.com/Strange-Sweet-Song-Adi-Rule-ebook/dp/B00FCRLF9G?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Violet Night",
        "author": "Rush, Lynn",
        "series": "Violet Dawn #2"
    },
    {
        "date": 2014,
        "title": "The Winner's Crime",
        "author": "Rutkoski, Marie",
        "series": "The Winners #2"
    },
    {
        "date": 2014,
        "title": "The Winner's Kiss",
        "author": "Rutkoski, Marie",
        "series": "The Winners #3"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Winner's Curse",
        "author": "Rutkoski, Marie",
        "series": "The Winners #1",
        "amazon": "http://www.amazon.com/The-Winners-Curse-Trilogy/dp/0374384673?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Tower Lord",
        "author": "Ryan, Anthony",
        "series": "Raven's Shadow",
        "amazon": "http://www.amazon.com/Tower-Lord-Ravens-Shadow-Novel-ebook/dp/B00G3L6ML6?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Vivian Divine is Dead",
        "author": "Sabel, Lauren",
        "amazon": "http://www.amazon.com/Vivian-Divine-Dead-Lauren-Sabel-ebook/dp/B00FJ34Y2I?tag=lookfwd-20"
    },
    {
        "date": "2014-08-19T04:00:00.000Z",
        "title": "The Ripper Affair",
        "author": "Saintcrow, Lilith",
        "series": "Bannon & Care #3",
        "amazon": "http://www.amazon.com/Ripper-Affair-Bannon-Clare-ebook/dp/B00H25FCMW?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Words of Radiance",
        "author": "Sanderson, Brandon",
        "series": "Stormlight Archive",
        "amazon": "http://www.amazon.com/Radiance-Stormlight-Archive-Brandon-Sanderson-ebook/dp/B00DA6YEKS?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "Allegiance",
        "author": "Sandlin, Susannah",
        "series": "Penton Legacy",
        "amazon": "http://www.amazon.com/Allegiance-Penton-Vampire-Susannah-Sandlin-ebook/dp/B00HQLQYWY?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Dark Paradise",
        "author": "Sandro, Angie",
        "series": "Dark Paradise #1",
        "amazon": "http://www.amazon.com/Dark-Paradise-Angie-Sandro-ebook/dp/B00HUU13SQ?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Dark Sacrifice",
        "author": "Sandro, Angie",
        "series": "Dark Paradise #2",
        "amazon": "http://www.amazon.com/Dark-Sacrifice-Angie-Sandro-ebook/dp/B00I30RC4G?tag=lookfwd-20"
    },
    {
        "date": "2014-03-08T05:00:00.000Z",
        "title": "The Sowing",
        "author": "Santos, Steven dos",
        "series": "Torch Keeper #2",
        "amazon": "http://www.amazon.com/Sowing-Torch-Keeper-Steven-Santos/dp/073873540X?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Take Back the Skies",
        "author": "Saxon, Lucy",
        "amazon": "http://www.amazon.com/Take-Back-Skies-Lucy-Saxon/dp/1619633671?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Lock In",
        "author": "Scalzi, John",
        "amazon": "http://www.amazon.com/Lock-John-Scalzi/dp/0765375869?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Feral",
        "author": "Schindler, Holly",
        "amazon": "http://www.amazon.com/Feral-Holly-Schindler-ebook/dp/B00H1UDZ2M?tag=lookfwd-20"
    },
    {
        "date": "2014-04-21T04:00:00.000Z",
        "title": "Survive Until Dawn",
        "author": "Schnyder, PJ",
        "series": "London Undead",
        "amazon": "http://www.amazon.com/Survive-Dawn-London-Undead-Schnyder-ebook/dp/B00GKBIRNU?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Under Nameless Stars",
        "author": "Schoon, Christian",
        "series": "Zenn Scarlett #2",
        "amazon": "http://www.amazon.com/Under-Nameless-Stars-Christian-Schoon-ebook/dp/B00FO5WE00?tag=lookfwd-20"
    },
    {
        "date": "2014-05-20T04:00:00.000Z",
        "title": "End Times",
        "author": "Schumacher, Anna",
        "amazon": "http://www.amazon.com/End-Times-Anna-Schumacher/dp/1595147489?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Sky Pirates",
        "author": "Schwarz, Liesel",
        "series": "Chronicles of Light and Shadow #3",
        "amazon": "http://www.amazon.com/Sky-Pirates-Three-Chronicles-Shadow/dp/0345541308?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Devil in Denim",
        "author": "Scott, Melanie",
        "amazon": "http://www.amazon.com/Devil-Denim-Melanie-Scott/dp/1250040426?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Fire Kin",
        "author": "Scott, MJ",
        "series": "Half-Light City",
        "amazon": "http://www.amazon.com/Fire-Kin-Novel-Half-Light-City-ebook/dp/B00FX7RFLM?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "The Rain Dragon Rescue",
        "author": "Selfors, Suzanne; Dan Santat",
        "series": "Imaginary Veterinary (MMP)",
        "amazon": "http://www.amazon.com/Rain-Dragon-Rescue-Imaginary-Veterinary/dp/0316225495?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "The Order of the Unicorn",
        "author": "Selfors, Suzanne; Dan Santat",
        "series": "Imaginary Veterinary",
        "amazon": "http://www.amazon.com/Order-Unicorn-Imaginary-Veterinary-ebook/dp/B00GG0GLTC?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Empower",
        "author": "Shirvington, Jessica",
        "series": "Violet Eden Chronicles #5",
        "amazon": "http://www.amazon.com/Empower-Embrace-Jessica-Shirvington/dp/1402294603?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Title Yet To Be Announced",
        "author": "Showalter, Gena",
        "series": "Intertwined #4"
    },
    {
        "date": 2014,
        "title": "The Darkest Touch",
        "author": "Showalter, Gena"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Burning Dawn",
        "author": "Showalter, Gena",
        "series": "Angels of Darkness",
        "amazon": "http://www.amazon.com/Burning-Dawn-Gena-Showalter/dp/0373778449?tag=lookfwd-20"
    },
    {
        "date": "2014-06-02T04:00:00.000Z",
        "title": "Tempt Me Eternally",
        "author": "Showalter, Gena",
        "amazon": "http://www.amazon.com/Tempt-Me-Eternally-Gena-Showalter-ebook/dp/B00H5SDPQQ?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Through the Zombie Glass",
        "author": "Showalter, Gena",
        "series": "White Rabbit Chronicles (MMP)",
        "amazon": "http://www.amazon.com/Through-Zombie-Glass-Rabbit-Chronicles/dp/0373211295?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "The Queen of Zombie Hearts",
        "author": "Showalter, Gena",
        "series": "White Rabbit Chronicles",
        "amazon": "http://www.amazon.com/Queen-Zombie-Hearts-Rabbit-Chronicles/dp/0373211317?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "The Dark World",
        "author": "Shultz, Cara Lynn",
        "series": "Dark World #1",
        "amazon": "http://www.amazon.com/Dark-World-Novel-ebook/dp/B00H5I80XE?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Orenda",
        "author": "Silver, Ruth"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Shielf of Winter",
        "author": "Singh, Nalini",
        "series": "Psy-Changeling #13",
        "amazon": "http://www.amazon.com/Shield-Winter-Psy-Changeling-Novel-ebook/dp/B00G3L7TX6?tag=lookfwd-20"
    },
    {
        "date": "2014-11-01T04:00:00.000Z",
        "title": "Archangel's Shadows",
        "author": "Singh, Nalini",
        "series": "Guild Hunter"
    },
    {
        "date": 2014,
        "title": "Shattered",
        "author": "Smith-Ready, Jeri",
        "series": "Shade #3.5"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "This Side of Salvation",
        "author": "Smith-Ready, Jeri",
        "amazon": "http://www.amazon.com/This-Side-of-Salvation-ebook/dp/B00DA98ZUA?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Sekret",
        "author": "Smith, Lindsay",
        "series": "Sekret #1",
        "amazon": "http://www.amazon.com/Sekret-Lindsay-Smith-ebook/dp/B00GVRVG4A?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Barrow",
        "author": "Smylie, Mark",
        "amazon": "http://www.amazon.com/Barrow-Mark-Smylie-ebook/dp/B00F1W08KY?tag=lookfwd-20"
    },
    {
        "date": "2014-07-07T04:00:00.000Z",
        "title": "Fixer",
        "author": "Somers, Jeff",
        "series": "Ustari Cycle",
        "amazon": "http://www.amazon.com/Fixer-Ustari-Cycle-Jeff-Somers-ebook/dp/B009K5D0OY?tag=lookfwd-20"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "We Are Not Good People",
        "author": "Somers, Jeff",
        "series": "Ustari Cycle",
        "amazon": "http://www.amazon.com/Are-Good-People-Ustari-Cycle-ebook/dp/B00BSB4B9Q?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Entranced",
        "author": "Sorensen, Jessica",
        "series": "Guardian Academy #1"
    },
    {
        "date": "2014-10-07T04:00:00.000Z",
        "title": "Breaking Nova",
        "author": "Sorensen, Jessica",
        "amazon": "http://www.amazon.com/Breaking-Nova-Jessica-Sorensen/dp/1455582719?tag=lookfwd-20"
    },
    {
        "date": "2014-11-25T05:00:00.000Z",
        "title": "Unraveling You",
        "author": "Sorensen, Jessica",
        "amazon": "http://www.amazon.com/Unraveling-You-Jessica-Sorensen-ebook/dp/B00IMPIP98?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "How to Seduce a Vampire (Without Really Trying)",
        "author": "Sparks, Kerrelyn",
        "series": "Love at Stake #15",
        "amazon": "http://www.amazon.com/Seduce-Vampire-Without-Really-Trying/dp/0062107763?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Silence of the Wolf",
        "author": "Spear, Terry",
        "series": "Heart of the Wolf #13",
        "amazon": "http://www.amazon.com/Silence-Wolf-Terry-Spear/dp/1402266898?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Jaguar Heat",
        "author": "Spear, Terry",
        "series": "Heart of the Jaguar #3",
        "amazon": "http://www.amazon.com/Jaguar-Hunt/dp/1402266987?tag=lookfwd-20"
    },
    {
        "date": "2014-04-17T04:00:00.000Z",
        "title": "Natural Born Angel",
        "author": "Speer, Scott",
        "series": "Immortal City #2 (MMP)",
        "amazon": "http://www.amazon.com/Natural-Born-Angel-Immortal-Novel/dp/1595145753?tag=lookfwd-20"
    },
    {
        "date": "2014-04-10T04:00:00.000Z",
        "title": "Star Cursed",
        "author": "Spotswood, Jessica",
        "series": "Books of Raziel #2 (MMP)",
        "amazon": "http://www.amazon.com/Star-Cursed-Cahill-Witch-Chronicles/dp/0147509998?tag=lookfwd-20"
    },
    {
        "date": "2014-08-14T04:00:00.000Z",
        "title": "Sisters' Fate",
        "author": "Spotswood, Jessica",
        "series": "Cahill Witch Chronicles #3",
        "amazon": "http://www.amazon.com/Sisters-Fate-Cahill-Witch-Chronicles-ebook/dp/B00FX7LXR4?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Blood and Iron",
        "author": "Sprunk, Jon",
        "series": "Book of the Black Earth",
        "amazon": "http://www.amazon.com/Blood-Iron-Book-Black-Earth-ebook/dp/B00F8EYVJE?tag=lookfwd-20"
    },
    {
        "date": "2014-03-06T05:00:00.000Z",
        "title": "Wayfarer",
        "author": "St. Crow, Lili",
        "series": "Tale of Beauty and Madness",
        "amazon": "http://www.amazon.com/Wayfarer-Tale-Beauty-Madness-Tales/dp/1595146202?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Silence for the Dead",
        "author": "St. James, Simone",
        "amazon": "http://www.amazon.com/Silence-Dead-Simone-St-James-ebook/dp/B00DMCPPJO?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Hunter by Night",
        "author": "Staab, Elisabeth",
        "series": "Chronicles of Yavn",
        "amazon": "http://www.amazon.com/Hunter-by-Night/dp/1402297181?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Shiver",
        "author": "Steifvater, Maggie",
        "series": "Shiver #1 (MMP)",
        "amazon": "http://www.amazon.com/Shiver-Maggie-Stiefvater/dp/0545682789?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Linger",
        "author": "Steifvater, Maggie",
        "series": "Shiver #2 (MMP)",
        "amazon": "http://www.amazon.com/Linger-Shiver-Maggie-Stiefvater/dp/0545682797?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "Forever",
        "author": "Steifvater, Maggie",
        "series": "Shiver #3 (MMP)",
        "amazon": "http://www.amazon.com/Forever-Shiver-Maggie-Stiefvater/dp/0545682800?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "Sinner",
        "author": "Steifvater, Maggie",
        "series": "Mercy Falls",
        "amazon": "http://www.amazon.com/Sinner-Shiver-Maggie-Stiefvater-ebook/dp/B00HERJBV6?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Dance Until Dawn",
        "author": "Stevens, Berni",
        "amazon": "http://www.amazon.com/Dance-until-Dawn-Berni-Stevens/dp/178189132X?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Requiem",
        "author": "Stiefvater, Maggie",
        "series": "Books of Faerie #3"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "The Dream Thieves",
        "author": "Stiefvater, Maggie",
        "series": "Raven Cycle (MMP)",
        "amazon": "http://www.amazon.com/The-Dream-Thieves-Raven-Cycle/dp/054542495X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "Icons",
        "author": "Stohl, Margaret",
        "series": "Icons #1 (MMP)",
        "amazon": "http://www.amazon.com/Icons-Margaret-Stohl/dp/0316205192?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Idols",
        "author": "Stohl, Margaret",
        "series": "Icons #2",
        "amazon": "http://www.amazon.com/Idols-Icons-Margaret-Stohl-ebook/dp/B00GG0GKDO?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "The Day He Kissed Her",
        "author": "Stone, Juliana",
        "amazon": "http://www.amazon.com/Day-Kissed-Boys-Crystal-Lake/dp/1402274866?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Boys Like You",
        "author": "Stone, Juliana",
        "amazon": "http://www.amazon.com/Boys-Like-You-Juliana-Stone/dp/1402291477?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Marked by Fire",
        "author": "Stoque, Josy",
        "series": "Four Elements",
        "amazon": "http://www.amazon.com/Marked-Fire-Four-Elements-Saga-ebook/dp/B00FSFLTN4?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Rain",
        "author": "Sun, Amanda",
        "series": "Paper Gods #2",
        "amazon": "http://www.amazon.com/Rain-Paper-Gods-Amanda-Sun-ebook/dp/B00I66AAFK?tag=lookfwd-20"
    },
    {
        "date": "2014-04-17T04:00:00.000Z",
        "title": "The City Stained Red",
        "author": "Sykes, Sam",
        "series": "Bring Down Heaven #1"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Shadowbound",
        "author": "Sylvan, Dianne",
        "series": "Shadow World",
        "amazon": "http://www.amazon.com/Shadowbound-A-Novel-Shadow-World/dp/0425259846?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Liv, Forever",
        "author": "Talkington, Amy",
        "amazon": "http://www.amazon.com/Liv-Forever-Amy-Talkington-ebook/dp/B00F8EYWNY?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Dreams of Gods & Monsters",
        "author": "Taylor, Laini",
        "series": "Daughter of Smoke & Bone #3",
        "amazon": "http://www.amazon.com/Dreams-Gods-Monsters-Laini-Taylor/dp/0316134074?tag=lookfwd-20"
    },
    {
        "date": "2014-05-01T04:00:00.000Z",
        "title": "Shattered",
        "author": "Terry, Teri",
        "series": "Slated #3",
        "amazon": "http://www.amazon.com/Shattered-Slated-Teri-Terry/dp/0399161740?tag=lookfwd-20"
    },
    {
        "date": "2014-08-07T04:00:00.000Z",
        "title": "Fractured",
        "author": "Terry, Teri",
        "series": "Slated #2",
        "amazon": "http://www.amazon.com/Fractured-Slated-novel-Book-2/dp/0142425044?tag=lookfwd-20"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "The Burning Sky",
        "author": "Thomas, Sherry",
        "series": "Elemental #1 (MMP)",
        "amazon": "http://www.amazon.com/Burning-Sky-Elemental-Trilogy/dp/006220730X?tag=lookfwd-20"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "The Perilous Sea",
        "author": "Thomas, Sherry",
        "series": "Elemental #2",
        "amazon": "http://www.amazon.com/Perilous-Sea-Elemental-Trilogy-ebook/dp/B00HLIOO4C?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Werewolf in Las Vegas",
        "author": "Thompson, Vicki Lewis",
        "series": "Wild About You #6",
        "amazon": "http://www.amazon.com/Werewolf-Las-Vegas-About-Novel/dp/045141568X?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Downfall",
        "author": "Thurman, Rob",
        "series": "Cal Leandros",
        "amazon": "http://www.amazon.com/Downfall-Cal-Leandros-Novel-Niko-ebook/dp/B00HZ1E3TG?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Reboot",
        "author": "Tintera, Amy",
        "series": "Roboot #1 (MMP)",
        "amazon": "http://www.amazon.com/Reboot-Amy-Tintera/dp/0062217089?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Ocean's Kiss",
        "author": "Townsend, Denise",
        "amazon": "http://www.amazon.com/Oceans-Kiss-Denise-Townsend/dp/1619218194?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Darkbound",
        "author": "Tracey, Scott",
        "amazon": "http://www.amazon.com/Darkbound-Legacy-Moonset-Scott-Tracey/dp/073873649X?tag=lookfwd-20"
    },
    {
        "date": "2014-04-30T04:00:00.000Z",
        "title": "Necessary Evil",
        "author": "Tregillis, Ian",
        "series": "Milkweed",
        "amazon": "http://www.amazon.com/Necessary-Evil-Milkweed-Ian-Tregillis-ebook/dp/B00AEC9IZW?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Creators",
        "author": "Truitt, Tiffany",
        "series": "Lost Souls #3",
        "amazon": "http://www.amazon.com/Creators-Lost-Souls-Book-3/dp/1622661524?tag=lookfwd-20"
    },
    {
        "date": "2014-08-14T04:00:00.000Z",
        "title": "Between the Spark and the Burn",
        "author": "Tucholke, April Genevieve",
        "amazon": "http://www.amazon.com/Between-Spark-April-Genevieve-Tucholke/dp/0803740476?tag=lookfwd-20"
    },
    {
        "date": "2014-04-09T04:00:00.000Z",
        "title": "Something Going Around",
        "author": "Turtledove, Harry",
        "amazon": "http://www.amazon.com/Something-Going-Around-Tor-Com-Original-ebook/dp/B00IQO3ZU4?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Cole's Redemption",
        "author": "Tyler, JD",
        "series": "Alpha Pack",
        "amazon": "http://www.amazon.com/Coles-Redemption-Alpha-Novel-ebook/dp/B00EOARA7S?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Her Perfect Mate",
        "author": "Tyler, Paige",
        "series": "X-Ops #1",
        "amazon": "http://www.amazon.com/Perfect-Mate-X-Ops-Paige-Tyler-ebook/dp/B00HUTVFXU?tag=lookfwd-20"
    },
    {
        "date": "2014-04-07T04:00:00.000Z",
        "title": "Attack the Geek",
        "author": "Underwood, Michael",
        "series": "Ree Reyes novella",
        "amazon": "http://www.amazon.com/Attack-Geek-Ree-Reyes-Side-Quest-ebook/dp/B00DPM7QCA?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "Shield and Crocus",
        "author": "Underwood, Michael",
        "amazon": "http://www.amazon.com/Shield-Crocus-Michael-R-Underwood-ebook/dp/B00HWI5OOK?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Indistinguishable from Magic",
        "author": "Valente, Catherynne",
        "amazon": "http://www.amazon.com/Indistinguishable-Magic-Catherynne-Valente/dp/1935234137?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Radiance",
        "author": "Valente, Catherynne",
        "amazon": "http://www.amazon.com/Radiance-Catherynne-M-Valente/dp/0765335298?tag=lookfwd-20"
    },
    {
        "date": "2014-03-18T04:00:00.000Z",
        "title": "Time Traveler's Almanac",
        "author": "Vandermeer, Jeff",
        "amazon": "http://www.amazon.com/Time-Travelers-Almanac-Ann-VanderMeer-ebook/dp/B00FCQS2LQ?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Authority",
        "author": "Vandermeer, Jeff",
        "series": "Southern Reach #2",
        "amazon": "http://www.amazon.com/Authority-Jeff-VanderMeer-ebook/dp/B00GET18P2?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Acceptance",
        "author": "Vandermeer, Jeff",
        "series": "Southern Reach #3",
        "amazon": "http://www.amazon.com/Acceptance-Novel-Southern-Reach-Trilogy/dp/0374104115?tag=lookfwd-20"
    },
    {
        "date": "2014-06-10T04:00:00.000Z",
        "title": "California Bones",
        "author": "VanEekhout, Greg",
        "amazon": "http://www.amazon.com/California-Bones-Greg-van-Eekhout-ebook/dp/B00HTJ049C?tag=lookfwd-20"
    },
    {
        "date": "2014-03-05T05:00:00.000Z",
        "title": "Flesh Which is Not Flesh",
        "author": "Verday, Jessica",
        "amazon": "http://www.amazon.com/gp/product/B00I0G9HV4?tag=lookfwd-20"
    },
    {
        "date": "2014-09-09T04:00:00.000Z",
        "title": "Of Monsters and Madness",
        "author": "Verday, Jessica",
        "series": "Of Monsters and Madness #1",
        "amazon": "http://www.amazon.com/Monsters-Madness-Jessica-Verday/dp/1606844636?tag=lookfwd-20"
    },
    {
        "date": "2014-04-01T04:00:00.000Z",
        "title": "Circle of Blood",
        "author": "Vigui�, Debbie",
        "series": "Witch Hunt #3",
        "amazon": "http://www.amazon.com/Circle-Blood-Witch-Novel-ebook/dp/B00F9F0VK0?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Menagerie",
        "author": "Vincent, Rachel",
        "series": "Menagerie #1",
        "amazon": "http://www.amazon.com/gp/product/077831605X??tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Night Terrors",
        "author": "Waggoner, Tim",
        "amazon": "http://www.amazon.com/Night-Terrors-Tim-Waggoner-ebook/dp/B00H12AIT8?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Hell on Leather",
        "author": "Walker, Julie Ann",
        "series": "Black Knights",
        "amazon": "http://www.amazon.com/Hell-Leather-Black-Knights-Inc/dp/1402294484?tag=lookfwd-20"
    },
    {
        "date": "2014-09-30T04:00:00.000Z",
        "title": "Sweeter Than Sin",
        "author": "Walker, Shiloh",
        "series": "Secrets & Shadows",
        "amazon": "http://www.amazon.com/Sweeter-Than-Sin-Secrets-Shadows/dp/1250032415?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "The Innocent",
        "author": "Walker, Shioh",
        "amazon": "http://www.amazon.com/gp/product/B00H54X8EO?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "The Strange and Beautiful Sorrows of Ava",
        "author": "Walton, Leslye",
        "amazon": "http://www.amazon.com/Strange-Beautiful-Sorrows-Ava-Lavender/dp/0763665665?tag=lookfwd-20"
    },
    {
        "date": "2014-06-05T04:00:00.000Z",
        "title": "Witch Hunt",
        "author": "Warburton, Ruth",
        "series": "Witch Finder #2",
        "amazon": "http://www.amazon.com/Witch-Hunt-Ruth-Warburton/dp/1444914480?tag=lookfwd-20"
    },
    {
        "date": "2014-07-05T04:00:00.000Z",
        "title": "A Witch in Love",
        "author": "Warburton, Ruth",
        "series": "Winter Witch #2",
        "amazon": "http://www.amazon.com/Witch-Love-Winter-Trilogy-ebook/dp/B00GU3FPME?tag=lookfwd-20"
    },
    {
        "date": "2014-08-01T04:00:00.000Z",
        "title": "A Witch Alone",
        "author": "Warburton, Ruth",
        "series": "Winter Witch #3",
        "amazon": "http://www.amazon.com/Witch-Alone-Winter-Trilogy/dp/144490471X?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "The King",
        "author": "Ward, JR",
        "series": "Black Dagger Brotherhood #12",
        "amazon": "http://www.amazon.com/King-Novel-Black-Dagger-Brotherhood/dp/0451417054?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Ecko Burning",
        "author": "Ware, Danie",
        "amazon": "http://www.amazon.com/Ecko-Burning-Danie-Ware-ebook/dp/B00H6J6IUY?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "Stone Cold Lover",
        "author": "Warren, Christine",
        "series": "Gargoyles #2",
        "amazon": "http://www.amazon.com/Stone-Lover-Gargoyle-Christine-Warren-ebook/dp/B00IHCYVTO?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "On Her Watch",
        "author": "Warren, Rie",
        "series": "Don't Tell",
        "amazon": "http://www.amazon.com/Her-Watch-Dont-Tell-ebook/dp/B00ECEA4HY?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "A Dance in Blood Velvet",
        "author": "Warrington, Freda",
        "series": "Blood Wine #2",
        "amazon": "http://www.amazon.com/Dance-Blood-Velvet-Freda-Warrington/dp/1781167060?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Age of Iron",
        "author": "Watson, Angus",
        "series": "Iron Age",
        "amazon": "http://www.amazon.com/Age-Iron-Angus-Watson-ebook/dp/B00HQ2N0G6?tag=lookfwd-20"
    },
    {
        "date": "2014-08-26T04:00:00.000Z",
        "title": "The Broken Eye",
        "author": "Weeks, Brent",
        "series": "Lightbringer",
        "amazon": "http://www.amazon.com/Broken-Eye-Lightbringer-Brent-Weeks-ebook/dp/B00H25FCNG?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Spirits of Ash and Foam",
        "author": "Weismann, Greg",
        "amazon": "http://www.amazon.com/Spirits-Ash-Foam-Ghosts-Novel/dp/1250029821?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "Ruins",
        "author": "Wells, Dan",
        "series": "Partials Sequence #3",
        "amazon": "http://www.amazon.com/Ruins-ebook/dp/B00DB2WQ4C?tag=lookfwd-20"
    },
    {
        "date": "2014-08-12T04:00:00.000Z",
        "title": "Cursed Moon",
        "author": "Wells, Jaye",
        "series": "Prospero's War #2",
        "amazon": "http://www.amazon.com/Cursed-Moon-Prosperos-Jaye-Wells-ebook/dp/B00H25FCIQ?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "Blightborn",
        "author": "Wendig, Chuck",
        "series": "Heartland",
        "amazon": "http://www.amazon.com/Blightborn-Heartland-Trilogy-Chuck-Wendig-ebook/dp/B00I0WPKDW?tag=lookfwd-20"
    },
    {
        "date": "2014-09-02T04:00:00.000Z",
        "title": "Surge",
        "author": "West, Melissa",
        "amazon": "http://www.amazon.com/Surge-Melissa-West/dp/1622663942?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "The Forbidden Library",
        "author": "Wexler, Django",
        "amazon": "http://www.amazon.com/Forbidden-Library-Django-Wexler-ebook/dp/B00DMCPR7O?tag=lookfwd-20"
    },
    {
        "date": "2014-07-01T04:00:00.000Z",
        "title": "The Shadow Throne",
        "author": "Wexler, Django",
        "series": "Shadow Campaigns #2",
        "amazon": "http://www.amazon.com/Shadow-Throne-Book-Two-Campaigns-ebook/dp/B00G3L7U1C?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Flood and Stone",
        "author": "White, Kiersten",
        "series": "Flood and Stone #1"
    },
    {
        "date": "2014-09-09T04:00:00.000Z",
        "title": "Illusion of Fate",
        "author": "White, Kiersten",
        "amazon": "http://www.amazon.com/Illusions-Fate-Kiersten-White/dp/0062135899?tag=lookfwd-20"
    },
    {
        "date": "2014-09-13T04:00:00.000Z",
        "title": "The Chaos of Stars",
        "author": "White, Kiersten",
        "amazon": "http://www.amazon.com/Chaos-Stars-Kiersten-White/dp/0062135872?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "In the Shadows",
        "author": "White, Kiersten; Jim Di Bartolo",
        "amazon": "http://www.amazon.com/Shadows-Kiersten-White/dp/0545561442?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "Cured",
        "author": "Wiggins, Bethany",
        "series": "Stung #2",
        "amazon": "http://www.amazon.com/Cured-Bethany-Wiggins/dp/0802734200?tag=lookfwd-20"
    },
    {
        "date": "2014-08-05T04:00:00.000Z",
        "title": "Unbinding",
        "author": "Wilks, Eileen",
        "series": "World of the Lupi #11",
        "amazon": "http://www.amazon.com/Unbinding-Novel-Lupi-Eileen-Wilks/dp/0425263371?tag=lookfwd-20"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Haven",
        "author": "Williams, Carol Lynch",
        "amazon": "http://www.amazon.com/Haven-Novel-Carol-Lynch-Williams-ebook/dp/B008RLPSLU?tag=lookfwd-20"
    },
    {
        "date": "2014-07-08T04:00:00.000Z",
        "title": "Camelot",
        "author": "Willingham, Bill",
        "series": "Fables #20",
        "amazon": "http://www.amazon.com/Fables-Vol-20-Camelot-Graphic/dp/1401245161?tag=lookfwd-20"
    },
    {
        "date": "2014-07-29T04:00:00.000Z",
        "title": "The Winter King",
        "author": "Wilson, CL",
        "amazon": "http://www.amazon.com/Winter-King-C-L-Wilson-ebook/dp/B00GFZODB6?tag=lookfwd-20"
    },
    {
        "date": "2014-05-29T04:00:00.000Z",
        "title": "Imposter",
        "author": "Winnacker, Susanne",
        "series": "Variants #3",
        "amazon": "http://www.amazon.com/Impostor-Variants-Novel-Susanne-Winnacker-ebook/dp/B009VMC2W2?tag=lookfwd-20"
    },
    {
        "date": "2014-06-26T04:00:00.000Z",
        "title": "Defector",
        "author": "Winnacker, Susanne",
        "series": "Variants #2",
        "amazon": "http://www.amazon.com/Defector-Variants-Novel-Susanne-Winnacker-ebook/dp/B00G3L1E3C?tag=lookfwd-20"
    },
    {
        "date": "2014-03-11T04:00:00.000Z",
        "title": "The Iron Jackal",
        "author": "Wooding, Chris",
        "series": "Tales of the Ketty Jay #3",
        "amazon": "http://www.amazon.com/Iron-Jackal-Chris-Wooding/dp/1781167966?tag=lookfwd-20"
    },
    {
        "date": "2014-03-25T04:00:00.000Z",
        "title": "Silver",
        "author": "Wooding, Chris",
        "amazon": "http://www.amazon.com/Silver-Chris-Wooding-ebook/dp/B00G5N4TMQ?tag=lookfwd-20"
    },
    {
        "date": "2014-04-08T04:00:00.000Z",
        "title": "Origin",
        "author": "Worth, Dani",
        "series": "Kithran Regenesis",
        "amazon": "http://www.amazon.com/Origin-Kithran-Regenesis-Dani-Worth-ebook/dp/B00IBDKQJS?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "The Infinite Sea",
        "author": "Yancey, Rick",
        "series": "Fifth Wave #2",
        "amazon": "http://www.amazon.com/Untitled-5th-Wave-Book-2/dp/0399162429?tag=lookfwd-20"
    },
    {
        "date": "2014-04-15T04:00:00.000Z",
        "title": "The Delving",
        "author": "Young, Jes",
        "amazon": "http://www.amazon.com/Delving-Jes-Young/dp/1849823030?tag=lookfwd-20"
    },
    {
        "date": "2014-05-13T04:00:00.000Z",
        "title": "Raging Star",
        "author": "Young, Moira",
        "series": "Dust Lands #3",
        "amazon": "http://www.amazon.com/Raging-Star-Lands-Moira-Young/dp/1442430028?tag=lookfwd-20"
    },
    {
        "date": "2014-06-03T04:00:00.000Z",
        "title": "Fall From India Place",
        "author": "Young, Samantha",
        "amazon": "http://www.amazon.com/Fall-India-Place-Samantha-Young/dp/0451469402?tag=lookfwd-20"
    },
    {
        "date": 2014,
        "title": "Sneak Thievery",
        "author": "Young, Suzanne",
        "series": "Fade #2"
    },
    {
        "date": "2014-03-04T05:00:00.000Z",
        "title": "The Program",
        "author": "Young, Suzanne",
        "series": "Program #1",
        "amazon": "http://www.amazon.com/Program-Suzanne-Young/dp/1442445815?tag=lookfwd-20"
    },
    {
        "date": "2014-04-29T04:00:00.000Z",
        "title": "The Treatment",
        "author": "Young, Suzanne",
        "series": "Program #2",
        "amazon": "http://www.amazon.com/The-Treatment-Suzanne-Young/dp/1442445831?tag=lookfwd-20"
    },
    {
        "date": "2014-06-24T04:00:00.000Z",
        "title": "Fiendish",
        "author": "Yovanoff, Brenna",
        "amazon": "http://www.amazon.com/Fiendish-Brenna-Yovanoff/dp/1595146385?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Blind Faith",
        "author": "Zanetti, Rebecca",
        "series": "Sin Brothers #3",
        "amazon": "http://www.amazon.com/Blind-Faith-Rebecca-Zanetti-ebook/dp/B00EXTVSHI?tag=lookfwd-20"
    },
    {
        "date": "2014-05-27T04:00:00.000Z",
        "title": "Bad Luck Girl",
        "author": "Zettel, Sarah",
        "series": "American Fairy #3",
        "amazon": "http://www.amazon.com/Bad-Luck-Girl-American-Trilogy/dp/0375869409?tag=lookfwd-20"
    },
    {
        "date": "2014-09-16T04:00:00.000Z",
        "title": "Echoes of Us",
        "author": "Zhang, Kat",
        "series": "Hybrid Chronicles #3",
        "amazon": "http://www.amazon.com/Echoes-Us-Hybrid-Chronicles-Book-ebook/dp/B00HLIK6RQ?tag=lookfwd-20"
    },
    {
        "date": "2014-05-06T04:00:00.000Z",
        "title": "Thick as Thieves",
        "author": "Zink, Michelle",
        "amazon": "http://www.amazon.com/Thick-as-Thieves-Michelle-Zink/dp/140131287X?tag=lookfwd-20"
    },
    {
        "date": "2014-09-23T04:00:00.000Z",
        "title": "The Wildalone",
        "author": "Zourkova, Krassi",
        "amazon": "http://www.amazon.com/Wildalone-Krassi-Zourkova-ebook/dp/B00HLIYX1Q?tag=lookfwd-20"
    }
];

for(var attr in data){
    var ind = data[attr]
    var rec = new Book(ind);

    rec.save(function(error, data){
        if(error){
            console.log('Error inserting data '+error)
        }
        else{
            console.log('Inserted '+attr)
        }
        done++
        if (done == tot) {
            finallyDone()
        }
    });
}

finallyDone = function() {
    console.log('\n\nAll data filled...')
    process.exit(0)
}