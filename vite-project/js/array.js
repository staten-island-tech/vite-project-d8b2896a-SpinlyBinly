const opps = [
  {
    firstName: "Muhammad",
    lastName: "Ali",
    abilities: ["boxing", "strong"],
    weaknesses: ["Poor Defense", "flying", "heights"],
    janeWin: true,
    img: "https://static.wikia.nocookie.net/mms/images/7/71/RedCharacter.png/revision/latest/scale-to-width/360?cb=20191102171300",
    description:"bro is lit dead whats he gonna do he never even competed in youtuber vs tiktoker boxing match"
  },

  {
    firstName: "T-rex",
    lastName: "from Jurassic world",
    abilities: ["teeth", "bite", "scary"],
    weaknesses: ["short arms"],
    janeWin: false,
    img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png",
    description:"no way in hell bro would gobble me down in two bites and still have room for dessert"
  },

  {
    firstName: "Oleg",
    lastName: "Ponyatyshyn",
    abilities: ["master coder", "volleyball", "short arms"],
    weaknesses: ["heritage russian", "mrs. levina"],
    janeWin: true,
    description: "bro is not even level 100 in pegel blast"
  },

  {
    firstName: "Muhammad",
    lastName: "Ali's dog",
    abilities: ["teeth", "bite", "scary"],
    weaknesses: [],
    janeWin: false,
    img: "https://a-z-animals.com/media/2021/12/Bichon-Frise.jpg",
    description: "look at those chompers!!!!!!"
  },

  {
    firstName: "Peely",
    lastName: "",
    abilities: ["Fortnite Battlepass"],
    weaknesses: [""],
    janeWin: false,
    img: "https://spirit.scene7.com/is/image/Spirit/01544022-a?$Detail$",
    description: "idk look at those pecs"
  },

  {
    firstName: "Confucius",
    lastName: "",
    abilities: [
      "",
    ],
    weaknesses: [],
    janeWin: true,
    img: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00133640_wj1ijy.jpg",
    description: "bro would defend himself by reciting the four books and five classics!!!!!!"
  },

  {
    firstName: "Fnord",
    lastName: "Peggleblast",
    abilities: ["Supirior Guide", "mlp reject"],
    weaknesses: ["ginger"],
    janeTie: true,
    img: "https://static.wikia.nocookie.net/peggle/images/3/3a/Fnord.png/revision/latest?cb=20150315091602",
    description: "on an even playing field yeah but he literally cheats"
  },

  {
    firstName: "Chief",
    lastName: "the Cow",
    abilities: ["babymaker3000", "chick magnet", "chaRIZZma"],
    weaknesses: [
      "low magnesium",
      "low potassium",
      "low phosphorus",
      "protein-energy malnutrition",
    ],
    janeTie: true,
    img: "https://www.ciwf.org.uk/media/3836620/Dairy-cow.jpg?center=0.3723333304268973,0.49086165863913594&mode=crop&width=342&height=342&&rnd=130851690420000000",
    description: "it would be a tough battle but overall i think we're pretty evenly matched"
  },

  {
    firstName: "Kratos",
    lastName: "",
    abilities: [
      "Stamina",
      "Speed",
      "Healing",
      "Immortality",
      "Power Nullification",
      "Rage",
      "Electricity Manipulation",
      "Intelligence",
      "Shapeshifting",
      "Strength",      
      "Superhuman agility",
      "Time Manipulation",
    ],
    weaknesses: ["Illusions", "Nightmares", "too angy"],
    janeWin: false,
    img: "https://upload.wikimedia.org/wikipedia/en/2/2f/Kratos_PS4.png",
    description: "no!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  },

  {
    firstName: "Figment",
    lastName: "of imagination",
    abilities: ["purple"],
    weaknesses: ["purple"],
    janeWin: true,
    img: "https://factsandfigment.com/wp-content/uploads/2019/10/167-1674648_figments-of-the-imagination-disney-figment.jpg",
    description: "who couldnt beat figment tbh"
  },

  {
    firstName: "Terence",
    lastName: "Angry Birds",
    abilities: ["round", "big", "red"],
    weaknesses: ["ginger"],
    janeWin: false,
    img: "https://static.wikia.nocookie.net/poohadventures/images/2/23/Terence_copy.png/revision/latest/scale-to-width-down/200?cb=20220503010445",
    description: "my ass is not beating terence he is the 200 pound man brunetti warned us not to stand next to on the bus"
  },

  {
    firstName: "Red",
    lastName: "M&M",
    abilities: ["round", "big", "red"],
    weaknesses: ["ginger"],
    janeTie: true,
    img: "https://static.wikia.nocookie.net/mms/images/7/71/RedCharacter.png/revision/latest/scale-to-width/360?cb=20191102171300",
    description: "tbh it would be a close battle but in the end i think i could come out on top"
  },

  {
    firstName: "Yosemite",
    lastName: "Sam",
    abilities: ["round", "big", "red", "guns"],
    weaknesses: ["ginger"],
    janeWin: false,
    img: "https://static.tvtropes.org/pmwiki/pub/images/yosemitesam.jpg",
    description: "do you see those guns i have no way to even defend myself"
  },

  {
    firstName: "MOAB",
    lastName: "",
    abilities: ["round", "big", "blue"],
    weaknesses: ["pop", "darts"],
    janeWin: true,
    img: "https://static.wikia.nocookie.net/b__/images/b/ba/BTD6MOAB.png/revision/latest?cb=20180809063308&path-prefix=bloons",
    description: "one hit from the alchemist monkey's potions and this thing is gone"
  },
  {
    firstName: "Young",
    lastName: "Sheldon",
    abilities: ["round", "big", "blue"],
    weaknesses: ["muhammad ali's dog"],
    janeWin: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zXHK0JllyLNHXPsCUeiwAhyI6pZJph1NSNRJW578BLe6Fe-_z7OKuPDnZcFRlDd0bNM&usqp=CAU",
    description: "i only want to fight the polar express kid a LITTLE more than this guy"
  },
  {
    firstName: "Boy from the Polar Express",
    lastName: "",
    abilities: ["smart",],
    weaknesses: ["no one i ever wanted to fight more", "nerd"],
    janeWin: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLl1U45Tf2KJnMInqjriui6wICumzO_TuZEEXPMj8_Q&s",
    description:"no one i ever wanted to fight more"
  },
];
export { opps };
