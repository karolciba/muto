function creatures_data(creatures) {

  // Tworzymy nowy obiekt sprite - dla każdego sprite dla kazdego typu kreatury powinien być nowy obiekt
  // sprite dla zdefiniowanych kreatur mozna objerzeć na stronie Muto/jsapp/public/sprites.html
  // tam wybieramy rodzaj bota i przyciskami lub klawiszami < i >
  // przeglądamy klatka po klatce
  var sprite_zmutowany_gryzon = new Sprite();

  // ustawiamy adres do obrazka
  sprite_zmutowany_gryzon.set_image_src('assets/img/creatures/szczur.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_zmutowany_gryzon.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_zmutowany_gryzon.define(0,'walk_up', 10, { ox: -1, oy: 5 });
  sprite_zmutowany_gryzon.define(1,'walk_right', 10, { ox: -1, oy: 5 });
  sprite_zmutowany_gryzon.define(2,'walk_down', 10, { ox: -1, oy: 6 });
  sprite_zmutowany_gryzon.define(3,'walk_left', 10, { ox: -2, oy: 6 });
  sprite_zmutowany_gryzon.define(4,'walk_upright', 10, { ox: 3, oy: 6 });
  sprite_zmutowany_gryzon.define(5,'walk_downright', 10, { ox: -3, oy: 8 });
  sprite_zmutowany_gryzon.define(6,'walk_downleft', 10, { ox: -2, oy: 3 });
  sprite_zmutowany_gryzon.define(7,'walk_upleft', 10, { ox: 0, oy: 2 });
  sprite_zmutowany_gryzon.define(8,'natural_attack_up', 9, { ox: -1, oy: 6 });
  sprite_zmutowany_gryzon.define(9,'natural_attack_right', 9, { ox: -2, oy: 6 });
  sprite_zmutowany_gryzon.define(10,'natural_attack_down', 9, { ox: 0, oy: 6 });
  sprite_zmutowany_gryzon.define(11,'natural_attack_left', 9, { ox: -1, oy: 6 });
  sprite_zmutowany_gryzon.define(12,'natural_attack_upright', 9, { ox: 1, oy: 8 });
  sprite_zmutowany_gryzon.define(13,'natural_attack_downright', 9, { ox: -5, oy: 7 });
  sprite_zmutowany_gryzon.define(14,'natural_attack_downleft', 9, { ox: -3, oy: 5 });
  sprite_zmutowany_gryzon.define(15,'natural_attack_upleft', 9, { ox: 1, oy: 3 });
  sprite_zmutowany_gryzon.define(16,'dead_up', 8, { ox: -3, oy: 5 });
  sprite_zmutowany_gryzon.define(17,'dead_right', 8, { ox: -3, oy: 4 });
  sprite_zmutowany_gryzon.define(18,'dead_down', 8, { ox: -2, oy: 4 });
  sprite_zmutowany_gryzon.define(19,'dead_left', 8, { ox: -2, oy: 5 });
  sprite_zmutowany_gryzon.define(20,'dead_upright', 8, { ox: 0, oy: 7 });
  sprite_zmutowany_gryzon.define(21,'dead_downright', 8, { ox: -5, oy: 7 });
  sprite_zmutowany_gryzon.define(22,'dead_downleft', 8, { ox: -4, oy: 2 });
  sprite_zmutowany_gryzon.define(23,'dead_upleft', 8, { ox: 0, oy: 2 });
  sprite_zmutowany_gryzon.define(24,'stand_upright', 28, { ox: 1, oy: 7 });
  sprite_zmutowany_gryzon.define(25,'stand_downright', 28, { ox: -4, oy: 8 });
  sprite_zmutowany_gryzon.define(26,'stand_downleft', 28, { ox: -5, oy: 2 });
  sprite_zmutowany_gryzon.define(27,'stand_upleft', 28, { ox: 0, oy: 3 });
  sprite_zmutowany_gryzon.define(28,'stand_up', 28, { ox: -3, oy: 5 });
  sprite_zmutowany_gryzon.define(29,'stand_right', 28, { ox: -3, oy: 4 });
  sprite_zmutowany_gryzon.define(30,'stand_down', 28, { ox: 0, oy: 4 });
  sprite_zmutowany_gryzon.define(31,'stand_left', 28, { ox: -1, oy: 6 });
  sprite_zmutowany_gryzon.define(32,'damage_down', 6, { ox: -4, oy: 0 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_zmutowany_gryzon.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_zmutowany_gryzon.set('stand_down');

  creatures.define("Zmutowany_gryzon", {
    max_life: 130,
    attack: 6, 
    min_attack: 2, 
    defence: 0,
    walk_speed: 2.8, // predkosc chodzenia
    run_speed: 3.8, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Pazury gryzoni",
    natural_armour: "Futro Gryzonia",

    sprite: sprite_zmutowany_gryzon,

    radius: 7,

    natural_range: 10,

    sight: 120,
    hearing: 150,
    dead_sound_src: [ 'assets/audio/creatures/szczur.ogg', 'assets/audio/creatures/ratsdeath.ogg' ],
    dead_sound_volume: 0.5,

    opponents: [ 'Korsarz', 'Korsarz_7', 'Mutant', "Żołnierz_Kameleona" ],

    // prawdopodobieństwa wypadajek
    // jesli suma < 1 to znaczy, że nie zawsze coś wypadnie
    // np. ammo: 0.33 + health: 0.33 + viols: 0.34 = 1 - zawsze coś wypadnie
    // np. ammo: 0.2 + health: 0.2 + viols: 0.2 = 0.6 - 60% ze coś wypadnie
    // np. ammo: 0 + health: 0.5 + viols: 0 = 0.5 - 50 % szans ze wypadnie zycie
    // ttl mozna nie ustawiać, wtedy będzie brane z configu
    // *_add, mozna nie ustawiac, bedzie brane z configu
    droppings: { ammo: 0.00, health: 0.00, viols: 0.00, ttl: 15 * 24, health_add: [5,10], ammo_add: [0.0, 0.0], viols_add: [1,3] }
  });
  
  var sprite_szczur = new Sprite();

  // ustawiamy adres do obrazka
  sprite_szczur.set_image_src('assets/img/creatures/szczur.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_szczur.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilość klatek)
  
  sprite_szczur.define(0,'walk_up', 10, { ox: -1, oy: 6 });
  sprite_szczur.define(1,'walk_right', 10, { ox: 0, oy: 6 });
  sprite_szczur.define(2,'walk_down', 10, { ox: 0, oy: 6 });
  sprite_szczur.define(3,'walk_left', 10, { ox: 0, oy: 6 });
  sprite_szczur.define(4,'walk_upright', 10, { ox: 1, oy: 7 });
  sprite_szczur.define(5,'walk_downright', 10, { ox: -1, oy: 9 });
  sprite_szczur.define(6,'walk_downleft', 10, { ox: -4, oy: 5 });
  sprite_szczur.define(7,'walk_upleft', 10, { ox: 0, oy: 3 });
  sprite_szczur.define(8,'natural_attack_up', 9, { ox: -1, oy: 7 });
  sprite_szczur.define(9,'natural_attack_right', 9, { ox: -2, oy: 6 });
  sprite_szczur.define(10,'natural_attack_down', 9, { ox: 0, oy: 6 });
  sprite_szczur.define(11,'natural_attack_left', 9, { ox: 0, oy: 6 });
  sprite_szczur.define(12,'natural_attack_upright', 9, { ox: 2, oy: 8 });
  sprite_szczur.define(13,'natural_attack_downright', 9, { ox: -3, oy: 8 });
  sprite_szczur.define(14,'natural_attack_downleft', 9, { ox: -2, oy: 4 });
  sprite_szczur.define(15,'natural_attack_upleft', 9, { ox: 1, oy: 3 });
  sprite_szczur.define(16,'dead_up', 8, { ox: -1, oy: 5 });
  sprite_szczur.define(17,'dead_right', 8, { ox: -2, oy:6 });
  sprite_szczur.define(18,'dead_down', 8, { ox: 0, oy: 4 });
  sprite_szczur.define(19,'dead_left', 8, { ox: -2, oy: 7 });
  sprite_szczur.define(20,'dead_upright', 8, { ox: 2, oy: 8 });
  sprite_szczur.define(21,'dead_downright', 8, { ox: -5, oy: 7 });
  sprite_szczur.define(22,'dead_downleft', 8, { ox: -4, oy: 6 });
  sprite_szczur.define(23,'dead_upleft', 8, { ox: 0, oy: 2 });
  sprite_szczur.define(24,'stand_upright', 28, { ox: 2, oy: 8 });
  sprite_szczur.define(25,'stand_downright', 28, { ox: -2, oy: 10 });
  sprite_szczur.define(26,'stand_downleft', 28, { ox: -4, oy: 5 });
  sprite_szczur.define(27,'stand_upleft', 28, { ox: 1, oy: 4 });
  sprite_szczur.define(28,'stand_up', 28, { ox: 0, oy: 6 });
  sprite_szczur.define(29,'stand_right', 28, { ox: -2, oy: 6 });
  sprite_szczur.define(30,'stand_down', 28, { ox: 1, oy: 6 });
  sprite_szczur.define(31,'stand_left', 28, { ox: 0, oy: 7 });
  sprite_szczur.define(32,'damage_down', 6, { ox: -1, oy: 0 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_szczur.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_szczur.set('stand_down');

  creatures.define("Szczur", {
    max_life: 170,
    attack: 8,
    min_attack: 3,
    defence: 2,
    walk_speed: 3, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)
	
	natural_weapon: "Pazury gryzoni",
    natural_armour: "Futro",

    sprite: sprite_szczur,
    radius: 	6,
    natural_range: 7,
    sight: 		200,
    hearing: 	220,
    dead_sound_src: [ 'assets/audio/creatures/szczur.ogg', 'assets/audio/creatures/ratsdeath.ogg' ],
    dead_sound_volume: 1.0,
	
	droppings: { ammo: 0.00, health: 0.1, viols: 0.05, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.0, 0.0], viols_add: [3,3] },
  // friendly: true,
	opponents: [ 'Korsarz', 'Korsarz_7' ],
  });
  
  var sprite_szczur_kolos = new Sprite();

  // ustawiamy adres do obrazka
  sprite_szczur_kolos.set_image_src('assets/img/creatures/szczur.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur_kolos)
  // set_size(szerokość, wysokość)
  sprite_szczur_kolos.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilość klatek)
  
  sprite_szczur_kolos.define(0,'walk_up', 10, { ox: -1, oy: 6 });
  sprite_szczur_kolos.define(1,'walk_right', 10, { ox: 0, oy: 6 });
  sprite_szczur_kolos.define(2,'walk_down', 10, { ox: 0, oy: 6 });
  sprite_szczur_kolos.define(3,'walk_left', 10, { ox: 0, oy: 6 });
  sprite_szczur_kolos.define(4,'walk_upright', 10, { ox: 1, oy: 7 });
  sprite_szczur_kolos.define(5,'walk_downright', 10, { ox: -1, oy: 9 });
  sprite_szczur_kolos.define(6,'walk_downleft', 10, { ox: -4, oy: 5 });
  sprite_szczur_kolos.define(7,'walk_upleft', 10, { ox: 0, oy: 3 });
  sprite_szczur_kolos.define(8,'natural_attack_up', 9, { ox: -1, oy: 7 });
  sprite_szczur_kolos.define(9,'natural_attack_right', 9, { ox: -2, oy: 6 });
  sprite_szczur_kolos.define(10,'natural_attack_down', 9, { ox: 0, oy: 6 });
  sprite_szczur_kolos.define(11,'natural_attack_left', 9, { ox: 0, oy: 6 });
  sprite_szczur_kolos.define(12,'natural_attack_upright', 9, { ox: 2, oy: 8 });
  sprite_szczur_kolos.define(13,'natural_attack_downright', 9, { ox: -3, oy: 8 });
  sprite_szczur_kolos.define(14,'natural_attack_downleft', 9, { ox: -2, oy: 4 });
  sprite_szczur_kolos.define(15,'natural_attack_upleft', 9, { ox: 1, oy: 3 });
  sprite_szczur_kolos.define(16,'dead_up', 8, { ox: -1, oy: 5 });
  sprite_szczur_kolos.define(17,'dead_right', 8, { ox: -2, oy:6 });
  sprite_szczur_kolos.define(18,'dead_down', 8, { ox: 0, oy: 4 });
  sprite_szczur_kolos.define(19,'dead_left', 8, { ox: -2, oy: 7 });
  sprite_szczur_kolos.define(20,'dead_upright', 8, { ox: 2, oy: 8 });
  sprite_szczur_kolos.define(21,'dead_downright', 8, { ox: -5, oy: 7 });
  sprite_szczur_kolos.define(22,'dead_downleft', 8, { ox: -4, oy: 6 });
  sprite_szczur_kolos.define(23,'dead_upleft', 8, { ox: 0, oy: 2 });
  sprite_szczur_kolos.define(24,'stand_upright', 28, { ox: 2, oy: 8 });
  sprite_szczur_kolos.define(25,'stand_downright', 28, { ox: -2, oy: 10 });
  sprite_szczur_kolos.define(26,'stand_downleft', 28, { ox: -4, oy: 5 });
  sprite_szczur_kolos.define(27,'stand_upleft', 28, { ox: 1, oy: 4 });
  sprite_szczur_kolos.define(28,'stand_up', 28, { ox: 0, oy: 6 });
  sprite_szczur_kolos.define(29,'stand_right', 28, { ox: -2, oy: 6 });
  sprite_szczur_kolos.define(30,'stand_down', 28, { ox: 1, oy: 6 });
  sprite_szczur_kolos.define(31,'stand_left', 28, { ox: 0, oy: 7 });
  sprite_szczur_kolos.define(32,'damage_down', 6, { ox: -1, oy: 0 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_szczur_kolos.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_szczur_kolos.set('stand_down');

  creatures.define("Szczur_Kolos", {
    max_life: 230,
    attack: 11,
    min_attack: 3,
    defence: 5,
    walk_speed: 1, // predkosc chodzenia
    run_speed: 2.5, // predkosc biegania (postacie gracza tylko biegaja)
	
	natural_weapon: "Pazury gryzoni",
    natural_armour: "Futro",

    sprite: sprite_szczur_kolos,
    radius: 	6,
    natural_range: 7,
    sight: 		200,
    hearing: 	220,
    dead_sound_src: [ 'assets/audio/creatures/szczur.ogg', ],
    dead_sound_volume: 1.0,
	
	droppings: { ammo: 0.00, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [35,35], ammo_add: [0.0, 0.0], viols_add: [5,5] },
  // friendly: true,
	opponents: [ 'Korsarz', 'Korsarz_7' ],
  });
  
  var sprite_mutant = new Sprite();

  // ustawiamy adres do obrazka
  sprite_mutant.set_image_src('assets/img/creatures/zarazony.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje sie sprite_mutant)
  // set_size(szerokość, wysokość)
  sprite_mutant.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek)
  // opcjonalnie na koncu dodajemy tablice z parametrami, mozliwe paramety
  // ox - przesuniecie środka klatki
  // oy - przesuniecie środka klatki
  // fps - ilosc klatek na sekunde (napisuje globalne ustawienie dla sprite)
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek, { ox: 1, oy: -1, fps: 24 } )
  
  // sprite_mutant.define(0,'walk_up', 11, { ox: 6, oy: -18 });
  sprite_mutant.define(0,'walk_up', 11, { ox: -4, oy: 15, fps: 12 });
  sprite_mutant.define(1,'walk_right', 11, { ox: -16, oy: -5 });
  sprite_mutant.define(2,'walk_down', 11, { ox: 3, oy: -14 });
  sprite_mutant.define(3,'walk_left', 11, { ox: 15, oy: 4 });
  sprite_mutant.define(4,'walk_upleft', 11, { ox: 14, oy: 5 });
  sprite_mutant.define(5,'walk_upright', 11, { ox: -4, oy: 15 });
  sprite_mutant.define(6,'walk_downright', 11, { ox: -16, oy: -3 });
  sprite_mutant.define(7,'walk_downleft', 11, { ox: 0, oy: -15 });
  sprite_mutant.define(8,'natural_attack_up', 10, { ox: -4, oy: 20 });
  sprite_mutant.define(9,'natural_attack_right', 10, { ox: -16, oy: -4 });
  sprite_mutant.define(10,'natural_attack_down', 10, { ox: 3, oy: -15 });
  sprite_mutant.define(11,'natural_attack_left', 10, { ox: 17, oy: 3 });
  sprite_mutant.define(12,'natural_attack_upright', 10, { ox: -6, oy: 16 });
  sprite_mutant.define(13,'natural_attack_downright', 10, { ox: -17, oy: -5 });
  sprite_mutant.define(14,'natural_attack_downleft', 10, { ox: 2, oy: -16 });
  sprite_mutant.define(15,'natural_attack_upleft', 10, { ox: 15, oy: 5 });
  sprite_mutant.define(16,'dead_up', 9, { ox: 0, oy: 25 });
  sprite_mutant.define(17,'dead_right', 9, { ox: -20, oy: 2 });
  sprite_mutant.define(18,'dead_down', 9, { ox: 1, oy: -21 });
  sprite_mutant.define(19,'dead_left', 9, { ox: 15, oy: 2 });
  sprite_mutant.define(20,'dead_upright', 9, { ox: -8, oy: 22 });
  sprite_mutant.define(21,'dead_downright', 9, { ox: -18, oy: -6 });
  sprite_mutant.define(22,'dead_downleft', 9, { ox: 2, oy: -17 });
  sprite_mutant.define(23,'dead_upleft', 9, { ox: 14, oy: 2 });
  sprite_mutant.define(24,'stand_up', 35, { ox: -5, oy: 13 });
  sprite_mutant.define(25,'stand_right', 35, { ox: -16, oy: -4 });
  sprite_mutant.define(26,'stand_down', 35, { ox: 2, oy: -15 });
  sprite_mutant.define(27,'stand_left', 35, { ox: 15, oy: 2 });
  sprite_mutant.define(28,'stand_upright', 35, { ox: -5, oy: 15 });
  sprite_mutant.define(29,'stand_downright', 35, { ox: -16, oy: -2 });
  sprite_mutant.define(30,'stand_downleft', 35, { ox: 0, oy: -14 });
  sprite_mutant.define(31,'stand_upleft', 35, { ox: 16, oy: 6 });
  sprite_mutant.define(32,'damage_down', 6, { ox: -4, oy: 6 });


  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_mutant.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant.set('stand_down');

  // definiujemy kreature - najpierw "klucz", którym bedziemy się posługiwać w reszcie kodu
  creatures.define("Mutant", {
    max_life: 205,
    attack: 15,
    min_attack: 5,
    defence: 5,
    walk_speed: 2.0, // predkosc chodzenia
    run_speed: 3.8, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Łapa Zarażonego",
    natural_armour: "Futro",


    // ustawiamy wcześniej zdefiniowana sprite_mutant mape
    sprite: sprite_mutant,

    // ile pikseli wzgledem środka to przestrzeń kreatury na która nie można wchodzić
    natural_range: 27,
	radius: 	11, 

    // ile pikseli wzroku ma bot
    sight: 		130,

    // ile pikseli słuchu ma bot
    hearing: 	150,
    droppings: { ammo: 0.00, health: 0.1, viols: 0.05, ttl: 15 * 24, health_add: [20,20], ammo_add: [0.1, 0.25], viols_add: [5,10] },
    dead_sound_src: [ 'assets/audio/creatures/mutantsnarl6.ogg', ],
    dead_sound_volume: 1.0,

    // kogo bot bedzie atakował (gracza zawsze)
    opponents: [ 'Korsarz', 'Korsarz_7', 'Zmutowany_gryzon', 'Gor', ],
    // jesli ustawione bot nie bedzie atakowal gracza - aby wylaczyc nie ustawiac w ogole lub wpisac false
    // friendly: true,

  });
  
   var sprite_slepy_mutant = new Sprite();

  // ustawiamy adres do obrazka
  sprite_slepy_mutant.set_image_src('assets/img/creatures/zarazony.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje sie sprite_mutant)
  // set_size(szerokość, wysokość)
  sprite_slepy_mutant.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek)
  // opcjonalnie na koncu dodajemy tablice z parametrami, mozliwe paramety
  // ox - przesuniecie środka klatki
  // oy - przesuniecie środka klatki
  // fps - ilosc klatek na sekunde (napisuje globalne ustawienie dla sprite)
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek, { ox: 1, oy: -1, fps: 24 } )
  
  // sprite_mutant.define(0,'walk_up', 11, { ox: 6, oy: -18 });
  sprite_slepy_mutant.define(0,'walk_up', 11, { ox: -4, oy: 15, fps: 12 });
  sprite_slepy_mutant.define(1,'walk_right', 11, { ox: -16, oy: -5 });
  sprite_slepy_mutant.define(2,'walk_down', 11, { ox: 3, oy: -14 });
  sprite_slepy_mutant.define(3,'walk_left', 11, { ox: 15, oy: 4 });
  sprite_slepy_mutant.define(4,'walk_upleft', 11, { ox: 14, oy: 5 });
  sprite_slepy_mutant.define(5,'walk_upright', 11, { ox: -4, oy: 15 });
  sprite_slepy_mutant.define(6,'walk_downright', 11, { ox: -16, oy: -3 });
  sprite_slepy_mutant.define(7,'walk_downleft', 11, { ox: 0, oy: -15 });
  sprite_slepy_mutant.define(8,'natural_attack_up', 10, { ox: -4, oy: 20 });
  sprite_slepy_mutant.define(9,'natural_attack_right', 10, { ox: -16, oy: -4 });
  sprite_slepy_mutant.define(10,'natural_attack_down', 10, { ox: 3, oy: -15 });
  sprite_slepy_mutant.define(11,'natural_attack_left', 10, { ox: 17, oy: 3 });
  sprite_slepy_mutant.define(12,'natural_attack_upright', 10, { ox: -6, oy: 16 });
  sprite_slepy_mutant.define(13,'natural_attack_downright', 10, { ox: -17, oy: -5 });
  sprite_slepy_mutant.define(14,'natural_attack_downleft', 10, { ox: 2, oy: -16 });
  sprite_slepy_mutant.define(15,'natural_attack_upleft', 10, { ox: 15, oy: 5 });
  sprite_slepy_mutant.define(16,'dead_up', 9, { ox: 0, oy: 25 });
  sprite_slepy_mutant.define(17,'dead_right', 9, { ox: -20, oy: 2 });
  sprite_slepy_mutant.define(18,'dead_down', 9, { ox: 1, oy: -21 });
  sprite_slepy_mutant.define(19,'dead_left', 9, { ox: 15, oy: 2 });
  sprite_slepy_mutant.define(20,'dead_upright', 9, { ox: -8, oy: 22 });
  sprite_slepy_mutant.define(21,'dead_downright', 9, { ox: -18, oy: -6 });
  sprite_slepy_mutant.define(22,'dead_downleft', 9, { ox: 2, oy: -17 });
  sprite_slepy_mutant.define(23,'dead_upleft', 9, { ox: 14, oy: 2 });
  sprite_slepy_mutant.define(24,'stand_up', 35, { ox: -5, oy: 13 });
  sprite_slepy_mutant.define(25,'stand_right', 35, { ox: -16, oy: -4 });
  sprite_slepy_mutant.define(26,'stand_down', 35, { ox: 2, oy: -15 });
  sprite_slepy_mutant.define(27,'stand_left', 35, { ox: 15, oy: 2 });
  sprite_slepy_mutant.define(28,'stand_upright', 35, { ox: -5, oy: 15 });
  sprite_slepy_mutant.define(29,'stand_downright', 35, { ox: -16, oy: -2 });
  sprite_slepy_mutant.define(30,'stand_downleft', 35, { ox: 0, oy: -14 });
  sprite_slepy_mutant.define(31,'stand_upleft', 35, { ox: 16, oy: 6 });
  sprite_slepy_mutant.define(32,'damage_down', 6, { ox: -4, oy: 6 });


  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_slepy_mutant.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_slepy_mutant.set('stand_down');

  // definiujemy kreature - najpierw "klucz", którym bedziemy się posługiwać w reszcie kodu
  creatures.define("Ślepy Mutant", {
    max_life: 260,
    attack: 19,
    min_attack: 5,
    defence: 11,
    walk_speed: 1.3, // predkosc chodzenia
    run_speed: 4.0, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Łapa Zarażonego",
    natural_armour: "Futro",

    // ustawiamy wcześniej zdefiniowana sprite_mutant mape
    sprite: sprite_slepy_mutant,

    // ile pikseli wzgledem środka to przestrzeń kreatury na która nie można wchodzić
    natural_range: 27,
	radius: 	11, 

    // ile pikseli wzroku ma bot
    sight: 		60,

    // ile pikseli słuchu ma bot
    hearing: 	250,
	droppings: { ammo: 0.00, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [45,45], ammo_add: [0.1, 0.25], viols_add: [10,20] },

    // kogo bot bedzie atakował (gracza zawsze)
    opponents: [ 'Korsarz', 'Korsarz_7', 'Zmutowany_gryzon' ],
    // jesli ustawione bot nie bedzie atakowal gracza - aby wylaczyc nie ustawiac w ogole lub wpisac false
    // friendly: true,
	
	dead_sound_src: [ 'assets/audio/creatures/mutantsnarl6.ogg', ],
    dead_sound_volume: 1.0,

  });
  
  
// Magazyn

var sprite_korsarz_z_magazynu = new Sprite();

  // ustawiamy adres do obrazka
  sprite_korsarz_z_magazynu.set_image_src('assets/img/creatures/korsarz.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_korsarz_z_magazynu.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilość klatek )
  
  sprite_korsarz_z_magazynu.define(0,'walk_up', 12, { ox: 1, oy: 1});
  sprite_korsarz_z_magazynu.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_korsarz_z_magazynu.define(2,'walk_down', 12, { ox: -3, oy: -2 });
  sprite_korsarz_z_magazynu.define(3,'walk_left', 12, { ox: -2, oy: -3 });
  sprite_korsarz_z_magazynu.define(4,'walk_upright', 12, { ox: -2, oy: -1 });
  sprite_korsarz_z_magazynu.define(5,'walk_downright', 12, { ox: -2, oy: -3 });
  sprite_korsarz_z_magazynu.define(6,'walk_downleft', 12, { ox: -2, oy: -2 });
  sprite_korsarz_z_magazynu.define(7,'walk_upleft', 12, { ox: -1, oy: -1 });
  sprite_korsarz_z_magazynu.define(8,'stand_up', 17, { ox: -1, oy: 0});
  sprite_korsarz_z_magazynu.define(9,'stand_right', 17, { ox: -3, oy: 0 });
  sprite_korsarz_z_magazynu.define(10,'stand_down', 17, { ox: -4, oy: -2 });
  sprite_korsarz_z_magazynu.define(11,'stand_left', 17, { ox: -2, oy: -2 });
  sprite_korsarz_z_magazynu.define(12,'stand_upright', 17, { ox:0, oy: 0});
  sprite_korsarz_z_magazynu.define(13,'stand_downright', 17, { ox: -3, oy: 1 });
  sprite_korsarz_z_magazynu.define(14,'stand_downleft', 17, { ox: -4, oy: -3 });
  sprite_korsarz_z_magazynu.define(15,'stand_upleft', 17, { ox: -1, oy: -4 });
  sprite_korsarz_z_magazynu.define(16,'natural_attack_up', 10);
  sprite_korsarz_z_magazynu.define(17,'natural_attack_right', 10, { ox: -4, oy: 0 });
  sprite_korsarz_z_magazynu.define(18,'natural_attack_down', 10, { ox: -3, oy: -3 });
  sprite_korsarz_z_magazynu.define(19,'natural_attack_left', 10, { ox: -1, oy: -3 });
  sprite_korsarz_z_magazynu.define(20,'natural_attack_upright', 10);
  sprite_korsarz_z_magazynu.define(21,'natural_attack_downright', 10, { ox: -4, oy: -1 });
  sprite_korsarz_z_magazynu.define(22,'natural_attack_downleft', 10, { ox: -3, oy: -3 });
  sprite_korsarz_z_magazynu.define(23,'natural_attack_upleft', 10, { ox: 0, oy: -2 });
  sprite_korsarz_z_magazynu.define(24,'dead_up', 15, { ox: 1, oy: 3 });
  sprite_korsarz_z_magazynu.define(25,'dead_right', 15, { ox: -2, oy: 1 });
  sprite_korsarz_z_magazynu.define(26,'dead_down', 15, { ox: -1, oy: -1 });
  sprite_korsarz_z_magazynu.define(27,'dead_left', 15, { ox: 1, oy: -1 });
  sprite_korsarz_z_magazynu.define(28,'dead_upright', 15, { ox: -1, oy: 1 });
  sprite_korsarz_z_magazynu.define(29,'dead_downright', 15, { ox: -1, oy: -1 });
  sprite_korsarz_z_magazynu.define(30,'dead_downleft', 15, { ox: 0, oy: -1 });
  sprite_korsarz_z_magazynu.define(31,'dead_upleft', 15, { ox: 1, oy: 0 });
  sprite_korsarz_z_magazynu.define(32,'damage_down', 6, { ox: -1, oy: -3 });

  sprite_korsarz_z_magazynu.fps(12);
  sprite_korsarz_z_magazynu.set('stand_down');
  creatures.define("Korsarz_z_magazynu", {
	max_life: 280,
  attack: 18,
  min_attack: 4,
  defence: 10,
	natural_range: 20,
  walk_speed: 3.2, // predkosc chodzenia
  run_speed: 3.8, // predkosc biegania (postacie gracza tylko biegaja)
  natural_weapon: "Kordelas z Magazynu",
  natural_armour: "Skórzana kurtka",

  sprite: sprite_korsarz_z_magazynu,
  radius: 	12,
  sight: 		130,
  hearing: 	120,
  dead_sound_src: [ 'assets/audio/creatures/piratedeath1.ogg', ],
  dead_sound_volume: 1.0,
	
	droppings: { ammo: 0.0, health: 0.05, viols: 0.05, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.2, 0.35], viols_add: [5,5] },
	opponents: [ 'Szczur', "Zmutowany_gryzon", 'Mutant', 'Mutant_z_magazynu', 'Mutant_siłacz_z_magazynu' ],
	
	dead_sound_src: [ 'assets/audio/creatures/piratedeath2.ogg', ],
    dead_sound_volume: 1.0,
  });
  
  var sprite_korsarz_silacz_z_magazynu = new Sprite();

  // ustawiamy adres do obrazka
  sprite_korsarz_silacz_z_magazynu.set_image_src('assets/img/creatures/korsarz.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_korsarz_silacz_z_magazynu.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilość klatek )
  
  sprite_korsarz_silacz_z_magazynu.define(0,'walk_up', 12, { ox: 1, oy: 1});
  sprite_korsarz_silacz_z_magazynu.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_korsarz_silacz_z_magazynu.define(2,'walk_down', 12, { ox: -3, oy: -2 });
  sprite_korsarz_silacz_z_magazynu.define(3,'walk_left', 12, { ox: -2, oy: -3 });
  sprite_korsarz_silacz_z_magazynu.define(4,'walk_upright', 12, { ox: -2, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(5,'walk_downright', 12, { ox: -2, oy: -3 });
  sprite_korsarz_silacz_z_magazynu.define(6,'walk_downleft', 12, { ox: -2, oy: -2 });
  sprite_korsarz_silacz_z_magazynu.define(7,'walk_upleft', 12, { ox: -1, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(8,'stand_up', 17, { ox: -1, oy: 0});
  sprite_korsarz_silacz_z_magazynu.define(9,'stand_right', 17, { ox: -3, oy: 0 });
  sprite_korsarz_silacz_z_magazynu.define(10,'stand_down', 17, { ox: -4, oy: -2 });
  sprite_korsarz_silacz_z_magazynu.define(11,'stand_left', 17, { ox: -2, oy: -2 });
  sprite_korsarz_silacz_z_magazynu.define(12,'stand_upright', 17, { ox:0, oy: 0});
  sprite_korsarz_silacz_z_magazynu.define(13,'stand_downright', 17, { ox: -3, oy: 1 });
  sprite_korsarz_silacz_z_magazynu.define(14,'stand_downleft', 17, { ox: -4, oy: -3 });
  sprite_korsarz_silacz_z_magazynu.define(15,'stand_upleft', 17, { ox: -1, oy: -4 });
  sprite_korsarz_silacz_z_magazynu.define(16,'natural_attack_up', 10);
  sprite_korsarz_silacz_z_magazynu.define(17,'natural_attack_right', 10, { ox: -4, oy: 0 });
  sprite_korsarz_silacz_z_magazynu.define(18,'natural_attack_down', 10, { ox: -3, oy: -3 });
  sprite_korsarz_silacz_z_magazynu.define(19,'natural_attack_left', 10, { ox: -1, oy: -3 });
  sprite_korsarz_silacz_z_magazynu.define(20,'natural_attack_upright', 10);
  sprite_korsarz_silacz_z_magazynu.define(21,'natural_attack_downright', 10, { ox: -4, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(22,'natural_attack_downleft', 10, { ox: -3, oy: -3 });
  sprite_korsarz_silacz_z_magazynu.define(23,'natural_attack_upleft', 10, { ox: 0, oy: -2 });
  sprite_korsarz_silacz_z_magazynu.define(24,'dead_up', 15, { ox: 1, oy: 3 });
  sprite_korsarz_silacz_z_magazynu.define(25,'dead_right', 15, { ox: -2, oy: 1 });
  sprite_korsarz_silacz_z_magazynu.define(26,'dead_down', 15, { ox: -1, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(27,'dead_left', 15, { ox: 1, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(28,'dead_upright', 15, { ox: -1, oy: 1 });
  sprite_korsarz_silacz_z_magazynu.define(29,'dead_downright', 15, { ox: -1, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(30,'dead_downleft', 15, { ox: 0, oy: -1 });
  sprite_korsarz_silacz_z_magazynu.define(31,'dead_upleft', 15, { ox: 1, oy: 0 });
  sprite_korsarz_silacz_z_magazynu.define(32,'damage_down', 6, { ox: -1, oy: -3 });
 

  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_korsarz_silacz_z_magazynu.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_korsarz_silacz_z_magazynu.set('stand_down');

  creatures.define("Korsarz_siłacz_z_magazynu", {

	max_life: 460,
    attack: 26,
    min_attack: 5,
    defence: 15,
	natural_range: 20,
    walk_speed: 2.3, // predkosc chodzenia
    run_speed: 3.3, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Kordelas Siłacza z Magazynu",
    natural_armour: "Skórzana kurtka",
	
    sprite: sprite_korsarz_silacz_z_magazynu,
    radius: 	12,
    sight: 		130,
    hearing: 	120,
    dead_sound_src: [ 'assets/audio/creatures/piratedeath2.ogg', ],
    dead_sound_volume: 1.0,
	
	droppings: { ammo: 0.05, health: 0.2, viols: 0.1, ttl: 15 * 24, health_add: [50,50], ammo_add: [0.2, 0.35], viols_add: [8,8] },
	opponents: [ 'Szczur', "Zmutowany_gryzon", 'Mutant', 'Mutant_z_magazynu', 'Mutant_siłacz_z_magazynu' ],
  });
  
  var sprite_mutant_z_magazynu = new Sprite();

  // ustawiamy adres do obrazka
  sprite_mutant_z_magazynu.set_image_src('assets/img/creatures/zarazony.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje sie sprite_mutant)
  // set_size(szerokość, wysokość)
  sprite_mutant_z_magazynu.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek)
  // opcjonalnie na koncu dodajemy tablice z parametrami, mozliwe paramety
  // ox - przesuniecie środka klatki
  // oy - przesuniecie środka klatki
  // fps - ilosc klatek na sekunde (napisuje globalne ustawienie dla sprite)
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek, { ox: 1, oy: -1, fps: 24 } )
  
  // sprite_mutant_z_magazynu.define(0,'walk_up', 11, { ox: 6, oy: -18 });
  sprite_mutant_z_magazynu.define(0,'walk_up', 11, { ox: -4, oy: 15, fps: 12 });
  sprite_mutant_z_magazynu.define(1,'walk_right', 11, { ox: -16, oy: -5 });
  sprite_mutant_z_magazynu.define(2,'walk_down', 11, { ox: 3, oy: -14 });
  sprite_mutant_z_magazynu.define(3,'walk_left', 11, { ox: 15, oy: 4 });
  sprite_mutant_z_magazynu.define(4,'walk_upleft', 11, { ox: 14, oy: 5 });
  sprite_mutant_z_magazynu.define(5,'walk_upright', 11, { ox: -4, oy: 15 });
  sprite_mutant_z_magazynu.define(6,'walk_downright', 11, { ox: -16, oy: -3 });
  sprite_mutant_z_magazynu.define(7,'walk_downleft', 11, { ox: 0, oy: -15 });
  sprite_mutant_z_magazynu.define(8,'natural_attack_up', 10, { ox: -4, oy: 20 });
  sprite_mutant_z_magazynu.define(9,'natural_attack_right', 10, { ox: -16, oy: -4 });
  sprite_mutant_z_magazynu.define(10,'natural_attack_down', 10, { ox: 3, oy: -15 });
  sprite_mutant_z_magazynu.define(11,'natural_attack_left', 10, { ox: 17, oy: 3 });
  sprite_mutant_z_magazynu.define(12,'natural_attack_upright', 10, { ox: -6, oy: 16 });
  sprite_mutant_z_magazynu.define(13,'natural_attack_downright', 10, { ox: -17, oy: -5 });
  sprite_mutant_z_magazynu.define(14,'natural_attack_downleft', 10, { ox: 2, oy: -16 });
  sprite_mutant_z_magazynu.define(15,'natural_attack_upleft', 10, { ox: 15, oy: 5 });
  sprite_mutant_z_magazynu.define(16,'dead_up', 9, { ox: 0, oy: 25 });
  sprite_mutant_z_magazynu.define(17,'dead_right', 9, { ox: -20, oy: 2 });
  sprite_mutant_z_magazynu.define(18,'dead_down', 9, { ox: 1, oy: -21 });
  sprite_mutant_z_magazynu.define(19,'dead_left', 9, { ox: 15, oy: 2 });
  sprite_mutant_z_magazynu.define(20,'dead_upright', 9, { ox: -8, oy: 22 });
  sprite_mutant_z_magazynu.define(21,'dead_downright', 9, { ox: -18, oy: -6 });
  sprite_mutant_z_magazynu.define(22,'dead_downleft', 9, { ox: 2, oy: -17 });
  sprite_mutant_z_magazynu.define(23,'dead_upleft', 9, { ox: 14, oy: 2 });
  sprite_mutant_z_magazynu.define(24,'stand_up', 35, { ox: -5, oy: 13 });
  sprite_mutant_z_magazynu.define(25,'stand_right', 35, { ox: -16, oy: -4 });
  sprite_mutant_z_magazynu.define(26,'stand_down', 35, { ox: 2, oy: -15 });
  sprite_mutant_z_magazynu.define(27,'stand_left', 35, { ox: 15, oy: 2 });
  sprite_mutant_z_magazynu.define(28,'stand_upright', 35, { ox: -5, oy: 15 });
  sprite_mutant_z_magazynu.define(29,'stand_downright', 35, { ox: -16, oy: -2 });
  sprite_mutant_z_magazynu.define(30,'stand_downleft', 35, { ox: 0, oy: -14 });
  sprite_mutant_z_magazynu.define(31,'stand_upleft', 35, { ox: 16, oy: 6 });
  sprite_mutant_z_magazynu.define(32,'damage_down', 6, { ox: -4, oy: 6 });


  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_mutant_z_magazynu.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant_z_magazynu.set('stand_down');

  // definiujemy kreature - najpierw "klucz", którym bedziemy się posługiwać w reszcie kodu
  creatures.define("Mutant_z_magazynu", {
    max_life: 250,
    attack: 21,
    min_attack: 3,
    defence: 7,
    walk_speed: 3.1, // predkosc chodzenia
    run_speed: 3.6, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Łapa Mutanta z Magazynu",
    natural_armour: "Futro",

    // ustawiamy wcześniej zdefiniowana sprite_mutant mape
    sprite: sprite_mutant_z_magazynu,

    // ile pikseli wzgledem środka to przestrzeń kreatury na która nie można wchodzić
    natural_range: 27,
	radius: 	11, 

    // ile pikseli wzroku ma bot
    sight: 		130,

    // ile pikseli słuchu ma bot
    hearing: 	120,
    dead_sound_src: [ 'assets/audio/creatures/mutantsnarl6.ogg', ],
    dead_sound_volume: 1.0,
	droppings: { ammo: 0.00, health: 0.05, viols: 0.05, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.1, 0.25], viols_add: [5,5] },
    // kogo bot bedzie atakował (gracza zawsze)
    opponents: [ 'Korsarz', 'Korsarz_7', 'Korsarz_z_magazynu', 'Korsarz_siłacz_z_magazynu' ],
    // jesli ustawione bot nie bedzie atakowal gracza - aby wylaczyc nie ustawiac w ogole lub wpisac false
    // friendly: true,

  });
  
   var sprite_mutant_silacz_z_magazynu = new Sprite();

  // ustawiamy adres do obrazka
  sprite_mutant_silacz_z_magazynu.set_image_src('assets/img/creatures/zarazony.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje sie sprite_mutant)
  // set_size(szerokość, wysokość)
  sprite_mutant_silacz_z_magazynu.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek)
  // opcjonalnie na koncu dodajemy tablice z parametrami, mozliwe paramety
  // ox - przesuniecie środka klatki
  // oy - przesuniecie środka klatki
  // fps - ilosc klatek na sekunde (napisuje globalne ustawienie dla sprite)
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek, { ox: 1, oy: -1, fps: 24 } )
  
  // sprite_mutant.define(0,'walk_up', 11, { ox: 6, oy: -18 });
  sprite_mutant_silacz_z_magazynu.define(0,'walk_up', 11, { ox: -4, oy: 15, fps: 12 });
  sprite_mutant_silacz_z_magazynu.define(1,'walk_right', 11, { ox: -16, oy: -5 });
  sprite_mutant_silacz_z_magazynu.define(2,'walk_down', 11, { ox: 3, oy: -14 });
  sprite_mutant_silacz_z_magazynu.define(3,'walk_left', 11, { ox: 15, oy: 4 });
  sprite_mutant_silacz_z_magazynu.define(4,'walk_upleft', 11, { ox: 14, oy: 5 });
  sprite_mutant_silacz_z_magazynu.define(5,'walk_upright', 11, { ox: -4, oy: 15 });
  sprite_mutant_silacz_z_magazynu.define(6,'walk_downright', 11, { ox: -16, oy: -3 });
  sprite_mutant_silacz_z_magazynu.define(7,'walk_downleft', 11, { ox: 0, oy: -15 });
  sprite_mutant_silacz_z_magazynu.define(8,'natural_attack_up', 10, { ox: -4, oy: 20 });
  sprite_mutant_silacz_z_magazynu.define(9,'natural_attack_right', 10, { ox: -16, oy: -4 });
  sprite_mutant_silacz_z_magazynu.define(10,'natural_attack_down', 10, { ox: 3, oy: -15 });
  sprite_mutant_silacz_z_magazynu.define(11,'natural_attack_left', 10, { ox: 17, oy: 3 });
  sprite_mutant_silacz_z_magazynu.define(12,'natural_attack_upright', 10, { ox: -6, oy: 16 });
  sprite_mutant_silacz_z_magazynu.define(13,'natural_attack_downright', 10, { ox: -17, oy: -5 });
  sprite_mutant_silacz_z_magazynu.define(14,'natural_attack_downleft', 10, { ox: 2, oy: -16 });
  sprite_mutant_silacz_z_magazynu.define(15,'natural_attack_upleft', 10, { ox: 15, oy: 5 });
  sprite_mutant_silacz_z_magazynu.define(16,'dead_up', 9, { ox: 0, oy: 25 });
  sprite_mutant_silacz_z_magazynu.define(17,'dead_right', 9, { ox: -20, oy: 2 });
  sprite_mutant_silacz_z_magazynu.define(18,'dead_down', 9, { ox: 1, oy: -21 });
  sprite_mutant_silacz_z_magazynu.define(19,'dead_left', 9, { ox: 15, oy: 2 });
  sprite_mutant_silacz_z_magazynu.define(20,'dead_upright', 9, { ox: -8, oy: 22 });
  sprite_mutant_silacz_z_magazynu.define(21,'dead_downright', 9, { ox: -18, oy: -6 });
  sprite_mutant_silacz_z_magazynu.define(22,'dead_downleft', 9, { ox: 2, oy: -17 });
  sprite_mutant_silacz_z_magazynu.define(23,'dead_upleft', 9, { ox: 14, oy: 2 });
  sprite_mutant_silacz_z_magazynu.define(24,'stand_up', 35, { ox: -5, oy: 13 });
  sprite_mutant_silacz_z_magazynu.define(25,'stand_right', 35, { ox: -16, oy: -4 });
  sprite_mutant_silacz_z_magazynu.define(26,'stand_down', 35, { ox: 2, oy: -15 });
  sprite_mutant_silacz_z_magazynu.define(27,'stand_left', 35, { ox: 15, oy: 2 });
  sprite_mutant_silacz_z_magazynu.define(28,'stand_upright', 35, { ox: -5, oy: 15 });
  sprite_mutant_silacz_z_magazynu.define(29,'stand_downright', 35, { ox: -16, oy: -2 });
  sprite_mutant_silacz_z_magazynu.define(30,'stand_downleft', 35, { ox: 0, oy: -14 });
  sprite_mutant_silacz_z_magazynu.define(31,'stand_upleft', 35, { ox: 16, oy: 6 });
  sprite_mutant_silacz_z_magazynu.define(32,'damage_down', 6, { ox: -4, oy: 6 });


  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_mutant_silacz_z_magazynu.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant_silacz_z_magazynu.set('stand_down');

  // definiujemy kreature - najpierw "klucz", którym bedziemy się posługiwać w reszcie kodu
  creatures.define("Mutant_siłacz_z_magazynu", {
    max_life: 420,
    attack: 26,
    min_attack: 4,
    defence: 10,
    walk_speed: 2.4, // predkosc chodzenia
    run_speed: 3.2, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Łapa Siłacza z Magazynu",
    natural_armour: "Futro",

    // ustawiamy wcześniej zdefiniowana sprite_mutant mape
    sprite: sprite_mutant_silacz_z_magazynu,

    // ile pikseli wzgledem środka to przestrzeń kreatury na która nie można wchodzić
    natural_range: 27,
	radius: 	11, 

    // ile pikseli wzroku ma bot
    sight: 		130,

    // ile pikseli słuchu ma bot
    hearing: 	120,
    dead_sound_src: [ 'assets/audio/creatures/mutantsnarl6.ogg', ],
    dead_sound_volume: 1.0,

    droppings: { ammo: 0.05, health: 0.1, viols: 0.1, ttl: 15 * 24, health_add: [40,40], ammo_add: [0.1, 0.25], viols_add: [8,8] },
 
    // kogo bot bedzie atakował (gracza zawsze)
    opponents: [ 'Korsarz', 'Korsarz_7', 'Korsarz_z_magazynu', 'Korsarz_siłacz_z_magazynu' ],
    // jesli ustawione bot nie bedzie atakowal gracza - aby wylaczyc nie ustawiac w ogole lub wpisac false
    // friendly: true,

  });
 
 var sprite_korsarz = new Sprite();

  // ustawiamy adres do obrazka
  sprite_korsarz.set_image_src('assets/img/creatures/korsarz.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_korsarz.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilość klatek )
  
  sprite_korsarz.define(0,'walk_up', 12, { ox: 1, oy: 1});
  sprite_korsarz.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_korsarz.define(2,'walk_down', 12, { ox: -3, oy: -2 });
  sprite_korsarz.define(3,'walk_left', 12, { ox: -2, oy: -3 });
  sprite_korsarz.define(4,'walk_upright', 12, { ox: -2, oy: -1 });
  sprite_korsarz.define(5,'walk_downright', 12, { ox: -2, oy: -3 });
  sprite_korsarz.define(6,'walk_downleft', 12, { ox: -2, oy: -2 });
  sprite_korsarz.define(7,'walk_upleft', 12, { ox: -1, oy: -1 });
  sprite_korsarz.define(8,'stand_up', 17, { ox: -1, oy: 0});
  sprite_korsarz.define(9,'stand_right', 17, { ox: -3, oy: 0 });
  sprite_korsarz.define(10,'stand_down', 17, { ox: -4, oy: -2 });
  sprite_korsarz.define(11,'stand_left', 17, { ox: -2, oy: -2 });
  sprite_korsarz.define(12,'stand_upright', 17, { ox:0, oy: 0});
  sprite_korsarz.define(13,'stand_downright', 17, { ox: -3, oy: 1 });
  sprite_korsarz.define(14,'stand_downleft', 17, { ox: -4, oy: -3 });
  sprite_korsarz.define(15,'stand_upleft', 17, { ox: -1, oy: -4 });
  sprite_korsarz.define(16,'natural_attack_up', 10);
  sprite_korsarz.define(17,'natural_attack_right', 10, { ox: -4, oy: 0 });
  sprite_korsarz.define(18,'natural_attack_down', 10, { ox: -3, oy: -3 });
  sprite_korsarz.define(19,'natural_attack_left', 10, { ox: -1, oy: -3 });
  sprite_korsarz.define(20,'natural_attack_upright', 10);
  sprite_korsarz.define(21,'natural_attack_downright', 10, { ox: -4, oy: -1 });
  sprite_korsarz.define(22,'natural_attack_downleft', 10, { ox: -3, oy: -3 });
  sprite_korsarz.define(23,'natural_attack_upleft', 10, { ox: 0, oy: -2 });
  sprite_korsarz.define(24,'dead_up', 15, { ox: 1, oy: 3 });
  sprite_korsarz.define(25,'dead_right', 15, { ox: -2, oy: 1 });
  sprite_korsarz.define(26,'dead_down', 15, { ox: -1, oy: -1 });
  sprite_korsarz.define(27,'dead_left', 15, { ox: 1, oy: -1 });
  sprite_korsarz.define(28,'dead_upright', 15, { ox: -1, oy: 1 });
  sprite_korsarz.define(29,'dead_downright', 15, { ox: -1, oy: -1 });
  sprite_korsarz.define(30,'dead_downleft', 15, { ox: 0, oy: -1 });
  sprite_korsarz.define(31,'dead_upleft', 15, { ox: 1, oy: 0 });
  sprite_korsarz.define(32,'damage_down', 6, { ox: -1, oy: -3 });
 

  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_korsarz.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_korsarz.set('stand_down');

  creatures.define("Korsarz", {

	max_life: 250,
    attack: 18,
    min_attack: 5,
    defence: 10,
	natural_range: 20,
    walk_speed: 3, // predkosc chodzenia
    run_speed: 4, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Kordelas",
    natural_armour: "Skórzana kurtka",
	
    sprite: sprite_korsarz,
    radius: 	12,
    sight: 		125,
	hearing: 	100,
	
	droppings: { ammo: 0.0, health: 0.05, viols: 0.05, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.2, 0.35], viols_add: [10,10] },
	opponents: [ 'Szczur', "Zmutowany_gryzon", 'Mutant' ],
	
	dead_sound_src: [ 'assets/audio/creatures/piratedeath1.ogg', ],
	dead_sound_volume: 1.0,
  });
  
  var sprite_korsarz_biegacz = new Sprite();

  // ustawiamy adres do obrazka
  sprite_korsarz_biegacz.set_image_src('assets/img/creatures/korsarz.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_korsarz_biegacz.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilość klatek )
  
  sprite_korsarz_biegacz.define(0,'walk_up', 12, { ox: 1, oy: 1});
  sprite_korsarz_biegacz.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_korsarz_biegacz.define(2,'walk_down', 12, { ox: -3, oy: -2 });
  sprite_korsarz_biegacz.define(3,'walk_left', 12, { ox: -2, oy: -3 });
  sprite_korsarz_biegacz.define(4,'walk_upright', 12, { ox: -2, oy: -1 });
  sprite_korsarz_biegacz.define(5,'walk_downright', 12, { ox: -2, oy: -3 });
  sprite_korsarz_biegacz.define(6,'walk_downleft', 12, { ox: -2, oy: -2 });
  sprite_korsarz_biegacz.define(7,'walk_upleft', 12, { ox: -1, oy: -1 });
  sprite_korsarz_biegacz.define(8,'stand_up', 17, { ox: -1, oy: 0});
  sprite_korsarz_biegacz.define(9,'stand_right', 17, { ox: -3, oy: 0 });
  sprite_korsarz_biegacz.define(10,'stand_down', 17, { ox: -4, oy: -2 });
  sprite_korsarz_biegacz.define(11,'stand_left', 17, { ox: -2, oy: -2 });
  sprite_korsarz_biegacz.define(12,'stand_upright', 17, { ox:0, oy: 0});
  sprite_korsarz_biegacz.define(13,'stand_downright', 17, { ox: -3, oy: 1 });
  sprite_korsarz_biegacz.define(14,'stand_downleft', 17, { ox: -4, oy: -3 });
  sprite_korsarz_biegacz.define(15,'stand_upleft', 17, { ox: -1, oy: -4 });
  sprite_korsarz_biegacz.define(16,'natural_attack_up', 10);
  sprite_korsarz_biegacz.define(17,'natural_attack_right', 10, { ox: -4, oy: 0 });
  sprite_korsarz_biegacz.define(18,'natural_attack_down', 10, { ox: -3, oy: -3 });
  sprite_korsarz_biegacz.define(19,'natural_attack_left', 10, { ox: -1, oy: -3 });
  sprite_korsarz_biegacz.define(20,'natural_attack_upright', 10);
  sprite_korsarz_biegacz.define(21,'natural_attack_downright', 10, { ox: -4, oy: -1 });
  sprite_korsarz_biegacz.define(22,'natural_attack_downleft', 10, { ox: -3, oy: -3 });
  sprite_korsarz_biegacz.define(23,'natural_attack_upleft', 10, { ox: 0, oy: -2 });
  sprite_korsarz_biegacz.define(24,'dead_up', 15, { ox: 1, oy: 3 });
  sprite_korsarz_biegacz.define(25,'dead_right', 15, { ox: -2, oy: 1 });
  sprite_korsarz_biegacz.define(26,'dead_down', 15, { ox: -1, oy: -1 });
  sprite_korsarz_biegacz.define(27,'dead_left', 15, { ox: 1, oy: -1 });
  sprite_korsarz_biegacz.define(28,'dead_upright', 15, { ox: -1, oy: 1 });
  sprite_korsarz_biegacz.define(29,'dead_downright', 15, { ox: -1, oy: -1 });
  sprite_korsarz_biegacz.define(30,'dead_downleft', 15, { ox: 0, oy: -1 });
  sprite_korsarz_biegacz.define(31,'dead_upleft', 15, { ox: 1, oy: 0 });
  sprite_korsarz_biegacz.define(32,'damage_down', 6, { ox: -1, oy: -3 });
 

  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_korsarz_biegacz.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_korsarz_biegacz.set('stand_down');

  creatures.define("Korsarz_biegacz", {

    max_life: 160,
    attack: 11,
    min_attack: 3,
    defence: 5, 
    natural_range: 20,
    walk_speed: 5.2, // predkosc chodzenia
    run_speed: 6.2, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Kordelas biegacza",
    natural_armour: "Skórzana kurtka",
	
    sprite: sprite_korsarz_biegacz,
    radius: 	12,
    sight: 		125,
    hearing: 	100,
	
	droppings: { ammo: 0.0, health: 0.07, viols: 0.07, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.2, 0.35], viols_add: [7,7] },
	opponents: [ 'Szczur', "Zmutowany_gryzon", 'Mutant' ],
	
	dead_sound_src: [ 'assets/audio/creatures/piratedeath1.ogg', ],
	dead_sound_volume: 1.0,
	
  });
  
  var sprite_korsarz_7 = new Sprite();

  // ustawiamy adres do obrazka
  sprite_korsarz_7.set_image_src('assets/img/creatures/korsarz_7.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_korsarz_7.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_korsarz_7.define(0,'walk_up', 12, { ox: 1, oy: 1});
  sprite_korsarz_7.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_korsarz_7.define(2,'walk_down', 12, { ox: -3, oy: -2 });
  sprite_korsarz_7.define(3,'walk_left', 12, { ox: -2, oy: -3 });
  sprite_korsarz_7.define(4,'walk_upright', 12, { ox: -2, oy: -1 });
  sprite_korsarz_7.define(5,'walk_downright', 12, { ox: -2, oy: -3 });
  sprite_korsarz_7.define(6,'walk_downleft', 12, { ox: -2, oy: -2 });
  sprite_korsarz_7.define(7,'walk_upleft', 12, { ox: -1, oy: -1 });
  sprite_korsarz_7.define(8,'stand_up', 17, { ox: -1, oy: 0});
  sprite_korsarz_7.define(9,'stand_right', 17, { ox: -3, oy: 0 });
  sprite_korsarz_7.define(10,'stand_down', 17, { ox: -4, oy: -2 });
  sprite_korsarz_7.define(11,'stand_left', 17, { ox: -2, oy: -2 });
  sprite_korsarz_7.define(12,'stand_upright', 17, { ox:0, oy: 0});
  sprite_korsarz_7.define(13,'stand_downright', 17, { ox: -3, oy: 1 });
  sprite_korsarz_7.define(14,'stand_downleft', 17, { ox: -4, oy: -3 });
  sprite_korsarz_7.define(15,'stand_upleft', 17, { ox: -1, oy: -4 });
  sprite_korsarz_7.define(16,'natural_attack_up', 9);
  sprite_korsarz_7.define(17,'natural_attack_right', 9, { ox: -4, oy: 0 });
  sprite_korsarz_7.define(18,'natural_attack_down', 9, { ox: -3, oy: -3 });
  sprite_korsarz_7.define(19,'natural_attack_left', 9, { ox: -2, oy: -3 });
  sprite_korsarz_7.define(20,'natural_attack_upright', 9);
  sprite_korsarz_7.define(21,'natural_attack_downright', 9, { ox: -4, oy: -1 });
  sprite_korsarz_7.define(22,'natural_attack_downleft', 9, { ox: -4, oy: -5 });
  sprite_korsarz_7.define(23,'natural_attack_upleft', 9, { ox: 0, oy: -2 });
  sprite_korsarz_7.define(24,'dead_up', 15, { ox: 1, oy: 3 });
  sprite_korsarz_7.define(25,'dead_right', 15, { ox: -2, oy: 1 });
  sprite_korsarz_7.define(26,'dead_down', 15, { ox: -1, oy: -1 });
  sprite_korsarz_7.define(27,'dead_left', 15, { ox: 1, oy: -1 });
  sprite_korsarz_7.define(28,'dead_upright', 15, { ox: -1, oy: 1 });
  sprite_korsarz_7.define(29,'dead_downright', 15, { ox: -1, oy: -1 });
  sprite_korsarz_7.define(30,'dead_downleft', 15, { ox: 0, oy: -1 });
  sprite_korsarz_7.define(31,'dead_upleft', 15, { ox: 1, oy: 0 });
  sprite_korsarz_7.define(32,'damage_down', 6, { ox: -1, oy: -3 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_korsarz_7.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_korsarz_7.set('stand_down');

  creatures.define("Korsarz_7", {
	max_life: 120,
    attack: 25,
    min_attack: 7,
    defence: 3,
    walk_speed: 2.5, // predkosc chodzenia
    run_speed: 3.5, // predkosc biegania (postacie gracza tylko biegaja)
    natural_weapon: "Nowak-3",
    natural_armour: "Skórzana kurtka",
	
    sprite: sprite_korsarz_7,
    radius: 	12,
    sight: 		140,
    hearing: 	120, 
    dead_sound_src: [ 'assets/audio/creatures/piratedeath4.ogg', ],
    dead_sound_volume: 1.0,
    droppings: { ammo: 0.12, health: 0.12, viols: 0.2, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.75], viols_add: [5,5] },
    opponents: [ 'Szczur', 'Zmutowany_gryzon', 'Mutant' ],
   });
   
   var sprite_korsarz_8 = new Sprite();

  // ustawiamy adres do obrazka
  sprite_korsarz_8.set_image_src('assets/img/creatures/korsarz_7.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_korsarz_8.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_korsarz_8.define(0,'walk_up', 12, { ox: 1, oy: 1});
  sprite_korsarz_8.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_korsarz_8.define(2,'walk_down', 12, { ox: -3, oy: -2 });
  sprite_korsarz_8.define(3,'walk_left', 12, { ox: -2, oy: -3 });
  sprite_korsarz_8.define(4,'walk_upright', 12, { ox: -2, oy: -1 });
  sprite_korsarz_8.define(5,'walk_downright', 12, { ox: -2, oy: -3 });
  sprite_korsarz_8.define(6,'walk_downleft', 12, { ox: -2, oy: -2 });
  sprite_korsarz_8.define(7,'walk_upleft', 12, { ox: -1, oy: -1 });
  sprite_korsarz_8.define(8,'stand_up', 17, { ox: -1, oy: 0});
  sprite_korsarz_8.define(9,'stand_right', 17, { ox: -3, oy: 0 });
  sprite_korsarz_8.define(10,'stand_down', 17, { ox: -4, oy: -2 });
  sprite_korsarz_8.define(11,'stand_left', 17, { ox: -2, oy: -2 });
  sprite_korsarz_8.define(12,'stand_upright', 17, { ox:0, oy: 0});
  sprite_korsarz_8.define(13,'stand_downright', 17, { ox: -3, oy: 1 });
  sprite_korsarz_8.define(14,'stand_downleft', 17, { ox: -4, oy: -3 });
  sprite_korsarz_8.define(15,'stand_upleft', 17, { ox: -1, oy: -4 });
  sprite_korsarz_8.define(16,'natural_attack_up', 9);
  sprite_korsarz_8.define(17,'natural_attack_right', 9, { ox: -4, oy: 0 });
  sprite_korsarz_8.define(18,'natural_attack_down', 9, { ox: -3, oy: -3 });
  sprite_korsarz_8.define(19,'natural_attack_left', 9, { ox: -2, oy: -3 });
  sprite_korsarz_8.define(20,'natural_attack_upright', 9);
  sprite_korsarz_8.define(21,'natural_attack_downright', 9, { ox: -4, oy: -1 });
  sprite_korsarz_8.define(22,'natural_attack_downleft', 9, { ox: -4, oy: -5 });
  sprite_korsarz_8.define(23,'natural_attack_upleft', 9, { ox: 0, oy: -2 });
  sprite_korsarz_8.define(24,'dead_up', 15, { ox: 1, oy: 3 });
  sprite_korsarz_8.define(25,'dead_right', 15, { ox: -2, oy: 1 });
  sprite_korsarz_8.define(26,'dead_down', 15, { ox: -1, oy: -1 });
  sprite_korsarz_8.define(27,'dead_left', 15, { ox: 1, oy: -1 });
  sprite_korsarz_8.define(28,'dead_upright', 15, { ox: -1, oy: 1 });
  sprite_korsarz_8.define(29,'dead_downright', 15, { ox: -1, oy: -1 });
  sprite_korsarz_8.define(30,'dead_downleft', 15, { ox: 0, oy: -1 });
  sprite_korsarz_8.define(31,'dead_upleft', 15, { ox: 1, oy: 0 });
  sprite_korsarz_8.define(32,'damage_down', 6, { ox: -1, oy: -3 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_korsarz_8.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_korsarz_8.set('stand_down');

  creatures.define("Korsarz_8", {
	max_life: 60,
    attack: 50,
    min_attack: 12,
    defence: 0,
    walk_speed: 1.5, // predkosc chodzenia
    run_speed: 2.5, // predkosc biegania (postacie gracza tylko biegaja)
    natural_weapon: "Nowak-4",
    natural_armour: "Skórzana kurtka",
	
    sprite: sprite_korsarz_8,
    radius: 	12,
    sight: 		340,
    hearing: 	120, 
    dead_sound_src: [ 'assets/audio/creatures/piratedeath3.ogg', ],
    dead_sound_volume: 1.0,
    droppings: { ammo: 0.12, health: 0.12, viols: 0.2, ttl: 15 * 24, health_add: [35,35], ammo_add: [0.5, 0.75], viols_add: [5,5] },
    opponents: [ 'Szczur', 'Zmutowany_gryzon', 'Mutant' ],
   });
  
   var sprite_krol_korsarzy = new Sprite();

  // ustawiamy adres do obrazka
  sprite_krol_korsarzy.set_image_src('assets/img/creatures/krol_korsarzy.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_krol_korsarzy.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_krol_korsarzy.define(0,'walk_up', 12, { ox: 0, oy: 2 });
  sprite_krol_korsarzy.define(1,'walk_right', 12, { ox: -2, oy: 0 });
  sprite_krol_korsarzy.define(2,'walk_down', 12, { ox: 0, oy: -2 });
  sprite_krol_korsarzy.define(3,'walk_left', 12, { ox: 2, oy: 0 });
  sprite_krol_korsarzy.define(4,'walk_upright', 12, { ox: 1, oy: 3 });
  sprite_krol_korsarzy.define(5,'walk_downright', 12, { ox: -4, oy: 0 });
  sprite_krol_korsarzy.define(6,'walk_downleft', 12, { ox: -1, oy: -3 });
  sprite_krol_korsarzy.define(7,'walk_upleft', 12, { ox: 2, oy: 1 });
  sprite_krol_korsarzy.define(8,'natural_attack_up', 22, { ox: 1, oy: -1 });
  sprite_krol_korsarzy.define(9,'natural_attack_right', 22, { ox: 2, oy: 1 });
  sprite_krol_korsarzy.define(10,'natural_attack_down', 22, { ox: 0, oy: -5 });
  sprite_krol_korsarzy.define(11,'natural_attack_left', 22, { ox: 3, oy: -2 });
  sprite_krol_korsarzy.define(12,'natural_attack_upright', 22, { ox: 3, oy: 2 });
  sprite_krol_korsarzy.define(13,'natural_attack_downright', 22, { ox: -1, oy: 1 });
  sprite_krol_korsarzy.define(14,'natural_attack_downleft', 22, { ox: -2, oy: -2 });
  sprite_krol_korsarzy.define(15,'natural_attack_upleft', 22, { ox: 0, oy: -2 });
  sprite_krol_korsarzy.define(16,'dead_up', 43, { ox: 0, oy: 8 });
  sprite_krol_korsarzy.define(17,'dead_right', 43, { ox: -7, oy: 2 });
  sprite_krol_korsarzy.define(18,'dead_down', 43, { ox: -2, oy: -10 });
  sprite_krol_korsarzy.define(19,'dead_left', 43, { ox: 8, oy: -2 });
  sprite_krol_korsarzy.define(20,'dead_upright', 43, { ox: -3, oy: 7 });
  sprite_krol_korsarzy.define(21,'dead_downright', 43, { ox: -7, oy: -4 });
  sprite_krol_korsarzy.define(22,'dead_downleft', 43, { ox: 2, oy: -9 });
  sprite_krol_korsarzy.define(23,'dead_upleft', 43, { ox: 7, oy: 2 });
  sprite_krol_korsarzy.define(24,'stand_up', 40, { ox: 1, oy: 1 });
  sprite_krol_korsarzy.define(25,'stand_right', 40, { ox: -1, oy: 1 });
  sprite_krol_korsarzy.define(26,'stand_down', 40, { ox: -1, oy: -3 });
  sprite_krol_korsarzy.define(27,'stand_left', 40, { ox: 2, oy: 0 });
  sprite_krol_korsarzy.define(28,'stand_upright', 40, { ox: 1, oy: 1 });
  sprite_krol_korsarzy.define(29,'stand_downright', 40, { ox: -2, oy: 2 });
  sprite_krol_korsarzy.define(30,'stand_downleft', 40, { ox: -3, oy: -3 });
  sprite_krol_korsarzy.define(31,'stand_upleft', 40, { ox: 3, oy: -3 });
  sprite_krol_korsarzy.define(32,'damage_down', 6);

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_krol_korsarzy.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_krol_korsarzy.set('stand_down');

  creatures.define("Król_Korsarzy", {
    max_life: 1950,
    attack: 80,
    min_attack: 15,
    defence: 20,
    walk_speed: 2, // predkosc chodzenia
    run_speed: 3, // predkosc biegania (postacie gracza tylko biegaja)
    natural_weapon: "Bliźniacze kordelasy",
    natural_armour: "Skórzana kurtka",
    natural_range: 45,

    sprite: sprite_krol_korsarzy,
    radius: 	16,
    sight: 		240,
    hearing: 	100,
    dead_sound_src: [ 'assets/audio/creatures/piratekingdeath.ogg',],
    dead_sound_volume: 1.0,
   });

   // Warszawa 
   
   var sprite_szczur_z_Warszawy = new Sprite();

  // ustawiamy adres do obrazka
  sprite_szczur_z_Warszawy.set_image_src('assets/img/creatures/szczur.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_szczur_z_Warszawy.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilość klatek)
  
  sprite_szczur_z_Warszawy.define(0,'walk_up', 10, { ox: -1, oy: 6 });
  sprite_szczur_z_Warszawy.define(1,'walk_right', 10, { ox: 0, oy: 6 });
  sprite_szczur_z_Warszawy.define(2,'walk_down', 10, { ox: 0, oy: 6 });
  sprite_szczur_z_Warszawy.define(3,'walk_left', 10, { ox: 0, oy: 6 });
  sprite_szczur_z_Warszawy.define(4,'walk_upright', 10, { ox: 1, oy: 7 });
  sprite_szczur_z_Warszawy.define(5,'walk_downright', 10, { ox: -1, oy: 9 });
  sprite_szczur_z_Warszawy.define(6,'walk_downleft', 10, { ox: -4, oy: 5 });
  sprite_szczur_z_Warszawy.define(7,'walk_upleft', 10, { ox: 0, oy: 3 });
  sprite_szczur_z_Warszawy.define(8,'natural_attack_up', 9, { ox: -1, oy: 7 });
  sprite_szczur_z_Warszawy.define(9,'natural_attack_right', 9, { ox: -2, oy: 6 });
  sprite_szczur_z_Warszawy.define(10,'natural_attack_down', 9, { ox: 0, oy: 6 });
  sprite_szczur_z_Warszawy.define(11,'natural_attack_left', 9, { ox: 0, oy: 6 });
  sprite_szczur_z_Warszawy.define(12,'natural_attack_upright', 9, { ox: 2, oy: 8 });
  sprite_szczur_z_Warszawy.define(13,'natural_attack_downright', 9, { ox: -3, oy: 8 });
  sprite_szczur_z_Warszawy.define(14,'natural_attack_downleft', 9, { ox: -2, oy: 4 });
  sprite_szczur_z_Warszawy.define(15,'natural_attack_upleft', 9, { ox: 1, oy: 3 });
  sprite_szczur_z_Warszawy.define(16,'dead_up', 8, { ox: -1, oy: 5 });
  sprite_szczur_z_Warszawy.define(17,'dead_right', 8, { ox: -2, oy:6 });
  sprite_szczur_z_Warszawy.define(18,'dead_down', 8, { ox: 0, oy: 4 });
  sprite_szczur_z_Warszawy.define(19,'dead_left', 8, { ox: -2, oy: 7 });
  sprite_szczur_z_Warszawy.define(20,'dead_upright', 8, { ox: 2, oy: 8 });
  sprite_szczur_z_Warszawy.define(21,'dead_downright', 8, { ox: -5, oy: 7 });
  sprite_szczur_z_Warszawy.define(22,'dead_downleft', 8, { ox: -4, oy: 6 });
  sprite_szczur_z_Warszawy.define(23,'dead_upleft', 8, { ox: 0, oy: 2 });
  sprite_szczur_z_Warszawy.define(24,'stand_upright', 28, { ox: 2, oy: 8 });
  sprite_szczur_z_Warszawy.define(25,'stand_downright', 28, { ox: -2, oy: 10 });
  sprite_szczur_z_Warszawy.define(26,'stand_downleft', 28, { ox: -4, oy: 5 });
  sprite_szczur_z_Warszawy.define(27,'stand_upleft', 28, { ox: 1, oy: 4 });
  sprite_szczur_z_Warszawy.define(28,'stand_up', 28, { ox: 0, oy: 6 });
  sprite_szczur_z_Warszawy.define(29,'stand_right', 28, { ox: -2, oy: 6 });
  sprite_szczur_z_Warszawy.define(30,'stand_down', 28, { ox: 1, oy: 6 });
  sprite_szczur_z_Warszawy.define(31,'stand_left', 28, { ox: 0, oy: 7 });
  sprite_szczur_z_Warszawy.define(32,'damage_down', 6, { ox: -1, oy: 0 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_szczur_z_Warszawy.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_szczur_z_Warszawy.set('stand_down');

  creatures.define("Szczur_z_Warszawy", {
    max_life: 180,
    attack: 10,
    min_attack: 3,
    defence: 2,
    walk_speed: 3, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)
	
	natural_weapon: "Pazury gryzoni",
    natural_armour: "Futro",

    sprite: sprite_szczur_z_Warszawy,
    radius: 	6,
    natural_range: 7,
    sight: 		280,
    hearing: 	20,
    dead_sound_src: [ 'assets/audio/creatures/szczur.ogg', 'assets/audio/creatures/ratsdeath.ogg' ],
    dead_sound_volume: 1.0,
	
	droppings: { ammo: 0.00, health: 0.1, viols: 0.05, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.0, 0.0], viols_add: [3,3] },
  // friendly: true,
	opponents: [ 'Korsarz', 'Korsarz_7', 'Żołnierz_Kameleona' ],
  });
  
  var sprite_szczur_z_warszawy_kolos = new Sprite();

  // ustawiamy adres do obrazka
  sprite_szczur_z_warszawy_kolos.set_image_src('assets/img/creatures/szczur.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur_kolos)
  // set_size(szerokość, wysokość)
  sprite_szczur_z_warszawy_kolos.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejności jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilość klatek)
  
  sprite_szczur_z_warszawy_kolos.define(0,'walk_up', 10, { ox: -1, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(1,'walk_right', 10, { ox: 0, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(2,'walk_down', 10, { ox: 0, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(3,'walk_left', 10, { ox: 0, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(4,'walk_upright', 10, { ox: 1, oy: 7 });
  sprite_szczur_z_warszawy_kolos.define(5,'walk_downright', 10, { ox: -1, oy: 9 });
  sprite_szczur_z_warszawy_kolos.define(6,'walk_downleft', 10, { ox: -4, oy: 5 });
  sprite_szczur_z_warszawy_kolos.define(7,'walk_upleft', 10, { ox: 0, oy: 3 });
  sprite_szczur_z_warszawy_kolos.define(8,'natural_attack_up', 9, { ox: -1, oy: 7 });
  sprite_szczur_z_warszawy_kolos.define(9,'natural_attack_right', 9, { ox: -2, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(10,'natural_attack_down', 9, { ox: 0, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(11,'natural_attack_left', 9, { ox: 0, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(12,'natural_attack_upright', 9, { ox: 2, oy: 8 });
  sprite_szczur_z_warszawy_kolos.define(13,'natural_attack_downright', 9, { ox: -3, oy: 8 });
  sprite_szczur_z_warszawy_kolos.define(14,'natural_attack_downleft', 9, { ox: -2, oy: 4 });
  sprite_szczur_z_warszawy_kolos.define(15,'natural_attack_upleft', 9, { ox: 1, oy: 3 });
  sprite_szczur_z_warszawy_kolos.define(16,'dead_up', 8, { ox: -1, oy: 5 });
  sprite_szczur_z_warszawy_kolos.define(17,'dead_right', 8, { ox: -2, oy:6 });
  sprite_szczur_z_warszawy_kolos.define(18,'dead_down', 8, { ox: 0, oy: 4 });
  sprite_szczur_z_warszawy_kolos.define(19,'dead_left', 8, { ox: -2, oy: 7 });
  sprite_szczur_z_warszawy_kolos.define(20,'dead_upright', 8, { ox: 2, oy: 8 });
  sprite_szczur_z_warszawy_kolos.define(21,'dead_downright', 8, { ox: -5, oy: 7 });
  sprite_szczur_z_warszawy_kolos.define(22,'dead_downleft', 8, { ox: -4, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(23,'dead_upleft', 8, { ox: 0, oy: 2 });
  sprite_szczur_z_warszawy_kolos.define(24,'stand_upright', 28, { ox: 2, oy: 8 });
  sprite_szczur_z_warszawy_kolos.define(25,'stand_downright', 28, { ox: -2, oy: 10 });
  sprite_szczur_z_warszawy_kolos.define(26,'stand_downleft', 28, { ox: -4, oy: 5 });
  sprite_szczur_z_warszawy_kolos.define(27,'stand_upleft', 28, { ox: 1, oy: 4 });
  sprite_szczur_z_warszawy_kolos.define(28,'stand_up', 28, { ox: 0, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(29,'stand_right', 28, { ox: -2, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(30,'stand_down', 28, { ox: 1, oy: 6 });
  sprite_szczur_z_warszawy_kolos.define(31,'stand_left', 28, { ox: 0, oy: 7 });
  sprite_szczur_z_warszawy_kolos.define(32,'damage_down', 6, { ox: -1, oy: 0 });
 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_szczur_z_warszawy_kolos.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_szczur_z_warszawy_kolos.set('stand_down');

  creatures.define("Szczur_z_Warszawy_Kolos", {
    max_life: 240,
    attack: 13,
    min_attack: 3,
    defence: 5,
    walk_speed: 1, // predkosc chodzenia
    run_speed: 2.5, // predkosc biegania (postacie gracza tylko biegaja)
	
	natural_weapon: "Pazury gryzoni",
    natural_armour: "Futro",

    sprite: sprite_szczur_z_warszawy_kolos,
    radius: 	6,
    natural_range: 7,
    sight: 		580,
    hearing: 	20,
    dead_sound_src: [ 'assets/audio/creatures/szczur.ogg', ],
    dead_sound_volume: 1.0,
	
	droppings: { ammo: 0.00, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [35,35], ammo_add: [0.0, 0.0], viols_add: [5,5] },
  // friendly: true,
	opponents: [ 'Korsarz', 'Korsarz_7' ],
  });
   
   var sprite_ghul = new Sprite();
  // ustawiamy adres do obrazka
  sprite_ghul.set_image_src('assets/img/creatures/ghul.png');

  // ustawiamy wymiary klatki (tj. komórki w ktoreulj znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_ghul.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  sprite_ghul.define(0,'walk_up', 11, { ox: -8, oy: 10});
  sprite_ghul.define(1,'walk_right', 11, { ox: -10, oy: -8});
  sprite_ghul.define(2,'walk_down', 11, { ox: -10, oy: -12});
  sprite_ghul.define(3,'walk_left', 11, { ox: -8, oy: -10});
  sprite_ghul.define(4,'walk_upleft', 11, { ox: -8, oy: -5});
  sprite_ghul.define(5,'walk_upright', 11, { ox: -10, oy: 0});
  sprite_ghul.define(6,'walk_downright', 11, { ox: -10, oy: -4});
  sprite_ghul.define(7,'walk_downleft', 11, { ox: -8, oy: -12});
  sprite_ghul.define(8,'natural_attack_up', 10, { ox: -8, oy: 4});
  sprite_ghul.define(9,'natural_attack_right', 10, { ox: -10, oy: -2});
  sprite_ghul.define(10,'natural_attack_down', 10, { ox: -10, oy: -10});
  sprite_ghul.define(11,'natural_attack_left', 10, { ox: -10, oy: -8});
  sprite_ghul.define(12,'natural_attack_upright', 10, { ox: -10, oy: 0});
  sprite_ghul.define(13,'natural_attack_downright', 10, { ox: -10, oy: -8});
  sprite_ghul.define(14,'natural_attack_downleft', 10, { ox: -10, oy: -12});
  sprite_ghul.define(15,'natural_attack_upleft', 10, { ox: -10, oy: -10});
  sprite_ghul.define(16,'dead_up', 9, { ox: -10, oy: 8});
  sprite_ghul.define(17,'dead_right', 9, { ox: -10, oy: -5});
  sprite_ghul.define(18,'dead_down', 9, { ox: -10, oy: -5});
  sprite_ghul.define(19,'dead_left', 9, { ox: -5, oy: -10});
  sprite_ghul.define(20,'dead_upright', 9, { ox: -5, oy: -10});
  sprite_ghul.define(21,'dead_downright', 9, { ox: -10, oy: -5});
  sprite_ghul.define(22,'dead_downleft', 9, { ox: -5, oy: -10});
  sprite_ghul.define(23,'dead_upleft', 9, { ox: -5, oy: -15});
  sprite_ghul.define(24,'stand_up', 35, { ox: -9, oy: -16 });
  sprite_ghul.define(25,'stand_right', 35, { ox: -12, oy: -18 });
  sprite_ghul.define(26,'stand_down', 35, { ox: -10, oy: -20 });
  sprite_ghul.define(27,'stand_left', 35, { ox: -6, oy: -19 });
  sprite_ghul.define(28,'stand_upright', 35, { ox: -15, oy: -14 });
  sprite_ghul.define(29,'stand_downright', 35, { ox: -13, oy: -24 });
  sprite_ghul.define(30,'stand_downleft', 35, { ox: -4, oy: -23 });
  sprite_ghul.define(31,'stand_upleft', 35, { ox: -5, oy: -14 });
  sprite_ghul.define(32,'damage_down', 6);
 
   sprite_ghul.fps(12);
   sprite_ghul.set('stand_down');

   creatures.define("Ghul", {

   max_life: 650,
    attack: 33,
    min_attack: 7,
    defence: 20,
	natural_range: 20,
    walk_speed: 1.8, // predkosc chodzenia
    run_speed: 2.3, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Łapa Ghula",
    natural_armour: "Skóra",
	
    sprite: sprite_ghul,
    radius: 	14,
    sight: 		500,
	hearing: 	20,
	
	droppings: { ammo: 0.2, health: 0.2, viols: 0.15, ttl: 15 * 24, health_add: [25,45], ammo_add: [0.4, 0.6], viols_add: [5,10] },
	opponents: [ 'Zmutowany_gryzon' ],
	
	dead_sound_src: [ 'assets/audio/creatures/ghul1.ogg'],
	dead_sound_volume: 0.5,

	});
  
    // Tworzymy nowy obiekt sprite - dla każdego sprite dla kazdego typu kreatury powinien być nowy obiekt
  // sprite dla zdefiniowanych kreatur mozna objerzeć na stronie Muto/jsapp/public/sprites.html
  // tam wybieramy rodzaj bota i przyciskami lub klawiszami < i >
  // przeglądamy klatka po klatce
  var sprite_mutant_z_warszawy = new Sprite();

  // ustawiamy adres do obrazka
  sprite_mutant_z_warszawy.set_image_src('assets/img/creatures/zarazony.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje sie sprite_mutant)
  // set_size(szerokość, wysokość)
  sprite_mutant_z_warszawy.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek)
  // opcjonalnie na koncu dodajemy tablice z parametrami, mozliwe paramety
  // ox - przesuniecie środka klatki
  // oy - przesuniecie środka klatki
  // fps - ilosc klatek na sekunde (napisuje globalne ustawienie dla sprite)
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek, { ox: 1, oy: -1, fps: 24 } )
  
  // sprite_mutant.define(0,'walk_up', 11, { ox: 6, oy: -18 });
  sprite_mutant_z_warszawy.define(0,'walk_up', 11, { ox: -4, oy: 15, fps: 12 });
  sprite_mutant_z_warszawy.define(1,'walk_right', 11, { ox: -16, oy: -5 });
  sprite_mutant_z_warszawy.define(2,'walk_down', 11, { ox: 3, oy: -14 });
  sprite_mutant_z_warszawy.define(3,'walk_left', 11, { ox: 15, oy: 4 });
  sprite_mutant_z_warszawy.define(4,'walk_upleft', 11, { ox: 14, oy: 5 });
  sprite_mutant_z_warszawy.define(5,'walk_upright', 11, { ox: -4, oy: 15 });
  sprite_mutant_z_warszawy.define(6,'walk_downright', 11, { ox: -16, oy: -3 });
  sprite_mutant_z_warszawy.define(7,'walk_downleft', 11, { ox: 0, oy: -15 });
  sprite_mutant_z_warszawy.define(8,'natural_attack_up', 10, { ox: -4, oy: 20 });
  sprite_mutant_z_warszawy.define(9,'natural_attack_right', 10, { ox: -16, oy: -4 });
  sprite_mutant_z_warszawy.define(10,'natural_attack_down', 10, { ox: 3, oy: -15 });
  sprite_mutant_z_warszawy.define(11,'natural_attack_left', 10, { ox: 17, oy: 3 });
  sprite_mutant_z_warszawy.define(12,'natural_attack_upright', 10, { ox: -6, oy: 16 });
  sprite_mutant_z_warszawy.define(13,'natural_attack_downright', 10, { ox: -17, oy: -5 });
  sprite_mutant_z_warszawy.define(14,'natural_attack_downleft', 10, { ox: 2, oy: -16 });
  sprite_mutant_z_warszawy.define(15,'natural_attack_upleft', 10, { ox: 15, oy: 5 });
  sprite_mutant_z_warszawy.define(16,'dead_up', 9, { ox: 0, oy: 25 });
  sprite_mutant_z_warszawy.define(17,'dead_right', 9, { ox: -20, oy: 2 });
  sprite_mutant_z_warszawy.define(18,'dead_down', 9, { ox: 1, oy: -21 });
  sprite_mutant_z_warszawy.define(19,'dead_left', 9, { ox: 15, oy: 2 });
  sprite_mutant_z_warszawy.define(20,'dead_upright', 9, { ox: -8, oy: 22 });
  sprite_mutant_z_warszawy.define(21,'dead_downright', 9, { ox: -18, oy: -6 });
  sprite_mutant_z_warszawy.define(22,'dead_downleft', 9, { ox: 2, oy: -17 });
  sprite_mutant_z_warszawy.define(23,'dead_upleft', 9, { ox: 14, oy: 2 });
  sprite_mutant_z_warszawy.define(24,'stand_up', 35, { ox: -5, oy: 13 });
  sprite_mutant_z_warszawy.define(25,'stand_right', 35, { ox: -16, oy: -4 });
  sprite_mutant_z_warszawy.define(26,'stand_down', 35, { ox: 2, oy: -15 });
  sprite_mutant_z_warszawy.define(27,'stand_left', 35, { ox: 15, oy: 2 });
  sprite_mutant_z_warszawy.define(28,'stand_upright', 35, { ox: -5, oy: 15 });
  sprite_mutant_z_warszawy.define(29,'stand_downright', 35, { ox: -16, oy: -2 });
  sprite_mutant_z_warszawy.define(30,'stand_downleft', 35, { ox: 0, oy: -14 });
  sprite_mutant_z_warszawy.define(31,'stand_upleft', 35, { ox: 16, oy: 6 });
  sprite_mutant_z_warszawy.define(32,'damage_down', 6, { ox: -4, oy: 6 });


  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_mutant_z_warszawy.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant_z_warszawy.set('stand_down');

  // definiujemy kreature - najpierw "klucz", którym bedziemy się posługiwać w reszcie kodu
  creatures.define("Mutant z Warszawy", {
    max_life: 350,
    attack: 18,
    min_attack: 5,
    defence: 5,
    walk_speed: 3.5, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Łapa Zarażonego",
    natural_armour: "Futro",
	dead_sound_src: [ 'assets/audio/creatures/mutantsnarl6.ogg'],
    dead_sound_volume: 0.5,

    // ustawiamy wcześniej zdefiniowana sprite_mutant mape
    sprite: sprite_mutant_z_warszawy,

    // ile pikseli wzgledem środka to przestrzeń kreatury na która nie można wchodzić
    natural_range: 27,
	radius: 	11, 

    // ile pikseli wzroku ma bot
    sight: 		480,

    // ile pikseli słuchu ma bot
    hearing: 	20,
	droppings: { ammo: 0.15, health: 0.25, viols: 0.15, ttl: 15 * 24, health_add: [30,60], ammo_add: [0.3, 0.55], viols_add: [15,30] },

    // kogo bot bedzie atakował (gracza zawsze)
    opponents: [ 'Korsarz', 'Korsarz_7', 'Żołnierz_Kameleona'],
    // jesli ustawione bot nie bedzie atakowal gracza - aby wylaczyc nie ustawiac w ogole lub wpisac false
    // friendly: true,

  });
  
  	    var sprite_ghul_pancerny = new Sprite();
  // ustawiamy adres do obrazka
  sprite_ghul_pancerny.set_image_src('assets/img/creatures/ghul.png');

  // ustawiamy wymiary klatki (tj. komórki w ktoreulj znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_ghul_pancerny.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  sprite_ghul_pancerny.define(0,'walk_up', 11, { ox: -8, oy: 10});
  sprite_ghul_pancerny.define(1,'walk_right', 11, { ox: -10, oy: -8});
  sprite_ghul_pancerny.define(2,'walk_down', 11, { ox: -10, oy: -12});
  sprite_ghul_pancerny.define(3,'walk_left', 11, { ox: -8, oy: -10});
  sprite_ghul_pancerny.define(4,'walk_upleft', 11, { ox: -8, oy: -5});
  sprite_ghul_pancerny.define(5,'walk_upright', 11, { ox: -10, oy: 0});
  sprite_ghul_pancerny.define(6,'walk_downright', 11, { ox: -10, oy: -4});
  sprite_ghul_pancerny.define(7,'walk_downleft', 11, { ox: -8, oy: -12});
  sprite_ghul_pancerny.define(8,'natural_attack_up', 10, { ox: -8, oy: 4});
  sprite_ghul_pancerny.define(9,'natural_attack_right', 10, { ox: -10, oy: -2});
  sprite_ghul_pancerny.define(10,'natural_attack_down', 10, { ox: -10, oy: -10});
  sprite_ghul_pancerny.define(11,'natural_attack_left', 10, { ox: -10, oy: -8});
  sprite_ghul_pancerny.define(12,'natural_attack_upright', 10, { ox: -10, oy: 0});
  sprite_ghul_pancerny.define(13,'natural_attack_downright', 10, { ox: -10, oy: -8});
  sprite_ghul_pancerny.define(14,'natural_attack_downleft', 10, { ox: -10, oy: -12});
  sprite_ghul_pancerny.define(15,'natural_attack_upleft', 10, { ox: -10, oy: -10});
  sprite_ghul_pancerny.define(16,'dead_up', 9, { ox: -10, oy: 8});
  sprite_ghul_pancerny.define(17,'dead_right', 9, { ox: -10, oy: -5});
  sprite_ghul_pancerny.define(18,'dead_down', 9, { ox: -10, oy: -5});
  sprite_ghul_pancerny.define(19,'dead_left', 9, { ox: -5, oy: -10});
  sprite_ghul_pancerny.define(20,'dead_upright', 9, { ox: -5, oy: -10});
  sprite_ghul_pancerny.define(21,'dead_downright', 9, { ox: -10, oy: -5});
  sprite_ghul_pancerny.define(22,'dead_downleft', 9, { ox: -5, oy: -10});
  sprite_ghul_pancerny.define(23,'dead_upleft', 9, { ox: -5, oy: -15});
  sprite_ghul_pancerny.define(24,'stand_up', 35, { ox: -9, oy: -16 });
  sprite_ghul_pancerny.define(25,'stand_right', 35, { ox: -12, oy: -18 });
  sprite_ghul_pancerny.define(26,'stand_down', 35, { ox: -10, oy: -20 });
  sprite_ghul_pancerny.define(27,'stand_left', 35, { ox: -6, oy: -19 });
  sprite_ghul_pancerny.define(28,'stand_upright', 35, { ox: -15, oy: -14 });
  sprite_ghul_pancerny.define(29,'stand_downright', 35, { ox: -13, oy: -24 });
  sprite_ghul_pancerny.define(30,'stand_downleft', 35, { ox: -4, oy: -23 });
  sprite_ghul_pancerny.define(31,'stand_upleft', 35, { ox: -5, oy: -14 });
  sprite_ghul_pancerny.define(32,'damage_down', 6);
 
   sprite_ghul_pancerny.fps(12);
   sprite_ghul_pancerny.set('stand_down');

   creatures.define("Ghul_pancerny", {

   max_life: 850,
    attack: 45,
    min_attack: 5,
    defence: 30,
	natural_range: 20,
    walk_speed: 1.2, // predkosc chodzenia
    run_speed: 2.0, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Łapa Ghula",
    natural_armour: "Skóra",
	
    sprite: sprite_ghul_pancerny,
    radius: 	14,
    sight: 		500,
	hearing: 	20,
	
	droppings: { ammo: 0.0, health: 0.3, viols: 0.25, ttl: 15 * 24, health_add: [65,140], ammo_add: [0.2, 0.35], viols_add: [15,30] },
	opponents: [ '' ],
	
	dead_sound_src: [ 'assets/audio/creatures/ghul1.ogg'],
	dead_sound_volume: 0.5,
   
		});
   
   var sprite_reptilian = new Sprite();

  // ustawiamy adres do obrazka
  sprite_reptilian.set_image_src('assets/img/creatures/reptilian.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_reptilian.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_reptilian.define(0,'walk_up', 12, { ox: 0, oy: 9 });
  sprite_reptilian.define(1,'walk_right', 12, { ox: -9, oy: 0 });
  sprite_reptilian.define(2,'walk_down', 12, { ox: 0, oy: -9 });
  sprite_reptilian.define(3,'walk_left', 12, { ox: 9, oy: 0 });
  sprite_reptilian.define(4,'walk_upright', 12, { ox: 0, oy: 8 });
  sprite_reptilian.define(5,'walk_downright', 12, { ox: -8, oy: 0 });
  sprite_reptilian.define(6,'walk_downleft', 12, { ox: 0, oy: -8 });
  sprite_reptilian.define(7,'walk_upleft', 12, { ox: 8, oy: 0 });
  sprite_reptilian.define(8,'natural_attack_up', 11, { ox: 0, oy: 6 });
  sprite_reptilian.define(9,'natural_attack_right', 11, { ox: -6, oy: 0 });
  sprite_reptilian.define(10,'natural_attack_down', 11, { ox: 0, oy: -6 });
  sprite_reptilian.define(11,'natural_attack_left', 11, { ox: 6, oy: 0 });
  sprite_reptilian.define(12,'natural_attack_upright', 11, { ox: 4, oy: 8 });
  sprite_reptilian.define(13,'natural_attack_downright', 11, { ox: -8, oy: 4 });
  sprite_reptilian.define(14,'natural_attack_downleft', 11, { ox: -4, oy: -8 });
  sprite_reptilian.define(15,'natural_attack_upleft', 11, { ox: 10, oy: -2 });
  sprite_reptilian.define(16,'dead_up', 8, { ox: 0, oy: 11 });
  sprite_reptilian.define(17,'dead_right', 8, { ox: -10, oy: 3 });
  sprite_reptilian.define(18,'dead_down', 8, { ox: 0, oy: -5 });
  sprite_reptilian.define(19,'dead_left', 8, { ox: 8, oy: 2 });
  sprite_reptilian.define(20,'dead_upright', 8, { ox: 0, oy: 10 });
  sprite_reptilian.define(21,'dead_downright', 8, { ox: -8, oy: 2 });
  sprite_reptilian.define(22,'dead_downleft', 8, { ox: -2, oy: -5 });
  sprite_reptilian.define(23,'dead_upleft', 8, { ox: 7, oy: 0 });
  sprite_reptilian.define(24,'stand_up', 13, { ox: 1, oy: 9 });
  sprite_reptilian.define(25,'stand_right', 13, { ox: -9, oy: 2 });
  sprite_reptilian.define(26,'stand_down', 13, { ox: 0, oy: -7 });
  sprite_reptilian.define(27,'stand_left', 13, { ox: 7, oy: 2 });
  sprite_reptilian.define(28,'stand_upright', 13, { ox: 3, oy: 10 });
  sprite_reptilian.define(29,'stand_downright', 13, { ox: -10, oy: 3 });
  sprite_reptilian.define(30,'stand_downleft', 13, { ox: 0, oy: -6 });
  sprite_reptilian.define(31,'stand_upleft', 13, { ox: 6, oy: 2 });
  sprite_reptilian.define(32,'damage_down', 6, { ox: 0, oy: 0 }); 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_reptilian.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_reptilian.set('stand_down');

  creatures.define("Reptilian", {
	
	max_life: 500,
    attack: 27,
    min_attack: 5,
    defence: 15,
	natural_range: 20,
    walk_speed: 2.5, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Pazury R",
    natural_armour: "Skóra",
	
    sprite: sprite_reptilian,
    radius: 	13,
    sight: 	55,
    hearing: 	200,
	
	droppings: { ammo: 0.15, health: 0.25, viols: 0.1, ttl: 15 * 24, health_add: [40,40], ammo_add: [0.3, 0.7], viols_add: [10,10] },
	opponents: [ '' ],
	dead_sound_src: [ 'assets/audio/creatures/reptilian3.ogg', 'assets/audio/creatures/reptilian4.ogg' ],
    dead_sound_volume: 0.5,

	  });
	  
	   var sprite_reptoludz = new Sprite();

  // ustawiamy adres do obrazka
  sprite_reptoludz.set_image_src('assets/img/creatures/reptoludz.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_reptoludz.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_reptoludz.define(0,'walk_up', 14, { ox: 0, oy: 12 });
  sprite_reptoludz.define(1,'walk_right', 14, { ox: -12, oy: 0 });
  sprite_reptoludz.define(2,'walk_down', 14, { ox: 0, oy: -12 });
  sprite_reptoludz.define(3,'walk_left', 14, { ox: 12, oy: 0 });
  sprite_reptoludz.define(4,'walk_upright', 14, { ox: 4, oy: 14 });
  sprite_reptoludz.define(5,'walk_downright', 14, { ox: -14, oy: 4 });
  sprite_reptoludz.define(6,'walk_downleft', 14, { ox: -4, oy: -14 });
  sprite_reptoludz.define(7,'walk_upleft', 14, { ox: 14, oy: -7 });
  sprite_reptoludz.define(8,'natural_attack_up', 9, { ox: 0, oy: 6 });
  sprite_reptoludz.define(9,'natural_attack_right', 9, { ox: -8, oy: -5 });
  sprite_reptoludz.define(10,'natural_attack_down', 9, { ox: 0, oy: -13 });
  sprite_reptoludz.define(11,'natural_attack_left', 9, { ox: 9, oy: -4 });
  sprite_reptoludz.define(12,'natural_attack_upright', 9, { ox: 10, oy: 4 });
  sprite_reptoludz.define(13,'natural_attack_downright', 9, { ox: -10, oy: 4 });
  sprite_reptoludz.define(14,'natural_attack_downleft', 9, { ox: -10, oy: -11 });
  sprite_reptoludz.define(15,'natural_attack_upleft', 9, { ox: 9, oy: -11 });
  sprite_reptoludz.define(16,'dead_up', 11, { ox: 0, oy: 10 });
  sprite_reptoludz.define(17,'dead_right', 11, { ox: -15, oy: -6 });
  sprite_reptoludz.define(18,'dead_down', 11, { ox: 0, oy: -17 });
  sprite_reptoludz.define(19,'dead_left', 11, { ox: 13, oy: -5 });
  sprite_reptoludz.define(20,'dead_upright', 11, { ox: 2, oy: 6 });
  sprite_reptoludz.define(21,'dead_downright', 11, { ox: -10, oy: -4 });
  sprite_reptoludz.define(22,'dead_downleft', 11, { ox: -1, oy: -14 });
  sprite_reptoludz.define(23,'dead_upleft', 11, { ox: 10, oy: -5 });
  sprite_reptoludz.define(24,'stand_up', 14, { ox: 0, oy: 9 });
  sprite_reptoludz.define(25,'stand_right', 14, { ox: -13, oy: -5 });
  sprite_reptoludz.define(26,'stand_down', 14, { ox: 0, oy: -18 });
  sprite_reptoludz.define(27,'stand_left', 14, { ox: 15, oy: -5 });
  sprite_reptoludz.define(28,'stand_upright', 14, { ox: 1, oy: 12 });
  sprite_reptoludz.define(29,'stand_downright', 14, { ox: -15, oy: -1 });
  sprite_reptoludz.define(30,'stand_downleft', 14, { ox: -4, oy: -18 });
  sprite_reptoludz.define(31,'stand_upleft', 14, { ox: 15, oy: -8 });
  sprite_reptoludz.define(32,'damage_down', 6, {ox: 0, oy: 3});

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_reptoludz.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_reptoludz.set('stand_down');

  creatures.define("Reptoludz", {
  
	max_life: 650,
    attack: 32,
    min_attack: 4,
    defence: 20,
    walk_speed: 2.5, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)
  
    natural_weapon: "Dzida R",
    natural_armour: "Skóra",
    natural_range: 53,
	
    sprite: sprite_reptoludz,
    radius: 	12,
    sight: 		55,
    hearing: 	200,
	
	droppings: { ammo: 0.3, health: 0.5, viols: 0.28, ttl: 15 * 24, health_add: [55,100], ammo_add: [0.4, 0.7], viols_add: [10,20] },
	opponents: [ '' ],
	dead_sound_src: [ 'assets/audio/creatures/reptoludz3.ogg', 'assets/audio/creatures/reptoludz4.ogg' ],
    dead_sound_volume: 0.5,

	  });
	  
	   var sprite_mutant_z_metra = new Sprite();

  // ustawiamy adres do obrazka
  sprite_mutant_z_metra.set_image_src('assets/img/creatures/zarazony.png');

  // ustawiamy wymiary klatki (tj. komórki w ktorej znajduje sie sprite_mutant)
  // set_size(szerokość, wysokość)
  sprite_mutant_z_metra.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek)
  // opcjonalnie na koncu dodajemy tablice z parametrami, mozliwe paramety
  // ox - przesuniecie środka klatki
  // oy - przesuniecie środka klatki
  // fps - ilosc klatek na sekunde (napisuje globalne ustawienie dla sprite)
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek, { ox: 1, oy: -1, fps: 24 } )
  
  // sprite_mutant.define(0,'walk_up', 11, { ox: 6, oy: -18 });
  sprite_mutant_z_metra.define(0,'walk_up', 11, { ox: -4, oy: 15, fps: 12 });
  sprite_mutant_z_metra.define(1,'walk_right', 11, { ox: -16, oy: -5 });
  sprite_mutant_z_metra.define(2,'walk_down', 11, { ox: 3, oy: -14 });
  sprite_mutant_z_metra.define(3,'walk_left', 11, { ox: 15, oy: 4 });
  sprite_mutant_z_metra.define(4,'walk_upleft', 11, { ox: 14, oy: 5 });
  sprite_mutant_z_metra.define(5,'walk_upright', 11, { ox: -4, oy: 15 });
  sprite_mutant_z_metra.define(6,'walk_downright', 11, { ox: -16, oy: -3 });
  sprite_mutant_z_metra.define(7,'walk_downleft', 11, { ox: 0, oy: -15 });
  sprite_mutant_z_metra.define(8,'natural_attack_up', 10, { ox: -4, oy: 20 });
  sprite_mutant_z_metra.define(9,'natural_attack_right', 10, { ox: -16, oy: -4 });
  sprite_mutant_z_metra.define(10,'natural_attack_down', 10, { ox: 3, oy: -15 });
  sprite_mutant_z_metra.define(11,'natural_attack_left', 10, { ox: 17, oy: 3 });
  sprite_mutant_z_metra.define(12,'natural_attack_upright', 10, { ox: -6, oy: 16 });
  sprite_mutant_z_metra.define(13,'natural_attack_downright', 10, { ox: -17, oy: -5 });
  sprite_mutant_z_metra.define(14,'natural_attack_downleft', 10, { ox: 2, oy: -16 });
  sprite_mutant_z_metra.define(15,'natural_attack_upleft', 10, { ox: 15, oy: 5 });
  sprite_mutant_z_metra.define(16,'dead_up', 9, { ox: 0, oy: 25 });
  sprite_mutant_z_metra.define(17,'dead_right', 9, { ox: -20, oy: 2 });
  sprite_mutant_z_metra.define(18,'dead_down', 9, { ox: 1, oy: -21 });
  sprite_mutant_z_metra.define(19,'dead_left', 9, { ox: 15, oy: 2 });
  sprite_mutant_z_metra.define(20,'dead_upright', 9, { ox: -8, oy: 22 });
  sprite_mutant_z_metra.define(21,'dead_downright', 9, { ox: -18, oy: -6 });
  sprite_mutant_z_metra.define(22,'dead_downleft', 9, { ox: 2, oy: -17 });
  sprite_mutant_z_metra.define(23,'dead_upleft', 9, { ox: 14, oy: 2 });
  sprite_mutant_z_metra.define(24,'stand_up', 35, { ox: -5, oy: 13 });
  sprite_mutant_z_metra.define(25,'stand_right', 35, { ox: -16, oy: -4 });
  sprite_mutant_z_metra.define(26,'stand_down', 35, { ox: 2, oy: -15 });
  sprite_mutant_z_metra.define(27,'stand_left', 35, { ox: 15, oy: 2 });
  sprite_mutant_z_metra.define(28,'stand_upright', 35, { ox: -5, oy: 15 });
  sprite_mutant_z_metra.define(29,'stand_downright', 35, { ox: -16, oy: -2 });
  sprite_mutant_z_metra.define(30,'stand_downleft', 35, { ox: 0, oy: -14 });
  sprite_mutant_z_metra.define(31,'stand_upleft', 35, { ox: 16, oy: 6 });
  sprite_mutant_z_metra.define(32,'damage_down', 6, { ox: -4, oy: 6 });


  // definiujemy bazowa ilość klatek animacji na sekunde
  sprite_mutant_z_metra.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant_z_metra.set('stand_down');

  // definiujemy kreature - najpierw "klucz", którym bedziemy się posługiwać w reszcie kodu
  creatures.define("Mutant z Metra", {
    max_life: 450,
    attack: 19,
    min_attack: 5,
    defence: 5,
    walk_speed: 3.5, // predkosc chodzenia
    run_speed: 4, // predkosc biegania (postacie gracza tylko biegaja)

    natural_weapon: "Łapa Zarażonego",
    natural_armour: "Futro",
	dead_sound_src: [ 'assets/audio/creatures/mutantsnarl6.ogg' ],
    dead_sound_volume: 0.5,

    // ustawiamy wcześniej zdefiniowana sprite_mutant mape
    sprite: sprite_mutant_z_metra,

    // ile pikseli wzgledem środka to przestrzeń kreatury na która nie można wchodzić
    natural_range: 27,
	radius: 	11, 

    // ile pikseli wzroku ma bot
    sight: 		70,

    // ile pikseli słuchu ma bot
    hearing: 	200,
	droppings: { ammo: 0.00, health: 0.25, viols: 0.15, ttl: 15 * 24, health_add: [30,60], ammo_add: [0.1, 0.25], viols_add: [15,30] },

    // kogo bot bedzie atakował (gracza zawsze)
    opponents: [ 'Korsarz', 'Korsarz_7'],
    // jesli ustawione bot nie bedzie atakowal gracza - aby wylaczyc nie ustawiac w ogole lub wpisac false
    // friendly: true,

  });
  
     var sprite_ghul_z_metra = new Sprite();
  // ustawiamy adres do obrazka
  sprite_ghul_z_metra.set_image_src('assets/img/creatures/ghul.png');

  // ustawiamy wymiary klatki (tj. komórki w ktoreulj znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_ghul_z_metra.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  sprite_ghul_z_metra.define(0,'walk_up', 11, { ox: -8, oy: 10});
  sprite_ghul_z_metra.define(1,'walk_right', 11, { ox: -10, oy: -8});
  sprite_ghul_z_metra.define(2,'walk_down', 11, { ox: -10, oy: -12});
  sprite_ghul_z_metra.define(3,'walk_left', 11, { ox: -8, oy: -10});
  sprite_ghul_z_metra.define(4,'walk_upleft', 11, { ox: -8, oy: -5});
  sprite_ghul_z_metra.define(5,'walk_upright', 11, { ox: -10, oy: 0});
  sprite_ghul_z_metra.define(6,'walk_downright', 11, { ox: -10, oy: -4});
  sprite_ghul_z_metra.define(7,'walk_downleft', 11, { ox: -8, oy: -12});
  sprite_ghul_z_metra.define(8,'natural_attack_up', 10, { ox: -8, oy: 4});
  sprite_ghul_z_metra.define(9,'natural_attack_right', 10, { ox: -10, oy: -2});
  sprite_ghul_z_metra.define(10,'natural_attack_down', 10, { ox: -10, oy: -10});
  sprite_ghul_z_metra.define(11,'natural_attack_left', 10, { ox: -10, oy: -8});
  sprite_ghul_z_metra.define(12,'natural_attack_upright', 10, { ox: -10, oy: 0});
  sprite_ghul_z_metra.define(13,'natural_attack_downright', 10, { ox: -10, oy: -8});
  sprite_ghul_z_metra.define(14,'natural_attack_downleft', 10, { ox: -10, oy: -12});
  sprite_ghul_z_metra.define(15,'natural_attack_upleft', 10, { ox: -10, oy: -10});
  sprite_ghul_z_metra.define(16,'dead_up', 9, { ox: -10, oy: 8});
  sprite_ghul_z_metra.define(17,'dead_right', 9, { ox: -10, oy: -5});
  sprite_ghul_z_metra.define(18,'dead_down', 9, { ox: -10, oy: -5});
  sprite_ghul_z_metra.define(19,'dead_left', 9, { ox: -5, oy: -10});
  sprite_ghul_z_metra.define(20,'dead_upright', 9, { ox: -5, oy: -10});
  sprite_ghul_z_metra.define(21,'dead_downright', 9, { ox: -10, oy: -5});
  sprite_ghul_z_metra.define(22,'dead_downleft', 9, { ox: -5, oy: -10});
  sprite_ghul_z_metra.define(23,'dead_upleft', 9, { ox: -5, oy: -15});
  sprite_ghul_z_metra.define(24,'stand_up', 35, { ox: -9, oy: -16 });
  sprite_ghul_z_metra.define(25,'stand_right', 35, { ox: -12, oy: -18 });
  sprite_ghul_z_metra.define(26,'stand_down', 35, { ox: -10, oy: -20 });
  sprite_ghul_z_metra.define(27,'stand_left', 35, { ox: -6, oy: -19 });
  sprite_ghul_z_metra.define(28,'stand_upright', 35, { ox: -15, oy: -14 });
  sprite_ghul_z_metra.define(29,'stand_downright', 35, { ox: -13, oy: -24 });
  sprite_ghul_z_metra.define(30,'stand_downleft', 35, { ox: -4, oy: -23 });
  sprite_ghul_z_metra.define(31,'stand_upleft', 35, { ox: -5, oy: -14 });
  sprite_ghul_z_metra.define(32,'damage_down', 6, { ox: 0, oy: 0 });
 
   sprite_ghul_z_metra.fps(12);
   sprite_ghul_z_metra.set('stand_down');

   creatures.define("Ghul_z_Metra", {

   max_life: 650,
    attack: 32,
    min_attack: 7,
    defence: 20,
	natural_range: 20,
    walk_speed: 1.8, // predkosc chodzenia
    run_speed: 2.3, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Łapa Ghula",
    natural_armour: "Skóra",
	
    sprite: sprite_ghul,
    radius: 	14,
    sight: 		200,
	hearing: 	200,
	
	droppings: { ammo: 0.0, health: 0.2, viols: 0.15, ttl: 15 * 24, health_add: [25,45], ammo_add: [0.2, 0.35], viols_add: [5,10] },
	opponents: [ 'Zmutowany_gryzon', 'Żołnierz_Kameleona' ],
	
	dead_sound_src: [ 'assets/audio/creatures/ghul1.ogg'],
	dead_sound_volume: 0.5,

	});
	
	var sprite_reptilian_z_placu = new Sprite();

  // ustawiamy adres do obrazka
  sprite_reptilian_z_placu.set_image_src('assets/img/creatures/reptilian.png');

  // ustawiamy wymiary klatki (tj. komorki w ktorej znajduje sie sprite_szczur)
  // set_size(szerokosc, wysokosc)
  sprite_reptilian_z_placu.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_reptilian_z_placu.define(0,'walk_up', 12, { ox: 0, oy: 9 });
  sprite_reptilian_z_placu.define(1,'walk_right', 12, { ox: -9, oy: 0 });
  sprite_reptilian_z_placu.define(2,'walk_down', 12, { ox: 0, oy: -9 });
  sprite_reptilian_z_placu.define(3,'walk_left', 12, { ox: 9, oy: 0 });
  sprite_reptilian_z_placu.define(4,'walk_upright', 12, { ox: 0, oy: 8 });
  sprite_reptilian_z_placu.define(5,'walk_downright', 12, { ox: -8, oy: 0 });
  sprite_reptilian_z_placu.define(6,'walk_downleft', 12, { ox: 0, oy: -8 });
  sprite_reptilian_z_placu.define(7,'walk_upleft', 12, { ox: 8, oy: 0 });
  sprite_reptilian_z_placu.define(8,'natural_attack_up', 11, { ox: 0, oy: 6 });
  sprite_reptilian_z_placu.define(9,'natural_attack_right', 11, { ox: -6, oy: 0 });
  sprite_reptilian_z_placu.define(10,'natural_attack_down', 11, { ox: 0, oy: -6 });
  sprite_reptilian_z_placu.define(11,'natural_attack_left', 11, { ox: 6, oy: 0 });
  sprite_reptilian_z_placu.define(12,'natural_attack_upright', 11, { ox: 4, oy: 8 });
  sprite_reptilian_z_placu.define(13,'natural_attack_downright', 11, { ox: -8, oy: 4 });
  sprite_reptilian_z_placu.define(14,'natural_attack_downleft', 11, { ox: -4, oy: -8 });
  sprite_reptilian_z_placu.define(15,'natural_attack_upleft', 11, { ox: 10, oy: -2 });
  sprite_reptilian_z_placu.define(16,'dead_up', 8, { ox: 0, oy: 11 });
  sprite_reptilian_z_placu.define(17,'dead_right', 8, { ox: -10, oy: 3 });
  sprite_reptilian_z_placu.define(18,'dead_down', 8, { ox: 0, oy: -5 });
  sprite_reptilian_z_placu.define(19,'dead_left', 8, { ox: 8, oy: 2 });
  sprite_reptilian_z_placu.define(20,'dead_upright', 8, { ox: 0, oy: 10 });
  sprite_reptilian_z_placu.define(21,'dead_downright', 8, { ox: -8, oy: 2 });
  sprite_reptilian_z_placu.define(22,'dead_downleft', 8, { ox: -2, oy: -5 });
  sprite_reptilian_z_placu.define(23,'dead_upleft', 8, { ox: 7, oy: 0 });
  sprite_reptilian_z_placu.define(24,'stand_up', 13, { ox: 1, oy: 9 });
  sprite_reptilian_z_placu.define(25,'stand_right', 13, { ox: -9, oy: 2 });
  sprite_reptilian_z_placu.define(26,'stand_down', 13, { ox: 0, oy: -7 });
  sprite_reptilian_z_placu.define(27,'stand_left', 13, { ox: 7, oy: 2 });
  sprite_reptilian_z_placu.define(28,'stand_upright', 13, { ox: 3, oy: 10 });
  sprite_reptilian_z_placu.define(29,'stand_downright', 13, { ox: -10, oy: 3 });
  sprite_reptilian_z_placu.define(30,'stand_downleft', 13, { ox: 0, oy: -6 });
  sprite_reptilian_z_placu.define(31,'stand_upleft', 13, { ox: 6, oy: 2 });
  sprite_reptilian_z_placu.define(32,'damage_down', 6, { ox: 0, oy: 0 }); 

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_reptilian_z_placu.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_reptilian_z_placu.set('stand_down');

  creatures.define("Reptilian_z_placu", {
	
	max_life: 530,
    attack: 27,
    min_attack: 5,
    defence: 15,
	natural_range: 20,
    walk_speed: 2.5, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Pazury R",
    natural_armour: "Skóra",
	
    sprite: sprite_reptilian,
    radius: 	13,
    sight: 	550,
    hearing: 	50,
	
	droppings: { ammo: 0.15, health: 0.25, viols: 0.1, ttl: 15 * 24, health_add: [40,40], ammo_add: [0.3, 0.4], viols_add: [10,10] },
	opponents: [ '' ],
	dead_sound_src: [ 'assets/audio/creatures/reptilian3.ogg', 'assets/audio/creatures/reptilian4.ogg' ],
    dead_sound_volume: 0.5,

	  });
	  
	   var sprite_reptoludz_z_placu = new Sprite();

  // ustawiamy adres do obrazka
  sprite_reptoludz_z_placu.set_image_src('assets/img/creatures/reptoludz.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_reptoludz_z_placu.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_reptoludz_z_placu.define(0,'walk_up', 14, { ox: 0, oy: 12 });
  sprite_reptoludz_z_placu.define(1,'walk_right', 14, { ox: -12, oy: 0 });
  sprite_reptoludz_z_placu.define(2,'walk_down', 14, { ox: 0, oy: -12 });
  sprite_reptoludz_z_placu.define(3,'walk_left', 14, { ox: 12, oy: 0 });
  sprite_reptoludz_z_placu.define(4,'walk_upright', 14, { ox: 4, oy: 14 });
  sprite_reptoludz_z_placu.define(5,'walk_downright', 14, { ox: -14, oy: 4 });
  sprite_reptoludz_z_placu.define(6,'walk_downleft', 14, { ox: -4, oy: -14 });
  sprite_reptoludz_z_placu.define(7,'walk_upleft', 14, { ox: 14, oy: -7 });
  sprite_reptoludz_z_placu.define(8,'natural_attack_up', 9, { ox: 0, oy: 6 });
  sprite_reptoludz_z_placu.define(9,'natural_attack_right', 9, { ox: -8, oy: -5 });
  sprite_reptoludz_z_placu.define(10,'natural_attack_down', 9, { ox: 0, oy: -13 });
  sprite_reptoludz_z_placu.define(11,'natural_attack_left', 9, { ox: 9, oy: -4 });
  sprite_reptoludz_z_placu.define(12,'natural_attack_upright', 9, { ox: 10, oy: 4 });
  sprite_reptoludz_z_placu.define(13,'natural_attack_downright', 9, { ox: -10, oy: 4 });
  sprite_reptoludz_z_placu.define(14,'natural_attack_downleft', 9, { ox: -10, oy: -11 });
  sprite_reptoludz_z_placu.define(15,'natural_attack_upleft', 9, { ox: 9, oy: -11 });
  sprite_reptoludz_z_placu.define(16,'dead_up', 11, { ox: 0, oy: 10 });
  sprite_reptoludz_z_placu.define(17,'dead_right', 11, { ox: -15, oy: -6 });
  sprite_reptoludz_z_placu.define(18,'dead_down', 11, { ox: 0, oy: -17 });
  sprite_reptoludz_z_placu.define(19,'dead_left', 11, { ox: 13, oy: -5 });
  sprite_reptoludz_z_placu.define(20,'dead_upright', 11, { ox: 2, oy: 6 });
  sprite_reptoludz_z_placu.define(21,'dead_downright', 11, { ox: -10, oy: -4 });
  sprite_reptoludz_z_placu.define(22,'dead_downleft', 11, { ox: -1, oy: -14 });
  sprite_reptoludz_z_placu.define(23,'dead_upleft', 11, { ox: 10, oy: -5 });
  sprite_reptoludz_z_placu.define(24,'stand_up', 14, { ox: 0, oy: 9 });
  sprite_reptoludz_z_placu.define(25,'stand_right', 14, { ox: -13, oy: -5 });
  sprite_reptoludz_z_placu.define(26,'stand_down', 14, { ox: 0, oy: -18 });
  sprite_reptoludz_z_placu.define(27,'stand_left', 14, { ox: 15, oy: -5 });
  sprite_reptoludz_z_placu.define(28,'stand_upright', 14, { ox: 1, oy: 12 });
  sprite_reptoludz_z_placu.define(29,'stand_downright', 14, { ox: -15, oy: -1 });
  sprite_reptoludz_z_placu.define(30,'stand_downleft', 14, { ox: -4, oy: -18 });
  sprite_reptoludz_z_placu.define(31,'stand_upleft', 14, { ox: 15, oy: -8 });
  sprite_reptoludz_z_placu.define(32,'damage_down', 6, {ox: 0, oy: 3});

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_reptoludz_z_placu.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_reptoludz_z_placu.set('stand_down');

  creatures.define("Reptoludz_z_placu", {
  
	max_life: 670,
    attack: 33,
    min_attack: 4,
    defence: 20,
    walk_speed: 2.5, // predkosc chodzenia
    run_speed: 4.5, // predkosc biegania (postacie gracza tylko biegaja)
  
    natural_weapon: "Dzida R",
    natural_armour: "Skóra",
    natural_range: 53,
	
    sprite: sprite_reptoludz_z_placu,
    radius: 	12,
    sight: 		550,
    hearing: 	50,
	
	droppings: { ammo: 0.3, health: 0.5, viols: 0.28, ttl: 15 * 24, health_add: [75,140], ammo_add: [0.4, 0.5], viols_add: [10,20] },
	opponents: [ '' ],
	dead_sound_src: [ 'assets/audio/creatures/reptoludz3.ogg', 'assets/audio/creatures/reptoludz4.ogg' ],
    dead_sound_volume: 0.5,

	  });
	  
	var sprite_pandora = new Sprite();

  sprite_pandora.set_image_src('assets/img/creatures/pandora2.png');
  sprite_pandora.set_size(96, 96);
  
  sprite_pandora.define(0,'walk_up', 8, { ox: 0, oy: 0 });
  sprite_pandora.define(1,'walk_right', 8, { ox: 0, oy: 0 });
  sprite_pandora.define(2,'walk_down', 8, { ox: 0, oy: 0 });
  sprite_pandora.define(3,'walk_left', 8, { ox: 1, oy: 0 });
  sprite_pandora.define(4,'walk_upright', 8, { ox: 0, oy: 2 });
  sprite_pandora.define(5,'walk_downright', 8, { ox: -2, oy: 0 });
  sprite_pandora.define(6,'walk_downleft', 8, { ox: 0, oy: -2 });
  sprite_pandora.define(7,'walk_upleft', 8, { ox: 2, oy: 0 });
  sprite_pandora.define(8,'natural_attack_up', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(9,'natural_attack_right', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(10,'natural_attack_down', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(11,'natural_attack_left', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(12,'natural_attack_upright', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(13,'natural_attack_downright', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(14,'natural_attack_downleft', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(15,'natural_attack_upleft', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(16,'dead_up', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(17,'dead_right', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(18,'dead_down', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(19,'dead_left', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(20,'dead_upright', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(21,'dead_downright', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(22,'dead_downleft', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(23,'dead_upleft', 23, { ox: 0, oy: 0 });
  sprite_pandora.define(24,'stand_up', 30, { ox: 0, oy: 0 });
  sprite_pandora.define(25,'stand_right', 30, { ox: 0, oy: 0 });
  sprite_pandora.define(26,'stand_down', 30, { ox: 0, oy: 0 });
  sprite_pandora.define(27,'stand_left', 30, { ox: 0, oy: 0 });
  sprite_pandora.define(28,'stand_upright', 30, { ox: 1, oy: 1 });
  sprite_pandora.define(29,'stand_downright', 30, { ox: -1, oy: 1 });
  sprite_pandora.define(30,'stand_downleft', 30, { ox: -1, oy: -1 });
  sprite_pandora.define(31,'stand_upleft', 30, { ox: 1, oy: -1 });
  sprite_pandora.define(32,'damage_down', 5, {ox: 0, oy: 2});

  sprite_pandora.fps(12);

  sprite_pandora.set('stand_down');

  creatures.define("Pandora", {
  
    max_life: 50,
    attack: 90,
    min_attack: 10,
    defence: 5,
	natural_range: 8, //15,
    walk_speed: 1.5, // predkosc chodzenia
    run_speed: 5.6, // predkosc biegania (postacie gracza tylko biegaja)
	
    natural_weapon: "Wybuch Pandory",
    natural_armour: "Skóra",
	
	droppings: { ammo: 0.1, health: 0.0, viols: 0.15, ttl: 15 * 24, health_add: [45,75], ammo_add: [0.3, 0.65], viols_add: [15,15] },
	opponents: [ 'Zmutowany_gryzon' ],

    sprite: sprite_pandora,
    radius: 	8,
    sight: 		300,
    hearing: 	300,
	  });
	  
	  var sprite_matrona = new Sprite();
	  
	  // ustawiamy adres do obrazka
		sprite_matrona.set_image_src('assets/img/creatures/matrona.png');
 // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
		sprite_matrona.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak są na spitemapie
  // define(kolejny numer wiersza, nazwa animacji, ilosc klatek ) 
		sprite_matrona.define(0,'walk_up', 10, { ox: 0, oy: 13 });
		sprite_matrona.define(1,'walk_right', 10, { ox: -12, oy: 0 });
		sprite_matrona.define(2,'walk_down', 10, { ox: -2, oy: -11 });
		sprite_matrona.define(3,'walk_left', 10, { ox: 11, oy: -1 });
		sprite_matrona.define(4,'walk_upright', 10, { ox: -2, oy: 10 });
		sprite_matrona.define(5,'walk_downright', 10, { ox: -11, oy: 0 });
		sprite_matrona.define(6,'walk_downleft', 10, { ox: 2, oy: -8 });
		sprite_matrona.define(7,'walk_upleft', 10, { ox: 9, oy: 2 });
		sprite_matrona.define(8,'natural_attack_up', 11, { ox: 0, oy: 11 });
		sprite_matrona.define(9,'natural_attack_right', 11, { ox: -13, oy: 1 });
		sprite_matrona.define(10,'natural_attack_down', 11, { ox: -2, oy: -12 });
		sprite_matrona.define(11,'natural_attack_left', 11, { ox: 12, oy: -1 });
		sprite_matrona.define(12,'natural_attack_upright', 11, { ox: -3, oy: 11 });
		sprite_matrona.define(13,'natural_attack_downright', 11, { ox: -11, oy: -2 });
		sprite_matrona.define(14,'natural_attack_downleft', 11, { ox: 1, oy: -10 });
		sprite_matrona.define(15,'natural_attack_upleft', 11, { ox: 9, oy: 2 });
		sprite_matrona.define(16,'dead_up', 39, { ox: -1, oy: 12 });
		sprite_matrona.define(17,'dead_right', 39, { ox: -13, oy: 1 });
		sprite_matrona.define(18,'dead_down', 39, { ox: -2, oy: -12 });
		sprite_matrona.define(19,'dead_left', 39, { ox: 12, oy: 0 });
		sprite_matrona.define(20,'dead_upright', 39, { ox: -4, oy: 11 });
		sprite_matrona.define(21,'dead_downright', 39, { ox: -12, oy: -2 });
		sprite_matrona.define(22,'dead_downleft', 39, { ox: 1, oy: -11 });
		sprite_matrona.define(23,'dead_upleft', 39, { ox: 10, oy: 2 });
		sprite_matrona.define(24,'stand_up', 40, { ox: 0, oy: 12 });
		sprite_matrona.define(25,'stand_right', 40, { ox: -12, oy: 1 });
		sprite_matrona.define(26,'stand_down', 40, { ox: -2, oy: -12 });
		sprite_matrona.define(27,'stand_left', 40, { ox: 11, oy: 0 });
		sprite_matrona.define(28,'stand_upright', 40, { ox: -3, oy: 9 });
		sprite_matrona.define(29,'stand_downright', 40, { ox: -11, oy: -2 });
		sprite_matrona.define(30,'stand_downleft', 40, { ox: 1, oy: -10 });
		sprite_matrona.define(31,'stand_upleft', 40, { ox: 9, oy: 3 });
		sprite_matrona.define(32,'damage_down', 6, {ox: 1, oy: -10});
  
	// definiujemy bazowa ilosc klatek animacji na sekunde
	  sprite_matrona.fps(12);	
	// ustawiamy animacje zawsze na stand_down
		sprite_matrona.set('stand_down');
		
		creatures.define("Matrona", {
		
		max_life: 3500,
		attack: 110,
		min_attack: 20,
		defence: 30,
		natural_range: 62,
		walk_speed: 1.5, // predkosc chodzenia
		run_speed: 3.5, // predkosc biegania (postacie gracza tylko biegaja)
	
		natural_weapon: "Łapa Matrony",
		natural_armour: "Skóra",
	
		droppings: { ammo: 0.0, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [25,45], ammo_add: [0.2, 0.35], viols_add: [5,10] },
		dead_sound_src: [ 'assets/audio/creatures/matrona.ogg' ],
		dead_sound_volume: 0.5,
		opponents: [ 'Zmutowany_gryzon' ],
	
		sprite: sprite_matrona,
		radius: 	27,
		sight: 		200,
		hearing: 	200,
	});
	  
	  	  var sprite_mutant_z_macka = new Sprite();
	  
	  // ustawiamy adres do obrazka
  sprite_mutant_z_macka.set_image_src('assets/img/creatures/mutant_macka.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_mutant_z_macka.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_mutant_z_macka.define(0,'walk_up', 8, { ox: -1, oy: 17 });
  sprite_mutant_z_macka.define(1,'walk_right', 8, { ox: -11, oy: 5 });
  sprite_mutant_z_macka.define(2,'walk_down', 8, { ox: 1, oy: -5 });
  sprite_mutant_z_macka.define(3,'walk_left', 8, { ox: 10, oy: 7 });
  sprite_mutant_z_macka.define(4,'walk_upright', 8, { ox: -7, oy: 13 });
  sprite_mutant_z_macka.define(5,'walk_downright', 8, { ox: -5, oy: -2 });
  sprite_mutant_z_macka.define(6,'walk_downleft', 8, { ox: 7, oy: 0 });
  sprite_mutant_z_macka.define(7,'walk_upleft', 8, { ox: 5, oy: 15 });
  sprite_mutant_z_macka.define(8,'natural_attack_up', 12, { ox: -1, oy: 16 });
  sprite_mutant_z_macka.define(9,'natural_attack_right', 12, { ox: -12, oy: 5 });
  sprite_mutant_z_macka.define(10,'natural_attack_down', 12, { ox: 0, oy: -4 });
  sprite_mutant_z_macka.define(11,'natural_attack_left', 12, { ox: 10, oy: 7 });
  sprite_mutant_z_macka.define(12,'natural_attack_upright', 12, { ox: -7, oy: 11 });
  sprite_mutant_z_macka.define(13,'natural_attack_downright', 12, { ox: -7, oy: 0 });
  sprite_mutant_z_macka.define(14,'natural_attack_downleft', 12, { ox: 5, oy: 0 });
  sprite_mutant_z_macka.define(15,'natural_attack_upleft', 12, { ox: 6, oy: 11 });
  sprite_mutant_z_macka.define(16,'dead_up', 13, { ox: -1, oy: 16 });
  sprite_mutant_z_macka.define(17,'dead_right', 13, { ox: -10, oy: 5 });
  sprite_mutant_z_macka.define(18,'dead_down', 13, { ox: 2, oy: -4 });
  sprite_mutant_z_macka.define(19,'dead_left', 13, { ox: 10, oy: 7 });
  sprite_mutant_z_macka.define(20,'dead_upright', 13, { ox: -5, oy: 17 });
  sprite_mutant_z_macka.define(21,'dead_downright', 13, { ox: -10, oy: 0 });
  sprite_mutant_z_macka.define(22,'dead_downleft', 13, { ox: 5, oy: -4 });
  sprite_mutant_z_macka.define(23,'dead_upleft', 13, { ox: 10, oy: 12 });
  sprite_mutant_z_macka.define(24,'stand_up', 13, { ox: -2, oy: 19 });
  sprite_mutant_z_macka.define(25,'stand_right', 13, { ox: -13, oy: 4 });
  sprite_mutant_z_macka.define(26,'stand_down', 13, { ox: 2, oy: -7 });
  sprite_mutant_z_macka.define(27,'stand_left', 13, { ox: 13, oy: 8 });
  sprite_mutant_z_macka.define(28,'stand_upright', 13, { ox: -6, oy: 12 });
  sprite_mutant_z_macka.define(29,'stand_downright', 13, { ox: -5, oy: 0 });
  sprite_mutant_z_macka.define(30,'stand_downleft', 13, { ox: 5, oy: 0 });
  sprite_mutant_z_macka.define(31,'stand_upleft', 13, { ox: 5, oy: 12 });
  sprite_mutant_z_macka.define(32,'damage_down', 5, {ox: 4, oy: 2});

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_mutant_z_macka.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant_z_macka.set('stand_down');

  creatures.define("Mutant_z_macką", {
  
  		max_life: 900,
		attack: 38,
		min_attack: 5,
		defence: 15,
		natural_range: 41,
		walk_speed: 3.0, // predkosc chodzenia
		run_speed: 3.5, // predkosc biegania (postacie gracza tylko biegaja)
		
    natural_weapon: "Macka",
    natural_armour: "Skóra",
	
	droppings: { ammo: 0.1, health: 0.4, viols: 0.15, ttl: 15 * 24, health_add: [80,140], ammo_add: [0.3, 0.5], viols_add: [15,15] },
	dead_sound_src: [ 'assets/audio/creatures/macka3.ogg', 'assets/audio/creatures/macka4.ogg' ],
    dead_sound_volume: 0.5,
	
		  opponents: [ 'Żołnierz_Kameleona' ],
		
    sprite: sprite_mutant_z_macka,
    radius: 	12,
    sight: 		150,
    hearing: 	150,
	  });
	  
	  var sprite_mutant_z_pazurem = new Sprite();
	  
	  // ustawiamy adres do obrazka
  sprite_mutant_z_pazurem.set_image_src('assets/img/creatures/mutant_pazur.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_mutant_z_pazurem.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_mutant_z_pazurem.define(0,'walk_up', 12, { ox: -1, oy: 17 });
  sprite_mutant_z_pazurem.define(1,'walk_right', 12, { ox: -16, oy: 0 });
  sprite_mutant_z_pazurem.define(2,'walk_down', 12, { ox: 1, oy: -15 });
  sprite_mutant_z_pazurem.define(3,'walk_left', 12, { ox: 15, oy: 3 });
  sprite_mutant_z_pazurem.define(4,'walk_upright', 12, { ox: -4, oy: 17 });
  sprite_mutant_z_pazurem.define(5,'walk_downright', 12, { ox: -16, oy: -3 });
  sprite_mutant_z_pazurem.define(6,'walk_downleft', 12, { ox: 3, oy: -16 });
  sprite_mutant_z_pazurem.define(7,'walk_upleft', 12, { ox: 15, oy: 4 });
  sprite_mutant_z_pazurem.define(8,'natural_attack_up', 9, { ox: -1, oy: 16 });
  sprite_mutant_z_pazurem.define(9,'natural_attack_right', 9, { ox: -16, oy: 0 });
  sprite_mutant_z_pazurem.define(10,'natural_attack_down', 9, { ox: 1, oy: -15 });
  sprite_mutant_z_pazurem.define(11,'natural_attack_left', 9, { ox: 16, oy: 2 });
  sprite_mutant_z_pazurem.define(12,'natural_attack_upright', 9, { ox: -4, oy: 18 });
  sprite_mutant_z_pazurem.define(13,'natural_attack_downright', 9, { ox: -16, oy: -3 });
  sprite_mutant_z_pazurem.define(14,'natural_attack_downleft', 9, { ox: 3, oy: -14 });
  sprite_mutant_z_pazurem.define(15,'natural_attack_upleft', 9, { ox: 17, oy: 5 });
  sprite_mutant_z_pazurem.define(16,'dead_up', 19, { ox: -1, oy: 16 });
  sprite_mutant_z_pazurem.define(17,'dead_right', 19, { ox: -15, oy: 0 });
  sprite_mutant_z_pazurem.define(18,'dead_down', 19, { ox: 1, oy: -14 });
  sprite_mutant_z_pazurem.define(19,'dead_left', 19, { ox: 16, oy: 2 });
  sprite_mutant_z_pazurem.define(20,'dead_upright', 19, { ox: -3, oy: 17 });
  sprite_mutant_z_pazurem.define(21,'dead_downright', 19, { ox: -17, oy: -3 });
  sprite_mutant_z_pazurem.define(22,'dead_downleft', 19, { ox: 3, oy: -16 });
  sprite_mutant_z_pazurem.define(23,'dead_upleft', 19, { ox: 17, oy: 6 });
  sprite_mutant_z_pazurem.define(24,'stand_up', 23, { ox: -1, oy: 19 });
  sprite_mutant_z_pazurem.define(25,'stand_right', 23, { ox: -16, oy: 1 });
  sprite_mutant_z_pazurem.define(26,'stand_down', 23, { ox: 1, oy: -14 });
  sprite_mutant_z_pazurem.define(27,'stand_left', 23, { ox: 16, oy: 3 });
  sprite_mutant_z_pazurem.define(28,'stand_upright', 23, { ox: -4, oy: 19 });
  sprite_mutant_z_pazurem.define(29,'stand_downright', 23, { ox: -17, oy: -2 });
  sprite_mutant_z_pazurem.define(30,'stand_downleft', 23, { ox: 3, oy: -15 });
  sprite_mutant_z_pazurem.define(31,'stand_upleft', 23, { ox: 17, oy: 6 });
  sprite_mutant_z_pazurem.define(32,'damage_down', 6, {ox: -2, oy: 15});

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_mutant_z_pazurem.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_mutant_z_pazurem.set('stand_down');

  creatures.define("Mutant_z_pazurem", {
  
	max_life: 1100,
	attack: 43,
	min_attack: 3,
	defence: 22,
	natural_range: 32,
	walk_speed: 3.0, // predkosc chodzenia
	run_speed: 3.5, // predkosc biegania (postacie gracza tylko biegaja)
		
    natural_weapon: "Pazur",
    natural_armour: "Skóra",
	
	droppings: { ammo: 0.1, health: 0.45, viols: 0.15, ttl: 15 * 24, health_add: [120,170], ammo_add: [0.2, 0.4], viols_add: [25,25] },
	opponents: [ '' ],
	dead_sound_src: [ 'assets/audio/creatures/pazur4.ogg', 'assets/audio/creatures/pazur5.ogg' ],
    dead_sound_volume: 0.5,
	
		  opponents: [ 'Żołnierz_Kameleona' ],

    sprite: sprite_mutant_z_pazurem,
    radius: 	12,
    sight: 	150,
    hearing: 	150,
	  });
	  
	  var sprite_zolnierz_broniacy = new Sprite();

  // ustawiamy adres do obrazka
  sprite_zolnierz_broniacy.set_image_src('assets/img/creatures/zolnierz_broniacy.gif');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_zolnierz_broniacy.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_zolnierz_broniacy.define(0,'natural_attack_up', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(1,'natural_attack_right', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(2,'natural_attack_down', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(3,'natural_attack_left', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(4,'natural_attack_upright', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(5,'natural_attack_downright', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(6,'natural_attack_downleft', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(7,'natural_attack_upleft', 14, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(8,'stand_up', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(9,'stand_right', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(10,'stand_down', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(11,'stand_left', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(12,'stand_upright', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(13,'stand_downright', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(14,'stand_downleft', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(15,'stand_upleft', 22, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(16,'damage_down', 1, {ox: 0, oy: 0});
  sprite_zolnierz_broniacy.define(17,'dead_up', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(18,'dead_right', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(19,'dead_down', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(20,'dead_left', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(21,'dead_upright', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(22,'dead_downright', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(23,'dead_downleft', 1, { ox: 0, oy: 0 });
  sprite_zolnierz_broniacy.define(24,'dead_upleft', 1, { ox: 0, oy: 0 });

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_zolnierz_broniacy.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_zolnierz_broniacy.set('stand_down');

  creatures.define("Żołnierz_Kameleona", {
  
		max_life: 3000,
		attack: 45,
		min_attack: 10,
		defence: 20,
		natural_range: 150,
		walk_speed: 1.5, // predkosc chodzenia
		run_speed: 3.5, // predkosc biegania (postacie gracza tylko biegaja)
		
    natural_weapon: "Nowak-5",
    natural_armour: "Skóra",
	
	droppings: { ammo: 0.0, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [25,45], ammo_add: [0.2, 0.35], viols_add: [5,10] },
		opponents: [ 'Zmutowany_gryzon', 'Mutant z Warszawy', 'Szczur_z_Warszawy', 'Ghul_z_Metra', 'Mutant_z_macką', 'Mutant_z_pazurem', ],

    sprite: sprite_zolnierz_broniacy,
    radius: 	12,
    sight: 		200,
    hearing: 	200,
	friendly: true,
	});
/*
	  var sprite_rycerz = new Sprite();

  // ustawiamy adres do obrazka
  sprite_rycerz.set_image_src('assets/img/creatures/rycerz.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_rycerz.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_rycerz.define(0,'walk_up', 13, { ox: 2, oy: 10 });
  sprite_rycerz.define(1,'walk_right', 13, { ox: -10, oy: 2 });
  sprite_rycerz.define(2,'walk_down', 13, { ox: -2, oy: -10 });
  sprite_rycerz.define(3,'walk_left', 13, { ox: 10, oy: -2 });
  sprite_rycerz.define(4,'walk_upright', 13, { ox: 0, oy: 10 });
  sprite_rycerz.define(5,'walk_downright', 13, { ox: -10, oy: 0 });
  sprite_rycerz.define(6,'walk_downleft', 13, { ox: 0, oy: -10 });
  sprite_rycerz.define(7,'walk_upleft', 13, { ox: 10, oy: 0 });
  sprite_rycerz.define(8,'attack_sword_up', 13, { ox: 2, oy: 10 });
  sprite_rycerz.define(9,'attack_sword_right', 13, { ox: -10, oy: 2 });
  sprite_rycerz.define(10,'attack_sword_down', 13, { ox: -2, oy: -10 });
  sprite_rycerz.define(11,'attack_sword_left', 13, { ox: 10, oy: -2 });
  sprite_rycerz.define(12,'attack_sword_upright', 13, { ox: -2, oy: 10 });
  sprite_rycerz.define(13,'attack_sword_downright', 13, { ox: -10, oy: -1 });
  sprite_rycerz.define(14,'attack_sword_downleft', 13, { ox: 1, oy: -10 });
  sprite_rycerz.define(15,'attack_sword_upleft', 13, { ox: 10, oy: 1 });
  sprite_rycerz.define(16,'dead_up', 47, { ox: 2, oy: 10 });
  sprite_rycerz.define(17,'dead_right', 47, { ox: -10, oy: 1 });
  sprite_rycerz.define(18,'dead_down', 47, { ox: -2, oy: -11 });
  sprite_rycerz.define(19,'dead_left', 47, { ox: 11, oy: -2 });
  sprite_rycerz.define(20,'dead_upright', 47, { ox: -1, oy: 11 });
  sprite_rycerz.define(21,'dead_downright', 47, { ox: -10, oy: 0 });
  sprite_rycerz.define(22,'dead_downleft', 47, { ox: 0, oy: -10 });
  sprite_rycerz.define(23,'dead_upleft', 47, { ox: 10, oy: 1 });
  sprite_rycerz.define(24,'stand_up', 40, { ox: 2, oy: 10 });
  sprite_rycerz.define(25,'stand_right', 40, { ox: -10, oy: 1 });
  sprite_rycerz.define(26,'stand_down', 40, { ox: -2, oy: -10 });
  sprite_rycerz.define(27,'stand_left', 40, { ox: 10, oy: -1 });
  sprite_rycerz.define(28,'stand_upright', 40, { ox: 0, oy: 10 });
  sprite_rycerz.define(29,'stand_downright', 40, { ox: -10, oy: -1 });
  sprite_rycerz.define(30,'stand_downleft', 40, { ox: 0, oy: -10 });
  sprite_rycerz.define(31,'stand_upleft', 40, { ox: 10, oy: 0 });
  sprite_rycerz.define(32,'damage', 7, {ox: 1, oy: 9});

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_rycerz.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_rycerz.set('stand_down');

  creatures.define("Rycerz_Zielonych_Smoków", {
    natural_weapon: "Dzida",
    natural_armour: "Skóra",
	attack_range: 53,

    sprite: sprite_rycerz,
    radius: 	12,
    sight: 		10,
    hearing: 	10,
	friendly: true,
	  });	  
	  
	  var sprite_zbrojny_zielonych_smokow = new Sprite();
	  
	  // ustawiamy adres do obrazka
  sprite_zbrojny_zielonych_smokow.set_image_src('assets/img/creatures/zbrojny_zielonych_smokow.png');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_zbrojny_zielonych_smokow.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  
  sprite_zbrojny_zielonych_smokow.define(0,'walk_up', 12, { ox: 0, oy: 8 });
  sprite_zbrojny_zielonych_smokow.define(1,'walk_right', 12, { ox: -8, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(2,'walk_down', 12, { ox: 0, oy: -7 });
  sprite_zbrojny_zielonych_smokow.define(3,'walk_left', 12, { ox: 7, oy: 1 });
  sprite_zbrojny_zielonych_smokow.define(4,'walk_upright', 12, { ox: 0, oy: 8 });
  sprite_zbrojny_zielonych_smokow.define(5,'walk_downright', 12, { ox: -8, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(6,'walk_downleft', 12, { ox: -1, oy: -8 });
  sprite_zbrojny_zielonych_smokow.define(7,'walk_upleft', 12, { ox: 9, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(8,'attack_up', 13, { ox: 1, oy: 6 });
  sprite_zbrojny_zielonych_smokow.define(9,'attack_right', 13, { ox: -6, oy: 2 });
  sprite_zbrojny_zielonych_smokow.define(10,'attack_down', 13, { ox: -2, oy: -6 });
  sprite_zbrojny_zielonych_smokow.define(11,'attack_left', 13, { ox: 6, oy: -2 });
  sprite_zbrojny_zielonych_smokow.define(12,'attack_upright', 13, { ox: -1, oy: 7 });
  sprite_zbrojny_zielonych_smokow.define(13,'attack_downright', 13, { ox: -8, oy: -2 });
  sprite_zbrojny_zielonych_smokow.define(14,'attack_downleft', 13, { ox: 1, oy: -7 });
  sprite_zbrojny_zielonych_smokow.define(15,'attack_upleft', 13, { ox: 7, oy: 2 });
  sprite_zbrojny_zielonych_smokow.define(16,'dead_up', 20, { ox: -1, oy: 7 });
  sprite_zbrojny_zielonych_smokow.define(17,'dead_right', 20, { ox: -7, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(18,'dead_down', 20, { ox: 1, oy: -8 });
  sprite_zbrojny_zielonych_smokow.define(19,'dead_left', 20, { ox: 7, oy: 1 });
  sprite_zbrojny_zielonych_smokow.define(20,'dead_upright', 20, { ox: 0, oy: 8 });
  sprite_zbrojny_zielonych_smokow.define(21,'dead_downright', 20, { ox: -9, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(22,'dead_downleft', 20, { ox: -1, oy: -7 });
  sprite_zbrojny_zielonych_smokow.define(23,'dead_upleft', 20, { ox: 8, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(24,'stand_up', 35, { ox: -1, oy: 9 });
  sprite_zbrojny_zielonych_smokow.define(25,'stand_right', 35, { ox: -7, oy: 1 });
  sprite_zbrojny_zielonych_smokow.define(26,'stand_down', 35, { ox: 0, oy: -6 });
  sprite_zbrojny_zielonych_smokow.define(27,'stand_left', 35, { ox: 7, oy: 2 });
  sprite_zbrojny_zielonych_smokow.define(28,'stand_upright', 35, { ox: 0, oy: 9 });
  sprite_zbrojny_zielonych_smokow.define(29,'stand_downright', 35, { ox: -9, oy: 2 });
  sprite_zbrojny_zielonych_smokow.define(30,'stand_downleft', 35, { ox: -1, oy: -7 });
  sprite_zbrojny_zielonych_smokow.define(31,'stand_upleft', 35, { ox: 8, oy: 0 });
  sprite_zbrojny_zielonych_smokow.define(32,'damage', 5, {ox: 1, oy: 8});

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_zbrojny_zielonych_smokow.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_zbrojny_zielonych_smokow.set('stand_down');

  creatures.define("Zbrojny_zielonych_smokow", {
    natural_weapon: "Dzida",
    natural_armour: "Skóra",
	attack_range: 57,

    sprite: sprite_zbrojny_zielonych_smokow,
    radius: 	12,
    sight: 		10,
    hearing: 	10,
	  });
		
	var sprite_gor = new Sprite();
  // ustawiamy adres do obrazka
  sprite_gor.set_image_src('assets/img/creatures/gor.png');

  // ustawiamy wymiary klatki (tj. komórki w ktoreulj znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_gor.set_size(120, 120);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spritemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  sprite_gor.define(0,'walk_up', 16, { ox: 0, oy: 5});
  sprite_gor.define(1,'walk_right', 16, { ox: -5, oy: 0});
  sprite_gor.define(2,'walk_down', 16, { ox: 0, oy: -5});
  sprite_gor.define(3,'walk_left', 16, { ox: 5, oy: 0});
  sprite_gor.define(4,'walk_upright', 16, { ox: 4, oy: 4});
  sprite_gor.define(5,'walk_downright', 16, { ox: -5, oy: 4});
  sprite_gor.define(6,'walk_downleft', 16, { ox: -5, oy: -4});
  sprite_gor.define(7,'walk_upleft', 16, { ox: 3, oy: 3});
  sprite_gor.define(8,'natural_attack_up', 13, { ox: -1, oy: 4});
  sprite_gor.define(9,'natural_attack_right', 13, { ox: -5, oy: -2});
  sprite_gor.define(10,'natural_attack_down', 13, { ox: 2, oy: -5});
  sprite_gor.define(11,'natural_attack_left', 13, { ox: 8, oy: 3});
  sprite_gor.define(12,'natural_attack_upright', 13, { ox: -2, oy: 10});
  sprite_gor.define(13,'natural_attack_downright', 13, { ox: -5, oy: 2});
  sprite_gor.define(14,'natural_attack_downleft', 13, { ox: 2, oy: -5});
  sprite_gor.define(15,'natural_attack_upleft', 13, { ox: 7, oy: 2});
  sprite_gor.define(16,'dead_up', 35, { ox: 0, oy: 8});
  sprite_gor.define(17,'dead_right', 35, { ox: -4, oy: -2});
  sprite_gor.define(18,'dead_down', 35, { ox: 1, oy: -5});
  sprite_gor.define(19,'dead_left', 35, { ox: 5, oy: 2});
  sprite_gor.define(20,'dead_upright', 35, { ox: 4, oy: 8});
  sprite_gor.define(21,'dead_downright', 35, { ox: -8, oy: -5});
  sprite_gor.define(22,'dead_downleft', 35, { ox: 4, oy: -6});
  sprite_gor.define(23,'dead_upleft', 35, { ox: 5, oy: 5});
  sprite_gor.define(24,'stand_up', 50, { ox: -2, oy: 8});
  sprite_gor.define(25,'stand_right', 50, { ox: -5, oy: 1});
  sprite_gor.define(26,'stand_down', 50, { ox: 0, oy: -10});
  sprite_gor.define(27,'stand_left', 50, { ox: 10, oy: 0});
  sprite_gor.define(28,'stand_upright', 50, { ox: 0, oy: 10});
  sprite_gor.define(29,'stand_downright', 50, { ox: -10, oy: -5});
  sprite_gor.define(30,'stand_downleft', 50, { ox: 5, oy: -10});
  sprite_gor.define(31,'stand_upleft', 60, { ox: 5, oy: 0});
  sprite_gor.define(32,'damage_down', 6, { ox: 0, oy: 0});
 
   sprite_gor.fps(12);
   sprite_gor.set('stand_down');
   creatures.define("Gor", {
   
    max_life: 25000,
	attack: 100,
	min_attack: 10,
	defence: 25,
	natural_range: 62,
	walk_speed: 2.0, // predkosc chodzenia
	run_speed: 3.0, // predkosc biegania (postacie gracza tylko biegaja)
		
    natural_weapon: "Pięść Gora",
    natural_armour: "Skóra",
	
		     sprite: sprite_gor,
    radius: 	25,
    sight: 		150,
	hearing: 	280,
	
	droppings: { ammo: 0.0, health: 0.00, viols: 0.5, ttl: 15 * 24, health_add: [4,8], ammo_add: [0.25, 0.5], viols_add: [10,50] },
	opponents: [ 'Szczur', 'Zmutowany_gryzon', 'Mutant', 'Mutant z Metra', 'Ghul_z_Metra' ],
	});


  var sprite_demigor = new Sprite();
  // ustawiamy adres do obrazka
  sprite_demigor.set_image_src('assets/img/creatures/demigor2.gif');

  // ustawiamy wymiary klatki (tj. komórki w ktoreulj znajduje się sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_demigor.set_size(150, 150);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spritemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  sprite_demigor.define(0,'walk_up', 12, { ox: 0, oy: 3});
  sprite_demigor.define(1,'walk_right', 12, { ox: -10, oy: -2});
  sprite_demigor.define(2,'walk_down', 12, { ox: 0, oy: -6});
  sprite_demigor.define(3,'walk_left', 12, { ox: 3, oy: 0});
  sprite_demigor.define(4,'walk_upright', 12, { ox: 0, oy: 0});
  sprite_demigor.define(5,'walk_downright', 12, { ox: -4, oy: -5});
  sprite_demigor.define(6,'walk_downleft', 12, { ox: 2, oy: -6});
  sprite_demigor.define(7,'walk_upleft', 12, { ox: 0, oy: 0});
  sprite_demigor.define(8,'natural_attack_up', 12, { ox: 0, oy: 0});
  sprite_demigor.define(9,'natural_attack_right', 12, { ox: 0, oy: 0});
  sprite_demigor.define(10,'natural_attack_down', 12, { ox: 0, oy: 0});
  sprite_demigor.define(11,'natural_attack_left', 12, { ox: 0, oy: 0});
  sprite_demigor.define(12,'natural_attack_upright', 12, { ox: 0, oy: 0});
  sprite_demigor.define(13,'natural_attack_downright', 12, { ox: 0, oy: 0});
  sprite_demigor.define(14,'natural_attack_downleft', 12, { ox: 0, oy: 0});
  sprite_demigor.define(15,'natural_attack_upleft', 12, { ox: 0, oy: 0});
  sprite_demigor.define(16,'dead_up', 35, { ox: 0, oy: 0});
  sprite_demigor.define(17,'dead_right', 35, { ox: 0, oy: 0});
  sprite_demigor.define(18,'dead_down', 35, { ox: 0, oy: 0});
  sprite_demigor.define(19,'dead_left', 35, { ox: 0, oy: 0});
  sprite_demigor.define(20,'dead_upright', 35, { ox: 0, oy: 0});
  sprite_demigor.define(21,'dead_downright', 35, { ox: 0, oy: 0});
  sprite_demigor.define(22,'dead_downleft', 35, { ox: 0, oy: 0});
  sprite_demigor.define(23,'dead_upleft', 35, {ox: 0, oy: 0});
  sprite_demigor.define(24,'stand_up', 50, { ox: 0, oy: 0});
  sprite_demigor.define(25,'stand_right', 50, { ox: 0, oy: 0});
  sprite_demigor.define(26,'stand_down', 50, { ox: 0, oy: 0});
  sprite_demigor.define(27,'stand_left', 50, { ox: 0, oy: 0});
  sprite_demigor.define(28,'stand_upright', 50, { ox: 0, oy: 0});
  sprite_demigor.define(29,'stand_downright', 50, { ox: 0, oy: 0});
  sprite_demigor.define(30,'stand_downleft', 50, { ox: 0, oy: 0});
  sprite_demigor.define(31,'stand_upleft', 60, { ox: 0, oy: 0});
  sprite_demigor.define(32,'damage_down', 6, { ox: 0, oy: 0});
 
  sprite_demigor.fps(12);
  sprite_demigor.set('stand_down');
  creatures.define("Demigor", {

  natural_weapon: "Pazury",
  
  attack_range: 80,
  sprite: sprite_demigor,
  radius:   58,
  sight:    300,
  hearing:  320,
  
    droppings: { ammo: 0.15, health: 0.05, viols: 0.05, ttl: 15 * 24, health_add: [4,8], ammo_add: [0.25, 0.5], viols_add: [1,5] },
  opponents: [ 'Szczur', 'Zmutowany_gryzon', 'Mutant' ],
  });
   var sprite_zolnierz_ranny = new Sprite();

  // ustawiamy adres do obrazka
  sprite_zolnierz_ranny.set_image_src('assets/img/creatures/zołnierz-ranny.gif');

  // ustawiamy wymiary klatki (tj. komórki w której znajduje sie sprite_szczur)
  // set_size(szerokość, wysokość)
  sprite_zolnierz_ranny.set_size(96, 96);

  // definiujemy wszyskie rodzaje animacji, w takiej kolejnosci jak sa na spitemapie
  // define( kolejny numer wiersza, nazwa animacji, ilosc klatek )
  

  sprite_zolnierz_ranny.define(0,'stand_down', 41, { ox: -10, oy: 5 });

  // definiujemy bazowa ilosc klatek animacji na sekunde
  sprite_zolnierz_ranny.fps(12);

  // ustawiamy animacje zawsze na stand_down
  sprite_zolnierz_ranny.set('stand_down');

  creatures.define("Żołnierz_Ranny", {
  
    max_life: 1000,
    attack: 50,
    min_attack: 10,
    defence: 15,
    natural_range: 150,
    natural_armour: "Skóra",
  
  droppings: { ammo: 0.0, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [25,45], ammo_add: [0.2, 0.35], viols_add: [5,10] },
    opponents: [ '' ],

    sprite: sprite_zolnierz_ranny,
    radius:   25,
    sight:    200,
    hearing:  200,
  friendly: true,
  });
  */
  }
