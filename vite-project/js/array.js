const opps = [
  {
    firstName: "Muhammad",
    lastName: "Ali",
    abilities: ["boxing", "strong"],
    weaknesses: ["Poor Defense", "flying", "heights"],
    janeWin: true,
    img: "https://www.freeiconspng.com/thumbs/muhammad-ali-png/muhammad-ali-4.png",
    description:
      "bro is lit dead whats he gonna do he never even competed in youtuber vs tiktoker boxing match",
  },

  {
    firstName: "T-rex",
    lastName: "from Jurassic world",
    abilities: ["teeth", "bite", "scary"],
    weaknesses: ["short arms"],
    janeWin: false,
    img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Rexy-_the_Jurassic_Park_Tyrannosaurus_rex.png",
    description:
      "no way in hell bro would gobble me down in two bites and still have room for dessert",
  },

  {
    firstName: "Oleg",
    lastName: "Ponyatyshyn",
    abilities: ["master coder", "volleyball", "short arms"],
    weaknesses: ["heritage russian", "mrs. levina"],
    janeWin: true,
    img: "https://mail.google.com/mail/u/0?ui=2&ik=e9f4e1419b&attid=0.1&permmsgid=msg-a:r-7057354422312273891&th=18c32d8051ad923d&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_JmUPP_9R8PY-CENoPErlqTHYhQowk0KXK4paUVMxr9Vpw5uqF5Lq2hNAdPKjU4OGTDdtZ0NVGmZR2nzxaZQCv6DcMFreSmzhUH7zO8AhBCC4rAzunA8IdTO4&disp=emb&realattid=18c32d7fb7fe264aa351",
    description: "bro is not even level 100 in peggle blast",
  },

  {
    firstName: "Muhammad",
    lastName: "Ali's dog",
    abilities: ["teeth", "bite", "scary"],
    weaknesses: [],
    janeWin: false,
    img: "https://www.freeiconspng.com/thumbs/dog-png/dog-png-18.png",
    description: "look at those chompers!!!!!!",
  },

  {
    firstName: "Peely",
    lastName: "",
    abilities: ["Fortnite Battlepass"],
    weaknesses: [""],
    janeWin: false,
    img: "https://www.pngmart.com/files/22/Fortnite-Peely-PNG-Isolated-File.png",
    description: "idk look at those pecs",
  },
  {
    firstName: "Boy from the Polar Express",
    lastName: "",
    abilities: ["smart"],
    weaknesses: ["no one i ever wanted to fight more", "nerd"],
    janeWin: true,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLl1U45Tf2KJnMInqjriui6wICumzO_TuZEEXPMj8_Q&s",
    description: "no one i ever wanted to fight more",
  },
  {
    firstName: "Confucius",
    lastName: "",
    abilities: [""],
    weaknesses: [],
    janeWin: true,
    img: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00133640_wj1ijy.jpg",
    description:
      "bro would defend himself by reciting the four books and five classics!!!!!!",
  },

  {
    firstName: "Fnord",
    lastName: "Peggleblast",
    abilities: ["Supirior Guide", "mlp reject"],
    weaknesses: ["ginger"],
    janeTie: true,
    img: "https://www.spriters-resource.com/resources/sheet_icons/134/136764.png?updated=1596395738",
    description: "on an even playing field yeah i could win but he literally cheats",
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
    img: "https://www.freepnglogos.com/uploads/cow-png/cow-dairy-farms-american-dairy-association-north-east-35.png",
    description:
      "it would be a tough battle but overall i think we're pretty evenly matched",
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
    description: "no!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  },

  {
    firstName: "Figment",
    lastName: "of imagination",
    abilities: ["purple"],
    weaknesses: ["purple"],
    janeWin: true,
    img: "https://i.pinimg.com/originals/0a/a1/71/0aa17125b79bd3f72e5fa1e597d35c57.png",
    description: "who couldnt beat figment tbh",
  },

  {
    firstName: "Terence",
    lastName: "Angry Birds",
    abilities: ["round", "big", "red"],
    weaknesses: ["ginger"],
    janeWin: false,
    img: "https://static.wikia.nocookie.net/0dc8b41e-c918-4314-9b1e-a6700cd1d9bf/scale-to-width/370",
    description:
      "my ass is not beating terence he is the 200 pound man brunetti warned us not to stand next to on the bus",
  },

  {
    firstName: "Red",
    lastName: "M&M",
    abilities: ["round", "big", "red"],
    weaknesses: ["ginger"],
    janeTie: true,
    img: "https://preview.redd.it/kora6bpyx8o81.png?width=293&format=png&auto=webp&s=ba87c04a73918acb6173651d2f295b326aaade9f",
    description:
      "tbh it would be a close battle but on a good day i think i could come out on top",
  },

  {
    firstName: "Yosemite",
    lastName: "Sam",
    abilities: ["round", "big", "red", "guns"],
    weaknesses: ["ginger"],
    janeWin: false,
    img: "https://i.pinimg.com/originals/db/cf/97/dbcf970b07205b79d58f8199d6a294e1.png",
    description: "do you see those guns i have no way to even defend myself",
  },

  {
    firstName: "MOAB",
    lastName: "",
    abilities: ["round", "big", "blue"],
    weaknesses: ["pop", "darts"],
    janeWin: true,
    img: "https://preview.redd.it/hey-there-fellow-bloons-moab-here-and-today-were-gonna-be-v0-renvp0q0wrua1.png?width=640&crop=smart&auto=webp&s=1cf3d194c5605f929f606a44cc87ccb2204a50e8",
    description:
      "one hit from the alchemist monkey's potions and this thing is gone",
  },
  {
    firstName: "Young",
    lastName: "Sheldon",
    abilities: ["round", "big", "blue"],
    weaknesses: ["muhammad ali's dog"],
    janeWin: true,
    img: "https://static.tvtropes.org/pmwiki/pub/images/sheldon_cooper.png",
    description:
      "i only want to fight the polar express kid a LITTLE more than this guy",
  },

];
export { opps };
