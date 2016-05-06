function soldiers_data(soldiers) {
  // Opis jak definiowac analogiczny do pliku creatures.js

  // var sprite = new Sprite('assets/img/creatures/mutant.png', 64, 64);
  var sprite_pogromca = new Sprite();
  sprite_pogromca.set_image_src('assets/img/creatures/pogromca_2.png');
  sprite_pogromca.set_size(96, 96);

  sprite_pogromca.define(0,'walk_up', 6, { ox: -1, oy: 9, fps: 18 });
  sprite_pogromca.define(1,'walk_down', 6, { ox: -1, oy: 6, fps: 18 });
  sprite_pogromca.define(2,'walk_right', 6, { ox: -2, oy: 6, fps: 18 });
  sprite_pogromca.define(3,'walk_left', 6, { ox: 2, oy: 6, fps: 18 });
  sprite_pogromca.define(4,'walk_upleft', 6, { ox: -4, oy: 10, fps: 18 });
  sprite_pogromca.define(5,'walk_upright', 6, { ox: -4, oy: 10, fps: 18 });
  sprite_pogromca.define(6,'walk_downright', 6, { ox: -2, oy: 12, fps: 18 });
  sprite_pogromca.define(7,'walk_downleft', 6, { ox: -5, oy: 14, fps: 18 });
  sprite_pogromca.define(8,'natural_attack_down', 7, { ox: 0, oy: 7 });
  sprite_pogromca.define(9,'natural_attack_left', 7, { ox: -1, oy: 5 });
  sprite_pogromca.define(10,'natural_attack_up', 7, { ox: 1, oy: 2 });
  sprite_pogromca.define(11,'natural_attack_right', 7, { ox: 1, oy: 2 });
  sprite_pogromca.define(12,'pole_attack_up', 7, { ox: -3, oy: 3 });
  sprite_pogromca.define(13,'pole_attack_down', 7, { ox: -1, oy: 7 });
  sprite_pogromca.define(14,'pole_attack_right', 7, { ox: -2, oy: 1 });
  sprite_pogromca.define(15,'pole_attack_left', 7, { ox: -3, oy: 0 });
  sprite_pogromca.define(16,'pistol_attack_up', 8, { ox: 0, oy: -5 } );
  sprite_pogromca.define(17,'pistol_attack_right', 8, { ox: 5, oy: 0 } );
  sprite_pogromca.define(18,'pistol_attack_left', 8, { ox: -5, oy: 0 } );
  sprite_pogromca.define(19,'pistol_attack_down', 8, { ox: 0, oy: 5 } );
  sprite_pogromca.define(20,'crossbow_attack_down', 5, { ox: 2, oy: -1 });
  sprite_pogromca.define(21,'crossbow_attack_up', 5, { ox: 0, oy: 2 });
  sprite_pogromca.define(22,'wrong', 5);
  sprite_pogromca.define(23,'crossbow_attack_left', 5, { ox: 2, oy: 2 });
  sprite_pogromca.define(24,'crossbow_attack_right', 5, { ox: -5, oy: 0 });
  sprite_pogromca.define(25,'flamethrower_attack_up',5, { ox: 0, oy: 4 });
  sprite_pogromca.define(26,'flamethrower_attack_down', 5, { ox: -1, oy: -5 });
  sprite_pogromca.define(27,'flamethrower_attack_right', 5, { ox: -5, oy: 1 });
  sprite_pogromca.define(28,'flamethrower_attack_left', 5, { ox: 3, oy: 0 });
  sprite_pogromca.define(29,'acid_attack_up', 5, { ox: 1, oy: 3 });
  sprite_pogromca.define(30,'acid_attack_down', 5, { ox: 0, oy: -7 });
  sprite_pogromca.define(31,'acid_attack_right', 5, { ox: -6, oy: 2 });
  sprite_pogromca.define(32,'acid_attack_left', 5, { ox: 4, oy: 1 });
  sprite_pogromca.define(33,'dead_down', 6, { ox: -2, oy: 5 });
  sprite_pogromca.define(34, 'walk_upleft', 6, { ox: -5, oy: 9 });
  sprite_pogromca.define(35, 'walk_upright', 6, { ox: -3, oy: 9 });
  sprite_pogromca.define(36, 'walk_downright', 6, { ox: -1, oy: 12 } );
  sprite_pogromca.define(37, 'walk_downleft', 6, { ox: -5, oy: 12 });
  sprite_pogromca.define(38, 'natural_attack_upleft', 7, { ox: -2, oy: 2 });
  sprite_pogromca.define(39, 'natural_attack_upright', 7, { ox: -2, oy: 1 });
  sprite_pogromca.define(40, 'natural_attack_downleft', 7, { ox: 0, oy: 3 });
  sprite_pogromca.define(41, 'natural_attack_downright', 7, { ox: -1, oy: 1 });
  sprite_pogromca.define(42, 'pole_attack_upleft', 7, { ox: 0, oy: 2 });
  sprite_pogromca.define(43, 'pole_attack_upright', 7, { ox: 0, oy: 7 });
  sprite_pogromca.define(44, 'pole_attack_downleft', 7, { ox: 2, oy: 6 });
  sprite_pogromca.define(45, 'pole_attack_downright', 7, { ox: -1, oy: 2 });
  sprite_pogromca.define(46, 'pistol_attack_upleft', 8, { ox: 0, oy: -4 } );
  sprite_pogromca.define(47, 'pistol_attack_upright', 8, { ox: 0, oy: -2 } ),
  sprite_pogromca.define(48, 'pistol_attack_downleft', 8, { ox: 0, oy: 2 } );
  sprite_pogromca.define(49, 'pistol_attack_downright', 8, { ox: 0, oy: 2 } );
  sprite_pogromca.define(50, 'crossbow_attack_upleft', 5, { ox: 2, oy: 9 });
  sprite_pogromca.define(51, 'crossbow_attack_upright', 5, { ox: -7, oy: 8 });
  sprite_pogromca.define(52, 'crossbow_attack_downleft', 5, { ox: 2, oy: 7 });
  sprite_pogromca.define(53, 'crossbow_attack_downright', 5, { ox: -2, oy: 4 });
  sprite_pogromca.define(54, 'flamethrower_attack_upleft', 5, { ox: 1, oy: 7 });
  sprite_pogromca.define(55, 'flamethrower_attack_upright', 5, { ox: 1, oy: 5 });
  sprite_pogromca.define(56, 'flamethrower_attack_downleft', 5, { ox: 2, oy: 5 });
  sprite_pogromca.define(57, 'flamethrower_attack_downright', 5, { ox: 1, oy: 5 });
  sprite_pogromca.define(58, 'acid_attack_upleft', 5, { ox: 1, oy: 7 });
  sprite_pogromca.define(59, 'acid_attack_upright', 5, { ox: -1, oy: 5 });
  sprite_pogromca.define(60, 'acid_attack_downleft', 5, { ox: 4, oy: 3 });
  sprite_pogromca.define(61, 'acid_attack_downright', 5, { ox: -1, oy: 5 });
  sprite_pogromca.define(62, 'stand_up', 10, { ox: -1, oy: 9 });
  sprite_pogromca.define(63, 'stand_down', 10, { ox: 0, oy: 10 });
  sprite_pogromca.define(64, 'stand_right', 10, { ox: 0, oy: 5 });
  sprite_pogromca.define(65, 'stand_left', 10, { ox: 0, oy: 10 });
  sprite_pogromca.define(66, 'stand_upleft', 10, { ox: 0, oy: 6 });
  sprite_pogromca.define(67, 'stand_upright', 10, { ox: -1, oy: 10 });
  sprite_pogromca.define(68, 'stand_downleft', 10, { ox: 0, oy: 9 });
  sprite_pogromca.define(69, 'stand_downright', 10, { ox: -1, oy: 10 });
  sprite_pogromca.define(70, 'damage_down', 5, { ox: -7, oy: 11 });
  sprite_pogromca.define(71, 'damage_up', 5, { ox: 0, oy: 3 });
  sprite_pogromca.define(72, 'damage_right', 5, { ox: 8, oy: 8 });
  sprite_pogromca.define(73, 'damage_left', 5, { ox: -10, oy: -3 });
  sprite_pogromca.define(74, 'damage_upleft', 5, { ox: 3, oy: 3 });
  sprite_pogromca.define(75, 'damage_upright', 5, { ox: -1, oy: 4 });
  sprite_pogromca.define(76, 'damage_downleft', 5, { ox: -6, oy: -2 });
  sprite_pogromca.define(77, 'damage_downright', 5, { ox: -4, oy: 4 });
  sprite_pogromca.define(78, 'dead_left', 6, {ox: 0, oy: 0});
  sprite_pogromca.define(79, 'dead_up', 6, {ox: 0, oy: 0});
  sprite_pogromca.define(80, 'dead_right', 6, {ox: 0, oy: 0});
  sprite_pogromca.define(81, 'dead_downright', 6, {ox: 0, oy: 0});
  sprite_pogromca.define(82, 'dead_downleft', 6, {ox: 0, oy: 0});
  sprite_pogromca.define(83, 'dead_upleft', 6, {ox: 0, oy: 0});
  sprite_pogromca.define(84, 'dead_upright', 6, {ox: 0, oy: 0});
  sprite_pogromca.fps(12);

  sprite_pogromca.set('stand_down');
  soldiers.define("Pogromca", {
    max_life: 750,
    attack: 55,
    min_attack: 7,
    defence: 12,
    walk_speed: 4, // predkosc chodzenia
    run_speed: 4, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Pięść",
    natural_armour: "Skóra",

    sprite: sprite_pogromca,

    radius: 13,

    natural_range: 19,
    hammer_range: 20,
    sword_range: 20,
    pole_range: 42,

    sight: 0, // na potrzeby kodu musi byc
    hearing: 0, // na potrzeby kodu musi byc
    dead_sound_src: [ 'assets/audio/creatures/maleshout2.ogg','assets/audio/creatures/maleshout3.ogg' ],
    dead_sound_volume: 1.0,

    first_skill: Skill_pogromca_first(),
    second_skill: Skill_pogromca_second(),

    /* Mechanika A32
    vigour: 14,
    agility: 18,
    perception: 15,
    intelligence: 16,
    hit_modifier: 0,

    abilities: { martial: 4, crossbow: 2, pole: 3, pistol: 2, thrower: 1 },
    */

    // adres duzej ikony postaci
    icon: 'assets/img/creatures/szron_duzy2.png',
    panel: 'assets/img/creatures/panel_szron_duzy2.png',
    // adres malej ikony postaci
    mini_icon: 'assets/img/creatures/szron48.png',
  });
  
 // var sprite = new Sprite('assets/img/creatures/mutant.png', 64, 64);
  var sprite_wojownik = new Sprite();
  sprite_wojownik.set_image_src('assets/img/creatures/wojownik2.gif');
  sprite_wojownik.set_size(96, 96);

sprite_wojownik.define(0,'damage_down', 6, { ox: 2, oy: 3 });
  sprite_wojownik.define(1,'hammer_attack_up', 7, { ox: 0, oy: 14 });
  sprite_wojownik.define(2,'hammer_attack_right', 7, { ox: -15, oy: 0 });
  sprite_wojownik.define(3,'hammer_attack_down', 7, { ox: 0, oy: -15 });
  sprite_wojownik.define(4,'hammer_attack_left', 7, { ox: 14, oy: 1 });
  sprite_wojownik.define(5,'hammer_attack_upright', 7, { ox: -3, oy: 13 });
  sprite_wojownik.define(6,'hammer_attack_downright', 7, { ox: -15, oy: -5 });
  sprite_wojownik.define(7,'hammer_attack_downleft', 7, { ox: 2, oy: -15 });
  sprite_wojownik.define(8,'hammer_attack_upleft', 7, { ox: 13, oy: 4 });
  sprite_wojownik.define(9,'natural_attack_down', 13, { ox: 2, oy: -17 });
  sprite_wojownik.define(10,'natural_attack_up', 13, { ox: -2, oy: 15 });
  sprite_wojownik.define(11,'natural_attack_left', 13, { ox: 15, oy: 1 });
  sprite_wojownik.define(12,'natural_attack_right', 13, { ox: -15, oy: -2 });
  sprite_wojownik.define(13,'natural_attack_upleft', 13, { ox: 13, oy: 1 });
  sprite_wojownik.define(14,'natural_attack_upright', 13, { ox: -2, oy: 13 });
  sprite_wojownik.define(15,'natural_attack_downright', 13, { ox: -15, oy: -3 });
  sprite_wojownik.define(16,'natural_attack_downleft', 13, { ox: 1, oy: -14 });
  sprite_wojownik.define(17,'pole_attack_down', 9, { ox: 2, oy: -15 });
  sprite_wojownik.define(18,'pole_attack_up', 9, { ox: -2, oy: 15 });
  sprite_wojownik.define(19,'pole_attack_right', 9, { ox: -15, oy: -3 });
  sprite_wojownik.define(20,'pole_attack_left', 9, { ox: 16, oy: 2 });
  sprite_wojownik.define(21,'pole_attack_upleft', 9, { ox: 2, oy: 5 });
  sprite_wojownik.define(22,'pole_attack_upright', 9, { ox: -5, oy: 4 });
  sprite_wojownik.define(23,'pole_attack_downright', 9, { ox: -4, oy: -5 });
  sprite_wojownik.define(24,'pole_attack_downleft', 9, { ox: 4, oy: -4 });
  sprite_wojownik.define(25,'pistol_attack_down',7, { ox: 2, oy: -5 });
  sprite_wojownik.define(26,'pistol_attack_up', 7, { ox: -1, oy: 6 });
  sprite_wojownik.define(27,'pistol_attack_left', 7, { ox: 4, oy: 1 });
  sprite_wojownik.define(28,'pistol_attack_right', 7, { ox: -5, oy: -2 });
  sprite_wojownik.define(29,'pistol_attack_upleft', 7, { ox: 1, oy: 4 });
  sprite_wojownik.define(30,'pistol_attack_upright', 7, { ox: -6, oy: 2 });
  sprite_wojownik.define(31,'pistol_attack_downright', 7, { ox: -2, oy: -5 });
  sprite_wojownik.define(32,'pistol_attack_downleft', 7, { ox: 5, oy: -1 });
  sprite_wojownik.define(33,'sword_attack_up', 9, { ox: -3, oy: 16 });
  sprite_wojownik.define(34, 'sword_attack_right', 9, { ox: -15, oy: -2 });
  sprite_wojownik.define(35, 'sword_attack_down', 9, { ox: 1, oy: -14 });
  sprite_wojownik.define(36, 'sword_attack_left', 9, { ox: 15, oy: 0 });
  sprite_wojownik.define(37, 'sword_attack_upright', 9, { ox: -9, oy: 13 });
  sprite_wojownik.define(38, 'sword_attack_downright', 9, { ox: -14, oy: -5 });
  sprite_wojownik.define(39, 'sword_attack_downleft', 9, { ox: 3, oy: -13 });
  sprite_wojownik.define(40, 'sword_attack_upleft', 9, { ox: 10, oy: 5 });
  sprite_wojownik.define(41, 'walk_up', 7, { ox: -1, oy: 8 });
  sprite_wojownik.define(42, 'walk_right', 7, { ox: -10, oy: 1 });
  sprite_wojownik.define(43, 'walk_down', 7, { ox: 1, oy: -7 });
  sprite_wojownik.define(44, 'walk_left', 7, { ox: 8, oy: 2 });
  sprite_wojownik.define(45, 'walk_upright', 7, { ox: -3, oy: 5 });
  sprite_wojownik.define(46, 'walk_downright', 7, { ox: -5, oy: 0 });
  sprite_wojownik.define(47, 'walk_downleft', 7, { ox: 1, oy: -1}),
  sprite_wojownik.define(48, 'walk_upleft', 7, { ox: 2, oy: 2 });
  sprite_wojownik.define(49, 'dead_up', 17, { ox: -2, oy: 7 });
  sprite_wojownik.define(50, 'dead_right', 17, { ox: -5, oy: 1 });
  sprite_wojownik.define(51, 'dead_down', 17, { ox: 2, oy: -3 });
  sprite_wojownik.define(52, 'dead_left', 17, { ox: 4, oy: 4 });
  sprite_wojownik.define(53, 'dead_upright', 17, { ox: -3, oy: 8 });
  sprite_wojownik.define(54, 'dead_downright', 17, { ox: -5, oy: 0 });
  sprite_wojownik.define(55, 'dead_downleft', 17, { ox: -1, oy: -3 });
  sprite_wojownik.define(56, 'dead_upleft', 17, { ox: 4, oy: 1 });
  sprite_wojownik.define(57, 'stand_up', 29, { ox: -2, oy: 6 });
  sprite_wojownik.define(58, 'stand_right', 29, { ox: -10, oy: -1 });
  sprite_wojownik.define(59, 'stand_down', 29, { ox: 0, oy: -8 });
  sprite_wojownik.define(60, 'stand_left', 29, { ox: 2, oy: 1 });
  sprite_wojownik.define(61, 'stand_upright', 29, { ox: -2, oy: 3 });
  sprite_wojownik.define(62, 'stand_downright', 29, { ox: -4, oy: -2 });
  sprite_wojownik.define(63, 'stand_downleft', 29, { ox: 1, oy: -3});
  sprite_wojownik.define(64, 'stand_upleft', 29, { ox: 3, oy: 4 });
  sprite_wojownik.fps(12);

  sprite_wojownik.set('stand_down');
  soldiers.define("Wojownik", {
    max_life: 1000,
    attack: 25,
    min_attack: 5,
    defence: 15,
    walk_speed: 3, // predkosc chodzenia
    run_speed: 3, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Pięść",
    natural_armour: "Skóra",

    sprite: sprite_wojownik,

    radius: 13,

    natural_range: 23,
    hammer_range: 42,
    sword_range: 40,
    pole_range: 56,

    sight: 0,
    dead_sound_src: [ 'assets/audio/creatures/maleshout2.ogg','assets/audio/creatures/maleshout3.ogg' ],
    dead_sound_volume: 1.0,

    first_skill: Skill_wojownik_first(),
    second_skill: Skill_wojownik_second(),

    /* Mechanika A32
    vigour: 18,
    agility: 15,
    perception: 11,
    intelligence: 14,
    hit_modifier: 0,

    abilities: { martial: 2, cut: 2, pole: 4, pistol: 0, blunt: 3 },
    */

    // adres duzej ikony postaci
    icon: 'assets/img/creatures/olaf_duzy2.png',
    panel: 'assets/img/creatures/panel_olaf_duzy2.png',
    // adres malej ikony postaci
    mini_icon: 'assets/img/creatures/olaf_maly.png',
  });
  
  var sprite_zolnierka = new Sprite();
  sprite_zolnierka.set_image_src('assets/img/creatures/zolnierka.png');
  sprite_zolnierka.set_size(96, 96);

  sprite_zolnierka.define(0,'walk_up', 12, { ox: 0, oy: 16 });
  sprite_zolnierka.define(1,'walk_right', 12, { ox: -16, oy: 0 });
  sprite_zolnierka.define(2,'walk_down', 12, { ox: 0, oy: -16 });
  sprite_zolnierka.define(3,'walk_left', 12, { ox: 16, oy: 0 });
  sprite_zolnierka.define(4,'walk_upright', 12, { ox: 0, oy: 16 });
  sprite_zolnierka.define(5,'walk_downright', 12, { ox: -16, oy: 0 });
  sprite_zolnierka.define(6,'walk_downleft', 12, { ox: 0, oy: -16 });
  sprite_zolnierka.define(7,'walk_upleft', 12, { ox: 16, oy: 0 });
  sprite_zolnierka.define(8,'stand_up', 29, { ox: 0, oy: 16 });
  sprite_zolnierka.define(9,'stand_right', 29, { ox: -16, oy: 0 });
  sprite_zolnierka.define(10,'stand_down', 29, { ox: 0, oy: -16 });
  sprite_zolnierka.define(11,'stand_left', 29, { ox: 16, oy: 0 });
  sprite_zolnierka.define(12,'stand_upright', 29, { ox: 0, oy: 16 });
  sprite_zolnierka.define(13,'stand_downright', 29, { ox: -16, oy: 0 });
  sprite_zolnierka.define(14,'stand_downleft', 29, { ox: 0, oy: -16 });
  sprite_zolnierka.define(15,'stand_upleft', 29, { ox: 16, oy: 0 });
  sprite_zolnierka.define(16,'dead_up', 23, { ox: 0, oy: 16 });
  sprite_zolnierka.define(17,'dead_right', 23, { ox: -16, oy: 0 });
  sprite_zolnierka.define(18,'dead_down', 23, { ox: 0, oy: -16 });
  sprite_zolnierka.define(19,'dead_left', 23, { ox: 16, oy: 0 });
  sprite_zolnierka.define(20,'dead_upright', 23, { ox: 0, oy: 16 });
  sprite_zolnierka.define(21,'dead_downright', 23, { ox: -16, oy: 0 });
  sprite_zolnierka.define(22,'dead_downleft', 23, { ox: 0, oy: -16 });
  sprite_zolnierka.define(23,'dead_upleft', 23, { ox: 16, oy: 0 });
  sprite_zolnierka.define(24,'damage_down', 6, { ox: 0, oy: 16 });
  sprite_zolnierka.define(25,'pistol_attack_up',16, { ox: 0, oy: 12 });
  sprite_zolnierka.define(26,'pistol_attack_right', 16, { ox: -12, oy: 0 });
  sprite_zolnierka.define(27,'pistol_attack_down', 16, { ox: 0, oy: -12 });
  sprite_zolnierka.define(28,'pistol_attack_left', 16, { ox: 12, oy: 0 });
  sprite_zolnierka.define(29,'pistol_attack_upright', 16, { ox: 6, oy: 12 });
  sprite_zolnierka.define(30,'pistol_attack_downright', 16, { ox: -12, oy: 4 });
  sprite_zolnierka.define(31,'pistol_attack_downleft', 16, { ox: -4, oy: -12 });
  sprite_zolnierka.define(32,'pistol_attack_upleft', 16, { ox: 12, oy: -4 });
  sprite_zolnierka.define(33,'natural_attack_up', 10, { ox: 0, oy: 12 });
  sprite_zolnierka.define(34, 'natural_attack_right', 10, { ox: -12, oy: 0 });
  sprite_zolnierka.define(35, 'natural_attack_down', 10, { ox: 0, oy: -12 });
  sprite_zolnierka.define(36, 'natural_attack_left', 10, { ox: 12, oy: 0 });
  sprite_zolnierka.define(37, 'natural_attack_upright', 10, { ox: 2, oy: 12 });
  sprite_zolnierka.define(38, 'natural_attack_downright', 10, { ox: -12, oy: 4 });
  sprite_zolnierka.define(39, 'natural_attack_downleft', 10, { ox: -4, oy: -16 });
  sprite_zolnierka.define(40, 'natural_attack_upleft', 10, { ox: 12, oy: -4 });
  sprite_zolnierka.define(41, 'machine_gun_attack_up', 15, { ox: 0, oy: 16 });
  sprite_zolnierka.define(42, 'machine_gun_attack_right', 15, { ox: -16, oy: 0 });
  sprite_zolnierka.define(43, 'machine_gun_attack_down', 15, { ox: 0, oy: -16 });
  sprite_zolnierka.define(44, 'machine_gun_attack_left', 15, { ox: 16, oy: 0 });
  sprite_zolnierka.define(45, 'machine_gun_attack_upright', 15, { ox: 0, oy: 16 });
  sprite_zolnierka.define(46, 'machine_gun_attack_downright', 15, { ox: -16, oy: 0 });
  sprite_zolnierka.define(47, 'machine_gun_attack_downleft', 15, { ox: 0, oy: -16 }),
  sprite_zolnierka.define(48, 'machine_gun_attack_upleft', 15, { ox: 16, oy: 0 });
  sprite_zolnierka.define(49, 'rifle_attack_up', 14, { ox: 0, oy: 16 });
  sprite_zolnierka.define(50, 'rifle_attack_right', 14, { ox: -16, oy: 0 });
  sprite_zolnierka.define(51, 'rifle_attack_down', 14, { ox: 0, oy: -16 });
  sprite_zolnierka.define(52, 'rifle_attack_left', 14, { ox: 16, oy: 0 });
  sprite_zolnierka.define(53, 'rifle_attack_upright', 14, { ox: 0, oy: 16 });
  sprite_zolnierka.define(54, 'rifle_attack_downright', 14, { ox: -16, oy: 0 });
  sprite_zolnierka.define(55, 'rifle_attack_downleft', 14, { ox: 0, oy: -16 });
  sprite_zolnierka.define(56, 'rifle_attack_upleft', 14, { ox: 16, oy: 0 });
  sprite_zolnierka.define(57, 'pole_attack_up', 9, { ox: 0, oy: 10 });
  sprite_zolnierka.define(58, 'pole_attack_right', 9, { ox: -10, oy: 0 });
  sprite_zolnierka.define(59, 'pole_attack_down', 9, { ox: 2, oy: -10 });
  sprite_zolnierka.define(60, 'pole_attack_left', 9, { ox: 10, oy: 0 });
  sprite_zolnierka.define(61, 'pole_attack_upright', 9, { ox: 0, oy: 10 });
  sprite_zolnierka.define(62, 'pole_attack_downright', 9, { ox: -8, oy: -2 });
  sprite_zolnierka.define(63, 'pole_attack_downleft', 9, { ox: -2, oy: -8 });
  sprite_zolnierka.define(64, 'pole_attack_upleft', 9, { ox: 10, oy: 0 });
  sprite_zolnierka.fps(12);

  sprite_zolnierka.set('stand_down');
  soldiers.define("Żołnierka", {
//    vigour: 12,
 //   agility: 13,
 //   perception: 16,
 //   intelligence: 14,
 //   hit_modifier: 0,

 //   abilities: { martial: 1, rifle: 3, pole: 1, pistol: 2, machine_gun: 2 },
    max_life: 500,
    attack: 40,
    min_attack: 9,
    defence: 10,
    walk_speed: 5, // predkosc chodzenia
    run_speed: 5, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Pięść",
    natural_armour: "Skóra",

    natural_range: 19,
    hammer_range: 20,
    sword_range: 20,
    pole_range: 53,

    sprite: sprite_zolnierka,
    radius: 13,
    sight: 0,

    first_skill: Skill_komandoska_first(),
    second_skill: Skill_komandoska_second(),
	
	dead_sound_src: [ 'assets/audio/creatures/lidia1.ogg' ],
    dead_sound_volume: 1.0,

    // adres duzej ikony postaci
    icon: 'assets/img/creatures/lidia_duzy2.png',
    panel: 'assets/img/creatures/panel_lidia_duzy2.png',
    // adres malej ikony postaci
    mini_icon: 'assets/img/creatures/lidia48.png',
  });

  //var sprite = new Sprite('assets/img/creatures/mutant.png', 64, 64);
  var sprite_komandoska = new Sprite();
  sprite_komandoska.set_image_src('assets/img/creatures/komandoska.gif');
  sprite_komandoska.set_size(96, 96);

  sprite_komandoska.define(0,'walk_up', 12, { ox: -2, oy: 11, fps: 18 });
  sprite_komandoska.define(1,'walk_right', 12, { ox: -11, oy: -2, fps: 18 });
  sprite_komandoska.define(2,'walk_down', 12, { ox: 2, oy: -11, fps: 18 });
  sprite_komandoska.define(3,'walk_left', 12, { ox: 11, oy: 2, fps: 18 });
  sprite_komandoska.define(4,'walk_upright', 12, { ox: 0, oy: 11, fps: 18 });
  sprite_komandoska.define(5,'walk_downright', 12, { ox: -12, oy: 0, fps: 18 });
  sprite_komandoska.define(6,'walk_downleft', 12, { ox: 0, oy: -10, fps: 18 });
  sprite_komandoska.define(7,'walk_upleft', 12, { ox: 11, oy: 0, fps: 18 });
  sprite_komandoska.define(8,'natural_attack_up', 12, { ox: -2, oy: 11 });
  sprite_komandoska.define(9,'natural_attack_right', 12, { ox: -11, oy: -2 });
  sprite_komandoska.define(10,'natural_attack_down', 12, { ox: 1, oy: -11 });
  sprite_komandoska.define(11,'natural_attack_left', 12, { ox: 11, oy: 1 });
  sprite_komandoska.define(12, 'natural_attack_upright', 12, { ox: -2, oy: 11 });
  sprite_komandoska.define(13, 'natural_attack_downright', 12, { ox: -11, oy: 0 });
  sprite_komandoska.define(14, 'natural_attack_downleft', 12, { ox: 1, oy: -11 });
  sprite_komandoska.define(15, 'natural_attack_upleft', 12, { ox: 11, oy: 1 });
  sprite_komandoska.define(16,'pole_attack_up', 13, { ox: -2, oy: 11 });
  sprite_komandoska.define(17,'pole_attack_right', 13, { ox: -11, oy: -1 });
  sprite_komandoska.define(18,'pole_attack_down', 13, { ox: 2, oy: -11 });
  sprite_komandoska.define(19,'pole_attack_left', 13, { ox: 11, oy: 2 });
  sprite_komandoska.define(20, 'pole_attack_upright', 13, { ox: 0, oy: 11 });
  sprite_komandoska.define(21, 'pole_attack_downright', 13, { ox: -11, oy: -1 });
  sprite_komandoska.define(22, 'pole_attack_downleft', 13, { ox: 0, oy: -10 });
  sprite_komandoska.define(23, 'pole_attack_upleft', 13, { ox: 10, oy: 1 });
  sprite_komandoska.define(24, 'knife_attack_up', 9, {ox: 0, oy: 0});
  sprite_komandoska.define(25, 'knife_attack_right', 9, {ox: 0, oy: 2});
  sprite_komandoska.define(26, 'knife_attack_down', 9, {ox: 0, oy: 2});
  sprite_komandoska.define(27, 'knife_attack_left', 9, {ox: -1, oy: 0});
  sprite_komandoska.define(28, 'knife_attack_upright', 9, {ox: 0, oy: 1});
  sprite_komandoska.define(29, 'knife_attack_downright', 9, {ox: 0, oy: 1});
  sprite_komandoska.define(30, 'knife_attack_downleft', 9, {ox: 0, oy: 0});
  sprite_komandoska.define(31, 'knife_attack_upleft', 9, {ox: 0, oy: 0});
  sprite_komandoska.define(32, 'pistol_attack_up', 11, { ox: -2, oy: 10 });
  sprite_komandoska.define(33, 'pistol_attack_right', 11, { ox: -11, oy: 0 });
  sprite_komandoska.define(34, 'pistol_attack_down', 11, { ox: 2, oy: -10 });
  sprite_komandoska.define(35, 'pistol_attack_left', 11, { ox: 11, oy: 3 });
  sprite_komandoska.define(36, 'pistol_attack_upright', 11, { ox: 0, oy: 12 });
  sprite_komandoska.define(37, 'pistol_attack_downright', 11, { ox: -12, oy: 0 }),
  sprite_komandoska.define(38, 'pistol_attack_downleft', 11, { ox: 0, oy: -10 });
  sprite_komandoska.define(39, 'pistol_attack_upleft', 11, { ox: 11, oy: 2 });
  sprite_komandoska.define(40, 'bow_attack_up', 16, { ox: -2, oy: 13 });
  sprite_komandoska.define(41, 'bow_attack_right', 16, { ox: -11, oy: 1 });
  sprite_komandoska.define(42, 'bow_attack_down', 16, { ox: 2, oy: -9 });
  sprite_komandoska.define(43, 'bow_attack_left', 16, { ox: 11, oy: 4 });
  sprite_komandoska.define(44, 'bow_attack_upright', 16, { ox: 0, oy: 13 });
  sprite_komandoska.define(45, 'bow_attack_downright', 16, { ox: -12, oy: 1 });
  sprite_komandoska.define(46, 'bow_attack_downleft', 16, { ox: 0, oy: -9 });
  sprite_komandoska.define(47, 'bow_attack_upleft', 16, { ox: 12, oy: 3 });
  sprite_komandoska.define(48, 'dead_up', 27, {ox: -2, oy: 13});
  sprite_komandoska.define(49, 'dead_right', 27, {ox: -11, oy: 1});
  sprite_komandoska.define(50, 'dead_down', 27, {ox: 1, oy: -9});
  sprite_komandoska.define(51, 'dead_left', 27, {ox: 11, oy: 3});
  sprite_komandoska.define(52, 'dead_upright', 27, {ox: 0, oy: 13});
  sprite_komandoska.define(53, 'dead_downright', 27, {ox: -12, oy: 1});
  sprite_komandoska.define(54, 'dead_downleft', 27, {ox: 0, oy: -9});
  sprite_komandoska.define(55, 'dead_upleft', 27, {ox: 11, oy: 3});
  sprite_komandoska.define(56, 'stand_up', 30, { ox: -2, oy: 14 });
  sprite_komandoska.define(57, 'stand_right', 30, { ox: -10, oy: 1 });
  sprite_komandoska.define(58, 'stand_down', 30, { ox: 1, oy: -8 });
  sprite_komandoska.define(59, 'stand_left', 30, { ox: 11, oy: 4 });
  sprite_komandoska.define(60, 'stand_upright', 30, { ox: 0, oy: 14 });
  sprite_komandoska.define(61, 'stand_downright', 30, { ox: -12, oy: 3 });
  sprite_komandoska.define(62, 'stand_downleft', 30, { ox: 0, oy: -8 });
  sprite_komandoska.define(63, 'stand_upleft', 30, { ox: 10, oy: 3 });
  sprite_komandoska.define(64, 'damage_down', 7, { ox: 4, oy: 8 });
  
  sprite_komandoska.fps(12);

  sprite_komandoska.set('stand_down');
  soldiers.define("Komandoska", {
  
  	max_life: 400,
    attack: 60,
    min_attack: 10,
    defence: 5,
    walk_speed: 4, // predkosc chodzenia
    run_speed: 4,

    natural_weapon: "Pięść",
    natural_armour: "Skóra",

    natural_range: 22,
    pole_range: 61,
    knife_range: 31,

    sprite: sprite_komandoska,
    radius: 13,
    sight: 0,
	
    first_skill: Skill_komandoska_first(),
    second_skill: Skill_komandoska_second(),

    // adres duzej ikony postaci
    icon: 'assets/img/creatures/czarnecka98.png',
    panel: 'assets/img/creatures/czarnecka98.png',
    // adres malej ikony postaci
    mini_icon: 'assets/img/creatures/czarnecka48.png',
  });
  
  // var sprite = new Sprite('assets/img/creatures/mutant.png', 64, 64);
  var sprite_inzynier = new Sprite();
  sprite_inzynier.set_image_src('assets/img/creatures/inzynier.gif');
  sprite_inzynier.set_size(96, 96);

  sprite_inzynier.define(0,'walk_up', 12, { ox: -2, oy: 11, fps: 18 });
  sprite_inzynier.define(1,'walk_right', 12, { ox: -11, oy: -2, fps: 18 });
  sprite_inzynier.define(2,'walk_down', 12, { ox: 2, oy: -11, fps: 18 });
  sprite_inzynier.define(3,'walk_left', 12, { ox: 11, oy: 2, fps: 18 });
  sprite_inzynier.define(4,'walk_uprignt', 12, { ox: 0, oy: 11, fps: 18 });
  sprite_inzynier.define(5,'walk_downright', 12, { ox: -12, oy: 0, fps: 18 });
  sprite_inzynier.define(6,'walk_downleft', 12, { ox: 0, oy: -10, fps: 18 });
  sprite_inzynier.define(7,'walk_upleft', 12, { ox: 11, oy: 0, fps: 18 });
  sprite_inzynier.define(8,'natural_attack_up', 12, { ox: -2, oy: 11 });
  sprite_inzynier.define(9,'natural_attack_right', 12, { ox: -11, oy: -2 });
  sprite_inzynier.define(10,'natural_attack_down', 12, { ox: 1, oy: -11 });
  sprite_inzynier.define(11,'natural_attack_left', 12, { ox: 11, oy: 1 });
  sprite_inzynier.define(12, 'natural_attack_upright', 12, { ox: -2, oy: 11 });
  sprite_inzynier.define(13, 'natural_attack_downright', 12, { ox: -11, oy: 0 });
  sprite_inzynier.define(14, 'natural_attack_downleft', 12, { ox: 1, oy: -11 });
  sprite_inzynier.define(15, 'natural_attack_upleft', 12, { ox: 11, oy: 1 });
  sprite_inzynier.define(16,'pole_attack_up', 13, { ox: -2, oy: 11 });
  sprite_inzynier.define(17,'pole_attack_right', 13, { ox: -11, oy: -1 });
  sprite_inzynier.define(18,'pole_attack_down', 13, { ox: 2, oy: -11 });
  sprite_inzynier.define(19,'pole_attack_left', 13, { ox: 11, oy: 2 });
  sprite_inzynier.define(20, 'pole_attack_upright', 13, { ox: 0, oy: 11 });
  sprite_inzynier.define(21, 'pole_attack_downright', 13, { ox: -11, oy: -1 });
  sprite_inzynier.define(22, 'pole_attack_downleft', 13, { ox: 0, oy: -10 });
  sprite_inzynier.define(23, 'pole_attack_upleft', 13, { ox: 10, oy: 1 });
  sprite_inzynier.define(24, 'knife_attack_up', 9, {ox: 0, oy: 0});
  sprite_inzynier.define(25, 'knife_attack_right', 9, {ox: 0, oy: 2});
  sprite_inzynier.define(26, 'knife_attack_down', 9, {ox: 0, oy: 2});
  sprite_inzynier.define(27, 'knife_attack_left', 9, {ox: -1, oy: 0});
  sprite_inzynier.define(28, 'knife_attack_upright', 9, {ox: 0, oy: 1});
  sprite_inzynier.define(29, 'knife_attack_downright', 9, {ox: 0, oy: 1});
  sprite_inzynier.define(30, 'knife_attack_downleft', 9, {ox: 0, oy: 0});
  sprite_inzynier.define(31, 'knife_attack_upleft', 9, {ox: 0, oy: 0});
  sprite_inzynier.define(32, 'pistol_attack_up', 11, { ox: -2, oy: 10 });
  sprite_inzynier.define(33, 'pistol_attack_right', 11, { ox: -11, oy: 0 });
  sprite_inzynier.define(34, 'pistol_attack_down', 11, { ox: 2, oy: -10 });
  sprite_inzynier.define(35, 'pistol_attack_left', 11, { ox: 11, oy: 3 });
  sprite_inzynier.define(36, 'pistol_attack_upright', 11, { ox: 0, oy: 12 });
  sprite_inzynier.define(37, 'pistol_attack_downright', 11, { ox: -12, oy: 0 }),
  sprite_inzynier.define(38, 'pistol_attack_downleft', 11, { ox: 0, oy: -10 });
  sprite_inzynier.define(39, 'pistol_attack_upleft', 11, { ox: 11, oy: 2 });
  sprite_inzynier.define(40, 'bow_attack_up', 16, { ox: -2, oy: 13 });
  sprite_inzynier.define(41, 'bow_attack_right', 16, { ox: -11, oy: 1 });
  sprite_inzynier.define(42, 'bow_attack_down', 16, { ox: 2, oy: -9 });
  sprite_inzynier.define(43, 'bow_attack_left', 16, { ox: 11, oy: 4 });
  sprite_inzynier.define(44, 'bow_attack_upright', 16, { ox: 0, oy: 13 });
  sprite_inzynier.define(45, 'bow_attack_downright', 16, { ox: -12, oy: 1 });
  sprite_inzynier.define(46, 'bow_attack_downleft', 16, { ox: 0, oy: -9 });
  sprite_inzynier.define(47, 'bow_attack_upleft', 16, { ox: 12, oy: 3 });
  sprite_inzynier.define(48, 'dead_up', 27, {ox: -2, oy: 13});
  sprite_inzynier.define(49, 'dead_right', 27, {ox: -11, oy: 1});
  sprite_inzynier.define(50, 'dead_down', 27, {ox: 1, oy: -9});
  sprite_inzynier.define(51, 'dead_left', 27, {ox: 11, oy: 3});
  sprite_inzynier.define(52, 'dead_upright', 27, {ox: 0, oy: 13});
  sprite_inzynier.define(53, 'dead_downright', 27, {ox: -12, oy: 1});
  sprite_inzynier.define(54, 'dead_downleft', 27, {ox: 0, oy: -9});
  sprite_inzynier.define(55, 'dead_upleft', 27, {ox: 11, oy: 3});
  sprite_inzynier.define(56, 'stand_up', 30, { ox: -2, oy: 14 });
  sprite_inzynier.define(57, 'stand_right', 30, { ox: -10, oy: 1 });
  sprite_inzynier.define(58, 'stand_down', 30, { ox: 1, oy: -8 });
  sprite_inzynier.define(59, 'stand_left', 30, { ox: 11, oy: 4 });
  sprite_inzynier.define(60, 'stand_upright', 30, { ox: 0, oy: 14 });
  sprite_inzynier.define(61, 'stand_downright', 30, { ox: -12, oy: 3 });
  sprite_inzynier.define(62, 'stand_downleft', 30, { ox: 0, oy: -8 });
  sprite_inzynier.define(63, 'stand_upleft', 30, { ox: 10, oy: 3 });
  sprite_inzynier.define(64, 'damage', 7, { ox: 4, oy: 8 });
  
  sprite_inzynier.fps(12);

  sprite_inzynier.set('stand_down');
  soldiers.define("Inżynier", {
  	max_life: 150,
    attack: 60,
    min_attack: 10,
    defence: 5,
    walk_speed: 4, // predkosc chodzenia
    run_speed: 4, // predkosc biegania (postacie gracza tylko biegaja)

    sight: 0,
//    vigour: 14,
//    agility: 18,
//    perception: 15,
//    intelligence: 16,
//    hit_modifier: 0,

//    abilities: { martial: 4, crossbow: 2, pole: 3, pistol: 2, thrower: 1 },

    natural_weapon: "Pięść",
    natural_armour: "Skóra",

    natural_range: 22,
    pole_range: 61,
	  knife_range: 31,

    sprite: sprite_inzynier,
    radius: 13,
    sight: 0,

    // adres duzej ikony postaci
    icon: 'assets/img/creatures/inzynier100.png',
    panel: 'assets/img/creatures/inzynier100.png',
    // adres malej ikony postaci
    mini_icon: 'assets/img/creatures/inzynier50.png',
    
    first_skill: Skill_komandoska_first(),
    second_skill: Skill_komandoska_second(),

	  });

  };
