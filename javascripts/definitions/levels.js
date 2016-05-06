function levels_data(levels) {
  // <<<<<<<<<<
  // << LEVEL 0
  // <<<<<<<<<<

  // tworzmy nowy poziom w nawiazie podajemy jego numer porzadkowy
  var level_0 = levels.define_level(0);
  // nazwa pojawiajaca sie na mapie
  level_0.set_name('level_0_name');
  // umiejscowienie przycisku z flaga poziomu
  level_0.set_map_position(135, 20);
  level_0.set_desc('level_0_desc');

  // opisujemy szczegoly mapy poziomu
  level_0.set_level_data(
      function level_data(level) {
        // powtarzamy numer porzadkowy - koniecznie
        level.set_id(0);

        // ustawiamy tlo poziomu
        level.set_background_image ('assets/img/levels/gdynska_plaza.png');
        // (opcjonalnie) ustawiamy pierwszy plan poziomu - jest rysowany na tle i na postaciach
        // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

        // gdzie gra bedzie rozmieszczac postacie graczy
        // dla kazdego poziomu musza byc 4 takie punkty, bo kazdy poziom bedzie mozna zagrac
        // majac 4 postacie w druzynie
        level.define_soldier_start_point(140,395);
        level.define_soldier_start_point(278,398);
        level.define_soldier_start_point(229,352);
        level.define_soldier_start_point(278,352);

        // limit jednoczesnie widocznych w grze botow
        level.set_max_creatures(20);
        // level.set_max_creatures(1);

        // Tworzymy siatke poziomu
        var mesh = level.mesh;

        // definiujemy przeszkody(sciany) uniemozliwiajace przejscie
        // define_barrier( x0, y0, x1, y1);
        mesh.define_barrier(54,23, 207,21);
        mesh.define_barrier(207,21, 257,-20);
        mesh.define_barrier(257,-20, 341,-20);
        mesh.define_barrier(341,-20, 459,42);
        mesh.define_barrier(459,42, 525,61);
        mesh.define_barrier(525,61, 651,61);
        mesh.define_barrier(651,61, 651,92);
        mesh.define_barrier(651,92, 736,92);
        mesh.define_barrier(736,92, 736,132);
        mesh.define_barrier(736,132, 692,140);
        mesh.define_barrier(692,140, 690,328);
        mesh.define_barrier(690,328, 820,328);
        mesh.define_barrier(820,328, 820,380);
        mesh.define_barrier(820,380, 770,380);
        mesh.define_barrier(770,380, 740,402);
        mesh.define_barrier(740,402, 714,572);
        mesh.define_barrier(714,572, 575,547);
        mesh.define_barrier(575,547, 397,582);
        mesh.define_barrier(397,582, 358,520);
        mesh.define_barrier(358,520, 252,576);
        mesh.define_barrier(252,576, 54,576);
        mesh.define_barrier(54,576, 54,23);
        mesh.define_barrier(521,122, 485,222);
        mesh.define_barrier(485,222, 590,222);
        mesh.define_barrier(590,222, 597,185);
        mesh.define_barrier(597,185, 623,168);
        mesh.define_barrier(623,168, 593,116);
        mesh.define_barrier(593,116, 521,122);
        mesh.define_barrier(209,432, 209,498);
        mesh.define_barrier(209,498, 302,498);
        mesh.define_barrier(302,498, 302,432);
        mesh.define_barrier(302,432, 209,432);
        mesh.define_barrier(282,127, 267,179);
        mesh.define_barrier(267,179, 231,211);
        mesh.define_barrier(231,211, 233,211);
        mesh.define_barrier(233,211, 243,269);
        mesh.define_barrier(243,269, 288,272);
        mesh.define_barrier(288,272, 312,252);
        mesh.define_barrier(312,252, 365,272);
        mesh.define_barrier(365,272, 393,206);
        mesh.define_barrier(393,206, 282,127);

        // definiujemy sciany, uniemozliwiajace strzelanie przez przeszkody
        // define_wall( x0, y0, x1, y1 )
        mesh.define_wall(520,122, 620,168);
        mesh.define_wall(506,178, 592,117);
        mesh.define_wall(209,432, 302,498);
        mesh.define_wall(302,432, 209,498);
        mesh.define_wall(282,127, 365,272);
        mesh.define_wall(243,269, 393,206);

        // dodaje bota juz na starcie gry
        // np.
        // level.place_bot( 300, 100, "Zmutowany_gryzon", params);
        // params to tablica z pozostalymi parametrami jak w definicji fali
        /*
        level.place_bot(300, 300, "Żołnierz_Kameleona", {
          ai: 'stander',
        });
        */

        level.describe_wave(   //1
            // green - prepare time
            {
              timeout: 5, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 13, // czas trwania fazy w sekundach!

              droppings: [
              { x: 340, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 13 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },	
              { x: 420, y: 240, slow: 0.3, injure: 0.3, ttl: 13 * 24 },			  
              ],

              bots: [
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},
			  { x: 280, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 320, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},
			  ],

              marks: [ // strzalki
			 // { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   //2
            // green - prepare time
            {
              timeout: 8, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
				{ x: 430, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 8 * 24, health_add: [25,25], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 430, y: 440, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 8 * 24, health_add: [25,25], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 590, y: 340, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 8 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [
              { x: 150, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 24 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 650, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 24 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
              { x: 130, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 24 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 320, slow: 0.3, injure: 0.3, ttl: 24 * 24 },			  
              ],

              bots: [
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 280, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 320, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},			  
			  ],
              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   //3
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
        { x: 430, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 10 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 290, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 10 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 550, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 10 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 420, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 10 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
				{ x: 740, y:340, src: 'assets/img/strzalki/arrow_left.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!
        
              droppings: [
              { x: 650, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 120, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 650, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 350, y: 400, slow: 0.3, injure: 0.3, ttl: 30 * 24 },			  
              ],

              bots: [
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 363, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 812, y: 363, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'},
			  { x: 812, y: 353, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 363, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   //4
            // green - prepare time
            {
              timeout: 14, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
        { x: 430, y: 75, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 14 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 130, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 14 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 600, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 14 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 420, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 14 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 740, y:340, src: 'assets/img/strzalki/arrow_left.png' },
              ],
            },
            // orange - cautious time
            {
              timeout: 34, // czas trwania fazy w sekundach!

              droppings: [
              { x: 150, y: 330, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 440, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 440, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 640, y: 330, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [15,15] },	
              { x: 420, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 34 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 150, y: 490, slow: 0.3, injure: 0.3, ttl: 34 * 24 },       
              ],

              bots: [
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 812, y: 363, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 280, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 812, y: 353, kind: "Zmutowany_gryzon", count: 1, ai: 'wanderer'},
			  { x: 320, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 346, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},	  
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'}, // było 2
			  { x: 812, y: 353, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 363, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'}, // było 2
			  ],

              marks: [ // strzalki
			  { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
			  { x: 740, y:340, src: 'assets/img/strzalki/arrow_left.png' },
              ],
            },
            // red - amok time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
				{ x: 420, y: 240, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 420, y: 460, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 160, y: 340, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 650, y: 120, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 430, y: 330, slow: 0.3, injure: 0.3, ttl: 20 * 24 }, 
        ],

              bots: [ // boty
			  { x: 300, y: -10, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'}, // było 2
			  { x: 812, y: 353, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 310, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 363, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 290, y: -10, kind: "Zmutowany_gryzon", count: 1, ai: 'amok'},
			  { x: 812, y: 348, kind: "Zmutowany_gryzon", count: 2, ai: 'amok'}, // było 2
              ],

              marks: [ // strzalki
			  ],
            }
        );

        // Dialogi w grze, po prostu tablica do kolejnych obrazkóww z rozmowami
        // jesli w poziomie nie ma dialogow nie umieszczac w ogóle
        level.define_speeches( [
          /*
            'assets/img/story/00/LANG/d/begining/1/1.jpg',
            'assets/img/story/00/LANG/d/begining/1/2.jpg',
            'assets/img/story/00/LANG/d/begining/1/3.jpg',
            'assets/img/story/00/LANG/d/begining/1/4.jpg',
            'assets/img/story/00/LANG/d/begining/1/5.jpg',
            'assets/img/story/00/LANG/d/begining/1/6.jpg',
            'assets/img/story/00/LANG/d/begining/1/7.jpg',
            'assets/img/story/00/LANG/d/begining/1/8.jpg',
            'assets/img/story/00/LANG/d/begining/1/9.jpg',
            'assets/img/story/00/LANG/d/begining/1/10.jpg',
            'assets/img/story/00/LANG/d/begining/1/11.jpg',
            'assets/img/story/00/LANG/d/begining/1/12.jpg',
            'assets/img/story/00/LANG/d/begining/1/13.jpg',
            'assets/img/story/00/LANG/d/begining/1/14.jpg',
            'assets/img/story/00/LANG/d/begining/1/15.jpg',
            'assets/img/story/00/LANG/d/begining/1/16.jpg',
            'assets/img/story/00/LANG/d/begining/1/17.jpg',
            'assets/img/story/00/LANG/d/begining/1/18.jpg',
            'assets/img/story/00/LANG/d/begining/1/19.jpg',
            'assets/img/story/00/LANG/d/begining/1/20.jpg',
            'assets/img/story/00/LANG/d/begining/1/21.jpg',
            'assets/img/story/00/LANG/d/begining/1/22.jpg',
            */

          { background: 'assets/img/story/dialogues/szron_next_exit.png', text: 'level_0_speech_0' },
          { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_0_speech_1' },
          { background: 'assets/img/story/dialogues/szron_ai_next_exit.png', text: 'level_0_speech_2' },
		  { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_0_speech_3' },
		  { background: 'assets/img/story/dialogues/szron_ai_next_exit.png', text: 'level_0_speech_4' },
		  { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_0_speech_5' },
		  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_0_speech_6' },
		  { background: 'assets/img/story/dialogues/szron_next_exit.png', text: 'level_0_speech_7' },
		  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_0_speech_8' },
		  { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_0_speech_9' },
		  { background: 'assets/img/story/dialogues/szron_exit.png', text: 'level_0_speech_10' },
            ]);

        // Dialogi przed fala, pierwszy parametr - numer fali przed ktora ma sie pojawic dialo, drugi parametr
        // jak w dialogach poczatkowych
      //  level.define_wave_speeches( 1, [
       //     'assets/img/levels/speech_0_1.png',
       //     'assets/img/levels/speech_0_2.png',
       //     'assets/img/levels/speech_0_3.png',
       // ]);

        // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazkow z rozmowami
        // jesli w poziomie nie ma dialogow nie umieszczac w ogole
        /*
        level.define_end_speeches( [
            'assets/img/story/00/LANG/d/end/1/1.jpg',
            'assets/img/story/00/LANG/d/end/1/2.jpg',
            'assets/img/story/00/LANG/d/end/1/3.jpg',
            'assets/img/story/00/LANG/d/end/1/4.jpg',
            'assets/img/story/00/LANG/d/end/1/5.jpg',
            'assets/img/story/00/LANG/d/end/1/6.jpg',
            ]);
            */
		level.define_end_speeches( [
			{ background: 'assets/img/story/dialogues/szron_next_exit.png', text: 'level_0_speech_11' },
			{ background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_0_speech_12' },
			{ background: 'assets/img/story/dialogues/szron_ai_next_exit.png', text: 'level_0_speech_13' },
			{ background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_0_speech_14' },
			{ background: 'assets/img/story/dialogues/szron_exit.png', text: 'level_0_speech_15' },
			] );

        // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/tip1_LANG.jpg',
         'assets/img/story/tips/tip2_LANG.jpg',
         'assets/img/story/tips/tip3_LANG.jpg',
         ] );


         //jesli w poziomie nie ma tipow nie umieszczac w ogole
         // level.define_end_tips( [
         //'assets/img/story/00/LANG/t/8.jpg',
         //]);

        // Tipsy przed fala, pierwszy parametr - numer fali przed ktora ma sie pojawic tip, drugi parametr
        // jak w tipsach startowych
        // level.define_wave_tips( 1, [
        // 'assets/img/story/00/LANG/t/5.jpg',
        // ]);

        // Tipsy przed fala, pierwszy parametr - numer fali przed ktora ma sie pojawic tip, drugi parametr
        // jak w tipsach startowych
        // level.define_wave_tips( 3, [
        // 'assets/img/story/00/LANG/t/3.jpg',
        // ]);

        // Tipsy przed fala, pierwszy parametr - numer fali przed ktora ma sie pojawic tip, drugi parametr
        // jak w tipsach startowych
        // level.define_wave_tips( 4, [
        // 'assets/img/story/00/LANG/t/7.jpg',
        //]);

        level.define_prizes( {
        });
        // definiujemy ilosc violek nagrody
        level.define_violki_prize(250); // było 55 //
        level.define_violki_consolation_prize(0); // było 55 //
      }
  );

  // >>>>>>>>>>
  // LEVEL 0 >>
  // >>>>>>>>>>

  // <<<<<<<<<<
  // << LEVEL 1
  // <<<<<<<<<<

  var level_1 = levels.define_level(1);
  level_1.set_name('level_1_name');
  level_1.set_map_position(142, 46);
  level_1.set_desc('level_1_desc');
  level_1.set_previous(0);

  level_1.set_level_data(
    function level_data(level) {
      level.set_id(1);

      level.set_background_image ('assets/img/levels/sopocka_ulica.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // dochodzacy zolniez - parametry
      // id - karta postaci, liczona od zera
      // nawa postaci z pliku soldiers.js
      // opcjonalnie założona broń
      // opcjonalnie założony armour
      // 4 * opcjonalnie item w plecaku
      level.add_survivor(1, "Wojownik", "Gdański trójząb", null, null, null);

      level.define_soldier_start_point(660,250); // było (694,100)
      level.define_soldier_start_point(660,340); // było (646,100)
      level.define_soldier_start_point(700,250); // było (385,100)
      level.define_soldier_start_point(700,370); // było (330,100)

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,44, 835,564);
    mesh.define_barrier(835,564, 416,564);
    mesh.define_barrier(416,564, 342,645);
    mesh.define_barrier(342,645, 308,645);
    mesh.define_barrier(308,645, 278,554);
    mesh.define_barrier(278,554, 160,554);
    mesh.define_barrier(160,554, 210,433);
    mesh.define_barrier(210,433, 140,350);
    mesh.define_barrier(140,350, 184,301);
    mesh.define_barrier(184,301, 159,280);
    mesh.define_barrier(159,280, 100,280);
    mesh.define_barrier(100,280, 142,236);
    mesh.define_barrier(142,236, 30,142);
    mesh.define_barrier(30,142, -40,142);
    mesh.define_barrier(-40,142, -40,34);
    mesh.define_barrier(-40,34, 835,34);
    mesh.define_barrier(490,154, 446,301);
    mesh.define_barrier(446,301, 508,418);
    mesh.define_barrier(508,418, 460,452);
    mesh.define_barrier(460,452, 486,516);
    mesh.define_barrier(486,516, 554,472);
    mesh.define_barrier(562,131, 512,82);
    mesh.define_barrier(512,82, 484,110);
    mesh.define_barrier(484,110, 528,160);
    mesh.define_barrier(528,160, 490,154);
    mesh.define_barrier(562,131, 648,252);
    mesh.define_barrier(554,472, 648,252);
    
    mesh.define_wall(140,350, 184,301);
    mesh.define_wall(142,236, 30,142);
    mesh.define_wall(490,154, 508,418);
    mesh.define_wall(596,182, 446,301);
    mesh.define_wall(140,350, 210,433);
    
    level.define_body(650,350, "Mutant");
    level.define_body(690,350, "Mutant");
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      /*level.define_speeches( [
          'assets/img/story/01/LANG/d/begining/1/1.jpg',
          'assets/img/story/01/LANG/d/begining/1/2.jpg',
          'assets/img/story/01/LANG/d/begining/1/3.jpg',
      'assets/img/story/01/LANG/d/begining/1/4.jpg',
      'assets/img/story/01/LANG/d/begining/1/5.jpg',
      'assets/img/story/01/LANG/d/begining/1/6.jpg',
      'assets/img/story/01/LANG/d/begining/1/7.jpg',
      'assets/img/story/01/LANG/d/begining/1/8.jpg',
      'assets/img/story/01/LANG/d/begining/1/9.jpg',
      'assets/img/story/01/LANG/d/begining/1/10.jpg',
      'assets/img/story/01/LANG/d/begining/1/11.jpg',
      'assets/img/story/01/LANG/d/begining/1/12.jpg',
      'assets/img/story/01/LANG/d/begining/1/13.jpg',
      'assets/img/story/01/LANG/d/begining/1/14.jpg',
      'assets/img/story/01/LANG/d/begining/1/15.jpg',
      'assets/img/story/01/LANG/d/begining/1/16.jpg',
      'assets/img/story/01/LANG/d/begining/1/17.jpg',
      'assets/img/story/01/LANG/d/begining/1/18.jpg',
      'assets/img/story/01/LANG/d/begining/1/19.jpg',
      'assets/img/story/01/LANG/d/begining/1/20.jpg',
      'assets/img/story/01/LANG/d/begining/1/21.jpg',
      'assets/img/story/01/LANG/d/begining/1/22.jpg',
      'assets/img/story/01/LANG/d/begining/1/23.jpg',
      'assets/img/story/01/LANG/d/begining/1/24.jpg',
      'assets/img/story/01/LANG/d/begining/1/25.jpg',
      'assets/img/story/01/LANG/d/begining/1/26.jpg',
      'assets/img/story/01/LANG/d/begining/1/27.jpg',
      'assets/img/story/01/LANG/d/begining/1/28.jpg',
      'assets/img/story/01/LANG/d/begining/1/29.jpg',
      'assets/img/story/01/LANG/d/begining/1/30.jpg',
      'assets/img/story/01/LANG/d/begining/1/31.jpg',
      'assets/img/story/01/LANG/d/begining/1/32.jpg',
      'assets/img/story/01/LANG/d/begining/1/33.jpg',
      'assets/img/story/01/LANG/d/begining/1/33.jpg',  
      ]);*/
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_1_speech_0' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_1_speech_1' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_1_speech_2' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_1_speech_3' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_1_speech_4' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_1_speech_5' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_1_speech_6' },
	  { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_1_speech_7' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_8' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_1_speech_9' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_10' },
	  { background: 'assets/img/story/dialogues/szron_ai_next_exit.png', text: 'level_1_speech_11' },
	  { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_1_speech_12' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_13' },
	  { background: 'assets/img/story/dialogues/szron_kruk_next_exit.png', text: 'level_1_speech_14' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_15' },
	  { background: 'assets/img/story/dialogues/olaf_kruk_next_exit.png', text: 'level_1_speech_16' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_17' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_18' },
	  { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'level_1_speech_19' },
	  ] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      /*level.define_end_speeches( [
          'assets/img/story/01/LANG/d/end/1/1.jpg',
          'assets/img/story/01/LANG/d/end/1/2.jpg',
          'assets/img/story/01/LANG/d/end/1/3.jpg',
      'assets/img/story/01/LANG/d/end/1/4.jpg',
      'assets/img/story/01/LANG/d/end/1/5.jpg',
      'assets/img/story/01/LANG/d/end/1/6.jpg',
      'assets/img/story/01/LANG/d/end/1/7.jpg',
      'assets/img/story/01/LANG/d/end/1/8.jpg', 
      'assets/img/story/01/LANG/d/end/1/9.jpg',
      'assets/img/story/01/LANG/d/end/1/10.jpg',  
      ]);*/
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_20' },
	  { background: 'assets/img/story/dialogues/szron_kruk_next_exit.png', text: 'level_1_speech_21' },
	  { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_1_speech_22' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_1_speech_23' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_1_speech_24' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_1_speech_25' },
	  { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'level_1_speech_26' },
	  ] );
    
     // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/tip5_LANG.jpg',
     'assets/img/story/tips/tip6_LANG.jpg',
        ]);


      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png' },
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 23, // czas trwania fazy w sekundach!

              droppings: [
                { x: 740, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 740, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [5,10], ammo_add: [0.1, 0.25], viols_add: [10,10] },
              ],

              bots: [
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
                { x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 65, kind: "Mutant", count: 1, ai: 'wanderer'},
                { x: 810, y: 535, kind: "Mutant", count: 1, ai: 'wanderer'},
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
        { x: 540, y: 65, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 540, y: 530, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 430, y: 250, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [35,35], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 330, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
        { x: 700, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 740, y: 275, src: 'assets/img/strzalki/arrow_left.png' },
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 28, // czas trwania fazy w sekundach!

              droppings: [
                { x: 720, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [5,10], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 180, y: 240, slow: 0.3, injure: 0.3, ttl: 28 * 24 },
              ],

              bots: [
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
                { x: 810, y: 60, kind: "Mutant", count: 1, ai: 'wanderer'},
				{ x: 810, y: 525, kind: "Mutant", count: 1, ai: 'wanderer'},
				{ x: 810, y: 65, kind: "Mutant", count: 1, ai: 'amok'},
                { x: 810, y: 535, kind: "Mutant", count: 1, ai: 'amok'},
                { x: 810, y: 275, kind: "Ślepy Mutant", count: 1, ai: 'cruiser', params: { x: 720, y: 280, r: 50 } },
				{ x: 810, y: 265, kind: "Ślepy Mutant", count: 1, ai: 'cruiser', params: { x: 720, y: 280, r: 50 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 17, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 540, y: 65, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 540, y: 530, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 400, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [90,90], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 210, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [25,25], ammo_add: [0.4, 0.8], viols_add: [10,10] },
			  { x: 300, y: 90, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
			  { x: 375, y: 500, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png' },
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
                { x: 720, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 165, y: 345, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,10], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 460, y: 400, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [10,20], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 450, y: 140, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,10], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 300, y: 355, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],

              bots: [
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 350, y: 200, r: 150 } },
				{ x: -10, y: 65, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 350, y: 200, r: 150 } },
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 65, kind: "Mutant", count: 2, ai: 'amok'},
                { x: 810, y: 535, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
                { x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 335, y: 610, kind: "Szczur", count: 3, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
				{ x: 340, y: 525, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 426, y: 267, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 720, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 315, y: 82, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 360, y: 70, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [25,25], ammo_add: [0.5, 0.9], viols_add: [10,10] },
				{ x: 200, y: 500, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [25,25], ammo_add: [0.5, 0.9], viols_add: [10,10] },
				{ x: 720, y: 100, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
				{ x: 720, y: 450, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
                { x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png' },
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 750, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 750, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 210, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 340, y: 540, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 350, y: 200, r: 150 } },			
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 65, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 65, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 350, y: 200, r: 150 } },
                { x: 810, y: 535, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 55, kind: "Mutant", count: 1, ai: 'amok'},
                { x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 535, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 80, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 350, y: 200, r: 150 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
				{ x: 400, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 700, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 700, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 470, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.5, 0.85], viols_add: [10,10] },
				{ x: 460, y: 130, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [25,25], ammo_add: [0.5, 0.85], viols_add: [10,10] },
				{ x: 160, y: 253, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
				{ x: 290, y: 492, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png' },
                { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [
                { x: 160, y: 250, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 180, y: 355, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 450, y: 133, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 450, y: 400, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 340, y: 280, slow: 0.3, injure: 0.3, ttl: 25 * 24 },
              ],

              bots: [
			{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 65, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 80, kind: "Mutant", count: 1, ai: 'amok'},  
			{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 80, kind: "Mutant", count: 1, ai: 'amok'}, 		
			{ x: 330, y: 610, kind: "Mutant", count: 1, ai: 'wanderer'},
        
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 6
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
        { x: 680, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 680, y: 460, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 430, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 210, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 330, y: 260, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [25,25], ammo_add: [0.4, 0.85], viols_add: [10,10] },
		{ x: 214, y: 517, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [25,25], ammo_add: [0.4, 0.85], viols_add: [10,10] },
        { x: 460, y: 140, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
        { x: 460, y: 390, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png' },
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png' },
                { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 50, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 200, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 475, y: 390, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 470, y: 140, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 670, y: 310, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 330, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			    { x: 700, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 180, y: 345, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
				{ x: 700, y: 490, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
			{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 310, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 65, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 330, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 80, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'pathfinder', params: { // prawo 
                      0: { x: 680, y: 60, next: 1 },
                      1: { x: 400, y: 60, next: 2 }, 
                      2: { x: 400, y: 540, next: 3 },
                      3: { x: 680, y: 530, next: 1 },
            },
                   },
			{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 320, y: 280, r: 100 } },
			{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'cruiser', params: { x: 320, y: 280, r: 100 } },
			{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'pathfinder', params: { // prawo 
                      0: { x: 680, y: 530, next: 1 },
                      1: { x: 680, y: 60, next: 2 }, 
                      2: { x: 400, y: 60, next: 3 },
                      3: { x: 400, y: 540, next: 1 },
            },
                   },
			{ x: 335, y: 610, kind: "Szczur_Kolos", count: 2, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 7
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
				{ x: 110, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 160, y: 250, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 180, y: 350, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 200, y: 510, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 440, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 460, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 460, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 700, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 700, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 320, y: 100, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [25,25], ammo_add: [0.45, 0.85], viols_add: [10,10] },
				{ x: 320, y: 340, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [25,25], ammo_add: [0.45, 0.85], viols_add: [10,10] },
				{ x: 420, y: 285, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 436, y: 216, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 643, y: 381, attack: 0.15, defence: 0.15, speed: 0.15, ttl: 20 * 24 },
				{ x: 639, y: 172, attack: 0.15, defence: 0.15, speed: 0.15, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 740, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png'},
                { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
                { x: 200, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 200, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 700, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 700, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 460, y: 140, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 460, y: 400, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			    { x: 330, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 330, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 700, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 200, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 430, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 330, y: 200, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
				{ x: 700, y: 170, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
			{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 65, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 330, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: -10, y: 80, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 335, y: 610, kind: "Szczur", count: 3, ai: 'amok'},
			{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 810, y: 50, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 810, y: 50, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 810, y: 505, kind: "Mutant", count: 1, ai: 'wanderer'},
			{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 810, y: 265, kind: "Mutant", count: 1, ai: 'amok'},
			{ x: 810, y: 265, kind: "Mutant", count: 1, ai: 'wanderer'}, 
			{ x: 335, y: 610, kind: "Szczur_Kolos", count: 2, ai: 'amok'},		
              ],

              marks: [ // strzalki
				{ x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 740, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png'},
                { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ],
            },
            // red - amok time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki ]
        { x: 720, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
        { x: 720, y: 520, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
        { x: 440, y: 140, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 440, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 120, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [5,5] },
        { x: 200, y: 520, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 710, y: 150, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 45 * 24, health_add: [25,25], ammo_add: [0.55, 0.9], viols_add: [10,10] },
        { x: 710, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 45 * 24, health_add: [25,25], ammo_add: [0.55, 0.9], viols_add: [10,10] },
        { x: 310, y: 260, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 45 * 24, health_add: [25,25], ammo_add: [0.55, 0.9], viols_add: [10,10] },
        { x: 350, y: 350, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
		{ x: 710, y: 300, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [ // boty
	  { x: -10, y: 70, kind: "Szczur", count: 1, ai: 'amok'},
      { x: 320, y: 610, kind: "Szczur", count: 1, ai: 'amok'},
	  { x: 810, y: 505, kind: "Szczur", count: 1, ai: 'amok'},
      { x: 810, y: 275, kind: "Szczur", count: 1, ai: 'amok'},
      { x: 810, y: 60, kind: "Szczur", count: 1, ai: 'amok'},
	  { x: -10, y: 70, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
      { x: 320, y: 610, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
	  { x: 810, y: 505, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
      { x: 810, y: 275, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
      { x: 810, y: 60, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
      { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 50, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 505, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 265, kind: "Mutant", count: 1, ai: 'amok'},
	  { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
      { x: 810, y: 50, kind: "Mutant", count: 1, ai: 'amok'},
      //{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
      //{ x: 810, y: 505, kind: "Mutant", count: 1, ai: 'amok'},
      //{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
      //{ x: 810, y: 265, kind: "Mutant", count: 1, ai: 'amok'},
              ],

              marks: [ // strzalki
        ],
            }
        );
    
      level.define_prizes( {
      });

      level.define_violki_prize(350);
    }
  );

  // >>>>>>>>>>
  // LEVEL 1 >>
  // >>>>>>>>>>
  
   // <<<<<<<<<<
  // << LEVEL 2
  // <<<<<<<<<<

  // tworzmy nowy poziom w nawiazie podajemy jego numer porzadkowy
  var level_2 = levels.define_level(2);
  // nazwa pojawiajaca sie na mapie
  level_2.set_name("level_2_name");
  // lewy dolny rog napisu
  level_2.set_map_position(172, 41);
  // pierwsza linijka opisu poziomu
  level_2.set_desc('level_2_desc');
  level_2.set_previous(1);
  // opisujemy szczegóły mapy poziomu
  level_2.set_level_data(
    function level_data(level) {
      // powtarzamy numer porządkowy - koniecznie
      level.set_id(2);

      // ustawiamy tlo poziomu
      level.set_background_image ('assets/img/levels/gdanska_fabryka.png');
      // (opcjonalnie) ustawiamy pierwszy plan poziomu - jest rysowany na tle i na postaciach
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // ustawimy kolejne punkty z ktorych moga startowac boty, w nawiazie podajemy wspolrzedne tych punktow
      // powinny byc poza mapa (lub w miejscu przykrytym pierwszym planem) tak aby gracz nie zobaczyl
      // botow pojawiajacych sie z nikad

      // gdzie gra bedzie rozmieszczac postacie graczy
      // dla kazdego poziomu musza byc 4 takie punkty, bo kazdy poziom bedzie mozna zagrac
      // majac 4 postacie w druzynie
      level.define_soldier_start_point(379,388);
      level.define_soldier_start_point(448,388);
      level.define_soldier_start_point(379,439);
      level.define_soldier_start_point(448,439);

      // limit jednoczesnie widocznych w grze botow
      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      // Tworzymy siatke poziomu
      var mesh = level.mesh;

    mesh.define_barrier(20,20, 277,20);
    mesh.define_barrier(277,20, 277,-40);
    mesh.define_barrier(277,-40, 520,-40);
    mesh.define_barrier(520,-40, 520,20);
    mesh.define_barrier(520,20, 780,20);
    mesh.define_barrier(780,20, 780,580);
    mesh.define_barrier(780,580, 638,580);
    mesh.define_barrier(638,580, 674,509);
    mesh.define_barrier(674,509, 674,475);
    mesh.define_barrier(674,475, 652,475);
    mesh.define_barrier(652,475, 652,413);
    mesh.define_barrier(652,413, 602,366);
    mesh.define_barrier(602,366, 559,366);
    mesh.define_barrier(559,366, 559,471);
    mesh.define_barrier(559,471, 540,488);
    mesh.define_barrier(540,488, 540,580);
    mesh.define_barrier(540,580, 470,580);
    mesh.define_barrier(470,580, 470,650);
    mesh.define_barrier(470,650, 270,650);
    mesh.define_barrier(270,650, 270,580);
    mesh.define_barrier(270,580, 20,580);
    mesh.define_barrier(20,580, 20,20);
    mesh.define_barrier(160,92, 242,92);
    mesh.define_barrier(242,92, 242,122);
    mesh.define_barrier(242,122, 294,146);
    mesh.define_barrier(294,146, 294,440);
    mesh.define_barrier(294,440, 216,440);
    mesh.define_barrier(216,440, 216,521);
    mesh.define_barrier(216,521, 160,521);
    mesh.define_barrier(160,521, 160,92);
    mesh.define_barrier(446,264, 446,328);
    mesh.define_barrier(446,328, 380,328);
    mesh.define_barrier(380,328, 380,264);
    mesh.define_barrier(380,264, 446,264);
    mesh.define_barrier(566,92, 584,92);
    mesh.define_barrier(584,92, 652,154);
    mesh.define_barrier(652,154, 652,255);
    mesh.define_barrier(652,255, 604,255);
    mesh.define_barrier(604,255, 533,220);
    mesh.define_barrier(533,220, 533,136);
    mesh.define_barrier(533,136, 566,92);
    
    mesh.define_wall(533,136, 652,255);
    mesh.define_wall(533,220, 652,154);
    mesh.define_wall(559,366, 638,579);
    mesh.define_wall(380,264, 446,328);
    mesh.define_wall(446,264, 380,328);
    mesh.define_wall(160,521, 294,146);
    mesh.define_wall(160,92, 294,440);
    mesh.define_wall(559,471, 652,413);
    
   // Dialogi w grze, po prostu tablica do kolejnych obrazkóww z rozmowami
     // jesli w poziomie nie ma dialogow nie umieszczac w ogóle
     /*
      level.define_speeches( [
          'assets/img/story/02/LANG/d/begining/1/1.jpg',
          'assets/img/story/02/LANG/d/begining/1/2.jpg',
          'assets/img/story/02/LANG/d/begining/1/3.jpg',
      'assets/img/story/02/LANG/d/begining/1/4.jpg',
      'assets/img/story/02/LANG/d/begining/1/5.jpg',
      
      ]);
      */
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_2_speech_0' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_2_speech_1' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_2_speech_2' },
	  { background: 'assets/img/story/dialogues/szron_olaf_exit.png', text: 'level_2_speech_3' },
	  ] );
	  
	  
    // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazkow z rozmowami
      // jesli w poziomie nie ma dialogow nie umieszczac w ogole
      /*
   level.define_end_speeches( [
          'assets/img/story/02/LANG/d/end/1/1.jpg',
          'assets/img/story/02/LANG/d/end/1/2.jpg',
      'assets/img/story/02/LANG/d/end/1/3.jpg',
      'assets/img/story/02/LANG/d/end/1/4.jpg',
      'assets/img/story/02/LANG/d/end/1/5.jpg',
      'assets/img/story/02/LANG/d/end/1/6.jpg',
      'assets/img/story/02/LANG/d/end/1/7.jpg',
      ]);
      */
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_2_speech_4' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_2_speech_5' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_2_speech_6' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_2_speech_7' },
	  { background: 'assets/img/story/dialogues/szron_olaf_exit.png', text: 'level_2_speech_8' },
	  ] );
    
     // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/tip7_LANG.jpg',
        ]);
    

  // level.define_tips( [
   //         'assets/img/story/02/LANG/t/1.jpg',
   //     ]);
    
      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
  
      level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
                { x: 390, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 415, y: 230, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 200, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 570, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
              ],

              bots: [
        { x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 340, y: 390, r: 50 } },
        { x: 440, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 440, y: 70, next: 1 },
                      1: { x: 720, y: 70, next: 2 }, 
                      2: { x: 720, y: 300, next: 1 },
                      },
                },
        { x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 380, y: 70, next: 1 },
                      1: { x: 90, y: 70, next: 2 }, 
                      2: { x: 90, y: 300, next: 1 },
                      },
                },
        { x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 500, y: 390, r: 50 } },
        { x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 410, y: 190, r: 50 } },   
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 330, y: 190, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 330, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 480, y: 190, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 480, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 410, y: 360, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [20,20], ammo_add: [0.5, 0.8], viols_add: [10,10] },
			  { x: 500, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			  { x: 340, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          //{ x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 710, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 415, y: 360, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 380, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 410, y: 220, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

               bots: [
				{ x: 400, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'cruiser', params: { x: 330, y: 160, r: 30 } },
				{ x: 380, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 160, r: 30 } },
				{ x: 420, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'cruiser', params: { x: 330, y: 160, r: 30 } },
				{ x: 400, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'cruiser', params: { x: 500, y: 160, r: 30 } },
				{ x: 360, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
				{ x: 300, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'cruiser', params: { x: 666, y: 267, r: 50 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 320, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 580, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 250, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 100, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 715, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 335, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [20,20], ammo_add: [0.65, 0.9], viols_add: [10,10] },
			  { x: 100, y: 70, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			  { x: 720, y: 520, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 410, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 410, y: 470, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 330, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 530, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 710, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 720, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 580, y: 300, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
				{ x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 150, r: 30 } },
				{ x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 495, y: 150, r: 30 } },
				{ x: 400, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'cruiser', params: { x: 340, y: 420, r: 30 } },
				{ x: 380, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'cruiser', params: { x: 480, y: 420, r: 30 } },
				{ x: 400, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer'},
				{ x: 380, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer'},
				{ x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 420, y: 70, next: 1 },
                      1: { x: 720, y: 70, next: 2 }, 
                      2: { x: 720, y: 500, next: 1 },
                      },
                },
        { x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 380, y: 70, next: 1 },
                      1: { x: 90, y: 70, next: 2 }, 
                      2: { x: 90, y: 500, next: 1 },
                      },
                },
        { x: 360, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 220, y: 55, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 220, y: 550, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 600, y: 60, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 600, y: 330, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 410, y: 200, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [95,95], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 90, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [20,20], ammo_add: [0.5, 1.0], viols_add: [10,10] },
			  { x: 730, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [20,20], ammo_add: [0.5, 1.0], viols_add: [10,10] },
			  { x: 340, y: 165, attack: 0.22, defence: 0.22, speed: 0.22, ttl: 20 * 24 },
			  { x: 500, y: 410, attack: 0.22, defence: 0.22, speed: 0.22, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 44, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 730, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 330, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 720, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 80, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 720, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 100, y: 300, slow: 0.3, injure: 0.3, ttl: 44 * 24 },
				{ x: 500, y: 300, slow: 0.3, injure: 0.3, ttl: 44 * 24 },
              ],

              bots: [
        { x: 360, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
        { x: 440, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 260, next: 3 },
                      3: { x: 720, y: 430, next: 4 },
            4: { x: 720, y: 100, next: 3 },
                    },
                },
		{ x: 350, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
        { x: 450, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 260, next: 3 },
                      3: { x: 720, y: 430, next: 4 },
            4: { x: 720, y: 100, next: 3 },
                    },
                },
		{ x: 350, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
        { x: 430, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 260, next: 3 },
                      3: { x: 720, y: 430, next: 4 },
            4: { x: 720, y: 100, next: 3 },
                    },
                },
		{ x: 360, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
        { x: 440, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 260, next: 3 },
                      3: { x: 720, y: 430, next: 4 },
            4: { x: 720, y: 100, next: 3 },
                    },
                },
        { x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 380, r: 70 } },
        { x: 410, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 380, r: 70 } },
        { x: 410, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 520, y: 380, r: 70 } },
        { x: 400, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 520, y: 380, r: 70 } },
        { x: 390, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 410, y: 130, r: 70 } },
        { x: 390, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 410, y: 130, r: 70 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 400, y: 60, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 390, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 100, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 700, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 335, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [25,25], ammo_add: [0.6, 0.8], viols_add: [10,10] },
			  { x: 480, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [25,25], ammo_add: [0.6, 0.8], viols_add: [10,10] },
			  { x: 480, y: 185, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
                { x: 410, y: 135, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 410, y: 490, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 730, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 50, y: 50, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 50, y: 550, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 740, y: 53, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 740, y: 538, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 500, y: 300, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
				{ x: 330, y: 300, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [
				{ x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 415, y: 150, r: 50 } },
				{ x: 400, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'cruiser', params: { x: 340, y: 420, r: 50 } },
				{ x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 495, y: 150, r: 50 } },
				{ x: 420, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'cruiser', params: { x: 480, y: 420, r: 50 } },
				{ x: 400, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 495, y: 150, r: 50 } },
				{ x: 380, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 420, r: 50 } },
				{ x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 420, y: 70, next: 1 },
                      1: { x: 720, y: 70, next: 2 }, 
                      2: { x: 720, y: 500, next: 1 },
                      },
                },
				{ x: 360, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
				{ x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 380, y: 70, next: 1 },
                      1: { x: 90, y: 70, next: 2 }, 
                      2: { x: 90, y: 500, next: 1 },
                      },
                },
				{ x: 440, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 260, next: 3 },
                      3: { x: 720, y: 430, next: 2 },
                    },
                },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 6
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 100, y: 125, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 100, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 700, y: 125, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 410, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 410, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 315, y: 175, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [25,25], ammo_add: [0.6, 0.8], viols_add: [10,10] },
			  { x: 530, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [25,25], ammo_add: [0.6, 0.8], viols_add: [10,10] },
			  { x: 700, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			  { x: 100, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 730, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 730, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 410, y: 220, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 280, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 240, y: 470, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 585, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 300, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
				{ x: 730, y: 300, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [

          { x: 440, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 310, next: 3 },
                      3: { x: 720, y: 430, next: 2 },
                    },
                },
        { x: 440, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 310, next: 3 },
                      3: { x: 720, y: 430, next: 2 },
                    },
                },
        { x: 440, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 310, next: 3 },
                      3: { x: 720, y: 60, next: 2 },
                    },
                },
        { x: 440, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 310, next: 3 },
                      3: { x: 720, y: 60, next: 2 },
                    },
                },
        { x: 360, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
        { x: 360, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 100, y: 70, next: 3 },
                    },
                },
        { x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 340, y: 350, r: 50 } },
        { x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 510, y: 420, r: 50 } },
        { x: 400, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 350, r: 50 } },
        { x: 400, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 510, y: 420, r: 50 } },
        { x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 420, y: 180, r: 50 } },
        { x: 400, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 420, y: 180, r: 50 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 7
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 400, y: 60, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 390, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 245, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 510, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 275, y: 110, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 510, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 335, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [25,25], ammo_add: [0.6, 0.8], viols_add: [10,10] },
			  { x: 480, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [25,25], ammo_add: [0.6, 0.8], viols_add: [10,10] },
			  { x: 100, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			  { x: 415, y: 370, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			  { x: 700, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 75, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 125, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 75 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 410, y: 125, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 75 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 710, y: 125, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 75 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 450, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 75 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 410, y: 450, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 75 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 710, y: 450, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 75 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 330, y: 300, slow: 0.3, injure: 0.3, ttl: 75 * 24 },
				{ x: 550, y: 300, slow: 0.3, injure: 0.3, ttl: 75 * 24 },
              ],

              bots: [
        { x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 330, y: 150, r: 50 } },
        { x: 400, y: 610, kind: "Mutant_z_magazynu", count: 3, ai: 'cruiser', params: { x: 330, y: 420, r: 50 } },
        { x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 480, y: 150, r: 50 } },
        { x: 420, y: 610, kind: "Mutant_z_magazynu", count: 3, ai: 'cruiser', params: { x: 510, y: 420, r: 50 } },
        { x: 400, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 420, y: 150, r: 50 } },
        { x: 380, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 420, y: 420, r: 50 } },
        { x: 420, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 420, y: 70, next: 1 },
                      1: { x: 720, y: 70, next: 2 }, 
                      2: { x: 720, y: 200, next: 1 },
                      },
                },
        { x: 360, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 300, y: 475, next: 1 },
                      1: { x: 250, y: 475, next: 2 }, 
                      2: { x: 250, y: 550, next: 3 },
                      3: { x: 90, y: 550, next: 4 },
                      4: { x: 90, y: 350, next: 3 },
                    },
                },
        { x: 380, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 380, y: 70, next: 1 },
                      1: { x: 90, y: 70, next: 2 }, 
                      2: { x: 90, y: 200, next: 1 },
                      },
                },
        { x: 440, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 500, y: 430, next: 1 },
                      1: { x: 600, y: 330, next: 2 }, 
                      2: { x: 720, y: 260, next: 3 },
                      3: { x: 720, y: 430, next: 2 },
                    },
                },
              ],

              marks: [ // strzalki
        { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
              { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ],
            },
            // red - amok time
            {
              timeout: 70, // czas trwania fazy w sekundach!

              droppings: [
                { x: 320, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 500, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 320, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 500, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 100, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 100, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 700, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 720, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 100, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 70 * 24, health_add: [5,5], ammo_add: [0.5, 0.85], viols_add: [5,5] },
				{ x: 720, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 70 * 24, health_add: [5,5], ammo_add: [0.5, 0.85], viols_add: [5,5] },
				{ x: 415, y: 350, slow: 0.3, injure: 0.3, ttl: 70 * 24 },
				{ x: 415, y: 220, slow: 0.3, injure: 0.3, ttl: 70 * 24 },
              ],

              bots: [
        { x: 420, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'amok'},
        { x: 420, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'amok'},
        { x: 400, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'amok'},
        { x: 380, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'amok'},
        { x: 410, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
        { x: 400, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            }
        );
   
      // definiujemy nagrody
      // define_prizes( { "Klucz_itemu_1": liczba, "Klucz_itemu_2": liczba, ..., "Klucz_itemu_6": liczba } )
      level.define_prizes( {
       // "Korsarski kordelas": 1,
       // "Lekki kirys śmieciowy": 1,
      });
      // definiujemy ilosc violek nagrody
      level.define_violki_prize(600);
    }
  );

  // >>>>>>>>>>
  // LEVEL 2 >>
  // >>>>>>>>>>
  
   // <<<<<<<<<<
  // << LEVEL 3
  // <<<<<<<<<<

  
  // tworzmy nowy poziom w nawiazie podajemy jego numer porzadkowy
  var level_3 = levels.define_level(3);
  // nazwa pojawiajaca sie na mapie
  level_3.set_name("level_3_name");
  // lewy dolny rog napisu
  level_3.set_map_position(160, 72);
  // pierwsza linijka opisu poziomu
  level_3.set_desc('level_3_desc');
  level_3.set_previous(1);
  // opisujemy szczegoly mapy poziomu
  level_3.set_level_data(
    function level_data(level) {
      // powtarzamy numer porzadkowy - koniecznie
      level.set_id(3);

      // ustawiamy tlo poziomu
      level.set_background_image ('assets/img/levels/gdanskie_wybrzeze.png');
      // (opcjonalnie) ustawiamy pierwszy plan poziomu - jest rysowany na tle i na postaciach
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // ustawimy kolejne punkty z ktorych moga startowac boty, w nawiazie podajemy wspolrzedne tych punktow
      // powinny byc poza mapa (lub w miejscu przykrytym pierwszym planem) tak aby gracz nie zobaczyl
      // botow pojawiajacych sie z nikad

      // gdzie gra bedzie rozmieszczac postacie graczy
      // dla kazdego poziomu musza byc 4 takie punkty, bo kazdy poziom bedzie mozna zagrac
      // majac 4 postacie w druzynie
      level.define_soldier_start_point(542,284);
      level.define_soldier_start_point(500,284);
      level.define_soldier_start_point(500,332);
      level.define_soldier_start_point(542,332);

      // limit jednoczesnie widocznych w grze botow
      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      // Tworzymy siatke poziomu
      var mesh = level.mesh;

    mesh.define_barrier(612,-40, 612,201);
    mesh.define_barrier(612,201, 688,201);
    mesh.define_barrier(688,201, 688,243);
    mesh.define_barrier(688,243, 800,243);
    mesh.define_barrier(800,243, 800,356);
    mesh.define_barrier(800,356, 612,356);
    mesh.define_barrier(612,356, 612,412);
    mesh.define_barrier(612,412, 458,412);
    mesh.define_barrier(458,412, 368,462);
    mesh.define_barrier(368,462, 469,650);
    mesh.define_barrier(469,650, -40,640);
    mesh.define_barrier(-40,640, -40,-40);
    mesh.define_barrier(-40,-40, 612,-40);
    mesh.define_barrier(169,70, 454,70);
    mesh.define_barrier(454,70, 512,97);
    mesh.define_barrier(512,97, 532,162);
    
    //mesh.define_barrier(564,130, 547,166);
    mesh.define_barrier(532,162, 464,166);
    mesh.define_barrier(464,166, 431,222);
    mesh.define_barrier(431,222, 417,222);
    mesh.define_barrier(417,222, 371,182);
    mesh.define_barrier(371,182, 296,182);
    mesh.define_barrier(296,182, 212,256);
    mesh.define_barrier(212,256, 212,297);
    mesh.define_barrier(212,297, 188,284);
    mesh.define_barrier(188,284, 146,242);
    mesh.define_barrier(146,242, 130,164);
    mesh.define_barrier(130,164, 166,130);
    mesh.define_barrier(166,130, 169,70);
    mesh.define_barrier(66,341, 123,341);
    mesh.define_barrier(123,341, 172,386);
    mesh.define_barrier(172,386, 192,373);
    mesh.define_barrier(192,373, 254,412);
    mesh.define_barrier(254,412, 284,455);
    mesh.define_barrier(284,455, 293,485);
    mesh.define_barrier(293,485, 334,524);
    mesh.define_barrier(334,524, 306,558);
    mesh.define_barrier(66,424, 66,341);
    mesh.define_barrier(66,424, 169,559);
    mesh.define_barrier(169,559, 268,588);
    mesh.define_barrier(306,558, 268,588);
    
    mesh.define_wall(114,424, 284,455);
    mesh.define_wall(192,373, 220,524);
    mesh.define_wall(169,70, 212,297);
    mesh.define_wall(166,130, 512,97);
    mesh.define_wall(454,70, 464,166);
    mesh.define_wall(368,462, 469,620);
    mesh.define_wall(612,201, 688,166);
    
    mesh.define_wall(10,10, 790,10);
    mesh.define_wall(790,10, 790,590);
    mesh.define_wall(790,590, 10,590);
    mesh.define_wall(10,590, 10,10);
  
   // Dialogi w grze, po prostu tablica do kolejnych obrazkóww z rozmowami
     // jesli w poziomie nie ma dialogow nie umieszczac w ogóle
     /*
      level.define_speeches( [
          'assets/img/story/03/LANG/d/begining/1/1.jpg',
          'assets/img/story/03/LANG/d/begining/1/2.jpg',
          'assets/img/story/03/LANG/d/begining/1/3.jpg',
      'assets/img/story/03/LANG/d/begining/1/4.jpg',
      'assets/img/story/03/LANG/d/begining/1/5.jpg',
      'assets/img/story/03/LANG/d/begining/1/6.jpg',
      'assets/img/story/03/LANG/d/begining/1/7.jpg',
      'assets/img/story/03/LANG/d/begining/1/8.jpg',
      'assets/img/story/03/LANG/d/begining/1/9.jpg',
      'assets/img/story/03/LANG/d/begining/1/10.jpg',
      'assets/img/story/03/LANG/d/begining/1/11.jpg',
      'assets/img/story/03/LANG/d/begining/1/12.jpg',
      'assets/img/story/03/LANG/d/begining/1/13.jpg',
      'assets/img/story/03/LANG/d/begining/1/14.jpg',
      'assets/img/story/03/LANG/d/begining/1/15.jpg',
      'assets/img/story/03/LANG/d/begining/1/16.jpg',
      'assets/img/story/03/LANG/d/begining/1/17.jpg',
      'assets/img/story/03/LANG/d/begining/1/18.jpg',
      
      
      ]);
      */
	  
	   level.define_speeches( [
	   { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_3_speech_0' },
	   { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_3_speech_1' },
	   { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_3_speech_2' },
	   { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'level_3_speech_3' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_4' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_5' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_6' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_7' },
	   { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_3_speech_8' },
	   { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'level_3_speech_9' },
	   ] );
    // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazkow z rozmowami
      // jesli w poziomie nie ma dialogow nie umieszczac w ogole
      /*
      level.define_end_speeches( [
          'assets/img/story/03/LANG/d/end/1/1.jpg',
          'assets/img/story/03/LANG/d/end/1/2.jpg',
          'assets/img/story/03/LANG/d/end/1/3.jpg',
      'assets/img/story/03/LANG/d/end/1/4.jpg',
      'assets/img/story/03/LANG/d/end/1/5.jpg',
      'assets/img/story/03/LANG/d/end/1/6.jpg',
      'assets/img/story/03/LANG/d/end/1/7.jpg',
      'assets/img/story/03/LANG/d/end/1/8.jpg',
      'assets/img/story/03/LANG/d/end/1/9.jpg',
      'assets/img/story/03/LANG/d/end/1/10.jpg',
      'assets/img/story/03/LANG/d/end/1/11.jpg',
      'assets/img/story/03/LANG/d/end/1/12.jpg',
      'assets/img/story/03/LANG/d/end/1/13.jpg',
      'assets/img/story/03/LANG/d/end/1/14.jpg',
      'assets/img/story/03/LANG/d/end/1/15.jpg',
      'assets/img/story/03/LANG/d/end/1/16.jpg',
      'assets/img/story/03/LANG/d/end/1/17.jpg',
      'assets/img/story/03/LANG/d/end/1/18.jpg',
      ]);
      */
      
	   level.define_end_speeches( [
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_14' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_15' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_16' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_17' },
	   { background: 'assets/img/story/dialogues/olaf_kruk_next_exit.png', text: 'level_3_speech_18' },
	   { background: 'assets/img/story/dialogues/kruk_szron_next_exit.png', text: 'level_3_speech_19' },
	   { background: 'assets/img/story/dialogues/szron_kruk_exit.png', text: 'level_3_speech_20' },
	   ] );
        // Dialogi przed fala, pierwszy parametr - numer fali przed która ma sie pojawić działo, 
      //drugi parametr jak dialogach początkowych
      /*
      level.define_wave_speeches( 9 ,
    [
           'assets/img/story/03/LANG/d/mid/1.jpg',
           'assets/img/story/03/LANG/d/mid/2.jpg',
           'assets/img/story/03/LANG/d/mid/3.jpg',
      ]);
      */
    
	level.define_wave_speeches( 9 ,
    [
	{ background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_3_speech_10' },
		{ background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_3_speech_11' },
		{ background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_3_speech_12' },
		{ background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'level_3_speech_13' },
		] );
		
     // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/tip8_LANG.jpg',
        ]);
    
    
      level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 600, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 70, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
              ],

              bots: [
			{ x: -10, y: 280, kind: "Korsarz_biegacz", count: 2, ai: 'amok'},
			{ x: -10, y: 290, kind: "Korsarz", count: 1, ai: 'amok'},
			{ x: -10, y: 280, kind: "Korsarz", count: 2, ai: 'amok'}, 
			{ x: -10, y: 300, kind: "Korsarz", count: 1, ai: 'amok'},         
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );  
    
    level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 12, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 300, y: 215, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 335, y: 430, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },	
				{ x: 400, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 12 * 24, health_add: [70,70], ammo_add: [0.3, 0.75], viols_add: [10,10] },
				{ x: 600, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 12 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
				{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [
                { x: 130, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 550, y: 200, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 360, y: 550, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 340, y: 220, slow: 0.3, injure: 0.3, ttl: 20 * 24 },
              ],

              bots: [
			{ x: 360, y: 610, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},          
			{ x: -10, y: 300, kind: "Korsarz", count: 2, ai: 'amok'}, 
			{ x: 360, y: 610, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
			{ x: -10, y: 320, kind: "Korsarz", count: 2, ai: 'amok'},
			{ x: -10, y: 310, kind: "Korsarz", count: 2, ai: 'amok'},           
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 570, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 330, y: 430, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 620, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 100, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 370, y: 550, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 260, y: 240, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [5,5], ammo_add: [0.5, 0.8], viols_add: [10,10] },
				{ x: 500, y: 235, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
				{ x: 250, y: 340, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [
                { x: 670, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [13,13] },
				{ x: 300, y: 210, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [12,12] },
				{ x: 360, y: 430, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [12,12] },
				{ x: 470, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [12,12] },
				{ x: 50, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [11,11] },
				{ x: 550, y: 200, slow: 0.3, injure: 0.3, ttl: 25 * 24 },
				{ x: 320, y: 360, slow: 0.3, injure: 0.3, ttl: 25 * 24 },
              ],

              bots: [    
			{ x: -10, y: 290, kind: "Korsarz", count: 2, ai: 'amok'}, 
			{ x: -10, y: 300, kind: "Korsarz", count: 2, ai: 'amok'},
			{ x: 590, y: -10, kind: "Korsarz", count: 2, ai: 'amok'},
			{ x: 590, y: -10, kind: "Korsarz_7", count: 2, ai: 'amok'},
			{ x: -10, y: 310, kind: "Korsarz", count: 2, ai: 'amok'},       
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 60, y: 60, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 60, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 300, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 580, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [115,115], ammo_add: [0.5, 0.8], viols_add: [10,10] },
				{ x: 350, y: 335, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.4, 0.8], viols_add: [10,10] },	
				{ x: 335, y: 450, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [115,115], ammo_add: [0.3, 0.75], viols_add: [10,10] },
				{ x: 570, y: 230, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 570, y: 340, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        //{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 580, y: 65, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 360, y: 550, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 60, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 40, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 480, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 310, y: 220, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
				{ x: 540, y: 370, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],

              bots: [
				{ x: 590, y: -10, kind: "Korsarz_biegacz", count: 2, ai: 'amok'}, 
				{ x: 360, y: 610, kind: "Korsarz_biegacz", count: 2, ai: 'amok'}, 
				{ x: 590, y: -10, kind: "Korsarz", count: 2, ai: 'amok'}, 
				{ x: 360, y: 610, kind: "Korsarz", count: 2, ai: 'amok'},
				{ x: 580, y: -10, kind: "Korsarz", count: 1, ai: 'amok'}, 
				{ x: 380, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
                { x: 340, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},
                { x: 350, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},       
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 300, y: 230, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 550, y: 230, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 280, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 550, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 620, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 390, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.5, 0.6], viols_add: [10,10] },
				{ x: 400, y: 230, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.5, 0.6], viols_add: [10,10] },
				{ x: 450, y: 290, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 480, y: 370, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },        
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
        { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 32, // czas trwania fazy w sekundach!

              droppings: [
                { x: 700, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 430, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 60, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 40, y: 220, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 30, y: 530, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 60, y: 295, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 32 * 24, health_add: [125,125], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 580, y: 35, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 32 * 24, health_add: [125,125], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 40, y: 140, slow: 0.3, injure: 0.3, ttl: 32 * 24 },
				{ x: 40, y: 400, slow: 0.3, injure: 0.3, ttl: 32 * 24 },
              ],

              bots: [	
                { x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 560, y: 127, r: 20 } },        				
				{ x: 560, y: -10, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 560, y: 127, r: 20 } },
				{ x: -10, y: 290, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 190, y: 330, r: 20 } },       				
				{ x: -10, y: 300, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 190, y: 330, r: 20 } },
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 340, y: 480, r: 20 } },        				
				{ x: 350, y: 610, kind: "Korsarz_7", count: 1, ai: 'cruiser', params: { x: 340, y: 480, r: 20 } },
				{ x: 550, y: -10, kind: "Korsarz_7", count: 1, ai: 'cruiser', params: { x: 560, y: 127, r: 20 } },
				{ x: 570, y: -10, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 560, y: 127, r: 20 } },			  			  	
				{ x: -10, y: 310, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 190, y: 330, r: 20 } },
				{ x: -10, y: 290, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 190, y: 330, r: 20 } },                
				{ x: 340, y: 610, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 340, y: 480, r: 20 } },
				{ x: 360, y: 610, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 340, y: 480, r: 20 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 6
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 70, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 70, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 485, y: 30, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 380, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 645, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 60, y: 530, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 200, y: 335, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.5, 0.6], viols_add: [10,10] },
                { x: 560, y: 180, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.5, 0.6], viols_add: [10,10] },
				{ x: 335, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.5, 0.6], viols_add: [10,10] },
				{ x: 570, y: 230, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 570, y: 340, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
        { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
   		    { x: 200, y: 330, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			{ x: 360, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			{ x: 570, y: 110, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			{ x: 60, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			{ x: 60, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			{ x: 750, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			{ x: 400, y: 300, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [				  
				{ x: -10, y: 300, kind: "Korsarz_biegacz", count: 2, ai: 'amok'},       				
				{ x: -10, y: 310, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: -10, y: 320, kind: "Korsarz_7", count: 1, ai: 'amok'},	
				{ x: 570, y: -10, kind: "Korsarz_biegacz", count: 2, ai: 'amok'},       				
				{ x: 580, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 560, y: -10, kind: "Korsarz_7", count: 1, ai: 'amok'},
			    { x: 360, y: 610, kind: "Korsarz_biegacz", count: 2, ai: 'amok'},       				
				{ x: 350, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 340, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 7
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 300, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 530, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 300, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 530, y: 380, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [155,155], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 330, y: 310, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [5,5], ammo_add: [0.7, 0.9], viols_add: [10,10] },
                { x: 490, y: 310, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [5,5], ammo_add: [0.7, 0.9], viols_add: [10,10] },
				{ x: 600, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
        { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 380, y: 570, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 70, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 580, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 400, y: 240, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			  { x: 290, y: 400, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [				  
				{ x: -10, y: 300, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},       				
				{ x: -10, y: 310, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: -10, y: 320, kind: "Korsarz", count: 2, ai: 'amok'},	
				{ x: 570, y: -10, kind: "Korsarz", count: 2, ai: 'cruiser', params: { x: 560, y: 200, r: 10 } },       				
				{ x: 580, y: -10, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 560, y: 180, r: 10 } },
			    { x: 360, y: 610, kind: "Korsarz", count: 2, ai: 'cruiser', params: { x: 350, y: 490, r: 10 } },       				
				{ x: 350, y: 610, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 350, y: 510, r: 10 } },					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 8
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 300, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 530, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 300, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 530, y: 380, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 330, y: 310, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.7, 0.9], viols_add: [10,10] },
                { x: 490, y: 310, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.7, 0.9], viols_add: [10,10] },
				{ x: 100, y: 290, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 670, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
		{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 44, // czas trwania fazy w sekundach!

              droppings: [
                { x: 700, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 430, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 60, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 40, y: 220, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 30, y: 530, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 60, y: 295, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 44 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 580, y: 35, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 44 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 230, y: 30, slow: 0.3, injure: 0.3, ttl: 44 * 24 },
				{ x: 30, y: 420, slow: 0.3, injure: 0.3, ttl: 44 * 24 },
              ],

              bots: [	
			    { x: 570, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 570, y: 160, r: 20 } },			  
			  	{ x: 370, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 350, y: 460, r: 20 } }, 
				{ x: -10, y: 290, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 200, y: 330, r: 20 } },
				{ x: 560, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 570, y: 160, r: 20 } },			  
			  	{ x: 360, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 350, y: 460, r: 20 } }, 
				{ x: -10, y: 280, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 200, y: 330, r: 20 } },
                { x: 570, y: -10, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 570, y: 160, r: 20 } },   								      				
				{ x: 370, y: 610, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 350, y: 460, r: 20 } },
				{ x: -10, y: 290, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 200, y: 330, r: 20 } },
				{ x: 560, y: -10, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 570, y: 160, r: 20 } },
				{ x: 360, y: 610, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 350, y: 460, r: 20 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 9
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 380, y: 250, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 380, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 270, y: 315, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },				
				{ x: 485, y: 315, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.6, 0.9], viols_add: [10,10] },
				{ x: 570, y: 210, attack: 0.22, defence: 0.24, speed: 0.26, ttl: 20 * 24 },
				{ x: 570, y: 360, attack: 0.22, defence: 0.24, speed: 0.26, ttl: 20 * 24 },
				{ x: 570, y: 300, attack: 0.22, defence: 0.24, speed: 0.26, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 300, y: 215, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 300, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 560, y: 215, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 555, y: 380, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 765, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 485, y: 315, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.6, 0.9], viols_add: [10,10] },
			  { x: 340, y: 483, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			  { x: 130, y: 294, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			  { x: 580, y: 92, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
				{ x: -10, y: 300, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 580, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 580, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 590, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},
				{ x: 570, y: -10, kind: "Korsarz_7", count: 1, ai: 'amok'},           
              ],

              marks: [ // strzalki
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ],
            },
            // red - amok time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 
				{ x: 400, y: 240, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },	
				{ x: 535, y: 310, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.5, 0.95], viols_add: [10,10] },
				{ x: 600, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [160,160], ammo_add: [0.5, 0.95], viols_add: [10,10] },
				{ x: 670, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.5, 0.95], viols_add: [10,10] },
				{ x: 750, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [160,160], ammo_add: [0.5, 0.95], viols_add: [10,10] },
				{ x: 300, y: 220, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
				{ x: 300, y: 390, slow: 0.3, injure: 0.3, ttl: 40 * 24 },				
              ],

              bots: [ // boty
			{ x: -10, y: 310, kind: "Korsarz", count: 1, ai: 'amok'},
			{ x: -10, y: 290, kind: "Korsarz", count: 1, ai: 'amok'},
			{ x: -10, y: 310, kind: "Korsarz", count: 1, ai: 'amok'},
			{ x: -10, y: 290, kind: "Korsarz", count: 1, ai: 'amok'},
			{ x: -10, y: 310, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
			{ x: -10, y: 290, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
			{ x: -10, y: 310, kind: "Korsarz_8", count: 1, ai: 'amok'},
			{ x: -10, y: 290, kind: "Korsarz_8", count: 1, ai: 'amok'},
			{ x: -10, y: 310, kind: "Korsarz_8", count: 1, ai: 'amok'},
			{ x: -10, y: 290, kind: "Korsarz_8", count: 1, ai: 'amok'},
			{ x: -10, y: 300, kind: "Król_Korsarzy", count: 1, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            }
        );
    
      level.define_prizes( {
        //"Naboje pistoletowe-samoróbki": 2,
        //"Korsarski kordelas": 1,
		//"Nowak-3": 1,
      });

      // definiujemy ilość violek nagrody
      level.define_violki_prize(500);
    }
  );

  // >>>>>>>>>>
  // LEVEL 3 >>
  // >>>>>>>>>>
  
  //>>>>>>>>>>>>
  // LEVEL 4 >>>
  //>>>>>>>>>>>>
  
  var level_4 = levels.define_level(4);
  level_4.set_name('level_4_name');
  level_4.set_map_position(210, 120);
  level_4.set_desc('level_4_desc');
  level_4.set_previous(3);

  level_4.set_level_data(
    function level_data(level) {
      level.set_id(4);

      level.set_background_image ('assets/img/levels/warszawska_ulica.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // dochodzacy zolniez - parametry
      // id - karta postaci, liczona od zera
      // nawa postaci z pliku soldiers.js
      // opcjonalnie założona broń
      // opcjonalnie założony armour
      // 4 * opcjonalnie item w plecaku
      level.add_survivor(2, "Żołnierka", "Kapiszon", "Czarny skórzany płaszcz z kapturem", null, null, null, null );

      level.define_soldier_start_point(375,120); 
      level.define_soldier_start_point(375,200); 
      level.define_soldier_start_point(240,120); 
      level.define_soldier_start_point(240,200); 

      level.set_max_creatures(20);

      var mesh = level.mesh;

	  mesh.define_barrier(835,40, 835,564);
	  mesh.define_barrier(835,564, 451,564);
	  mesh.define_barrier(451,564, 451,635);
	  mesh.define_barrier(451,635, 345,635);
	  mesh.define_barrier(345,635, 345,558);
	  mesh.define_barrier(345,558, 60,558);
	  mesh.define_barrier(60,558, 72,480);
	  mesh.define_barrier(72,480, 102,458);
	  mesh.define_barrier(102,458, 66,398);
	  mesh.define_barrier(66,398, 93,337);
	  mesh.define_barrier(93,337, 48,302);
	  mesh.define_barrier(48,302, 82,241);
	  mesh.define_barrier(82,241, 60,124);
	  mesh.define_barrier(60,124, 140,35);
	  mesh.define_barrier(140,35, 348,35);
	  mesh.define_barrier(348,35, 384,0);
	  mesh.define_barrier(384,0, 384,-35);
	  mesh.define_barrier(384,-35, 457,-35);
	  mesh.define_barrier(457,-35, 457,40);
	  mesh.define_barrier(457,40, 530,40);
	  mesh.define_barrier(530,40, 542,98);
	  mesh.define_barrier(542,98, 556,98);
	  mesh.define_barrier(556,98, 556,40);
	  mesh.define_barrier(556,40, 835,40);
	  
	  mesh.define_barrier(542,352, 580,328);
	  mesh.define_barrier(580,328, 608,362);
	  mesh.define_barrier(608,362, 586,454);
	  mesh.define_barrier(586,454, 599,468);
	  mesh.define_barrier(599,468, 599,506);
	  mesh.define_barrier(599,506, 553,515);
	  mesh.define_barrier(553,515, 483,522);
	 // mesh.define_barrier(542,498, 507,498);
	 // mesh.define_barrier(507,498, 483,522);
	  mesh.define_barrier(483,522, 424,478);
	  mesh.define_barrier(424,478, 529,392);
	  mesh.define_barrier(529,392, 542,352);
	  mesh.define_barrier(542,352, 580,328);
	  
	  mesh.define_barrier(581,160, 584,262);
	  mesh.define_barrier(584,262, 552,262);
	  //mesh.define_barrier(552,262, 552,301);
	  //mesh.define_barrier(552,301, 518,310);
	  mesh.define_barrier(552,262, 494,272);
	  mesh.define_barrier(494,272, 515,182);
	  mesh.define_barrier(515,182, 534,147);
	  mesh.define_barrier(534,147, 581,160);
	  
	  mesh.define_barrier(266,200, 354,218);
	  mesh.define_barrier(354,218, 360,262);
	  mesh.define_barrier(360,262, 286,268);
	  mesh.define_barrier(286,268, 372,308);
	  mesh.define_barrier(372,308, 313,340);
	  mesh.define_barrier(313,340, 242,344);
	  mesh.define_barrier(242,344, 200,328);
	  mesh.define_barrier(200,328, 194,290);
	  mesh.define_barrier(194,290, 222,263);
	  mesh.define_barrier(222,263, 201,227);
	  mesh.define_barrier(201,227, 266,200);
	  
	  mesh.define_wall(72,480, 102,458);
	  mesh.define_wall(93,337, 48,302);
	  mesh.define_wall(348,35, 384,0);
	  mesh.define_wall(457,-35, 457,40);
	  mesh.define_wall(345,635, 345,558);
	  mesh.define_wall(451,564, 451,635);
	  mesh.define_wall(200,328, 354,218);
	  mesh.define_wall(201,227, 372,308);
	  
	  mesh.define_wall(490,272, 581,160);
	  mesh.define_wall(584,262, 524,147);
	  
	  mesh.define_wall(530,40, 542,98);
	  mesh.define_wall(542,98, 550,40);
	  
	  mesh.define_wall(483,523, 580,328);
	  mesh.define_wall(542,352, 599,506);
	  
	  mesh.define_wall(599,506, 424,478);
	  
	    // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_0' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_1' },
	  { background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_4_speech_2' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_3' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_4' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_5' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_6' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_7' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_8' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_4_speech_9' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_10' },
	  { background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'level_4_speech_11' },
	  ] );
	  
	  level.define_wave_speeches( 6 ,
    [
	{ background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_12' },
	{ background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_13' },
	{ background: 'assets/img/story/dialogues/olaf_lidia_exit.png', text: 'level_4_speech_14' },
	] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
	level.define_end_speeches( [
	 { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_4_speech_15' },
	 { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_16' },
	 { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_17' },
	 { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_18' },
	 { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_19' },
	 { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_20' },
	 { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_21' },
	 { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_22' },
	 { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_4_speech_23' },
	 { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_4_speech_24' },
	 { background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'level_4_speech_25' },
	 ] );

	level.define_tips( [
         'assets/img/story/tips/tip9_LANG.jpg',
        ]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce

    level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 12, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki        
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
		{ x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
        { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [
              ],

              bots: [ 
        { x: 810, y: 90, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
        { x: 810, y: 280, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
        { x: 810, y: 530, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
        { x: 810, y: 80, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
        { x: 810, y: 290, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
        { x: 810, y: 520, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },        
        { x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },                    
        { x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },  
        { x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } }, 
        { x: 810, y: 90, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
        { x: 810, y: 280, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
        { x: 810, y: 530, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
		{ x: 810, y: 90, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
        { x: 810, y: 280, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
        { x: 810, y: 530, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
		{ x: 810, y: 90, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
        { x: 810, y: 280, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
        { x: 810, y: 530, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!
			  
              droppings: [ // znajdzki 	
			  { x: 400, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 400, y: 275, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [50,50], ammo_add: [0.1, 0.25], viols_add: [10,10] },	
			  { x: 330, y: 470, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.25, 0.5], viols_add: [10,10] },
			  { x: 240, y: 110, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.25, 0.5], viols_add: [10,10] },
			  { x: 140, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
        { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
        { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },

              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
             { x: 740, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 740, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 740, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 140, y: 160, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 140, y: 420, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 400, y: 125, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 400, y: 400, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [	
                { x: 810, y: 90, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
				{ x: 810, y: 280, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
				{ x: 810, y: 530, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 80, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
				{ x: 810, y: 290, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
				{ x: 810, y: 520, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 90, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },
				{ x: 810, y: 280, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
				{ x: 810, y: 530, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },			
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },	
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 270, y: 140, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 450, y: 140, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 200, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 400, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 330, y: 470, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.8], viols_add: [10,10] },
			  { x: 131, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.8], viols_add: [10,10] },
			  { x: 430, y: 270, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 33, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 120, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			 { x: 670, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			 { x: 670, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 410, y: 50, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 400, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 270, y: 160, slow: 0.3, injure: 0.3, ttl: 33 * 24 },
			 { x: 270, y: 400, slow: 0.3, injure: 0.3, ttl: 33 * 24 },
              ],
			  
              bots: [
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },	
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },			
        		{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 380, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},				
        		{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 380, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 410, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 380, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 410, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 135, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 135, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 135, y: 380, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 270, y: 155, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 270, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 430, y: 115, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.5, 0.8], viols_add: [10,10] },			  
			  { x: 390, y: 470, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.5, 0.8], viols_add: [10,10] },
			  { x: 430, y: 350, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			  { x: 430, y: 210, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 36, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 750, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 750, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 750, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			 { x: 270, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			 { x: 270, y: 400, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 400, y: 70, slow: 0.3, injure: 0.3, ttl: 36 * 24 },
			 { x: 400, y: 520, slow: 0.3, injure: 0.3, ttl: 36 * 24 },
              ],

              bots: [
			    { x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 170, y: 130, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 390, y: 130, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 170, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 390, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [105,105], ammo_add: [0.1, 0.25], viols_add: [10,10] },		  
			  { x: 290, y: 470, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.7, 0.9], viols_add: [10,10] },			  
			  { x: 290, y: 100, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.7, 0.9], viols_add: [10,10] },
			  { x: 460, y: 90, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
			  { x: 490, y: 350, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 42, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 120, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 120, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 680, y: 95, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 640, y: 445, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 430, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 300, y: 440, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 { x: 300, y: 120, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
              ],

              bots: [
			    { x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy", count: 3, ai: 'amok' },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 6
            // green - prepare time
            {
              timeout: 16, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 430, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 16 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 430, y: 250, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 16 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 430, y: 350, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 16 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [10,10] },	  
			  { x: 280, y: 140, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.75, 0.9], viols_add: [10,10] },			  
			  { x: 280, y: 410, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.75, 0.9], viols_add: [10,10] },
			  { x: 140, y: 160, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 16 * 24 },
			  { x: 140, y: 400, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 16 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 44, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 660, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 660, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 660, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 200, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 200, y: 420, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 44 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 300, y: 80, slow: 0.3, injure: 0.3, ttl: 44 * 24 },
			 { x: 300, y: 500, slow: 0.3, injure: 0.3, ttl: 44 * 24 },
              ],

              bots: [
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 7
            // green - prepare time
            {
              timeout: 22, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 140, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 240, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 340, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 110, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 210, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 310, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 140, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 22 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [10,10] },			  
			  { x: 430, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 22 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [10,10] },
			  { x: 280, y: 160, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 22 * 24 },
			  { x: 280, y: 380, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 22 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  { x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			  { x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 180, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 180, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 730, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 730, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 430, y: 160, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 430, y: 330, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [
			          	{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 2, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Szczur_z_Warszawy", count: 2, ai: 'amok'},
						{ x: 400, y: 610, kind: "Szczur_z_Warszawy", count: 2, ai: 'amok'}, 
						{ x: 420, y: -10, kind: "Szczur_z_Warszawy", count: 2, ai: 'amok'},
						{ x: 410, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
						{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
						{ x: 420, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
						{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
						{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
						{ x: 390, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok'},
						{ x: 390, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok'},
						{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 2, ai: 'amok' },
						{ x: 390, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok'}, 
						{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok'},
				],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 8
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 440, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 440, y: 190, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 440, y: 290, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 440, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 280, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 280, y: 420, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 140, y: 150, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.35, 0.6], viols_add: [10,10] },
			  { x: 140, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.35, 0.6], viols_add: [10,10] },			  
			  { x: 150, y: 450, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.35, 0.6], viols_add: [10,10] },
			  { x: 280, y: 520, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			  { x: 410, y: 60, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{ x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			  { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
			  //{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 52, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 180, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 52 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 180, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 52 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 730, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 52 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 730, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 52 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 430, y: 160, slow: 0.3, injure: 0.3, ttl: 52 * 24 },
			 { x: 430, y: 330, slow: 0.3, injure: 0.3, ttl: 52 * 24 },
              ],

              bots: [
			    { x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 9
            // green - prepare time
            {
              timeout: 28, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 110, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 210, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 310, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 410, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 130, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 410, y: 210, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [160,160], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 400, y: 560, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			  { x: 410, y: 60, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },			  
			  { x: 410, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			  { x: 140, y: 120, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 28 * 24 },
			  { x: 240, y: 120, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 28 * 24 },
			  { x: 140, y: 480, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 28 * 24 },
			  { x: 240, y: 480, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 28 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  { x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			  { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 60, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 280, y: 130, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 280, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 140, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 430, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 260, y: 520, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 60 * 24, health_add: [30,30], ammo_add: [0.35, 0.7], viols_add: [10,10] },
			 { x: 260, y: 70, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 60 * 24, health_add: [30,30], ammo_add: [0.35, 0.7], viols_add: [10,10] },
	 		 { x: 150, y: 150, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
			 { x: 450, y: 150, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
			 { x: 150, y: 360, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
			 { x: 450, y: 360, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
              ],

              bots: [
			    { x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 5, ai: 'amok' },
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				//{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				//{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Ghul", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Ghul", count: 1, ai: 'amok'},
				//{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				//{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
              ],

              marks: [ // strzalki              
			  { x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			  { x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
			  { x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
			  ],
            },
            // red - amok time
            {
              timeout: 60, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 130, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 420, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 700, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 700, y: 490, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 60 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 270, y: 120, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 60 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 270, y: 450, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 60 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 460, y: 110, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 60 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 460, y: 360, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 60 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 720, y: 270, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
			 { x: 140, y: 130, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
			 { x: 140, y: 480, slow: 0.35, injure: 0.35, ttl: 60 * 24 },
              ],

              bots: [
			  	{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Reptilian", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Reptilian", count: 1, ai: 'amok'},
			    { x: 810, y: 70, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok'},	
				//{ x: 810, y: 70, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				//{ x: 810, y: 270, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				//{ x: 810, y: 540, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 390, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok'}, 
				{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok'},					
              ],

              marks: [ // strzalki
              ],
            }
        );
      level.define_prizes( {
        //"Nowak-5T": 1,
        //"Naboje pistoletowe-samoróbki": 1,
    //"Wojskowa apteczka": 1,
    //"Uniwersalne antidotum": 1,
      });
      level.define_violki_prize(700);
    }
  );
  //<<<<<<<<<<<<<<<
  //LEVEL 4<<<<<<<<
  //>>>>>>>>>>>>>>>
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 5>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_5 = levels.define_level(5);
  level_5.set_name('level_5_name');
  level_5.set_map_position(235, 130);
  level_5.set_desc('level_5_desc');
  level_5.set_previous(4);

  level_5.set_level_data(
    function level_data(level) {
      level.set_id(5);

      level.set_background_image ('assets/img/levels/metro_swietokrzyska.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      level.define_soldier_start_point(370,480);
      level.define_soldier_start_point(420,480);
      level.define_soldier_start_point(470,480);
      level.define_soldier_start_point(520,480);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

	  mesh.define_barrier(830,18, 830,582);
	  mesh.define_barrier(830,582, 684,582);
	  mesh.define_barrier(684,582, 684,635);
	  mesh.define_barrier(684,635, 608,635);
	  mesh.define_barrier(608,635, 608,582);
	  mesh.define_barrier(608,582, 488,582);
	  mesh.define_barrier(488,582, 488,635);
	  mesh.define_barrier(488,635, 321,635);
	  mesh.define_barrier(321,635, 321,582);
	  mesh.define_barrier(321,582, 178,582);
	  mesh.define_barrier(178,582, 174,635);
	  mesh.define_barrier(174,635, 110,633);
	  mesh.define_barrier(110,633, 100,582);
	  mesh.define_barrier(100,582, -30,582);
	  mesh.define_barrier(-30,582, -30,18);
	  mesh.define_barrier(-30,18, 88,18);
	  mesh.define_barrier(88,18, 88,-30);
	  mesh.define_barrier(88,-30, 212,-30);
	  mesh.define_barrier(212,-30, 212,18);
	  mesh.define_barrier(212,18, 324,18);
	  mesh.define_barrier(324,18, 324,-30);
	  mesh.define_barrier(324,-30, 460,-30);
	  mesh.define_barrier(460,-30, 460,18);
	  mesh.define_barrier(460,18, 605,18);
	  mesh.define_barrier(605,18, 610,-30);
	  mesh.define_barrier(610,-30, 665,-30);
	  mesh.define_barrier(665,-30, 675,18);
	  mesh.define_barrier(675,18, 830,18);
	  
	  //mesh.define_barrier(242,136, 645,136);
	  //mesh.define_barrier(645,136, 604,232);
	  //mesh.define_barrier(604,232, 472,252);
	  //mesh.define_barrier(472,252, 514,324);
	  //mesh.define_barrier(514,324, 588,326);
	  //mesh.define_barrier(588,326, 602,406);
	  //mesh.define_barrier(602,406, 247,414);
	  //mesh.define_barrier(247,414, 219,376);
	  //mesh.define_barrier(219,376, 330,326);
	  //mesh.define_barrier(330,326, 330,240);
	  //mesh.define_barrier(330,240, 242,206);
	  //mesh.define_barrier(242,206, 242,136);	  
	  
	  mesh.define_barrier(245,141, 368,133);
	  mesh.define_barrier(368,133, 405,144);
	  mesh.define_barrier(405,144, 462,135);
	  mesh.define_barrier(462,135, 445,83);
	  mesh.define_barrier(445,83, 451,80);
	  mesh.define_barrier(451,80, 474,134);
	  mesh.define_barrier(474,134, 598,135);
	  mesh.define_barrier(598,135, 598,143);
	  mesh.define_barrier(598,143, 645,136);
	  mesh.define_barrier(645,136, 639,158);
	  mesh.define_barrier(639,158, 610,160);
	  mesh.define_barrier(610,160, 598,177);
	  mesh.define_barrier(598,177, 610,199);
	  mesh.define_barrier(610,199, 599,215);
	  mesh.define_barrier(599,215, 509,222);
	  mesh.define_barrier(509,222, 503,246);
	  mesh.define_barrier(503,246, 483,201);
	  mesh.define_barrier(483,201, 464,206);
	  mesh.define_barrier(464,206, 468,262);
	  mesh.define_barrier(468,262, 489,284);
	  mesh.define_barrier(489,284, 502,337);
	  mesh.define_barrier(502,337, 539,318);
	  mesh.define_barrier(539,318, 588,326);
	  mesh.define_barrier(588,326, 602,406);
	  mesh.define_barrier(602,406, 409,407);
	  mesh.define_barrier(409,407, 387,386);
	  mesh.define_barrier(387,386, 341,380);
	  mesh.define_barrier(341,380, 291,393);
	  mesh.define_barrier(291,393, 247,414);
	  mesh.define_barrier(247,414, 219,376);
	  mesh.define_barrier(219,376, 330,326);
	  mesh.define_barrier(330,326, 335,280);
	  mesh.define_barrier(335,280, 361,254);
	  mesh.define_barrier(361,254, 330,240);
	  mesh.define_barrier(330,240, 242,206);
	  mesh.define_barrier(242,206, 247,191);
	  mesh.define_barrier(249,191, 302,167);
	  mesh.define_barrier(302,167, 245,141);
	  
	  mesh.define_wall(246,408, 350,334);
	  mesh.define_wall(357,334, 470,138);
	  mesh.define_wall(596,404, 284,149);
	  mesh.define_wall(470,151, 612,151);
	  
	    // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [	  
      //]);
	  
	  level.define_speeches( [
	   { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_5_speech_0' },
	   { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_5_speech_1' },
	   { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_5_speech_2' },
	   { background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_5_speech_3' },
	   { background: 'assets/img/story/dialogues/lidia_olaf_next_exit.png', text: 'level_5_speech_4' },
	   { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_5_speech_5' },
	   { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_5_speech_6' },
	   { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_5_speech_7' },
	   { background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'level_5_speech_8' },
	   ] );
	   
	   level.define_wave_speeches( 9 ,
    [
	{ background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_5_speech_9' },
	{ background: 'assets/img/story/dialogues/lidia_olaf_next_exit.png', text: 'level_5_speech_10' },
	{ background: 'assets/img/story/dialogues/szron_lidia_exit.png', text: 'level_5_speech_11' },
	] );
	
	     // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_5_speech_12' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_5_speech_13' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_5_speech_14' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_5_speech_15' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_5_speech_16' },
	  { background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_5_speech_17' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_5_speech_18' },
	  { background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'level_5_speech_19' },
	  ] );
		
	level.define_tips( [
         'assets/img/story/tips/tip10_LANG.jpg',
        ]);
		
		//level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
	  
	  

	  level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 400, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 400, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 110, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 110, y: 490, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 700, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 700, y: 490, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
	 		 { x: 290, y: 285, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 550, y: 275, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],

              bots: [
			    { x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 720, y: 90, r: 200 } },	
				{ x: 810, y: 96, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },							       
				{ x: 400, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
				{ x: -10, y: 96, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },	
				{ x: 810, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 500, r: 200 } },							       
				{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 86, r: 200 } },
				{ x: -10, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 490, r: 200 } },
				{ x: 400, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 720, y: 480, r: 200 } },						
				{ x: -10, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 290, y: 285, r: 200 } },
				{ x: 810, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 550, y: 275, r: 200 } },
				{ x: 400, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 720, y: 90, r: 200 } },	
				{ x: 810, y: 96, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },							       
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 130, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [90,90], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 130, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [90,90], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 130, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [90,90], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [90,90], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [90,90], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [90,90], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 400, y: 80, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.75], viols_add: [5,5] },
				{ x: 400, y: 480, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.75], viols_add: [5,5] },
				{ x: 290, y: 285, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
				{ x: 550, y: 275, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 100, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 700, y: 275, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 370, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 580, y: 70, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 110, y: 415, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
			  { x: 650, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 650, y: 75, r: 200 } },
			  { x: 150, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
			  { x: 810, y: 96, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
			  { x: 650, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 650, y: 75, r: 200 } },
			  { x: 150, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
			  { x: 810, y: 96, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
			  { x: 650, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 650, y: 75, r: 200 } },
			  { x: 150, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
			  { x: 810, y: 96, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
			  { x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
			  { x: 810, y: 106, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
			  { x: 650, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 650, y: 75, r: 200 } },
			  { x: -10, y: 275, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 710, y: 80, r: 200 } },
			  { x: 810, y: 275, kind: "Mutant z Metra", count: 1, ai: 'wanderer' },	
			  { x: 145, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
			  { x: 810, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 500, r: 200 } },
			  { x: -10, y: 275, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 710, y: 490, r: 200 } },				
			  { x: 640, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer' },
			  { x: 810, y: 467, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 500, r: 200 } },				
			  { x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 90, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 400, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 130, y: 490, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 720, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 410, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 270, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 560, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 290, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.9], viols_add: [5,5] },
				{ x: 550, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.9], viols_add: [5,5] },
				{ x: 720, y: 85, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 130, y: 100, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 400, y: 50, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 40, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 740, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 270, y: 480, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 580, y: 480, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [			  				
				{ x: 640, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 650, y: 480, r: 200 } },
				{ x: -10, y: 265, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 710, y: 490, r: 200 } },
				{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 90, r: 200 } },
				{ x: 810, y: 96, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
				{ x: 810, y: 265, kind: "Mutant z Metra", count: 1, ai: 'wanderer' },
				{ x: 810, y: 265, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'wanderer' },
				{ x: 400, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 480, r: 200 } },
				{ x: 390, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 90, r: 200 } },
				{ x: -10, y: 275, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 710, y: 490, r: 200 } },
				{ x: 810, y: 275, kind: "Mutant z Metra", count: 1, ai: 'wanderer' },
				{ x: 810, y: 265, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'wanderer' },
				{ x: -10, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 490, r: 200 } },
				{ x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 480, r: 200 } },
				{ x: 650, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 650, y: 75, r: 200 } },
				{ x: 810, y: 477, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 500, r: 200 } },			
				{ x: 140, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 140, y: 75, r: 200 } },			
				{ x: -10, y: 96, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: 400, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 480, r: 200 } },
				{ x: 810, y: 265, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'wanderer' },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 300, y: 475, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 550, y: 475, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 300, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 550, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 100, y: 480, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.9], viols_add: [5,5] },
				{ x: 720, y: 80, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.9], viols_add: [5,5] },
				{ x: 710, y: 485, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 120, y: 90, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 38, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 120, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 320, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 520, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
	 		 { x: 720, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 120, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 320, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 520, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 720, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
              ],

              bots: [
			  	{ x: 810, y: 265, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer' },
				{ x: 810, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer' },
				{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: 400, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
				{ x: 390, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: -10, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 710, y: 490, r: 200 } },	
				{ x: 390, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
				{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 480, r: 200 } },
				{ x: 410, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 90, r: 200 } },
				{ x: -10, y: 265, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 710, y: 490, r: 200 } },		
				{ x: 400, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 90, r: 200 } },				
				{ x: 410, y: 610, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 480, r: 200 } },		
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 110, y: 185, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 110, y: 285, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 110, y: 385, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 110, y: 485, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 185, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 285, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 385, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 485, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 290, y: 75, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.65, 0.9], viols_add: [5,5] },
				{ x: 550, y: 500, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.65, 0.9], viols_add: [5,5] },
				{ x: 290, y: 500, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
				{ x: 550, y: 75, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 38, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 150, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 640, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 150, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 640, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 290, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 560, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
              ],

              bots: [
			  	{ x: -10, y: 265, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 79, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 90, r: 200 } },
				{ x: -10, y: 255, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 490, r: 200 } },
				{ x: -10, y: 265, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 79, r: 200 } },
				{ x: 640, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
				{ x: 650, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 80, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 670, y: 500, r: 200 } },
				{ x: -10, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 220, r: 200 } },
				{ x: -10, y: 255, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 490, r: 200 } },
				{ x: 640, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
				{ x: 650, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 90, r: 200 } },
				{ x: 640, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 80, r: 200 } },
				{ x: -10, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 220, r: 200 } },
				{ x: 645, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 670, y: 500, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 6
            // green - prepare time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 100, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [160,160], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [160,160], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 300, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [160,160], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 300, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [160,160], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 550, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [160,160], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 550, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [160,160], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 280, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 560, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 100, y: 80, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
				{ x: 100, y: 500, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
				{ x: 700, y: 80, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
				{ x: 700, y: 500, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 200, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 200, y: 430, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 670, y: 130, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 650, y: 430, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 65, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 420, y: 490, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 80, y: 75, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 730, y: 500, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
			  	{ x: -10, y: 265, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 60, r: 200 } },
				{ x: -10, y: 275, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 500, r: 200 } },
				{ x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 100, y: 410, r: 200 } },
				{ x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 80, r: 200 } },
				{ x: 810, y: 275, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 550, y: 270, r: 200 } },
				{ x: -10, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 100, y: 410, r: 200 } },
				{ x: 810, y: 265, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 550, y: 270, r: 200 } },
				{ x: 410, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 720, y: 90, r: 200 } },
				{ x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 80, r: 200 } },
				{ x: -10, y: 427, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: -10, y: 487, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 810, y: 285, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: -10, y: 285, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },
				{ x: 410, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: 150, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 100, y: 410, r: 200 } },
				{ x: -10, y: 275, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },
				{ x: 400, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: 140, y: -10, kind: "Mutant z Metra", count: 1, ai: 'wanderer', params: { x: 720, y: 80, r: 200 } },
				{ x: 810, y: 275, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 420, y: 490, r: 200 } },								
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 7
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 340, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 530, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 340, y: 490, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 530, y: 490, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 80, y: 80, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 700, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 110, y: 490, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 700, y: 500, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 700, y: 100, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 40, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 40, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 760, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 760, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 50, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 280, y: 280, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 550, y: 280, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [
			  	{ x: 640, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
			    { x: -10, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: 140, y: -10, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 720, y: 80, r: 200 } },
				{ x: 810, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: 400, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 720, y: 90, r: 200 } },
				{ x: 810, y: 477, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 500, r: 200 } },
				{ x: -10, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: 140, y: -10, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 720, y: 80, r: 200 } },
				{ x: 810, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: -10, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },
				{ x: 400, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
				{ x: 810, y: 96, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 540, y: 280, r: 200 } },
				{ x: 650, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
				{ x: 810, y: 477, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 500, r: 200 } },
				{ x: -10, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 140, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 75, r: 200 } },
				{ x: -10, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },
				{ x: 400, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
				{ x: -10, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 810, y: 96, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 540, y: 280, r: 200 } },							       
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 8
            // green - prepare time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 100, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 30 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 30 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 90, y: 230, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 30 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 90, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 30 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 550, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 30 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 740, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 30 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 200, y: 225, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 180, y: 375, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 668, y: 192, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 630, y: 357, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 90, y: 480, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 30 * 24 },
				{ x: 710, y: 90, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 30 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 100, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 700, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 280, y: 80, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 280, y: 470, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 550, y: 80, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 550, y: 470, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [
			    { x: 410, y: -10, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
			    { x: 810, y: 477, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 540, y: 280, r: 200 } },
				{ x: 650, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
				{ x: -10, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: 400, y: -10, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
				{ x: 810, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: -10, y: 477, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 390, y: -10, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },
				{ x: 140, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 75, r: 200 } },
				{ x: 810, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
				{ x: -10, y: 275, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 260, r: 200 } },
				{ x: 400, y: -10, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },		
				{ x: 810, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
				{ x: -10, y: 477, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 9
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 270, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 566, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 680, y: 170, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 660, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 560, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 290, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 160, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 170, y: 175, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 160, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 400, y: 70, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 410, y: 500, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 700, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 540, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 280, y: 290, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 55, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 100, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 100, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 700, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
	 		 { x: 700, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 300, y: 70, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
			 { x: 570, y: 70, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
			 { x: 260, y: 470, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
			 { x: 570, y: 470, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
			 { x: 300, y: 280, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
			 { x: 550, y: 280, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
              ],

              bots: [
			    { x: 630, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 80, r: 200 } },
				{ x: 810, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
				{ x: -10, y: 96, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: 810, y: 275, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 550, y: 270, r: 200 } },
				{ x: 640, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 710, y: 80, r: 200 } },			
				{ x: 410, y: -10, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 700, y: 90, r: 200 } },				
			    { x: 810, y: 96, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
				{ x: 400, y: 610, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: 810, y: 265, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 550, y: 270, r: 200 } },				
				{ x: -10, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 400, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 720, y: 90, r: 200 } },
				{ x: 400, y: -10, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 700, y: 90, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 670, y: 500, r: 200 } },
				{ x: 810, y: 477, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 540, y: 280, r: 200 } },
				{ x: 410, y: 610, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 720, y: 480, r: 200 } },
				{ x: -10, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 290, y: 280, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 90, r: 200 } },
			    { x: 640, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
				{ x: 810, y: 275, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 550, y: 270, r: 200 } },
				{ x: -10, y: 265, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 290, y: 280, r: 200 } },			
				{ x: 140, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 75, r: 200 } },
				{ x: 150, y: -10, kind: "Reptilian", count: 1, ai: 'wanderer', params: { x: 720, y: 80, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 270, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 550, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 270, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
	 		 { x: 550, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 100, y: 200, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 100, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 700, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
	 		 { x: 700, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 290, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.7, 1.0], viols_add: [5,5] },
	 		 { x: 550, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.7, 1.0], viols_add: [5,5] },
			 { x: 110, y: 85, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 110, y: 500, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 710, y: 85, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 710, y: 500, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
			    { x: 810, y: 96, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 80, r: 200 } },
				{ x: 650, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 150, y: 500, r: 200 } },
				{ x: -10, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 700, y: 490, r: 200 } },
				{ x: 810, y: 275, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: 400, y: 610, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: -10, y: 275, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 300, y: 220, r: 200 } },
				{ x: -10, y: 285, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 300, y: 220, r: 200 } },
				{ x: 390, y: -10, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 190, y: 90, r: 200 } },	
				{ x: 390, y: 610, kind: "Reptoludz", count: 1, ai: 'wanderer', params: { x: 150, y: 480, r: 200 } },
				{ x: 810, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 540, y: 280, r: 200 } },
				{ x: 150, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 100, y: 410, r: 200 } },	
				{ x: 140, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 140, y: 75, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            }
        );

      level.define_prizes( {
       // "": 0,
        //"": 0,
      });

      level.define_violki_prize(900);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 5<<<<<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<

  // <<<<<<<<<<
  // << REPLAY LEVEL 0
  // <<<<<<<<<<

  // tworzmy nowy poziom w nawiazie podajemy jego numer porządkowy
  var replay_level_0 = levels.define_replay_level(0);
  // nazwa pojawiajaca sie na mapie
  replay_level_0.set_name("replay_level_0_name");
  // lewy dolny rog napisu
  replay_level_0.set_map_position(135, 20);
  // prawy górny róg klikany - aby wybrać poziom trzeba bedzie kliknąć między
  // wyżej zdefiniowanym lewym dolnym rogiem a niżej definiowanym prawym górnym
  // pierwsza linijka opisu poziomu
  replay_level_0.set_desc('replay_level_0_desc');
  

  // opisujemy szczegóły mapy poziomu
  replay_level_0.set_level_data(
    function level_data(level) {
      // powtarzamy numer porządkowy - koniecznie
      level.set_id(0);

      // ustawiamy tło poziomu
      level.set_background_image ('assets/img/levels/gdynska_plaza.png');
      // (opcjonalnie) ustawiamy pierwszy plan poziomu - jest rysowany na tle i na postaciach
      // level.set_foreground_image ('assets/img/levels/replay_level_0_foreground.png');
      
      // ustawimy kolejne punkty z ktorych moga startowac boty, w nawiazie podajemy wspolrzedne tych punktow
      // powinny byc poza mapa (lub w miejscu przykrytym pierwszym planem) tak aby gracz nie zobaczyl
      // botow pojawiajacych sie z nikad
      // PUNKTY STARTOWE MUSZA WYPADAC W DOSTEPNEJ PRZESTRZENI DLA BOTOW - inaczej boty sie nie pojawia

      // gdzie gra bedzie rozmieszczać postacie graczy
      // dla kazdego poziomu musza byc 4 takie punkty, bo kazdy poziom bedzie mozna zagrac
      // majac 4 postacie w druzynie
      level.define_soldier_start_point(229,398);
      level.define_soldier_start_point(278,398);
      level.define_soldier_start_point(229,352);
      level.define_soldier_start_point(278,352);

      // limit jednoczesnie widocznych w grze botow
      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      // Tworzymy siatke poziomu
      var mesh = level.mesh;

     // definiujemy przeszkody(sciany) uniemozliwiajace przejscie
      // define_barrier( x0, y0, x1, y1);
      mesh.define_barrier(54,23, 207,21);
      mesh.define_barrier(207,21, 257,-20);
      mesh.define_barrier(257,-20, 341,-20);
      mesh.define_barrier(341,-20, 459,42);
      mesh.define_barrier(459,42, 525,61);
      mesh.define_barrier(525,61, 651,61);
      mesh.define_barrier(651,61, 651,92);
      mesh.define_barrier(651,92, 736,92);
      mesh.define_barrier(736,92, 736,132);
      mesh.define_barrier(736,132, 692,140);
      mesh.define_barrier(692,140, 690,328);
      mesh.define_barrier(690,328, 820,328);
      mesh.define_barrier(820,328, 820,380);
      mesh.define_barrier(820,380, 770,380);
      mesh.define_barrier(770,380, 740,402);
      mesh.define_barrier(740,402, 714,572);
      mesh.define_barrier(714,572, 575,547);
      mesh.define_barrier(575,547, 397,582);
      mesh.define_barrier(397,582, 358,520);
      mesh.define_barrier(358,520, 252,576);
      mesh.define_barrier(252,576, 54,576);
      mesh.define_barrier(54,576, 54,23);
    mesh.define_barrier(521,122, 485,222);
    mesh.define_barrier(485,222, 590,222);
    mesh.define_barrier(590,222, 597,185);
    mesh.define_barrier(597,185, 623,168);
    mesh.define_barrier(623,168, 593,116);
    mesh.define_barrier(593,116, 521,122);
    mesh.define_barrier(209,432, 209,498);
    mesh.define_barrier(209,498, 302,498);
    mesh.define_barrier(302,498, 302,432);
    mesh.define_barrier(302,432, 209,432);
    mesh.define_barrier(282,127, 267,179);
    mesh.define_barrier(267,179, 231,211);
    mesh.define_barrier(231,211, 233,211);
    mesh.define_barrier(233,211, 243,269);
    mesh.define_barrier(243,269, 288,272);
    mesh.define_barrier(288,272, 312,252);
    mesh.define_barrier(312,252, 365,272);
    mesh.define_barrier(365,272, 393,206);
    mesh.define_barrier(393,206, 282,127);

        // definiujemy sciany, uniemozliwiajace strzelanie przez przeszkody
        // define_wall( x0, y0, x1, y1 )
        mesh.define_wall(520,122, 620,168);
        mesh.define_wall(506,178, 592,117);
    mesh.define_wall(209,432, 302,498);
    mesh.define_wall(302,432, 209,498);
    mesh.define_wall(282,127, 365,272);
    mesh.define_wall(243,269, 393,206);
      

      // wave'y
      // dwa wave'y nie moga zdarzyc sie w tej samej klatce
      // w fali musi byc po rekordzie na kazdy punkt startowy - jesli boty maja stamtad nie wychodzi
      // nalezy wpisac pusta tablice
      // define_wave( numer_klatki, 
      //   [
      //     { "Kreatura_A": liczebność, "Kreatura_B": liczebność, ..., "Kreatura_Z": liczebność }, // kolejne elementy tablicy
      //     { "Kreature_A": liczebność, "Kreatura_B": liczebność } // to kolejne punkty startowe
      //     {}, // pusta tablica jeśli z punktu nie ma nikt wychodzić
      //   ]
      // )
      // z pierwsze punktu szczury, z drugiego mutanty
    
    level.describe_wave(   //1
            // green - prepare time
              {
              timeout: 5, // czas trwania fazy w sekundach!

              droppings: [
              ],
              // cruiser, wanderer
              bots: [
              ],
        
        marks: [
        { x: 300, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
              ],
            },
            // orange - cautious time
            {
              timeout: 17, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 143, y: 325, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 628, y: 342, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 420, y: 300, slow: 0.3, injure: 0.3, ttl: 17 * 24 },
              ],
              // cruiser, wanderer, pathfinder, amok
              bots: [
			  { x: 300, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 320, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 300, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 320, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  ],
			  
			  marks: [
			 // { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' }
              ],
            },
            // red - amok time
             null
        );
    
    level.describe_wave(   // 2
            // green - prepare time
              {
              timeout: 12, // czas trwania fazy w sekundach!

             droppings: [
		   	  { x: 430, y: 225, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 140, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 620, y: 450, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 430, y: 500, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 12 * 24, health_add: [35,35], ammo_add: [0.3, 0.65], viols_add: [20,20] },
			  { x: 420, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 12 * 24 },
              ],
              // cruiser, wanderer
              bots: [
        
              ],
        
        marks: [
        { x: 300, y:5, src: 'assets/img/strzalki/arrow_down.png' },
              ],
            },
            // orange - cautious time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 440, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 150, y: 340, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 625, y: 310, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 440, y: 430, slow: 0.3, injure: 0.3, ttl: 24 * 24 },
              ],
              // cruiser, wanderer, pathfinder, amok
              bots: [
				{ x: 300, y: -10, kind: "Szczur", count: 2, ai: 'amok'},
				{ x: 280, y: -10, kind: "Szczur", count: 3, ai: 'amok'},
				{ x: 320, y: -10, kind: "Szczur", count: 2, ai: 'amok'},
				{ x: 320, y: -10, kind: "Szczur_Kolos", count: 1, ai: 'wanderer'},
        ],
        
        marks: [
              ],
            },
            // red - amok time
             null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
              {
              timeout: 17, // czas trwania fazy w sekundach!

             droppings: [
		   	  { x: 130, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 120, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 260, y: 350, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 450, y: 340, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 630, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 640, y: 120, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 400, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 630, y: 480, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [35,35], ammo_add: [0.3, 0.65], viols_add: [20,20] },
			  { x: 150, y: 340, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
              ],
              // cruiser, wanderer
              bots: [
        
              ],
        
        marks: [
        { x: 300, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 740, y: 340, src: 'assets/img/strzalki/arrow_left.png' },
        
              ],
            },
            // orange - cautious time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 310, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 650, y: 350, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 350, y: 350, slow: 0.3, injure: 0.3, ttl: 25 * 24 },
              ],
              // cruiser, wanderer, pathfinder, amok
              bots: [
			  { x: 300, y: -10, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur_Kolos", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur", count: 1, ai: 'amok'},
			  ],
			  
			  marks: [
              ],
            },
            // red - amok time
             null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
              {
              timeout: 12, // czas trwania fazy w sekundach!

             droppings: [
			{ x: 440, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [60,60], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			{ x: 290, y: 350, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [60,60], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			{ x: 600, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 12 * 24, health_add: [60,60], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			{ x: 420, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 12 * 24 },
              ],
              // cruiser, wanderer
              bots: [
        
              ],
        
        marks: [
        { x: 300, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 740, y: 340, src: 'assets/img/strzalki/arrow_left.png' },
        
              ],
            },
            // orange - cautious time
            {
              timeout: 28, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 130, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 150, y: 350, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 360, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 140, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 640, y: 115, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 640, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 400, y: 500, slow: 0.3, injure: 0.3, ttl: 28 * 24 },
              ],
              // cruiser, wanderer, pathfinder, amok
              bots: [
			  { x: 812, y: 333, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur_Kolos", count: 2, ai: 'amok'},
			  { x: 812, y: 333, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 812, y: 343, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 812, y: 333, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 812, y: 363, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur_Kolos", count: 2, ai: 'amok'},
			  ],
			  
			  marks: [
              ],
            },
            // red - amok time
             null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
              {
              timeout: 15, // czas trwania fazy w sekundach!

             droppings: [
		   	  { x: 140, y: 85, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 130, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 670, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 650, y: 120, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [55,55], ammo_add: [0.1, 0.25], viols_add: [20,20] },
			  { x: 425, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 15 * 24, health_add: [35,35], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 100, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
              ],
              // cruiser, wanderer
              bots: [
        
              ],
        
        marks: [
        { x: 300, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 740, y: 340, src: 'assets/img/strzalki/arrow_left.png' },
        
              ],
            },
            // orange - cautious time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [
              ],
              // cruiser, wanderer, pathfinder, amok
              bots: [
			  { x: 300, y: -10, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 812, y: 333, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 812, y: 353, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 320, y: -10, kind: "Szczur", count: 2, ai: 'amok'},
			  { x: 812, y: 343, kind: "Szczur", count: 1, ai: 'amok'},
			  { x: 330, y: -10, kind: "Szczur", count: 1, ai: 'amok'},
			  ],
			  
			  marks: [
			  { x: 300, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
			  { x: 740, y: 340, src: 'assets/img/strzalki/arrow_left.png' },
              ],
            },
            // red - amok time
             {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [
				{ x: 140, y: 205, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 640, y: 115, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 660, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 140, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 350, y: 400, slow: 0.3, injure: 0.3, ttl: 25 * 24 },
              ],
              // cruiser, wanderer, pathfinder, amok
              bots: [
			  { x: 812, y: 343, kind: "Szczur", count: 3, ai: 'amok'},
			  { x: 330, y: -10, kind: "Szczur", count: 3, ai: 'amok'},
			  { x: 280, y: -10, kind: "Szczur_Kolos", count: 3, ai: 'amok'},
			  { x: 812, y: 343, kind: "Szczur_Kolos", count: 3, ai: 'amok'},
			  ],
			  
			  marks: [
              ],
            }
        );    

      // definiujemy nagrody
      // define_prizes( { "Klucz_itemu_1": liczba, "Klucz_itemu_2": liczba, ..., "Klucz_itemu_6": liczba } )
      level.define_prizes( {
      });

      // Dialogi w grze, po prostu tablica do kolejnych obrazkow z rozmowami
      // jesli w poziomie nie ma dialogow nie umieszczac w ogole
      /*
      level.define_speeches( [
          'assets/img/story/00/LANG/d/begining/2/1.jpg',
          'assets/img/story/00/LANG/d/begining/2/2.jpg',
          'assets/img/story/00/LANG/d/begining/2/3.jpg',
      ]);
      */
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/szron_next_exit.png', text: 'replay_level_0_speech_0' },
	  { background: 'assets/img/story/dialogues/ai_szron_next_exit.png', text: 'replay_level_0_speech_1' },
	  { background: 'assets/img/story/dialogues/szron_ai_exit.png', text: 'replay_level_0_speech_2' },
	  ] );

      // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazkow z rozmowami
      // jesli w poziomie nie ma dialogow nie umieszczac w ogole
      /*
      level.define_end_speeches( [
          'assets/img/story/00/LANG/d/end/2/1.jpg',
      ]);
      */
	  level.define_end_speeches( [
	   { background: 'assets/img/story/dialogues/szron_exit.png', text: 'replay_level_0_speech_3' },
	   ] );

       // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/tip4_LANG.jpg',
        ]);

      // definiujemy ilość violek nagrody
      level.define_violki_prize(150);
    }
  );

  // >>>>>>>>>>
  // REPLAY LEVEL 0 >>
  // >>>>>>>>>>
  
   // <<<<<<<<<<
  // <<REPLAY LEVEL 1
  // <<<<<<<<<<

  var replay_level_1 = levels.define_replay_level(1);
  replay_level_1.set_name('replay_level_1_name');
  replay_level_1.set_map_position(142, 46);
  replay_level_1.set_desc('replay_level_1_desc');
  replay_level_1.set_previous(1);

  replay_level_1.set_level_data(
    function level_data(level) {
      level.set_id(1);

      level.set_background_image ('assets/img/levels/sopocka_ulica.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // id - karta postaci, liczona od zera
      // nawa postaci z pliku soldiers.js
      // opcjonalnie zalozona bron
      // opcjonalnie zalozony armour
      // 4 * opcjonalnie item w plecaku
      //level.add_survivor(1, "Wojownik", "Gdański trójząb", "Skórzana kurtka", "Postapokaliptyczny zestaw opatrunkowy", "Postapokaliptyczny zestaw opatrunkowy" );

      level.define_soldier_start_point(300,250); // pierwotnie wszyscy byli po prawej stronie
      level.define_soldier_start_point(350,300); // 
      level.define_soldier_start_point(300,300); // 
      level.define_soldier_start_point(350,250); // 

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,44, 835,564);
    mesh.define_barrier(835,564, 416,564);
    mesh.define_barrier(416,564, 342,645);
    mesh.define_barrier(342,645, 308,645);
    mesh.define_barrier(308,645, 278,554);
    mesh.define_barrier(278,554, 160,554);
    mesh.define_barrier(160,554, 210,433);
    mesh.define_barrier(210,433, 140,350);
    mesh.define_barrier(140,350, 184,301);
    mesh.define_barrier(184,301, 159,280);
    mesh.define_barrier(159,280, 100,280);
    mesh.define_barrier(100,280, 142,236);
    mesh.define_barrier(142,236, 30,142);
    mesh.define_barrier(30,142, -40,142);
    mesh.define_barrier(-40,142, -40,34);
    mesh.define_barrier(-40,34, 835,34);
    mesh.define_barrier(490,154, 446,301);
    mesh.define_barrier(446,301, 508,418);
    mesh.define_barrier(508,418, 460,452);
    mesh.define_barrier(460,452, 486,516);
    mesh.define_barrier(486,516, 554,472);
    mesh.define_barrier(562,131, 512,82);
    mesh.define_barrier(512,82, 484,110);
    mesh.define_barrier(484,110, 528,160);
    mesh.define_barrier(528,160, 490,154);
    mesh.define_barrier(562,131, 648,252);
    mesh.define_barrier(554,472, 648,252);
    
    mesh.define_wall(140,350, 184,301);
    mesh.define_wall(142,236, 30,142);
    mesh.define_wall(490,154, 508,418);
    mesh.define_wall(596,182, 446,301);
    mesh.define_wall(140,350, 210,433);
    
     // Dialogi w grze, po prostu tablica do kolejnych obrazkóww z rozmowami
     // jesli w poziomie nie ma dialogow nie umieszczac w ogóle
     /*
      level.define_speeches( [
          'assets/img/story/01/LANG/d/begining/2/1.jpg',
          'assets/img/story/01/LANG/d/begining/2/2.jpg',
          'assets/img/story/01/LANG/d/begining/2/3.jpg',
      'assets/img/story/01/LANG/d/begining/2/4.jpg',
     
      ]);
      */
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'replay_level_1_speech_0' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'replay_level_1_speech_1' },
	  { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'replay_level_1_speech_2' },
	  ] );
	  
    // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazkow z rozmowami
      // jesli w poziomie nie ma dialogow nie umieszczac w ogole
      /*
      level.define_end_speeches( [
          'assets/img/story/01/LANG/d/end/2/1.jpg',
      
      ]);
      */
	  
	   level.define_end_speeches( [
	   { background: 'assets/img/story/dialogues/szron_exit.png', text: 'replay_level_1_speech_3' },
	   ] );
    
    // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/misja2p.jpg',
        ]);
      
      // wave'y
      // dwa wave'y nie moga zdarzyc sie w tej samej klatce
    level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 8, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png'},
                { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 200, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 210, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 20 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 340, y: 270, slow: 0.3, injure: 0.3, ttl: 20 * 24 },
              ],

              bots: [
			    { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 330, y: 610, kind: "Mutant", count: 1, ai: 'amok'},	
			    { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
			    { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 340, y: 610, kind: "Mutant", count: 1, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 430, y: 170, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 10 * 24, health_add: [125,125], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 440, y: 410, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 10 * 24, health_add: [125,125], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 420, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 10 * 24, health_add: [55,55], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 260, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 10 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
                { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 34, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 610, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 620, y: 435, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 160, y: 250, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 34 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 450, y: 400, slow: 0.3, injure: 0.3, ttl: 34 * 24 },
			  { x: 450, y: 140, slow: 0.3, injure: 0.3, ttl: 34 * 24 },
              ],

              bots: [
			    { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 50, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 505, kind: "Mutant", count: 1, ai: 'amok'},				
			    { x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},	
				{ x: 810, y: 80, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},	
				{ x: 810, y: 80, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 210, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 350, y: 230, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 720, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 740, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 210, y: 520, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [135,135], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 400, y: 260, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [40,40], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 690, y: 260, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [40,40], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 260, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			  { x: 720, y: 250, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
                { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 430, y: 515, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 560, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 100, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 175, y: 360, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 440, y: 150, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			  { x: 620, y: 460, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
			    { x: 330, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 50, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 330, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 50, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 525, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 330, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 310, y: 610, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 65, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 505, kind: "Ślepy Mutant", count: 1, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 400, y: 140, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 460, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 95, y: 155, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 180, y: 335, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 620, y: 430, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 620, y: 135, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [110,110], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 320, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [40,40], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 700, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [40,40], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 260, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			  { x: 700, y: 510, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
				{ x: 740, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 680, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 700, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 680, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 470, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 430, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 270, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],

              bots: [
			    { x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Ślepy Mutant", count: 1, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
			  { x: 330, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 330, y: 450, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			  { x: 170, y: 240, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [120,120], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 180, y: 355, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [120,120], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 430, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [80,80], ammo_add: [0.6, 0.9], viols_add: [15,15] },
			  { x: 700, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [120,120], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [120,120], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 700, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [40,40], ammo_add: [0.6, 0.9], viols_add: [15,15] },
			  { x: 260, y: 320, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			  { x: 260, y: 160, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
         { x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
               { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
         { x: 740, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
         { x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png'},
               { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 100, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 340, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 560, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 560, y: 510, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 350, y: 260, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [75,75], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			  { x: 335, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [140,140], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 700, y: 275, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [140,140], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 220, y: 510, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [140,140], ammo_add: [0.3, 0.75], viols_add: [15,15] },
			  { x: 250, y: 200, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			  { x: 640, y: 388, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
			    { x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 2, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},	
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},	
				{ x: 810, y: 275, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Mutant", count: 2, ai: 'amok'},
				{ x: 320, y: 610, kind: "Mutant", count: 1, ai: 'amok'},					
              ],

              marks: [ // strzalki
			  { x: 740, y: 60, src: 'assets/img/strzalki/arrow_left.png'},
              { x: 740, y: 515, src: 'assets/img/strzalki/arrow_left.png'},
			  { x: 740, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
		  	  { x: 10, y: 70, src: 'assets/img/strzalki/arrow_right.png'},
              { x: 320, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ],
            },
            // red - amok time
            {
              timeout: 28, // czas trwania fazy w sekundach!

              droppings: [
			  { x: 330, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [30,30] },
			  { x: 340, y: 410, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [30,30] },
			  { x: 340, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 28 * 24, health_add: [75,75], ammo_add: [0.6, 0.9], viols_add: [30,30] },
			  { x: 670, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [30,30] },
			  { x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 28 * 24, health_add: [165,165], ammo_add: [0.1, 0.25], viols_add: [30,30] },
			  { x: 700, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 28 * 24, health_add: [75,75], ammo_add: [0.6, 0.9], viols_add: [30,30] },
			  { x: 460, y: 130, slow: 0.3, injure: 0.3, ttl: 28 * 24 },
              ],

              bots: [
			    { x: 810, y: 275, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Ślepy Mutant", count: 2, ai: 'amok'},
				{ x: 810, y: 515, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 320, y: 610, kind: "Ślepy Mutant", count: 1, ai: 'amok'},			
				{ x: 810, y: 275, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 60, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: 810, y: 515, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
				{ x: -10, y: 70, kind: "Ślepy Mutant", count: 2, ai: 'amok'},
				{ x: 320, y: 610, kind: "Ślepy Mutant", count: 1, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            }
        );
    
  level.define_prizes( {
      });
      level.define_violki_prize(200);
    }
  );

  // >>>>>>>>>>
  // REPLAY LEVEL 1 >>
  // >>>>>>>>>>
  
   // <<<<<<<<<<
  // << REPLAY LEVEL 2
  // <<<<<<<<<<

  // tworzmy nowy poziom w nawiazie podajemy jego numer porzadkowy
  var replay_level_2 = levels.define_replay_level(2);
  // nazwa pojawiajaca sie na mapie
  replay_level_2.set_name("replay_level_2_name");
  // lewy dolny rog napisu
  replay_level_2.set_map_position(172, 41);
  // pierwsza linijka opisu poziomu
  replay_level_2.set_desc('replay_level_2_desc');
  replay_level_2.set_previous(2);
  // opisujemy szczegoly mapy poziomu
  replay_level_2.set_level_data(
    function level_data(level) {
      // powtarzamy numer porzadkowy - koniecznie
      level.set_id(2);

      // ustawiamy tlo poziomu
      level.set_background_image ('assets/img/levels/gdanska_fabryka.png');
      // (opcjonalnie) ustawiamy pierwszy plan poziomu - jest rysowany na tle i na postaciach
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // ustawimy kolejne punkty z ktorych moga startowac boty, w nawiazie podajemy wspolrzedne tych punktow
      // powinny byc poza mapa (lub w miejscu przykrytym pierwszym planem) tak aby gracz nie zobaczyl
      // botow pojawiajacych sie z nikad

      // gdzie gra bedzie rozmieszczac postacie graczy
      // dla kazdego poziomu musza byc 4 takie punkty, bo kazdy poziom bedzie mozna zagrac
      // majac 4 postacie w druzynie
      level.define_soldier_start_point(379,388);
      level.define_soldier_start_point(448,388);
      level.define_soldier_start_point(379,439);
      level.define_soldier_start_point(448,439);

      // limit jednoczesnie widocznych w grze botow
      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      // Tworzymy siatke poziomu
      var mesh = level.mesh;

    mesh.define_barrier(20,20, 277,20);
    mesh.define_barrier(277,20, 277,-40);
    mesh.define_barrier(277,-40, 520,-40);
    mesh.define_barrier(520,-40, 520,20);
    mesh.define_barrier(520,20, 780,20);
    mesh.define_barrier(780,20, 780,580);
    mesh.define_barrier(780,580, 638,580);
    mesh.define_barrier(638,580, 674,509);
    mesh.define_barrier(674,509, 674,475);
    mesh.define_barrier(674,475, 652,475);
    mesh.define_barrier(652,475, 652,413);
    mesh.define_barrier(652,413, 602,366);
    mesh.define_barrier(602,366, 559,366);
    mesh.define_barrier(559,366, 559,471);
    mesh.define_barrier(559,471, 540,488);
    mesh.define_barrier(540,488, 540,580);
    mesh.define_barrier(540,580, 470,580);
    mesh.define_barrier(470,580, 470,650);
    mesh.define_barrier(470,650, 270,650);
    mesh.define_barrier(270,650, 270,580);
    mesh.define_barrier(270,580, 20,580);
    mesh.define_barrier(20,580, 20,20);
    mesh.define_barrier(160,92, 242,92);
    mesh.define_barrier(242,92, 242,122);
    mesh.define_barrier(242,122, 294,146);
    mesh.define_barrier(294,146, 294,440);
    mesh.define_barrier(294,440, 216,440);
    mesh.define_barrier(216,440, 216,521);
    mesh.define_barrier(216,521, 160,521);
    mesh.define_barrier(160,521, 160,92);
    mesh.define_barrier(446,264, 446,328);
    mesh.define_barrier(446,328, 380,328);
    mesh.define_barrier(380,328, 380,264);
    mesh.define_barrier(380,264, 446,264);
    mesh.define_barrier(566,92, 584,92);
    mesh.define_barrier(584,92, 652,154);
    mesh.define_barrier(652,154, 652,255);
    mesh.define_barrier(652,255, 604,255);
    mesh.define_barrier(604,255, 533,220);
    mesh.define_barrier(533,220, 533,136);
    mesh.define_barrier(533,136, 566,92);
    
    mesh.define_wall(533,136, 652,255);
    mesh.define_wall(533,220, 652,154);
    mesh.define_wall(559,366, 638,579);
    mesh.define_wall(380,264, 446,328);
    mesh.define_wall(446,264, 380,328);
    mesh.define_wall(160,521, 294,146);
    mesh.define_wall(160,92, 294,440);
    mesh.define_wall(559,471, 652,413);

    // Dialogi w grze, po prostu tablica do kolejnych obrazkóww z rozmowami
     // jesli w poziomie nie ma dialogow nie umieszczac w ogóle
     /*
      level.define_speeches( [
          'assets/img/story/02/LANG/d/begining/2/1.jpg',
          'assets/img/story/02/LANG/d/begining/2/2.jpg',
     
      ]);
      */
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'replay_level_2_speech_0' },
	  { background: 'assets/img/story/dialogues/szron_olaf_exit.png', text: 'replay_level_2_speech_1' },
	  ] );
	  
    // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazkow z rozmowami
      // jesli w poziomie nie ma dialogow nie umieszczac w ogole
      /*
      level.define_end_speeches( [
          'assets/img/story/02/LANG/d/end/2/1.jpg',
      'assets/img/story/02/LANG/d/end/2/2.jpg',
      ]);
      */
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'replay_level_2_speech_2' },
	  { background: 'assets/img/story/dialogues/szron_olaf_exit.png', text: 'replay_level_2_speech_3' },
	  ] );
    
    // Tipsy w grze, po prostu tablica do kolejnych obrazkow z tipami
        // jesli w poziomie nie ma tipow nie umieszczac w ogole
         level.define_tips( [
         'assets/img/story/tips/misja3p.jpg',
        ]);
    
    level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 100, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 730, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 730, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 340, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
              ],

              bots: [
         { x: 320, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 310, y: 60, next: 1 },
                      1: { x: 100, y: 60, next: 2 }, 
                      2: { x: 90, y: 270, next: 1 },
                    },
                },
        
        { x: 470, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 480, y: 60, next: 1 },
                      1: { x: 720, y: 60, next: 2 }, 
                      2: { x: 720, y: 340, next: 1 },
                    },
                },
        { x: 300, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 290, y: 540, next: 1 },
                      1: { x: 90, y: 540, next: 2 }, 
                      2: { x: 90, y: 370, next: 1 },
                    },
                },
        
        { x: 450, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 510, y: 400, next: 1 },
                      1: { x: 550, y: 300, next: 2 }, 
                      2: { x: 720, y: 300, next: 1 },
                    },
                },
          { x: 320, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },   
        { x: 350, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },        
        { x: 470, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 340, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 340, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 360, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 500, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 400, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 410, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 410, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
      level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
          { x: 330, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 490, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 330, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 490, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 410, y: 370, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 410, y: 220, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 414, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 414, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 335, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 500, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 410, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 700, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 700, y: 410, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 415, y: 220, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
				{ x: 415, y: 370, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
          { x: 320, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 310, y: 60, next: 1 },
                      1: { x: 100, y: 60, next: 2 }, 
                      2: { x: 90, y: 270, next: 1 },
                    },
                },
        
        { x: 470, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 480, y: 60, next: 1 },
                      1: { x: 720, y: 60, next: 2 }, 
                      2: { x: 720, y: 340, next: 1 },
                    },
                },
        { x: 300, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 290, y: 540, next: 1 },
                      1: { x: 90, y: 540, next: 2 }, 
                      2: { x: 90, y: 370, next: 1 },
                    },
                },        
        { x: 450, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'pathfinder', params: {
                      0: { x: 510, y: 400, next: 1 },
                      1: { x: 550, y: 300, next: 2 }, 
                      2: { x: 720, y: 300, next: 1 },
                    },
                },
        { x: 340, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 500, y: -10, kind: "Korsarz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 410, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'wanderer' },
        { x: 500, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'wanderer' },
        { x: 350, y: 610, kind: "Mutant_z_magazynu", count: 3, ai: 'wanderer' },
        { x: 370, y: 610, kind: "Mutant_z_magazynu", count: 3, ai: 'wanderer' },
        { x: 460, y: 610, kind: "Mutant_z_magazynu", count: 3, ai: 'wanderer' },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
          { x: 100, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 100, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 100, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 410, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 410, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [80,80], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 330, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 500, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 410, y: 220, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
        { x: 600, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 220, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 360, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 710, y: 220, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 710, y: 360, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 415, y: 185, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 415, y: 388, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 330, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 500, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 465, y: 115, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
				{ x: 345, y: 420, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
          { x: 320, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 310, y: 60, next: 1 },
                      1: { x: 100, y: 60, next: 2 }, 
                      2: { x: 90, y: 520, next: 1 },
                    },
                },        
        { x: 470, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 480, y: 60, next: 1 },
                      1: { x: 720, y: 60, next: 2 }, 
                      2: { x: 720, y: 520, next: 1 },
                    },
                },
        { x: 320, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 310, y: 60, next: 1 },
                      1: { x: 100, y: 60, next: 2 }, 
                      2: { x: 90, y: 520, next: 1 },
                    },
                },        
        { x: 470, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 480, y: 60, next: 1 },
                      1: { x: 720, y: 60, next: 2 }, 
                      2: { x: 720, y: 520, next: 1 },
                    },
                },
        { x: 340, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'wanderer' },
        { x: 500, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'wanderer' },
        { x: 410, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'wanderer' },
        { x: 430, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 370, y: 610, kind: "Mutant_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 410, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'wanderer' },
        { x: 390, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'wanderer' },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
          { x: 100, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 100, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 330, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 490, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 330, y: 200, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.3, 0.6], viols_add: [10,10] },
        { x: 490, y: 200, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.3, 0.6], viols_add: [10,10] },
        { x: 410, y: 220, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
                { x: 340, y: 200, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 420, y: 200, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 500, y: 200, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 340, y: 380, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 420, y: 380, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 500, y: 380, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 340, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 500, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 730, y: 300, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
        { x: 340, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 430, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 500, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 410, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 220, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 380, r: 50 } },
		{ x: 340, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 430, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 500, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 410, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 220, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 380, r: 50 } },
		{ x: 340, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 430, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 500, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 410, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 220, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 1, ai: 'cruiser', params: { x: 415, y: 380, r: 50 } },
        { x: 320, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 310, y: 60, next: 1 },
                      1: { x: 100, y: 60, next: 2 }, 
                      2: { x: 90, y: 270, next: 1 },
                    },
                },        
        { x: 470, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 480, y: 60, next: 1 },
                      1: { x: 720, y: 60, next: 2 }, 
                      2: { x: 720, y: 340, next: 1 },
                    },
                },
        { x: 300, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 290, y: 540, next: 1 },
                      1: { x: 90, y: 540, next: 2 }, 
                      2: { x: 90, y: 370, next: 1 },
                    },
                },        
        { x: 450, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 510, y: 400, next: 1 },
                      1: { x: 550, y: 300, next: 2 }, 
                      2: { x: 720, y: 300, next: 1 },
                    },
                },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki  
          { x: 100, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 100, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 100, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 730, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 410, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.1, 0.25], viols_add: [10,10] },
        { x: 410, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.4, 0.8], viols_add: [10,10] },
        { x: 330, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.5, 1.0], viols_add: [10,10] },
        { x: 500, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [5,5], ammo_add: [0.5, 1.0], viols_add: [10,10] },
        { x: 410, y: 220, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
        { x: 260, y: 520, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
          { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
                { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
            },
            // orange - cautious time
            {
              timeout: 55, // czas trwania fazy w sekundach!

              droppings: [
                { x: 275, y: 100, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 260, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 530, y: 250, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 520, y: 435, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 688, y: 84, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 688, y: 422, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 123, y: 102, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 123, y: 518, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 330, y: 300, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
              ],

              bots: [
        { x: 320, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 310, y: 60, next: 1 },
                      1: { x: 100, y: 60, next: 2 }, 
                      2: { x: 90, y: 270, next: 1 },
                    },
                },
        { x: 300, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 290, y: 540, next: 1 },
                      1: { x: 90, y: 540, next: 2 }, 
                      2: { x: 90, y: 370, next: 1 },
                    },
                },          
        { x: 470, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 480, y: 60, next: 1 },
                      1: { x: 720, y: 60, next: 2 }, 
                      2: { x: 720, y: 340, next: 1 },
                    },
                },      
        { x: 450, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'pathfinder', params: {
                      0: { x: 510, y: 400, next: 1 },
                      1: { x: 550, y: 300, next: 2 }, 
                      2: { x: 720, y: 300, next: 1 },
                    },
                },
        { x: 340, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 430, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 340, y: 300, r: 50 } },
        { x: 500, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 500, y: 300, r: 50 } },
        { x: 410, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 415, y: 220, r: 50 } },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'cruiser', params: { x: 415, y: 380, r: 50 } },
        ],

              marks: [ // strzalki
        { x: 390, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
              { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ],
            },
            // red - amok time
            {
              timeout: 55, // czas trwania fazy w sekundach!

              droppings: [
                { x: 100, y: 100, health: 1.0, ttl: 55 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 100, y: 520, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 55 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 710, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 55 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 710, y: 520, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 55 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 330, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 55 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 600, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 55 * 24, health_add: [120,120], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 430, y: 185, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.5, 0.9], viols_add: [15,15] },
				{ x: 360, y: 420, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 55 * 24, health_add: [5,5], ammo_add: [0.5, 0.9], viols_add: [15,15] },
				{ x: 720, y: 300, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
				{ x: 100, y: 300, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
              ],

              bots: [
        { x: 340, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'amok' },
        { x: 430, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'amok' },
        { x: 500, y: -10, kind: "Korsarz_z_magazynu", count: 2, ai: 'amok' },
        { x: 370, y: 610, kind: "Mutant_z_magazynu", count: 2, ai: 'amok' },
        { x: 410, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 2, ai: 'amok' },
        { x: 370, y: 610, kind: "Mutant_siłacz_z_magazynu", count: 2, ai: 'amok' },
        ],

              marks: [ // strzalki
              ],
            }
        );

      // definiujemy nagrody
      // define_prizes( { "Klucz_itemu_1": liczba, "Klucz_itemu_2": liczba, ..., "Klucz_itemu_6": liczba } )
      level.define_prizes( {
        // "Pojemniki z kwasem": 2,
    //"Korsarski kordelas": 1,
      });

      // definiujemy ilosc violek nagrody
      level.define_violki_prize(400);
    }
  );

  // >>>>>>>>>>
  // REPLAY LEVEL 2 >>
  // >>>>>>>>>>
  
   // <<<<<<<<<<
  // << REPLAY LEVEL 3
  // <<<<<<<<<<

  
  // tworzmy nowy poziom w nawiazie podajemy jego numer porzadkowy
  var replay_level_3 = levels.define_replay_level(3);
  // nazwa pojawiajaca sie na mapie
  replay_level_3.set_name("replay_level_3_name");
  // lewy dolny rog napisu
  replay_level_3.set_map_position(160, 72);
  // pierwsza linijka opisu poziomu
  replay_level_3.set_desc('replay_level_3_desc');
  replay_level_3.set_previous(3);
  // opisujemy szczegóły mapy poziomu
  replay_level_3.set_level_data(
    function level_data(level) {
      // powtarzamy numer porzadkowy - koniecznie
      level.set_id(3);

      // ustawiamy tlo poziomu
      level.set_background_image ('assets/img/levels/gdanskie_wybrzeze.png');
      // (opcjonalnie) ustawiamy pierwszy plan poziomu - jest rysowany na tle i na postaciach
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      // ustawimy kolejne punkty z ktorych moga startowac boty, w nawiazie podajemy wspolrzedne tych punktow
      // powinny byc poza mapa (lub w miejscu przykrytym pierwszym planem) tak aby gracz nie zobaczyl
      // botow pojawiajacych sie z nikad

      // gdzie gra bedzie rozmieszczać postacie graczy
      // dla kazdego poziomu musza byc 4 takie punkty, bo kazdy poziom bedzie mozna zagrac
      // majac 4 postacie w druzynie
      level.define_soldier_start_point(542,284);
      level.define_soldier_start_point(500,284);
      level.define_soldier_start_point(500,332);
      level.define_soldier_start_point(542,332);

      // limit jednocześnie widocznych w grze botów
      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      // Tworzymy siatke poziomu
      var mesh = level.mesh;

     mesh.define_barrier(612,-40, 612,201);
    mesh.define_barrier(612,201, 688,201);
    mesh.define_barrier(688,201, 688,243);
    mesh.define_barrier(688,243, 800,243);
    mesh.define_barrier(800,243, 800,356);
    mesh.define_barrier(800,356, 612,356);
    mesh.define_barrier(612,356, 612,412);
    mesh.define_barrier(612,412, 458,412);
    mesh.define_barrier(458,412, 368,462);
    mesh.define_barrier(368,462, 469,650);
    mesh.define_barrier(469,650, -40,640);
    mesh.define_barrier(-40,640, -40,-40);
    mesh.define_barrier(-40,-40, 612,-40);
    mesh.define_barrier(169,70, 454,70);
    mesh.define_barrier(454,70, 512,97);
    mesh.define_barrier(512,97, 532,162);
    
    //mesh.define_barrier(564,130, 547,166);
    mesh.define_barrier(532,162, 464,166);
    mesh.define_barrier(464,166, 431,222);
    mesh.define_barrier(431,222, 417,222);
    mesh.define_barrier(417,222, 371,182);
    mesh.define_barrier(371,182, 296,182);
    mesh.define_barrier(296,182, 212,256);
    mesh.define_barrier(212,256, 212,297);
    mesh.define_barrier(212,297, 188,284);
    mesh.define_barrier(188,284, 146,242);
    mesh.define_barrier(146,242, 130,164);
    mesh.define_barrier(130,164, 166,130);
    mesh.define_barrier(166,130, 169,70);
    mesh.define_barrier(66,341, 123,341);
    mesh.define_barrier(123,341, 172,386);
    mesh.define_barrier(172,386, 192,373);
    mesh.define_barrier(192,373, 254,412);
    mesh.define_barrier(254,412, 284,455);
    mesh.define_barrier(284,455, 293,485);
    mesh.define_barrier(293,485, 334,524);
    mesh.define_barrier(334,524, 306,558);
    mesh.define_barrier(66,424, 66,341);
    mesh.define_barrier(66,424, 169,559);
    mesh.define_barrier(169,559, 268,588);
    mesh.define_barrier(306,558, 268,588);
    
    mesh.define_wall(114,424, 284,455);
    mesh.define_wall(192,373, 220,524);
    mesh.define_wall(169,70, 212,297);
    mesh.define_wall(166,130, 512,97);
    mesh.define_wall(454,70, 464,166);
    mesh.define_wall(368,462, 469,620);
    mesh.define_wall(612,201, 688,166);
    
    mesh.define_wall(10,10, 790,10);
    mesh.define_wall(790,10, 790,590);
    mesh.define_wall(790,590, 10,590);
    mesh.define_wall(10,590, 10,10);
  
  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'replay_level_3_speech_0' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'replay_level_3_speech_1' },
	  { background: 'assets/img/story/dialogues/szron_olaf_exit.png', text: 'replay_level_3_speech_2' },
	  ] );
    
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'replay_level_3_speech_3' },
	  { background: 'assets/img/story/dialogues/szron_olaf_exit.png', text: 'replay_level_3_speech_4' },
	  ] );

         level.define_tips( [
         'assets/img/story/tips/misja4p.jpg',
        ]);
    
      level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki        
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
        { x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
        { x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [
                { x: 600, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 350, y: 210, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 300, y: 450, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
              ],

              bots: [				  
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},				
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 320, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},				
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 320, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 560, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},				
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz_7", count: 1, ai: 'amok'},	
				{ x: 570, y: -10, kind: "Korsarz_7", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki    
				{ x: 400, y: 240, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 400, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 270, y: 320, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 500, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [70,70], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 380, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] }, 
				{ x: 700, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },  
				{ x: 70, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },       
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
			{ x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [
                { x: 700, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 580, y: 86, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 185, y: 330, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 370, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 290, y: 215, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 350, y: 300, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [				  
                { x: 560, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 290, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: -10, y: 280, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 560, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 290, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: -10, y: 280, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 580, y: -10, kind: "Korsarz_7", count: 1, ai: 'amok'},	
				{ x: -10, y: 300, kind: "Korsarz_7", count: 1, ai: 'amok'},
				{ x: 380, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
				{ x: 100, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 330, y: 200, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 330, y: 450, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 570, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 560, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [115,115], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 390, y: 240, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },	
				{ x: 390, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },	
				{ x: 700, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
				{ x: 70, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
			{ x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
                { x: 70, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 70, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 580, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 380, y: 556, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 760, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 300, y: 230, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
				{ x: 520, y: 370, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
				{ x: 350, y: 300, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [				  
                { x: 560, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 560, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 290, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: -10, y: 280, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 290, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: -10, y: 280, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 580, y: -10, kind: "Korsarz_8", count: 1, ai: 'amok'},	
				{ x: -10, y: 300, kind: "Korsarz_8", count: 1, ai: 'amok'},
				{ x: 380, y: 610, kind: "Korsarz_8", count: 1, ai: 'amok'},					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
				{ x: 300, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 540, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 300, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 560, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 400, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [130,130], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 300, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },	
				{ x: 500, y: 300, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },
				{ x: 570, y: 140, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
				{ x: 200, y: 340, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
			{ x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
			{ x: 10, y: 150, src: 'assets/img/strzalki/arrow_right.png' },
			{ x: 10, y: 535, src: 'assets/img/strzalki/arrow_right.png' },
			{ x: 300, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
                { x: 580, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 400, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 200, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 50, y: 140, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 50, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 40, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 100, y: 560, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 260, y: 330, slow: 0.3, injure: 0.0, ttl: 45 * 24 },
				{ x: 570, y: 300, slow: 0.3, injure: 0.0, ttl: 45 * 24 },
              ],

              bots: [				  
                { x: 360, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: -10, y: 535, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: -10, y: 535, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'}, 				
				{ x: 290, y: -10, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 300, y: 40, r: 50 } },	
				{ x: -10, y: 140, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 130, y: 150, r: 50 } },
				{ x: -10, y: 520, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 110, y: 530, r: 50 } },
				{ x: 290, y: -10, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 300, y: 40, r: 50 } },	
				{ x: -10, y: 140, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 130, y: 150, r: 50 } },
				{ x: -10, y: 520, kind: "Korsarz", count: 1, ai: 'cruiser', params: { x: 110, y: 530, r: 50 } },
				{ x: 300, y: -10, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 300, y: 40, r: 50 } },	
				{ x: -10, y: 150, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 130, y: 150, r: 50 } },
				{ x: -10, y: 530, kind: "Korsarz_8", count: 1, ai: 'cruiser', params: { x: 110, y: 530, r: 50 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
    
    level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 580, y: 40, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 400, y: 40, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 200, y: 40, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 50, y: 140, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 50, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 40, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 100, y: 560, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [100,100], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 300, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [20,20] },
				{ x: 450, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 600, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [140,140], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 190, y: 330, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },	
				{ x: 580, y: 130, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },
				{ x: 340, y: 470, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [5,5], ammo_add: [0.4, 0.8], viols_add: [15,15] },
				{ x: 700, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 780, y: 300, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
			{ x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
                { x: 300, y: 210, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 320, y: 420, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 620, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
				{ x: 760, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 460, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
				{ x: 400, y: 300, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [		
				{ x: 360, y: 610, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz_biegacz", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz", count: 1, ai: 'amok'},	
				{ x: 370, y: 610, kind: "Korsarz_7", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz_7", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz_7", count: 1, ai: 'amok'},
				{ x: 360, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz", count: 1, ai: 'amok'},					
              ],

              marks: [ // strzalki
				{ x: 360, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
				{ x: 570, y: 5, src: 'assets/img/strzalki/arrow_down.png' },
				{ x: 10, y: 290, src: 'assets/img/strzalki/arrow_right.png' },
              ],
            },
            // red - amok time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
                { x: 300, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 450, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.1, 0.25], viols_add: [15,15] },
				{ x: 600, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 40 * 24, health_add: [220,220], ammo_add: [0.1, 0.25], viols_add: [25,25] },
				{ x: 450, y: 240, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 40 * 24, health_add: [5,5], ammo_add: [0.5, 1.0], viols_add: [25,25] },
				{ x: 700, y: 300, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [		
				{ x: 360, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: 580, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: -10, y: 300, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz_siłacz_z_magazynu", count: 1, ai: 'amok'},
				{ x: 370, y: 610, kind: "Korsarz_8", count: 1, ai: 'amok'},        				
				{ x: 570, y: -10, kind: "Korsarz_8", count: 1, ai: 'amok'},
				{ x: -10, y: 310, kind: "Korsarz_8", count: 1, ai: 'amok'},	
				{ x: -10, y: 310, kind: "Król_Korsarzy", count: 1, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            }
        );

      // definiujemy nagrody
      // define_prizes( { "Klucz_itemu_1": liczba, "Klucz_itemu_2": liczba, ..., "Klucz_itemu_6": liczba } )
      level.define_prizes( {
    // "Naboje pistoletowe-samoróbki": 2,
      });

      // definiujemy ilość violek nagrody
      level.define_violki_prize(350);
    }
  );

  // >>>>>>>>>>
  // REPLAY LEVEL 3 >>
  // >>>>>>>>>>
  
  
   //>>>>>>>>>>>>
  // REPLAY LEVEL 4 >>>>>>>
  //>>>>>>>>>>>>
  
  var replay_level_4 = levels.define_replay_level(4);
  replay_level_4.set_name('replay_level_4_name');
  replay_level_4.set_map_position(210, 120);
  replay_level_4.set_desc('replay_level_4_desc');
  replay_level_4.set_previous(4);

  replay_level_4.set_level_data(
    function level_data(level) {
      level.set_id(4);

      level.set_background_image ('assets/img/levels/warszawska_ulica.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      level.define_soldier_start_point(375,120); 
      level.define_soldier_start_point(375,200); 
      level.define_soldier_start_point(240,120); 
      level.define_soldier_start_point(240,200); 

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

	  mesh.define_barrier(835,40, 835,564);
	  mesh.define_barrier(835,564, 451,564);
	  mesh.define_barrier(451,564, 451,635);
	  mesh.define_barrier(451,635, 345,635);
	  mesh.define_barrier(345,635, 345,558);
	  mesh.define_barrier(345,558, 60,558);
	  mesh.define_barrier(60,558, 72,480);
	  mesh.define_barrier(72,480, 102,458);
	  mesh.define_barrier(102,458, 66,398);
	  mesh.define_barrier(66,398, 93,337);
	  mesh.define_barrier(93,337, 48,302);
	  mesh.define_barrier(48,302, 82,241);
	  mesh.define_barrier(82,241, 60,124);
	  mesh.define_barrier(60,124, 140,35);
	  mesh.define_barrier(140,35, 348,35);
	  mesh.define_barrier(348,35, 384,0);
	  mesh.define_barrier(384,0, 384,-35);
	  mesh.define_barrier(384,-35, 457,-35);
	  mesh.define_barrier(457,-35, 457,40);
	  mesh.define_barrier(457,40, 530,40);
	  mesh.define_barrier(530,40, 542,98);
	  mesh.define_barrier(542,98, 556,98);
	  mesh.define_barrier(556,98, 556,40);
	  mesh.define_barrier(556,40, 835,40);
	  
	  mesh.define_barrier(542,352, 580,328);
	  mesh.define_barrier(580,328, 608,362);
	  mesh.define_barrier(608,362, 586,454);
	  mesh.define_barrier(586,454, 599,468);
	  mesh.define_barrier(599,468, 599,506);
	  mesh.define_barrier(599,506, 553,515);
	  mesh.define_barrier(553,515, 483,522);
	  mesh.define_barrier(483,522, 424,478);
	  mesh.define_barrier(424,478, 529,392);
	  mesh.define_barrier(529,392, 542,352);
	  mesh.define_barrier(542,352, 580,328);
	  
	  mesh.define_barrier(581,160, 584,262);
	  mesh.define_barrier(584,262, 552,262);
	  mesh.define_barrier(552,262, 494,272);
	  mesh.define_barrier(494,272, 515,182);
	  mesh.define_barrier(515,182, 534,147);
	  mesh.define_barrier(534,147, 581,160);
	  
	  mesh.define_barrier(266,200, 354,218);
	  mesh.define_barrier(354,218, 360,262);
	  mesh.define_barrier(360,262, 286,268);
	  mesh.define_barrier(286,268, 372,308);
	  mesh.define_barrier(372,308, 313,340);
	  mesh.define_barrier(313,340, 242,344);
	  mesh.define_barrier(242,344, 200,328);
	  mesh.define_barrier(200,328, 194,290);
	  mesh.define_barrier(194,290, 222,263);
	  mesh.define_barrier(222,263, 201,227);
	  mesh.define_barrier(201,227, 266,200);
	  
	  mesh.define_wall(72,480, 102,458);
	  mesh.define_wall(93,337, 48,302);
	  mesh.define_wall(348,35, 384,0);
	  mesh.define_wall(457,-35, 457,40);
	  mesh.define_wall(345,635, 345,558);
	  mesh.define_wall(451,564, 451,635);
	  mesh.define_wall(200,328, 354,218);
	  mesh.define_wall(201,227, 372,308);
	  
	  mesh.define_wall(490,272, 581,160);
	  mesh.define_wall(584,262, 524,147);
	  
	  mesh.define_wall(530,40, 542,98);
	  mesh.define_wall(542,98, 550,40);
	  
	  mesh.define_wall(483,523, 580,328);
	  mesh.define_wall(542,352, 599,506);
	  
	  mesh.define_wall(599,506, 424,478);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
	  
	  level.define_speeches( [ 
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'replay_level_4_speech_0' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'replay_level_4_speech_1' },
	  { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'replay_level_4_speech_2' },
	  ] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
	level.define_end_speeches( [
	{ background: 'assets/img/story/dialogues/lidia_olaf_next_exit.png', text: 'replay_level_4_speech_3' },
	{ background: 'assets/img/story/dialogues/olaf_lidia_exit.png', text: 'replay_level_4_speech_4' },
	] );
	
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);
		 
		 level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 12, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
			{ x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 22, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 160, y: 390, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 22 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
			 { x: 160, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 22 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [3,3] },
			 { x: 410, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 22 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
			 { x: 400, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 22 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [2,2] },
			 { x: 700, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 22 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 700, y: 460, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 22 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
	 		 { x: 280, y: 100, slow: 0.3, injure: 0.3, ttl: 22 * 24 },
			 { x: 280, y: 460, slow: 0.3, injure: 0.3, ttl: 22 * 24 },
              ],
			  
              bots: [	
			    { x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},			  
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
				{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},			  
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },											   { x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},			  
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
				{ x: 390, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'amok'},			  
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
        		{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},			  
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },
				{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'}, 
				{ x: 400, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},			  
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );

      level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 17, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 140, y: 200, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 140, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 200, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 280, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 280, y: 380, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [85,85], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 150, y: 510, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [10,10] },
			  { x: 150, y: 80, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [10,10] },
			  { x: 440, y: 90, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
			  { x: 420, y: 530, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
        { x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
        //{ x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
        { x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
        { x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
         //{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 720, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 720, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 720, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 150, y: 120, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 430, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
	 		 { x: 140, y: 310, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 440, y: 370, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],
			  
              bots: [							       					       
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },						       			
				{ x: 400, y: -10, kind: "Ghul", count: 1, ai: 'amok'},
				{ x: 400, y: -10, kind: "Reptilian", count: 1, ai: 'amok'},	
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy", count: 2, ai: 'amok'},				
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 270, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },						       			
				{ x: 400, y: -10, kind: "Ghul", count: 1, ai: 'amok'},
				{ x: 400, y: -10, kind: "Reptilian", count: 1, ai: 'amok'},
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy", count: 2, ai: 'amok'},
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
	  
	  level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 17, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 270, y: 130, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 150, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [180,180], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 140, y: 180, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [10,10] },
			  { x: 430, y: 180, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [10,10] },
			  { x: 280, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [10,10] },
			  { x: 660, y: 130, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
			  { x: 660, y: 440, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 720, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 720, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 720, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 140, y: 160, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 140, y: 370, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
	 		 { x: 430, y: 160, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 430, y: 360, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],
			  
              bots: [							       					       
				{ x: 810, y: 80, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 520, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },				       			
				{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 410, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 810, y: 80, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 520, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },				       			
				{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 390, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 410, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},
				{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'amok'},			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );

		level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 420, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 200, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 420, y: 320, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },	
			  { x: 400, y: 460, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 140, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 140, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },			  
			  { x: 270, y: 160, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.7, 0.95], viols_add: [10,10] },
			  { x: 270, y: 390, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.7, 0.95], viols_add: [10,10] },
			  { x: 190, y: 510, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
			  { x: 190, y: 80, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			{ x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
			{ x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 720, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 720, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 720, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 430, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 430, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 410, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
	 		 { x: 140, y: 120, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 140, y: 280, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 140, y: 480, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],
			  
              bots: [		
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },		
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },	
				{ x: 810, y: 70, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },	
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok'},
				{ x: 810, y: 70, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },				
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 2, ai: 'amok'},				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			  { x: 270, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 270, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			  { x: 130, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },	
			  { x: 410, y: 270, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.1, 0.25], viols_add: [10,10] },		  
			  { x: 140, y: 120, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.7, 0.95], viols_add: [10,10] },
			  { x: 140, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.7, 0.95], viols_add: [10,10] },
			  { x: 440, y: 100, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			  { x: 400, y: 480, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
				{ x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
				{ x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ]
            },
            // orange - cautious time
            {
              timeout: 50, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 140, y: 130, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 270, y: 130, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 440, y: 130, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 140, y: 460, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 290, y: 460, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 400, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 710, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 710, y: 290, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
			 { x: 710, y: 490, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [5,5], ammo_add: [0.1, 0.25], viols_add: [5,5] },
	 		 { x: 549, y: 539, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 520, y: 120, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 618, y: 303, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
              ],
			  
              bots: [							       					       				       			
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 410, y: -10, kind: "Ghul", count: 1, ai: 'amok' },	
				{ x: 410, y: 610, kind: "Ghul", count: 1, ai: 'amok' },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 410, y: -10, kind: "Ghul", count: 1, ai: 'amok' },	
				{ x: 410, y: 610, kind: "Ghul", count: 1, ai: 'amok' },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 810, y: 70, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 410, y: -10, kind: "Ghul", count: 1, ai: 'amok' },	
				{ x: 410, y: 610, kind: "Ghul", count: 1, ai: 'amok' },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
              ],

              marks: [ 
				{ x: 400, y: 10, src: 'assets/img/strzalki/arrow_down.png' },
				{ x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 740, y: 280, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 740, y: 520, src: 'assets/img/strzalki/arrow_left.png' },
				{ x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png' },
              ],
			  
            },
            // red - amok time
            {
              timeout: 80, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 135, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 80 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			 { x: 165, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 80 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [15,15] },
			 { x: 410, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 80 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 440, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 80 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 700, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 80 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 700, y: 470, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 80 * 24, health_add: [135,135], ammo_add: [0.1, 0.25], viols_add: [10,10] },
			 { x: 700, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 80 * 24, health_add: [5,5], ammo_add: [0.65, 0.9], viols_add: [10,10] },
			 { x: 140, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 80 * 24, health_add: [5,5], ammo_add: [0.65, 0.9], viols_add: [10,10] },
              ],
			  
              bots: [
				{ x: 810, y: 70, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },			  
				{ x: 810, y: 70, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok' },	
				{ x: 410, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok' },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 2, ai: 'amok' },
				{ x: 810, y: 70, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 2, ai: 'amok' },
				{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok' },	
				{ x: 410, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok' },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 810, y: 70, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 240, y: 125, r: 100 } },							       
				{ x: 810, y: 270, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 130, y: 300, r: 100 } },	
				{ x: 810, y: 540, kind: "Ghul_pancerny", count: 1, ai: 'cruiser', params: { x: 140, y: 520, r: 100 } },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 1, ai: 'amok' },
				{ x: 410, y: -10, kind: "Ghul_pancerny", count: 1, ai: 'amok' },	
				{ x: 410, y: 610, kind: "Ghul_pancerny", count: 1, ai: 'amok' },
				{ x: 333, y: 284, kind: "Szczur_z_Warszawy_Kolos", count: 2, ai: 'amok' },
              ],

              marks: [ // strzalki
              ],
            }
        );
		
      level.define_prizes( {
        //"Naboje pistoletowe-samoróbki": 2,
        //"Korsarski kordelas": 1,
    //"Nowak-3": 1,
      });

      level.define_violki_prize(450);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 4<<<<<
  //<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 5>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_5 = levels.define_replay_level(5);
  replay_level_5.set_name('replay_level_5_name');
  replay_level_5.set_map_position(235, 130);
  replay_level_5.set_desc('replay_level_5_desc');
  replay_level_5.set_previous(5);

  replay_level_5.set_level_data(
    function level_data(level) {
      level.set_id(5);

      level.set_background_image ('assets/img/levels/metro_swietokrzyska.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      level.define_soldier_start_point(370,480);
      level.define_soldier_start_point(420,480);
      level.define_soldier_start_point(470,480);
      level.define_soldier_start_point(520,480);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

	  mesh.define_barrier(830,18, 830,582);
	  mesh.define_barrier(830,582, 684,582);
	  mesh.define_barrier(684,582, 684,635);
	  mesh.define_barrier(684,635, 608,635);
	  mesh.define_barrier(608,635, 608,582);
	  mesh.define_barrier(608,582, 488,582);
	  mesh.define_barrier(488,582, 488,635);
	  mesh.define_barrier(488,635, 321,635);
	  mesh.define_barrier(321,635, 321,582);
	  mesh.define_barrier(321,582, 178,582);
	  mesh.define_barrier(178,582, 174,635);
	  mesh.define_barrier(174,635, 110,633);
	  mesh.define_barrier(110,633, 100,582);
	  mesh.define_barrier(100,582, -30,582);
	  mesh.define_barrier(-30,582, -30,18);
	  mesh.define_barrier(-30,18, 88,18);
	  mesh.define_barrier(88,18, 88,-30);
	  mesh.define_barrier(88,-30, 212,-30);
	  mesh.define_barrier(212,-30, 212,18);
	  mesh.define_barrier(212,18, 324,18);
	  mesh.define_barrier(324,18, 324,-30);
	  mesh.define_barrier(324,-30, 460,-30);
	  mesh.define_barrier(460,-30, 460,18);
	  mesh.define_barrier(460,18, 605,18);
	  mesh.define_barrier(605,18, 610,-30);
	  mesh.define_barrier(610,-30, 665,-30);
	  mesh.define_barrier(665,-30, 675,18);
	  mesh.define_barrier(675,18, 830,18);	  
	  
	  mesh.define_barrier(245,141, 368,133);
	  mesh.define_barrier(368,133, 405,144);
	  mesh.define_barrier(405,144, 462,135);
	  mesh.define_barrier(462,135, 445,83);
	  mesh.define_barrier(445,83, 451,80);
	  mesh.define_barrier(451,80, 474,134);
	  mesh.define_barrier(474,134, 598,135);
	  mesh.define_barrier(598,135, 598,143);
	  mesh.define_barrier(598,143, 645,136);
	  mesh.define_barrier(645,136, 639,158);
	  mesh.define_barrier(639,158, 610,160);
	  mesh.define_barrier(610,160, 598,177);
	  mesh.define_barrier(598,177, 610,199);
	  mesh.define_barrier(610,199, 599,215);
	  mesh.define_barrier(599,215, 509,222);
	  mesh.define_barrier(509,222, 503,246);
	  mesh.define_barrier(503,246, 483,201);
	  mesh.define_barrier(483,201, 464,206);
	  mesh.define_barrier(464,206, 468,262);
	  mesh.define_barrier(468,262, 489,284);
	  mesh.define_barrier(489,284, 502,337);
	  mesh.define_barrier(502,337, 539,318);
	  mesh.define_barrier(539,318, 588,326);
	  mesh.define_barrier(588,326, 602,406);
	  mesh.define_barrier(602,406, 409,407);
	  mesh.define_barrier(409,407, 387,386);
	  mesh.define_barrier(387,386, 341,380);
	  mesh.define_barrier(341,380, 291,393);
	  mesh.define_barrier(291,393, 247,414);
	  mesh.define_barrier(247,414, 219,376);
	  mesh.define_barrier(219,376, 330,326);
	  mesh.define_barrier(330,326, 335,280);
	  mesh.define_barrier(335,280, 361,254);
	  mesh.define_barrier(361,254, 330,240);
	  mesh.define_barrier(330,240, 242,206);
	  mesh.define_barrier(242,206, 247,191);
	  mesh.define_barrier(249,191, 302,167);
	  mesh.define_barrier(302,167, 245,141);
	  
	  mesh.define_wall(246,408, 350,334);
	  mesh.define_wall(357,334, 470,138);
	  mesh.define_wall(596,404, 284,149);
	  mesh.define_wall(470,151, 612,151);
	  
	  
	  level.define_speeches( [ 
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'replay_level_5_speech_0' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'replay_level_5_speech_1' },
	  { background: 'assets/img/story/dialogues/szron_lidia_exit.png', text: 'replay_level_5_speech_2' },
	  ] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
	level.define_end_speeches( [
	{ background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'replay_level_5_speech_3' },
	{ background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'replay_level_5_speech_4' },
	] );

	  level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 						
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 100, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 700, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 300, y: 280, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 550, y: 280, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [				
				{ x: -10, y: 96, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 420, y: 480, r: 200 } },
				{ x: 810, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 420, y: 480, r: 200 } },	
				{ x: 400, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 300, y: 280, r: 200 } },					
			    { x: 810, y: 96, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 80, r: 200 } },
				{ x: -10, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },								
				{ x: 400, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'wanderer', params: { x: 540, y: 280, r: 200 } },
				{ x: -10, y: 477, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 80, r: 200 } },
				{ x: 810, y: 265, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 540, y: 280, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
	  
	  level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 190, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 190, y: 450, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 650, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 650, y: 450, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 290, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 550, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 40, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 730, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 96, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 477, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 635, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 391, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 125, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 477, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 96, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 125, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 391, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 635, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 270, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 570, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 270, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
	 		 { x: 570, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 280, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 720, y: 280, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],

              bots: [
			    { x: 150, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 160, y: 485, r: 200 } },				
				{ x: 400, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 110, y: 300, r: 200 } },
				{ x: 810, y: 530, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 111, y: 488, r: 200 } },
				{ x: 150, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 600, y: 80, r: 200 } },
				{ x: -10, y: 280, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 290, y: 280, r: 200 } },
				{ x: 810, y: 530, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 550, y: 276, r: 200 } },
				{ x: 400, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 730, y: 280, r: 200 } },				
				{ x: -10, y: 280, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 688, y: 72, r: 200 } },			
				{ x: 810, y: 80, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 567, y: 273, r: 200 } },				
			    { x: 400, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 110, r: 200 } },
				{ x: 650, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 116, y: 473, r: 200 } },
				{ x: 650, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 747, y: 489, r: 200 } },				
				{ x: -10, y: 500, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 290, y: 279, r: 200 } },
				{ x: 650, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 700, y: 80, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 100, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 100, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 100, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 408, y: 75, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.95], viols_add: [5,5] },
				{ x: 300, y: 500, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.95], viols_add: [5,5] },
				{ x: 560, y: 500, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.95], viols_add: [5,5] },
				{ x: 280, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 550, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 400, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 150, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 88, y: 88, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 410, y: 480, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 710, y: 88, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],

              bots: [
				{ x: 810, y: 100, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 65, r: 200 } },
				{ x: 810, y: 300, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 540, y: 275, r: 200 } },
			  	{ x: -10, y: 300, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },
				{ x: -10, y: 100, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 715, y: 75, r: 200 } },				
				{ x: 810, y: 500, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 100, y: 520, r: 200 } },									
				{ x: 810, y: 300, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 540, y: 275, r: 200 } },				
				{ x: -10, y: 300, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 300, y: 280, r: 200 } },				
			    { x: -10, y: 500, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 715, y: 515, r: 200 } },
			    { x: -10, y: 100, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 715, y: 75, r: 200 } },
				{ x: 810, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 520, r: 200 } },				
				{ x: -10, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 715, y: 515, r: 200 } },				
				{ x: 810, y: 100, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 65, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 150, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 390, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 640, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 140, y: 540, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 400, y: 540, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 650, y: 540, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 100, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.77, 0.9], viols_add: [5,5] },
				{ x: 700, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.77, 0.9], viols_add: [5,5] },
				{ x: 280, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 550, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 100, y: 180, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 420, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 180, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 420, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 150, y: 47, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 710, y: 520, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],

              bots: [
			    { x: 400, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 116, y: 488, r: 200 } },
				{ x: -10, y: 500, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 296, y: 279, r: 200 } },
				{ x: 810, y: 80, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 650, y: 500, r: 200 } },
				{ x: 400, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 722, y: 495, r: 200 } },
				{ x: 150, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 115, y: 510, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 111, y: 97, r: 200 } },
				{ x: -10, y: 500, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 755, y: 285, r: 200 } },
				{ x: 150, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 704, y: 83, r: 200 } },
				{ x: 810, y: 80, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 92, y: 75, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 705, y: 504, r: 200 } },
				{ x: 400, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 101, y: 101, r: 200 } },
				{ x: 810, y: 530, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 559, y: 279, r: 200 } },
				{ x: -10, y: 80, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 290, y: 280, r: 200 } },
				{ x: 400, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 735, y: 100, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
	  
	  level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 120, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [200,200], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 700, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [200,200], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 390, y: 58, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [200,200], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 125, y: 75, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.9, 0.9], viols_add: [5,5] },
				{ x: 700, y: 75, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.9, 0.9], viols_add: [5,5] },
				{ x: 390, y: 485, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.9, 0.9], viols_add: [5,5] },
				{ x: 185, y: 170, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 180, y: 385, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 670, y: 170, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 630, y: 375, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 50, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 340, y: 420, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 280, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 545, y: 270, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 515, y: 95, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 325, y: 85, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 410, y: 540, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 40, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 91, y: 71, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 121, y: 504, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 578, y: 501, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 741, y: 68, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
              ],

              bots: [
				{ x: 810, y: 490, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 552, y: 285, r: 200 } },
				{ x: -10, y: 100, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 730, y: 80, r: 200 } },
				{ x: 650, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 560, y: 270, r: 200 } },
				{ x: 150, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 280, y: 285, r: 200 } },
				{ x: -10, y: 280, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 303, y: 281, r: 200 } },
				{ x: 640, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 690, y: 500, r: 200 } },
				{ x: 810, y: 290, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 552, y: 275, r: 200 } },
				{ x: 400, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 112, y: 100, r: 200 } },
			  	{ x: -10, y: 280, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 303, y: 281, r: 200 } },								
				{ x: 150, y: -10, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 125, y: 485, r: 200 } },												    
			    { x: 810, y: 490, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 73, y: 485, r: 200 } },				
				{ x: 400, y: 610, kind: "Reptilian", count: 1, ai: 'cruiser', params: { x: 717, y: 90, r: 200 } },								
				{ x: 145, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 730, y: 290, r: 200 } },
				{ x: -10, y: 510, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 724, y: 515, r: 200 } },												
				{ x: 400, y: -10, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 687, y: 295, r: 200 } },				
				{ x: 145, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 130, y: 70, r: 200 } },								
				{ x: 810, y: 70, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 75, y: 100, r: 200 } },
				{ x: 400, y: -10, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 128, y: 295, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            {
              timeout: 50, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 100, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 420, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 420, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 400, y: 70, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.5, 0.85], viols_add: [10,10] },
			 { x: 400, y: 520, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.5, 0.85], viols_add: [10,10] },
			 { x: 150, y: 47, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 710, y: 520, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
              ],

              bots: [
				{ x: 810, y: 490, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 552, y: 285, r: 200 } },
				{ x: -10, y: 100, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 730, y: 80, r: 200 } },
				{ x: 650, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 560, y: 270, r: 200 } },
				{ x: 150, y: -10, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 280, y: 285, r: 200 } },
				{ x: -10, y: 280, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 303, y: 281, r: 200 } },
				{ x: 640, y: -10, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 690, y: 500, r: 200 } },
				{ x: 810, y: 290, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 552, y: 275, r: 200 } },
				{ x: 400, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 112, y: 100, r: 200 } },
				{ x: -10, y: 510, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 724, y: 515, r: 200 } },												
				{ x: 400, y: -10, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 687, y: 295, r: 200 } },				
				{ x: 145, y: 610, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 130, y: 70, r: 200 } },								
				{ x: 810, y: 70, kind: "Reptoludz", count: 1, ai: 'cruiser', params: { x: 75, y: 100, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            }
        );
	  
      level.define_prizes( {
        //"": 0,
        //"": 0,
      });

      level.define_violki_prize(600);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 5<<<<<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<
  
     //>>>>>>>>>>>>>>>>>>>
  //LEVEL 6>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_6 = levels.define_level(6);
  level_6.set_name('level_6_name');
  level_6.set_map_position(235, 100);
  level_6.set_desc('level_6_desc');
  level_6.set_previous(5);

  level_6.set_level_data(
    function level_data(level) {
      level.set_id(6);

      level.set_background_image ('assets/img/levels/metro_plac_wilsona.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      level.define_soldier_start_point(164,182);
      level.define_soldier_start_point(164,234);
      level.define_soldier_start_point(101,182);
      level.define_soldier_start_point(101,234);

      level.set_max_creatures(20);

      var mesh = level.mesh;

    mesh.define_barrier(835,18, 835,582);
    mesh.define_barrier(835,582, 470,582);
    mesh.define_barrier(470,582, 405,635);
    mesh.define_barrier(405,635, 345,635);
    mesh.define_barrier(345,635, 320,582);
	mesh.define_barrier(320,582, 191,460);
	mesh.define_barrier(191,460, 177,460);
	mesh.define_barrier(177,460, 177,538);
	mesh.define_barrier(177,538, 160,564);
    mesh.define_barrier(160,564, 180,582);
    mesh.define_barrier(180,582, 160,635);
    mesh.define_barrier(160,635, 135,635);
    mesh.define_barrier(135,635, 100,582);
    mesh.define_barrier(100,582, -35,582);
    mesh.define_barrier(-35,582, -35,18);
    mesh.define_barrier(-35,18, 82,18);
    mesh.define_barrier(82,18, 90,-35);
    mesh.define_barrier(90,-35, 220,-35);
    mesh.define_barrier(220,-35, 204,66);
	mesh.define_barrier(204,66, 248,72);
    mesh.define_barrier(248,72, 350,-35);
    mesh.define_barrier(350,-35, 400, -35);
    mesh.define_barrier(400,-35, 470, 18);
    mesh.define_barrier(470,18, 835,18);
    
    mesh.define_barrier(289,166, 289,196);
	mesh.define_barrier(289,196, 315,196);
	mesh.define_barrier(315,196, 335,212);
	mesh.define_barrier(335,212, 335,228);
	mesh.define_barrier(335,228, 304,240);
	mesh.define_barrier(304,240, 304,266);
	mesh.define_barrier(304,266, 288,275);
	mesh.define_barrier(288,275, 272,244);
	mesh.define_barrier(272,244, 226,237);
	mesh.define_barrier(226,237, 244,196);
	mesh.define_barrier(244,196, 266,166);
	mesh.define_barrier(266,166, 289,166);
    
   mesh.define_barrier(397,100, 447,142);
   mesh.define_barrier(447,142, 423,166);
   mesh.define_barrier(423,166, 372,126);
   mesh.define_barrier(372,126, 397,100);
    
   mesh.define_barrier(558,81, 614,65);
   mesh.define_barrier(614,65, 646,104);
   mesh.define_barrier(646,104, 594,180);
   mesh.define_barrier(594,180, 542,152);
   mesh.define_barrier(542,152, 558,81);
   
   mesh.define_barrier(359,328, 398,370);
   mesh.define_barrier(398,370, 394,400);
   mesh.define_barrier(394,400, 349,424);
   mesh.define_barrier(349,424, 340,400);
   mesh.define_barrier(340,400, 302,380);
   mesh.define_barrier(302,380, 306,362);
   mesh.define_barrier(306,362, 331,362);
   mesh.define_barrier(331,362, 342,347);
   mesh.define_barrier(342,347, 342,328);
   mesh.define_barrier(342,328, 359,328);
    
	mesh.define_barrier(478,444, 534,431);
	mesh.define_barrier(534,431, 557,508);
	mesh.define_barrier(557,508, 521,508);
	mesh.define_barrier(521,508, 508,485);
	mesh.define_barrier(508,485, 474,490);
	mesh.define_barrier(474,490, 478,444);
    
    mesh.define_barrier(432,276, 504,203);
    mesh.define_barrier(504,203, 590,288);
    mesh.define_barrier(590,288, 517,361);
    mesh.define_barrier(517,361, 432,276);
    
    
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_0' },
	  { background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_6_speech_1' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_6_speech_2' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_3' },
	  { background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_6_speech_4' },
	  { background: 'assets/img/story/dialogues/lidia_olaf_next_exit.png', text: 'level_6_speech_5' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_6_speech_6' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_7' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_6_speech_8' },
	  { background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'level_6_speech_9' },
	  ] );
	  
	  
	  level.define_wave_speeches( 4,
	  [
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_10' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_6_speech_11' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_6_speech_12' },
	  { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'level_6_speech_13' },
	  ] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
	level.define_end_speeches( [
	{ background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_14' },
	{ background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_6_speech_15' },
	{ background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_6_speech_16' },
	{ background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_17' },
	{ background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_6_speech_18' },
	{ background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_19' },
	{ background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_6_speech_20' },
	{ background: 'assets/img/story/dialogues/piotrkowski_next_exit.png', text: 'level_6_speech_21' },
	{ background: 'assets/img/story/dialogues/piotrkowski_next_exit.png', text: 'level_6_speech_22' },
	{ background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_6_speech_23' },
	{ background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_6_speech_24' },
	{ background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_6_speech_25' },
	{ background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_6_speech_26' },
	{ background: 'assets/img/story/dialogues/lidia_szron_exit.png', text: 'level_6_speech_27' },
	] );
	
    //level.define_tips( [
        //]);
		
		
	level.define_tips( [
		'assets/img/story/tips/tip11_LANG.jpg',
	]);
		
		
    
    //level.define_end_tips( [
         //]);

			level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 12, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 						
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 28, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 150, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 120, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 358, y: 530, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 310, y: 90, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 28 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 500, y: 80, slow: 0.3, injure: 0.3, ttl: 28 * 24 },
              ],
			  
              bots: [
				{ x: -20, y: 108, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 500, y: 84, r: 400 } },
				{ x: -20, y: 290, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 660, y: 300, r: 400 } },
				{ x: -20, y: 466, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 670, y: 510, r: 400 } },
				{ x: -20, y: 113, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 500, y: 84, r: 400 } },
				{ x: -20, y: 295, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 660, y: 300, r: 400 } },
				{ x: -20, y: 461, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 670, y: 510, r: 400 } },
				{ x: -20, y: 102, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 500, y: 84, r: 400 } },
				{ x: -20, y: 472, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 670, y: 510, r: 400 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 200, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 240, y: 370, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 342, y: 72, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 360, y: 508, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 595, y: 386, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 500, y: 80, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [5,5] },
				{ x: 450, y: 395, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [5,5] },
				{ x: 383, y: 273, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 185, y: 144, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 200, y: 390, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 386, y: 267, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 713, y: 85, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 680, y: 515, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 492, y: 87, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 448, y: 401, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],
			  
              bots: [
				{ x: 820, y: 108, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 120, y: 100, r: 200 } },
				{ x: 820, y: 466, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 480, r: 200 } },
				{ x: 820, y: 270, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 270, r: 200} },				
				{ x: 820, y: 112, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 120, y: 100, r: 200 } },
				{ x: 820, y: 462, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 480, r: 200 } },				
				{ x: 820, y: 466, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 480, r: 200} },				
				{ x: 820, y: 108, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 120, y: 100, r: 200 } },
				{ x: 820, y: 466, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 480, r: 200 } },
				{ x: 150, y: -10, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 80, y: 270, r: 200} },
				{ x: 820, y: 112, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 120, y: 100, r: 200 } },
				{ x: 820, y: 105, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 80, y: 480, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 310, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 500, y: 100, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 380, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 285, y: 465, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 465, y: 530, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				//{ x: 650, y: 540, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 205, y: 290, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [5,5] },
				{ x: 602, y: 386, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [5,5] },
				{ x: 633, y: 223, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 180, y: 148, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 123, y: 87, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 330, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 319, y: 75, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 730, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 680, y: 515, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 54, y: 510, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 16 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 492, y: 87, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 380, y: 280, slow: 0.3, injure: 0.3, ttl: 16 * 24 },
              ],
			  
              bots: [
				{ x: -20, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 300, r: 200 } },
				{ x: 820, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: -20, y: 108, kind: "Pandora", count: 1, ai: 'amok', params: { x: 500, y: 84, r: 200 } },
				{ x: 820, y: 108, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: -20, y: 520, kind: "Pandora", count: 1, ai: 'amok', params: { x: 722, y: 495, r: 200 } },
				{ x: 820, y: 103, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: -20, y: 525, kind: "Pandora", count: 1, ai: 'amok', params: { x: 722, y: 495, r: 200 } },
				{ x: 820, y: 520, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 510, r: 200 } },				
				{ x: -20, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 300, r: 200 } },
				{ x: 820, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: -20, y: 103, kind: "Pandora", count: 1, ai: 'amok', params: { x: 500, y: 84, r: 200 } },
				{ x: 820, y: 525, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 510, r: 200 } },
				{ x: -20, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 300, r: 200 } },
				{ x: 820, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: -20, y: 125, kind: "Pandora", count: 1, ai: 'amok', params: { x: 722, y: 495, r: 200 } },
				{ x: 820, y: 120, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 510, r: 200 } },			
				],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 224, y: 174, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 299, y: 399, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 358, y: 171, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 589, y: 353, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 348, y: 48, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				//{ x: 650, y: 540, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 460, y: 180, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [5,5] },
				{ x: 340, y: 540, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [5,5] },
				{ x: 356, y: 245, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 465, y: 423, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 150, y: 56, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 140, y: 535, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 360, y: 550, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 350, y: 45, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 458, y: 390, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 400, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 280, y: 315, slow: 0.3, injure: 0.3, ttl: 36 * 24 },
			 { x: 500, y: 146, slow: 0.3, injure: 0.3, ttl: 36 * 24 },
              ],
			  
              bots: [
				{ x: 810, y: 91, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 110, y: 110, r: 200 } },
				{ x: 810, y: 275, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 290, r: 200 } },
				{ x: 810, y: 451, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 300, y: 520, r: 200 } },
				{ x: 150, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 500, y: 84, r: 200 } },
				{ x: 810, y: 96, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 110, y: 110, r: 200 } },
				{ x: 810, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 290, r: 200 } },
				{ x: 810, y: 447, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 300, y: 510, r: 200 } },
				{ x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: 150, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 722, y: 495, r: 200 } },
				{ x: 810, y: 101, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 110, y: 110, r: 200 } },
				{ x: 810, y: 280, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 290, r: 200 } },
				{ x: 810, y: 458, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 300, y: 520, r: 200 } },
				{ x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: 150, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 722, y: 495, r: 200 } },
				{ x: 810, y: 91, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 110, y: 110, r: 200 } },
				{ x: 810, y: 275, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 290, r: 200 } },
				{ x: 810, y: 451, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 300, y: 520, r: 200 } },
				{ x: 360, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 5
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 153, y: 114, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 132, y: 488, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 240, y: 318, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 580, y: 391, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 630, y: 218, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 320, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 378, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [5,5] },
				{ x: 512, y: 74, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.6, 0.85], viols_add: [5,5] },
				{ x: 331, y: 62, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 388, y: 508, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 42, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 194, y: 319, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 510, y: 76, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 720, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 720, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 720, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 50, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 50, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 320, y: 80, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 { x: 380, y: 500, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 { x: 380, y: 280, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
              ],
			  
              bots: [
				{ x: -10, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 714, y: 90, r: 200 } },
				{ x: -10, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 712, y: 290, r: 200 } },
				{ x: 810, y: 89, kind: "Pandora", count: 1, ai: 'amok', params: { x: 300, y: 520, r: 200 } },
				{ x: 140, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 150, y: 90, r: 200 } },
				{ x: 365, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 486, y: 111, r: 200 } },
				{ x: 370, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 300, y: 520, r: 200 } },
				{ x: -10, y: 451, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 711, y: 510, r: 200 } },
				{ x: -10, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 714, y: 90, r: 200 } },
				{ x: 140, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 150, y: 90, r: 200 } },
				{ x: -10, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 712, y: 290, r: 200 } },
				{ x: 810, y: 101, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },
				{ x: -10, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 714, y: 90, r: 200 } },
				{ x: 140, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 520, y: 150, r: 200 } },
				{ x: -10, y: 80, kind: "Pandora", count: 1, ai: 'amok', params: { x: 670, y: 510, r: 200 } },				
				{ x: -10, y: 275, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 712, y: 290, r: 200 } },				
				{ x: -10, y: 451, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 711, y: 510, r: 200 } },
				{ x: 365, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 157, y: 139, r: 200 } },
				{ x: -10, y: 451, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 711, y: 510, r: 200 } },	
				{ x: 365, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 600, y: 370, r: 200 } },
				{ x: 810, y: 95, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 290, r: 200 } },						
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 6
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 182, y: 195, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 257, y: 443, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 363, y: 284, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 489, y: 78, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 587, y: 388, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [180,180], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 315, y: 86, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 517, y: 546, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.75, 0.95], viols_add: [5,5] },
				{ x: 670, y: 60, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 140, y: 512, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 38, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 735, y: 510, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 410, y: 512, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 73, y: 515, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 150, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 360, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 715, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 100, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
              ],
			  
              bots: [
				{ x: 150, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 129, y: 522, r: 200 } },				
				{ x: 155, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 340, y: 80, r: 200 } },
				{ x: -10, y: 265, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 500, y: 75, r: 200 } },
				{ x: 810, y: 285, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 130, r: 200 } },
				{ x: 360, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 422, y: 479, r: 200 } },				
				{ x: 365, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 646, y: 242, r: 200 } },							
				{ x: -10, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 580, y: 530, r: 200 } },												
				{ x: 810, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 510, r: 200 } },
				{ x: 140, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 372, y: 525, r: 200 } },
				{ x: 155, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 100, r: 200 } },
				{ x: 155, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 129, y: 522, r: 200 } },				
				{ x: 350, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 290, r: 200 } },
				{ x: 350, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 290, r: 200 } },				
				{ x: 350, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: 140, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 373, y: 525, r: 200 } },
				{ x: 365, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 422, y: 479, r: 200 } },	
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 7
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 470, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [155,155], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 500, y: 150, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [155,155], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 363, y: 284, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [155,155], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 643, y: 300, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [155,155], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 196, y: 144, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [155,155], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 200, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [155,155], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 350, y: 70, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [5,5] },
				{ x: 370, y: 540, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [5,5] },
				{ x: 130, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 600, y: 540, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
				{ x: 500, y: 60, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 70, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 70, y: 512, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 700, y: 515, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 700, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 318, y: 80, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 { x: 375, y: 272, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 { x: 370, y: 507, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
              ],
			  
              bots: [			    							
				{ x: 140, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 300, r: 200 } },				
				{ x: 810, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 300, r: 200 } },
				{ x: -10, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 100, r: 200 } },
				{ x: 355, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 290, r: 200 } },
				{ x: -10, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 400, y: 70, r: 200 } },
				{ x: 810, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 100, r: 200 } },				
				{ x: 130, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 100, r: 200 } },				
				{ x: 350, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 290, r: 200 } },
				{ x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 100, r: 200 } },
				{ x: 360, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 400, y: 550, r: 200 } },								
				{ x: -10, y: 260, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 530, r: 200 } },	
				{ x: -10, y: 85, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 550, r: 200 } },				
				{ x: 135, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 300, r: 200 } },
				{ x: 810, y: 95, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 100, r: 200 } },
				{ x: 810, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 100, r: 200 } },				
				{ x: -10, y: 450, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 100, y: 100, r: 200 } },				
				{ x: 810, y: 455, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 520, r: 200 } },							
				{ x: 355, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 530, r: 200 } },	
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		//level.describe_wave(   // Dawna 8
            // green - prepare time
           // {
           //   timeout: 22, // czas trwania fazy w sekundach!

            //  droppings: [ // znajdzki 	
			//	{ x: 93, y: 141, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 290, y: 109, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 496, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 703, y: 88, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 234, y: 400, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 388, y: 515, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 454, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 625, y: 500, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 22 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			//	{ x: 265, y: 315, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 22 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [5,5] },
			//	{ x: 615, y: 225, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 22 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [5,5] },
			//	{ x: 492, y: 147, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 22 * 24 },
			//	{ x: 374, y: 272, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 22 * 24 },
			//	{ x: 600, y: 370, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 22 * 24 },				
             // ],

           //   bots: [ // boty
            //  ],

           //   marks: [ // strzalki
			//  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			//  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			//  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			//  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			//  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			//  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			//  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
           //   ]
			  
           // },
            // orange - cautious time
           // {
            //  timeout: 40, // czas trwania fazy w sekundach!

           //   droppings: [
			// { x: 100, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			// { x: 100, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			// { x: 100, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 700, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 700, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 700, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 500, y: 70, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 350, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 374, y: 272, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 600, y: 350, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 //{ x: 276, y: 315, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 //{ x: 610, y: 235, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 //{ x: 300, y: 90, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
             // ],
			  
           //   bots: [
			//    { x: 810, y: 88, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 285, r: 200 } },
			 //   { x: 360, y: -10, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 400, y: 500, r: 200 } },
			//	{ x: -10, y: 95, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
			//	{ x: 135, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 115, y: 506, r: 200 } },				
			//	{ x: 810, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 115, r: 200 } },	
			//	{ x: -10, y: 455, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
			//	{ x: 810, y: 450, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 520, r: 200 } },
			//	{ x: -10, y: 460, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 660, y: 250, r: 200 } },					
			//	{ x: -10, y: 95, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
			//	{ x: 810, y: 280, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 90, y: 300, r: 200 } },
			//	{ x: 360, y: -10, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 336, y: 520, r: 200 } },				
		//		{ x: -10, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
          //    ],

          //    marks: [ // strzalki
         //     ],
         //   },
            // red - amok time
        //    null
       // );
	  
	  level.describe_wave(   // Dawna 9, nowa 8
            // green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
				{ x: 305, y: 86, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 500, y: 122, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 640, y: 290, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 200, y: 290, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 310, y: 496, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 580, y: 525, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [5,5] },
				{ x: 265, y: 315, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [5,5] },
				{ x: 615, y: 225, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.65, 0.8], viols_add: [5,5] },
				{ x: 395, y: 220, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 206, y: 140, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
				{ x: 460, y: 380, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },				
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 38, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 220, y: 140, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 245, y: 410, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 500, y: 143, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 475, y: 400, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 380, y: 270, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 70, y: 90, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
			 { x: 70, y: 530, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
			 { x: 700, y: 90, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
			 { x: 700, y: 530, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
              ],
			  
              bots: [
			    { x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },			    
				{ x: -10, y: 260, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },					
				{ x: 360, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },			    
				{ x: 810, y: 280, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },				
				{ x: -10, y: 280, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },
				{ x: 350, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },		
				{ x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: 810, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },						
				{ x: 140, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 100, y: 115, r: 200 } },	
				{ x: 810, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 290, r: 200 } },				
				{ x: 150, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 660, y: 250, r: 200 } },
				{ x: 810, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 90, y: 300, r: 200 } },				
				{ x: 365, y: 610, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 660, y: 250, r: 200 } },					
				{ x: 810, y: 90, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 290, r: 200 } },
				{ x: 355, y: 610, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 80, y: 520, r: 200 } },					
				{ x: 810, y: 280, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 336, y: 520, r: 200 } },												
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ],
            },
            // red - amok time
            {
              timeout: 70, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 300, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 75, y: 250, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 715, y: 290, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 500, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 260, y: 440, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 580, y: 536, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 390, y: 275, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 70 * 24, health_add: [240,240], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 610, y: 230, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 70 * 24, health_add: [30,30], ammo_add: [0.4, 0.8], viols_add: [10,10] },
			 { x: 250, y: 320, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 70 * 24, health_add: [30,30], ammo_add: [0.4, 0.8], viols_add: [10,10] },
			 { x: 100, y: 100, slow: 0.3, injure: 0.3, ttl: 70 * 24 },
			 { x: 100, y: 500, slow: 0.3, injure: 0.3, ttl: 70 * 24 },
			 { x: 700, y: 100, slow: 0.3, injure: 0.3, ttl: 70 * 24 },
			 { x: 700, y: 500, slow: 0.3, injure: 0.3, ttl: 70 * 24 },
              ],
			  
              bots: [
			    { x: -10, y: 260, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },			    							
				{ x: 360, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },
			    { x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: -10, y: 290, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },
				{ x: 810, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 810, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },
				{ x: -10, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 355, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },
			    { x: 136, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: -10, y: 300, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: 350, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 125, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },				
				{ x: 810, y: 90, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 100, y: 115, r: 200 } },	
				{ x: 810, y: 455, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: -10, y: 95, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 80, y: 520, r: 200 } },
				{ x: -10, y: 445, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 160, y: -10, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: 130, y: 610, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 90, y: 300, r: 200 } },
				//{ x: 810, y: 230, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 336, y: 520, r: 200 } },				
				//{ x: 810, y: 340, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },						
				{ x: -10, y: 280, kind: "Matrona", count: 1, ai: 'amok', on_dead: function() { map.level.on_success() }, params: { x: 100, y: 115, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            }
        );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(1000);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 6<<<<<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<
  
      //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 6>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_6 = levels.define_replay_level(6);
  replay_level_6.set_name('replay_level_6_name');
  replay_level_6.set_map_position(235, 100);
  replay_level_6.set_desc('replay_level_6_desc');
  replay_level_6.set_previous(6);

  replay_level_6.set_level_data(
    function level_data(level) {
      level.set_id(6);

      level.set_background_image ('assets/img/levels/metro_plac_wilsona.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      level.define_soldier_start_point(164,182);
      level.define_soldier_start_point(164,234);
      level.define_soldier_start_point(101,182);
      level.define_soldier_start_point(101,234);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,18, 835,582);
    mesh.define_barrier(835,582, 470,582);
    mesh.define_barrier(470,582, 405,635);
    mesh.define_barrier(405,635, 345,635);
    mesh.define_barrier(345,635, 320,582);
	mesh.define_barrier(320,582, 191,460);
	mesh.define_barrier(191,460, 177,460);
	mesh.define_barrier(177,460, 177,538);
	mesh.define_barrier(177,538, 160,564);
    mesh.define_barrier(160,564, 180,582);
    mesh.define_barrier(180,582, 160,635);
    mesh.define_barrier(160,635, 135,635);
    mesh.define_barrier(135,635, 100,582);
    mesh.define_barrier(100,582, -35,582);
    mesh.define_barrier(-35,582, -35,18);
    mesh.define_barrier(-35,18, 82,18);
    mesh.define_barrier(82,18, 90,-35);
    mesh.define_barrier(90,-35, 220,-35);
    mesh.define_barrier(220,-35, 204,66);
	mesh.define_barrier(204,66, 248,72);
    mesh.define_barrier(248,72, 350,-35);
    mesh.define_barrier(350,-35, 400, -35);
    mesh.define_barrier(400,-35, 470, 18);
    mesh.define_barrier(470,18, 835,18);
    
    mesh.define_barrier(289,166, 289,196);
	mesh.define_barrier(289,196, 315,196);
	mesh.define_barrier(315,196, 335,212);
	mesh.define_barrier(335,212, 335,228);
	mesh.define_barrier(335,228, 304,240);
	mesh.define_barrier(304,240, 304,266);
	mesh.define_barrier(304,266, 288,275);
	mesh.define_barrier(288,275, 272,244);
	mesh.define_barrier(272,244, 226,237);
	mesh.define_barrier(226,237, 244,196);
	mesh.define_barrier(244,196, 266,166);
	mesh.define_barrier(266,166, 289,166);
    
   mesh.define_barrier(397,100, 447,142);
   mesh.define_barrier(447,142, 423,166);
   mesh.define_barrier(423,166, 372,126);
   mesh.define_barrier(372,126, 397,100);
    
   mesh.define_barrier(558,81, 614,65);
   mesh.define_barrier(614,65, 646,104);
   mesh.define_barrier(646,104, 594,180);
   mesh.define_barrier(594,180, 542,152);
   mesh.define_barrier(542,152, 558,81);
   
   mesh.define_barrier(359,328, 398,370);
   mesh.define_barrier(398,370, 394,400);
   mesh.define_barrier(394,400, 349,424);
   mesh.define_barrier(349,424, 340,400);
   mesh.define_barrier(340,400, 302,380);
   mesh.define_barrier(302,380, 306,362);
   mesh.define_barrier(306,362, 331,362);
   mesh.define_barrier(331,362, 342,347);
   mesh.define_barrier(342,347, 342,328);
   mesh.define_barrier(342,328, 359,328);
    
	mesh.define_barrier(478,444, 534,431);
	mesh.define_barrier(534,431, 557,508);
	mesh.define_barrier(557,508, 521,508);
	mesh.define_barrier(521,508, 508,485);
	mesh.define_barrier(508,485, 474,490);
	mesh.define_barrier(474,490, 478,444);
    
    mesh.define_barrier(432,276, 504,203);
    mesh.define_barrier(504,203, 590,288);
    mesh.define_barrier(590,288, 517,361);
    mesh.define_barrier(517,361, 432,276);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'replay_level_6_speech_0' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'replay_level_6_speech_1' },
	  { background: 'assets/img/story/dialogues/olaf_lidia_exit.png', text: 'replay_level_6_speech_2' },
	  ] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/szron_exit.png', text: 'replay_level_6_speech_3' },
	  ] );
    
	level.describe_wave(   // 1
            // green - prepare time
            {
              timeout: 12, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 						
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 26, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 210, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 26 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 252, y: 431, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 26 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 390, y: 265, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 26 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 614, y: 223, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 26 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [5,5] },
			 { x: 587, y: 529, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 26 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 435, y: 525, slow: 0.3, injure: 0.3, ttl: 26 * 24 },
			 { x: 500, y: 80, slow: 0.3, injure: 0.3, ttl: 26 * 24 },
              ],
			  
              bots: [
				{ x: 810, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 100, r: 200 } },
				{ x: 810, y: 455, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 90, y: 380, r: 200 } },
				{ x: -10, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },				
				{ x: -10, y: 270, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 300, r: 200 } },
				{ x: 810, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 372, y: 525, r: 200 } },
				{ x: 810, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 80, y: 90, r: 200 } },
				{ x: -10, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: -10, y: 450, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 500, r: 200 } },
				{ x: 810, y: 260, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 510, r: 200 } },				
				{ x: 810, y: 270, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 90, y: 290, r: 200 } },
				{ x: -10, y: 100, kind: "Pandora", count: 1, ai: 'amok', params: { x: 129, y: 522, r: 200 } },
				{ x: -10, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 700, y: 80, r: 200 } },
				{ x: 810, y: 80, kind: "Pandora", count: 1, ai: 'amok', params: { x: 580, y: 530, r: 200 } },
				{ x: -10, y: 465, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 70, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 2
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki
			 { x: 326, y: 77, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 509, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 384, y: 263, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 282, y: 474, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 630, y: 289, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 757, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.4, 0.75], viols_add: [20,20] },
			 { x: 116, y: 279, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.4, 0.75], viols_add: [20,20] },
			 { x: 110, y: 87, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 700, y: 511, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 38, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 730, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 730, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 80, y: 85, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 80, y: 480, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 370, y: 270, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 300, y: 480, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
			 { x: 500, y: 80, slow: 0.3, injure: 0.3, ttl: 38 * 24 },

              ],
			  
              bots: [
				{ x: 810, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 80, y: 115, r: 200 } },												
				{ x: -10, y: 455, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 720, y: 520, r: 200 } },
				{ x: 130, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 370, y: 65, r: 200 } },				
				{ x: 360, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 505, y: 80, r: 200 } },							
				{ x: 150, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 650, y: 520, r: 200 } },												
				{ x: 360, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 400, y: 520, r: 200 } },
				{ x: 810, y: 95, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 80, y: 115, r: 200 } },
				{ x: -10, y: 450, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 720, y: 520, r: 200 } },
				{ x: -10, y: 98, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 730, y: 280, r: 200 } },	
				{ x: 365, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 130, y: 84, r: 200 } },
				{ x: 155, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 100, y: 470, r: 200 } },				
				{ x: 810, y: 455, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 80, y: 280, r: 200 } },
				{ x: 810, y: 90, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 80, y: 115, r: 200 } },												
				{ x: -10, y: 455, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 720, y: 520, r: 200 } },
				{ x: 130, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 370, y: 65, r: 200 } },
				],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
            // green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 70, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 70, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 70, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 710, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 710, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 710, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 500, y: 48, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 300, y: 488, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 310, y: 90, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.45, 0.85], viols_add: [20,20] },
			 { x: 450, y: 530, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.45, 0.85], viols_add: [20,20] },
			 { x: 392, y: 208, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 396, y: 315, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 32, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 320, y: 86, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 500, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 300, y: 476, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 472, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 494, y: 156, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 307, y: 312, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 97, y: 144, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 680, y: 415, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 636, y: 288, slow: 0.3, injure: 0.3, ttl: 32 * 24 },
			 { x: 218, y: 280, slow: 0.3, injure: 0.3, ttl: 32 * 24 },
              ],
			  
              bots: [
				{ x: 360, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 116, y: 84, r: 200 } },
				{ x: 810, y: 90, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 100, r: 200 } },				
				{ x: 370, y: 610, kind: "Pandora", count: 2, ai: 'amok', params: { x: 129, y: 522, r: 200 } },
				{ x: 810, y: 280, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 280, r: 200 } },				
				{ x: 810, y: 445, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 445, r: 200 } },
				{ x: 360, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: 365, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 696, y: 86, r: 200 } },
				{ x: 810, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 100, r: 200 } },
				{ x: 150, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },				
				{ x: 810, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 280, r: 200 } },			
				{ x: 810, y: 455, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 450, r: 200 } },				
				{ x: 160, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 70, r: 200 } },
				{ x: 360, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 116, y: 84, r: 200 } },
				{ x: 810, y: 90, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 100, r: 200 } },				
				{ x: 370, y: 610, kind: "Pandora", count: 2, ai: 'amok', params: { x: 129, y: 522, r: 200 } },
				{ x: 360, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 116, y: 84, r: 200 } },
				{ x: 810, y: 90, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 100, r: 200 } },				
				{ x: 370, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 129, y: 522, r: 200 } },
				{ x: 810, y: 280, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 280, r: 200 } },				
				{ x: 810, y: 445, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 445, r: 200 } },
				{ x: 360, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: 365, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 696, y: 86, r: 200 } },
				{ x: 810, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 70, y: 100, r: 200 } },
				{ x: 150, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
            // green - prepare time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki
			 { x: 511, y: 83, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 386, y: 249, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 234, y: 406, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 83, y: 523, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 723, y: 73, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 304, y: 81, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.45, 0.85], viols_add: [20,20] },
			 { x: 459, y: 400, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.45, 0.85], viols_add: [20,20] },
			 { x: 652, y: 503, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.45, 0.85], viols_add: [20,20] },
			 { x: 718, y: 309, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
			 { x: 100, y: 285, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
			 //{ x: 396, y: 315, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 22 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  //{x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  //{x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  //{x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  //{x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  //{x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 228, y: 389, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 500, y: 77, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 643, y: 291, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 74, y: 86, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 710, y: 520, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 305, y: 91, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 388, y: 293, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 460, y: 530, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],
			  
              bots: [
				{ x: -10, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 372, y: 525, r: 200 } },
				{ x: -10, y: 465, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 100, r: 200 } },
				{ x: 810, y: 280, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 88, y: 104, r: 200 } },				
				{ x: 810, y: 270, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 97, y: 458, r: 200 } },
				{ x: -10, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },				
				{ x: -10, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 270, r: 200 } },						
				{ x: -10, y: 450, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 450, r: 200 } },								
				{ x: -10, y: 460, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 450, r: 200 } },
				{ x: -10, y: 280, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 270, r: 200 } },	
				{ x: -10, y: 88, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: -10, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },				
				{ x: -10, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 270, r: 200 } },
				{ x: -10, y: 88, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },
				{ x: -10, y: 95, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 90, r: 200 } },				
				{ x: -10, y: 270, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 700, y: 270, r: 200 } },
				{ x: 810, y: 280, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 88, y: 104, r: 200 } },				
				{ x: 810, y: 270, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 97, y: 458, r: 200 } },
				{ x: -10, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 372, y: 525, r: 200 } },
				{ x: -10, y: 465, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 100, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
	
    level.describe_wave(   // 5
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 100, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 100, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 100, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 700, y: 80, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 700, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 700, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 342, y: 63, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 342, y: 531, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 515, y: 544, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 515, y: 70, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 354, y: 158, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.85], viols_add: [20,20] },
			 { x: 471, y: 394, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.85], viols_add: [20,20] },
			 { x: 197, y: 247, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.85], viols_add: [20,20] },
			 { x: 300, y: 314, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 400, y: 215, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 596, y: 345, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 212, y: 150, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 234, y: 400, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 346, y: 531, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 575, y: 530, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 606, y: 388, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 638, y: 207, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 520, y: 73, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 333, y: 80, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 500, y: 153, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 368, y: 278, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 464, y: 393, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],
			  
              bots: [
			    { x: -10, y: 95, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: -10, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
			    { x: 160, y: -10, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 120, y: 514, r: 200 } },
			    { x: 360, y: -10, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 410, y: 520, r: 200 } },
				{ x: -10, y: 280, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },								
				{ x: -10, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: 140, y: 610, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 133, y: 72, r: 200 } },
				{ x: 360, y: 610, kind: "Reptoludz_z_placu", count: 1, ai: 'cruiser', params: { x: 526, y: 66, r: 200 } },
				{ x: 810, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: 810, y: 280, kind: "Pandora", count: 1, ai: 'amok', params: { x: 90, y: 300, r: 200 } },
				{ x: 165, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 120, y: 514, r: 200 } },				
				{ x: 365, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 410, y: 520, r: 200 } },
				{ x: 810, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 336, y: 520, r: 200 } },				
				{ x: 810, y: 445, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
				{ x: 145, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 133, y: 72, r: 200 } },
				{ x: 365, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 526, y: 66, r: 200 } },				
				{ x: -10, y: 95, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: -10, y: 275, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
		        { x: 165, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 120, y: 514, r: 200 } },				
				{ x: 365, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'cruiser', params: { x: 410, y: 520, r: 200 } },
				{ x: 810, y: 270, kind: "Pandora", count: 1, ai: 'amok', params: { x: 336, y: 520, r: 200 } },				
				{ x: 810, y: 445, kind: "Pandora", count: 1, ai: 'amok', params: { x: 700, y: 290, r: 200 } },
              ],

              marks: [ // strzalki
			  {x: 745, y: 91, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 275, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 451, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 353, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 120, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 93, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 275, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 451, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 358, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 132, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ],
            },
            // red - amok time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 300, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 500, y: 90, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 300, y: 477, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 467, y: 534, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 390, y: 275, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 45 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 187, y: 294, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 635, y: 294, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 100, y: 100, slow: 0.5, injure: 0.1, ttl: 45 * 24 },
			 { x: 100, y: 500, slow: 0.5, injure: 0.1, ttl: 45 * 24 },
			 { x: 700, y: 100, slow: 0.5, injure: 0.1, ttl: 45 * 24 },
			 { x: 700, y: 500, slow: 0.5, injure: 0.1, ttl: 45 * 24 },
              ],
			  
              bots: [
			    { x: -10, y: 260, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },			    							
				{ x: -10, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },
			    { x: -10, y: 290, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: 810, y: 290, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },
				{ x: 810, y: 90, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 810, y: 450, kind: "Pandora", count: 1, ai: 'amok', params: { x: 115, y: 506, r: 200 } },
				{ x: 130, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 360, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },
			    { x: 140, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: 370, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },		
				
				{ x: 130, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: 360, y: -10, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 100, y: 285, r: 200 } },
			    { x: 140, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				{ x: 370, y: 610, kind: "Reptilian_z_placu", count: 1, ai: 'amok', params: { x: 400, y: 500, r: 200 } },
				
				{ x: 810, y: 90, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 100, y: 115, r: 200 } },	
				{ x: 810, y: 455, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				{ x: -10, y: 95, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 80, y: 520, r: 200 } },
				{ x: -10, y: 445, kind: "Reptoludz_z_placu", count: 1, ai: 'amok', params: { x: 660, y: 250, r: 200 } },
				
				{ x: 810, y: 280, kind: "Matrona", count: 1, ai: 'amok', on_dead: function() { map.level.on_success() }, params: { x: 100, y: 115, r: 200 } },					
				
              ],

              marks: [ // strzalki
              ],
            }
        );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(750);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 6<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 7>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_7 = levels.define_level(7);
  level_7.set_name('level_7_name');
  level_7.set_map_position(260, 135);
  level_7.set_desc('level_7_desc');
  level_7.set_previous(6);

  level_7.set_level_data(
    function level_data(level) {
      level.set_id(7);

      level.set_background_image ('assets/img/levels/minski_las.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');

      level.define_soldier_start_point(290,227);
      level.define_soldier_start_point(297,366);
      level.define_soldier_start_point(488,218);
      level.define_soldier_start_point(480,340);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;
		
		mesh.define_barrier(-30,-30, 830,-30);
		mesh.define_barrier(830,-30, 830,630);
		mesh.define_barrier(830,630, -30,630);
		mesh.define_barrier(-30,630, -30,-30);
		
		mesh.define_barrier(366,73, 555,57);
		mesh.define_barrier(555,57, 622,126);
		mesh.define_barrier(622,126, 584,137);
		mesh.define_barrier(584,137, 585,164);
		mesh.define_barrier(585,164, 542,146);
		mesh.define_barrier(542,146, 530,176);
		mesh.define_barrier(530,176, 498,166);
		mesh.define_barrier(498,166, 490,175);
		mesh.define_barrier(490,175, 460,154);
		mesh.define_barrier(460,154, 455,137);
		mesh.define_barrier(455,137, 439,140);
		mesh.define_barrier(439,140, 428,114);
		mesh.define_barrier(428,114, 366,110);
		mesh.define_barrier(366,110, 366,73);
		
		mesh.define_barrier(615,173, 639,162);
		mesh.define_barrier(639,162, 679,203);
		mesh.define_barrier(679,203, 682,248);
		mesh.define_barrier(682,248, 651,307);
		mesh.define_barrier(651,307, 595,293);
		mesh.define_barrier(595,293, 595,257);
		mesh.define_barrier(595,257, 626,221);
		mesh.define_barrier(626,221, 615,173);
		
		mesh.define_barrier(608,358, 650,368);
		mesh.define_barrier(650,368, 596,492);
		mesh.define_barrier(596,492, 547,465);
		mesh.define_barrier(547,465, 482,498);
		mesh.define_barrier(482,498, 430,493);
		mesh.define_barrier(430,493, 431,481);
		mesh.define_barrier(431,481, 443,469);
		mesh.define_barrier(443,469, 415,458);
		mesh.define_barrier(415,458, 468,414);
		mesh.define_barrier(468,414, 492,412);
		mesh.define_barrier(492,412, 464,389);
		mesh.define_barrier(464,389, 515,410);
		mesh.define_barrier(515,410, 566,377);
		mesh.define_barrier(566,377, 588,386);
		mesh.define_barrier(588,386, 608,358);
		
		mesh.define_barrier(316,460, 377,507);
		mesh.define_barrier(377,507, 377,534);
		mesh.define_barrier(377,534, 300,553);
		mesh.define_barrier(300,553, 264,533);
		mesh.define_barrier(264,533, 265,478);
		mesh.define_barrier(265,478, 295,457);
		mesh.define_barrier(295,457, 316,460);
		
		mesh.define_barrier(120,256, 171,260);
		mesh.define_barrier(171,260, 156,300);
		mesh.define_barrier(156,300, 195,304);
		mesh.define_barrier(195,304, 190,317);
		mesh.define_barrier(190,317, 169,327);
		mesh.define_barrier(169,327, 174,334);
		mesh.define_barrier(174,334, 177,378);
		mesh.define_barrier(177,378, 168,411);
		mesh.define_barrier(168,411, 191,436);
		mesh.define_barrier(191,436, 210,415);
		mesh.define_barrier(210,415, 238,432);
		mesh.define_barrier(238,432, 214,462);
		mesh.define_barrier(214,462, 164,470);
		mesh.define_barrier(164,470, 88,406);
		mesh.define_barrier(88,406, 86,321);
		mesh.define_barrier(86,321, 120,256);
		
		mesh.define_barrier(265,58, 319,74);
		mesh.define_barrier(319,74, 319,137);
		mesh.define_barrier(319,137, 280,174);
		mesh.define_barrier(280,174, 251,152);
		mesh.define_barrier(251,152, 203,202);
		mesh.define_barrier(203,202, 161,198);
		mesh.define_barrier(161,198, 162,131);
		mesh.define_barrier(162,131, 265,58);
		
		mesh.define_barrier(332,266, 426,230);
	    mesh.define_barrier(426,230, 437,274);
		mesh.define_barrier(437,274, 433,320);
		mesh.define_barrier(433,320, 351,320);
		mesh.define_barrier(351,320, 338,312);
		mesh.define_barrier(338,312, 332,266);
		
		mesh.define_wall(363,105, 622,126);
		mesh.define_wall(555,57, 511,175);
		mesh.define_wall(615,173, 651,307);
		mesh.define_wall(679,203, 595,293);
		mesh.define_wall(450,451, 547,465);
		mesh.define_wall(547,465, 650,368);
		mesh.define_wall(316,460, 300,553);
		mesh.define_wall(265,478, 377,534);
		mesh.define_wall(120,256, 164,470);
		mesh.define_wall(164,470, 238,432);
		mesh.define_wall(88,406, 167,369);
		mesh.define_wall(161,198, 265,58);
		mesh.define_wall(265,58, 319,137);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/olaf_lidia_next_exit.png', text: 'level_7_speech_0' },
	  { background: 'assets/img/story/dialogues/lidia_olaf_next_exit.png', text: 'level_7_speech_1' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_7_speech_2' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_7_speech_3' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_7_speech_4' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_7_speech_5' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_7_speech_6' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_7_speech_7' },
	  { background: 'assets/img/story/dialogues/lidia_kos_next_exit.png', text: 'level_7_speech_8' },
	  { background: 'assets/img/story/dialogues/kos_lidia_next_exit.png', text: 'level_7_speech_9' },
	  { background: 'assets/img/story/dialogues/szron_kos_next_exit.png', text: 'level_7_speech_10' },
	  { background: 'assets/img/story/dialogues/szron_exit.png', text: 'level_7_speech_11' },
	  ] );
	  
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'level_7_speech_12' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'level_7_speech_13' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_7_speech_14' },
	  { background: 'assets/img/story/dialogues/szron_next_exit.png', text: 'level_7_speech_15' },
	  { background: 'assets/img/story/dialogues/szron_kos_next_exit.png', text: 'level_7_speech_16' },
	  { background: 'assets/img/story/dialogues/kos_szron_next_exit.png', text: 'level_7_speech_17' },
	  { background: 'assets/img/story/dialogues/lidia_kos_next_exit.png', text: 'level_7_speech_18' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_7_speech_19' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_7_speech_20' },
	  { background: 'assets/img/story/dialogues/szron_lidia_next_exit.png', text: 'level_7_speech_21' },
	  { background: 'assets/img/story/dialogues/lidia_szron_next_exit.png', text: 'level_7_speech_22' },
	  { background: 'assets/img/story/dialogues/olaf_szron_exit.png', text: 'level_7_speech_23' },
	  ] );
		
	level.define_tips( [
		'assets/img/story/tips/tip12_LANG.jpg',
	]);
		
    
    //level.define_end_tips( [
         //]);	 
 
      level.place_bot(367, 329, "Żołnierz_Kameleona",  {
          ai: 'stander', health_draw: true, on_dead: function() { map.level.on_failure() },
        });
 
      level.describe_wave(   // 1
             //green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 					
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 70, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 5, y: 340, src: 'assets/img/strzalki/arrow_right.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 23, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 740, y: 100, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 740, y: 300, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 740, y: 500, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 258, y: 202, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 210, y: 348, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 338, y: 430, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 23 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 435, y: 371, slow: 0.3, injure: 0.3, ttl: 23 * 24 },
              ],
			  
              bots: [
				{ x: 810, y: 70, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 80, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 345, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 250, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 65, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 345, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 210, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 250, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 65, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 345, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: -10, y: 220, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 250, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 2
             //green - prepare time
            {
              timeout: 18, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 253, y: 203, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 215, y: 372, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 565, y: 203, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 515, y: 369, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 18 * 24, health_add: [100,100], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 422, y: 157, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.55, 0.85], viols_add: [20,20] },
			 { x: 330, y: 443, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 18 * 24, health_add: [30,30], ammo_add: [0.55, 0.85], viols_add: [20,20] },
			 { x: 288, y: 293, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },
			 { x: 470, y: 280, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 18 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 88, y: 125, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 98, y: 486, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 590, y: 525, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 733, y: 192, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 424, y: 32, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 560, y: 218, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 280, y: 306, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
              ],
			  
              bots: [
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 320, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 410, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 210, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 340, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				
				{ x: 430, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 230, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 320, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 410, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 230, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
             //green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 378, y: 163, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 230, y: 303, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 370, y: 430, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 571, y: 278, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 470, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 290, y: 280, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 255, y: 220, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			 { x: 486, y: 337, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 280, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 402, y: 560, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 66, y: 130, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 715, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 579, y: 522, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 117, y: 457, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 400, y: 155, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 325, y: 447, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],
			  
              bots: [
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				
				{ x: 810, y: 130, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 410, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 330, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 210, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 430, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 110, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 210, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 510, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 360, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 130, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				
				{ x: 810, y: 320, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 230, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 130, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 200, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				
				{ x: -10, y: 220, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 480, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				//{ x: 810, y: 130, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				//{ x: 200, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				//{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				//{ x: 400, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 255, y: 206, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 209, y: 343, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 337, y: 428, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 532, y: 356, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 590, y: 209, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 486, y: 212, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 200, y: 250, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 578, y: 310, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 410, y: 164, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 262, y: 394, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 230, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 750, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 530, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 700, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 38, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 334, y: 35, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 35, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 700, y: 550, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 360, y: 560, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 85, y: 510, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 70, y: 115, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 38 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 280, y: 210, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
			 { x: 520, y: 340, slow: 0.3, injure: 0.3, ttl: 38 * 24 },
              ],
			  
              bots: [
			  { x: 760, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 717, y: 365, next: 1 },
                      1: { x: 414, y: 276, next: 2 }, 
                    },
					},
			  { x: -10, y: 530, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 330, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
			    { x: -10, y: 230, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
			  	//{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				//{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				//{ x: 740, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                //      0: { x: 717, y: 365, next: 1 },
                 //     1: { x: 414, y: 276, next: 2 }, 
                 //   },
				//	},
				{ x: 430, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 530, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },	
					},
				{ x: 740, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},					
				{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 230, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 510, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 750, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 717, y: 365, next: 1 },
                      1: { x: 414, y: 276, next: 2 }, 
                    },
					},
				{ x: 700, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },
					},
				{ x: -10, y: 520, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 240, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: -10, y: 230, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
			  	//{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				//{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 740, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 717, y: 365, next: 1 },
                      1: { x: 414, y: 276, next: 2 }, 
                    },
					},
				//{ x: 430, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 530, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },	
					},
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 5
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 380, y: 210, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 300, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 380, y: 360, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 457, y: 284, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [170,170], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 260, y: 196, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.25, 0.5], viols_add: [20,20] },
			 { x: 519, y: 360, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.25, 0.5], viols_add: [20,20] },
			 { x: 212, y: 359, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.25, 0.5], viols_add: [20,20] },
			 { x: 565, y: 206, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 286, y: 408, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 700, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 55, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 256, y: 193, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 233, y: 335, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 337, y: 424, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 520, y: 359, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 583, y: 224, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 468, y: 273, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 55 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 292, y: 288, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
			 { x: 500, y: 230, slow: 0.3, injure: 0.3, ttl: 55 * 24 },
              ],
			  
              bots: [
				{ x: 330, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
			    { x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},	
				{ x: 320, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 700, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},
				{ x: 810, y: 550, kind: "Mutant_z_macką", count: 1, ai: 'pathfinder', params: {
                      0: { x: 570, y: 560, next: 1 },
                      1: { x: 415, y: 535, next: 2 }, 
                      2: { x: 350, y: 315, next: 3 },
                    },
					},
				{ x: 710, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},					
				{ x: 320, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: -10, y: 230, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 510, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 330, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 710, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},	
				
				{ x: -10, y: 210, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 490, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 330, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },					
				{ x: 810, y: 350, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },							
				{ x: 700, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},
				{ x: -10, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: -10, y: 210, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 690, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},					
				{ x: -10, y: 510, kind: "Ghul_z_Metra", count: 1, ai: 'pathfinder', params: {
                      0: { x: 100, y: 550, next: 1 },
                      1: { x: 230, y: 506, next: 2 }, 
                      2: { x: 356, y: 310, next: 3 },
                    },
					},
				{ x: 340, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 700, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 700, y: 110, next: 1 },
                      1: { x: 410, y: 253, next: 2 }, 
                    },	
					},
				{ x: 330, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
			    { x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
			//	{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
			//	{ x: -10, y: 500, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                //     0: { x: 100, y: 550, next: 1 },
                //     1: { x: 230, y: 506, next: 2 }, 
                //     2: { x: 356, y: 310, next: 3 },
                //    },
				//	},	
				//{ x: 320, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },					
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 6
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 338, y: 156, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 212, y: 253, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 282, y: 430, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 390, y: 439, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 575, y: 317, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 567, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 210, y: 349, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.35, 0.6], viols_add: [20,20] },
			 { x: 436, y: 161, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.35, 0.6], viols_add: [20,20] },
			 { x: 512, y: 372, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.35, 0.6], viols_add: [20,20] },
			 { x: 327, y: 238, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 388, y: 366, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 457, y: 227, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 33, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 46, y: 316, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 730, y: 316, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 396, y: 37, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 396, y: 562, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 200, y: 350, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 559, y: 191, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 33 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 260, y: 220, slow: 0.3, injure: 0.3, ttl: 33 * 24 },
			 { x: 540, y: 350, slow: 0.3, injure: 0.3, ttl: 33 * 24 },
			 { x: 709, y: 534, slow: 0.3, injure: 0.3, ttl: 33 * 24 },
			 { x: 80, y: 60, slow: 0.3, injure: 0.3, ttl: 33 * 24 },
              ],
			  
              bots: [
				{ x: 420, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 420, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				],
              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 7
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 255, y: 186, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 211, y: 258, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 232, y: 388, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 414, y: 424, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 529, y: 366, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 578, y: 267, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 553, y: 184, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 383, y: 159, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [110,110], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 320, y: 231, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 450, y: 344, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 474, y: 243, attack: 0.25, defence: 0.25, speed: 0.25, ttl: 20 * 24 },
			 { x: 266, y: 304, attack: 0.25, defence: 0.25, speed: 0.25, ttl: 20 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 50, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 60, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 60, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 720, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 720, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 400, y: 30, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 400, y: 560, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 204, y: 382, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 569, y: 205, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
              ],
			  
              bots: [
			   { x: 60, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 80, y: 214, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				{ x: 810, y: 120, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },						
				{ x: 420, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 500, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 213, y: 526, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				{ x: 810, y: 340, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },					
				{ x: 220, y: 610, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 680, y: 112, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				{ x: -10, y: 30, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 316, y: 29, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},
				{ x: 810, y: 550, kind: "Szczur_z_Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 650, y: 570, next: 1 },
                      1: { x: 418, y: 550, next: 2 },
					  2: { x: 350, y: 320, next: 3 },
                    },	
					},
				{ x: 330, y: -10, kind: "Szczur_z_Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },											
				{ x: -10, y: 30, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 316, y: 29, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 330, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 700, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 710, y: 460, next: 1 },
                      1: { x: 675, y: 344, next: 2 },
					  2: { x: 350, y: 320, next: 3 },
                    },	
					},	
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 420, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 720, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 680, y: 112, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				{ x: -10, y: 30, kind: "Mutant z Warszawy", count: 1, ai: 'pathfinder', params: {
                      0: { x: 316, y: 29, next: 1 },
                      1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				
				{ x: 720, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'pathfinder', params: {
                      0: { x: 680, y: 112, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				{ x: -10, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'pathfinder', params: {
                      0: { x: 213, y: 526, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},	
				{ x: 810, y: 120, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 700, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'pathfinder', params: {
                      0: { x: 710, y: 460, next: 1 },
                      1: { x: 675, y: 344, next: 2 },
					  2: { x: 350, y: 320, next: 3 },
                    },	
					},					
				{ x: -10, y: 30, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },		
				{ x: 60, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'pathfinder', params: {
                      0: { x: 80, y: 214, next: 1 },
					  1: { x: 350, y: 320, next: 2 },
                    },	
					},					
				{ x: -10, y: 220, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 8
             //green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 379, y: 210, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 312, y: 257, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 322, y: 324, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 386, y: 359, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 457, y: 316, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 450, y: 240, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 208, y: 382, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 515, y: 369, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 556, y: 188, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 393, y: 145, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			 { x: 331, y: 433, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			 { x: 255, y: 194, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },			 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]			  
            },
            // orange - cautious time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 254, y: 199, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 205, y: 383, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 327, y: 430, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 520, y: 364, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 576, y: 206, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 410, y: 148, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 380, y: 213, slow: 0.2, injure: 0.2, ttl: 35 * 24 },
			 { x: 310, y: 343, slow: 0.2, injure: 0.2, ttl: 35 * 24 },
			 { x: 461, y: 334, slow: 0.2, injure: 0.2, ttl: 35 * 24 },
              ],
			  
              bots: [
				{ x: 420, y: 610, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },										
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 330, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },						
				{ x: 700, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },					
				{ x: -10, y: 30, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 60, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },										
				{ x: 810, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
						
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ],
            },
            // red - amok time
            {
              timeout: 50, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 333, y: 37, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 38, y: 308, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 417, y: 562, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 736, y: 303, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 555, y: 190, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 252, y: 178, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 208, y: 365, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 517, y: 376, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 50 * 24, health_add: [130,130], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 51, y: 444, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 726, y: 160, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 389, y: 163, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 368, y: 440, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 50 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 205, y: 271, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 553, y: 290, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 68, y: 52, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
			 { x: 700, y: 550, slow: 0.3, injure: 0.3, ttl: 50 * 24 },
              ],
			  
              bots: [			    
				{ x: -10, y: 500, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 700, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 30, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },								
				{ x: 60, y: -10, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 330, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            }
        );  

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(1500);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 7<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 7>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_7 = levels.define_replay_level(7);
  replay_level_7.set_name('replay_level_7_name');
  replay_level_7.set_map_position(260, 135);
  replay_level_7.set_desc('replay_level_7_desc');
  replay_level_7.set_previous(7);

  replay_level_7.set_level_data(
    function level_data(level) {
      level.set_id(7);

      level.set_background_image ('assets/img/levels/minski_las2.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_soldier_start_point(290,227);
      level.define_soldier_start_point(297,366);
      level.define_soldier_start_point(488,218);
      level.define_soldier_start_point(480,340);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;
		
		mesh.define_barrier(-30,-30, 830,-30);
		mesh.define_barrier(830,-30, 830,630);
		mesh.define_barrier(830,630, -30,630);
		mesh.define_barrier(-30,630, -30,-30);
		
		mesh.define_barrier(366,73, 555,57);
		mesh.define_barrier(555,57, 622,126);
		mesh.define_barrier(622,126, 584,137);
		mesh.define_barrier(584,137, 585,164);
		mesh.define_barrier(585,164, 542,146);
		mesh.define_barrier(542,146, 530,176);
		mesh.define_barrier(530,176, 498,166);
		mesh.define_barrier(498,166, 490,175);
		mesh.define_barrier(490,175, 460,154);
		mesh.define_barrier(460,154, 455,137);
		mesh.define_barrier(455,137, 439,140);
		mesh.define_barrier(439,140, 428,114);
		mesh.define_barrier(428,114, 366,110);
		mesh.define_barrier(366,110, 366,73);
		
		mesh.define_barrier(615,173, 639,162);
		mesh.define_barrier(639,162, 679,203);
		mesh.define_barrier(679,203, 682,248);
		mesh.define_barrier(682,248, 651,307);
		mesh.define_barrier(651,307, 595,293);
		mesh.define_barrier(595,293, 595,257);
		mesh.define_barrier(595,257, 626,221);
		mesh.define_barrier(626,221, 615,173);
		
		mesh.define_barrier(608,358, 650,368);
		mesh.define_barrier(650,368, 596,492);
		mesh.define_barrier(596,492, 547,465);
		mesh.define_barrier(547,465, 482,498);
		mesh.define_barrier(482,498, 430,493);
		mesh.define_barrier(430,493, 431,481);
		mesh.define_barrier(431,481, 443,469);
		mesh.define_barrier(443,469, 415,458);
		mesh.define_barrier(415,458, 468,414);
		mesh.define_barrier(468,414, 492,412);
		mesh.define_barrier(492,412, 464,389);
		mesh.define_barrier(464,389, 515,410);
		mesh.define_barrier(515,410, 566,377);
		mesh.define_barrier(566,377, 588,386);
		mesh.define_barrier(588,386, 608,358);
		
		mesh.define_barrier(316,460, 377,507);
		mesh.define_barrier(377,507, 377,534);
		mesh.define_barrier(377,534, 300,553);
		mesh.define_barrier(300,553, 264,533);
		mesh.define_barrier(264,533, 265,478);
		mesh.define_barrier(265,478, 295,457);
		mesh.define_barrier(295,457, 316,460);
		
		mesh.define_barrier(120,256, 171,260);
		mesh.define_barrier(171,260, 156,300);
		mesh.define_barrier(156,300, 195,304);
		mesh.define_barrier(195,304, 190,317);
		mesh.define_barrier(190,317, 169,327);
		mesh.define_barrier(169,327, 174,334);
		mesh.define_barrier(174,334, 177,378);
		mesh.define_barrier(177,378, 168,411);
		mesh.define_barrier(168,411, 191,436);
		mesh.define_barrier(191,436, 210,415);
		mesh.define_barrier(210,415, 238,432);
		mesh.define_barrier(238,432, 214,462);
		mesh.define_barrier(214,462, 164,470);
		mesh.define_barrier(164,470, 88,406);
		mesh.define_barrier(88,406, 86,321);
		mesh.define_barrier(86,321, 120,256);
		
		mesh.define_barrier(265,58, 319,74);
		mesh.define_barrier(319,74, 319,137);
		mesh.define_barrier(319,137, 280,174);
		mesh.define_barrier(280,174, 251,152);
		mesh.define_barrier(251,152, 203,202);
		mesh.define_barrier(203,202, 161,198);
		mesh.define_barrier(161,198, 162,131);
		mesh.define_barrier(162,131, 265,58);
		
	//	mesh.define_barrier(332,266, 426,230);
	//	mesh.define_barrier(426,230, 437,274);
	//	mesh.define_barrier(437,274, 433,320);
	//	mesh.define_barrier(433,320, 351,320);
	//	mesh.define_barrier(351,320, 338,312);
	//	mesh.define_barrier(338,312, 332,266);
		
		mesh.define_wall(363,105, 622,126);
		mesh.define_wall(555,57, 511,175);
		mesh.define_wall(615,173, 651,307);
		mesh.define_wall(679,203, 595,293);
		mesh.define_wall(450,451, 547,465);
		mesh.define_wall(547,465, 650,368);
		mesh.define_wall(316,460, 300,553);
		mesh.define_wall(265,478, 377,534);
		mesh.define_wall(120,256, 164,470);
		mesh.define_wall(164,470, 238,432);
		mesh.define_wall(88,406, 167,369);
		mesh.define_wall(161,198, 265,58);
		mesh.define_wall(265,58, 319,137);		
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
	  
	  level.define_speeches( [
	  { background: 'assets/img/story/dialogues/kos_szron_next_exit.png', text: 'replay_level_7_speech_0' },
	  { background: 'assets/img/story/dialogues/szron_kos_next_exit.png', text: 'replay_level_7_speech_1' },
	  { background: 'assets/img/story/dialogues/olaf_szron_next_exit.png', text: 'replay_level_7_speech_2' },
	  { background: 'assets/img/story/dialogues/szron_olaf_next_exit.png', text: 'replay_level_7_speech_3' },
	  { background: 'assets/img/story/dialogues/szron_kos_exit.png', text: 'replay_level_7_speech_4' },
	  ] );
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
	  
	  level.define_end_speeches( [
	  { background: 'assets/img/story/dialogues/kos_szron_next_exit.png', text: 'replay_level_7_speech_5' },
	  { background: 'assets/img/story/dialogues/szron_kos_exit.png', text: 'replay_level_7_speech_6' },
	  ] );
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);	 
 
      level.describe_wave(   // 1
             //green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki			  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 36, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 255, y: 198, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 206, y: 370, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 325, y: 426, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 519, y: 363, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 582, y: 212, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 415, y: 157, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 36 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 377, y: 209, slow: 0.3, injure: 0.3, ttl: 36 * 24 },
			 { x: 377, y: 383, slow: 0.3, injure: 0.3, ttl: 36 * 24 },
              ],
			  
              bots: [
			    { x: -10, y: 500, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: -10, y: 30, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },			
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },								
				{ x: 810, y: 120, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 2
             //green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 377, y: 174, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 386, y: 385, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 254, y: 290, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 510, y: 280, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 252, y: 193, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.4, 0.6], viols_add: [20,20] },
			 { x: 515, y: 376, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.4, 0.6], viols_add: [20,20] },
			 { x: 267, y: 400, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			 { x: 544, y: 202, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 32, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 335, y: 570, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 335, y: 35, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 50, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 740, y: 280, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 468, y: 208, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 307, y: 414, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 32 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 248, y: 207, slow: 0.3, injure: 0.3, ttl: 32 * 24 },
			 { x: 518, y: 353, slow: 0.3, injure: 0.3, ttl: 32 * 24 },
              ],
			  
              bots: [
				{ x: 210, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 410, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 420, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 560, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 230, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 110, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 340, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 330, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 810, y: 550, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 210, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 230, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 320, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 130, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },			
				{ x: 810, y: 540, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },							
				{ x: 330, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 430, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },								
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
             //green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 315, y: 217, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 448, y: 217, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 310, y: 350, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 440, y: 340, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [150,150], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 255, y: 204, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 562, y: 206, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.45, 0.7], viols_add: [20,20] },
			 { x: 213, y: 372, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			 { x: 517, y: 364, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 30, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 65, y: 60, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 87, y: 537, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 696, y: 62, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 676, y: 513, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 338, y: 440, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 391, y: 167, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 30 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 208, y: 348, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
			 { x: 569, y: 235, slow: 0.3, injure: 0.3, ttl: 30 * 24 },
              ],
			  
              bots: [
			    { x: -10, y: 220, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	 
				{ x: 700, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 30, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 720, y: -10, kind: "Mutant z Warszawy", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 420, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },								
				{ x: 330, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 700, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 330, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },			
				{ x: 420, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 60, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
             //green - prepare time
            {
              timeout: 15, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 380, y: 190, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [250,250], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 315, y: 327, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [250,250], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 450, y: 348, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 15 * 24, health_add: [250,250], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 263, y: 194, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.76], viols_add: [20,20] },
			 { x: 552, y: 192, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 15 * 24, health_add: [30,30], ammo_add: [0.5, 0.76], viols_add: [20,20] },
			 { x: 202, y: 349, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			 { x: 369, y: 438, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },
			 { x: 555, y: 346, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 15 * 24 },				 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 42, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 80, y: 69, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 85, y: 540, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 706, y: 58, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 706, y: 537, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 254, y: 192, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 559, y: 188, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 517, y: 371, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 212, y: 358, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 42 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 339, y: 436, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
			 { x: 439, y: 167, slow: 0.3, injure: 0.3, ttl: 42 * 24 },
              ],
			  
              bots: [
			    { x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
			    { x: -10, y: 220, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
			    { x: 810, y: 120, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	 
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 210, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 700, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },	
				{ x: 720, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 120, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 710, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },	
				{ x: 710, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 230, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },										
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },												
				{ x: 210, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },	
				{ x: 70, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 5
             //green - prepare time
            {
              timeout: 17, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 255, y: 190, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 223, y: 266, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 197, y: 361, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 555, y: 180, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 570, y: 282, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 512, y: 376, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 17 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 386, y: 160, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 382, y: 434, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 17 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 331, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
			 { x: 439, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },
			 { x: 378, y: 352, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 17 * 24 },				 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 385, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 47, y: 279, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 369, y: 568, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 738, y: 310, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 63, y: 62, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 107, y: 512, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 715, y: 68, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 670, y: 513, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 398, y: 153, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 211, y: 377, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 517, y: 364, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],
			  
              bots: [		    
				{ x: -10, y: 220, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 30, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },								
				{ x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },							
				{ x: 810, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 500, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 700, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 700, y: 610, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 30, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 60, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },												
				{ x: -10, y: 500, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },					
				{ x: 220, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ],
            },
            // red - amok time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 79, y: 53, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 87, y: 533, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 670, y: 522, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 686, y: 79, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 258, y: 197, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 510, y: 375, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 557, y: 193, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 206, y: 356, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 42, y: 296, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 739, y: 289, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 385, y: 296, slow: 0.3, injure: 0.3, ttl: 35 * 24 },				 
              ],

              bots: [ // boty
			    { x: 810, y: 120, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },								
				{ x: 810, y: 550, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },								
				{ x: 700, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
			    { x: -10, y: 220, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },											
				{ x: 810, y: 500, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },	
              ],

              marks: [ // strzalki
              ]
			  
            }
        );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(850);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 7<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 8>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_8 = levels.define_level(8);
  level_8.set_name('level_8_name');
  level_8.set_map_position(210, 260);
  level_8.set_desc('level_8_desc');
  level_8.set_previous(10);

  level_8.set_level_data(
    function level_data(level) {
      level.set_id(8);

      level.set_background_image ('assets/img/levels/okolice_krakowa.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
	  
	  level.add_survivor(3, "Komandoska", "Anglik", "Lekki kirys śmieciowy", null, null, null);
 
     // level.define_bot_start_point_mark(209, 5, 'assets/img/strzalki/arrow_down.png');
     // level.define_bot_start_point_mark(616, 5, 'assets/img/strzalki/arrow_down.png');
     // level.define_bot_start_point_mark(745, 182, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(745, 406, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(697, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(381, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(223, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(55, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(5, 342, 'assets/img/strzalki/arrow_right.png');
    //level.define_bot_start_point_mark(5, 216, 'assets/img/strzalki/arrow_right.png');

      level.define_soldier_start_point(293,210);
      level.define_soldier_start_point(293,253);
      level.define_soldier_start_point(293,293);
      level.define_soldier_start_point(392,253);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,-35, 835,635);
    mesh.define_barrier(835,635, 163,635);
    mesh.define_barrier(163,635, 163,562);
    mesh.define_barrier(163,562, 113,562);
    mesh.define_barrier(113,562, 113,635);
    mesh.define_barrier(113,635, -35,635);
    mesh.define_barrier(-35,635, -35,50);
    mesh.define_barrier(-35,50, 159,50);
    mesh.define_barrier(159,50, 159,-35);
    mesh.define_barrier(159,-35, 288,-35);
    mesh.define_barrier(288,-35, 288,50);
    mesh.define_barrier(288,50, 450,50);
    mesh.define_barrier(450,50, 450,-35),
    mesh.define_barrier(450,-35, 835,-35);
    mesh.define_barrier(113,301, 163,301);
    mesh.define_barrier(163,301, 163,532);
    mesh.define_barrier(163,532, 113,532);
    mesh.define_barrier(113,532, 113,301);
    mesh.define_barrier(19,466, 48,466);
    mesh.define_barrier(48,466, 48,496);
    mesh.define_barrier(48,496, 19,496);
    mesh.define_barrier(19,496, 19,466);
    mesh.define_barrier(43,154, 72,154);
    mesh.define_barrier(72,154, 72,183);
    mesh.define_barrier(72,183, 72,154);
    mesh.define_barrier(72,154, 43,154);
    mesh.define_barrier(150,124, 250,124);
    mesh.define_barrier(250,124, 250,154);
    mesh.define_barrier(250,194, 250,224);
    mesh.define_barrier(250,224, 150,224);
    mesh.define_barrier(150,224, 150,124);
    mesh.define_barrier(280,324, 380,324);
    mesh.define_barrier(380,324, 380,372);
    mesh.define_barrier(380,372, 332,372);
    mesh.define_barrier(332,272, 332,523);
    mesh.define_barrier(332,523, 280,523);
    mesh.define_barrier(280,523, 280,324);
    mesh.define_barrier(450,445, 480,445);
    mesh.define_barrier(520,445, 550,445);
    mesh.define_barrier(550,445, 550,545);
    mesh.define_barrier(550,545, 450,545);
    mesh.define_barrier(450,545, 450,445);
    mesh.define_barrier(630,546, 658,546);
    mesh.define_barrier(658,546, 658,576);
    mesh.define_barrier(658,576, 630,576);
    mesh.define_barrier(630,576, 630,546);
    mesh.define_barrier(562,27, 592,27);
    mesh.define_barrier(592,27, 592,57);
    mesh.define_barrier(592,57, 562,57);
    mesh.define_barrier(562,57, 562,27);
    mesh.define_barrier(475,248, 524,248);
    mesh.define_barrier(524,248, 524,328);
    mesh.define_barrier(524,328, 475,328);
    mesh.define_barrier(475,328, 475,248);
    mesh.define_barrier(374,129, 599,129);
    mesh.define_barrier(599,129, 599,178);
    mesh.define_barrier(599,178, 524,178);
    mesh.define_barrier(524,178, 524,217);
    mesh.define_barrier(524,217, 475,217);
    mesh.define_barrier(475,217, 475,178);
    mesh.define_barrier(475,178, 374,178);
    mesh.define_barrier(374,178, 374,129);
    mesh.define_barrier(664,92, 714,92);
    mesh.define_barrier(714,92, 714,297);
    mesh.define_barrier(714,297, 664,297);
    mesh.define_barrier(664,297, 664,92);
    mesh.define_barrier(664,326, 714,326);
    mesh.define_barrier(714,326, 714,490);
    mesh.define_barrier(714,490, 664,490);
    mesh.define_barrier(664,490, 664,326);
    mesh.define_barrier(72,183, 43,183);
    mesh.define_barrier(43,183, 43,154);
    
    mesh.define_wall(664,326, 714,490);
    mesh.define_wall(714,326, 664,490);
    mesh.define_wall(664,92, 714,297);
    mesh.define_wall(664,297, 714,92);
    mesh.define_wall(475,248, 524,328);
    mesh.define_wall(475,328, 524,248);
    mesh.define_wall(374,129, 524,217);
    mesh.define_wall(475,217, 599,129);
    mesh.define_wall(280,324, 332,524);
    mesh.define_wall(380,349, 282,349);
	
	mesh.define_wall(163,301, 113,532);
	mesh.define_wall(114,563, 162,599);
	
	mesh.define_wall(150,125, 248,125);
	mesh.define_wall(248,125, 248,222);
	mesh.define_wall(248,222, 150,221);
	mesh.define_wall(150,221, 150,125);
	
    mesh.define_wall(451,448, 550,444);
	mesh.define_wall(550,444, 549,545);
	mesh.define_wall(549,545, 451,544);
	mesh.define_wall(451,544, 451,448);
   
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

		 level.describe_wave(   // 1
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 						 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 10, y: 80, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 10, y: 250, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 740, y: 250, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 80, y: 250, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 308, y: 103, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 388, y: 430, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 593, y: 245, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 739, y: 549, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 307, y: 566, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 506, y: 45, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],
			  
              bots: [
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			  
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			  
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },						
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 2
             //green - prepare time
            {
              timeout: 25, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 96, y: 92, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 49, y: 376, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 320, y: 207, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 624, y: 93, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 600, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 392, y: 492, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 25 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 222, y: 277, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 498, y: 86, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 25 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 424, y: 240, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },
			 { x: 70, y: 553, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 25 * 24 },				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 10, y: 80, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 10, y: 250, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 10, y: 550, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 740, y: 250, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 740, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 220, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 500, y: 10, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 47, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 316, y: 107, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 47 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 219, y: 356, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 47 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 386, y: 545, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 47 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 607, y: 382, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 47 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 503, y: 76, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 47 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 424, y: 226, slow: 0.3, injure: 0.3, ttl: 47 * 24 },
			 { x: 386, y: 447, slow: 0.3, injure: 0.3, ttl: 47 * 24 },
              ],
			  
              bots: [		    
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 540, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 550, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 500, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 540, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 550, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 500, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 550, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 540, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 500, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 3
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 310, y: 110, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 424, y: 220, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 217, y: 375, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 384, y: 433, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 607, y: 478, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 620, y: 88, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 273, y: 270, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 500, y: 385, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 385, y: 547, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 87, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 300, y: 565, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 50, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 240, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 400, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 580, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 750, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 210, y: 10, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 114, y: 172, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 221, y: 460, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 500, y: 73, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 602, y: 360, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 760, y: 557, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 311, y: 162, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 392, y: 488, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],
			  
              bots: [	
			{ x: 750, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 745, y: 100, r: 100 } },
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },		
			{ x: 50, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 95, y: 100, r: 100 } },
			{ x: 580, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 510, y: 100, r: 100 } },
			{ x: 240, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },
						
			{ x: 240, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },						
			{ x: 580, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 510, y: 100, r: 100 } },
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },
			{ x: 750, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 745, y: 100, r: 100 } },
			{ x: 50, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 95, y: 100, r: 100 } },
			
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },
			{ x: 50, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 95, y: 100, r: 100 } },
			{ x: 750, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 745, y: 100, r: 100 } },
			{ x: 240, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },						
			{ x: 580, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 510, y: 100, r: 100 } },			
			
			{ x: 50, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 95, y: 100, r: 100 } },
			{ x: 580, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 510, y: 100, r: 100 } },
			{ x: 400, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },
			{ x: 240, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },			
			{ x: 750, y: 610, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 745, y: 100, r: 100 } },
			
			{ x: 750, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 745, y: 100, r: 100 } },
			{ x: 400, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },
			{ x: 50, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 95, y: 100, r: 100 } },					
			{ x: 580, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 510, y: 100, r: 100 } },
			{ x: 240, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 320, y: 100, r: 100 } },	
						
			{ x: 210, y: -10, kind: "Gor", count: 1, ai: 'wanderer', params: { x: -10, y: 220, r: 200 } },				
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );
		
		level.describe_wave(   // 4
             //green - prepare time
            {
              timeout: 24, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 	
			 { x: 96, y: 92, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 49, y: 376, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 320, y: 207, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 624, y: 93, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 600, y: 480, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 392, y: 492, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 24 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 222, y: 277, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 498, y: 86, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 590, y: 342, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 24 * 24, health_add: [30,30], ammo_add: [0.65, 0.85], viols_add: [20,20] },
			 { x: 424, y: 240, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },
			 { x: 70, y: 553, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 24 * 24 },				  
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 10, y: 80, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 10, y: 250, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 10, y: 550, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 740, y: 80, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 740, y: 250, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 740, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 220, y: 540, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 500, y: 10, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 45, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 316, y: 107, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 219, y: 356, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 386, y: 545, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 607, y: 382, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 503, y: 76, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 45 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 424, y: 226, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
			 { x: 386, y: 447, slow: 0.3, injure: 0.3, ttl: 45 * 24 },
              ],
			  
              bots: [		    
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 540, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 550, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 500, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 540, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 550, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 500, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			
			{ x: 810, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 250, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 550, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: -10, y: 80, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 810, y: 540, kind: "Mutant z Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 220, y: 610, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },
			{ x: 500, y: -10, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 360, y: 250, r: 200 } },			
              ],

              marks: [ // strzalki
              ],
            },
            // red - amok time
            null
        );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(1300);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 8<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 8>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_8 = levels.define_replay_level(8);
  replay_level_8.set_name('replay_level_8_name');
  replay_level_8.set_map_position(210, 260);
  replay_level_8.set_desc('replay_level_8_desc');
  replay_level_8.set_previous(6);

  replay_level_8.set_level_data(
    function level_data(level) {
      level.set_id(8);

      level.set_background_image ('assets/img/levels/okolice_krakowa.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(224,-20);
      level.define_bot_start_point(631,-20);
      level.define_bot_start_point(820,197);
      level.define_bot_start_point(820,421);
      level.define_bot_start_point(712,620);
      level.define_bot_start_point(396,620);
    level.define_bot_start_point(242,620);
    level.define_bot_start_point(70,620);
    level.define_bot_start_point(-20,357);
    level.define_bot_start_point(-20,229);
    level.define_bot_start_point(219,175);
    level.define_bot_start_point(500,474);


 
      level.define_bot_start_point_mark(209, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(616, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(745, 182, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 406, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(697, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(381, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(223, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(55, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 342, 'assets/img/strzalki/arrow_right.png');
    level.define_bot_start_point_mark(5, 216, 'assets/img/strzalki/arrow_right.png');



      level.define_soldier_start_point(293,210);
      level.define_soldier_start_point(293,253);
      level.define_soldier_start_point(293,293);
      level.define_soldier_start_point(392,253);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,-35, 835,635);
    mesh.define_barrier(835,635, 163,635);
    mesh.define_barrier(163,635, 163,562);
    mesh.define_barrier(163,562, 113,562);
    mesh.define_barrier(113,562, 113,635);
    mesh.define_barrier(113,635, -35,635);
    mesh.define_barrier(-35,635, -35,50);
    mesh.define_barrier(-35,50, 159,50);
    mesh.define_barrier(159,50, 159,-35);
    mesh.define_barrier(159,-35, 288,-35);
    mesh.define_barrier(288,-35, 288,50);
    mesh.define_barrier(288,50, 450,50);
    mesh.define_barrier(450,50, 450,-35),
    mesh.define_barrier(450,-35, 835,-35);
    mesh.define_barrier(113,301, 163,301);
    mesh.define_barrier(163,301, 163,532);
    mesh.define_barrier(163,532, 113,532);
    mesh.define_barrier(113,532, 113,301);
    mesh.define_barrier(19,466, 48,466);
    mesh.define_barrier(48,466, 48,496);
    mesh.define_barrier(48,496, 19,496);
    mesh.define_barrier(19,496, 19,466);
    mesh.define_barrier(43,154, 72,154);
    mesh.define_barrier(72,154, 72,183);
    mesh.define_barrier(72,183, 72,154);
    mesh.define_barrier(72,154, 43,154);
    mesh.define_barrier(150,124, 250,124);
    mesh.define_barrier(250,124, 250,154);
    mesh.define_barrier(250,194, 250,224);
    mesh.define_barrier(250,224, 150,224);
    mesh.define_barrier(150,224, 150,124);
    mesh.define_barrier(280,324, 380,324);
    mesh.define_barrier(380,324, 380,372);
    mesh.define_barrier(380,372, 332,372);
    mesh.define_barrier(332,272, 332,523);
    mesh.define_barrier(332,523, 280,523);
    mesh.define_barrier(280,523, 280,324);
    mesh.define_barrier(450,445, 480,445);
    mesh.define_barrier(520,445, 550,445);
    mesh.define_barrier(550,445, 550,545);
    mesh.define_barrier(550,545, 450,545);
    mesh.define_barrier(450,545, 450,445);
    mesh.define_barrier(630,546, 658,546);
    mesh.define_barrier(658,546, 658,576);
    mesh.define_barrier(658,576, 630,576);
    mesh.define_barrier(630,576, 630,546);
    mesh.define_barrier(562,27, 592,27);
    mesh.define_barrier(592,27, 592,57);
    mesh.define_barrier(592,57, 562,57);
    mesh.define_barrier(562,57, 562,27);
    mesh.define_barrier(475,248, 524,248);
    mesh.define_barrier(524,248, 524,328);
    mesh.define_barrier(524,328, 475,328);
    mesh.define_barrier(475,328, 475,248);
    mesh.define_barrier(374,129, 599,129);
    mesh.define_barrier(599,129, 599,178);
    mesh.define_barrier(599,178, 524,178);
    mesh.define_barrier(524,178, 524,217);
    mesh.define_barrier(524,217, 475,217);
    mesh.define_barrier(475,217, 475,178);
    mesh.define_barrier(475,178, 374,178);
    mesh.define_barrier(374,178, 374,129);
    mesh.define_barrier(664,92, 714,92);
    mesh.define_barrier(714,92, 714,297);
    mesh.define_barrier(714,297, 664,297);
    mesh.define_barrier(664,297, 664,92);
    mesh.define_barrier(664,326, 714,326);
    mesh.define_barrier(714,326, 714,490);
    mesh.define_barrier(714,490, 664,490);
    mesh.define_barrier(664,490, 664,326);
    mesh.define_barrier(72,183, 43,183);
    mesh.define_barrier(43,183, 43,154);
    
    mesh.define_wall(664,326, 714,490);
    mesh.define_wall(714,326, 664,490);
    mesh.define_wall(664,92, 714,297);
    mesh.define_wall(664,297, 714,92);
    mesh.define_wall(475,248, 524,328);
    mesh.define_wall(475,328, 524,248);
    mesh.define_wall(374,129, 524,217);
    mesh.define_wall(475,217, 599,129);
    mesh.define_wall(280,324, 332,524);
    mesh.define_wall(380,349, 282,349);
    
   
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 15 ,
        [
          null, // góra budynek
          null, // góra prawa
          { "Mutant_z_pazurem": 1 }, // prawa góra
          { "Mutant_z_pazurem": 1 }, // prawa dół
          null, // dół prawo
          null, // dół środek
      null, // dół wyrwa
      null, // dół lewo
      { "Mutant_z_macką": 1 }, // lewo dół
      { "Mutant_z_macką": 1 }, // lewo góra
      null, // skrzynka góra
      null, // skrzynka dół
        ],
        24 * 10
      );
    
    level.define_wave( 24 * 30 ,
        [
          null, // góra budynek
          { "Ghul": 1 }, // góra prawa
          { "Mutant_z_pazurem": 1 }, // prawa góra
          { "Mutant_z_pazurem": 1 }, // prawa dół
          { "Mutant_z_pazurem": 1 }, // dół prawo
          { "Mutant_z_pazurem": 1 }, // dół środek
      { "Mutant_z_pazurem": 1 }, // dół wyrwa
      { "Mutant_z_pazurem": 1 }, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // skrzynka góra
      null, // skrzynka dół
        ],
        24 * 25
      );
    
    level.define_wave( 24 * 45 ,
        [
          { "Gor": 1 }, // góra budynek
          null, // góra prawa
          null, // prawa góra
          null, // prawa dół
          null, // dół prawo
          null, // dół środek
      null, // dół wyrwa
      null, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // skrzynka góra
      null, // skrzynka dół
        ],
        24 * 40
      );
    
     level.define_wave( 24 * 50 ,
        [
          null, // góra budynek
          null, // góra prawa
          { "Mutant_z_pazurem": 1 }, // prawa góra
          { "Mutant_z_pazurem": 1 }, // prawa dół
          null, // dół prawo
          null, // dół środek
      null, // dół wyrwa
      null, // dół lewo
      { "Mutant": 2 }, // lewo dół
      { "Mutant": 2 }, // lewo góra
      null, // skrzynka góra
      null, // skrzynka dół
        ],
        24 * 75
      );
    
    level.define_wave( 24 * 75 ,
        [
          null, // góra budynek
          { "Mutant_z_pazurem": 2 }, // góra prawa
          null, // prawa góra
          null, // prawa dół
          { "Mutant_z_macką": 1 }, // dół prawo
          { "Mutant_z_macką": 1 }, // dół środek
      { "Mutant_z_macką": 1 }, // dół wyrwa
      { "Mutant_z_macką": 1 }, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // skrzynka góra
      { "Ghul": 1 }, // skrzynka dół
        ],
        24 * 70
      );
    
    level.define_wave( 24 * 110 ,
        [
          { "Mutant": 1 }, // góra budynek
          { "Mutant": 1 }, // góra prawa
          { "Mutant": 1 }, // prawa góra
          { "Mutant": 1 }, // prawa dół
          { "Mutant": 1 }, // dół prawo
          { "Mutant": 1 }, // dół środek
      { "Mutant": 1 }, // dół wyrwa
      { "Mutant": 1 }, // dół lewo
      { "Mutant": 1 }, // lewo dół
      { "Mutant": 1 }, // lewo góra
      { "Mutant": 1 }, // skrzynka góra
      { "Mutant": 1 }, // skrzynka dół
        ],
        24 * 105
      );
    
    level.define_wave( 24 * 150 ,
        [
          null, // góra budynek
          null, // góra prawa
          { "Mutant_z_macką": 2 }, // prawa góra
          { "Mutant_z_macką": 2 }, // prawa dół
          null, // dół prawo
          null, // dół środek
      null, // dół wyrwa
      null, // dół lewo
      { "Mutant_z_pazurem": 2 }, // lewo dół
      { "Mutant_z_pazurem": 2 }, // lewo góra
      { "Ghul": 1 }, // skrzynka góra
      null, // skrzynka dół
        ],
        24 * 145
      );
    
   
   
    level.define_dropping_point( 774, 26,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,32], ammo_add: [0.25, 0.5], viols_add: [50,120] }
      );
    
    level.define_dropping_point( 766, 570,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,32], ammo_add: [0.25, 0.5], viols_add: [50,120] }
      );
    
    level.define_dropping_point( 19, 579,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,32], ammo_add: [0.25, 0.5], viols_add: [50,120] }
      );
    
    level.define_dropping_point( 24, 77,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,32], ammo_add: [0.25, 0.5], viols_add: [50,120] }
      );
    
    
    
    
    level.define_dropping_point( 475, 18,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [8,16], ammo_add: [0.2, 0.4], viols_add: [50,100] }
      );
    
    level.define_dropping_point( 485, 570,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [8,16], ammo_add: [0.2, 0.4], viols_add: [50,100] }
      );
    
    
    
    
    
    
    level.define_dropping_point( 561, 199,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [1,16], ammo_add: [0.1, 0.4], viols_add: [10,100] }
      );
    
    level.define_dropping_point( 635, 423,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [1,16], ammo_add: [0.1, 0.4], viols_add: [10,100] }
      );
    
    level.define_dropping_point( 349, 392,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [1,16], ammo_add: [0.1, 0.4], viols_add: [10,100] }
      );
    
    level.define_dropping_point( 197, 248,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [1,16], ammo_add: [0.1, 0.4], viols_add: [10,100] }
      );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(800);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 8<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 9>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_9 = levels.define_level(9);
  level_9.set_name('level_9_name');
  level_9.set_map_position(190, 280);
  level_9.set_desc('level_9_desc');
  level_9.set_previous(10);

  level_9.set_level_data(
    function level_data(level) {
      level.set_id(9);

      level.set_background_image ('assets/img/levels/krakowskie_metro.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
 
   //   level.define_bot_start_point_mark(21, 5, 'assets/img/strzalki/arrow_down.png');
   //   level.define_bot_start_point_mark(130, 5, 'assets/img/strzalki/arrow_down.png');
   //   level.define_bot_start_point_mark(381, 5, 'assets/img/strzalki/arrow_down.png');
   // level.define_bot_start_point_mark(543, 5, 'assets/img/strzalki/arrow_down.png');
   // level.define_bot_start_point_mark(697, 5, 'assets/img/strzalki/arrow_down.png');
   // level.define_bot_start_point_mark(745, 132, 'assets/img/strzalki/arrow_left.png');
   // level.define_bot_start_point_mark(745, 276, 'assets/img/strzalki/arrow_left.png');
   // level.define_bot_start_point_mark(745, 766, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(734, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(645, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(177, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(148, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(37, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(5, 423, 'assets/img/strzalki/arrow_right.png');
    //level.define_bot_start_point_mark(5, 272, 'assets/img/strzalki/arrow_right.png');
    //level.define_bot_start_point_mark(5, 128, 'assets/img/strzalki/arrow_right.png');

	  level.add_survivor(3, "Komandoska", "Anglik", "Lekki kirys śmieciowy", null, null, null);	
	
      level.define_soldier_start_point(354,70);
      level.define_soldier_start_point(434,70);
      level.define_soldier_start_point(354,109);
      level.define_soldier_start_point(434,109);  

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,20, 835,580);
    mesh.define_barrier(835,580, 775,580);
    mesh.define_barrier(775,580, 775,635);
    mesh.define_barrier(775,635, 725,635);
    mesh.define_barrier(725,635, 725,580);
    mesh.define_barrier(725,580, 686,580);
    mesh.define_barrier(686,580, 686,635);
    mesh.define_barrier(686,635, 636,635);
    mesh.define_barrier(636,635, 636,580);
    mesh.define_barrier(636,580, 317,580);
    mesh.define_barrier(317,580, 317,635);
    mesh.define_barrier(317,635, 267,635);
    mesh.define_barrier(267,635, 267,580);
    mesh.define_barrier(267,580, 189,580);
    mesh.define_barrier(189,580, 189,635);
    mesh.define_barrier(189,635, 139,635);
    mesh.define_barrier(139,635, 139,580);
    mesh.define_barrier(139,580, 79,580);
    mesh.define_barrier(79,580, 79,635);
    mesh.define_barrier(79,635, 29,635);
    mesh.define_barrier(29,635, 29,580);
    mesh.define_barrier(29,580, -35,580);
    mesh.define_barrier(-35,580, -35,20);
    mesh.define_barrier(-35,20, 13,20);
    mesh.define_barrier(13,20, 13,-35);
    mesh.define_barrier(13,-35, 63,-35);
    mesh.define_barrier(63,-35, 63,20);
    mesh.define_barrier(63,20, 120,20);
    mesh.define_barrier(120,20, 120,-35);
    mesh.define_barrier(120,-35, 171,-35);
    mesh.define_barrier(171,-35, 171,20);
    mesh.define_barrier(171,20, 370,20);
    mesh.define_barrier(370,20, 370,-35);
    mesh.define_barrier(370,-35, 420,-35);
    mesh.define_barrier(420,-35, 420,20);
    mesh.define_barrier(420,20, 533,20);
    mesh.define_barrier(533,20, 533,-35);
    mesh.define_barrier(533,-35, 583,-35);
    mesh.define_barrier(583,-35, 583,20);
    mesh.define_barrier(583,20, 725,20);
    mesh.define_barrier(725,20, 725,-35);
    mesh.define_barrier(725,-35, 775,-35);
    mesh.define_barrier(775,-35, 775,20);
    mesh.define_barrier(775,20, 835,20);
    
    mesh.define_barrier(81,81, 331,81);
    mesh.define_barrier(331,81, 331,111);
    mesh.define_barrier(331,111, 81,111);
    mesh.define_barrier(81,111, 81,81);
    mesh.define_barrier(474,81, 675,81);
    mesh.define_barrier(675,81, 675,111);
    mesh.define_barrier(675,111, 474,111);
    mesh.define_barrier(474,111, 474,81);
    mesh.define_barrier(375,504, 675,504);
    mesh.define_barrier(675,504, 675,534);
    mesh.define_barrier(675,534, 375,534);
    mesh.define_barrier(375,534, 375,504);
    mesh.define_barrier(135,188, 676,188);
    mesh.define_barrier(676,188, 676,438);
    mesh.define_barrier(676,438, 646,438);
    mesh.define_barrier(646,438, 646,218);
    mesh.define_barrier(646,218, 168,218);
    mesh.define_barrier(168,218, 168,408);
    mesh.define_barrier(168,408, 376,408);
    mesh.define_barrier(376,408, 376,438);
    mesh.define_barrier(376,438, 135,438);
    mesh.define_barrier(135,438, 135,188);
   
    mesh.define_wall(81,81, 331,111);
    mesh.define_wall(331,81, 81,111);
    mesh.define_wall(474,81, 676,111);
    mesh.define_wall(676,81, 474,111);
    mesh.define_wall(375,504, 675,534);
    mesh.define_wall(375,534, 675,504);
    mesh.define_wall(150,188, 150,438);
    mesh.define_wall(135,424, 376,424);
    mesh.define_wall(135,204, 676,204);
    mesh.define_wall(660,188, 660,438);
  
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

		 level.describe_wave(   // 1
             //green - prepare time
            {
              timeout: 10, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			// { x: 264, y: 167, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			// { x: 223, y: 266, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			// { x: 197, y: 361, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			// { x: 548, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			// { x: 570, y: 282, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			// { x: 530, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			// { x: 386, y: 160, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.5, 0.76], viols_add: [20,20] },
			// { x: 382, y: 434, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.5, 0.76], viols_add: [20,20] },
			// { x: 331, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			// { x: 439, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			// { x: 378, y: 352, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			//  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			//  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			//  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			//  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			//  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			//  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			//  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			//  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			//  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			 // {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			 // {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			//  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 100, // czas trwania fazy w sekundach!

              droppings: [
			// { x: 385, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			// { x: 47, y: 279, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			// { x: 369, y: 568, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			// { x: 738, y: 310, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			// { x: 63, y: 62, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			// { x: 107, y: 512, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			// { x: 715, y: 68, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			// { x: 670, y: 513, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			// { x: 379, y: 168, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			// { x: 193, y: 351, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			// { x: 545, y: 389, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],
			  
              bots: [		    
				{ x: -10, y: 220, kind: "Gor", count: 1, ai: 'wanderer', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ],
            },
            // red - amok time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 79, y: 53, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 87, y: 533, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 670, y: 522, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 686, y: 79, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 259, y: 171, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 536, y: 392, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 544, y: 157, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 194, y: 356, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 42, y: 296, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 739, y: 289, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 322, y: 286, slow: 0.3, injure: 0.3, ttl: 35 * 24 },				 
              ],

              bots: [ // boty
			    { x: 810, y: 120, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },								
				{ x: 810, y: 550, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },								
				{ x: 700, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
			    { x: -10, y: 220, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },											
				{ x: 810, y: 500, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },	
              ],

              marks: [ // strzalki
              ]
			  
            }
        );
		 
      level.describe_wave(   // 2
             //green - prepare time
            {
              timeout: 20, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 264, y: 167, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 223, y: 266, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 197, y: 361, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 548, y: 160, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 570, y: 282, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 530, y: 390, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 20 * 24, health_add: [140,140], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 386, y: 160, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.5, 0.76], viols_add: [20,20] },
			 { x: 382, y: 434, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 20 * 24, health_add: [30,30], ammo_add: [0.5, 0.76], viols_add: [20,20] },
			 { x: 331, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 439, y: 237, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },
			 { x: 378, y: 352, attack: 0.2, defence: 0.2, speed: 0.2, ttl: 20 * 24 },				 
              ],

              bots: [ // boty
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ]
			  
            },
            // orange - cautious time
            {
              timeout: 40, // czas trwania fazy w sekundach!

              droppings: [
			 { x: 385, y: 40, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 47, y: 279, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [10,10] },
			 { x: 369, y: 568, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 738, y: 310, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 63, y: 62, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 107, y: 512, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 715, y: 68, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 670, y: 513, ammo: 0.00, health: 0.0, viols: 1.0, ttl: 40 * 24, health_add: [30,30], ammo_add: [0.3, 0.6], viols_add: [15,15] },
			 { x: 379, y: 168, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 193, y: 351, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
			 { x: 545, y: 389, slow: 0.3, injure: 0.3, ttl: 40 * 24 },
              ],
			  
              bots: [		    
				{ x: -10, y: 220, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
				{ x: -10, y: 30, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },								
				{ x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },							
				{ x: 810, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 550, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Ghul_z_Metra", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 500, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 700, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },	
				{ x: 700, y: 610, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 30, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Mutant_z_pazurem", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 60, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },												
				{ x: -10, y: 500, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },					
				{ x: 220, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'cruiser', params: { x: 380, y: 280, r: 200 } },				
              ],

              marks: [ // strzalki
			  {x: 745, y: 120, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 340, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 745, y: 550, src: 'assets/img/strzalki/arrow_left.png'},
			  {x: 700, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 420, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 220, y: 545, src: 'assets/img/strzalki/arrow_up.png'},
			  {x: 5, y: 220, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 500, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 5, y: 30, src: 'assets/img/strzalki/arrow_right.png'},
			  {x: 720, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 330, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
			  {x: 60, y: 5, src: 'assets/img/strzalki/arrow_down.png'},
              ],
            },
            // red - amok time
            {
              timeout: 35, // czas trwania fazy w sekundach!

              droppings: [ // znajdzki 		
			 { x: 79, y: 53, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 87, y: 533, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 670, y: 522, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 686, y: 79, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 259, y: 171, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 536, y: 392, ammo: 0.00, health: 1.0, viols: 0.0, ttl: 35 * 24, health_add: [120,120], ammo_add: [0.3, 0.6], viols_add: [20,20] },
			 { x: 544, y: 157, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 194, y: 356, ammo: 1.00, health: 0.0, viols: 0.0, ttl: 35 * 24, health_add: [30,30], ammo_add: [0.55, 0.8], viols_add: [20,20] },
			 { x: 42, y: 296, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 739, y: 289, slow: 0.3, injure: 0.3, ttl: 35 * 24 },
			 { x: 322, y: 286, slow: 0.3, injure: 0.3, ttl: 35 * 24 },				 
              ],

              bots: [ // boty
			    { x: 810, y: 120, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 220, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },								
				{ x: 810, y: 550, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 120, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },								
				{ x: 700, y: 610, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 340, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 220, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
			    { x: -10, y: 220, kind: "Mutant_z_pazurem", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },											
				{ x: 810, y: 500, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 720, y: -10, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 30, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 60, y: -10, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },				
				{ x: 810, y: 610, kind: "Mutant_z_macką", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: -10, y: 500, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },
				{ x: 810, y: 550, kind: "Pandora", count: 1, ai: 'amok', params: { x: 380, y: 280, r: 200 } },	
              ],

              marks: [ // strzalki
              ]
			  
            }
        );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(2200);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 9<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 9>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_9 = levels.define_replay_level(9);
  replay_level_9.set_name('replay_level_9_name');
  replay_level_9.set_map_position(190, 280);
  replay_level_9.set_desc('replay_level_9_desc');
  replay_level_9.set_previous(8);

  replay_level_9.set_level_data(
    function level_data(level) {
      level.set_id(9);

      level.set_background_image ('assets/img/levels/krakowskie_metro.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(36,-20);
      level.define_bot_start_point(145,-20);
      level.define_bot_start_point(396,-20);
      level.define_bot_start_point(558,-20);
      level.define_bot_start_point(747,-20);
      level.define_bot_start_point(820,147);
    level.define_bot_start_point(820,291);
    level.define_bot_start_point(820,781);
    level.define_bot_start_point(749,620);
    level.define_bot_start_point(660,620);
    level.define_bot_start_point(292,620);
    level.define_bot_start_point(163,620);
    level.define_bot_start_point(52,620);
    level.define_bot_start_point(-20,438);
    level.define_bot_start_point(-20,287);
    level.define_bot_start_point(-20,143);
 
      level.define_bot_start_point_mark(21, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(130, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(381, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(543, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(697, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 132, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 276, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 766, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(734, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(645, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(177, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(148, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(37, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 423, 'assets/img/strzalki/arrow_right.png');
    level.define_bot_start_point_mark(5, 272, 'assets/img/strzalki/arrow_right.png');
    level.define_bot_start_point_mark(5, 128, 'assets/img/strzalki/arrow_right.png');

      level.define_soldier_start_point(354,70);
      level.define_soldier_start_point(434,70);
      level.define_soldier_start_point(354,109);
      level.define_soldier_start_point(434,109);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,20, 835,580);
    mesh.define_barrier(835,580, 775,580);
    mesh.define_barrier(775,580, 775,635);
    mesh.define_barrier(775,635, 725,635);
    mesh.define_barrier(725,635, 725,580);
    mesh.define_barrier(725,580, 686,580);
    mesh.define_barrier(686,580, 686,635);
    mesh.define_barrier(686,635, 636,635);
    mesh.define_barrier(636,635, 636,580);
    mesh.define_barrier(636,580, 317,580);
    mesh.define_barrier(317,580, 317,635);
    mesh.define_barrier(317,635, 267,635);
    mesh.define_barrier(267,635, 267,580);
    mesh.define_barrier(267,580, 189,580);
    mesh.define_barrier(189,580, 189,635);
    mesh.define_barrier(189,635, 139,635);
    mesh.define_barrier(139,635, 139,580);
    mesh.define_barrier(139,580, 79,580);
    mesh.define_barrier(79,580, 79,635);
    mesh.define_barrier(79,635, 29,635);
    mesh.define_barrier(29,635, 29,580);
    mesh.define_barrier(29,580, -35,580);
    mesh.define_barrier(-35,580, -35,20);
    mesh.define_barrier(-35,20, 13,20);
    mesh.define_barrier(13,20, 13,-35);
    mesh.define_barrier(13,-35, 63,-35);
    mesh.define_barrier(63,-35, 63,20);
    mesh.define_barrier(63,20, 120,20);
    mesh.define_barrier(120,20, 120,-35);
    mesh.define_barrier(120,-35, 171,-35);
    mesh.define_barrier(171,-35, 171,20);
    mesh.define_barrier(171,20, 370,20);
    mesh.define_barrier(370,20, 370,-35);
    mesh.define_barrier(370,-35, 420,-35);
    mesh.define_barrier(420,-35, 420,20);
    mesh.define_barrier(420,20, 533,20);
    mesh.define_barrier(533,20, 533,-35);
    mesh.define_barrier(533,-35, 583,-35);
    mesh.define_barrier(583,-35, 583,20);
    mesh.define_barrier(583,20, 725,20);
    mesh.define_barrier(725,20, 725,-35);
    mesh.define_barrier(725,-35, 775,-35);
    mesh.define_barrier(775,-35, 775,20);
    mesh.define_barrier(775,20, 835,20);
    
    mesh.define_barrier(81,81, 331,81);
    mesh.define_barrier(331,81, 331,111);
    mesh.define_barrier(331,111, 81,111);
    mesh.define_barrier(81,111, 81,81);
    mesh.define_barrier(474,81, 675,81);
    mesh.define_barrier(675,81, 675,111);
    mesh.define_barrier(675,111, 474,111);
    mesh.define_barrier(474,111, 474,81);
    mesh.define_barrier(375,504, 675,504);
    mesh.define_barrier(675,504, 675,534);
    mesh.define_barrier(675,534, 375,534);
    mesh.define_barrier(375,534, 375,504);
    mesh.define_barrier(135,188, 676,188);
    mesh.define_barrier(676,188, 676,438);
    mesh.define_barrier(676,438, 646,438);
    mesh.define_barrier(646,438, 646,218);
    mesh.define_barrier(646,218, 168,218);
    mesh.define_barrier(168,218, 168,408);
    mesh.define_barrier(168,408, 376,408);
    mesh.define_barrier(376,408, 376,438);
    mesh.define_barrier(376,438, 135,438);
    mesh.define_barrier(135,438, 135,188);
    
    
    mesh.define_wall(81,81, 331,111);
    mesh.define_wall(331,81, 81,111);
    mesh.define_wall(474,81, 676,111);
    mesh.define_wall(676,81, 474,111);
    mesh.define_wall(375,504, 675,634);
    mesh.define_wall(375,634, 675,504);
    mesh.define_wall(150,188, 150,438);
    mesh.define_wall(135,424, 376,424);
    mesh.define_wall(135,204, 676,204);
    mesh.define_wall(660,188, 660,438);
    
   
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 5 ,
        [
          null, // góra lewa
          null, // góra lewa-środek
          null, // góra środek
          null, // góra prawa-środek
          null, // góra prawa
          { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // prawo góra
      { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // prawo środek
      { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // prawo dół
      null, // dół prawo
      null, // dół prawo-środek
      null, // dół środek
      null, // dół lewo-środek
      null, // dół lewo
      { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // lewo dół
      { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // lewo środek
      { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // lewo góra
        ],
        1
      );
    
    level.define_wave( 24 * 20 ,
        [
          null, // góra lewa
          null, // góra lewa-środek
          null, // góra środek
          null, // góra prawa-środek
          null, // góra prawa
          null, // prawo góra
      null, // prawo środek
      null, // prawo dół
      { "Mutant": 2 }, // dół prawo
      { "Mutant": 2 }, // dół prawo-środek
      { "Mutant": 2 }, // dół środek
      { "Mutant": 2 }, // dół lewo-środek
      { "Mutant": 2 }, // dół lewo
      null, // lewo dół
      null, // lewo środek
      null, // lewo góra
        ],
        24 * 15
      );
    
    level.define_wave( 24 * 40 ,
        [
          { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // góra lewa
          { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // góra lewa-środek
          { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // góra środek
          { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // góra prawa-środek
          { "Mutant_z_macką": 1, "Mutant_z_pazurem": 1 }, // góra prawa
          { "Ghul": 1 }, // prawo góra
      { "Ghul": 1 }, // prawo środek
      null, // prawo dół
      null, // dół prawo
      null, // dół prawo-środek
      null, // dół środek
      null, // dół lewo-środek
      null, // dół lewo
      null, // lewo dół
      { "Ghul": 1 }, // lewo środek
      { "Ghul": 1 }, // lewo góra
        ],
        24 * 35
      );
    
     level.define_wave( 24 * 60 ,
        [
          { "Mutant_z_macką": 1 }, // góra lewa
          { "Mutant_z_macką": 1 }, // góra lewa-środek
          { "Mutant": 1 }, // góra środek
          { "Mutant": 1 }, // góra prawa-środek
          { "Mutant": 1 }, // góra prawa
          { "Mutant": 1 }, // prawo góra
      { "Mutant": 1 }, // prawo środek
      { "Mutant": 1 }, // prawo dół
      { "Mutant": 1 }, // dół prawo
      { "Mutant": 1 }, // dół prawo-środek
      { "Mutant_z_macką": 1 }, // dół środek
      { "Mutant_z_macką": 1 }, // dół lewo-środek
      { "Mutant_z_macką": 1 }, // dół lewo
      { "Mutant_z_macką": 1 }, // lewo dół
      { "Mutant_z_macką": 1 }, // lewo środek
      { "Mutant_z_macką": 1 }, // lewo góra
        ],
        24 * 55
      );
    
    level.define_wave( 24 * 90 ,
        [
          { "Mutant_z_pazurem": 1 }, // góra lewa
          { "Mutant_z_pazurem": 1 }, // góra lewa-środek
          { "Mutant_z_pazurem": 1 }, // góra środek
          { "Mutant_z_pazurem": 1 }, // góra prawa-środek
          { "Mutant_z_pazurem": 1 }, // góra prawa
          { "Mutant_z_pazurem": 1 }, // prawo góra
      { "Mutant_z_pazurem": 1 }, // prawo środek
      { "Mutant_z_pazurem": 1 }, // prawo dół
      { "Mutant_z_pazurem": 1 }, // dół prawo
      { "Mutant_z_pazurem": 1 }, // dół prawo-środek
      { "Mutant_z_pazurem": 1 }, // dół środek
      { "Mutant_z_pazurem": 1 }, // dół lewo-środek
      { "Mutant_z_pazurem": 1 }, // dół lewo
      { "Mutant_z_pazurem": 1 }, // lewo dół
      { "Mutant_z_pazurem": 1 }, // lewo środek
      { "Mutant_z_pazurem": 1 }, // lewo góra
        ],
        24 * 85
      );
    
    level.define_wave( 24 * 100 ,
        [
          null, // góra lewa
          null, // góra lewa-środek
          { "Ghul": 1 }, // góra środek
          null, // góra prawa-środek
          null, // góra prawa
          null, // prawo góra
      { "Ghul": 1 }, // prawo środek
      null, // prawo dół
      null, // dół prawo
      null, // dół prawo-środek
      { "Ghul": 1 }, // dół środek
      null, // dół lewo-środek
      null, // dół lewo
      null, // lewo dół
      { "Ghul": 1 }, // lewo środek
      null, // lewo góra
        ],
        24 * 95
      );
    
   
    // prawy górny róg
    level.define_dropping_point( 784, 48,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [8,32], ammo_add: [0.3, 0.5], viols_add: [70,120] }
      );
    
    // lewy górny róg
    level.define_dropping_point( 13, 55,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [8,32], ammo_add: [0.3, 0.5], viols_add: [70,120] }
      );
    
    // prawo nad bunkrem
    level.define_dropping_point( 579, 140,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [8,32], ammo_add: [0.3, 0.5], viols_add: [70,120] }
      );
    
    // lewo nad bunkrem
    level.define_dropping_point( 204, 148,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [8,32], ammo_add: [0.3, 0.5], viols_add: [70,120] }
      );
    
    // na prawo
    level.define_dropping_point( 770, 198,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [4,32], ammo_add: [0.25, 0.4], viols_add: [50,120] }
      );
    
    // na lewo
    level.define_dropping_point( 28, 198,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [4,32], ammo_add: [0.25, 0.4], viols_add: [50,120] }
      );
    
    // prawy dolny róg
    level.define_dropping_point( 784, 557,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,16], ammo_add: [0.15, 0.4], viols_add: [10,120] }
      );
    
     // lewy dolny róg
    level.define_dropping_point( 22, 557,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,16], ammo_add: [0.15, 0.4], viols_add: [10,120] }
      );
    
     // prawo pod bunkrem
    level.define_dropping_point( 542, 562,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,16], ammo_add: [0.15, 0.4], viols_add: [10,120] }
      );
    
     // lewo pod bunkrem
    level.define_dropping_point( 214, 508,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,16], ammo_add: [0.15, 0.4], viols_add: [10,120] }
      );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(1300);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 9<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 10>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_10 = levels.define_level(10);
  level_10.set_name('level_10_name');
  level_10.set_map_position(250, 280);
  level_10.set_desc('level_10_desc');
  level_10.set_previous(8);

  level_10.set_level_data(
    function level_data(level) {
      level.set_id(10);

      level.set_background_image ('assets/img/levels/ulice_krakowa.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(322,-20);
      level.define_bot_start_point(543,-20);
      level.define_bot_start_point(820,97);
      level.define_bot_start_point(820,212);
      level.define_bot_start_point(820,367);
      level.define_bot_start_point(820,493);
    level.define_bot_start_point(637,620);
    level.define_bot_start_point(195,620);
    level.define_bot_start_point(-20,503);
    level.define_bot_start_point(-20,366);
    level.define_bot_start_point(-20,214);
    level.define_bot_start_point(-20,82);
    level.define_bot_start_point(391,153);  
    level.define_bot_start_point(253,184);
    level.define_bot_start_point(370,425);
    level.define_bot_start_point(531,385);
 
      level.define_bot_start_point_mark(307, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(528, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(745, 82, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 197, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 352, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 478, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(622, 545, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(180, 545, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(5, 488, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 351, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 199, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 67, 'assets/img/strzalki/arrow_up.png');

      level.define_soldier_start_point(236,273);
      level.define_soldier_start_point(236,325);
      level.define_soldier_start_point(294,273);
      level.define_soldier_start_point(294,325);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,35, 835,563);
    mesh.define_barrier(835,563, 663,563);
    mesh.define_barrier(663,563, 663,635);
    mesh.define_barrier(663,635, 613,635);
    mesh.define_barrier(613,635, 613,563);
    mesh.define_barrier(613,563, 226,563);
    mesh.define_barrier(613,563, 613,635);
    mesh.define_barrier(613,635, 176,635);
    mesh.define_barrier(176,635, 176,563);
    mesh.define_barrier(176,563, -35,563);
    mesh.define_barrier(-35,563, -35,35);
    mesh.define_barrier(-35,35, 299,35);
    mesh.define_barrier(299,35, 299,-35);
    mesh.define_barrier(299,-35, 349,-35);
    mesh.define_barrier(349,-35, 349,35);
    mesh.define_barrier(349,35, 516,35);
    mesh.define_barrier(516,35, 516,-35);
    mesh.define_barrier(516,-35, 566,-35);
    mesh.define_barrier(566,-35, 566,35);
    mesh.define_barrier(566,35, 835,35);
    
    mesh.define_barrier(89,98, 430,98);
    mesh.define_barrier(430,98, 430,125);
    mesh.define_barrier(430,125, 430,204);
    mesh.define_barrier(430,204, 305,204);
    mesh.define_barrier(205,204, 89,204);
    mesh.define_barrier(89,204, 89,98);
    
    mesh.define_barrier(347,367, 480,367);
    mesh.define_barrier(570,367, 688,367);
    mesh.define_barrier(688,367, 688,474);
    mesh.define_barrier(688,474, 347,474);
    mesh.define_barrier(347,474, 347,450);
    mesh.define_barrier(347,405, 347,367);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 15 ,
        [
          null, // góra lewa
          null, // góra prawa
          { "Mutant": 3 }, // prawo góra chodnik
          { "Mutant": 3 }, // prawo góra ulica
          { "Mutant": 3 }, // prawo dół ulica
          { "Mutant": 3 }, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      null, // lewo dół chodnik
      null, // lewo dół ulica
      null, // lewo góra ulica
      null, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 10
      );
    
    level.define_wave( 24 * 35 ,
        [
          null, // góra lewa
          null, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      { "Mutant_z_macką": 3 }, // lewo dół chodnik
      { "Mutant_z_macką": 3 }, // lewo dół ulica
      { "Mutant_z_macką": 3 }, // lewo góra ulica
      { "Mutant_z_macką": 3 }, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 30
      );
    
    level.define_wave( 24 * 60 ,
        [
          { "Ghul": 1 }, // góra lewa
          { "Ghul": 1 }, // góra prawa
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo góra chodnik
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo góra ulica
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo dół ulica
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      { "Mutant_z_macką": 3 }, // lewo dół chodnik
      { "Mutant_z_macką": 3 }, // lewo dół ulica
      { "Mutant_z_macką": 3 }, // lewo góra ulica
      { "Mutant_z_macką": 3 }, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 55
      );
    
     level.define_wave( 24 * 100 ,
        [
          null, // góra lewa
          null, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      { "Mutant_z_pazurem": 3 }, // dół prawo
      { "Mutant_z_pazurem": 3 }, // dół lewo
      null, // lewo dół chodnik
      null, // lewo dół ulica
      null, // lewo góra ulica
      null, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 95
      );
    
    level.define_wave( 24 * 150 ,
        [
          { "Mutant_z_pazurem": 2 }, // góra lewa
          { "Mutant_z_pazurem": 2 }, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      { "Mutant_z_macką": 1 }, // lewo dół chodnik
      { "Mutant_z_macką": 1 }, // lewo dół ulica
      { "Mutant_z_macką": 1 }, // lewo góra ulica
      { "Mutant_z_macką": 1 }, // lewo góra chodnik
      null, // ukryte prawo
      { "Ghul": 1 }, // ukryte dół
      { "Ghul": 1 }, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 145
      );
    
    level.define_wave( 24 * 200 ,
        [
         null, // góra lewa
          null, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      null, // lewo dół chodnik
      null, // lewo dół ulica
      null, // lewo góra ulica
      null, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 195
      );
    
   
    // prawy górny róg
    level.define_dropping_point( 734, 66,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // góra prawo
    level.define_dropping_point( 488, 72,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // góra lewo
    level.define_dropping_point( 268, 72,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // lewy górny róg
    level.define_dropping_point( 70, 74,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // prawy dolny róg
    level.define_dropping_point( 748, 536,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // dół prawo
    level.define_dropping_point( 506, 519,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // dół lewo
    level.define_dropping_point( 302, 521,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // lewy dolny róg
    level.define_dropping_point( 78, 534,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // środek prawo
    level.define_dropping_point( 624, 172,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,32], ammo_add: [0.25, 0.5], viols_add: [10,150] }
      );
    
     // środek lewo
    level.define_dropping_point( 175, 391,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,32], ammo_add: [0.25, 0.5], viols_add: [10,150] }
      );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(1600);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 10<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 10>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_10 = levels.define_replay_level(10);
  replay_level_10.set_name('replay_level_10_name');
  replay_level_10.set_map_position(250, 280);
  replay_level_10.set_desc('replay_level_10_desc');
  replay_level_10.set_previous(8);

  replay_level_10.set_level_data(
    function level_data(level) {
      level.set_id(10);

      level.set_background_image ('assets/img/levels/ulice_krakowa.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(322,-20);
      level.define_bot_start_point(543,-20);
      level.define_bot_start_point(820,97);
      level.define_bot_start_point(820,212);
      level.define_bot_start_point(820,367);
      level.define_bot_start_point(820,493);
    level.define_bot_start_point(637,620);
    level.define_bot_start_point(195,620);
    level.define_bot_start_point(-20,503);
    level.define_bot_start_point(-20,366);
    level.define_bot_start_point(-20,214);
    level.define_bot_start_point(-20,82);
    level.define_bot_start_point(391,153);  
    level.define_bot_start_point(253,184);
    level.define_bot_start_point(370,425);
    level.define_bot_start_point(531,385);
 
      level.define_bot_start_point_mark(307, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(528, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(745, 82, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 197, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 352, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 478, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(622, 545, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(180, 545, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(5, 488, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 351, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 199, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 67, 'assets/img/strzalki/arrow_up.png');

      level.define_soldier_start_point(236,273);
      level.define_soldier_start_point(236,325);
      level.define_soldier_start_point(294,273);
      level.define_soldier_start_point(294,325);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,35, 835,563);
    mesh.define_barrier(835,563, 663,563);
    mesh.define_barrier(663,563, 663,635);
    mesh.define_barrier(663,635, 613,635);
    mesh.define_barrier(613,635, 613,563);
    mesh.define_barrier(613,563, 226,563);
    mesh.define_barrier(613,563, 613,635);
    mesh.define_barrier(613,635, 176,635);
    mesh.define_barrier(176,635, 176,563);
    mesh.define_barrier(176,563, -35,563);
    mesh.define_barrier(-35,563, -35,35);
    mesh.define_barrier(-35,35, 299,35);
    mesh.define_barrier(299,35, 299,-35);
    mesh.define_barrier(299,-35, 349,-35);
    mesh.define_barrier(349,-35, 349,35);
    mesh.define_barrier(349,35, 516,35);
    mesh.define_barrier(516,35, 516,-35);
    mesh.define_barrier(516,-35, 566,-35);
    mesh.define_barrier(566,-35, 566,35);
    mesh.define_barrier(566,35, 835,35);
    
    mesh.define_barrier(89,98, 430,98);
    mesh.define_barrier(430,98, 430,125);
    mesh.define_barrier(430,125, 430,204);
    mesh.define_barrier(430,204, 305,204);
    mesh.define_barrier(205,204, 89,204);
    mesh.define_barrier(89,204, 89,98);
    
    mesh.define_barrier(347,367, 480,367);
    mesh.define_barrier(570,367, 688,367);
    mesh.define_barrier(688,367, 688,474);
    mesh.define_barrier(688,474, 347,474);
    mesh.define_barrier(347,474, 347,450);
    mesh.define_barrier(347,405, 347,367);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 15 ,
        [
          null, // góra lewa
          null, // góra prawa
          { "Mutant": 3 }, // prawo góra chodnik
          { "Mutant": 3 }, // prawo góra ulica
          { "Mutant": 3 }, // prawo dół ulica
          { "Mutant": 3 }, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      null, // lewo dół chodnik
      null, // lewo dół ulica
      null, // lewo góra ulica
      null, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 10
      );
    
    level.define_wave( 24 * 35 ,
        [
          null, // góra lewa
          null, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      { "Mutant_z_macką": 3 }, // lewo dół chodnik
      { "Mutant_z_macką": 3 }, // lewo dół ulica
      { "Mutant_z_macką": 3 }, // lewo góra ulica
      { "Mutant_z_macką": 3 }, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 30
      );
    
    level.define_wave( 24 * 60 ,
        [
          { "Ghul": 1 }, // góra lewa
          { "Ghul": 1 }, // góra prawa
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo góra chodnik
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo góra ulica
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo dół ulica
          { "Mutant_z_macką": 3, "Mutant_z_pazurem": 1 }, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      { "Mutant_z_macką": 3 }, // lewo dół chodnik
      { "Mutant_z_macką": 3 }, // lewo dół ulica
      { "Mutant_z_macką": 3 }, // lewo góra ulica
      { "Mutant_z_macką": 3 }, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 55
      );
    
     level.define_wave( 24 * 100 ,
        [
          null, // góra lewa
          null, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      { "Mutant_z_pazurem": 3 }, // dół prawo
      { "Mutant_z_pazurem": 3 }, // dół lewo
      null, // lewo dół chodnik
      null, // lewo dół ulica
      null, // lewo góra ulica
      null, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 95
      );
    
    level.define_wave( 24 * 150 ,
        [
          { "Mutant_z_pazurem": 2 }, // góra lewa
          { "Mutant_z_pazurem": 2 }, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      { "Mutant_z_macką": 1 }, // lewo dół chodnik
      { "Mutant_z_macką": 1 }, // lewo dół ulica
      { "Mutant_z_macką": 1 }, // lewo góra ulica
      { "Mutant_z_macką": 1 }, // lewo góra chodnik
      null, // ukryte prawo
      { "Ghul": 1 }, // ukryte dół
      { "Ghul": 1 }, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 145
      );
    
    level.define_wave( 24 * 200 ,
        [
         null, // góra lewa
          null, // góra prawa
          null, // prawo góra chodnik
          null, // prawo góra ulica
          null, // prawo dół ulica
          null, // prawo dół chodnik
      null, // dół prawo
      null, // dół lewo
      null, // lewo dół chodnik
      null, // lewo dół ulica
      null, // lewo góra ulica
      null, // lewo góra chodnik
      null, // ukryte prawo
      null, // ukryte dół
      null, // ukryte lewo
      null, // ukryte góra
        ],
        24 * 195
      );
    
   
    // prawy górny róg
    level.define_dropping_point( 734, 66,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // góra prawo
    level.define_dropping_point( 488, 72,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // góra lewo
    level.define_dropping_point( 268, 72,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // lewy górny róg
    level.define_dropping_point( 70, 74,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // prawy dolny róg
    level.define_dropping_point( 748, 536,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // dół prawo
    level.define_dropping_point( 506, 519,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // dół lewo
    level.define_dropping_point( 302, 521,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // lewy dolny róg
    level.define_dropping_point( 78, 534,
        20 * 24,
        { ammo: 0.1, health: 0.25, viols: 0.2, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.75], viols_add: [80,150] }
      );
    
    // środek prawo
    level.define_dropping_point( 624, 172,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,32], ammo_add: [0.25, 0.5], viols_add: [10,150] }
      );
    
     // środek lewo
    level.define_dropping_point( 175, 391,
        20 * 24,
        { ammo: 0.05, health: 0.15, viols: 0.1, ttl: 15 * 24, health_add: [4,32], ammo_add: [0.25, 0.5], viols_add: [10,150] }
      );

      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(950);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 10<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 11>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_11 = levels.define_level(11);
  level_11.set_name('level_11_name');
  level_11.set_map_position(260, 295);
  level_11.set_desc('level_11_desc');
  level_11.set_previous(10);

  level_11.set_level_data(
    function level_data(level) {
      level.set_id(11);

      level.set_background_image ('assets/img/levels/laboratorium.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(132,-20);
      level.define_bot_start_point(283,-20);
      level.define_bot_start_point(434,-20);
      level.define_bot_start_point(586,-20);
      level.define_bot_start_point(820,102);
      level.define_bot_start_point(820,463);
    level.define_bot_start_point(583,620);
    level.define_bot_start_point(434,620);
    level.define_bot_start_point(285,620);
    level.define_bot_start_point(135,620);
    level.define_bot_start_point(-20,461);
    level.define_bot_start_point(-20,99);
    level.define_bot_start_point(697,303);
 
      level.define_bot_start_point_mark(117, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(268, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(419, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(571, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 87, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 448, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(468, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(419, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(270, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(120, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 446, 'assets/img/strzalki/arrow_right.png');
    level.define_bot_start_point_mark(5, 84, 'assets/img/strzalki/arrow_right.png');

      level.define_soldier_start_point(106,229);
      level.define_soldier_start_point(106,191);
      level.define_soldier_start_point(106,269);
      level.define_soldier_start_point(56,191);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(784,16, 784,76);
    mesh.define_barrier(784,76, 835,76);
    mesh.define_barrier(835,76, 835,126);
    mesh.define_barrier(835,126, 784,126);
    mesh.define_barrier(784,126, 784,251);
    mesh.define_barrier(784,251, 680,251);
    mesh.define_barrier(680,351, 784,351);
    mesh.define_barrier(784,351, 784,434);
    mesh.define_barrier(784,434, 835,434);
    mesh.define_barrier(835,434, 835,484);
    mesh.define_barrier(835,484, 784,484);
    mesh.define_barrier(784,484, 784,584);
    mesh.define_barrier(784,584, 610,584);
    mesh.define_barrier(610,584, 610,635);
    mesh.define_barrier(610,635, 560,635);
    mesh.define_barrier(560,635, 560,584);
    mesh.define_barrier(560,584, 460,584);
    mesh.define_barrier(460,584, 460,635);
    mesh.define_barrier(460,635, 410,635);
    mesh.define_barrier(410,635, 410,584);
    mesh.define_barrier(410,584, 310,584);
    mesh.define_barrier(310,584, 310,635);
    mesh.define_barrier(310,635, 260,635);
    mesh.define_barrier(260,635, 260,584);
    mesh.define_barrier(260,584, 160,584);
    mesh.define_barrier(160,584, 160,635);
    mesh.define_barrier(160,635, 110,635);
    mesh.define_barrier(110,635, 110,584);
    mesh.define_barrier(110,584, 16,584);
    mesh.define_barrier(16,584, 16,484);
    mesh.define_barrier(16,484, -35,484);
    mesh.define_barrier(-35,484, -35,434);
    mesh.define_barrier(-35,434, 16,434);
    mesh.define_barrier(16,434, 16,126);
    mesh.define_barrier(16,126, -35,126);
    mesh.define_barrier(-35,126, -35,76);
    mesh.define_barrier(-35,76, 16,76);
    mesh.define_barrier(16,76, 16,16);
    mesh.define_barrier(16,16, 110,16);
    mesh.define_barrier(110,16, 110,-35);
    mesh.define_barrier(110,-35, 160,-35);
    mesh.define_barrier(160,-35, 160,16);
    mesh.define_barrier(160,16, 260,16);
    mesh.define_barrier(260,16, 260,-35);
    mesh.define_barrier(260,-35, 310,-35);
    mesh.define_barrier(310,-35, 310,16);
    mesh.define_barrier(310,16, 410,16);
    mesh.define_barrier(410,16, 410,-35);
    mesh.define_barrier(410,-35, 460,-35);
    mesh.define_barrier(460,-35, 460,16);
    mesh.define_barrier(460,16, 560,16);
    mesh.define_barrier(560,16, 560,-35);
    mesh.define_barrier(560,-35, 610,-35);
    mesh.define_barrier(610,-35, 610,16);
    mesh.define_barrier(610,16, 784,16);
    mesh.define_barrier(113,116, 163,116);
    mesh.define_barrier(163,116, 163,166);
    mesh.define_barrier(163,166, 113,166);
    mesh.define_barrier(113,166, 113,116);
    mesh.define_barrier(592,116, 642,116);
    mesh.define_barrier(642,116, 642,166);
    mesh.define_barrier(642,166, 592,166);
    mesh.define_barrier(592,166, 592,116);
    mesh.define_barrier(113,434, 163,434);
    mesh.define_barrier(163,434, 163,484);
    mesh.define_barrier(163,484, 113,484);
    mesh.define_barrier(113,484, 113,434);
    mesh.define_barrier(592,434, 642,434);
    mesh.define_barrier(642,434, 642,484);
    mesh.define_barrier(642,484, 592,484);
    mesh.define_barrier(592,484, 592,434);
    
    mesh.define_wall(113,116, 163,166);
    mesh.define_wall(113,166, 163,116);
    mesh.define_wall(592,116, 642,166);
    mesh.define_wall(592,166, 652,116);
    mesh.define_wall(113,434, 163,484);
    mesh.define_wall(113,484, 163,434);
    mesh.define_wall(592,434, 642,484);
    mesh.define_wall(592,484, 642,434);
    mesh.define_wall(680,250, 784,350);
    mesh.define_wall(784,250, 680,350);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 10 ,
        [
          { "Szczur": 6 }, // prawa góra
          { "Szczur": 6 }, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      null, // ukryte
        ],
        24 * 5
      );
    
    level.define_wave( 24 * 20 ,
        [
          null, // prawa góra
          null, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      { "Szczur": 6 }, // lewo dół
      { "Szczur": 6 }, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      null, // ukryte
        ],
        24 * 15
      );
    
    level.define_wave( 24 * 40 ,
        [
          null, // prawa góra
          null, // prawa dół
          { "Mutant": 2 }, // dół prawo
          { "Mutant": 2 }, // dół środek prawo
          { "Mutant": 2 }, // dół środek lewo
          { "Mutant": 2 }, // dół lewo
      null, // lewo dół
      null, // lewo góra
      { "Mutant": 2 }, // góra lewo
      { "Mutant": 2 }, // góra środek lewo
      { "Mutant": 2 }, // góra środek prawo
      { "Mutant": 2 }, // góra prawo
      null, // ukryte
        ],
        24 * 35
      );
    
     level.define_wave( 24 * 70 ,
        [
          { "Mutant_z_pazurem": 1 }, // prawa góra
          { "Mutant_z_pazurem": 1 }, // prawa dół
          { "Mutant_z_macką": 2 }, // dół prawo
          { "Mutant_z_macką": 2 }, // dół środek prawo
          { "Mutant_z_macką": 2 }, // dół środek lewo
          { "Mutant_z_macką": 2 }, // dół lewo
      { "Mutant_z_pazurem": 1 }, // lewo dół
      { "Mutant_z_pazurem": 1 }, // lewo góra
      { "Mutant_z_macką": 2 }, // góra lewo
      { "Mutant_z_macką": 2 }, // góra środek lewo
      { "Mutant_z_macką": 2 }, // góra środek prawo
      { "Mutant_z_macką": 2 }, // góra prawo
      null, // ukryte
        ],
        24 * 65
      );
    
    level.define_wave( 24 * 80 ,
        [
          { "Ghul": 1 }, // prawa góra
          { "Ghul": 1 }, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      { "Ghul": 1 }, // lewo dół
      { "Ghul": 1 }, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      null, // ukryte
        ],
        24 * 75
      );
    
    level.define_wave( 24 * 110 ,
        [
          { "Mutant_z_pazurem": 4 }, // prawa góra
          { "Mutant_z_pazurem": 4 }, // prawa dół
          { "Ghul": 1 }, // dół prawo
          { "Ghul": 1 }, // dół środek prawo
          { "Ghul": 1 }, // dół środek lewo
          { "Ghul": 1 }, // dół lewo
      { "Mutant_z_pazurem": 4 }, // lewo dół
      { "Mutant_z_pazurem": 4 }, // lewo góra
      { "Ghul": 1 }, // góra lewo
      { "Ghul": 1 }, // góra środek lewo
      { "Ghul": 1 }, // góra środek prawo
      { "Ghul": 1 }, // góra prawo
      null, // ukryte
        ],
        24 * 105
      );
    
    level.define_wave( 24 * 150 ,
        [
          { "Ghul": 2 }, // prawa góra
          { "Ghul": 2 }, // prawa dół
          { "Mutant_z_macką": 1 }, // dół prawo
          { "Mutant_z_macką": 1 }, // dół środek prawo
          { "Mutant_z_macką": 1 }, // dół środek lewo
          { "Mutant_z_macką": 1 }, // dół lewo
      { "Szczur": 4 }, // lewo dół
      { "Szczur": 4 }, // lewo góra
      { "Mutant_z_pazurem": 1 }, // góra lewo
      { "Mutant_z_pazurem": 1 }, // góra środek lewo
      { "Mutant_z_pazurem": 1 }, // góra środek prawo
      { "Mutant_z_pazurem": 1 }, // góra prawo
      null, // ukryte
        ],
        24 * 145
      );
    
    level.define_wave( 24 * 190 ,
        [
          null, // prawa góra
          null, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      { "Demigor": 1 }, // ukryte
        ],
        24 * 185
      );
    
      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(2000);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 11<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 11>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_11 = levels.define_replay_level(11);
  replay_level_11.set_name('replay_level_11_name');
  replay_level_11.set_map_position(260, 295);
  replay_level_11.set_desc('replay_level_11_desc');
  replay_level_11.set_previous(11);

  replay_level_11.set_level_data(
    function level_data(level) {
      level.set_id(11);

      level.set_background_image ('assets/img/levels/laboratorium.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(132,-20);
      level.define_bot_start_point(283,-20);
      level.define_bot_start_point(434,-20);
      level.define_bot_start_point(586,-20);
      level.define_bot_start_point(820,102);
      level.define_bot_start_point(820,463);
    level.define_bot_start_point(583,620);
    level.define_bot_start_point(434,620);
    level.define_bot_start_point(285,620);
    level.define_bot_start_point(135,620);
    level.define_bot_start_point(-20,461);
    level.define_bot_start_point(-20,99);
    level.define_bot_start_point(697,303);
 
      level.define_bot_start_point_mark(117, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(268, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(419, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(571, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 87, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 448, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(468, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(419, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(270, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(120, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 446, 'assets/img/strzalki/arrow_right.png');
    level.define_bot_start_point_mark(5, 84, 'assets/img/strzalki/arrow_right.png');

      level.define_soldier_start_point(106,229);
      level.define_soldier_start_point(106,191);
      level.define_soldier_start_point(106,269);
      level.define_soldier_start_point(56,191);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(784,16, 784,76);
    mesh.define_barrier(784,76, 835,76);
    mesh.define_barrier(835,76, 835,126);
    mesh.define_barrier(835,126, 784,126);
    mesh.define_barrier(784,126, 784,251);
    mesh.define_barrier(784,251, 680,251);
    mesh.define_barrier(680,351, 784,351);
    mesh.define_barrier(784,351, 784,434);
    mesh.define_barrier(784,434, 835,434);
    mesh.define_barrier(835,434, 835,484);
    mesh.define_barrier(835,484, 784,484);
    mesh.define_barrier(784,484, 784,584);
    mesh.define_barrier(784,584, 610,584);
    mesh.define_barrier(610,584, 610,635);
    mesh.define_barrier(610,635, 560,635);
    mesh.define_barrier(560,635, 560,584);
    mesh.define_barrier(560,584, 460,584);
    mesh.define_barrier(460,584, 460,635);
    mesh.define_barrier(460,635, 410,635);
    mesh.define_barrier(410,635, 410,584);
    mesh.define_barrier(410,584, 310,584);
    mesh.define_barrier(310,584, 310,635);
    mesh.define_barrier(310,635, 260,635);
    mesh.define_barrier(260,635, 260,584);
    mesh.define_barrier(260,584, 160,584);
    mesh.define_barrier(160,584, 160,635);
    mesh.define_barrier(160,635, 110,635);
    mesh.define_barrier(110,635, 110,584);
    mesh.define_barrier(110,584, 16,584);
    mesh.define_barrier(16,584, 16,484);
    mesh.define_barrier(16,484, -35,484);
    mesh.define_barrier(-35,484, -35,434);
    mesh.define_barrier(-35,434, 16,434);
    mesh.define_barrier(16,434, 16,126);
    mesh.define_barrier(16,126, -35,126);
    mesh.define_barrier(-35,126, -35,76);
    mesh.define_barrier(-35,76, 16,76);
    mesh.define_barrier(16,76, 16,16);
    mesh.define_barrier(16,16, 110,16);
    mesh.define_barrier(110,16, 110,-35);
    mesh.define_barrier(110,-35, 160,-35);
    mesh.define_barrier(160,-35, 160,16);
    mesh.define_barrier(160,16, 260,16);
    mesh.define_barrier(260,16, 260,-35);
    mesh.define_barrier(260,-35, 310,-35);
    mesh.define_barrier(310,-35, 310,16);
    mesh.define_barrier(310,16, 410,16);
    mesh.define_barrier(410,16, 410,-35);
    mesh.define_barrier(410,-35, 460,-35);
    mesh.define_barrier(460,-35, 460,16);
    mesh.define_barrier(460,16, 560,16);
    mesh.define_barrier(560,16, 560,-35);
    mesh.define_barrier(560,-35, 610,-35);
    mesh.define_barrier(610,-35, 610,16);
    mesh.define_barrier(610,16, 784,16);
    mesh.define_barrier(113,116, 163,116);
    mesh.define_barrier(163,116, 163,166);
    mesh.define_barrier(163,166, 113,166);
    mesh.define_barrier(113,166, 113,116);
    mesh.define_barrier(592,116, 642,116);
    mesh.define_barrier(642,116, 642,166);
    mesh.define_barrier(642,166, 592,166);
    mesh.define_barrier(592,166, 592,116);
    mesh.define_barrier(113,434, 163,434);
    mesh.define_barrier(163,434, 163,484);
    mesh.define_barrier(163,484, 113,484);
    mesh.define_barrier(113,484, 113,434);
    mesh.define_barrier(592,434, 642,434);
    mesh.define_barrier(642,434, 642,484);
    mesh.define_barrier(642,484, 592,484);
    mesh.define_barrier(592,484, 592,434);
    
    mesh.define_wall(113,116, 163,166);
    mesh.define_wall(113,166, 163,116);
    mesh.define_wall(592,116, 642,166);
    mesh.define_wall(592,166, 652,116);
    mesh.define_wall(113,434, 163,484);
    mesh.define_wall(113,484, 163,434);
    mesh.define_wall(592,434, 642,484);
    mesh.define_wall(592,484, 642,434);
    mesh.define_wall(680,250, 784,350);
    mesh.define_wall(784,250, 680,350);
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 10 ,
        [
          { "Szczur": 6 }, // prawa góra
          { "Szczur": 6 }, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      null, // ukryte
        ],
        24 * 5
      );
    
    level.define_wave( 24 * 20 ,
        [
          null, // prawa góra
          null, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      { "Szczur": 6 }, // lewo dół
      { "Szczur": 6 }, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      null, // ukryte
        ],
        24 * 15
      );
    
    level.define_wave( 24 * 40 ,
        [
          null, // prawa góra
          null, // prawa dół
          { "Mutant": 2 }, // dół prawo
          { "Mutant": 2 }, // dół środek prawo
          { "Mutant": 2 }, // dół środek lewo
          { "Mutant": 2 }, // dół lewo
      null, // lewo dół
      null, // lewo góra
      { "Mutant": 2 }, // góra lewo
      { "Mutant": 2 }, // góra środek lewo
      { "Mutant": 2 }, // góra środek prawo
      { "Mutant": 2 }, // góra prawo
      null, // ukryte
        ],
        24 * 35
      );
    
     level.define_wave( 24 * 70 ,
        [
          { "Mutant_z_pazurem": 1 }, // prawa góra
          { "Mutant_z_pazurem": 1 }, // prawa dół
          { "Mutant_z_macką": 2 }, // dół prawo
          { "Mutant_z_macką": 2 }, // dół środek prawo
          { "Mutant_z_macką": 2 }, // dół środek lewo
          { "Mutant_z_macką": 2 }, // dół lewo
      { "Mutant_z_pazurem": 1 }, // lewo dół
      { "Mutant_z_pazurem": 1 }, // lewo góra
      { "Mutant_z_macką": 2 }, // góra lewo
      { "Mutant_z_macką": 2 }, // góra środek lewo
      { "Mutant_z_macką": 2 }, // góra środek prawo
      { "Mutant_z_macką": 2 }, // góra prawo
      null, // ukryte
        ],
        24 * 65
      );
    
    level.define_wave( 24 * 80 ,
        [
          { "Ghul": 1 }, // prawa góra
          { "Ghul": 1 }, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      { "Ghul": 1 }, // lewo dół
      { "Ghul": 1 }, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      null, // ukryte
        ],
        24 * 75
      );
    
    level.define_wave( 24 * 110 ,
        [
          { "Mutant_z_pazurem": 4 }, // prawa góra
          { "Mutant_z_pazurem": 4 }, // prawa dół
          { "Ghul": 1 }, // dół prawo
          { "Ghul": 1 }, // dół środek prawo
          { "Ghul": 1 }, // dół środek lewo
          { "Ghul": 1 }, // dół lewo
      { "Mutant_z_pazurem": 4 }, // lewo dół
      { "Mutant_z_pazurem": 4 }, // lewo góra
      { "Ghul": 1 }, // góra lewo
      { "Ghul": 1 }, // góra środek lewo
      { "Ghul": 1 }, // góra środek prawo
      { "Ghul": 1 }, // góra prawo
      null, // ukryte
        ],
        24 * 105
      );
    
    level.define_wave( 24 * 150 ,
        [
          { "Ghul": 2 }, // prawa góra
          { "Ghul": 2 }, // prawa dół
          { "Mutant_z_macką": 1 }, // dół prawo
          { "Mutant_z_macką": 1 }, // dół środek prawo
          { "Mutant_z_macką": 1 }, // dół środek lewo
          { "Mutant_z_macką": 1 }, // dół lewo
      { "Szczur": 4 }, // lewo dół
      { "Szczur": 4 }, // lewo góra
      { "Mutant_z_pazurem": 1 }, // góra lewo
      { "Mutant_z_pazurem": 1 }, // góra środek lewo
      { "Mutant_z_pazurem": 1 }, // góra środek prawo
      { "Mutant_z_pazurem": 1 }, // góra prawo
      null, // ukryte
        ],
        24 * 145
      );
    
    level.define_wave( 24 * 190 ,
        [
          null, // prawa góra
          null, // prawa dół
          null, // dół prawo
          null, // dół środek prawo
          null, // dół środek lewo
          null, // dół lewo
      null, // lewo dół
      null, // lewo góra
      null, // góra lewo
      null, // góra środek lewo
      null, // góra środek prawo
      null, // góra prawo
      { "Demigor": 1 }, // ukryte
        ],
        24 * 185
      );
    
      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(1300);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 11<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //LEVEL 12>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var level_12 = levels.define_level(12);
  level_12.set_name('level_12_name');
  level_12.set_map_position(50, 100);
  level_12.set_desc('level_12_desc');
  level_12.set_previous(11);

  level_12.set_level_data(
    function level_data(level) {
      level.set_id(12);

      level.set_background_image ('assets/img/levels/stare_miasto.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(370,-20);
      level.define_bot_start_point(552,-20);
      level.define_bot_start_point(695,-20);
      level.define_bot_start_point(820,76);
      level.define_bot_start_point(820,134);
      level.define_bot_start_point(820,308);
    level.define_bot_start_point(820,476);
    level.define_bot_start_point(820,546);
    level.define_bot_start_point(712,620);
    level.define_bot_start_point(574,620);
    level.define_bot_start_point(382,620);
    level.define_bot_start_point(184,620);
    level.define_bot_start_point(22,620);
    level.define_bot_start_point(-20,351);
    level.define_bot_start_point(-20,248);
    level.define_bot_start_point(257,38);
    level.define_bot_start_point(33,116);
    level.define_bot_start_point(500,452);
    level.define_bot_start_point(490,510);
 
      //level.define_bot_start_point_mark(355, 5, 'assets/img/strzalki/arrow_down.png');
      //level.define_bot_start_point_mark(537, 5, 'assets/img/strzalki/arrow_down.png');
      //level.define_bot_start_point_mark(680, 5, 'assets/img/strzalki/arrow_down.png');
    //level.define_bot_start_point_mark(745, 61, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(745, 119, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(745, 293, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(745, 461, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(745, 531, 'assets/img/strzalki/arrow_left.png');
    //level.define_bot_start_point_mark(697, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(559, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(367, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(169, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(7, 545, 'assets/img/strzalki/arrow_up.png');
    //level.define_bot_start_point_mark(5, 437, 'assets/img/strzalki/arrow_right.png');
    //level.define_bot_start_point_mark(5, 495, 'assets/img/strzalki/arrow_right.png');

      level.define_soldier_start_point(127,170);
      level.define_soldier_start_point(165,196);
      level.define_soldier_start_point(124,221);
      level.define_soldier_start_point(84,196);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,-35, 835,635);
    mesh.define_barrier(835,635, 528,635);
    mesh.define_barrier(528,635, 528,442);
    mesh.define_barrier(477,442, 477,484);
    mesh.define_barrier(477,536, 477,635);
    mesh.define_barrier(477,635, -35,635);
    mesh.define_barrier(-35,635, -35,150);
    mesh.define_barrier(-35,150, 50,150);
    mesh.define_barrier(50,100, 50,50);
    mesh.define_barrier(50,50, 200,50);
    mesh.define_barrier(300,50, 300,-35);
    mesh.define_barrier(300,-35, 835,-35);
    
    mesh.define_barrier(476,54, 526,54);
    mesh.define_barrier(526,54, 526,154);
    mesh.define_barrier(526,154, 476,154);
    mesh.define_barrier(476,154, 476,54);
    
    mesh.define_barrier(328,188, 376,188);
    mesh.define_barrier(376,188, 376,438);
    mesh.define_barrier(376,438, 328,438);
    mesh.define_barrier(328,438, 328,188);
    
    mesh.define_barrier(124,407, 195,477);
    mesh.define_barrier(195,477, 124,547);
    mesh.define_barrier(124,547, 56,477);
    mesh.define_barrier(56,477, 124,407);
    
    mesh.define_wall(477,442, 528,600);
    mesh.define_wall(477,600, 528,442);
    mesh.define_wall(50,150, 0,50);
    mesh.define_wall(300,50, 250,0);
    mesh.define_wall(476,54, 526,154);
    mesh.define_wall(476,154, 526,54);
    mesh.define_wall(328,188, 376,438);
    mesh.define_wall(328,438, 376,188);
    mesh.define_wall(124,407, 124,547);
    mesh.define_wall(195,477, 56,477);
    
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 10 ,
        [
          { "Szczur": 6 }, // góra lewa
          { "Szczur": 6 }, // góra środek
          null, // góra prawa
          null, // prawa góra góra
          null, // prawa góra dół
          null, // prawa środek
      null, // prawa dół góra
      null, // prawa dół dół
      null, // dół prawa prawa
      null, // dół prawa lewa
      null, // dół środek
      null, // dół lewa prawo
      null, // dół lewo lewo
      null, // lewo dół
      null, // lewo góra
      null, // ukryte góra
      null, // ukryte lewo
      null, // ukryte prawo
      null, // ukryte dół
        ],
        24 * 5
      );
    
   // lewe (2)
    level.define_dropping_point( 153, 78,
        20 * 24,
        { ammo: 0.05, health: 0.05, viols: 0.1, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.6], viols_add: [30,180] }
      );
    
    level.define_dropping_point( 81, 551,
        20 * 24,
        { ammo: 0.05, health: 0.05, viols: 0.1, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.6], viols_add: [30,180] }
      );
    
    // środkowe (2)
    level.define_dropping_point( 376, 95,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [4,64], ammo_add: [0.1, 0.75], viols_add: [50,200] }
      );
    
    level.define_dropping_point( 367, 528,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [4,64], ammo_add: [0.1, 0.75], viols_add: [50,200] }
      );
    
    // prawe (6)
    level.define_dropping_point( 590, 95,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
    level.define_dropping_point( 692, 95,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
    level.define_dropping_point( 734, 255,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
   
   level.define_dropping_point( 734, 353,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
    level.define_dropping_point( 599, 517,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    level.define_dropping_point( 703, 517,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(0);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //LEVEL 12<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>
  //REPLAY LEVEL 12>>>>>>>>>>>>
  //>>>>>>>>>>>>>>>>>>>
  
  var replay_level_12 = levels.define_replay_level(12);
  replay_level_12.set_name('replay_level_12_name');
  replay_level_12.set_map_position(50, 100);
  replay_level_12.set_desc('replay_level_12_desc');
  replay_level_12.set_previous(12);

  replay_level_12.set_level_data(
    function level_data(level) {
      level.set_id(12);

      level.set_background_image ('assets/img/levels/stare_miasto.png');
      // level.set_foreground_image ('assets/img/levels/level_0_foreground.png');
    
      level.define_bot_start_point(370,-20);
      level.define_bot_start_point(552,-20);
      level.define_bot_start_point(695,-20);
      level.define_bot_start_point(820,76);
      level.define_bot_start_point(820,134);
      level.define_bot_start_point(820,308);
    level.define_bot_start_point(820,476);
    level.define_bot_start_point(820,546);
    level.define_bot_start_point(712,620);
    level.define_bot_start_point(574,620);
    level.define_bot_start_point(382,620);
    level.define_bot_start_point(184,620);
    level.define_bot_start_point(22,620);
    level.define_bot_start_point(-20,351);
    level.define_bot_start_point(-20,248);
    level.define_bot_start_point(257,38);
    level.define_bot_start_point(33,116);
    level.define_bot_start_point(500,452);
    level.define_bot_start_point(490,510);
 
      level.define_bot_start_point_mark(355, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(537, 5, 'assets/img/strzalki/arrow_down.png');
      level.define_bot_start_point_mark(680, 5, 'assets/img/strzalki/arrow_down.png');
    level.define_bot_start_point_mark(745, 61, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 119, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 293, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 461, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(745, 531, 'assets/img/strzalki/arrow_left.png');
    level.define_bot_start_point_mark(697, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(559, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(367, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(169, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(7, 545, 'assets/img/strzalki/arrow_up.png');
    level.define_bot_start_point_mark(5, 437, 'assets/img/strzalki/arrow_right.png');
    level.define_bot_start_point_mark(5, 495, 'assets/img/strzalki/arrow_right.png');

      level.define_soldier_start_point(127,170);
      level.define_soldier_start_point(165,196);
      level.define_soldier_start_point(124,221);
      level.define_soldier_start_point(84,196);

      level.set_max_creatures(20);
      // level.set_max_creatures(1);

      var mesh = level.mesh;

    mesh.define_barrier(835,-35, 835,635);
    mesh.define_barrier(835,635, 528,635);
    mesh.define_barrier(528,635, 528,442);
    mesh.define_barrier(477,442, 477,484);
    mesh.define_barrier(477,536, 477,635);
    mesh.define_barrier(477,635, -35,635);
    mesh.define_barrier(-35,635, -35,150);
    mesh.define_barrier(-35,150, 50,150);
    mesh.define_barrier(50,100, 50,50);
    mesh.define_barrier(50,50, 200,50);
    mesh.define_barrier(300,50, 300,-35);
    mesh.define_barrier(300,-35, 835,-35);
    
    mesh.define_barrier(476,54, 526,54);
    mesh.define_barrier(526,54, 526,154);
    mesh.define_barrier(526,154, 476,154);
    mesh.define_barrier(476,154, 476,54);
    
    mesh.define_barrier(328,188, 376,188);
    mesh.define_barrier(376,188, 376,438);
    mesh.define_barrier(376,438, 328,438);
    mesh.define_barrier(328,438, 328,188);
    
    mesh.define_barrier(124,407, 195,477);
    mesh.define_barrier(195,477, 124,547);
    mesh.define_barrier(124,547, 56,477);
    mesh.define_barrier(56,477, 124,407);
    
    mesh.define_wall(477,442, 528,600);
    mesh.define_wall(477,600, 528,442);
    mesh.define_wall(50,150, 0,50);
    mesh.define_wall(300,50, 250,0);
    mesh.define_wall(476,54, 526,154);
    mesh.define_wall(476,154, 526,54);
    mesh.define_wall(328,188, 376,438);
    mesh.define_wall(328,438, 376,188);
    mesh.define_wall(124,407, 124,547);
    mesh.define_wall(195,477, 56,477);
    
    
      // Dialogi w grze, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczac w ogóle
      //level.define_speeches( [    
      //]);
       // Dialogi po wygraniu poziomu, po prostu tablica do kolejnych obrazków z rozmowami
      // Jeśli w poziomie nie ma dialogów nie umieszczać w ogóle
      //level.define_end_speeches( [
      //]);
    
    //level.define_tips( [
        //]);
    
    //level.define_end_tips( [
         //]);

      // wave'y
      // dwa wave'y nie mogą zdarzyć się w tej samej klatce
      level.define_wave( 24 * 10 ,
        [
          { "Szczur": 6 }, // góra lewa
          { "Szczur": 6 }, // góra środek
          null, // góra prawa
          null, // prawa góra góra
          null, // prawa góra dół
          null, // prawa środek
      null, // prawa dół góra
      null, // prawa dół dół
      null, // dół prawa prawa
      null, // dół prawa lewa
      null, // dół środek
      null, // dół lewa prawo
      null, // dół lewo lewo
      null, // lewo dół
      null, // lewo góra
      null, // ukryte góra
      null, // ukryte lewo
      null, // ukryte prawo
      null, // ukryte dół
        ],
        24 * 5
      );
    
   // lewe (2)
    level.define_dropping_point( 153, 78,
        20 * 24,
        { ammo: 0.05, health: 0.05, viols: 0.1, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.6], viols_add: [30,180] }
      );
    
    level.define_dropping_point( 81, 551,
        20 * 24,
        { ammo: 0.05, health: 0.05, viols: 0.1, ttl: 15 * 24, health_add: [1,64], ammo_add: [0.1, 0.6], viols_add: [30,180] }
      );
    
    // środkowe (2)
    level.define_dropping_point( 376, 95,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [4,64], ammo_add: [0.1, 0.75], viols_add: [50,200] }
      );
    
    level.define_dropping_point( 367, 528,
        20 * 24,
        { ammo: 0.1, health: 0.2, viols: 0.25, ttl: 15 * 24, health_add: [4,64], ammo_add: [0.1, 0.75], viols_add: [50,200] }
      );
    
    // prawe (6)
    level.define_dropping_point( 590, 95,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
    level.define_dropping_point( 692, 95,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
    level.define_dropping_point( 734, 255,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
   
   level.define_dropping_point( 734, 353,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
    level.define_dropping_point( 599, 517,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    level.define_dropping_point( 703, 517,
        20 * 24,
        { ammo: 0.2, health: 0.2, viols: 0.2, ttl: 15 * 24, health_add: [8,64], ammo_add: [0.25, 0.8], viols_add: [100,200] }
      );
    
      level.define_prizes( {
        "": 0,
        "": 0,
      });

      level.define_violki_prize(0);
    }
  );
  
  //<<<<<<<<<<<<<<<<<<<<<<<<
  //REPLAY LEVEL 12<<<<<<<<<<
  //<<<<<<<<<<<<<<<<<<<<<<<<

}

// //////////////////////////////
// definicje konta na starcie gry
// //////////////////////////////
Account.prototype.on_start = function() {
  debug.debug("Account on_start");

  // EDYTOWALNE
  // w nawiasie podajemy nazwe postaci ktora bedzie na starcie gry
  var soldier = this.soldiers_factory.get('Pogromca', this.level);

  // NIEEDYTOWALNE
  this.soldiers.push(soldier);

  // EDYTOWALNE
  // (opcjonalnie) jaka bron ma miec postac zalozona na starcie gry
  var weapon = this.items_factory.get_weapon("Dzida");
  soldier.set_weapon(weapon);

  // EDYTOWALNE
  // (opcjonalnie) jaka zbroje ma miec postac zalozona na starcie gry
  //var armour = this.items_factory.get_armour("Skórzana kurtka");
  //soldier.set_armour(armour);

  // EDYTOWALNE
  // OPCJONALNE
  // jakie itemy ma miec postac w plecaku na starcie gry
  //soldier.item_0 = this.items_factory.get_ammo("Postapokaliptyczny zestaw opatrunkowy");
  //soldier.item_1 = this.items_factory.get_ammo("Postapokaliptyczny zestaw opatrunkowy");
  //soldier.item_2 = this.items_factory.get_armour("Skórzana kurtka");
  //soldier.item_3 = this.items_factory.get_item("Postapokaliptyczny zestaw opatrunkowy");

}
