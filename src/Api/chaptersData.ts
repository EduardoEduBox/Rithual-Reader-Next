enum Colors {
  Normal = "rgb(216 180 254)",
  Danger = "#ff6161",
  Alert = "#feffb5",
  Happy = "#a6df90",
}

class ChaptersData {
  id: number;
  chapter: string;
  name: string;
  description: string;
  style: Colors;
  bcImage: string;
  advice: string;
  prePage: string;
  pages: string[];

  constructor(
    id: number,
    chapter: string,
    name: string,
    description: string,
    style: Colors,
    bcImage: string,
    advice: string,
    prePage: string,
    pages: string[]
  ) {
    this.id = id;
    this.chapter = chapter;
    this.name = name;
    this.description = description;
    this.style = style;
    this.bcImage = bcImage;
    this.advice = advice;
    this.prePage = prePage;
    this.pages = pages;
  }
}

const chapters = [
  new ChaptersData(
    0,
    `Capítulo - 0: `,
    ` Invasão`,
    "A carnificina assola o vilarejo enquanto um demônio mata impiedosamente. Um garoto se confronta com o assassino e uma lança revela seu verdadeiro poder.",
    Colors.Danger,
    "https://cdn.discordapp.com/attachments/421344962303623189/1149213090391539792/image.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174017961767002/rithual_pre_pagina_cap_0.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157000181461132/rithual_pagina_1_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157148840165406/rithual_pagina_2_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157176031846400/rithual_pagina_3_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157212178354206/rithual_pagina_4_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157212484534333/rithual_pagina_5_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157212820086784/rithual_pagina_6_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157213235318864/rithual_pagina_7_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157213537304586/rithual_pagina_8_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157213931577395/rithual_pagina_9_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157375223541830/rithual_pagina_10_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157375525539960/rithual_pagina_11_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157375844294687/rithual_pagina_12_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157376146288741/rithual_pagina_13_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157376481841282/rithual_pagina_14_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157376808984677/rithual_pagina_15_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157377178087514/rithual_pagina_16_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157377454919810/rithual_pagina_17_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157377819812010/rithual_pagina_18_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157378134388736/rithual_pagina_19_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157454412001300/rithual_pagina_20_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157454726561872/rithual_pagina_21_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157454999199844/rithual_pagina_22_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157455473160202/rithual_pagina_23_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157455808692234/rithual_pagina_24_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157456102301736/rithual_pagina_25_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157456400101416/rithual_pagina_26_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157456764993686/rithual_pagina_27_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157457125711872/rithual_pagina_28_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157457436094554/rithual_pagina_29_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157548221796412/rithual_pagina_30_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157548611870801/rithual_pagina_31_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157548964204575/rithual_pagina_32_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157549387812894/rithual_pagina_33_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157549731762260/rithual_pagina_34_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157550167953488/rithual_pagina_35_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157550461558865/rithual_pagina_36_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157550797115453/rithual_pagina_37_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157551082311830/rithual_pagina_38_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157551417860156/rithual_pagina_39_cap_0.png",
    ]
  ),
  new ChaptersData(
    1,
    "Capítulo - 1: ",
    ` Padaria`,
    "Singer sai de casa e vai à padaria em Belgadina. Novidades sobre sua matrícula escolar deixam-no ansioso. O que o futuro reserva para ele após essa compra significativa?",
    Colors.Happy,
    "https://cdn.discordapp.com/attachments/421344962303623189/1149213431665270814/image.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141383080557428776/ritual_pre_pagina_cap_1.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383779659816960/ritual_pagina_1_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383780179914894/ritual_pagina_2_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383780511260742/ritual_pagina_3_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383780851011584/ritual_pagina_4_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383781320761384/ritual_pagina_5_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383781664706723/ritual_pagina_6_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383782071545946/ritual_pagina_7_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383782495166595/ritual_pagina_8_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383782805549156/ritual_pagina_9_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383783233364048/ritual_pagina_10_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141385150178017321/ritual_pagina_11_cap_1.png",
    ]
  ),
  new ChaptersData(
    2,
    "Capítulo - 2: ",
    " Pai e irmão",
    "Singer reflete sobre a matrícula escolar e suas expectativas de liberdade. Em casa, encontra seus familiares e descansa. O que o aguarda no tão esperado primeiro dia de aula?",
    Colors.Normal,
    "https://cdn.discordapp.com/attachments/421344962303623189/1149213613320568962/image.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1149049756690165790/ritual_pre_pagina_cap_2.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048306115297320/ritual_pagina_12_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048306606035065/ritual_pagina_13_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048306966741032/ritual_pagina_14_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048307432312933/ritual_pagina_15_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048307805597736/ritual_pagina_16_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048308380225618/ritual_pagina_17_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048308690599936/ritual_pagina_18_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048308988399656/ritual_pagina_19_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048309269414008/ritual_pagina_20_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149048309604954112/ritual_pagina_21_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049251805003917/ritual_pagina_22_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049252190896178/ritual_pagina_23_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049252492890244/ritual_pagina_24_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049252799053884/ritual_pagina_25_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049253344329738/ritual_pagina_26_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049253570826250/ritual_pagina_27_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049253835046942/ritual_pagina_28_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049254116081784/ritual_pagina_29_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049254418075770/ritual_pagina_30_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049254678102087/ritual_pagina_31_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049355781812234/ritual_pagina_32_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049356163502222/ritual_pagina_33_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049356603895889/ritual_pagina_34_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049357061062706/ritual_pagina_35_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049357442756718/ritual_pagina_36_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049357857980527/ritual_pagina_37_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049358193537154/ritual_pagina_38_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049358575206451/ritual_pagina_39_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049359204372530/ritual_pagina_40_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149049359594426478/ritual_pagina_41_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149050977375232170/ritual_pagina_42_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149050978172141718/ritual_pagina_43_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149050978822266911/ritual_pagina_44_cap_2.png",
    ]
  ),
  new ChaptersData(
    3,
    "Capítulo - 3: ",
    " Paisagem",
    "Singer está ansioso para o primeiro dia de aula. Seu irmão o acompanha e novas experiências o cercam. Chegando à escola, Singer está repleto de expectativas. O que o aguarda nesse novo ambiente?",
    Colors.Happy,
    "https://cdn.discordapp.com/attachments/421344962303623189/1149213853280915536/image.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1149056725111013426/ritual_pre_pagina_cap_3.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056325448384583/ritual_pagina_45_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056325897179327/ritual_pagina_46_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056326438228028/ritual_pagina_47_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056326811537498/ritual_pagina_48_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056327197397002/ritual_pagina_49_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056327679754470/ritual_pagina_50_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056327985942618/ritual_pagina_51_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056328451494000/ritual_pagina_52_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056328812216470/ritual_pagina_53_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056329202290841/ritual_pagina_54_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056397691068507/ritual_pagina_55_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056398026616903/ritual_pagina_56_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056398412480672/ritual_pagina_57_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056398852890654/ritual_pagina_58_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056399276507277/ritual_pagina_59_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056399595282653/ritual_pagina_60_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056399947608154/ritual_pagina_61_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056400408969256/ritual_pagina_62_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056400744525924/ritual_pagina_63_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056401210089533/ritual_pagina_64_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056497721016380/ritual_pagina_65_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056498455031878/ritual_pagina_66_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056498958336140/ritual_pagina_67_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056499545550968/ritual_pagina_68_cap_2.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056499872694302/ritual_pagina_69_cap_2.png",
    ]
  ),
  new ChaptersData(
    4,
    "Capítulo - 4: ",
    " Escola",
    "Singer maravilhado com a escola, adentra seus corredores. Enquanto isso, seu irmão deixa a escola, encontra seus parceiros e seguem em frente. A pergunta paira: estão realmente prontos? Armas são preparadas.",
    Colors.Alert,
    "https://cdn.discordapp.com/attachments/421344962303623189/1149214180163989574/image.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1149056725446561852/ritual_pre_pagina_cap_4.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056500250194030/ritual_pagina_70_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056500686409860/ritual_pagina_71_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056501198094366/ritual_pagina_72_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056501802086501/ritual_pagina_73_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056502141833236/ritual_pagina_74_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056540045746316/ritual_pagina_75_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056540477751296/ritual_pagina_76_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056540888797335/ritual_pagina_77_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056541434052820/ritual_pagina_78_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056541752828025/ritual_pagina_79_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056542126112909/ritual_pagina_80_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056542541353062/ritual_pagina_81_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056542893678642/ritual_pagina_82_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056543275356270/ritual_pagina_83_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056543657042012/ritual_pagina_84_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056585105145936/ritual_pagina_85_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056585503613000/ritual_pagina_86_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056585830780998/ritual_pagina_87_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056586128556234/ritual_pagina_88_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056586539606057/ritual_pagina_89_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056586841608192/ritual_pagina_90_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056587206492190/ritual_pagina_91_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056587521073213/ritual_pagina_92_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056587885989948/ritual_pagina_93_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056588166987786/ritual_pagina_94_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056659478564954/ritual_pagina_95_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056660028002406/ritual_pagina_96_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056660380332132/ritual_pagina_97_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056660824920104/ritual_pagina_98_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056661235970261/ritual_pagina_99_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056661626032198/ritual_pagina_100_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056661961584882/ritual_pagina_101_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056662284537896/ritual_pagina_102_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056662762696714/ritual_pagina_103_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056663211479110/ritual_pagina_104_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056723680759848/ritual_pagina_105_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056723932422144/ritual_pagina_106_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056724192460820/ritual_pagina_107_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056724523815054/ritual_pagina_108_cap_4.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1149056724804837407/ritual_pagina_109_cap_4.png",
    ]
  ),
];

export default chapters;
