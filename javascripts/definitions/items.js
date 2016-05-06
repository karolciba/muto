function items_data(items) {
  //////////
  // WEAPONS
  //////////

  // definicja itemu - najpierw klucz którym posługujemy sie w reszcie kodu, potem obiekt z parametrami
  items.define_weapon("Dzida", {
    name: "dzida_name",
    desc: "dzida_desc",
    info: 'dzida_info',
    icon: 'assets/img/items/bron/podstawowa/bron_drzewcowa/dzida.png',	
	attack: 10,
    min_attack: 1,
    speed: 0.6,
    noise: 20,
    base_price: 100,
    ranged: false,
    animation: 'pole',
    success_sound_src: [ 'assets/audio/items/dzida.ogg', 'assets/audio/items/wetstab.ogg', /*'assets/audio/creatures/huha.ogg'*/],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/dzida.ogg', 'assets/audio/items/wetstab2.ogg', /*'assets/audio/items/maleattack3.ogg',*/ ],
    failure_sound_volume: 1.0,
  });
  items.define_weapon("Gdański trójząb", {
    name: "gdanski_trojzab_name",
    desc: "gdanski_trojzab_desc",
	info: "gdanski_trojzab_info",
    icon: 'assets/img/items/bron/podstawowa/bron_drzewcowa/trojzab.png',	
	attack: 25,
    min_attack: 3,
    speed: 0.8,
    noise: 20,
    base_price: 400,
    ranged: false,
    animation: 'pole',
    level: [0],
    success_sound_src: [ 'assets/audio/items/wetstab.ogg', 'assets/audio/items/dzida.ogg', /*'assets/audio/creatures/maleshout4.ogg',*/ ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/wetstab2.ogg', /*'assets/audio/creatures/angry-man-growl.ogg',*/ ],
    failure_sound_volume: 1.0,
  });
  items.define_weapon("Su yari", {
    name: 'su_yari_name',
    desc: 'su_yari_desc',
	info: 'su_yari_info',
    icon: 'assets/img/items/bron/podstawowa/bron_drzewcowa/su_yari.png',	
	attack: 45,
    min_attack: 6,
    speed: 0.8,
    noise: 20,
    base_price: 650,
    ranged: false,
    animation: 'pole',
    level: [3],
    success_sound_src: [ 'assets/audio/items/wetstab3.ogg', /*'assets/audio/items/meleesound2.ogg',*/ ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/dzida.ogg', ],
    failure_sound_volume: 1.0,
  });
  items.define_weapon("Ciężka rękawica uderzeniowa", {
    name: "ciezka_rekawica_uderzeniowa_name",
    desc: "ciezka_rekawica_uderzeniowa_desc",
	info: "ciezka_rekawica_uderzeniowa_info",
    icon: 'assets/img/items/bron/podstawowa/bez_broni/rekawica_uderzeniowa.png',
    attack: 80,
    min_attack: 12,
    speed: 0.9,
    noise: 50,
    base_price: 1200,
	level: [2],
    ranged: false,
    animation: 'natural',
    success_sound_src: [ 'assets/audio/items/rekawica.ogg'],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
  });
  items.define_weapon("Nowak-3", {
    name: 'nowak_3_name',
    desc: 'nowak_3_desc',
	info: 'nowak_3_info',
    icon: 'assets/img/items/bron/podstawowa/pistolety/nowak-3.png',   
    attack: 35,
    min_attack: 5,
    ranged: true,
    range: 160,
    max_ammo: 40,
    speed: 0.9,
    noise: 100,
    base_price: 400,
	level: [0],
    success_sound_src: [ 'assets/audio/items/pistol.ogg' ], 
	//'assets/audio/items/gun2.ogg',// 
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/gun3.ogg', ],
    failure_sound_volume: 1.0,
    animation: 'pistol',
  });
  items.define_weapon("Terkotka", { 	
    name: "terkotka_name",
    desc: "terkotka_desc",
	info: "terkotka_info",
    icon: 'assets/img/items/bron/podstawowa/pistolety/terkotka.png', 
    attack: 20,
    min_attack: 3,
    ranged: true,
    range: 120,
    max_ammo: 60,
    speed: 0.4,
    noise: 120,
    base_price: 650,
	level: [1],
    success_sound_src: [ 'assets/audio/items/terkotka1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'pistol',
  });
  items.define_weapon("Pistolet maszynowy G-84", {
    name: 'G84_name',
    desc: 'G84_desc',
	info: 'G84_info',
    icon: 'assets/img/items/bron/podstawowa/pistolety/pistolet_maszynowy_g-84.png',   
    attack: 55,
    min_attack: 5,
    ranged: true,
    range: 160,
    max_ammo: 80,
    speed: 0.2,
    noise: 60,
    base_price: 1000,
	level: [3],
    success_sound_src: [ 'assets/audio/items/G-84.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'pistol',
  });
  items.define_weapon("Sand Falcon", {
    name: "Sand_Falcon_name",
    desc: "Sand_Falcon_desc",
	info: "Sand_Falcon_info",
    icon: 'assets/img/items/bron/podstawowa/pistolety/falcon.png', 
    attack: 95,
    min_attack: 15,
    ranged: true,
    range: 80,
    max_ammo: 35,
    speed: 1.4,
    noise: 250,
    base_price: 1500,
	level: [7],
    success_sound_src: [ 'assets/audio/items/sandfalcon.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'pistol',
  });
  items.define_weapon("Kusza pistoletowa Y-3", {
    name: "kusza_pistoletowa_y_3_name",
    desc: "kusza_pistoletowa_y_3_desc",
	info: "kusza_pistoletowa_y_3_info",
    icon: 'assets/img/items/bron/specjalna/pogromca/kusze/kusza_pistoletowa.png',  
	attack: 60,
    min_attack: 10,
    ranged: true,
    range: 95,
	max_ammo: 50,
    speed: 1,
    noise: 30,
    base_price: 1000,
	level: [4],
    success_sound_src: [ 'assets/audio/items/throwknife2.ogg' ],
	//'assets/audio/items/arrow.ogg', //
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/shout1.ogg', ],
    failure_sound_volume: 1.0,
    animation: 'crossbow',
	classes: [ 'Pogromca' ],
  });
  items.define_weapon("Kusza myśliwska Artemida", {
    name: "Artemida_name",
    desc: "Artemida_desc",
	info: "Artemida_info",
    icon: 'assets/img/items/bron/specjalna/pogromca/kusze/artemida.png',  
	attack: 80,
    min_attack: 14,
    ranged: true,
    range: 105,
	max_ammo: 60,
    speed: 1,
    noise: 30,
    base_price: 1500,
	level: [5],
    success_sound_src: [ 'assets/audio/items/artemida1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'crossbow',
	classes: [ 'Pogromca' ],
  });
  items.define_weapon("Szpon Smoka", {
    name: "Talon_name",
    desc: "Talon_desc",
	info: "Talon_info",
    icon: 'assets/img/items/bron/specjalna/pogromca/kusze/szpon_smoka.png',  
	attack: 110,
    min_attack: 18,
    ranged: true,
    range: 125,
	max_ammo: 65,
    speed: 1,
    noise: 30,
    base_price: 2200,
	level: [8],
    success_sound_src: [ 'assets/audio/items/szponsmoka1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'crossbow',
	classes: [ 'Pogromca' ],
	});
  items.define_weapon("Białostocki odkażacz", {
    name: "bialostocki_odkazacz_name",
    desc: "bialostocki_odkazacz_desc",
	info: "bialostocki_odkazacz_info",
    icon: 'assets/img/items/bron/specjalna/pogromca/miotacze/kwasu/bialostocki_odkazacz.png',
    
	attack: 100,
    min_attack: 3,
    ranged: true,
    range: 30,
	max_ammo: 35,
    speed: 1.5,
    noise: 50,
    base_price: 1000,
	level: [4],
    success_sound_src: [ 'assets/audio/items/odkazacz2.ogg' ],
	// 'assets/audio/items/odkazacz1.ogg', 
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'acid',
	classes: [ 'Pogromca' ],
	//influence: {
    //  type: 'poison', // typ zatrucia - dla każdego typu zatrucia musi wystepowac opowiedni wpis w konfiguratorze
    //  interval: 3, // co ile sekund zabiera 1 pkt zycia
    //  duration: 24, // ile sekund trwa zatrucie
    //},
  });	
  items.define_weapon("Palnik bojowy Gladius", {
    name: "Gladius_name",
    desc: "Gladius_desc",
	info: "Gladius_info",
    icon: 'assets/img/items/bron/specjalna/pogromca/miotacze/ognia/palnik_bojowy.png',
	attack: 130,
    min_attack: 5,
    ranged: true,
    range: 30,
	max_ammo: 45,
    speed: 1.5,
    noise: 50,
    base_price: 1500,
	level: [5],
    success_sound_src: [ 'assets/audio/items/palnik1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'flamethrower',
	classes: [ 'Pogromca' ],
	//influence: {
    //  type: 'fire', // typ zatrucia - dla każdego typu zatrucia musi wystepowac opowiedni wpis w konfiguratorze
    //  interval: 2, // co ile sekund zabiera 1 pkt zycia
    //  duration: 16, // ile sekund trwa zatrucie
    //},
  }); 
  items.define_weapon("Mini-miotacz strumieniowy", {
    name: "mini_miotacz_strumieniowy_name",
    desc: "mini_miotacz_strumieniowy_desc",
	info: "mini_miotacz_strumieniowy_info",
    icon: 'assets/img/items/bron/specjalna/pogromca/miotacze/kwasu/mini-miotacz_strumieniowy.png',
	attack: 160,
    min_attack: 9,
    ranged: true,
    range: 30,
	max_ammo: 55,
    speed: 1.5,
    noise: 50,
    base_price: 2200,
	level: [8],
    success_sound_src: [ '' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'acid',
	classes: [ 'Pogromca' ],
	//influence: {
    //  type: 'poison', // typ zatrucia - dla każdego typu zatrucia musi wystepować opowiedni wpis w konfiguratorze
    //  interval: 3, // co ile sekund zabiera 1 pkt zycia
    //  duration: 12, // ile sekund trwa zatrucie
    //},
  });  
  items.define_weapon("Dwuręczny młot śmieciowy", {
    name: "dwureczny_mlot_smieciowy_name",
    desc: "dwureczny_mlot_smieciowy_desc",
	info: "dwureczny_mlot_smieciowy_info",
    icon: 'assets/img/items/bron/specjalna/wojownik/mloty/mlot_smieciowy.png',
	attack: 75,
    min_attack: 6,
    speed: 1.2,
    noise: 50,
    base_price: 1000,
    ranged: false,
    animation: 'hammer',
    level: [4],
    success_sound_src: [ 'assets/audio/items/hammersquish2.ogg', 'assets/audio/items/dzida.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/dzida.ogg', ],
    failure_sound_volume: 1.0,
    classes: [ 'Wojownik' ]
  });
  items.define_weapon("Dwuręczny młot wyburzeniowy", {
    name: "dwureczny_mlot_wyburzeniowy_name",
    desc: "dwureczny_mlot_wyburzeniowy_desc",
	info: "dwureczny_mlot_wyburzeniowy_info",
    icon: 'assets/img/items/bron/specjalna/wojownik/mloty/mlot_wyburzeniowy.png',
    attack: 110,
    min_attack: 9,
    speed: 1.3,
    noise: 50,
    base_price: 1500,
    ranged: false,
    animation: 'hammer',
    level: [5],
    success_sound_src: [ 'assets/audio/items/wyburzeniowy.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
    classes: [ 'Wojownik' ]
  });
  items.define_weapon("Miażdżyciel", {
    name: "Smasher_name",
    desc: "Smasher_desc",
	info: "Smasher_info",
    icon: 'assets/img/items/bron/specjalna/wojownik/mloty/miazdzyciel.png',
    attack: 150,
    min_attack: 11,
    speed: 1.5,
    noise: 50,
    base_price: 2200,
    ranged: false,
    animation: 'hammer',
    level: [8],
    success_sound_src: [ 'assets/audio/items/miazdzyciel.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
    classes: [ 'Wojownik' ]
  });
  items.define_weapon("Korsarski kordelas", {
    name: "korsarski_kordelas_name",
    desc: "korsarski_kordelas_desc",
	info: "korsarski_kordelas_info",
    icon: 'assets/img/items/bron/specjalna/wojownik/ostrza_tnace/kordelas.png',
	attack: 50,
    min_attack: 3,
    speed: 0.4,
    noise: 20,
    base_price: 1000,
    ranged: false,
    animation: 'sword',
    level: [4],
    success_sound_src: [ 'assets/audio/items/piratesword.ogg', 'assets/audio/items/sword.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/meleesound3.ogg', ],
    failure_sound_volume: 1.0,
	classes: [ 'Wojownik' ],
  });
  items.define_weapon("Smoczy pazur", {
    name: "Pazur_name",
    desc: "Pazur_desc",
	info: "Pazur_info",
    icon: 'assets/img/items/bron/specjalna/wojownik/ostrza_tnace/smoczy_pazur.png',
	attack: 75,
    min_attack: 5,
    speed: 0.5,
    noise: 20,
    base_price: 1500,
    ranged: false,
    animation: 'sword',
    level: [5],
    success_sound_src: [ 'assets/audio/items/smoczypazur.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
	classes: [ 'Wojownik' ],
  });
  items.define_weapon("Ameliniumowy miecz", {
    name: "Amelinum_name",
    desc: "Amelinum_desc",
	info: "Amelinum_info",
    icon: 'assets/img/items/bron/specjalna/wojownik/ostrza_tnace/amelinium.png',
	attack: 110,
    min_attack: 7,
    speed: 0.5,
    noise: 20,
    base_price: 2200,
    ranged: false,
    animation: 'sword',
    level: [8],
    success_sound_src: [ 'assets/audio/items/ameliniumowy1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
	classes: [ 'Wojownik' ],
  });
  items.define_weapon("Kapiszon", {
    name: 'kapiszon_name',
    desc: 'kapiszon_desc',
	info: 'kapiszon_info',
    icon: 'assets/img/items/bron/specjalna/zolnierz/karabiny/kapiszon.png',
    attack: 100,
    min_attack: 10,
    ranged: true,
    range: 220,
    max_ammo: 50,
    speed: 1,
    noise: 200,
    base_price: 1500,
	level: [3],
    success_sound_src: [ 'assets/audio/items/gun3.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/gun3.ogg', ],
    failure_sound_volume: 1.0,
    animation: 'rifle',
	classes: [ 'Żołnierka' ],
  });
  items.define_weapon("Plujka „KS-7a Kowalski”", {
    name: 'Plujka_name',
    desc: 'Plujka_desc',
	info: 'Plujka_info',
    icon: 'assets/img/items/bron/specjalna/zolnierz/karabiny/plujka.png',
    attack: 160,
    min_attack: 15,
    ranged: true,
    range: 270,
    max_ammo: 50,
    speed: 1.2,
    noise: 200,
    base_price: 2000,
	level: [6],
    success_sound_src: [ 'assets/audio/items/plujka1.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'rifle',
	classes: [ 'Żołnierka' ],
  });
  items.define_weapon("Karabin wyborowy Eksterminator A-11", {
    name: 'Exterminator_name',
    desc: 'Exterminator_desc',
	info: 'Exterminator_info',
    icon: 'assets/img/items/bron/specjalna/zolnierz/karabiny/eksterminator.png',
    attack: 240,
    min_attack: 20,
    ranged: true,
    range: 420,
    max_ammo: 40,
    speed: 1.5,
    noise: 200,
    base_price: 3000,
	level: [8],
    success_sound_src: [ 'assets/audio/items/sniper.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
    animation: 'rifle',
	classes: [ 'Żołnierka' ],
  });
  items.define_weapon("Ręczny karabin maszynowy MWG-46 FS", {
    name: 'MWG46_name',
    desc: 'MWG46_desc',
	info: 'MWG46_info',
    icon: 'assets/img/items/bron/specjalna/zolnierz/karabiny_maszynowe/mwg_26.png',
    attack: 35,
    min_attack: 4,
    ranged: true,
    range: 120,
    max_ammo: 100,
    speed: 0.4,
    noise: 250,
    base_price: 1500,
	level: [4],
    success_sound_src: [ 'assets/audio/items/gun3.ogg', 'assets/audio/items/MGW-46.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/gun3.ogg', ],
    failure_sound_volume: 1.0,
	animation: 'rifle',
	classes: [ 'Żołnierka' ],
  });
  items.define_weapon("Ręczny karabin maszynowy Tytan-2", {
    name: 'Tytan2_name',
    desc: 'Tytan2_desc',
	info: 'Tytan2_info',
    icon: 'assets/img/items/bron/specjalna/zolnierz/karabiny_maszynowe/tytan_2.png',
    attack: 45,
    min_attack: 4,
    ranged: true,
    range: 140,
    max_ammo: 120,
    speed: 0.3,
    noise: 250,
    base_price: 2000,
	level: [6],
    success_sound_src: [ 'assets/audio/items/tytan2.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
	animation: 'rifle',
	classes: [ 'Żołnierka' ],
  });
  items.define_weapon("Tytan-3 Alfa", {
    name: 'Tytan3_name',
    desc: 'Tytan3_desc',
	info: 'Tytan3_info',
    icon: 'assets/img/items/bron/specjalna/zolnierz/karabiny_maszynowe/tytan3alfa.png',
    attack: 50,
    min_attack: 4,
    ranged: true,
    range: 160,
    max_ammo: 140,
    speed: 0.2,
    noise: 250,
    base_price: 3000,
	level: [8],
    success_sound_src: [ 'assets/audio/items/tytan3.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
	animation: 'rifle',
	classes: [ 'Żołnierka' ],
  });
  items.define_weapon("Anglik", {
    name: 'Anglik_name',
    desc: 'Anglik_desc',
	info: 'Anglik_info',
    icon: 'assets/img/items/bron/specjalna/komandos/luki/anglik.png',   
    attack: 60,
    min_attack: 10,
    ranged: true,
    range: 120,
    max_ammo: 45,
    speed: 1,
    noise: 30,
    base_price: 3000,
	level: [8],
    success_sound_src: [ 'assets/audio/items/anglik1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
    animation: 'bow',
	classes: [ 'Komandoska' ],
  });
  items.define_weapon("Łuk górski", {
    name: 'Mountain_bow_name',
    desc: 'Mountain_bow_desc',
	info: 'Mountain_bow_info',
    icon: 'assets/img/items/bron/specjalna/komandos/luki/luk_gorski.png',   
    attack: 75,
    min_attack: 15,
    ranged: true,
    range: 170,
    max_ammo: 45,
    speed: 1.2,
    noise: 30,
    base_price: 4000,
	level: [8],
    success_sound_src: [ 'assets/audio/items/lukgorski1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
    animation: 'bow',
	classes: [ 'Komandoska' ],
  });
  items.define_weapon("Łuk sportowy z włókna szklanego", {
    name: 'Glass_bow_name',
    desc: 'Glass_bow_desc',
	info: 'Glass_bow_info',
    icon: 'assets/img/items/bron/specjalna/komandos/luki/luk_sportowy.png',   
    attack: 90,
    min_attack: 20,
    ranged: true,
    range: 220,
    max_ammo: 45,
    speed: 1.2,
    noise: 30,
    base_price: 5500,
	level: [8],
    success_sound_src: [ 'assets/audio/items/luksportowy1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
    animation: 'bow',
	classes: [ 'Komandoska' ],
  });
    items.define_weapon("Nóż wojskowy wz. 2016A", {
    name: "Noz_wojskowy_name",
    desc: "Noz_wojskowy_desc",
    info: 'Noz_wojskowy_info',
    icon: 'assets/img/items/bron/specjalna/komandos/ostrza_klujace/noz_wojskowy.png',	
	attack: 50,
    min_attack: 5,
    speed: 0.4,
    noise: 20,
    base_price: 3000,
	level: [8],
    ranged: false,
    animation: 'natural',
    success_sound_src: [ 'assets/audio/items/noz1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
	classes: [ 'Komandoska' ],
  }); 
  items.define_weapon("Yoroi-dōshi", {
    name: "Yoroi_name",
    desc: "Yoroi_desc",
    info: 'Yoroi_info',
    icon: 'assets/img/items/bron/specjalna/komandos/ostrza_klujace/yoroi-doshi.png',	
	attack: 60,
    min_attack: 7,
    speed: 0.3,
    noise: 20,
    base_price: 4000,
	level: [8],
    ranged: false,
    animation: 'natural',
    success_sound_src: [ 'assets/audio/items/yoroi1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
	classes: [ 'Komandoska' ],
  });  
  items.define_weapon("Sztylet Omega v3", {
    name: "Omega_name",
    desc: "Omega_desc",
    info: 'Omega_info',
    icon: 'assets/img/items/bron/specjalna/komandos/ostrza_klujace/omega_v3.png',	
	attack: 80,
    min_attack: 10,
    speed: 0.3,
    noise: 20,
    base_price: 5500,
	level: [8],
    ranged: false,
    animation: 'natural',
    success_sound_src: [ 'assets/audio/items/omega1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,
	classes: [ 'Komandoska' ],
  });

  
  //////////
  // ARMOURS
  //////////
    items.define_armour("Czarny skórzany płaszcz z kapturem", {
    name: "czarny_skorzany_plaszcz_z_kapturem_name",
    desc: "czarny_skorzany_plaszcz_z_kapturem_desc",
	info: "czarny_skorzany_plaszcz_z_kapturem_info",
    icon: 'assets/img/items/pancerz/lekkie/plaszcz.png',
    base_price: 100,
    defence: 5,
	level: [0],
  });
  items.define_armour("Lekki kirys śmieciowy", {
    name: "lekki_kirys_smieciowy_name",
    desc: "lekki_kirys_smieciowy_desc",
	info: "lekki_kirys_smieciowy_info",
    icon: 'assets/img/items/pancerz/lekkie/kirys.png',
	base_price: 500,
    defence: 15,
	level: [1],
  });
  items.define_armour("Wojskowa kamizelka taktyczna", {
    name: "wojskowa_kamizelka_taktyczna_name",
    desc: "wojskowa_kamizelka_taktyczna_desc",
	info: "wojskowa_kamizelka_taktyczna_info",
    icon: 'assets/img/items/pancerz/srednie/kamizelka_wojskowa.png',   
	base_price: 1200,
    defence: 30,
	level: [4],
  });
    items.define_armour("Kamizelka Obrońca-2", {
    name: "obronca2_name",
    desc: "obronca2_desc",
	info: "obronca2_info",
    icon: 'assets/img/items/pancerz/srednie/obronca2.png',
    base_price: 2500,
    defence: 45,
	level: [6],
  });
  items.define_armour("Krakowska zbroja płytowa", {
    name: "zbroja_plytowa_name",
    desc: "zbroja_plytowa_desc",
	info: "zbroja_plytowa_info",
    icon: 'assets/img/items/pancerz/ciezkie/plytowa.png',
    base_price: 4000,
    defence: 60,
	level: [8],
  });
  items.define_armour("Napierśnik z Demigora", {
    name: "zbroja_z_demigora_name",
    desc: "zbroja_z_demigora_desc",
	info: "zbroja_z_demigora_info",
    icon: 'assets/img/items/pancerz/ciezkie/napiersnik.png',
    base_price: 6000,
    defence: 80,
	level: [9],
  });
  
  //////////////////
  // AIDS
  //////////////////

  items.define_aid("Dopalacz", {
    name: "attack_boost_name",
    desc: "attack_boost_desc",
    info: "attack_boost_info",
    icon: 'assets/img/items/uzywki/specyfiki/dopalacz.png',
    type: 'attack', // co zwieksza
    boost: 5, // o ile zwieksza
    base_price: 300,
    level: [0],
  });
  
    items.define_aid("Dopalacz V2", {
    name: "attack_boost2_name",
    desc: "attack_boost2_desc",
    info: "attack_boost2_info",
    icon: 'assets/img/items/uzywki/specyfiki/dopalacz2.png',
    type: 'attack', // co zwieksza
    boost: 15, // o ile zwieksza
    base_price: 750,
    level: [0],
  });
  
  items.define_aid("Puma", {
    name: "defence_boost_name",
    desc: "defence_boost_desc",
    info: "defence_boost_info",
    icon: 'assets/img/items/uzywki/specyfiki/puma.png',
    type: 'defence', // co zwieksza
    boost: 2, // o ile zwieksza
    base_price: 700,
    level: [0],
  });
  
    items.define_aid("Puma V2", {
    name: "defence_boost2_name",
    desc: "defence_boost2_desc",
    info: "defence_boost2_info",
    icon: 'assets/img/items/uzywki/specyfiki/puma2.png',
    type: 'defence', // co zwieksza
    boost: 5, // o ile zwieksza
    base_price: 1800,
    level: [0],
  });
  
  items.define_aid("Zastrzyk zdrowia", {
    name: "life_boost_name",
    desc: "life_boost_desc",
    info: "life_boost_info",
    icon: 'assets/img/items/uzywki/medykamenty/uzdrawiacz.png',
    type: 'life', // co zwieksza
    boost: 50, // o ile zwieksza
    base_price: 500,
    level: [0],
  });

  items.define_aid("Zastrzyk zdrowia V2", {
    name: "life_boost2_name",
    desc: "life_boost2_desc",
    info: "life_boost2_info",
    icon: 'assets/img/items/uzywki/medykamenty/uzdrawiacz2.png',
    type: 'life', // co zwieksza
    boost: 150, // o ile zwieksza
    base_price: 1250,
    level: [0],
  });

  //////////////////
  // NATURAL WEAPONS
  //////////////////

  // bronie naturalne nie maja niektorych parametrow - nie one sa potrzebne
  //////////
  // DŹWIĘKI - jest dużo naturalnych broni, każda do osobnego mutanta, gdyż dzięki temu wydają one różne dźwięki: szczury piszczą, mutanty charczą, zarażeni gulgoczą. 
  //////////
  items.define_natural_weapon("Pazury", {
	attack: 0,
    min_attack: 0,
    speed: 0.75,
    animation: 'natural',
    noise: 20,
    ranged: false,
  });
   items.define_natural_weapon("Pazury gryzoni", {
    
    attack: 0,
    min_attack: 0,
    speed: 0.65,
    animation: 'natural',
    noise: 20,
    ranged: false,
    range: 0, // poniewaz bron nie jest zasiegowa to zasieg ataku wynika z definicji postaci
    success_sound_src: [ 'assets/audio/creatures/ratsqueak.ogg','assets/audio/creatures/ratbite.ogg','assets/audio/creatures/rathark.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/ratsqueak.ogg', 'assets/audio/creatures/ratsqueak.ogg','assets/audio/creatures/ratbite.ogg','assets/audio/creatures/rathark.ogg', ],
    failure_sound_volume: 1.0,
  });
    items.define_natural_weapon("Pazury", {
    attack: 0,
    min_attack: 0,
    speed: 0.75,
    animation: 'natural',
    noise: 20,
    ranged: false,
    // range: 0, // poniewaz bron nie jest zasiegowa to zasieg ataku wynika z definicji postaci
    //success_sound_src: [ 'assets/audio/natural/pazur.ogg', ],
    //success_sound_volume: 1.0,
    //failure_sound_src: [ 'assets/audio/natural/pazur.ogg', ],
    //failure_sound_volume: 1.0,
  });
  
    items.define_natural_weapon("Łapa Zarażonego", {
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    success_sound_src: [ 'assets/audio/items/wetstab3.ogg', 'assets/audio/creatures/mutantgrowl.ogg', ],
    success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    failure_sound_src: [ 'assets/audio/natural/slap2.ogg', 'assets/audio/creatures/mutantgrowl2.ogg', ],
    failure_sound_volume: 1.0,	
	attack: 0,
    min_attack: 0,
    speed: 0.95,
    animation: 'natural',
    noise: 20,
    ranged: false,
  });
  
      items.define_natural_weapon("Łapa Ghula", {
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    //success_sound_src: [ 'assets/audio/items/wetstab3.ogg', 'assets/audio/creatures/mutantgrowl.ogg', ],
    //success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    //failure_sound_src: [ 'assets/audio/natural/slap2.ogg', 'assets/audio/creatures/mutantgrowl2.ogg', ],
    //failure_sound_volume: 1.0,
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    success_sound_src: [ 'assets/audio/natural/lapaghula.ogg', 'assets/audio/natural/lapaghula2.ogg' ],
    success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,		
	attack: 0,
    min_attack: 0,
    speed: 1.5,
    animation: 'natural',
    noise: 25,
    ranged: false,
  });
  
  items.define_natural_weapon("Pięść", {	
	attack: 0,
    min_attack: 0,
    speed: 0.5,
    animation: 'natural',
    noise: 20,
    ranged: false,
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    success_sound_src: [ 'assets/audio/natural/punch.ogg', 'assets/audio/natural/punch3.ogg' ],
    success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    failure_sound_src: [ 'assets/audio/natural/maleshout2.ogg','assets/audio/natural/maleshout4.ogg', ],
    failure_sound_volume: 1.0,
    // range: 0, // poniewaz bron nie jest zasiegowa to zasieg ataku wynika z definicji postaci
  });
  
  items.define_natural_weapon("Wybuch Pandory", {
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    //success_sound_src: [ 'assets/audio/items/wetstab3.ogg', 'assets/audio/creatures/mutantgrowl.ogg', ],
    //success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    //failure_sound_src: [ 'assets/audio/natural/slap2.ogg', 'assets/audio/creatures/mutantgrowl2.ogg', ],
    //failure_sound_volume: 1.0,
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    success_sound_src: [ 'assets/audio/creatures/pandora1.ogg', 'assets/audio/creatures/pandora2.ogg', ],
    success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,		
    attack: 0,
    min_attack: 0,
    speed: 0.2,
    animation: 'natural',
    noise: 200,
    ranged: false,
    splash_circular: true, // splash damage w kolku
    splash_radius: 90, // o promieniu ... px
    suicidal: true, // po ataku postac ginie oraz gdy ginie to wykonuje atakuje. Dziala *tylko* ze splash_circular = true
  });
  
  items.define_natural_weapon("Łapa Matrony", {
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    //success_sound_src: [ 'assets/audio/items/wetstab3.ogg', 'assets/audio/creatures/mutantgrowl.ogg', ],
    //success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    //failure_sound_src: [ 'assets/audio/natural/slap2.ogg', 'assets/audio/creatures/mutantgrowl2.ogg', ],
    //failure_sound_volume: 1.0,
    // dzwiek sukcesu broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    success_sound_src: [ 'assets/audio/natural/matrona1.ogg', 'assets/audio/natural/matrona2.ogg', ],
    success_sound_volume: 1.0,
    // dzwiek niepowodzenia broni - moze nie wystepowac, ale jesli wystepuje musi byc para "_src" i "_volume"
    failure_sound_src: [ '' ],
    failure_sound_volume: 1.0,		
	attack: 0,
    min_attack: 0,
    speed: 1.5,
    animation: 'natural',
    noise: 25,
    ranged: false,
  });

  items.define_natural_weapon("Kordelas", {    
	attack: 0,
    min_attack: 0,
    speed: 0.80,
    animation: 'natural',
    noise: 20,
    ranged: false,
    success_sound_src: [ 'assets/audio/items/piratesword.ogg', 'assets/audio/items/sword.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/pirateshout.ogg',  'assets/audio/creatures/maleattack3.ogg' ],
    failure_sound_volume: 1.0,
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Kordelas biegacza", {   
	attack: 0,
    min_attack: 0,
    speed: 0.4,
    animation: 'natural',
    noise: 20,
    ranged: false,
    success_sound_src: [ 'assets/audio/items/piratesword.ogg', 'assets/audio/items/sword.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/pirateshout.ogg',  'assets/audio/creatures/maleattack3.ogg' ],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Nowak-3", {
	attack: 0,
    min_attack: 0,
    speed: 2.3,
    animation: 'natural',
    noise: 200,
    ranged: true,
	range: 120,
    success_sound_src: [ 'assets/audio/creatures/piratelaugh.ogg', 'assets/audio/items/pistol.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/gun3.ogg', 'assets/audio/creatures/pirateshout.ogg' ],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Nowak-4", {
	attack: 0,
    min_attack: 0,
    speed: 7.0,
    animation: 'natural',
    noise: 200,
    ranged: true,
	range: 470,
    success_sound_src: [ 'assets/audio/creatures/piratelaugh.ogg', 'assets/audio/items/pistol.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/gun3.ogg', 'assets/audio/creatures/pirateshout.ogg' ],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Nowak-5", {
	attack: 0,
    min_attack: 0,
    speed: 3.0,
    animation: 'natural',
    noise: 200,
    ranged: true,
	range: 200,
    success_sound_src: [ 'ssets/audio/items/plujka1.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/gun3.ogg', 'assets/audio/creatures/pirateshout.ogg' ],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Bliźniacze kordelasy", {
    attack: 0,
    min_attack: 0,
    speed: 1,
    animation: 'natural',
    noise: 20,
    ranged: false,
    success_sound_src: [ 'assets/audio/items/sword2.ogg', 'assets/audio/items/sword4.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/pirateking2.ogg', 'assets/audio/creatures/pirateking1.ogg',],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Łapa Mutanta z Magazynu", {
	attack: 0,
    min_attack: 0,
    speed: 0.8,
    animation: 'natural',
    noise: 100,
    ranged: false,
	success_sound_src: [ 'assets/audio/creatures/mutantsnarl4.ogg', 'assets/audio/natural/slap2.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/items/wetstab3.ogg', 'assets/audio/creatures/mutantgrowl2.ogg', ],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Łapa Siłacza z Magazynu", {
	attack: 0,
    min_attack: 0,
    speed: 1.3,
    animation: 'natural',
    noise: 100,
    ranged: false,
	success_sound_src: ['assets/audio/items/wetstab3.ogg', 'assets/audio/creatures/mutantgrowl.ogg', ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/natural/slap2.ogg', 'assets/audio/creatures/mutantgrowl2.ogg', ],
    failure_sound_volume: 1.0,
  });
  
  items.define_natural_weapon("Kordelas z Magazynu", {
	attack: 0,
    min_attack: 0,
    speed: 0.65,
    animation: 'natural',
    noise: 100,
    ranged: false,
    success_sound_src: [ 'assets/audio/items/piratesword.ogg', 'assets/audio/items/sword.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/pirateshout.ogg',  'assets/audio/creatures/maleattack3.ogg' ],
  });
  
  items.define_natural_weapon("Kordelas Siłacza z Magazynu", {
	attack: 0,
    min_attack: 0,
    speed: 1.2,
    animation: 'natural',
    noise: 100,
    ranged: false,
     success_sound_src: [ 'assets/audio/items/piratesword.ogg', 'assets/audio/items/sword.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/creatures/piratelaugh.ogg',  'assets/audio/creatures/pirateshout.ogg' ],
  });
  
  items.define_natural_weapon("Pazury R", {
	attack: 0,
    min_attack: 0,
    speed: 0.35,
    animation: 'natural',
    noise: 30,
    ranged: false,
    success_sound_src: [ 'assets/audio/natural/reptilian1.ogg', 'assets/audio/natural/reptilian2.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
  });
  
  items.define_natural_weapon("Dzida R", {
	attack: 0,
    min_attack: 0,
    speed: 0.5,
    animation: 'natural',
    noise: 30,
    ranged: false,
     success_sound_src: [ 'assets/audio/natural/reptoludz1.ogg', 'assets/audio/natural/reptoludz2.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '' ],
  });
  
  items.define_natural_weapon("Macka", {
	attack: 0,
	min_attack: 0,
	speed: 0.35,
	animation: 'natural',
	noise: 20,
	ranged: false,
	success_sound_src: [ 'assets/audio/natural/macka.ogg', 'assets/audio/natural/macka2.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ 'assets/audio/natural/macka.ogg', ],
    failure_sound_volume: 1.0,
  });
  
    items.define_natural_weapon("Pazur", {
	attack: 0,
	min_attack: 0,
	speed: 1.20,
	animation: 'natural',
	noise: 30,
	ranged: false,
	success_sound_src: [ 'assets/audio/natural/pazur2.ogg', 'assets/audio/natural/pazur3.ogg' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
	});
	
	items.define_natural_weapon("Pięść Gora", {
	attack: 0,
	min_attack: 0,
	speed: 2.20,
	animation: 'natural',
	noise: 60,
	ranged: false,
	success_sound_src: [ '' ],
    success_sound_volume: 1.0,
    failure_sound_src: [ '', ],
    failure_sound_volume: 1.0,
	splash_circular: true, // splash damage w kolku
    splash_radius: 75, // o promieniu ... px
    suicidal: false, // po ataku postac ginie oraz gdy ginie to wykonuje atakuje. Dziala *tylko* ze splash_circular = true
  });

  //////////////////
  // NATURAL ARMOURS
  //////////////////
  
  // zbroje naturalne nie maja niektorych parametrow - nie one sa potrzebne
  items.define_natural_armour("Skóra", {
    defence: 0,
  });
  
  items.define_natural_armour("Futro Gryzonia", {
    defence: 0,
	});
  
   items.define_natural_armour("Futro", {
    defence: 0,
  });
  
   items.define_natural_armour("Skórzana kurtka", {
    defence: 0,
	});
  
  items.define_natural_armour("Ciężki kirys", {
    defence: 0,
  });

}
