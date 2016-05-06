// Plik z konfiguracja ogolna gry - wyglady okien, itp.
global_config = {
  // podstawowa czcionka
  // wiecej informacji
  // https://developer.mozilla.org/en-US/docs/Drawing_text_using_a_canvas
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font?redirectlocale=en-US&redirectslug=CSS%2Ffont
  base_font: '10px sans-serif',

  // glowny moznik glosnosci dzwiekow
  master_sound_volume: 1.00,
  master_theme_volume: 1.00,
  // sciezka do muzyki
  game_theme_src: 'assets/audio/music/music3.ogg',
  // glosnosc muzyki
  game_theme_volume: 0.5,

  // jednopixelowy przezroczysty obrazek - czasem rysowany aby wylaczyc inne obrazki
  dot_src: 'assets/img/dot.png',

  // konfiguracja interfejsu mapy gry
  map: {
    click_radius: 20, // radius postaci na mapie na "klikniecie"

    double_click_interval: 300, // ile ms miedzy kliknieciami jest traktowane jako podwojne klikniecie
    double_click_delta: 10, // o ile pikseli kolejne klikniecia moga sie roznic aby wciaz byly traktowane jako podwojne klikniecie

    box_color: "#0f0", // kolor boxu selectujacego
    box_width: 2, // grubosc boxu selectujacego

    click_timeout: 100, // w milisekundach, po jakim czasie traktujemy klikniecie jako klikniecie a nie zaznaczenie boxem
    box_delta: 20, // o ile pikseli musimy przesunac w timeoutcie aby traktowac to jako zaznaczenie boxem

    bodies_limit: 20 // limit cial na planszy
  },

  // konfiguracja trybu pauzy
  pause: {
    mask_src: 'assets/img/pause_mask.png', // maska nakladana na caly obszar gry
    // znacznik ataku
    attack_mark_src: 'assets/img/attack_mark.png',
    attack_mark_width: 20,
    attack_mark_height: 20,
    attack_color: '#f00',
    // znacznik ruchu
    move_mark_src: 'assets/img/move_mark.png',
    move_mark_width: 20,
    move_mark_height: 20,
    move_color: '#0f0',
  },

  // okno preloadera
  preloader: {
    background: 'assets/img/preloader/background.png', // tło całego loadera
    bar_background: 'assets/img/preloader/bar_background.png', // tło paska postępu
    bar_foreground: 'assets/img/preloader/bar_foreground.png', // pasek postępu
    bar_width: 739, // szerokos paska postepu
    bar_height: 132, // wysokosc paska postepu
    bar_x: 29, // lewy gorny rog paska postepu
    bar_y: 222, // lewy gorny rog paska postepu
  },

  // glowny panel gry
  menu_panel: {
    background_src: 'assets/img/panele/panel_glowny2.png', // tło calego panelu
    x: 0, // lewy gorny rog
    y: 0, // lewy gorny rog
    width: 800, // szerokosc okienka
    height: 600, // wysokosc okienka

    // numerek wersji
    version_x: 730,
    version_y: 580,

    // Karty postaci
    soldiers_x: 0, // gdzie zaczynaja sie karty postaci wzgledem okienka
    soldiers_y: 0, // gdzie zaczynaja sie karty postaci wzgledem okienka
    soldiers_width: 197, // szerokość karty postaci
    soldiers_height: 200, // wysokość karty postaci
    soldiers_info_x: 115, // pozycja opisu
    soldiers_info_y: 10, // pozycja opisu
    soldiers_info_font: '13.5px sans-serif', // patrz konfiguracja base_font
    soldiers_info_interline: 15, // interlinia opisu
    soldiers_info_color: '#fff', // kolor tekstu
    soldiers_image_x: 9, // lewy górny rog obrazka w karcie postaci
    soldiers_image_width: 100,
    soldiers_image_height: 100,
    soldiers_image_y: 10, // lewy górny rog obrazka w karcie postaci
    soldiers_weapon_x: 9, // pozycja broni
    soldiers_weapon_y: 109, // pozycja broni
    soldiers_weapon_width: 48, // szerokosc broni
    soldiers_weapon_height: 48, // wysokosc broni
    soldiers_armour_x: 58, // pozycja zbroi
    soldiers_armour_y: 109, // pozycja zbroi
    soldiers_armour_width: 48, // szerokosc zbroi
    soldiers_armour_height: 48, // wysokosc zbroi

    // przycisk helpera
    helper_button_src: 'assets/img/znak_zapytania.png', // do potwierdzenia
    helper_button_x: 768, // lewy gorny róg wzgledem panelu
    helper_button_y: 563, // lewy gorny róg wzgledem panelu
    helper_button_width: 30, // szerokość przycisku
    helper_button_height: 30, // wysokość przycisku
    // tlo ekranu podpowiedzi
    helper_map_background_src: 'assets/img/story/tips/tipmapa_LANG.jpg',
    helper_shop_background_src: 'assets/img/story/tips/tipsklep_LANG.jpg',
    helper_options_background_src: 'assets/img/story/tips/tipopcje_LANG.jpg',

    // Zakladka mapy
    map_button_active_src: 'assets/img/menu/mapon_LANG.png', // przycisk zakladki mapy - wcisniety
    map_button_inactive_src: 'assets/img/menu/mapoff_LANG.png',  // przycisk zakladki mapy - zwolniony
    map_button_x: 3, // pozycja przycisku wzgldem *calego okienka*
    map_button_y: 555, // pozycja przycisku wzgledem *calego okienka*
    map_button_width: 100, // szerokosc przycisku
    map_button_height: 35, // wysokosc przycisku
    map_background_src: 'assets/img/panele/poland.png', // tło zakładki mapy

    map_x: 16, // pozycja zakladki mapy wzgledem okienka
    map_y: 210, // pozycja zakladki mapy wzgledem okienka
    map_width: 800, // szerokosc zakladki
    map_height: 350, // wysokosc zakladki
    map_start_button_active_src: 'assets/img/starton.png', // przycisk startujacy poziom - poziom dostepny
    map_start_button_inactive_src: 'assets/img/startoff.png', // przycisk startujacy poziom - poziom niedostepny
    map_start_button_x: 200, // pozycja przycisku startujacego - wzgledem zakladki
    map_start_button_y: 12, // pozycja przycisku startujacaego - wzgledem zakladki
    map_start_button_width: 85, // szerokosc przycisku startuajcego
    map_start_button_height: 32, // wysokosz przycisku startujacego

    map_info_x: 20, // pozycja opisu poziomu wzgledem zakładki
    map_info_y: 90, // pozycja opisu poziomu wzgledem zakładki
    map_info_font: '15px sans-serif', // patrz konfiguracja base_font
    map_info_interline: 15, // interlinia opisu
    map_info_color: '#000000', // kolor tekstu

    map_name_x: 20, // pozycja z nazwa poziomu wzgledem zakladki, pierwotnie 150
    map_name_y: 80, // pozycja z nazwa poziomu wzgledem zakladki, pierwotnie 75
    map_name_font: '20px sans-serif', // patrz konfiguracja base_font
    map_name_color: '#000000', // kolor tekstu

    map_levels_x: 400, // pozycja wzgledem ktorej wyswietlamy liste poziomow
    map_levels_y: 0, // pozycja wzgledem ktorej wysweitlamy liste poziomow
    map_levels_button_width: 35, // szerokosc przysicku poziomu
    map_levels_button_height: 35, // wysokosc przycisku poziomu
    map_levels_button_active_src: 'assets/img/zielona.png', // wyglada przycisku wykonanego juz poziomu
    map_levels_button_inactive_src: 'assets/img/fioletowa.png', // wyglad przycisku niewykonanego jeszcze poziomu

    // Zakladka sklepy
    shop_button_active_src: 'assets/img/menu/shopon_LANG.png', // przycisk zakladki sklepu wciśnięty
    shop_button_inactive_src: 'assets/img/menu/shopoff_LANG.png', // przycisk zakladki sklepu zwolniony
    shop_button_x: 100, // pozycja przycisku wzgledem *calego okienka*
    shop_button_y: 555, // pozycja przycisku wzgledem *calego okienka*
    shop_button_width: 100, // szerokosc przycisku

    shop_button_height: 35, // wysokość przycisku
    shop_background_src: 'assets/img/panele/panelsklep.png', // tło zakladki sklepu
    shop_x: 16, // pozcycja zakładki sklepu wzgledem okienka
    shop_y: 210, // pozycja zkładki sklepu wzgledem okienka
    shop_width: 800, // szerokosc zakladki
    shop_height: 350, // wysokosc zakladki

    shop_white_button_active_src: 'assets/img/filtr/bialaon.png',
    shop_white_button_inactive_src: 'assets/img/filtr/biala.png',
    shop_white_button_x: 75,
    shop_white_button_y: 26,
    shop_white_button_width: 50,
    shop_white_button_height: 50,
    shop_ranged_button_active_src: 'assets/img/filtr/gunon.png',
    shop_ranged_button_inactive_src: 'assets/img/filtr/gun.png',
    shop_ranged_button_x: 125,
    shop_ranged_button_y: 26,
    shop_ranged_button_width: 50,
    shop_ranged_button_height: 50,
    shop_armour_button_active_src: 'assets/img/filtr/armoron.png',
    shop_armour_button_inactive_src: 'assets/img/filtr/armor.png',
    shop_armour_button_x: 175,
    shop_armour_button_y: 26,
    shop_armour_button_width: 50,
    shop_armour_button_height: 50,
    shop_aids_button_active_src: 'assets/img/filtr/drugson.png',
    shop_aids_button_inactive_src: 'assets/img/filtr/drugs.png',
    shop_aids_button_x: 225,
    shop_aids_button_y: 26,
    shop_aids_button_width: 50,
    shop_aids_button_height: 50,

    shop_slots_x: 5, // lewy górny róg slotów skrytki względem zakładki
    shop_slots_y: 78, // lewy górny róg slotów skrytki względem zakładki
    shop_slots_cols: 7, // ile kolumn slotów ma inwentory
    shop_slots_rows: 5, // ile rzedow slotów ma inwentory
    shop_slots_slot_width: 49, // szerokosc jednego slotu
    shop_slots_slot_height: 49, // wysokosc jednego slotu

    shop_info_x: 370, // pozycja opisu przedmiotu wzgledem zakladki
    shop_info_y: 70, // pozycja opisu przedmiotu wzgledem zakladki
    shop_info_font: '15px sans-serif', // patrz konfiguracja base_font
    shop_info_color: '#000000', // color tekstu
    shop_info_interline: 20, // interlinia opisu

    shop_page_button_x: 675,
    shop_page_button_y: 280,
    shop_page_button_front_src: 'assets/img/strzala.png',
    shop_page_button_back_src: 'assets/img/strzala.png',
    shop_page_button_width: 80,
    shop_page_button_height: 60,

    shop_violki_x: 675, // pozycja licznika violek wzgledem zakladki
    shop_violki_y: 31, // pozycja licznika violek wzgledem zakladki
    shop_violki_font: '15px sans-serif', // patrz konfiguracja base_font

    shop_buy_button_active_src: 'assets/img/buttons/buyon_LANG.png', // obrazek z przyciskiem kupna
    shop_buy_button_inactive_src: 'assets/img/buttons/buyoff_LANG.png', // obrazek z przyciskiem kupna
    shop_buy_button_x: 542, // pozycja przycisku wzgledem zakladki
    shop_buy_button_y: 12, // pozycja przycisku wzgledem zakladki
    shop_buy_button_width: 50, // szerokosc przycisku
    shop_buy_button_height: 30, // wysokosc przycisku

    // Zakładka options
    options_button_active_src: 'assets/img/menu/optionson_LANG.png', // przycisk zakładki skrytki wciśnięty
    options_button_inactive_src: 'assets/img/menu/optionsoff_LANG.png', // przycisk zakładki skrytki zwolniony
    options_button_x: 200, // pozycja przycisku wzgldem *całego okienka*
    options_button_y: 555, // pozycja przycisku wzgledem *całego okienka*
    options_button_width: 100, // szerokość przycisku
    options_button_height: 35, // wysokość przycisku

    options_background_src: 'assets/img/panele/opcjepaper.png', // tło zakładki sklepu
    options_x: 45, // pozycja zakładki skrytki wzgledem okienka
    options_y: 210, // pozycja zakładki skrytki wzgledem okienka
    options_width: 800, // szerokość zakladki
    options_height: 350, // wysokość zakladki

    options_en_button_active_src: 'assets/img/jezyk/uk_on.png', // język wybrany
    options_en_button_inactive_src: 'assets/img/jezyk/uk_off.png', // język nie wybrany
    options_en_button_x: 600,
    options_en_button_y: 50,
    options_en_button_width: 63,
    options_en_button_height: 40,

    options_pl_button_active_src: 'assets/img/jezyk/pl_on.png', // język wybrany
    options_pl_button_inactive_src: 'assets/img/jezyk/pl_off.png', // język nie wybrany
    options_pl_button_x: 600,
    options_pl_button_y: 100,
    options_pl_button_width: 63,
    options_pl_button_height: 40,

    // przycisk muzyki
    options_music_button_active_src: 'assets/img/music_on.png',
    options_music_button_inactive_src: 'assets/img/music_off.png',
    options_music_button_x: 500,
    options_music_button_y: 100,
    options_music_button_width: 63,
    options_music_button_height: 40,

    // przycisk dzwieku
    options_sound_button_active_src: 'assets/img/sound_on.png',
    options_sound_button_inactive_src: 'assets/img/sound_off.png',
    options_sound_button_x: 500,
    options_sound_button_y: 50,
    options_sound_button_width: 63,
    options_sound_button_height: 40,

    options_email_field_src: 'assets/img/email_field.png',
    options_email_field_x: 10,
    options_email_field_y: 10,
    options_email_field_width: 200,
    options_email_field_height: 50,

    options_password_field_src: 'assets/img/password_field.png',
    options_password_field_x: 10,
    options_password_field_y: 10,
    options_password_field_width: 200,
    options_password_field_height: 50,


    credits_button_active_src: 'assets/img/menu/creditsoff_LANG.png', // przycisk zakładki skrytki wciśnięty
    credits_button_x: 300, // pozycja przycisku wzgldem *całego okienka*
    credits_button_y: 555, // pozycja przycisku wzgledem *całego okienka*
    credits_button_width: 100, // szerokość przycisku
    credits_button_height: 35, // wysokość przycisku
    credits_button_link: 'menu_credits',

    support_button_active_src: 'assets/img/menu/support_LANG.png', // przycisk zakładki skrytki wciśnięty
    support_button_x: 838, // pozycja przycisku wzgldem *całego okienka*
    support_button_y: 200, // pozycja przycisku wzgledem *całego okienka*
    support_button_width: 100, // szerokość przycisku
    support_button_height: 35, // wysokość przycisku
    support_button_link: 'menu_support',
  },

  // boczny panel wyswietlany na mapie
  side_panel: {
    background_src: 'assets/img/panele/panelboczny.png', // tło panelu
    x: 800, // lewy gorny rog
    y: 0, // lewy gorny rog
    width: 200, // szerokosc okienka
    height: 600, // wysokosc okienka

    // czesc na samej gorze - informacje o fali
    wave_x: 6, // lewy gorny rog wzgledem panelu
    wave_y: 10, // lewy gorny rog wzgledem panelu
    wave_font: '15px sans-serif', // patrz konfiguracja base_font
    wave_color: '#fff', // kolor tekstu

    time_x: 25, // lewy gorny rog wzgledem panelu
    time_y: 48, // lewy gorny rog wzgledem panelu
    time_font: '40px sans-serif', // patrz konfiguracja base_font
    time_green_color: '#0f0', // kolor tekstu
    time_orange_color: '#ffd000', // kolor tekstu
    time_red_color: '#f00', // kolor tekstu

    // przycisk nowej fali
    next_button_active_src: 'assets/img/bmenu/next_inactive.png', // gra zapausowana
    next_button_inactive_src: 'assets/img/bmenu/next_active.png', // gra działa
    next_button_x: 830, // lewy gorny róg wzgledem panelu // 130
    next_button_y: 894, // lewy gorny róg wzgledem panelu // 44
    next_button_width: 60, // szerokość przycisku
    next_button_height: 20, // wysokość przycisku

    // przycisk pauzy
    pause_button_active_src: 'assets/img/bmenu/pauseon.png', // gra zapausowana
    pause_button_inactive_src: 'assets/img/bmenu/pauseoff.png', // gra działa
    pause_button_x: 134, // lewy gorny róg wzgledem panelu
    pause_button_y: 10, // lewy gorny róg wzgledem panelu. Było 12
    pause_button_width: 60, // szerokość przycisku
    pause_button_height: 20, // wysokość przycisku

    // przycisk wyjścia z gry
    exit_button_inactive_src: 'assets/img/bmenu/exit_active.png', // do pierwszego klikniecia
    exit_button_active_src: 'assets/img/bmenu/exit_inactive.png', // do potwierdzenia
    exit_button_x: 134, // lewy gorny róg wzgledem panelu
    exit_button_y: 40, // lewy gorny róg wzgledem panelu // 74
    exit_button_width: 60, // szerokość przycisku
    exit_button_height: 20, // wysokość przycisku

    // przycisk helpera
    helper_button_src: 'assets/img/znak_zapytania.png', // do potwierdzenia
    helper_button_x: 169, // lewy gorny róg wzgledem panelu
    helper_button_y: 72, // lewy gorny róg wzgledem panelu
    helper_button_width: 30, // szerokość przycisku
    helper_button_height: 30, // wysokość przycisku
    // tlo ekranu podpowiedzi
    helper_background_src: 'assets/img/story/tips/tipogolny_LANG.jpg',

    // informacje o aktywnej postaci
    info_x: 2, // lewy górny róg wzgledem panelu
    info_y: 105, // lewy górny róg wzgledem panelu

    damage_bar_src: 'assets/img/damagebar_roboczy.png',
    damage_bar_sprites: 102,
    damage_bar_width: 98,
    damage_bar_height: 98,

    image_dead_src: 'assets/img/creatures/kokon100.png', // obrazek gdy postac martwa

    boost_src: 'assets/img/+.png', // obrazek plusika oznaczajcego boosta

    // wspolrzedne pierwszej postaci
    image_0_x: 2,
    image_0_y: 124,
    image_0_width: 98,
    image_0_height: 98,
    boost_0_x: 3,
    boost_0_y: 127,
    weapon_0_x: 100,
    weapon_0_y: 126,
    weapon_0_width: 48,
    weapon_0_height: 48,
    armour_0_x: 100,
    armour_0_y: 176,
    armour_0_width: 48,
    armour_0_height: 48,
    first_skill_0_x: 151,
    first_skill_0_y: 125,
    first_skill_0_width: 48,
    first_skill_0_height: 48,
    second_skill_0_x: 151,
    second_skill_0_y: 175,
    second_skill_0_width: 48,
    second_skill_0_height: 48,

    // wspolrzedne drugiej postaci
    image_1_x: 2,
    image_1_y: 241,
    image_1_width: 98,
    image_1_height: 98,
    boost_1_x: 3,
    boost_1_y: 245,
    weapon_1_x: 100,
    weapon_1_y: 243,
    weapon_1_width: 48,
    weapon_1_height: 48,
    armour_1_x: 100,
    armour_1_y: 293,
    armour_1_width: 48,
    armour_1_height: 48,
    first_skill_1_x: 151,
    first_skill_1_y: 242,
    first_skill_1_width: 48,
    first_skill_1_height: 48,
    second_skill_1_x: 151,
    second_skill_1_y: 292,
    second_skill_1_width: 48,
    second_skill_1_height: 48,

    // wspolrzedne trzeciej postaci
    image_2_x: 2,
    image_2_y: 359,
    image_2_width: 98,
    image_2_height: 98,
    boost_2_x: 3,
    boost_2_y: 362,
    weapon_2_x: 100,
    weapon_2_y: 360,
    weapon_2_width: 48,
    weapon_2_height: 48,
    armour_2_x: 100,
    armour_2_y: 410,
    armour_2_width: 48,
    armour_2_height: 48,
    first_skill_2_x: 151,
    first_skill_2_y: 360,
    first_skill_2_width: 48,
    first_skill_2_height: 48,
    second_skill_2_x: 151,
    second_skill_2_y: 410,
    second_skill_2_width: 48,
    second_skill_2_height: 48,

    // wspolrzedne czwartej postaci
    image_3_x: 2,
    image_3_y: 477,
    image_3_width: 98,
    image_3_height: 98,
    boost_3_x: 3,
    boost_3_y: 480,
    weapon_3_x: 100,
    weapon_3_y: 478,
    weapon_3_width: 48,
    weapon_3_height: 48,
    armour_3_x: 100,
    armour_3_y: 528,
    armour_3_width: 48,
    armour_3_height: 48,
	first_skill_3_x: 151,
    first_skill_3_y: 360,
    first_skill_3_width: 48,
    first_skill_3_height: 48,
    second_skill_3_x: 151,
    second_skill_3_y: 410,
    second_skill_3_width: 48,
    second_skill_3_height: 48,
  },

  // okienko konca gry
  end_panel: {
    // po zakonczeniu ktorego levelu wyswietlacz
    display_after_level: 6,

    background_src: 'assets/img/koncowy.png',
    x: 0,
    y: 0,
    width: 800,
    height: 600,

    // czesc opisu konca
    // reszta w pliku jezykowym
    text_area_x: 150,
    text_area_y: 100,
    text_area_font: '15px sans-serif', // patrz konfiguracja base_font
    text_area_interline: 15, // interlinia opisu
    text_area_color: '#ffffff', // kolor tekstu

    // czesc linkow - tekst wprowadzajacy
    // reszta w pliku jezykowym
    link_area_x: 200,
    link_area_y: 320,
    link_area_font: '15px sans-serif', // patrz konfiguracja base_font
    link_area_interline: 15, // interlinia opisu
    link_area_color: '#ffffff', // kolor tekstu

    // kolejne linki
    // reszta w pliku jezykowym
    link_0_x: 200,
    link_0_y: 340,
    link_0_width: 100,
    link_0_height: 10,
    link_0_font: '15px sans-serif', // patrz konfiguracja base_font
    link_0_color: '#000000', // kolor tekstu

    link_1_x: 200,
    link_1_y: 360,
    link_1_width: 200,
    link_1_height: 10,
    link_1_font: '15px sans-serif', // patrz konfiguracja base_font
    link_1_color: '#000000', // kolor tekstu

    link_2_x: 200,
    link_2_y: 380,
    link_2_width: 100,
    link_2_height: 10,
    link_2_font: '15px sans-serif', // patrz konfiguracja base_font
    link_2_color: '#000000', // kolor tekstu

    link_3_x: 200,
    link_3_y: 400,
    link_3_width: 100,
    link_3_height: 10,
    link_3_font: '15px sans-serif', // patrz konfiguracja base_font
    link_3_color: '#000000', // kolor tekstu

  },

  // Okienko wyswietlane po wygranej bitwie
  success_panel: {
    background_src: 'assets/img/victory.png', // tlo panelu
    x: 0, // lewy gorny rog okienka panelu wzgledem calego ekranu gry
    y: 50, // lewy gorny rog okienta panelu wzgledem calego ekranu gry
    width: 721, // szerokosc okienka panelu
    height: 500, // wysokosc okienka panelu

    button_x: 348, // lewy gorny rog przycisku wzgledem okienka
    button_y: 425, // lewy gorny rog przycisku wzgledem okienka
    button_width: 100, // szerokosc przycisku
    button_height: 37, // wysokosc przycisku

    textarea_x: 175, // lewy gorny rog tekstu wzgledem okienka
    textarea_y: 150, // lewy gorny rog tekstu wzgledem okienka
    textarea_font: '15px sans-serif', // patrz konfiguracja base_font
    textarea_color: '#000000', // color tekstu
    textarea_interline: 20, // interlinia opisu
  },

  // Okienko wyswietlane po przegranej bitwie
  failure_panel: {
    background_src: 'assets/img/defeat.png', // tlo panelu
    x: 50, // lewy gorny rog okienka
    y: 100, // lewy gorny rog okienka
    width: 721, // szerokosc okienka panelu
    height: 327, // wysokosc okienka panelu

    button_x: 307, // lewy gorny rog przycisku wzgledem okienka
    button_y: 267, // lewy gorny rog przycisku wzgledem okienka
    button_width: 100, // szerokosc przycisku
    button_height: 37, // wysokosc przycisku

    textarea_x: 50, // lewy gorny rog tekstu wzgledem okienka
    textarea_y: 113, // lewy gorny rog tekstu wzgledem okienka
    textarea_font: '15px sans-serif', // patrz konfiguracja base_font
    textarea_color: '#000000', // color tekstu
    textarea_interline: 20, // interlinia opisu
  },

  // Okienko dialogu wprowadzajacego
  speech_panel: {
    x: 0, // lewy gorny rog okna
    y: 0, // lewy gorny rog okna
    width: 800, // szerokosc okienka
    height: 600, // wysokosc okienka

    next_button_x: 570, // lewy gorny rog przycisku wzgledem okienka
    next_button_y: 540, // lewy gorny rog przycisku wzgledem okienka
    next_button_width: 60, // szerokosc przycisku
    next_button_height: 36, // wysokosc przycisku

    skip_button_x: 645, // lewy gorny rog przycisku wzgledem okienka
    skip_button_y: 540, // lewy gorny rog przycisku wzgledem okienka
    skip_button_width: 60, // szerokosc przycisku
    skip_button_height: 36, // wysokosc przycisku

    textarea_x: 83, // lewy gorny rog tekstu wzgledem okienka
    textarea_y: 430, // lewy gorny rog tekstu wzgledem okienka
    textarea_font: '18px sans-serif', // patrz konfiguracja base_font
    textarea_color: '#fff', // color tekstu
    textarea_interline: 20, // interlinia opisu
  },

  // Okienko tipsow tutorialowych
  tip_panel: {
    x: 0, // lewy gorny rog okna
    y: 0, // lewy gorny rog okna
    width: 800, // szerokosc okienka
    height: 600, // wysokosc okienka

    next_button_x: 0, // lewy gorny rog przycisku wzgledem okienka
    next_button_y: 0, // lwy gorny rog przycisku wzgledem okienka
    next_button_width: 800, // szerokosc przycisku
    next_button_height: 600, // wysokosc przycisku

    skip_button_x: 640, // lewy gorny rog przycisku wzgledem okienka
    skip_button_y: 521, // lewy gorny rog przycisku wzgledem okienka
    skip_button_width: 60, // szerokosc przycisku
    skip_button_height: 20, // wysokosc przycisku
  },

  // Jak wyswietalny jest przedmiot
  items: {
    // condition itemu
    condition_src: 'assets/img/conditionbar.png', // plik z grafika conditiona bara
    condition_sprites: 10, // ile klatek "animacji" ma condition bar
    condition_ofset_x: 46, // przesuniecie wzgledem lewego gornego rogu itemu
    condition_ofset_y: 24, // przesuniecie wzgledem lewego gornego rogu itemu
    condition_width: 5, // szerokosc jednego bara
    condition_height: 48, // wysokosc jednego bara

    // quantity itemu
    quantity_ofset_x: 2, // przesuniecie wzgledem lewego gornego rogu itemu
    quantity_ofset_y: 10, // przesuniecie wzgledem lewego gornego rogu itemu
  },

  // Jak prezentujemy kreatury
  creatures: {
    // pasek zycia
    health_src: 'assets/img/healthbar.png', // plik z grafika health bara
    health_sprites: 10, // ile klatek "animacja" ma health bar
    health_width: 20, // szerokosc jednego bara
    health_height: 3, // wysokosc jednego bara
    health_ofset_x: 0, // przesuniecie wzgledem *srodka* postaci
    health_ofset_y: -15, // przesuniecie wzgledem *srodka* postaci
    health_draw: false, // globalny przelacznik czy rysowac healthbara

    // znacznik aktywnej postaci
    selected_src: 'assets/img/zaznaczenie2.png', // plik z grafika znacznika
    selected_width: 96, // szerokosc znacznika
    selected_height: 96, // wysokosc znacznika
    selected_sprites: 8, // ile klatek ma animacja indykatora aktywnej postaci
    selected_ofset_x: 0, // przesuniecie wzgledem *srodka* postaci
    selected_ofset_y: 0, // przesuniecie wzgledem *srodka* postaci

    deselected_src: 'assets/img/niezaznaczenie2.png', // plik z grafika znacznika
    deselected_width: 96, // szerokosc znacznika
    deselected_height: 96, // wysokosc znacznika
    deselected_sprites: 8, // ile klatek ma animacja indykatora aktywnej postaci
    deselected_ofset_x: 0, // przesuniecie wzgledem *srodka* postaci
    deselected_ofset_y: 0, // przesuniecie wzgledem *srodka* postaci
  },

  skills: {
    pogromca_first_src: 'assets/img/skills/szron1.png',
    pogromca_first_attack_penalty: 0.45, // procentowa kara do atakow kreatur
    pogromca_first_min_attack_penalty: 0.45, // procentowa kara do minimalnych atakow kreatur
    pogromca_first_defence_penalty: 0.45, // procentowa kara do obrony kreatur
    pogromca_first_radius: 220, // w jakim zasiegu dziala umiejka
    pogromca_first_cooldown: 50 * 24, // czas cooldownu umiejki w klatkach
    pogromca_first_timeout: 0, // czas aktywnosci umiejki - 0 bo umiejka natychmiastowa

    pogromca_second_src: 'assets/img/skills/szron2.png',
    pogromca_second_attack_bonus: 0.3, // procentowy bonus do ataku postaci
    pogromca_second_min_attack_bonus: 0.3, // procentowy bonus do minimalnego ataku
    pogromca_second_cooldown: 15 * 24, // czas cooldownu umiejki
    pogromca_second_timeout: 5 * 24, // czas aktywnosci umiejki

    wojownik_first_src: 'assets/img/skills/olaf1.png',
    wojownik_first_defence_bonus: 30, // liczbowy bonus do obrony postaci
    wojownik_first_cooldown: 15 * 24, // czas cooldownu umiejki
    wojownik_first_timeout: 5 * 24, // czas aktywnosci umiejki

    wojownik_second_src: 'assets/img/skills/olaf2.png',
    wojownik_second_attack_damage: 0.35, // zadawane obrazenia jako procent ataku dodawany do bazowego ataku (naturalnie moze byc wieksze od 1)
    wojownik_second_timeout: 3 * 24, // na jaki czas zamroczy kreatury
    wojownik_second_radius: 90, // w jakim zasiegu dziala umiejka
    wojownik_second_cooldown: 50 * 24, // czas cooldownu umiejki

    komandoska_first_src: 'assets/img/skills/lidia1.png',
    komandoska_first_speed_bonus: 0.55, // razy ile mnozymy obecna szybkosc ataku
    komandoska_first_timeout: 5 * 24, // ile klatek aktywne
    komandoska_first_cooldown: 15 * 24, // jaki cooldown

    komandoska_second_src: 'assets/img/skills/lidia2.png',
    komandoska_second_health_recover: 0.21, // ile max life dostana sojusznicze jednostki
    komandoska_second_radius: 100, // zasieg dzialania
    komandoska_second_timeout: 0, // czas aktywnosci - 0 bo natychmiastowa
    komandoska_second_cooldown: 50 * 24, // jaki cooldown

    cooldown_bar_src: 'assets/img/cooldownbar2.png',
    cooldown_bar_sprites: 49,
    cooldown_bar_width: 48,
    cooldown_bar_height: 48,

    active_bar_src: 'assets/img/skillbar.png',
    active_bar_sprites: 48,
    active_bar_width: 48,
    active_bar_height: 48,
  },

  // Wypadajki i znajdzki
  droppings: {
    // znajdźki *muszą* być *kwadratowe*, o parzystej wielkości boku
    ammo_src: 'assets/img/znajdzki/ammodrop.png', // obrazek z ammo
    health_src: 'assets/img/znajdzki/healthdrop.png', // obrazek z zdrowiem
    viols_src: 'assets/img/znajdzki/violkidrop.png', // obrazek z violkami

    // znajdzka boostujaca atak
    attack_src: 'assets/img/znajdzki/biceps.png', // obrazek
    // znajdzka boostujaca defence
    defence_src: 'assets/img/znajdzki/tarcza.png', // obrazek
    // znajdzka boostujaca predkosc poruszania sie
    speed_src: 'assets/img/znajdzki/biegnacy.png', // obrazek
    // znajdzka spowalniajaca boty
    slow_src: 'assets/img/znajdzki/snieg.png', // obrazek
    // znajdzka raniaca boty
    injure_src: 'assets/img/znajdzki/eksplozja.png', // obrazek

    radius: 15, // połowa boku kwadratu opisujacego znajdzkę
    ammo_sound_src: [ 'assets/audio/znajdzki/ammo.ogg', ],
    ammo_volume: 0.2,
    health_sound_src: [ 'assets/audio/znajdzki/health.ogg', ],
    health_volume: 0.2,
    viols_sound_src: [ 'assets/audio/znajdzki/violki1.ogg', ],
    viols_volume: 0.7,
    attack_sound_src: [ 'assets/audio/znajdzki/attack.ogg', ],
    attack_volume: 0.2,
    defence_sound_src: [ 'assets/audio/znajdzki/defence.ogg', ],
    defence_volume: 0.2,
    speed_sound_src: [ 'assets/audio/znajdzki/speed.ogg', ],
    speed_volume: 0.2,
    slow_sound_src: [ 'assets/audio/znajdzki/slow.ogg', ],
    slow_volume: 0.2,
    injure_sound_src: [ 'assets/audio/znajdzki/damage2.ogg', ],
    injure_volume: 0.2,

    ttl: 30 * 24, // domyślny czas życia znajdzki w klatkach (24 kl/s)
    blink_start: 0, // kiedy zacznie migac znajdka
    blink_time_on: 4, // ile klatek pokazywac blink
    blink_time_off: 1, // ile klatek nie pokazywac blink
    health_add: [5,15], // domyslne zycie dodawane, losowane z zakresu [min,max]
    ammo_add: [0.1,0.5], // domsylna liczba amunicji dodawana, losowane z zakresu [min,max] - uwaga - liczba ta oznacza procent z maksymalnej wielkości paczki o jaki zostanie powiekszona posiadana paczka amunicji (ale nie wiecej niz bazowa wielkosc paczki amunicji)
    viols_add: [10,50], // domyslan liczba violek dodawana, losowane z zakresu [min,max]
    attack_boost: {
      attack: [0.25, 0.4], // procent boostu ataku
      min_attack: [0.25, 0.2], // procent boostu min atacku
      speed: [0.2, 0.35], // procent boostu predkosci ataku, new_speed = speed - speed * procent
    },
    defence_boost: [0.3, 0.3], // procent boostu defence
    speed_boost: [0.3, 0.3], // boost predkosci
    slow_boost: [0.15, 0.23], // ile procent jest odejmowane od predkosci bota
    injure_boost: [0.2, 0.35], // ile procent max_life jest odejmowane od zycia bota
  },

  // wpływajki zatruwajki
  influences: {
    poison_mini_icon_src: 'assets/img/poison_mini.png', // ikonka zatrucia na mapie
    poison_icon_src: 'assets/img/poison.png', // ikonka zatrucia na panelu
    fire_mini_icon_src: 'assets/img/fire_mini.png', // ikonka zatrucia na mapie
    fire_icon_src: 'assets/img/fire.png', // ikonka zatrucia na panelu

    mini_icon_width: 10, // szerokosc mini ikonki z zatruwajka
    icon_width: 20, // szerokosc ikonki z zatruwajka

    // znaczniki zatrucia
    map_offset_x: -10, // przesuniecie wzgledem srodka postaci
    map_offset_y: -10, // przesuniecie wzgledem srodka postaci

    // znaczniki zatrucia na panelu 
    panel_offset_x: 10, // przesuniecie wzgledem lewego gornego roku ikony postaci
    panel_offset_y: 10, // przesuniecie wzgledem lewego gornego roku ikony postaci
  },

  // ikona trybu "idz i atakuj" i "bron pozycji"
  defender: {
    display: true, // czy w ogole wyswietlac
    mini_icon_src: 'assets/img/miecze.png',

    // znaczniki zatrucia
    map_offset_x: -10, // przesuniecie wzgledem srodka postaci
    map_offset_y: -30, // przesuniecie wzgledem srodka postaci
  },

  // ikonka trybu za wszelka cene idz, atakuj tylko jesli ktos stoi ci na drodze
  executor: {
    display: true, // czy w ogole wyswietlac
    mini_icon_src: 'assets/img/tarczka.png',

    // znaczniki zatrucia
    map_offset_x: -10, // przesuniecie wzgledem srodka postaci
    map_offset_y: -30, // przesuniecie wzgledem srodka postaci
  },

  // ikonka trybu amoku przeciwnikow
  amok: {
    display: false, // czy w ogole wyswietlac
    mini_icon_src: 'assets/img/miecze.png',

    // znaczniki zatrucia
    map_offset_x: -10, // przesuniecie wzgledem srodka postaci
    map_offset_y: -30, // przesuniecie wzgledem srodka postaci
  },

  // ikonka trybu domyslnego - chodza, laza i ja zauwaza to atakuja
  commander: {
    display: false, // czy w ogole wyswietlac
    mini_icon_src: 'assets/img/tarczka.png',

    // znaczniki zatrucia
    map_offset_x: -10, // przesuniecie wzgledem srodka postaci
    map_offset_y: -30, // przesuniecie wzgledem srodka postaci
  },

  // ikonka dla przyjaznych przeciwnikow
  friendly: {
    display: false, // czy w ogole wyswietlac
    mini_icon_src: 'assets/img/tarczka.png',

    // znaczniki zatrucia
    map_offset_x: -10, // przesuniecie wzgledem srodka postaci
    map_offset_y: -30, // przesuniecie wzgledem srodka postaci
  },

  // migajki na planszy gry
  flash: {
    display: false, // czy w ogole wyswietlac

    0: 'assets/img/flash/0.png', // atak udany zabralo X zycia
    1: 'assets/img/flash/1.png', // atak udany zabralo X zycia
    4: 'assets/img/flash/4.png', 
    8: 'assets/img/flash/8.png',
    16: 'assets/img/flash/16.png',
    32: 'assets/img/flash/32.png',
    64: 'assets/img/flash/64.png',
    fail: 'assets/img/flash/fail.png', // pech - nietrafione
    crit: 'assets/img/flash/crit.png', // krytyczny pech
    succ: 'assets/img/flash/succ.png', // krytyczny powodzenie
    luck: 'assets/img/flash/luck.png', // szczescie

    offset_x: 0, // przesuniecie migajki wzgledem srodka postaci
    offset_y: -20, // przesuniecie migajki wzgledem srodka postaci

    ttl: 24, // ile klatek zyje taka migajka
    step: -0.5, // ile pikseli przesuwa sie co klatke ( - znaczy ze w gore )

  }
};
