Lang = {
  // tu dopisujemy nowy obiekt tlumaczenia
  en: {},
  pl: {},

  get: function(key) {
    var str = this[account.lang][key];
    return str || "MISSING_TRANSLATION: "+key;
  }

};

// Umiejki
Lang.en.martial = 'Martial: ';
Lang.en.crossbow = 'Crossbow: ';
Lang.en.pole = 'Pole: ';
Lang.en.pistol = 'Pistol: ';
Lang.en.thrower = "Thrower: ";
Lang.en.cut = 'Blade: ';
Lang.en.blunt = 'Hammer: ';
Lang.pl.martial = 'Bez broni: ';
Lang.pl.crossbow = 'Kusze: ';
Lang.pl.pole = 'Drzewcowa: ';
Lang.pl.pistol = 'Pistolety: ';
Lang.pl.thrower = 'Miotacze: ';
Lang.pl.cut = 'Ostrza tnące: ';
Lang.pl.blunt = 'Młoty: ';

// Nazwy postaci
Lang.pl.Pogromca = "Szron";
Lang.en.Pogromca = "Szron";
Lang.pl.Wojownik = "Olaf";
Lang.en.Wojownik = "Olaf";
Lang.pl.Żołnierka = "Lidia";
Lang.en.Żołnierka = "Lidia";
Lang.pl.Komandoska = "Wiktoria";
Lang.en.Komandoska = "Wiktoria";

// Panel boczny
// Tekst z numerami fali - dostepne placeholdery
// {wave} - numer aktualnej fali
// {waves} - ilosc fal w misji
Lang.pl.wave_desc = "Fala {wave}/{waves}";
Lang.en.wave_desc = "Wave {wave}/{waves}";


// Panele konca misji
// Dostepne placeholdery
// {prize} - violki nagrody wpisane w ustawieniach poziomu
// {bonus} - bonusowe violki zebrane w trakcie misji
// {viols} - suma violek
Lang.pl.success_panel = "W nagrodę otrzymujesz {prize} violek oraz dodatkowe {bonus} violek\nznalezionych w trakcie misji. W sumie {viols}.";
Lang.pl.failure_panel = "Mimo przegranej otrzymujesz {bonus} violek znalezionych w trakcie misji.";

// EN
Lang.en.success_panel = "As a reward, you receive {prize} viols and an additional {bonus} viols\nfound during the mission. Total, {viols} viols.";
Lang.en.failure_panel = "Despite defeat you get found {bonus} viols during the mission.";

// Panel glowny
// Dostepne placeholdery
// {name} - nazwa postaci
// {life} - zycie potaci
// {attack} - atak postaci
// {weapon} - atak broni
// {attack_sum} - suma atakow
// {defence} - obrona postaci
// {armour} - obrona zbroi
// {defence_sum} - suma obrony
Lang.pl.menu_soldier_info = "{name}\nŻycie: {life}\nAtak: {attack_sum}\nObrona: {defence_sum}";
Lang.en.menu_soldier_info = "{name}\nLife: {life}\nAttack: {attack_sum}\nDefence: {defence_sum}";
//Lang.pl.menu_soldier_info = "{name}\nŻycie: {life}\nAttack:{attack}\nWeapon:{weapon}\nSum:{attack_sum}\nDefence:{defence}\nArmour:{armour}\nSum:{defence_sum}";
Lang.pl.menu_version_number = "v. 0.5";
Lang.en.menu_version_number = "v. 0.5";
Lang.pl.menu_credits = 'http://www.violetfalltactics.com/credits.html';
Lang.en.menu_credits = 'http://www.violetfalltactics.com/credits.html';
Lang.pl.menu_support = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2NSBVZJGSHLC';
Lang.en.menu_support = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EXQ7U7CK3UMEQ';

// Ekran końcowy
Lang.pl.end_panel_text_area = "Gratulacje!\n\nUdało Ci się ukończyć wersję beta gry.\n\nCo dalej, szefie?\n\nMoże wspomożesz pracę nad Violet Fall Tactics?";
Lang.pl.end_panel_link_area = " "; // aby sie nie wyswietlalo zostawic spacje
// Zero to link powrotowy - czyli bez urla - kolejnosc wyswietlania mozna ustalic w konfigu
Lang.pl.end_panel_link_0 = "Powrót do gry";
// Lang.pl.end_panel_link_1 = "Wypełnij ankietę";
// Lang.pl.end_panel_link_1_url = "http://ow.ly/sMJ6j";
Lang.pl.end_panel_link_1 = "Wesprzyj";
Lang.pl.end_panel_link_1_url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2NSBVZJGSHLC";
Lang.pl.end_panel_link_2 = "Strona gry";
Lang.pl.end_panel_link_2_url = "http://www.violetfalltactics.com/";
Lang.pl.end_panel_link_3 = "Twórcy";
Lang.pl.end_panel_link_3_url = "http://www.violetfalltactics.com/credits.html";

// Ekran końcowy EN
Lang.en.end_panel_text_area = "Congratulations!\n\nYou have successfully completed the beta version of the game.\n\nWhat next, chief?\n\nMaybe will aid the work of the Violet Fall Tactics?";
Lang.en.end_panel_link_area = " "; // aby sie nie wyswietlalo zostawic spacje
// Zero to link powrotowy - czyli bez urla - kolejność wyświetlania można ustalić w konfigu
Lang.en.end_panel_link_0 = "Back to the game";
Lang.en.end_panel_link_1 = "Support";
Lang.en.end_panel_link_1_url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EXQ7U7CK3UMEQ";
Lang.en.end_panel_link_2 = "Game website";
Lang.en.end_panel_link_2_url = "http://www.violetfalltactics.com/";
Lang.en.end_panel_link_3 = "Credits";
Lang.en.end_panel_link_3_url = "http://www.violetfalltactics.com/credits.html";

/*
Lang.pl.end_panel_link_4 = "Google+";
Lang.pl.end_panel_link_4_url = "https://plus.google.com/102961575670984006436/posts";
Lang.pl.end_panel_link_5 = "Facebook";
Lang.pl.end_panel_link_5_url = "https://www.facebook.com/Violet.Fall";
Lang.pl.end_panel_link_6 = "Twitter";
Lang.pl.end_panel_link_6_url = "https://twitter.com/Violet_Fall";
*/

Lang.en.level_0_name = 'Morning of the Rat';
Lang.en.level_0_desc = "Difficulty level: very low\nEnemies: Mutant rodents\nTips:\n- Don't let yourself be surrounded.\n- You can attack while in motion.\n\n\nI'm Nikodem Czarnecki, but friends call me Szron. A few\ndays ago I was sent on a mission to kill a group of Ghouls.\nMy ass got whooped hard and, as every violet-eye, I was\nwrapped in a protection cocoon before being killed. A few\nhours on and it does not look like my position will be getting\nbetter any time soon."
//"My name is Nikodem Czarnecki, although everyone calls\nme Szron. I took a trip to Gdynia to eliminate some Ghuls,\nas my part of my contract with some local group of\ncollectors.\n\nSince day one, nothing went as planned.\nIt took a few full days to get through the Infected to my\ndestination. When I arrived, it turned out that\nthe number of mutant was, to put it mildly, underestimated\nby my contractors. As if my situation wasn't bad enough,\nthe rain made it impossible for me to spot the trap in time.\nI guess 'fucked up' would describe my position best.\nAnd now off to straighten things up...";

Lang.en.level_0_speech_0 = "\nDamn them, those godforsaken Ghouls...\nMy equipment bag is missing, on top of that. Gotta run...\nI seem to be in one piece, but where am I?";
Lang.en.level_0_speech_1 = "\nBeach in Gdynia, chief.";
Lang.en.level_0_speech_2 = "\nThat's one nasty neighborhood, I must say. Wait... Didn't I turn you off?";
Lang.en.level_0_speech_3 = "\nIndeed. I am automatically activated by your communicator when you get\na message, did you forget?";
Lang.en.level_0_speech_4 = "\nDon't give me that bullshit, just play the message!";
Lang.en.level_0_speech_5 = "\nRe-playing the video message.";
Lang.en.level_0_speech_6 = "\nSzron, your lovely sister is sending her greetings.";
Lang.en.level_0_speech_7 = "\nOh...it's going to be a lousy day.";
Lang.en.level_0_speech_8 = "\nShe sent you a letter! A letter! You know, an analogue one! It is in our base\nand I promised you'd get it. Where can I find you, buddy?";
Lang.en.level_0_speech_9 = "\nEnd of message.";
Lang.en.level_0_speech_10 = "\nI'm fucked, I'm more than certain of that.\nI think I heard something.\nMutated rats...a whole nest of them...goddammit.";
Lang.en.level_0_speech_11 = "\nOk, that was the last one, I think. I'll just collect a few Viols form these rats\nwith a distillator. I gotta get some currency for shopping.";
Lang.en.level_0_speech_12 = "\nAren't you forgetting something, boss?";
Lang.en.level_0_speech_13 = "\nRight. Send our position details to Olaf and inform him we are going towards\nGdansk, so we can meet halfway.";
Lang.en.level_0_speech_14 = "\nRoger that.";
Lang.en.level_0_speech_15 = "\nNow let's get the fuck out before more mutated rodents tag along,\nor worse - the Infected decide to join us.";

Lang.pl.level_0_name = 'Szczurzy poranek';
Lang.pl.level_0_desc = "Poziom trudności: bardzo niski\nPrzeciwnicy: Zmutowane gryzonie\nPorady:\n- Nie pozwól się otoczyć.\n- Możesz atakować, będąc w ruchu.\n\n\nJestem Nikodem Czarnecki, dla przyjaciół Szron.\nKilka dni temu dostałem zlecenie na ubicie grupy Ghuli.\nDostałem od nich srogie baty, ale jak każdy fioletowooki\ntuż przed śmiercią wpadłem w ochronny kokon.\nMinęło dobrych kilka godzin, a miejsce w którym\nsię obudziłem nie sugeruje, by moja sytuacja miała\nsię poprawić.";

Lang.pl.level_0_speech_0 = "\nŻeby je...!\nCholerne Ghule...\nDodatkowo gdzieś przepadł mi plecak ze sprzętem. Trzeba stąd zwiewać...\nDobra, chyba jestem cały. Gdzie ja w ogóle jestem?";
Lang.pl.level_0_speech_1 = "\nGdyńska plaża, szefie.";
Lang.pl.level_0_speech_2 = "\nPaskudna okolica...\nHej, czy ja cię przypadkiem nie wyłączyłem?";
Lang.pl.level_0_speech_3 = "\nTak, wyłączyłeś. Gdy otrzymujesz wiadomość, twój komunikator aktywuje mnie\nautomatycznie, zapomniałeś?\nWiadomość została wysłana, gdy drzemałeś w kokonie.";
Lang.pl.level_0_speech_4 = "\nA weź mnie nie denerwuj tylko odtwarzaj!";
Lang.pl.level_0_speech_5 = "\nOdtwarzam video-przekaz.";
Lang.pl.level_0_speech_6 = "\nSzron, twoja kochana siostra przesyła pozdrowienia.";
Lang.pl.level_0_speech_7 = "\nOho... czuję, że to będzie kiepski dzień...";
Lang.pl.level_0_speech_8 = "\nPoza tym wysłała list! List! Analogowy taki. Jest w naszej bazie, obiecałem,\nże go dostarczę.\nGdzie cię znajdę stary?";
Lang.pl.level_0_speech_9 = "\nKoniec wiadomości.";
Lang.pl.level_0_speech_10 = "\nEch... Mam przesrane... Jestem tego bardziej niż pewien.\nChyba coś słyszałem...\nJa pierdole... Całe stado zmutowanych szczurów!";
Lang.pl.level_0_speech_11 = "\nNo to był chyba ostatni...\nDobra, jeszcze tylko zbiorę violki z tych szczurków. Będę mógł zrobić zakupy...";
Lang.pl.level_0_speech_12 = "\nNie zapomniałeś o czymś, szefie?";
Lang.pl.level_0_speech_13 = "\nFakt. Wyślij Olafowi naszą pozycję. Poinformuj go, że ruszamy w stronę\nGdańska. Spotkam się z nim gdzieś po drodze.";
Lang.pl.level_0_speech_14 = "\nPrzyjąłem.";
Lang.pl.level_0_speech_15 = "\nŚwietnie. Teraz czas spieprzać stąd, zanim pojawi się więcej zmutowanych\ngryzoni, albo jacyś Zarażeni.";

/*
Lang.pl.level_0_name = 'Szczurzy poranek';
Lang.pl.level_0_desc = "(Misja zwykła)\n\nJestem Nikodem Czarnecki, dla przyjaciół Szron.\nKilka dni temu dostałem zlecenie na ubicie grupy Ghuli.\nNiestety, było ich zbyt dużo,w dodatku mnie zaskoczyły.\nDostałem srogie baty, ale jak każdy Fioletowooki tuż przed\nśmiercią wpadłem w ochronny kokon. Kilka godzin później\nobudziłem się w mało przyjemnym miejscu.\n\nPoziom trudności: bardzo niski\nPrzeciwnicy: Zmutowane gryzonie\nPorady:\n- Nie daj się otoczyć\n- Możesz atakować, będąc w ruchu"
"Nazywam się Nikodem Czarnecki, ale niemal wszyscy\nmówią na mnie Szron. Wyprawiłem się do Gdyni, by utłuc\nna zlecenie kilku okolicznych grup zbieraczy bandę Ghuli.\nJednak od samego początku wszystko szło nie tak\njak trzeba.\n\nDotarcie na miejsce zajęło mi kilka pełnych\nprzebijania się przez Zarażonych dni. Wtedy okazało się,\nże poszukiwanych przeze mnie mutantów jest więcej,\nniż wskazywałyby na to informacje od moich\nzleceniodawców. Na domiar złego spadł deszcz,\nco sprawiło, że nie zauważyłem w porę zastawionej\nna mnie zasadzki. Mówiąc w skrócie, spierdoliłem sprawę,\na teraz będę musiał się jakoś z tego wyplątać...";
*/

Lang.en.level_1_name = 'Letter from Warsaw';
Lang.en.level_1_desc = "Difficulty level: low\nEnemies: Infected, Mutant rats\nTips:\n- Block narrow passages\n- The slower the enemy, the stronger it is\n\n\nThis is more or less the place where I should meet Olaf.\nI wonder what rotten news my loving sis has for me."
//"This should be the place where I was to meet Olaf. I wonder\nwhat rotten news my loving sister has for me. I have seen\nsome Infected in the neighborhood. Those smelly,\nmaundering corpses are far more resistant than the rats.\nI better start organizing some weapon instead of using my\nown two hands to fight them. Some medicine and potions\nwouldn't hurt either, as long as I have some spare vials\nto pay with them.";

Lang.en.level_1_speech_0 = "\nOlaf! Olaf! Long time no see! I see you're not fucking around...";
Lang.en.level_1_speech_1 = "\nYou mean this? You know I never liked the Infected.";
Lang.en.level_1_speech_2 = "\nOk, we'll save the sweet talk for later. Show me THE message.";
Lang.en.level_1_speech_3 = "\nHere you go. The letter is intact, the seal is not broken, and I got it faster than\nin the good 'ol Poczta Polska days.";
Lang.en.level_1_speech_4 = "\nHmm... it's written in code. Not that I'm surprised. Let me decipher it …\nGoddamit. That nasty bitch is sending me to Warsaw... the nerve!";
Lang.en.level_1_speech_5 = "\nYou can say no, can't you?";
Lang.en.level_1_speech_6 = "\nHell no, I can't. My dear sister has a hold on me this time, I'm afraid.";
Lang.en.level_1_speech_7 = "\nSorry to interrupt your lovely chat, but I intercepted this message from a public\nchannel. The sender is the Recon and Radio Communication Battalion \nof the Neptune Brotherhood.\nReplaying the video conference.";
Lang.en.level_1_speech_8 = "\nTo all the nut-heads currently in south-east part of Sopot.";
Lang.en.level_1_speech_9 = "\n I've got a bad feeling about this, Szron. He is referring to us.";
Lang.en.level_1_speech_10 = "\nOur Recon have detected a large volume of the Infected in that region.\nThere are hundreds of them. We have ordered evacuation of the neighborhood!";
Lang.en.level_1_speech_11 = "\nSend them our coordinates and ask for the exact position of the hoard,\nas well as precise instructions regarding the evacuation.";
Lang.en.level_1_speech_12 = "\nRoger that.";
Lang.en.level_1_speech_13 = "\nYou're screwed, Czarnecki.";
Lang.en.level_1_speech_14 = "\nAnd I, too, am happy to see and hear you again read admiral Ostrowski.";
Lang.en.level_1_speech_15 = "\nDon't act goofy, kid! A whole bunch of murderous carcasses are on your trial.\nYou can't run. Is there anyone with you?";
Lang.en.level_1_speech_16 = "\nBoatswain's Mate, nickname Olaf, sir!";
Lang.en.level_1_speech_17 = "\nYou're lucky, Szron. Listen - the main wave will miss you by an inch. Stay where\nyou are and fight those who come near, and you just might make it in one piece.";
Lang.en.level_1_speech_18 = "\nAs soon as there is some evacuation gateway I will let you now.\nTake care for now.";
Lang.en.level_1_speech_19 = "\nOk, let's get to work.";
Lang.en.level_1_speech_20 = "\nOk - move your asses. Now's a chance to get through.";
Lang.en.level_1_speech_21 = "\nThanks for the help, old man. Much obliged.";
Lang.en.level_1_speech_22 = "\nWhen you're on the way, drop by our base - I'm sure you have plenty of Viols\nto give away after that bloodbath.";
Lang.en.level_1_speech_23 = "\n Since we're talking about money...The brotherhood pays a neat sum for\nany techno-junk you can get your hands on from the factory on the border\nof Gdansk.";
Lang.en.level_1_speech_24 = "\nBefore I was made your courier I was planning to find someone to help me\nwith that. Would you consider an additional task?";
Lang.en.level_1_speech_25 = "\nI'll think about it. It's not like I'm in a hurry, but the capital is a long way form here.";
Lang.en.level_1_speech_26 = "\nIt's just a suggestion. Besides, with you I'm never lacking entertainment, so I\nmight as well take you to the docks where some of our smaller units are going\nto Warsaw.";

Lang.pl.level_1_name = 'List z Warszawy';
Lang.pl.level_1_desc = "Poziom trudności: niski\nPrzeciwnicy: Zarażeni, Zmutowane szczury\nPorady:\n- Blokuj wąskie przejścia\n- Wolniejsi przeciwnicy zazwyczaj są silniejsi\n\n\nMniej więcej w tym miejscu powinienem spotkać Olafa.\nCiekawe jak złą wiadomość chce mi przekazać moja\nukochana siostrzyczka."

Lang.pl.level_1_speech_0 = "\nOlaf! Olaf, kopę lat, chłopie. Widzę, że nie próżnujesz.";
Lang.pl.level_1_speech_1 = "\nMówisz o tych dwóch trupach? Wiesz, jak ja nie przepadam za Zarażonymi...";
Lang.pl.level_1_speech_2 = "\nDobra, uprzejmości na bok, pokaż TĘ wiadomość.";
Lang.pl.level_1_speech_3 = "\nTrzymaj. List nienaruszony, pieczęć cała i dostarczony szybciej niż za czasów\nPoczty Polskiej.";
Lang.pl.level_1_speech_4 = "\nHmm... napisana szyfrem. Nic nowego. Zaraz to rozpracuję...\nNiech to szlag! Złośliwa suka posyła mnie do Warszawy.\nJa pierdole, ta to ma tupet...";
Lang.pl.level_1_speech_5 = "\nZawsze możesz odmówić, co nie?";
Lang.pl.level_1_speech_6 = "\nFigę. Nie mogę. Moja kochana siostrzyczka ma na mnie haka... Znowu.";
Lang.pl.level_1_speech_7 = "\nWybacz, że przerywam tę uroczą pogawędkę, ale przechwyciłem wiadomość\nna publicznym kanale. Nadaje ją Batalion Rozpoznania i Radiokomunikacji\nBractwa Neptuna.\nOdtwarzam video-przekaz.";
Lang.pl.level_1_speech_8 = "\nDo wszystkich idiotów znajdujących się w pobliżu południowo-wschodniej\nczęści Sopotu.";
Lang.pl.level_1_speech_9 = "\nMam bardzo złe przeczucia Szron, to o nas.";
Lang.pl.level_1_speech_10 = "\nNasze oddziały zwiadowcze wykryły ogromne natężenie Zarażonych\nw tym regionie. Są ich setki. Zarządzamy ewakuację okolicy!";
Lang.pl.level_1_speech_11 = "\nWyślij nasze koordynaty i poproś o dokładne położenie hordy oraz wskazówki\ndotyczące ewakuacji.";
Lang.pl.level_1_speech_12 = "\nPrzyjąłem.";
Lang.pl.level_1_speech_13 = "\nMacie przesrane, Czarnecki.";
Lang.pl.level_1_speech_14 = "\nMnie też miło cię znowu zobaczyć i usłyszeć, kontradmirale Ostrowski.";
Lang.pl.level_1_speech_15 = "\nTy się tu nie wydurniaj, młody. Cała masa tych morderczych trupów będzie\nmijać waszą pozycję. Nie uciekniecie. Jesteście sami?";
Lang.pl.level_1_speech_16 = "\nBosmanmat pseudonim Olaf, na rozkaz Panie kontradmirale.";
Lang.pl.level_1_speech_17 = "\nMasz farta Szron. Słuchaj, główna fala minie was bokiem.\nZostańcie tu, gdzie jesteście i odeprzyjcie tych, którzy podejdą, a może\nuda wam się wyjść z tego w jednym kawałku.";
Lang.pl.level_1_speech_18 = "\nJak będzie możliwość ewakuacji dam wam znać.\nMusicie wytrwać do tego czasu. Powodzenia.";
Lang.pl.level_1_speech_19 = "\nDobra, to do roboty!";
Lang.pl.level_1_speech_20 = "\nDobra, ruszajcie dupska. Teraz macie szansę przejść.";
Lang.pl.level_1_speech_21 = "\nDzięki za pomoc, staruszku. Jestem zobowiązany.";
Lang.pl.level_1_speech_22 = "\nPo drodze możecie zahaczyć o naszą bazę, bo po tej rzeźni macie\npewnie nadmiar violek do wydania.";
Lang.pl.level_1_speech_23 = "\nSkoro o finansach mowa. Bractwo nieźle płaci za przyniesienie paru\ntechnogratów z fabryki znajdującej się na obrzeżach Gdańska.";
Lang.pl.level_1_speech_24 = "\nSzukałem kogoś do pomocy przy tej akcji, zanim zostałem Twoim posłańcem.\nMoże się skusisz?";
Lang.pl.level_1_speech_25 = "\nPomyślimy. Kawał drogi do stolicy, chociaż... w sumie mi nie spieszno.";
Lang.pl.level_1_speech_26 = "\nTo luźna propozycja. Jeśli chcesz, mogę od razu zaprowadzić cię do przystani,\ngdzie możesz złapać transport wodny do Warszawy.";

/*
Lang.pl.level_1_name = 'List z Warszawy';
Lang.pl.level_1_desc = "(Misja zwykła)\n\nMniej więcej w tym miejscu powinienem spotkać Olafa.\nCiekawe jak złą wiadomość chce mi przekazać moja\nukochana siostrzyczka.\n\nPoziom trudności: niski\nPrzeciwnicy: Zarażeni\nPorady:\n- Blokuj wąskie przejścia\n- Wolniejsi przeciwnicy zazwyczaj są silniejsi"
"Mniej więcej w tym miejscu powinienem spotkać Olafa.\nCiekawe jak złą wiadomość chce mi przekazać moja\nukochana siostrzyczka. W okolicy widziałem Zarażonych.\nTe śmierdzące snujące się martwiaki są dużo wytrzymalsze\nod zmutowanych szczurów. Wypadałoby skombinować\njakąś solidniejszą niż własne ręce broń. Nie zaszkodzi\nzabrać też trochę medykamentów lub specyfików o ile\ntylko starczy mi na to violek.";
*/

Lang.en.level_2_name = "Lucrative deal";
Lang.en.level_2_desc = "Difficulty level: moderate\nEnemies: Pirates, Infected\nTips:\n- Let your enemies attack each other\n- Use weapon with high noise suppression\n\n\nThis factory is almost intact after this goddamn apocalypse,\nor, as some call it, Violet Fall. That gives the Brotherhood\nsome hope of finding important subunits or technojunk."
//"This factory is almost intact after this goddamn apocalypse,\nor, as some call it, Violet Fall. That gives the Brotherhood\nsome hope for finding important components or techno-junk.\nApart from the Infected, the area may have some inhabitants\nthat will be hostile towards us. After all, there's never\na shortage of thieves and bandits in this country. Their sort\nrequires a somewhat different tactic. They are much faster\nand brighter than zombies. The easiest way to get rid\nof them is firearms, but ammo is never cheap, you know.";

Lang.en.level_2_speech_0 = "\nWe're here.\nHere is a list of the stuff they need. It shouldn't take long.";
Lang.en.level_2_speech_1 = "\nI'm afraid you're wrong, my friend. I hear voices, and it does not sound like\nthe Brotherhood.";
Lang.en.level_2_speech_2 = "\nGoddammit. They are probably Pirates from the 7th. We've been running into\nthem lately quite a lot in this neighborhood.";
Lang.en.level_2_speech_3 = "\nThey hear us, so there's no use in running. Let's get ready for fight.";
Lang.en.level_2_speech_4 = "\nStubborns sonuvabitches, and the Infected, on top of that. It's good to see you\nin shape.";
Lang.en.level_2_speech_5 = "\nYou're giving me too much credit- we just had plenty of luck. Ok, let's get to work.\nWe need to grab what we need and get going.";
Lang.en.level_2_speech_6 = "\nRight on. By the way, what did you mean back then, in Sopot, when you said\nyour sister has got a hold on you?";
Lang.en.level_2_speech_7 = "\nIt's an old story. She helped me track down one nasty motherfucker and I never\ngot to repaying her. On top of that, she saved my ass during Violet Fall, of all the things.";
Lang.en.level_2_speech_8 = "\nOk, enough of the chit-chat. Let's get moving before we get visitors.";

Lang.pl.level_2_name = 'Lukratywne zlecenie';
Lang.pl.level_2_desc = "Misja dodatkowa\nPoziom trudności: umiarkowany\nPrzeciwnicy: Korsarze, Zarażeni\nPorady:\n- Napuszczaj przeciwników na siebie.\n- Użyj dobrze wytłumionej broni.\n\n\nTa fabryka nie ucierpiała za bardzo wskutek tej\ncholernej apokalipsy, czyli  Violet Falla. Istnieje\nwięc spora szansa, że nadal znajdują się tam niezbędne\nBractwu podzespoły czy inne cenne technograty."

/*
Lang.pl.level_2_name = 'Lukratywne zlecenie';
Lang.pl.level_2_desc = "(Misja dodatkowa)\n\nTa fabryka niezbyt ucierpiała na wskutek apokalipsy.\nIstnieje szansa, że w środku wciąż leży dużo cennych\ntechnogratów, którymi zainteresowane jest Bractwo.\n\nPoziom trudności: umiarkowany\nPrzeciwnicy: Korsarze, zarażeni\nPorady:\n- Napuszczaj przeciwników na siebie\n- Staraj się zachować ciszę"
"Ta fabryka nie ucierpiała szczególnie wskutek tej całej\npieprzonej apokalipsy czy, jak kto woli, Violet Fall'a. Dzięki\nczemu Bractwo ma nadzieje, że nadal znajdują się tam\njakieś niezbędne im podzespoły czy inne technograty.\nPoza Zarażonymi mogą kręcić się w tej okolicy niezbyt\nprzyjaźni nam ludzie. W końcu bandytów w tym kraju jest\npod dostatkiem. Na takiego przeciwnika lepiej przyjąć\nzupełnie inną taktykę. W końcu są oni dużo szybsi\ni bystrzejsi od martwiaków. Najłatwiej zdjąć ich\nz broni palnej, ale, wiadomo, amunicja nigdy nie jest tania.";
*/

Lang.pl.level_2_speech_0 = "\nJesteśmy na miejscu.\nMam tu listę urządzeń  potrzebnych Bractwu. Nie powinno nam to zająć\nzbyt wiele czasu.";
Lang.pl.level_2_speech_1 = "\nTak? A te odgłosy w oddali, to nasi tragarze idą? Nie sądzę.";
Lang.pl.level_2_speech_2 = "\nCholera jasna, to pewnie banda Korsarzy z 7. Ostatnio kilkakrotnie\nstarliśmy się z nimi w tych okolicach.";
Lang.pl.level_2_speech_3 = "\nSłyszeli nas, więc nie ma co kombinować. Szykujmy się do walki.";
Lang.pl.level_2_speech_4 = "\nUff! Zawzięte bydlaki! A do tego jeszcze Zarażeni!\nCieszę się, że nie wyszedłeś z wprawy.";
Lang.pl.level_2_speech_5 = "\nPrzesadzasz. Mieliśmy sporo szczęścia. Dobra, bierz się do roboty.\nZabieramy co trzeba i spadamy.";
Lang.pl.level_2_speech_6 = "\nJasne. A przy okazji... Co konkretnie miałeś na myśli mówiąc, że twoja siostra\nma na ciebie haka?";
Lang.pl.level_2_speech_7 = "\nStare dzieje. Pomogła mi wytropić jednego wyjątkowo perfidnego gościa,\na ja nigdy się jej za to nie odwdzięczyłem. A poza tym...\nUratowała mi dupsko w czasie Violet Falla.";
Lang.pl.level_2_speech_8 = "\nNo, ale dość gadania. Spadajmy, zanim znowu ktoś lub coś się tu przypałęta.";

Lang.en.level_3_name = "Crow's mission";
Lang.en.level_3_desc = "Difficulty level: low\nEnemies: Pirates, Shooters\nAdvices:\n- Try to eliminate shooters first\n\n\nAccording to Olaf, this is the place where the Neptune\nBrotherhood's barge should soon arrive. We need to get\non board, as I don't feel like taking a trip on foot to Warsaw\non the Polish roads. The coast was regularly cleaned off\nthe mutants, which makes it a tasty piece for bandits."
//"In this area, according to Olaf, one of the Brotherhood's\nships should soon arrive. I need to get on the deck, as\nthe thought of endless weeks on the road to Warsaw\ngives me the chills. The area has been cleaned by the dock\nworkers off the mutants and other infected numerous times.\nThat has its drawbacks – the biggest one of which is\nthe increased number of bandits. The wealthier ones may\nhave some junk guns and that is the biggest threat we can\nencounter. Meeting them in open field to exchange lead or,\nworse, charging them with a piece of stick as your only\nweapon isn't the brightest idea ever. The keywords is: shield.\nIt's best to look for one before guys with guns approach us.";

Lang.en.level_3_speech_0 = "\nWe're here. In approximately 30 minutes there should be one of our barges\napproaching the shore.";
Lang.en.level_3_speech_1 = "\nSomehow I do not see any one else interested in the cruise.";
Lang.en.level_3_speech_2 = "\nNow that you mention it...it is kinda weird...";
Lang.en.level_3_speech_3 = "\nA coded message of the highest priority from read admiral Piotr Kruk Ostrowski.";
Lang.en.level_3_speech_4 = "\nCongratulations. You have just been made the 6th Coastal Guard Unit of\nNeptune Brotherhood and you will join operation Artus.";
Lang.en.level_3_speech_5 = "\nSeveral large bands of Pirates from the 7th have shot at our ship. We cannot\nconnect with them. Our Rapid Reaction Forces have been nailed to the other\nside of the coast.";
Lang.en.level_3_speech_6 = "\nOur Recon have determined the enemy forces are present also on this side\nof the Dead Vistula river. Although far less numerous, they may still cause\ndamage.";
Lang.en.level_3_speech_7 = "\nYou have to stop them at all costs until the backup arrives. They will be here in\na few moments. Over and out.";
Lang.en.level_3_speech_8 = "\nI must have missed the moment when I was drafted into the Brotherhood army.";
Lang.en.level_3_speech_9 = "\nLet go, Szron. The ship was going to Warsaw anyway, so it's in your best\ninterest, too. I'll show them what it means to raise a hand on the Neptune\nBrotherhood.";
Lang.en.level_3_speech_10 = "\nOlaf, how's it going? ";
Lang.en.level_3_speech_11 = "\nI could kill a guy or two more, why do you ask?";
Lang.en.level_3_speech_12 = "\nYou know that thing about the mountain coming to Muhammad?\nWell...it looks like it just did.";
Lang.en.level_3_speech_13 = "\nLooks like we hit the jackpot - it is the chieftain Pirate.";
Lang.en.level_3_speech_14 = "\nThanks for the backup, guys. We won! Teams 3 and 5 have crossed the river\nseveral hundred meters south and are getting on the survivor's tails.";
Lang.en.level_3_speech_15 = "\nAs a reward, Szron, you need not worry about payment for this and a dozen\nother cruises on our ships.";
Lang.en.level_3_speech_16 = "\nI have some bad news from Warsaw. Several of Covenant units are nagged\nby a hoard of deranged mutants in such great numbers, it's hard to speak\nof coincidence.";
Lang.en.level_3_speech_17 = "\nFor that reason we are sending our man with you. He is to produce a detailed\nreport after your return. Boatswain's Mate - that's your task!";
Lang.en.level_3_speech_18 = "\nYes sir!";
Lang.en.level_3_speech_19 = "\nCzarnecki, I hope you won't mind one of our people going with you?";
Lang.en.level_3_speech_20 = "\nNo problem. I get this gut feeling I will needs some backup.";

Lang.pl.level_3_name = 'Krucza robota';
Lang.pl.level_3_desc = "Poziom trudności: niski\nPrzeciwnicy: Korsarze, Strzelcy\nPorady:\n- W pierwszej kolejności eliminuj strzelców\n\n\nW tej okolicy, zdaniem Olafa, zatrzyma się niebawem jeden\nze statków Bractwa Neptuna. Trzeba się nim zabrać,\nbo nie uśmiechają mi się tygodnie spędzone na polskich\ndrogach w drodze do Warszawy. Te tereny zostały\nwielokrotnie oczyszczone z mutantów co niestety czyni je\natrakcyjnymi także dla bandytów. Choć kto wie, może tym\nrazem nam się poszczęści..."

/*
Lang.pl.level_3_name = 'Krucza robota';
Lang.pl.level_3_desc = "(Misja zwykła)\n\nW tej okolicy wkrótce zatrzyma się jeden ze statków\nBractwa, który zabierze mnie do Warszawy. O ile nic\nzłego się po drodze nie wydarzy.\n\nPoziom trudności: niski\nPrzeciwnicy: Korsarze, strzelcy\nPorady:\n- W pierwszej kolejności eliminuj strzelców"
"W tej okolicy, zdaniem Olafa, zatrzyma się niebawem jeden\nze statków Bractwa Neptuna. Trzeba się nim zabrać,\nbo nie uśmiechają mi się tygodnie spędzone na bezdrożach\nw drodze do Warszawy. Ta okolica wielokrotnie została\nwyczyszczona z mutantów czy innych Zarażonych przez\nportowców. Ma to jednak swoje minusy. Największym z nich\njest spora szansa na grasujących tu bandytów. Ci bardziej\nmajętni mogą posiadać jakieś proste, śmieciowe spluwy\ni to chyba najpoważniejsze zagrożenie jakie może nas\nspotkać. Głupim pomysłem jest stawanie jak debil\nna otwartym polu by wymieniać się z nimi ołowiem lub\nco gorsza szarżowaniem z tej pozycji mając za broń ledwie\nkawał kija. Słowo klucz to osłony. Dobrze jakieś poszukać\ni zaatakować dopiero jak goście z klamkami się zbliżą.";
*/

Lang.pl.level_3_speech_0 = "\nJesteśmy na miejscu. Za jakieś pół godziny na tym nabrzeżu powinna\npojawić się jedna z naszych barek.";
Lang.pl.level_3_speech_1 = "\nJakoś nie widzę innych osób zainteresowanych rejsem.";
Lang.pl.level_3_speech_2 = "\nFakt, to trochę dziwne.";
Lang.pl.level_3_speech_3 = "\nSzyfrowana wiadomość o najwyższym priorytecie od kontradmirała\nPiotra „Kruka” Ostrowskiego.";
Lang.pl.level_3_speech_4 = "\nZostaliście właśnie mianowani VI Drużyną Obrony Nabrzeża Bractwa Neptuna.\nDołączycie do operacji Artus.";
Lang.pl.level_3_speech_5 = "\nKilka sporych band Korsarzy z 7 ostrzelało nasz statek.\nNie możemy się z nim połączyć. Nasze oddziały szybkiego reagowania\nutknęły na drugim brzegu.";
Lang.pl.level_3_speech_6 = "\nZwiadowcom udało się ustalić, że i po tej stronie Martwej Wisły znajdują się\nsiły nieprzyjaciela. Choć dużo mniejsze, to nadal niebezpieczne.";
Lang.pl.level_3_speech_7 = "\nZatrzymajcie ich za wszelką cenę do czasu przybycia wsparcia.\nZa kilka chwil dotrą w pobliże pomostu. Bez odbioru.";
Lang.pl.level_3_speech_8 = "\nMusiałem przegapić moment, kiedy zaprzysiężono mnie jako żołnierza\nBractwa...";
Lang.pl.level_3_speech_9 = "\nOdpuść, Szron. Jest także w twoim interesie, żeby ten statek dopłynął\ndo Warszawy. Nadchodzą!\nPokażę im, co to znaczy podnieść rękę na Bractwo Neptuna!";
Lang.pl.level_3_speech_10 = "\nOlaf, jak tam Twoje siły?";
Lang.pl.level_3_speech_11 = "\nMógłbym jeszcze sprać paru gości. A czemu pytasz?";
Lang.pl.level_3_speech_12 = "\nWłaśnie pofatygowała się do nas sama góra. Góra mięśni.";
Lang.pl.level_3_speech_13 = "\nAle nas zaszczyt kopnął! To herszt piratów!";
Lang.pl.level_3_speech_14 = "\nDzięki za wsparcie. Wygraliśmy! Drużyny III i V pokonały rzekę kilkaset metrów\nna południe od was i będą gonić niedobitki.";
Lang.pl.level_3_speech_15 = "\nSzron, w nagrodę możesz się nie martwić o opłatę za ten i kilkanaście\nnajbliższych rejsów naszymi barkami.";
Lang.pl.level_3_speech_16 = "\n Mam też złe wieści z Warszawy. Wiele placówek Przymierza nękają hordy\nobłąkanych mutantów. Są one na tyle duże, że trudno mówić o przypadku.";
Lang.pl.level_3_speech_17 = "\nDlatego wysyłamy z tobą naszego człowieka. Ma nam złożyć szczegółowy\nraport po powrocie. Bosmanmacie – to Twoje zadanie! ";
Lang.pl.level_3_speech_18 = "\nTak jest kontradmirale!";
Lang.pl.level_3_speech_19 = "\nCzarnecki, mam nadzieje, że nie będziesz miał nic przeciwko, by nasz człowiek\nci towarzyszył?";
Lang.pl.level_3_speech_20 = "\nŻaden problem. Coś czuję, że bardzo przyda mi się wsparcie.";


Lang.en.replay_level_0_name = "Beach in Gdynia";
Lang.en.replay_level_0_desc = "Difficulty level: low\nEnemies: Mutant rats\nTips:\n- Keep moving, never let yourself get surrounded\n- Slower enemies are usually stronger\n\n\nThe wreck of a ship and local buildings I noticed the first time\nI was here are begging for some attention."
//"The wreck of a ship and local buildings I noticed\nthe first time I was here are begging for some attention.\nThe only obstacles are the nests of mutant rats. One rat\nis not, perhaps, much of a threat, but a bunch of\nthese on your ass and you're screwed. Finding a more\nsuitable armor than a plain leather jacked is on the top\nof my 'to do' list now. Pronto. That should get things\ngoing for me.";

Lang.en.replay_level_0_speech_0 = "\nIt'd be a good idea to search the neighborhood, there may be something\nworthwhile.";
Lang.en.replay_level_0_speech_1 = "\nOf course we first need to deal with the mutated rats, and there's plenty of them\nhere.";
Lang.en.replay_level_0_speech_2 = "\nI thought you may point to that obvious fact.";
Lang.en.replay_level_0_speech_3 = "\nTalk about pest control. Now, I need to quickly search the neighborhood and\nmove on before more rats come.";

Lang.pl.replay_level_0_name = "Gdyńska plaża";
Lang.pl.replay_level_0_desc = "Poziom trudności: niski\nPrzeciwnicy: Zmutowane szczury\nPorady:\n- Manewruj, nie pozwól się otoczyć.\n- Wolniejsi przeciwnicy zazwyczaj są silniejsi.\n\n\nTen zniszczony statek i okoliczne budynki zwróciły\nmoją uwagę, gdy byłem tu po raz pierwszy.\nAż się proszą o dokładniejsze sprawdzenie."

Lang.pl.replay_level_0_speech_0 = "\nDobrze byłoby przeszukać okolicę, może uda się znaleźć coś cennego.";
Lang.pl.replay_level_0_speech_1 = "\nOczywiście najpierw trzeba rozprawić się ze zmutowanymi szczurami,\nktórych tu pełno.";
Lang.pl.replay_level_0_speech_2 = "\nEch... nawet przez chwilę nie wątpiłem, że będzie inaczej.";
Lang.pl.replay_level_0_speech_3 = "\nSzczury, szczury i po szczurach. Trzeba szybko przeszukać okolicę i spadać,\nzanim przybędzie ich więcej.";

/*
Lang.pl.replay_level_0_name = "Gdyńska plaża";
Lang.pl.replay_level_0_desc = "(Misja powtórkowa)\n\nW tym zniszczonym statku oraz okolicach powinno leżeć\njeszcze całkiem sporo fantów.\n\nPoziom trudności: niski\nPrzeciwnicy: Szczury\nPorady:\n- Manewruj, nie pozwól się otoczyć\n- Wolniejsi przeciwnicy zazwyczaj są silniejsi"
Ten zniszczony statek i okoliczne budynki zwróciły\nmoją uwagę, gdy byłem tu po raz pierwszy. Aż się proszą\no dokładniejsze sprawdzenie.Jedynym problemem są\ngniazda zmutowanych szczurów. Pojedynczo nie są może\nniebezpieczne, ale gdy oblezie cię ich cała masa,\nto masz przesrane. Dlatego powinienem skombinować\njakąś w miarę szybką broń, a najlepiej byłoby,\ngdybym zaopatrzył się w pancerz lepszy,\nniż skórzana kurtka. Wtedy nie powinno być problemu.";
*/



Lang.en.replay_level_1_name = 'Street in Sopot';
Lang.en.replay_level_1_desc = "Difficulty level: low\nEnemies: Infected, Mutant rats\nTips:\n- Try to keep enemies at distance\n- Use terrain\n\n\nThe hoards of the Infected showing up here also mean\nthe number of collectors will be small. That means\nthe nearby buildings may be full of valuable loot."
//"The inevitable threat the local Infected pose also mean\nthe number of collectors will be small. That means\nthe nearby buildings may be full of valuable loot. Before I get\nround to checking the buildings, I need to eliminate some\nInfected and probably a few packs of mutated rats.\nRule number one – never let them surround you. To achieve\nthis, it's best to use natural barriers. The Infected aren't\nthe sharpest knives in the drawer, so before they get their\nheads around the ploy, it will be all over for them. I could\nalso use ranged weapon, but in that case one needs to\nmake sure they do not come too close.";

Lang.en.replay_level_1_speech_0 = "\nThere's still plenty of Infected here, Szron.";
Lang.en.replay_level_1_speech_1 = "\nChill out. We'll deal with them and then see what the local ruins have to hide.";
Lang.en.replay_level_1_speech_2 = "\nI guess you are right... If it is so dangerous out here, there probably aren't many\nlooters . Let's get going!";
Lang.en.replay_level_1_speech_3 = "\nAlright, it seems to have calmed down. Let's split up and search the area.";


Lang.pl.replay_level_1_name = 'Sopocka ulica';
Lang.pl.replay_level_1_desc = "Poziom trudności: niski\nPrzeciwnicy: Zarażeni, Szczury\nPorady:\n- Staraj się trzymać wrogów na dystans.\n- Wykorzystuj przeszkody terenowe.\n\n\nHordy Zarażonych nawiedzające tę okolicę gwarantują,\nże nie ma tu za wielu zbieraczy. Dam głowę,\nże tutejsze budynki są pełne wartościowych łupów."

/*
Lang.pl.replay_level_1_name = 'Sopocka ulica';
Lang.pl.replay_level_1_desc = "(Misja powtórkowa)\n\nOkoliczne budynki nie są bezpieczne, ale powinny zawierać\nsporo wartościowych łupów.\n\nPoziom trudności: niski\nPrzeciwnicy: Zarażeni\nPorady:\n- Staraj się trzymać wrogów na dystans\n- Wykorzystuj przeszkody terenowe"
"Hordy Zarażonych nawiedzające tę okolicę są jednocześnie\ngwarantem małej ilości zbieraczy, to pewne. Dam głowię,\nże tutejsze budynki mogą być pełne wartościowych łupów.\nOczywiście przed plądrowaniem należy pozbyć się\nnadmiaru martwiaków, a także band zmutowanych\nszczurów. Podstawowa zasada – nie dać się otoczyć.\nNajlepiej skorzystać z przeszkód terenowych,\nżeby to osiągnąć. Zarażeni nie są zbyt bystrzy, więc zanim\nrozkminią, co i jak, powinno być już po sprawie. Można też\nskorzystać z broni dystansowej, ale wtedy trzeba bardzo\nuważać, żeby nie podeszły zbyt blisko.";
*/

Lang.pl.replay_level_1_speech_0 = "\nNadal jest tu sporo Zarażonych, Szron.";
Lang.pl.replay_level_1_speech_1 = "\nSpokojnie. Poradzimy sobie z nimi i sprawdzimy, co kryją okoliczne ruiny.";
Lang.pl.replay_level_1_speech_2 = "\nW sumie racja... Skoro jest tu tak niebezpiecznie, pewnie nie było tu zbyt wielu\nszabrowników. Do dzieła!";
Lang.pl.replay_level_1_speech_3 = "\nDobra, chyba się uspokoiło. Rozdzielmy się i szybko przeszukajmy całą okolicę.";

Lang.en.replay_level_2_name = "Gdansk factory";
Lang.en.replay_level_2_desc = "Difficulty: moderate\nEnemies: Pirates, Infected\nTips:\n- Let your enemies attack each other\n\n\nThe neighborhood has some other interesting buildings, too.\nEach is a potential cash source, so it would be a shame not\nto check them.  It's a shame so many Infected and Pirates\nfrom the 7th are running around."
//"There are a few interesting buildings in the vicinity. Each is\na potential source of some cash, and it would be a shame\nto leave them be. The only problems are the Infected and\ngangs of pirates from the 7th. The latter are simple lads,\narmed in bowie knives at most. You can even forget about\nthem having a decent armor. Apart from the good old\nfashioned way of eliminating them, a quite clever solution is\nto get the Infected to attack them.\nAfter all, when two dogs fight...or something.";

Lang.en.replay_level_2_speech_0 = "\nI can see another run in with the Pirates form the 7th.";
Lang.en.replay_level_2_speech_1 = "\nWith the Infected, too. Listen, the neighboring buildings are full of  valuable stuff.\nIt is worth fighting for them.";
Lang.en.replay_level_2_speech_2 = "\nWe won! Eat shit you bastards form the 7th!";
Lang.en.replay_level_2_speech_3 = "\nDon't get too excited. We search the area and move on.";

Lang.pl.replay_level_2_name = "Gdańska fabryka";
Lang.pl.replay_level_2_desc = "Poziom trudności: umiarkowany\nPrzeciwnicy: Korsarze, Zarażeni\nPorady:\n- Napuszczaj przeciwników na siebie\n\n\nW okolicy tej fabryki jest też kilka innych, interesujących\nobiektów. Każdy z nich to potencjalne źródło kasy,\ndlatego aż grzech ich nie sprawdzić. Szkoda tylko,\nże tylu Zarażonych i Korsarzy z 7 się tam kręci."

/*
Lang.pl.replay_level_2_name = "Gdańska fabryka";
Lang.pl.replay_level_2_desc = "(Misja powtórkowa)\n\nW okolicy wciąż kręcą się korsarze z 7 i zarażeni, ale nie\nbrakuje tu również wartościowych rzeczy.\n\nPoziom trudności: umiarkowany\nPrzeciwnicy: Korsarze, Zarażeni\nPorady:\n- Napuszczaj przeciwników na siebie"
"W okolicy tej fabryki jest też kilka innych, interesujących\nobiektów. Każdy z nich to potencjalne źródło sporej kasy,\ndlatego aż grzech ich nie sprawdzić. Cały problem to\noczywiście kręcący się w okolicy Zarażenie, no i bandy\nKorsarzy z 7.Ci drudzy to zwykle proste łebki, więc będą\nmieli najwyżej swoje słynne kordelasy. Porządniejszego\npancerza też na nich nie uświadczysz. Poza\nstandardowymi metodami eliminacji całkiem sprytnym\nsposobem jest, gdy to tylko możliwe, skierowanie na nich\nZarażonych. Gdy dwóch się bije, tam trzeci wygrywa.\nCzy jakoś tak...";
*/

Lang.pl.replay_level_2_speech_0 = "\nCzeka nas kolejne starcie z 7...";
Lang.pl.replay_level_2_speech_1 = "\nZ Zarażonymi pewnie też. Słuchaj, sąsiednie budynki obfitują w cenne fanty.\nJest się o co bić.";
Lang.pl.replay_level_2_speech_2 = "\nWygraliśmy. Żryjcie gruz śmiecie z 7!";
Lang.pl.replay_level_2_speech_3 = "\nOlaf, nie ekscytuj się tak. Przeszukajmy szybko okolicę i spadajmy.";

Lang.en.replay_level_3_name = "The Dead Vistula";
Lang.en.replay_level_3_desc = "Difficulty level: moderate\nEnemies: Pirates, Shooters\nTips:\n- Try to eliminate shooters first\n\n\nAs it turns out, the area is filled with potentially interesting\nplaces where loot can be found. Unfortunately, the Pirates\nform 7th know that, too. This is actually the second reason\nwhy they come here- the first being the Brotherhood's policy\ntowards them."
//"The area is filled with potentially interesting places where\nloot can be found. Unfortunately, the corsairs form 7th\nknow that too. This is actually the second reason why they come\nhere - the first being the Brotherhood's policy towards them.\nThe more dangerous ones are those with firearms. They\nusually, however, are accompanied by bravos with bowie\nknives. In this scenario, it is best to first shoot the gunmen,\nor wait until they get close enough to feel the wrath of our\nfists, spears or hammers.";

Lang.en.replay_level_3_speech_0 = "\nIf I remember correctly, this neighborhood is on the list of Must See places\nin the collectors' book. We might find some goodies there.";
Lang.en.replay_level_3_speech_1 = "\nThat's great, Szron, but Pirates form the 7th are frequent guests here.";
Lang.en.replay_level_3_speech_2 = "\nIn that case let's help your fraction by cleaning up the streets.";
Lang.en.replay_level_3_speech_3 = "\nLooks like the Pirates lost the will to fight.";
Lang.en.replay_level_3_speech_4 = "\nThey shouldn't be bothering us for some time. Now, we can peacefully check\nthe nearby wrecks. I'm hoping for some decent loot.";

Lang.pl.replay_level_3_name = "Gdańskie nabrzeże";
Lang.pl.replay_level_3_desc = "Poziom trudności: umiarkowany\nPrzeciwnicy: Korsarze, Strzelcy\nPorady:\n- W pierwszej kolejności eliminuj strzelców\n\n\nJak się okazuje, w pobliżu nabrzeża aż roi się od\n interesujących miejsc, w których można\nznaleźć bardzo wartościowe fanty. Niestety, wiedzą o tym\ntakże Korsarze z 7. To jeden z powodów, dla którego\nmożna ich tu często spotkać. Innym jest chęć\nnękania ludzi z Bractwa Neptuna."

/*
Lang.pl.replay_level_3_name = "Gdańskie nabrzeże";
Lang.pl.replay_level_3_desc = "(Misja powtórkowa)\n\nJak się okazuje, w pobliżu nabrzeża można znaleźć ruiny\npełne wartościowych fantów. Niestety, kręcą się tutaj\nrównież korsarze z 7.\n\nPoziom trudności: umiarkowany\nPrzeciwnicy: Korsarze, Strzelcy\nPorady:\n- W pierwszej kolejności eliminuj strzelców"
"W tej okolicy aż roi się od potencjalnie interesujących\nmiejsc, w których można znaleźć bardzo wartościowe\nfanty. Niestety, wiedzą o tym także Korsarze z 7. Jest to\ndrugi powód, dla którego można ich tu często spotkać.\nPierwszym jest chęć nękania Bractwa, oczywiście. Bardziej\nniebezpieczni są ci z nich, którzy posiadają broń palną.\nZwykle jednak pojawiają się w asyście siepaczy\nz kordelasami. W takim starciu najlepiej albo\nzestrzelić na wstępie gości z klamkami, albo ukryć się\ni poczekać, aż będą w zasięgu naszych pięści, włóczni\nczy też młota.";
*/

Lang.pl.replay_level_3_speech_0 = "\nJeśli mnie pamięć nie myli, kilku zbieraczy chwaliło tę okolicę. Może być tu\nwiele wartościowych rzeczy.";
Lang.pl.replay_level_3_speech_1 = "\nWszystko fajnie, Szron, ale Korsarze z 7 nadal się tu kręcą.";
Lang.pl.replay_level_3_speech_2 = "\nW takim razie wspomóżmy twoją frakcje i posprzątajmy.";
Lang.pl.replay_level_3_speech_3 = "\nChyba Korsarze stracili już wolę walki.";
Lang.pl.replay_level_3_speech_4 = "\nPrzez jakiś czas nie powinni się nam naprzykrzać. Może teraz w spokoju\nsprawdzimy chociaż najbliższe wraki. Liczę na jakieś fajne fanty.";


// Nowe misje

Lang.en.level_4_name = "Unexpected meeting";
Lang.en.level_4_desc = "Difficulty level: moderate\nEnemies: Infected, Mutant rats, Ghouls\nTips:\n- Watch out for Ghouls, they are strong and tough\n- Pay attention to the surroundings - the enemy may crawl\nout from debris or wrecks\n\n\nWe have to leave the ship in a small port near Warsaw.\nI suppose this may be connected with the load the ship is\ncarrying. We will get to the bigger Covenant bases on foot.\nI might finally find out what Wiktoria wants from me. What's\nworse, the neighborhood is filled with all sorts of mutants."

Lang.en.level_4_speech_0 = "\nStop! Who's  there?!";
Lang.en.level_4_speech_1 = "\nChill, lady. Put down the gun.";
Lang.en.level_4_speech_2 = "\nCalm down, just calm down. Szron, your not-so-suave ways of handling\nwomen will not get us far.";
Lang.en.level_4_speech_3 = "\nHaha, very funny...ok, no time for push  and  shove. My name is Shron  and \nI have some business with the Covenant. To be specific, with a guy named,\num... Star Snake?";
Lang.en.level_4_speech_4 = "\nPfff... what? Are you certain?";
Lang.en.level_4_speech_5 = "\nWhen it comes to my sister, Wiktoria Czarnecka, nothing is certain. He may be\nher boyfriend, minion, whatever.";
Lang.en.level_4_speech_6 = "\nHa, ha, ha! The description is very accurate, I must say. I think you\nmisunderstood the name, but you've come to the right place. I'm the one you are\nlooking for.";
Lang.en.level_4_speech_7 = "\nMy name is Lidia SERPENSA Splitkowska and  I am a Covenant sergeant scout\nand sniper. My nickname means a snake in Latin.";
Lang.en.level_4_speech_8 = "\nThat makes it clear now. My name is Nikodem SZRON Czarnecki, a conqueror.\nMy name means an atmospheric fall.";
Lang.en.level_4_speech_9 = "\nI see you are enjoying yourselves and  all, but perhaps this could wait. I see\nmutants approaching. Lots of them.";
Lang.en.level_4_speech_10 = "\nI guess it's team work time, isn’t it?";
Lang.en.level_4_speech_11 = "\nTry not to get under me feet...too much.";
Lang.en.level_4_speech_12 = "\nWhat are these nasty beasts...? ";
Lang.en.level_4_speech_13 = "\nThese are Reptilians. It beats me why there are so many of them so far away\nfrom the city center.";
Lang.en.level_4_speech_14 = "\nWe will analyze this after we kill them, shall we?";
Lang.en.level_4_speech_15 = "\nI think we should enjoy some peace for a while.";
Lang.en.level_4_speech_16 = "\nGreat. Going back to our previous conversation- what's with the Reptilians?";
Lang.en.level_4_speech_17 = "\nThey are a new type of mutants that have been bugging the Covenant recently.\nIt seems they lived underground for a long time, and are now starting to surface\non the ground.";
Lang.en.level_4_speech_18 = "\nAre they the reason why I have traveled thru half of Poland ?";
Lang.en.level_4_speech_19 = "\nRight, kiddo. Wiktoria asked me to check one place out. She promised me some\nbackup. I did not expect her to send her own brother.";
Lang.en.level_4_speech_20 = "\nSplendid.. What dirty old hole are we going to venture into?";
Lang.en.level_4_speech_21 = "\nWARSAW METRO, This is the best place to get more leads on Reptilians.\nA big troop would have had to deal with the Reptilians around every corner...";
Lang.en.level_4_speech_22 = "\n…while a small one has a pretty good chance of passing thru unnoticed. This is\nmy least favorite type of plan.";
Lang.en.level_4_speech_23 = "\n Do you have a choice?";
Lang.en.level_4_speech_24 = "\nNot particularly.";
Lang.en.level_4_speech_25 = "\nDo you have any sensible weapon? If not, get yourselves a QUIET one...";

Lang.pl.level_4_name = 'Niespodziewane spotkanie';
Lang.pl.level_4_desc = "Poziom trudności: umiarkowany\nPrzeciwnicy: Zarażeni, Zmutowane szczury, Ghule\nPorady:\n- Uważaj na Ghule, są silne i wytrzymałe.\n- Obserwuj otoczenie. Przeciwnicy mogą wypełznąć zza\n  rumowisk i wraków.\n\n\nMusimy opuścić statek w małym porcie pod Warszawą.\nPodejrzewam, że ma to związek z przewożonym ładunkiem.\nDo większych baz Przymierza pójdziemy na piechotę. Może\ntam dowiem się wreszcie, czego chce ode mnie Wiktoria.\nNa domiar złego okolica pełna jest różnych mutantów."

Lang.pl.level_4_speech_0 = "\nStać! Kto idzie?!";
Lang.pl.level_4_speech_1 = "\nWyluzuj paniusiu. Odłóż tę spluwę.";
Lang.pl.level_4_speech_2 = "\nSpokojnie, tylko spokojnie.\nSzron, przez twój brak obycia z kobietami daleko nie zajedziemy.";
Lang.pl.level_4_speech_3 = "\nBardzo śmieszne... dobra, szkoda czasu na przepychanki. Jestem Szron\ni mam sprawę do Przymierza. Konkretnie do kolesia zwanego, em...\nGwieździstym Wężem?";
Lang.pl.level_4_speech_4 = "\nPfff... słucham? Jesteś pewien?";
Lang.pl.level_4_speech_5 = "\nGdy chodzi o moją siostrę, Wiktorię Czarnecką, nie można być niczego\npewnym. To może być jej chłopak, podnóżek, cokolwiek.";
Lang.pl.level_4_speech_6 = "\nHa, ha, ha! Rzeczywiście, jesteś dokładnie taki jak opowiadała. Źle zrozumiałeś,\nale mimo tego dobrze trafiłeś. To mnie szukasz.";
Lang.pl.level_4_speech_7 = "\nNazywam się Lidia SERPENSA Splitkowska jestem zwiadowcą i strzelcem\nwyborowym w Przymierzu w stopniu sierżanta. Mój pseudonim oznacza „węża”\npo łacinie.";
Lang.pl.level_4_speech_8 = "\nNo i wszystko jasne. Nikodem SZRON Czarnecki, pogromca. Moja ksywa\noznacza opad atmosferyczny.";
Lang.pl.level_4_speech_9 = "\nWidzę, że miło wam się rozmawia i w ogóle, ale może przełożymy tę rozmowę\nna później. Widzę zbliżające się mutki. Sporo ich.";
Lang.pl.level_4_speech_10 = "\nChyba nie pozostaje nam nic innego jak współpracować, prawda?";
Lang.pl.level_4_speech_11 = "\nPostarajcie się nie plątać mi się pod nogami... za bardzo.";
Lang.pl.level_4_speech_12 = "\nCo to za paskudne szkaradziejstwa...?";
Lang.pl.level_4_speech_13 = "\nTo Reptilianie. Tylko skąd ich tylu tak daleko od centrum?";
Lang.pl.level_4_speech_14 = "\nMoże zastanowimy się nad tym jak już ich zabijemy, dobra?";
Lang.pl.level_4_speech_15 = "\nMyślę, że na jakiś czas mamy spokój.";
Lang.pl.level_4_speech_16 = "\nŚwietnie. W takim razie wróćmy do tematu – o co chodzi z tymi Reptilianami?";
Lang.pl.level_4_speech_17 = "\nTo nowy gatunek mutantów sprawiający ostatnio wiele problemów Przymierzu.\nWydaje się, że bardzo długo żyły wyłącznie pod ziemią, a teraz wyłażą\nna powierzchnię.";
Lang.pl.level_4_speech_18 = "\nCzy to z ich powodu miałem przebyć pół Polski?";
Lang.pl.level_4_speech_19 = "\nZgadłeś bystrzaku. Wiktoria prosiła mnie bym zbadała pewne miejsce.\nObiecała wsparcie. Nie sądziłam, że przyśle swojego brata.";
Lang.pl.level_4_speech_20 = "\nCudownie... Do jakiej paskudnej dziury idziemy?";
Lang.pl.level_4_speech_21 = "\nWARSZAWSKIE METRO. To najlepsze miejsce by znaleźć wskazówki\nna temat Reptilian. Duży oddział byłby zmuszony co i raz ścierać się\nz Reptilianami...";
Lang.pl.level_4_speech_22 = "\n...natomiast mały ma sporą szansę na przemknięcie niepostrzeżony.\nJak ja nie znoszę takich planów.";
Lang.pl.level_4_speech_23 = "\nMasz jakiś wybór?";
Lang.pl.level_4_speech_24 = "\nNiespecjalnie.";
Lang.pl.level_4_speech_25 = "\nMacie jakiś sensowny sprzęt? Jeśli nie, to zorganizujcie sobie CICHĄ broń...";

Lang.en.replay_level_4_name = "Streets of Warsaw ";
Lang.en.replay_level_4_desc = "Dificulty level: moderate\nEnemies: Infected, Mutant rats, Ghouls\nTips:\n- Watch out for Ghouls, they are strong and tough\n- Enemies may crawl out from debris or wrecks\n\n\nWarsaw was a rich city, so despite the high number of\ncollectors, you can still find some precious booty. Too bad\nmutants are just as plentiful here."

Lang.en.replay_level_4_speech_0 = "\nOnce we get the coast clear we can take the loot left by the local foragers.";
Lang.en.replay_level_4_speech_1 = "\nI would not expect to find much...";
Lang.en.replay_level_4_speech_2 = "\nIn that case we will go thru the local buildings in search for some booty.";
Lang.en.replay_level_4_speech_3 = "\nYou didn't do so bad, I must say.";
Lang.en.replay_level_4_speech_4 = "\nDitto. Let's grab what we came here for and  run.";

Lang.pl.replay_level_4_name = "Warszawska ulica";
Lang.pl.replay_level_4_desc = "Poziom trudności: umiarkowany\nPrzeciwnicy: Zmutowane szczury, Zarażeni, Ghule,\nReptilianie\nPorady:\n- Uważaj na Ghule, są silne i wytrzymałe.\n- Ghule mogą wypełznąć zza rumowisk i wraków.\n\n\nWarszawa była bardzo bogatym miastem, dlatego mimo tak\nwielkiej ilości zbieraczy nadal można tu natrafić na bardzo\ncenne znaleziska. Szkoda, że mutantów w tych okolicach\ndostatek."

Lang.pl.replay_level_4_speech_0 = "\nGdy oczyścimy ten teren możemy w nagrodę zabrać zapasy, które ukrywają\nw tej okolicy nasi zbieracze.";
Lang.pl.replay_level_4_speech_1 = "\nNa wiele nie liczę...";
Lang.pl.replay_level_4_speech_2 = "\nWtedy przeszukamy okoliczne budynki i zobaczymy, co się trafi.";
Lang.pl.replay_level_4_speech_3 = "\nPoszło wam nie najgorzej.";
Lang.pl.replay_level_4_speech_4 = "\nWzajemnie. Bierzmy to po co przyszliśmy i spadajmy.";

Lang.en.level_5_name = "Reconnaissance";
Lang.en.level_5_desc = "Dificulty level: moderate\nEnemies: Reptilians, Reptile-humanoids\nTips:\n- Consider buying a quiet weapon\n- A loud gun will at track unwanted enemy attention\n  to the user\n\n\nWe are going, thanks to Wiktoria, to the underground metro\ntunnel. Reptilians with poor sight but with well-developed\nhearing live here. It is a good idea to buy a gun that make\nleast noise."

Lang.en.level_5_speech_0 = "\nAll is calm...not so bright.";
Lang.en.level_5_speech_1 = "\nOlaf... Eh, forget it. Sergeant! Where is this place we're supposed to plunder?";
Lang.en.level_5_speech_2 = "\nShh! Shut that pie-hole a little. Our target it 5 kilometers north-west. We have\nto take this tunnel, according to the guidelines given by Wiktoria.";
Lang.en.level_5_speech_3 = "\nTrue, this is the Warsaw metro after all – not many options here.\nLet's go, sergeant!";
Lang.en.level_5_speech_4 = "\nAnd the name is LIDIA. Try to remember, will you?";
Lang.en.level_5_speech_5 = "\nLidia, we have a problem...";
Lang.en.level_5_speech_6 = "\n…?";
Lang.en.level_5_speech_7 = "\nMutants are approaching..possibly Reptilians. I think there's quite a few of them.\nThe firs group should come from the left. Let's get ready to defend ourselves.";
Lang.en.level_5_speech_8 = "\nI'm starting to understand and  why Wiktoria sent you to help.\nAnd now, let's get to work!";
Lang.en.level_5_speech_9 = "\nWhat is it now?";
Lang.en.level_5_speech_10 = "\nTo be honest, I do not know. They appear to be half humans- half Reptilians.";
Lang.en.level_5_speech_11 = "\nIn other words, Reptile-humanoids. Now, lets focus on avoiding their spears.";
Lang.en.level_5_speech_12 = "\nPhew! That was a good one!";
Lang.en.level_5_speech_13 = "\nBullshit. We were just lucky because they underestimated us. They have chosen\nthe ambush place really well.";
Lang.en.level_5_speech_14 = "\nIt is their territory. It is only natural that is works for their advantage. Regardless,\nI am more worried about..what was it that you called them?";
Lang.en.level_5_speech_15 = "\nReptile-humanoids.";
Lang.en.level_5_speech_16 = "\nLet it be. They appear to be in command of the bunch and  it looks like they are\nslightly too intelligent for mutants.";
Lang.en.level_5_speech_17 = "\nTrue. They were also using weapons, though their gear was far from best.\nIt is possible they made it themselves.";
Lang.en.level_5_speech_18 = "\nLet's not get carried away. They seem bright, but we are using Ghoul-meter\nto asses this. Which means they still aren't too bright.";
Lang.en.level_5_speech_19 = "\nI hope you are right. Let's go. These tunnels are starting to get on my nerves.";

Lang.pl.level_5_name = 'Zwiad';
Lang.pl.level_5_desc = "Poziom trudności: umiarkowany\nPrzeciwnicy: Reptilianie, Reptoludzie\nPorady:\n- Rozważ zakup broni z jak największym wytłumieniem.\n- Broń z małym wytłumieniem przyciągnie pobliskich\n przeciwników.\n\n\nIdziemy, dzięki Wiktorii, do podziemnych tuneli metra. Żyją tu\nReptilianie, którzy mają bardzo słaby wzrok, ale świetny\nsłuch. Warto więc kupić jakąś nie robiącą zbytniego hałasu\nbroń."

Lang.pl.level_5_speech_0 = "\nCiemno wszędzie, głucho wszędzie...";
Lang.pl.level_5_speech_1 = "\nOlaf... A nieważne. Pani sierżant! Gdzie jest miejsce które mamy splądrować?";
Lang.pl.level_5_speech_2 = "\nCiii! Przytkaj się trochę. Nasz cel jest pięć kilometrów na północny zachód.\nMusimy iść tym tunelem, tak mówią materiały od Wiktorii.";
Lang.pl.level_5_speech_3 = "\nFakt, to warszawskie metro – tu nie ma zbyt wielu możliwości.\nTo idziemy, pani sierżant!";
Lang.pl.level_5_speech_4 = "\nI mam imię. LIDIA. Zapamiętajcie to sobie.";
Lang.pl.level_5_speech_5 = "\nLidia, mamy kłopot...";
Lang.pl.level_5_speech_6 = "\n…?";
Lang.pl.level_5_speech_7 = "\nZbliżają się mutanty... pewnie ci Reptilianie. Sądzę, że całkiem sporo.\nPierwsza grupa nadejdzie z lewej. Szykujmy się do obrony.";
Lang.pl.level_5_speech_8 = "\nZaczynam rozumieć, czemu Wiktoria posłała właśnie po ciebie.\nA teraz, do roboty!";
Lang.pl.level_5_speech_9 = "\nCo tym razem?";
Lang.pl.level_5_speech_10 = "\nPrzyznam szczerze – nie mam pojęcia. To jacyś pół ludzie, pół Reptilianie.";
Lang.pl.level_5_speech_11 = "\nCzyli w skrócie Reptoludzie. Teraz skupcie się przede wszystkim na unikaniu\nich włóczni.";
Lang.pl.level_5_speech_12 = "\nUff! Dobrze jest!";
Lang.pl.level_5_speech_13 = "\nGówno prawda. Mieliśmy farta, że nie docenili naszych możliwości.\nMiejsce na zasadzkę wybrali świetne.";
Lang.pl.level_5_speech_14 = "\nTo ich teren. Wiadomo, że mają przewagę. Mimo tego bardziej martwią mnie\nci... Jak ich nazwałeś?";
Lang.pl.level_5_speech_15 = "\nReptoludzie.";
Lang.pl.level_5_speech_16 = "\n Niech będzie. Wydawali się dowodzić tą zgrają i byli zbyt inteligentni jak\nna mutanty.";
Lang.pl.level_5_speech_17 = "\nRacja. Posługiwali się bronią, choć niezbyt dobrą co prawda. Możliwe nawet,\nże wykonali ją samodzielnie.";
Lang.pl.level_5_speech_18 = "\nNie przesadzajmy. Wydaje się, że są mądre na poziomie Ghula.\nCzyli nie bardzo.";
Lang.pl.level_5_speech_19 = "\nObyś miał rację. Chodźmy dalej. Te tunele metra zaczynają mnie już irytować.";

Lang.en.replay_level_5_name = "Świętokrzyska Metro";
Lang.en.replay_level_5_desc = "Dificulty level: high\nEnemies: Reptilians, Reptomen\nTips:\n- Consider buying a quiet weapon\n- A loud gun will attract unwanted enemy attention.\n- Reptilians have greater attack range than Reptilians.\n\n\nMy favorite sergeant recommends we venture into\nthe illustrious underground. We need to prepare ourselves\nbeforehand and for the trip. A quiet weapon with a big range\nis definitely on the must-have list."
// Reptile-humanoids

Lang.en.replay_level_5_speech_0 = "\nWhat the hell are we doing back here?";
Lang.en.replay_level_5_speech_1 = "\nWhat about it? You've got some bad case of extra vials? This route can take us\nto some scarcely visited places.";
Lang.en.replay_level_5_speech_2 = "\nGreat. It had better be worth the clash with so many mutants.";
Lang.en.replay_level_5_speech_3 = "\n…looks like we're done here.  Take us forward!";
Lang.en.replay_level_5_speech_4 = "\nOk, ok. You will now see that the trip was worth your while.";

Lang.pl.replay_level_5_name = "Metro Świętokrzyska";
Lang.pl.replay_level_5_desc = "Poziom trudności: wysoki\nPrzeciwnicy: Reptilianie, Reptoludzie\nPorady:\n- Rozważ zakup broni z jak największym wytłumieniem.\n- Broń z małym wytłumieniem przyciągnie pobliskich\n przeciwników.\n- Reptoludzie mają większy zasięg ataku od Reptilian.\n\n\nMoja ulubiona Pani sierżant zaleca ponowne odwiedzenie\ntych niezwykle urokliwych podziemi. Trzeba się solidnie\nprzygotować. Cicha broń z dużą siłą rażenia to coś, co\nwarto zabrać."

Lang.pl.replay_level_5_speech_0 = "\nPo cholerę tu znowu jesteśmy?";
Lang.pl.replay_level_5_speech_1 = "\nA co? Narzekasz na nadmiar violek? Możemy się tędy dostać do kilku rzadko\nodwiedzanych miejsc.";
Lang.pl.replay_level_5_speech_2 = "\nSuper. Oby to było warte starcia z tyloma mutkami.";
Lang.pl.replay_level_5_speech_3 = "\n...i po sprawie. Prowadź.";
Lang.pl.replay_level_5_speech_4 = "\nJuż, już. Zobaczycie, że gra była warta świeczki.";

Lang.en.level_6_name = "Ambush in the dark";
Lang.en.level_6_desc = "Dificulty level: moderate\nEnemies: Ghouls, Reptilians, Reptomen, Pandors\nTips:\n- Buy long-range weapon\n- Pandoras' explosion diffuses acid that hurts everyone\nin range\n\n\nI changed my mind. Visiting the Warsaw underground metro\nwas one of the worst tasks I had every had the displeasure\nto tackle.\nThe target is near,  and  we've been enjoying some peace\nsince the last clash. That is a bad sign. I found some\nunsettling marks- we may be coming across Padoras."

Lang.en.level_6_speech_0 = "\nWe're here.";
Lang.en.level_6_speech_1 = "\nFinally. I am really enjoying your company, and all, but it is cold as hell, it stinks\nand those Reptilians...";
Lang.en.level_6_speech_2 = "\nOlaf, chill. You want a promotion, you gotta earn it.";
Lang.en.level_6_speech_3 = "\nLook at those ARMORED DOORS. Even you will notice this is a tad too much\nfor a regular tech worker corridor.";
Lang.en.level_6_speech_4 = "\nThese don't look like anything short of a C4 can deal with them.";
Lang.en.level_6_speech_5 = "\nHold your horses. Wiktoria gave me the right KEY.";
Lang.en.level_6_speech_6 = "\nIsn’t there a thing left in this world which she didn't lay her dirty hands on yet?";
Lang.en.level_6_speech_7 = "\nStop it. She is working for the cause.";
Lang.en.level_6_speech_8 = "\nTrue. The cause. Her own cause.";
Lang.en.level_6_speech_9 = "\nStop talking crap. They are coming! Reptile-humanoids again.";
Lang.en.level_6_speech_10 = "\nFuck my life...the Matron.";
Lang.en.level_6_speech_11 = "\nIt's a trap!";
Lang.en.level_6_speech_12 = "\nWe have to focus on eliminating the Pandoras before they offer us an ACID bath.";
Lang.en.level_6_speech_13 = "\nWhile we're at it, we have to watch out for these lizard-like creatures, so they do\nnot stab us to death with their sharpened claws.";
Lang.en.level_6_speech_14 = "\nNow's our chance. Come and  make sure to lock the door.";
Lang.en.level_6_speech_15 = "\nAh...That looks like a pretty decent  nuclear shelter and laboratory mix.";
Lang.en.level_6_speech_16 = "\nIt was lab and abandoned in a big hurry a few months ago, tops. We, too,\nshould hurry up. No time for sightseeing.";
Lang.en.level_6_speech_17 = "\nWe are interested in the data from these computers...";
Lang.en.level_6_speech_18 = "\nWe are interested in the data from these computers...";
Lang.en.level_6_speech_19 = "\nHere it is! I was able to retrieve a lot of data, unfortunately most of it is ciphered.";
Lang.en.level_6_speech_20 = "\nGet anything you can, alright?";
Lang.en.level_6_speech_21 = "\nThe test results are very promising. Someone has been snooping around\nthe area, so move towards my lab pronto.";
Lang.en.level_6_speech_22 = "\nAll this conspiracy-game is becoming needless. Get rid of all excess weight\nbefore you go to CRACOW.";
Lang.en.level_6_speech_23 = "\nWell isn't this Izydor Iwan PIOTRKOWSKI! He is a famous microbiologist and\nMoscow University professor. He is the star of many conspiracy theories.";
Lang.en.level_6_speech_24 = "\nI don't even want to know how you know all this. Let's focus on the specifics.\nWhat next?";
Lang.en.level_6_speech_25 = "\nTo finish this evermore interesting task, we have to travel to Cracow. I have\nthe coordinates of the place he was talking about.\nFirst, however, I recommend dropping by at Mink Mazowiecki.";
Lang.en.level_6_speech_26 = "\n I enjoy sightseeing trips, but what for would we go there?";
Lang.en.level_6_speech_27 = "\nOlaf, we could find there someone to help us decipher the remaining data.\nThe decision is up to you. It is either MINSK MAZOWIECKI and an adventure, or\na trip to CRACOW without our homework.";

Lang.pl.level_6_name = 'Starcie w ciemnościach';
Lang.pl.level_6_desc = "Poziom trudności: umiarkowany\nPrzeciwnicy: Ghule, Reptilianie, Reptoludzie, Pandory\nPorady:\n- Kup broń dystansową.\n- Pandory wybuchają kwasem, raniąc wszystkich w pobliżu.\n\n\nZmieniłem zdanie. Wizyta w podziemiach warszawskiego\nmetra to jednak jedno z najgorszych zadań jakimi miałem\nnieprzyjemność się zajmować.\nDo celu już blisko, a od poprzedniej potyczki mamy\nwzględny spokój. To bardzo zły znak. Znalazłem bardzo\nniepokojące ślad – być może natrafimy na Pandory."

// \n- Matrona sama nie zaatakuje, ale ją także trzeba zabić. //

Lang.pl.level_6_speech_0 = "\nJesteśmy na miejscu.";
Lang.pl.level_6_speech_1 = "\nNareszcie. Nie mam nic do waszego towarzystwa, ale zimno tu jak diabli,\nśmierdzi i jeszcze ci Reptilianie...";
Lang.pl.level_6_speech_2 = "\nOlaf, wyluzuj. Na awans trzeba zapracować.";
Lang.pl.level_6_speech_3 = "\nPatrzcie na te PANCERNE DRZWI. Nawet wy zauważycie, że to trochę za dużo\nzabezpieczeń jak na zwykły korytarz dla pracowników technicznych.";
Lang.pl.level_6_speech_4 = "\nNie wyglądają na takie które da się rozwalić bez C4.";
Lang.pl.level_6_speech_5 = "\nSpokojnie. Wiktoria dała mi odpowiedni KLUCZ.";
Lang.pl.level_6_speech_6 = "\nCzy jest coś, na czym jeszcze nie położyła swoich lepkich łap?";
Lang.pl.level_6_speech_7 = "\nPrzestań. Ona pracuje dla sprawy.";
Lang.pl.level_6_speech_8 = "\nMasz rację. Dla sprawy. Swojej własnej.";
Lang.pl.level_6_speech_9 = "\nPrzestań jojczyć. Nadchodzą! Znowu Reptoludzie!";
Lang.pl.level_6_speech_10 = "\nJa pierdole... Matrona.";
Lang.pl.level_6_speech_11 = "\nTo pułapka!";
Lang.pl.level_6_speech_12 = "\nMusimy skupić się na eliminacji Pandor zanim zafundują nam KWASOWĄ\nkąpiel.";
Lang.pl.level_6_speech_13 = "\nTrzeba przy tym uważać by te jaszczurze paskudy nie zadźgały nas swoimi\nzaostrzonymi patykami.";
Lang.pl.level_6_speech_14 = "\nTeraz mamy szansę. Chodźcie i koniecznie zamknijcie za sobą drzwi.";
Lang.pl.level_6_speech_15 = "\nO... Wygląda jak całkiem przyzwoity schron przeciwatomowy połączony\nz laboratorium.";
Lang.pl.level_6_speech_16 = "\nOpuszczony w wielkim pośpiechu maksymalnie kilka miesięcy temu.\nMy też powinniśmy się pospieszyć. Nie mamy czasu na zwiedzanie.";
Lang.pl.level_6_speech_17 = "\n Interesują nas dane z tych komputerów...";
Lang.pl.level_6_speech_18 = "\nCzy ja wiem? Mnie naprawdę ciekawią te zwłoki. Zginęli od nadmiaru żelaza\nw organizmie... Mają służbowe legitymacje dawnej Agencji Bezpieczeństwa\nWewnętrznego.";
Lang.pl.level_6_speech_19 = "\nJest! Odzyskałam sporo danych, niestety w większości są zaszyfrowane.";
Lang.pl.level_6_speech_20 = "\nOdtwórz, co możesz, dobra?";
Lang.pl.level_6_speech_21 = "\nWyniki badań są całkiem obiecujące. Ktoś węszy w  tej okolicy dlatego\nnatychmiast ruszajcie do mojego laboratorium.";
Lang.pl.level_6_speech_22 = "\nCała ta zabawa w konspiracje powoli przestaje być potrzebna.\nPozbądźcie się balastu przed wyruszeniem do KRAKOWA.";
Lang.pl.level_6_speech_23 = "\nTo przecież Izydor Iwan PIOTRKOWSKI! Znany mikrobiolog i profesor\nUniwersytetu Moskiewskiego. Bohater wielu teorii spiskowych.";
Lang.pl.level_6_speech_24 = "\nNawet nie chcę wiedzieć skąd to wiesz. Skupmy się na konkretach. Co teraz?";
Lang.pl.level_6_speech_25 = "\nŻeby zakończyć tę coraz bardziej interesującą sprawę, musimy ruszać\ndo Krakowa. Mam koordynaty miejsca o którym mówił. Najpierw jednak\nzalecam wyprawę w okolicę Mińska Mazowieckiego. ";
Lang.pl.level_6_speech_26 = "\nLubię zwiedzać. Tylko po kiego mamy tam jechać?";
Lang.pl.level_6_speech_27 = "\nOlaf, tam na pewno znajdziemy kogoś kto będzie w stanie rozszyfrować\nresztę danych. Decyzja należy do Was. Albo MIŃSK MAZOWIECKI i przygoda,\nalbo jedziemy do KRAKOWA bez odrobionej pracy domowej.";

Lang.en.replay_level_6_name = "Wilson Square Metro";
Lang.en.replay_level_6_desc = "Dificulty level: high\nEnemies: Ghouls, Reptilians, Reptomen, Pandoras\nTips:\n- Buy long-range weapon\n- Pandoras' explosion diffuses acid that hurts everyone\nin range\n\n\nIt would be a good idea to go thru both the shelter and\nthe area around it. After all, who know how many goodie\nwe could find."

Lang.en.replay_level_6_speech_0 = "\nMaybe we won't find much data here, but God knows what loot these fuckers\nare hiding in the vicinity.";
Lang.en.replay_level_6_speech_1 = "\nI'm sure these will be the Matornas, as there are Pandoras approaching.\nReptile-humanoids won't go easy on us, either.";
Lang.en.replay_level_6_speech_2 = "\nPerhaps we could set them on to one another.";
Lang.en.replay_level_6_speech_3 = "\nEveryone's dead and there are no Matrons in the vicinity. This is our chance to\ngo thru the garbage.";

Lang.pl.replay_level_6_name = "Metro Plac Wilsona";
Lang.pl.replay_level_6_desc = "Poziom trudności: wysoki\nPrzeciwnicy: Ghule, Reptilianie, Reptoludzie, Pandory\nPorady:\n- Kup broń dystansową.\n- Pandory wybuchają kwasem, raniąc wszystkich w pobliżu.\n\n\nWarto byłoby dokładnie przeszukać zarówno sam schron\njak i całą okolicę. W końcu kto wie jak wiele skarbów się tu\nkryje."

Lang.pl.replay_level_6_speech_0 = "\nMoże nie znajdziemy tu większej ilości danych, ale kto wie jakie łupy skryli\nw tej okolicy ci zasrańcy.";
Lang.pl.replay_level_6_speech_1 = "\n Na pewno jakieś Matrony, bo nadciągają Pandory. Jaszczuroludzie też\nnam raczej nie odpuszczą.";
Lang.pl.replay_level_6_speech_2 = "\nMoże uda się je napuścić na siebie nawzajem.";
Lang.pl.replay_level_6_speech_3 = "\nWszyscy umarli, a i w pobliżu nie ma żadnych Matron. Mamy więc szansę\nprzeszukać ten śmietnik.";


Lang.en.level_7_name = "Minsk forest mystery";
Lang.en.level_7_desc = "Dificulty level: high\nEnemies: Mutated rats, Infected, Ghouls,\nMutants with Tentacle, Mutants with Claw\nTips:\n- Watch your back\n- Use your ally help\n- Lidia's ability can heal your allies too\n\n\nSerpensa says we can find a deciphering man that could\nhelp us in the Minks Mazowiecki forest. There is catch,\nthough- everything is confidential until we get there."

Lang.en.level_7_speech_0 = "\nWe're getting close, aren't we? Could you enlighten us as to the details of\nour trip?";
Lang.en.level_7_speech_1 = "\nAll right, let it be. But remember - this it TOP SECRET.";
Lang.en.level_7_speech_2 = "\nI have arranged a meeting with a deciphering man who had worked\nfor Military Intelligence before the war. He was lucky enough to be inside\nCHAMELEON-1 when the Violet Fall broke out. The existence of this\nunderground complex was a military secret.";
Lang.en.level_7_speech_3 = "\nSo this is where these guys come from.";
Lang.en.level_7_speech_4 = "\nMany of the first Covenant members...hmm.. excuse me?";
Lang.en.level_7_speech_5 = "\nWhat are you talking about, old man?";
Lang.en.level_7_speech_6 = "\nAbout a kilometer away from us there are two guys. One of them is wounded.\nThey are doing their best to remain unnoticed. I believe these may be your\nChameleon friends.";
Lang.en.level_7_speech_7 = "\nHa, ha. I love working with you, Szron.";
Lang.en.level_7_speech_8 = "\nI am sergeant Lidia Splitkowska! I come on behalf of the Covenant.\nWe were supposed to meet lieutenant Rydz in sector F4.";
Lang.en.level_7_speech_9 = "\nIt is you! Thank God! I am lieutenant Mariusz Kos.\nMy comrade is severelywounded. In 15 minutes there will be backup here,\nthey have a medic with them...";
Lang.en.level_7_speech_10 = "\n...however, there is a big bunch of mutants approaching, including Ghouls.\nWe will help you. Cover us, they are coming already.";
Lang.en.level_7_speech_11 = "\nGhouls. I hate Ghouls.";
Lang.en.level_7_speech_12 = "\nCHAMELEON came, took their people  and  the data,  and  left us here.\nNow we camping in the woods like a fucking boy scout group.";
Lang.en.level_7_speech_13 = "\nDon't complain, Szron, enjoy your baked potatoes from the fire.\nThat is much better than wandering around the metro underground tunnels.";
Lang.en.level_7_speech_14 = "\nSo what? Did you want to go with a bag over your head to their headquarters?\nThe basic rule is: we meet in predetermined, neutral places.";
Lang.en.level_7_speech_15 = "\nYeah, and playing scouter... Ah! Someone's coming.";
Lang.en.level_7_speech_16 = "\nHello sergeant Kos.";
Lang.en.level_7_speech_17 = "\nOnce again, let me thank you for your help. Rydz has managed to decipher\nquite a lot of data. I have it with us.";
Lang.en.level_7_speech_18 = "\nGreat! Thank you in the name of the Covenant.";
Lang.en.level_7_speech_19 = "\nWhat are these documents?";
Lang.en.level_7_speech_20 = "\nHmm... What we have here is mostly documentation on experiments on formulas\ncausing... hmm... direction mutation.";
Lang.en.level_7_speech_21 = "\nDo you mean changing people into mutants?";
Lang.en.level_7_speech_22 = "\nAmong others. The point of this experiment was to control this process.\nAfter such formula was injected, it would trigger rage attack, for example...";
Lang.en.level_7_speech_23 = "\nWe'll have plenty to read  and  think about. Now, let's get out of here.\nI packed some baked potatoes for the road.";

Lang.pl.level_7_name = 'Tajemnica Mińskiego lasu';
Lang.pl.level_7_desc = "Misja dodatkowa\nPoziom trudności: wysoki\nPrzeciwnicy: Zmutowane szczury, Zarażeni, Ghule,\nMutanci z Macką, Mutanci z Pazurem\nPorady:\n- Nie daj się zajść od tyłu.\n- Skorzystaj z pomocy sojusznika.\n- Umiejętność Lidii leczy również sojuszników.\n\n\nSerpensa twierdzi, że gdy wybierzemy się do lasu\nw okolicach Mińska Mazowieckiego spotkamy tam\ndeszyfranta, który możne nam pomóc. Haczyk jest jeden\n– wszelkie szczegóły są tajne, póki tam nie dotrzemy."

Lang.pl.level_7_speech_0 = "\nJesteśmy już całkiem blisko, prawda? Mogłabyś wprowadzić nas w szczegóły\nnaszej wycieczki?";
Lang.pl.level_7_speech_1 = "\nNiech Ci będzie. Pamiętajcie tylko, że to ŚCIŚLE TAJNE.";
Lang.pl.level_7_speech_2 = "\nZaaranżowałam nam spotkanie z deszyfrantem pracującym przed wojną\nw Wojskowych Służbach Informacyjnych. Miał on szczęście przebywać\nw trakcie Violet Falla w KAMELEONIE-1. Istnienie tego podziemnego\nkompleksu było objęte tajemnicą wojskową.";
Lang.pl.level_7_speech_3 = "\nCzyli stamtąd są ci goście.";
Lang.pl.level_7_speech_4 = "\nWielu pierwszych członków Przymierza... Hmm... Słucham?";
Lang.pl.level_7_speech_5 = "\nO czym ty mówisz, stary?";
Lang.pl.level_7_speech_6 = "\nJakiś kilometr przed nami jest dwóch kolesi. Jeden jest ranny.\nStarają się pozostać niezauważeni. To pewnie ci wasi przyjaciele z Kameleona.";
Lang.pl.level_7_speech_7 = "\nHa, ha. Uwielbiam z tobą współpracować Szron.";
Lang.pl.level_7_speech_8 = "\n Jestem sierżant Lidia Splitkowska! Przybywam z ramienia Przymierza.\nMieliśmy spotkać się z porucznikiem Rydzem w sektorze F4.";
Lang.pl.level_7_speech_9 = "\nTo wy! Na szczęście! Jestem sierżant Mariusz Kos. Mój towarzysz został ciężko\nranny. Za kwadrans będzie tu wsparcie, mają medyka...";
Lang.pl.level_7_speech_10 = "\n ...jednak w tę stronę nadciąga wielka banda mutantów, w tym Ghule.\nPomożemy wam. Osłaniaj nas, bo już się zbliżają.";
Lang.pl.level_7_speech_11 = "\nGhule. Nienawidzę Ghuli.";
Lang.pl.level_7_speech_12 = "\nKAMELEON przyszedł, zabrał swoich, zabrał dane, a nas zostawił.\nI teraz obozujemy sobie w lesie jak jakaś jebana drużyna harcerzy.";
Lang.pl.level_7_speech_13 = "\nNie narzekaj Szron, tylko ciesz się ziemniakami z ogniska. To dużo lepsze\nniż zasuwanie po podziemiach metra.";
Lang.pl.level_7_speech_14 = "\nA co? Chciałeś iść z workiem na głowie do ich siedziby?\nPodstawowa zasada: spotykamy się w z góry ustalonych, neutralnych miejscach.";
Lang.pl.level_7_speech_15 = "\nTa, i bawimy się w drużynowego... O! Ktoś idzie.";
Lang.pl.level_7_speech_16 = "\nWitam sierżancie Kos.";
Lang.pl.level_7_speech_17 = "\nJeszcze raz dziękuję wam za pomoc. Porucznik Rydz odszyfrował sporo\ndanych. Mam je ze sobą.";
Lang.pl.level_7_speech_18 = "\nŚwietnie! Dziękuję w imieniu Przymierza.";
Lang.pl.level_7_speech_19 = "\n I co to za dokumenty?";
Lang.pl.level_7_speech_20 = "\nHmm... Mamy tu przede wszystkim dokumentacje z badań na temat specyfików\nwywołujących... Hm... Mutację kierunkową.";
Lang.pl.level_7_speech_21 = "\nCzyli chodzi o przemianę ludzi w mutki?";
Lang.pl.level_7_speech_22 = "\nMiędzy innymi. Celem była jednak kontrola. Po wstrzyknięciu można było\nu takiego delikwenta wywołać atak złości na przykład...";
Lang.pl.level_7_speech_23 = "\nBędziemy mieli ciekawą lekturę i wiele do przemyślenia. Teraz zbierajmy się\nstąd. Spakowałem wam pieczone ziemniaki na drogę.";

Lang.en.replay_level_7_name = "Minsk forest";
Lang.en.replay_level_7_desc = "Dificulty level: high\nEnemies: Mutated rats, Infected, Ghouls,\nMutants with Tentacle, Mutants with Claw\nTips:\n- Watch your back\n- Lidia's ability can heal your allies too\n\n\nThe Chameleon-1 crew declared us trustworthy and has\noffered lucrative deals. These include assisting lieutenant\nKos in his intelligence missions to help evaluate the size\nof local mutant population."

Lang.en.replay_level_7_speech_0 = "\nIt is really nice of you to help me with the reconnaissance.";
Lang.en.replay_level_7_speech_1 = "\nWe can't say no to some extra cash. It won't be easy, though.";
Lang.en.replay_level_7_speech_2 = "\nGhouls?";
Lang.en.replay_level_7_speech_3 = "\nAmong others. It looks like there are tons of them living here.";
Lang.en.replay_level_7_speech_4 = "\nCover us, sergeant,  and  do not move an inch from behind those logs.\nWe are, after all, being paid to keep you in one piece.";
Lang.en.replay_level_7_speech_5 = "\nMutants should not be bothering us for a while.";
Lang.en.replay_level_7_speech_6 = "\nI agree. Let's finish this reconnaissance.";

Lang.pl.replay_level_7_name = "Miński las";
Lang.pl.replay_level_7_desc = "Poziom trudności: wysoki\nPrzeciwnicy: Zmutowane szczury, Zarażeni, Ghule,\nMutanci z Macką, Mutanci z Pazurem\nPorady:\n- Nie daj się zajść od tyłu.\n- Umiejętność Lidii leczy również sojuszników.\n\n\nZałoga Kameleona-1 uznała nas za godnych zaufania\ni oferuje nieźle płatne zlecenia. Polegają one na wspieraniu\nsierżanta Kosa w jego misjach zwiadowczych mających\nokreślić wielkość populacji mutantów w okolicy."

Lang.pl.replay_level_7_speech_0 = "\nMiło, że zgodziliście pomóc mi w zwiadzie.";
Lang.pl.replay_level_7_speech_1 = "\nNie pogardzimy dodatkowymi funduszami. Choć nie będzie lekko.";
Lang.pl.replay_level_7_speech_2 = "\nGhule?";
Lang.pl.replay_level_7_speech_3 = "\nMiędzy innymi. Widać na tym terytorium żyją całe ich bandy.";
Lang.pl.replay_level_7_speech_4 = "\nOsłaniajcie nas, sierżancie, i nie ruszajcie się zza tych kłód. W końcu płacą nam\nza utrzymanie cię w jednym kawałku.";
Lang.pl.replay_level_7_speech_5 = "\nMutanty nie powinny przez jakiś czas nam się naprzykrzać.";
Lang.pl.replay_level_7_speech_6 = "\nTeż tak myślę. Kończmy ten zwiad.";

Lang.en.level_8_name = "Level 9";
Lang.en.level_8_desc = "Under construction"

Lang.pl.level_8_name = 'Level 9';
Lang.pl.level_8_desc = "Under construction"

Lang.en.replay_level_8_name = "Level 9 Replay";
Lang.en.replay_level_8_desc = "Under construction"

Lang.pl.replay_level_8_name = "Level 9 Replay";
Lang.pl.replay_level_8_desc = "Under construction"

Lang.en.level_9_name = "Level 10";
Lang.en.level_9_desc = "Under construction"

Lang.pl.level_9_name = 'Level 10';
Lang.pl.level_9_desc = "Under construction"

Lang.en.replay_level_9_name = "Level 10 Replay";
Lang.en.replay_level_9_desc = "Under construction"

Lang.pl.replay_level_9_name = "Level 10 Replay";
Lang.pl.replay_level_9_desc = "Under construction"

Lang.en.level_10_name = "Level 11";
Lang.en.level_10_desc = "Under construction"

Lang.pl.level_10_name = 'Level 11';
Lang.pl.level_10_desc = "Under construction"

Lang.en.replay_level_10_name = "Level 11 Replay";
Lang.en.replay_level_10_desc = "Under construction"

Lang.pl.replay_level_10_name = "Level 11 Replay";
Lang.pl.replay_level_10_desc = "Under construction"

Lang.en.level_11_name = "Level 12";
Lang.en.level_11_desc = "Under construction"

Lang.pl.level_11_name = 'Level 12';
Lang.pl.level_11_desc = "Under construction"

Lang.en.replay_level_11_name = "Level 12 Replay";
Lang.en.replay_level_11_desc = "Under construction"

Lang.pl.replay_level_11_name = "Level 12 Replay";
Lang.pl.replay_level_11_desc = "Under construction"

// Dostępne placeholdery
// {price} - zostanie zamienione na wyliczona cene/wartosc
// {condition} - zostanie zamienione na obecna wytrzymalosc przedmiotu

// Broń kontaktowa ogólna

Lang.en.ciezka_rekawica_uderzeniowa_name = 'Heavy pounding glove';
Lang.en.ciezka_rekawica_uderzeniowa_info = 'Heavy pounding glove\nOptional mission reward\nPrice: {price}\nAttack: 80\nRange: +\nAttack speed: +++\nArmor penetration: ++++\nNoise suppression: ++++++';
Lang.en.ciezka_rekawica_uderzeniowa_desc = 'Despite its appearance, it is no ordinary protection glove.\nWhoever wears it cannot hold anything else in their hand.\nIn return, their punches are much more powerful. It is also\nbetter to block a sword or a club with it, rather than just\nyour bare fist. The equal weight distribution of the glove\naids getting through to the enemy.';

Lang.pl.ciezka_rekawica_uderzeniowa_name = 'Ciężka rękawica uderzeniowa';
Lang.pl.ciezka_rekawica_uderzeniowa_info = 'Ciężka rękawica uderzeniowa\nNagroda za misję dodatkową\nCena: {price}\nAtak: 80\nZasięg: +\nSzybkość: +++\nPrzebicie pancerza: ++++\nWytłumienie: ++++++';
Lang.pl.ciezka_rekawica_uderzeniowa_desc = 'Nie jest to zwykła rękawica ochronna, mimo niepozornego\nwyglądu. Noszący ją nie może  trzymać w dłoni\nczegokolwiek innego. W zamian jego ciosy są mocniejsze.\nŁatwiej blokuje się uderzenia miecza czy pałki\nmając coś takiego na rękach, niż za pomocą gołych pięści.\nCo więcej, równomierne rozłożenie ciężaru\nna całą rękawicę ułatwia dosięgnięcie przeciwnika.';

Lang.en.dzida_name = 'Spear';
Lang.en.dzida_info = 'Spear\nPrice: {price}\nAttack: 10\nRange: +\nAttack speed: ++++\nArmor penetration: +\nNoise suppression: +++++++';
Lang.en.dzida_desc = 'A stick of unknown origin that has a sharpened,\nhopefully metal, element attached to its end. Make sure\nyou do not try to aim at anything bigger than\na mutated rat with it, as you may only enrage the potential\nvictim.';

Lang.pl.dzida_name = 'Dzida';
Lang.pl.dzida_info = 'Dzida\nCena: {price}\nAtak: 10\nZasięg: +\nSzybkość: ++++\nPrzebicie pancerza: +\nWytłumienie: +++++++';
Lang.pl.dzida_desc = 'Niewiadomego pochodzenia kij, do którego ktoś\nprzymocował kawałkiem sznurka fragment zaostrzonego,\nmiejmy nadzieję, metalu. Lepiej nie natrafić z tą bronią\nna coś większego od zmutowanego szczura, bo będzie\nniewesoło.';

Lang.en.gdanski_trojzab_name = 'Gdansk trident';
Lang.en.gdanski_trojzab_info = 'Gdansk trident\nPrice: {price}\nAttack: 25\nRange: +\nAttack speed: ++++\nArmor penetration: ++\nNoise suppression: +++++++';
Lang.en.gdanski_trojzab_desc = 'A weapon manufactured mostly in Trojmiasto and\nneighboring cities, but useful not only for fishing. It can\nas well be used for forking tied up enemies. Three is always\nbetter than one, so the spiked ends can cause plenty\nof damage to scantly armored opponents.';

Lang.pl.gdanski_trojzab_name = 'Gdański trójząb';
Lang.pl.gdanski_trojzab_info = 'Gdański trójząb\nCena: {price}\nAtak: 25\nZasięg: +\nSzybkość: ++++\nPrzebicie pancerza: ++\nWytłumienie: +++++++';
Lang.pl.gdanski_trojzab_desc = 'Broń wytwarzana głównie w Trójmieście i okolicach,\na przydatna nie tylko przy połowach ryb. Równie dobrze\nsprawdza się przy hurtowym zabijaniu spętanych\nprzeciwników. Ten oręż zaopatrzony jest w trzy zakończone\nhakami zęby, dzięki czemu czyni prawdziwe spustoszenie\nw ciałach słabiej opancerzonych przeciwników.';

Lang.en.su_yari_name = 'Su yari';
Lang.en.su_yari_info = 'Su Yari\nPrice: {price}\nAttack: 45\nRange: +\nAttack speed: ++++\nArmor penetration: +++\nNoise suppression: +++++++';
Lang.en.su_yari_desc = "You're one lucky or stubborn bastard if you got your hands \non this baby. You don't really know what it is, do you?\nWhat you have in your hands is yari, a Japanese spear.\nActually, it's su yari, which is a kind of yari, but it does not\nmatter. Reportedly, such a weapon in the hands of a skilled\nwarrior can be incredibly deadly.";

Lang.pl.su_yari_name = 'Su yari';
Lang.pl.su_yari_info = 'Su Yari\nCena: {price}\nAtak: 45\nZasięg: +\nSzybkość: ++++\nPrzebicie pancerza: +++\nWytłumienie: +++++++';
Lang.pl.su_yari_desc = "Cechuje cię wyjątkowa zawziętość lub masz masę\nszczęścia, jeśli udało ci się zdobyć tę broń.\nPewnie nie wiesz do końca co to właściwie jest, co nie?\nMasz w swoich łapach yari, czyli taką japońską\nwłócznię. Konkretnie jest to su yari, czyli pewna jej\nodmiana z dwoma zaostrzonymi krawędziami,\nale to już nie tak istotne. Podobno broń ta w rękach\nwyszkolonego wojownika jest naprawdę zabójcza.";

// Broń strzelecka ogólna

Lang.en.nowak_3_name = 'Nowak-3';
Lang.en.nowak_3_info = 'Nowak-3\nPrice: {price}\nAttack: 35\nRange: ++++\nAttack speed: +++\nArmor penetration: +++\nNoise suppression: ++++';
Lang.en.nowak_3_desc = "A dude by the name – you've guessed it – Nowak created\nthis weird gun somewhere in the eastern part of Poland,\naround 2024. A one-shooter, loaded from the back,\nwith a decent range and penetration. It may sound like\na loony device, except for one tiny detail – you can use\nanything remotely resembling a bullet with it.";

Lang.pl.nowak_3_name = 'Nowak-3';
Lang.pl.nowak_3_info = 'Nowak-3\nCena: {price}\nAtak: 35\nZasięg: ++++\nSzybkość: +++\nPrzebicie pancerza: +++\nWytłumienie: ++++';
Lang.pl.nowak_3_desc = 'Koleś o nazwisku Nowak stworzył ten dziwaczny pistolet\ngdzieś koło 2024 r. we wschodniej części Polski. Jest to\nbroń jednostrzałowa, ładowana odtylcowo, o przyzwoitym\nzasięgu i całkiem dużej sile przebicia. Wariacki pomysł,\ngdyby nie jeden szczegół – może ona strzelać wszystkim,\nco choć w przybliżeniu przypomina kulę.';

Lang.en.terkotka_name = "The Chatterbox";
Lang.en.terkotka_info = "The Chatterbox\nPrice: {price}\nAttack: 20\nRange: +++\nAttack speed: +++++\nArmor penetration: ++\nNoise suppression: +++";
Lang.en.terkotka_desc = "This gun is Wroclaw's contribution to apocalyptic firearms\nmanufacturing. It was created in 2030s and was meant\nto be a machine gun. The fact that it was actually\nput together is an accomplishment in itself. The gun is loud,\nwobbles like jelly (it tends to sporadically fall apart in use),\nand you can forget about good aiming.\nBut hey! It's a machine gun, after all.";

Lang.pl.terkotka_name = "Terkotka";
Lang.pl.terkotka_info = "Terkotka\nCena: {price}\nAtak: 20\nZasięg: +++\nSzybkość: +++++\nPrzebicie pancerza: ++\nWytłumienie: +++";
//Lang.pl.terkotka_info = "Terkotka\nCena: {price}\nAtak: 20\nMagazynek: 50\nDaleki zasięg, szybka, głośna";
Lang.pl.terkotka_desc = "Ta broń to wkład Wrocławia w tworzenie postapokaliptycznej\nbroni palnej. Powstała na początku lat 30. XXI wieku\ni miała być pistoletem maszynowym. Założenie\nudało się zrealizować. Dobrano nawet nazwę świetnie\ndo niego pasującą. Broń  jest cholernie głośna, trzęsie się\njakby, miała się zaraz rozpaść – co też się zdarza –\na trafienie z niej do najłatwiejszych nie należy.\nNo, ale hej! To pistolet maszynowy.";

Lang.en.G84_name = 'Machine pistol G-84';
Lang.en.G84_info = 'Machine pistol G-84\nPrice: {price}\nAttack: 55\nRange: ++++\nAttack speed: +++++++\nArmor penetration: +++\nNoise suppression: +++++';
Lang.en.G84_desc = "This Polish machine pistol created at the end 1980s was\npart of the military and police equipment until the apocalypse.\nThey are numerous, and as a result they are the most\npopular gun on this type in Poland. It will not wreak havoc,\nbut if you are lacking in the gun department, you will find\nthat G-84 does the trick. Unless you encounter Gor or some\nsimilarly tough opponent. ";

Lang.pl.G84_name = 'Pistolet maszynowy G-84';
Lang.pl.G84_info = 'Pistolet maszynowy G-84\nCena: {price}\nAtak: 55\nZasięg: ++++\nSzybkość: +++++++\nPrzebicie pancerza: +++\nWytłumienie: +++++'
//Lang.pl.G84_info = 'Pistolet maszynowy G-84\nCena: {price}\nAtak: 55\nMagazynek: 70\nDaleki zasięg, ekstremalnie szybka';
Lang.pl.G84_desc = 'Polski pistolet maszynowy stworzony pod koniec\nlat 80. XX wieku, będący na wyposażeniu wojska i policji\naż do apokalipsy. Wyprodukowano ich całkiem sporo,\nwięc jest jedną z najpopularniejszych broni tego typu\nw Rzeczypospolitej. Nie zadaje jakiś monstrualnych\nobrażeń, ale gdy tylko dysponujesz odpowiednią ilością\namunicji trudno mu coś zarzucić. No chyba, że spotkasz\nGora albo inne równie wytrzymałe bydle.';

Lang.en.Sand_Falcon_name = 'Sand falcon';
Lang.en.Sand_Falcon_info = 'Sand Falcon\nOptional mission reward\nPrice: {price}\nAttack: 95\nRange: ++\nAttack speed: ++\nArmor penetration: +++++\nNoise suppression: +';
Lang.en.Sand_Falcon_desc = "It's not a gun – it's a fucking canon! If you ever get a brilliant\nidea and try to fire two at a time – save yourself some pain\nand break your both arms yourself. This gun sucks big time\nbecause of the failure rate, size, weight, price and\ntremendous recoil, as well as other annoying things. Still,\nthat did not stop a few items from entering Poland, and now\nthe situation has changed dramatically. Its force and\nintimidating size are ideal against bigger mutants, so if you\nare strong and rich enough, go for it!";

Lang.pl.Sand_Falcon_name = 'Sand falcon';
Lang.pl.Sand_Falcon_info = 'Sand falcon\nNagroda za misję dodatkową\nCena: {price}\nAtak: 95\nZasięg: ++\nSzybkość: ++\nPrzebicie pancerza: +++++\nWytłumienie: +';
Lang.pl.Sand_Falcon_desc = 'To nie pistolet, tylko jebana armata. Jeśli kiedyś przyjedzie\nci pomyśleć o strzelaniu z dwóch takich jednocześnie,\nto od razu jebnij się w ryj i połam obie ręce. Będzie mniej\nboleć. Ze względu na zawodność, rozmiar, ciężar, cenę,\nogromny odrzut i dziesiątki innych rzeczy ta broń była,\npo prostu, do bani. Jednak i tak trochę egzemplarzy trafiło\ndo Polski, a teraz sytuacja zmieniła się diametralnie. Tak\nwielka siła ognia oraz przebicie są wręcz idealne przeciw\nwielkim mutkom, więc jeśli jesteś dostatecznie silny\ni stać się na takiego potwora, to bierz go w ciemno.';

// Kusze Szrona

Lang.en.kusza_pistoletowa_y_3_name = 'Pistol crossbow Y-3';
Lang.en.kusza_pistoletowa_y_3_info = 'Pistol crossbow Y-3\nOnly for Szron\nPrice: {price}\nAttack: 60\nRange: +++\nAttack speed: +++\nArmor penetration: ++++\nNoise suppression: ++++++';
Lang.en.kusza_pistoletowa_y_3_desc = "It's more a toy than a real weapon. An expensive toy,\ncome to that. Both the range and the force leave plenty\nto wish for. The advantages: it is light and fast. Its durability\nis also pretty decent. Who knows – you may actually like it.";

Lang.pl.kusza_pistoletowa_y_3_name = 'Kusza pistoletowa Y-3';
Lang.pl.kusza_pistoletowa_y_3_info = 'Kusza pistoletowa Y-3\nTylko dla Szrona\nCena: {price}\nAtak: 60\nZasięg: +++\nSzybkość: +++\nPrzebicie pancerza: ++++\nWytłumienie: ++++++';
Lang.pl.kusza_pistoletowa_y_3_desc = "Bardziej zabawka niż broń. Do tego dosyć droga zabawka.\nZasięgiem nie imponuje, siłą też nie. Jest za to lekka\ni w miarę szybka. Jako, że tworzono je przed Violet Fallem,\nto na wytrzymałość też nie ma co narzekać. Kto wie,\nmoże przypadnie ci do gustu?";

Lang.en.Artemida_name = 'Hunting crossbow Artemis';
Lang.en.Artemida_info = 'Hunting crossbow Artemis\nOnly for Szron\nPrice: {price}\nAttack: 80\nRange: +++\nAttack speed: +++\nArmor penetration: +++++\nNoise suppression: ++++++';
Lang.en.Artemida_desc = "It's a really swell weapon. Quiet, light, with a decent range\nand really deadly, on top of that. No wonder it is worth more\nthan a regular machine gun. In contrary to firearms, ammo\nis widely available. Many who got to use it shun the idea\nof getting back to some old gun rifle.";

Lang.pl.Artemida_name = 'Kusza myśliwska Artemida';
Lang.pl.Artemida_info = 'Kusza myśliwska Artemida\nTylko dla Szrona\nCena: {price}\nAtak: 80\nZasięg: +++\nSzybkość: +++\nPrzebicie pancerza: +++++\nWytłumienie: ++++++';
Lang.pl.Artemida_desc = 'Naprawdę kapitalna broń. Cicha, celna, o całkiem niezłym\nzasięgu, a do tego prawdziwie mordercza. Nic dziwnego,\nże jest warta więcej niż niejeden karabin. W przeciwieństwie\nbowiem do broni palnej, tu pociski są łatwo dostępne.\nWiele szczęśliwych posiadaczy tej kuszy, nie chce potem\nwracać do jakiejś rozklekotanej strzelby.';

Lang.en.Talon_name = 'Dragon Talon';
Lang.en.Talon_info = 'Dragon Talon\nOnly for Szron\nPrice: {price}\nAttack: 110\nRange: +++\nAttack speed: +++\nArmor penetration: ++++++\nNoise suppression: ++++++';
Lang.en.Talon_desc = "It's the most popular crossbow in Poland. It is manufactured by the Green Dragons and was created for mutant hunting, especially the big ones that swarm Krakow and its vicinity. There's plenty to wish for as far as the range is concerned and reloading takes ages, but what it lacks in other departments, it makes up in ass-kicking. That was what you wanted, wasn't it?";

Lang.pl.Talon_name = 'Szpon Smoka';
Lang.pl.Talon_info = 'Szpon Smoka\nTylko dla Szrona\nCena: {price}\nAtak: 110\nZasięg: +++\nSzybkość: +++\nPrzebicie pancerza: ++++++\nWytłumienie: ++++++';
Lang.pl.Talon_desc = 'Najpopularniejsza kusza dostępna w Polsce. Produkowana jest przez Zielone Smoki i stworzona została do polowania na wielkie mutanty, których masa przebywa w Krakowie i okolicach. Nie ma może jakiegoś imponującego zasięgu, a jej przeładowanie trwa wieki, ale ma porządnego kopa. No, a przecież oto przede wszystkim chodziło.';

// Miotacze Szrona

Lang.en.bialostocki_odkazacz_name = 'Białostock purger';
Lang.en.bialostocki_odkazacz_info = 'Białostock purger\nOnly for Szron\nPrice: {price}\nAttack: 100\nThis weapon has splash damage\nRange: +\nAttack speed: +\nArmor penetration: ++\nNoise suppression: +++++';
Lang.en.bialostocki_odkazacz_desc = "I do not know what hit Bialystok during Violet Fall, but it was\nhard enough to cause such evidently negative impact on\nthe psyche of some of its residents. If you want proof,\nhere it is. Ladies and gentlemen – a manual acid thrower.\nIt's effective, I can't deny. One could say its effect is\nsatisfactory, if you like that sort of stuff (that is: a sizzling\nskin of your still alive opponents).";

Lang.pl.bialostocki_odkazacz_name = 'Białostocki odkażacz';
Lang.pl.bialostocki_odkazacz_info = 'Białostocki odkażacz\nTylko dla Szrona\nCena: {price}\nAtak: 100\nTa broń atakuje obszarowo\nZasięg: +\nSzybkość: +\nPrzebicie pancerza: ++\nWytłumienie: +++++';
Lang.pl.bialostocki_odkazacz_desc = "Nie wiem co w czasie Violet Falla zrzucono specjalnie\nna Białystok, ale miało ewidentnie negatywny wpływ na\nkondycje psychiczną co poniektórych. Jednym z dowodów\nna taki stan rzeczy jest ta broń. Panie, panowie,\nprzedstawiamy Wam: ręczny miotacz kwasu.\nNie powiem, niezwykle skuteczny. Można by rzec, że\nsatysfakcjonujący, jeśli lubisz takie rzeczy (czytaj:\nskwierczącą skórę jeszcze żywych przeciwników).";

Lang.en.Gladius_name = 'Combat blowtorch Gladius';
Lang.en.Gladius_info = 'Combat blowtorch Gladius\nOnly for Szron\nPrice: {price}\nAttack: 130\nThis weapon has splash damage\nRange: +\nAttack speed: +\nArmor penetration: +++\nNoise suppression: +++++';
Lang.en.Gladius_desc = "It's neither blowtorch, nor a thrower. The end of its nozzle\nbrings Gladius handle to mind – at least it did to the creator –\nhence the name. It throws a short, concentrated flame.\nHence combat blowtorch. It runs on the same type of\ngasoline regular flamethrowers do and causes a similar\ntype of damage, but it is easier to get through armor with it.\nAs for its disadvantages – it has a small range.";

Lang.pl.Gladius_name = 'Palnik bojowy Gladius';
Lang.pl.Gladius_info = 'Palnik bojowy Gladius\nTylko dla Szrona\nCena: {price}\nAtak: 130\nTa broń atakuje obszarowo\nZasięg: +\nSzybkość: +\nPrzebicie pancerza: +++\nWytłumienie: +++++';
Lang.pl.Gladius_desc = 'Ni to palnik, ni to miotacz ognia. Końcówka jego dyszy wraz\nz osłoną przywodzi na myśl – przynajmniej konstruktorowi –\nrękojeść gladiusa, stąd taka nazwa. Jest palnikiem bojowym,\nmiotającym krótkim, skoncentrowanym płomieniem.\nWykorzystuje to samo paliwo, co miotacze ognia. Zadaje\npodobne obrażenia, ale łatwiej nim przebić się przez\npancerz. Z wad trzeba wspomnieć przede wszystkim\no niewielkim zasięgu.';

Lang.en.mini_miotacz_strumieniowy_name = 'Mini stream thrower';
Lang.en.mini_miotacz_strumieniowy_info = 'Mini stream thrower\nOnly for Szron\nPrice: {price}\nAttack: 160\nThis weapon has splash damage\nRange: +\nAttack speed: +\nArmor penetration: ++++\nNoise suppression: +++++';
Lang.en.mini_miotacz_strumieniowy_desc = "A very interesting piece for those who like to linger over their\nopponents. It ejects a concentrated stream of acid,\nvery effective against armored opponents. Causing small\nspot wounds leads to a smaller casualty rate than in cases\nof bigger throwers. What's more, it is fairly difficult to aim\nwith it, it has a small range and significant weight, too.\nIt was created as a variation of the Bialystok purger.";

Lang.pl.mini_miotacz_strumieniowy_name = 'Mini-miotacz strumieniowy';
Lang.pl.mini_miotacz_strumieniowy_info = 'Mini-miotacz strumieniowy\nTylko dla Szrona\nCena: {price}\nAtak: 160\nTa broń atakuje obszarowo\nZasięg: +\nSzybkość: +\nPrzebicie pancerza: ++++\nWytłumienie: +++++'
Lang.pl.mini_miotacz_strumieniowy_desc = "Całkiem ciekawe urządzonko, ale tylko dla tych,\nktórzy lubią się poznęcać nad swoimi przeciwnikami.\nWystrzeliwuje skoncentrowany strumień kwasu,\nbardzo skuteczny przeciw opancerzonym przeciwnikom.\nTylko że powodowanie punktowych oparzeń przekłada się\nna mniejsze obrażenia, w przeciwieństwie do dużych\nmiotaczy. Na domiar złego bardzo trudno z niego trafić,\nma niewielki zasięg i trochę waży. Powstał jako jedna\nz wariacji stworzonego w Białymstoku odkażacza.";

// Młotki Olafa

Lang.en.dwureczny_mlot_smieciowy_name = 'Trash sledgehammer';
Lang.en.dwureczny_mlot_smieciowy_info = 'Trash sledgehammer\nOnly for Olaf\nPrice: {price}\nAttack: 75\nRange: +\nAttack speed: ++\nArmor penetration: +++\nNoise suppression: +++++';
Lang.en.dwureczny_mlot_smieciowy_desc = "You take a straight piece of something and you tie tighly\na triangle piece of junk to one of its ends. Ta dah, You have\ntrash hammer! Its heavy, fiddly and ugly, but if you brawny\nenough you can kick some small mutant's ass.";

Lang.pl.dwureczny_mlot_smieciowy_name = 'Dwuręczny młot śmieciowy';
Lang.pl.dwureczny_mlot_smieciowy_info = 'Dwuręczny młot śmieciowy\nTylko dla Olafa\nCena: {price}\nAtak: 75\nZasięg: +\nSzybkość: ++\nPrzebicie pancerza: +++\nWytłumienie: +++++',
Lang.pl.dwureczny_mlot_smieciowy_desc = "Bierzesz prosty kawałek czegoś i do jednego z końców\nbardzo mocno przywiązujesz mniej więcej prostokątny\nkawał złomu. Tadam! Masz młot śmieciowy.\nCholernie ciężkie to, nieporęczne i brzydkie, ale jak\nmasz parę w łapach, to pozwoli ci siać niezłe spustoszenie\nwśród co mniejszych mutków.";

Lang.en.dwureczny_mlot_wyburzeniowy_name = 'Demolition sledgehammer';
Lang.en.dwureczny_mlot_wyburzeniowy_info = 'Demolition sledgehammer\nOnly for Olaf\nPrice: {price}\nAttack: 110\nRange: +\nAttack speed: ++\nArmor penetration: ++++\nNoise suppression: +++++';
Lang.en.dwureczny_mlot_wyburzeniowy_desc = "Don't be deceived by the tacky rubber handle. The core\nof handle is made of glass fiber, and the tool itself was used\nfor heavy duty work on construction sites and demolition.\nIt will do as well when breaking bones is the task.";

Lang.pl.dwureczny_mlot_wyburzeniowy_name = 'Dwuręczny młot wyburzeniowy';
Lang.pl.dwureczny_mlot_wyburzeniowy_info = 'Dwuręczny młot wyburzeniowy\nTylko dla Olafa\nCena: {price}\nAtak: 110\nZasięg: +\nSzybkość: ++\nPrzebicie pancerza: ++++\nWytłumienie: +++++';
Lang.pl.dwureczny_mlot_wyburzeniowy_desc = "Niech cię nie zwiedzie tandetny gumowy uchwyt. Rdzeń\ntrzonka tego wielkiego młota wykonany jest\nz włókna szklanego, a samo narzędzie służyło do\nprac budowlanych i rozbiórkowych, chociażby\nrozpierdalania ścian. Równie dobrze poradzi sobie\nz miażdżeniem kości.";

Lang.en.Smasher_name = 'The Smasher';
Lang.en.Smasher_info = 'The Smasher\nOnly for Olaf\nPrice: {price}\nAttack: 150\nRange: +\nAttack speed: +\nArmor penetration: ++++\nNoise suppression: +++++';
Lang.en.Smasher_desc = "Your secret nerd fantasies to become a paladin or some other light warrior straight from fantasy universes can finally come true! Thankfully to the Green Dragons, who create those hammers that can cause nausea from the pure epicness. Not counting the ornaments, it will be hard to find a better weapon of this type, as that is one hell of a hammer. It's expensive, but you get extra mana points.";

Lang.pl.Smasher_name = 'Miażdżyciel';
Lang.pl.Smasher_info = 'Miażdżyciel\nTylko dla Olafa\nCena: {price}\nAtak: 150\nZasięg: +\nSzybkość: +\nPrzebicie pancerza: ++++\nWytłumienie: +++++';
Lang.pl.Smasher_desc = 'Twoje skryte nerdowskie marzenia, by zostać paladynem czy innym wojownikiem światłości rodem z uniwersów fantasy, wreszcie mogą się ziścić! Wszystko za sprawą tworzących te oto młoty Zielonych Smoków. Sam wygląd tej broni powoduje wymioty od nadmiaru epickości. Odliczając jednak ozdobniki trudno ci będzie znaleźć lepszą broń tego typu, bo to naprawdę solidny oręż. Niestety drogi, ale masz gratis bonus do many.';

// Miecze Olafa

Lang.en.korsarski_kordelas_name = "Corsair's cutlass";
Lang.en.korsarski_kordelas_info = "Corsair's cutlass\nOnly for Olaf\nPrice: {price}\nAttack: 50\nRange: +\nAttack speed: +++++\nArmor penetration: ++\nNoise suppression: +++++++";
Lang.en.korsarski_kordelas_desc = "The vast majority of such sabre is created in Trojmiasto and\nthe vicinity. As the name suggests, most of these end up\nin the hands of corsairs' from the 7th. They are usually\nhammered from all sorts of recycled steel, that sometimes\nwouldn't pass a quality check in the Medieval time.\nDespite that, it is still a pretty decent piece of steel.\nThe bonus: you can feel like a corsair having one. Arrr!";

Lang.pl.korsarski_kordelas_name = "Korsarski kordelas";
Lang.pl.korsarski_kordelas_info = "Korsarski kordelas\nTylko dla Olafa\nCena: {price}\nAtak: 50\nZasięg: +\nSzybkość: +++++\nPrzebicie pancerza: ++\nWytłumienie: +++++++";
Lang.pl.korsarski_kordelas_desc = "Zdecydowana większość tego typu krótkich szabli powstaje\nw Trójmieście i okolicach. Jak sama nazwa wskazuje,\nwiększość trafia do korsarzy z 7. Najczęściej kute są\nze stali z szeroko pojętego odzysku, w warsztatach,\nktóre nie spełniają nawet średniowiecznych standardów\ncechowych. Jednak nie ma co narzekać, bo to całkiem\nprzyzwoite ostrze. Poza tym dzierżąc je,\nmożesz poczuć się niemal jak prawdziwy pirat. Arr!";

Lang.en.Pazur_name = 'Dragon claw';
Lang.en.Pazur_info = "Dragon's claw\nOnly for Olaf\nPrice: {price}\nAttack: 75\nRange: +\nAttack speed: +++++\nArmor penetration: +++\nNoise suppression: +++++++";
Lang.en.Pazur_desc = "The ultra fancy name should help you determine\nthe manufacturer without looking at its box.\nYep, the Green Dragons. It's a decent piece of weapon,\ntake away the cheap ornaments. It's is well balanced and\nmade from good quality steel (considering the standards\nafter Violet Fall).";

Lang.pl.Pazur_name = 'Smoczy pazur';
Lang.pl.Pazur_info = 'Smoczy pazur\nTylko dla Olafa\nCena: {price}\nAtak: 75\nZasięg: +\nSzybkość: +++++\nPrzebicie pancerza: +++\nWytłumienie: +++++++';
Lang.pl.Pazur_desc = 'Już ta ultra oryginalna nazwa powinna pozwolić ci bez\npudła określić, kto wytwarza miecze tego typu. Tak, chodzi\no Zielone Smoki. To porządny oręż, odliczając tandetne\nozdóbki, którym zwykle jest pokryty, by wyglądać bardziej\n„zacnie”. Nieźle wyważony i z dobrej, jak na standardy po\nViolet Fallu, stali.';

Lang.en.Amelinum_name = 'Amelinium sword';
Lang.en.Amelinum_info = 'Amelinium sword\nOnly for Olaf\nPrice: {price}\nAttack: 110\nRange: +\nAttack speed: +++++\nArmor penetration: +++\nNoise suppression: +++++++';
Lang.en.Amelinum_desc = "A unique weapon made of one and only amelinium. Origin: unknown, but it is suspected thst it ws created in secret military labs. Once thing it sure – you can't paint it.";

Lang.pl.Amelinum_name = 'Ameliniumowy miecz';
Lang.pl.Amelinum_info = 'Ameliniumowy miecz\nTylko dla Olafa\nCena: {price}\nAtak: 110\nZasięg: +\nSzybkość: +++++\nPrzebicie pancerza: +++\nWytłumienie: +++++++';
Lang.pl.Amelinum_desc = 'Jedyna i niepowtarzalna broń z wspaniałego stopu amelinium. Pochodzenie tego miecza jest nieznane, ale podejrzewa się, że powstał w tajnych wojskowych laboratoriach. Jedno jest pewne – tego nie pomalujesz.';

// Karabiny Lidii

Lang.en.kapiszon_name = 'The Percussion Cap';
Lang.en.kapiszon_info = 'The Percussion Cap\nOnly for Lidia\nPrice: {price}\nAttack: 100\nRange: ++++\nAttack speed: +++\nArmor penetration: ++++\nNoise suppression: ++';
Lang.en.kapiszon_desc = "The most popular 'carbine' of post-apocalyptic Poland.\nThe Percussion Cap is the name that encompasses every\nhome-made, long, one-shooter. Each copy is unique, so\na Percussion Cap from Podkarpacie will be different from\nthe one in Podlasie. The Percussion Cap is equally\ndangerous both for the user, as well as the target.\nAdditionally, regardless of the technology, reloading the\ngun takes way too long. Think of it as a technologically\nadvanced musket with auto-destructive tendencies.";

Lang.pl.kapiszon_name = 'Kapiszon';
Lang.pl.kapiszon_info = 'Kapiszon\nTylko dla Lidii\nCena: {price}\nAtak: 100\nZasięg: ++++\nSzybkość: +++\nPrzebicie pancerza: ++++\nWytłumienie: ++';
Lang.pl.kapiszon_desc = 'Najpopularniejszy „karabin” postapokaliptycznej Polski.\nKapiszon to określenie dla wszelkiej wykonanej chałupniczo,\ndługiej, jednostrzałowej broni palnej. Każdy egzemplarz jest\nunikalny, więc Kapiszony z Podkarpacia mogą być zupełnie\ninne od tych z Podlasia. Taka broń jest równie groźna dla\ncelu, jak i dla użytkownika. Do tego niezależnie od\nzastosowanych rozwiązań to draństwo ładuje się stanowczo\nza długo. Myśl o nim, jak o zaawansowanym\ntechnologicznie muszkiecie, który ma skłonności do\nsamozniszczenia.';

Lang.en.Plujka_name = '„KS-7a Kowalski” Spitter';
Lang.en.Plujka_info = 'KS-7a Kowalski” Spitter\nOnly for Lidia\nPrice: {price}\nAttack: 160\nRange: +++++\nAttack speed: ++\nArmor penetration: +++++\nNoise suppression: ++';
Lang.en.Plujka_desc = "One could go on and on about how bad the firearms after\nViolet Fall are. It's unreliable, heavy and literally falls apart in\nyour hands. True, true, but there are some exceptions to\nthe rule. One such exception is the Spitter, that is\na semi-automatic rifle manufactured in the western part\nof Poland. They are a far cry form the factory-made items,\nbut still way beyond what a regular Cap or any other junk\ncan offer.";

Lang.pl.Plujka_name = 'Plujka „KS-7a Kowalski”';
Lang.pl.Plujka_info = 'Plujka „KS-7a Kowalski”\nTylko dla Lidii\nCena: {price}\nAtak: 160\nZasięg: +++++\nSzybkość: ++\nPrzebicie pancerza: +++++\nWytłumienie: ++';
Lang.pl.Plujka_desc = 'Można długo narzekać na broń palną tworzoną po Violet\nFallu. Że zawodna, że ciężka, że dosłownie rozpada się\nw rękach. Dużo w tym prawdy, ale czasami zdarzają się\nprzyzwoite egzemplarze. Przykładem są choćby Plujki,\nczyli karabiny samopowtarzalne wytwarzane w zachodniej\nczęści Polski. Nie dorównują co prawda fabrycznie\nstworzonym giwerom, ale dalece przewyższają proste\nKapiszony czy inny strzelający złom.';

Lang.en.Exterminator_name = 'Sniper rifle Exterminator A-11';
Lang.en.Exterminator_info = 'Sniper rifle Exterminator A-11\nOnly for Lidia\nPrice: {price}\nAttack: 240\nRange: +++++++\nAttack speed: +\nArmor penetration: +++++++\nNoise suppression: ++';
Lang.en.Exterminator_desc = "It's a great hunting weapon for bigger mutants. It will work just as well when you are confronted by a mammoth or some tyranosaur. It has low rate of fire, but to live through being hit by it is an achievement of the very few. It was created at the beginning of 2023, that is just after Violet Fall, in one of the few working gun factories and was especially designed to fight mutants. There are just around 200 copies available, so what you're holding is a real rarity. ";

Lang.pl.Exterminator_name = 'Karabin wyborowy Eksterminator A-11';
Lang.pl.Exterminator_info = 'Karabin wyborowy Eksterminator A-11”\nTylko dla Lidii\nCena: {price}\nAtak: 240\nZasięg: +++++++\nSzybkość: +\nPrzebicie pancerza: +++++++\nWytłumienie: ++';
Lang.pl.Exterminator_desc = 'Idealna broń do polowań na szczególnie wielkie mutanty. Świetnie sprawuje się też przeciw mamutom czy innym tyranozaurom. Nie jest może specjalnie szybkostrzelny, ale przeżycie strzału z tej armaty to wyczyn, na który stać niewielu. Wytworzony został na początku 2023 roku, czyli już po Violet Fallu, w jednej z nielicznych działających jeszcze fabryk broni, produkujących sprzęt specjalnie przeciw mutantom. Stworzono może z dwieście sztuk, więc trzymasz w swoich rękach prawdziwy unikat.';

// Karabiny Lidii

Lang.en.MWG46_name = 'Light machine gun MWG-46 FS';
Lang.en.MWG46_info = 'Light machine gun MWG-46 FS\nOnly for Lidia\nPrice: {price};\nAttack: 35\nRange: +++\nAttack speed: +++++\nArmor penetration: +++\nNoise suppression: +';
Lang.en.MWG46_desc = "Another Belgian invention after MWG-26, in which all flaws\nof its predecessor have been removed. The sad part is this\nmachine gun from 2022 wasn't largely imported into Poland,\nwhich increases its price. If you can afford it and have plenty\nof ammo to spare, it's worth buying one.";

Lang.pl.MWG46_name = 'Ręczny karabin maszynowy MWG-46 FS';
Lang.pl.MWG46_info = 'Ręczny karabin maszynowy MWG-46 FS\nTylko dla Lidii\nCena: {price}\nAtak: 35\nZasięg: +++\nSzybkość: +++++\nPrzebicie pancerza: +++\nWytłumienie: +';
Lang.pl.MWG46_desc = 'Kolejna po MWG-26 belgijska produkcja, która to usunęła\nwiększość niedoróbek swojego poprzednika. Szkoda tylko,\nże powstała w 2022 roku, a do Polski trafiła jakaś śmieszna\nich ilość. Z tego też powodu jest cholernie droga, ale jeśli\ncię stać i masz nadmiar amunicji, to warto.';

Lang.en.Tytan2_name = 'Light machine gun Titan-2';
Lang.en.Tytan2_info = 'Light machine gun Titan-2\nOnly for Lidia\nPrice: {price};\nAttack: 45\nRange: +++\nAttack speed: ++++++\nArmor penetration: +++\nNoise suppression: +';
Lang.en.Tytan2_desc = "This is one gun that does not live up to its name. There isn't\na single gram of titanium in it, and its strength does not bring\nthe power of ancient mythology gods-giants to mind. It is\nextremely inaccurate, heavy and non-durable.  It does,\nhowever, have a decent range and can cause satisfying\ndamage. It was created after Violet Fall by the Neptune\nBrotherhood. There aren't too many copies around, as there\nwas no longer a need to manufacture those. Machine guns\nweren't too popular in times where ammo is short.";

Lang.pl.Tytan2_name = 'Ręczny karabin maszynowy Tytan-2';
Lang.pl.Tytan2_info = 'Ręczny karabin maszynowy Tytan-2\nTylko dla Lidii\nCena: {price}\nAtak: 45\nZasięg: +++\nSzybkość: ++++++\nPrzebicie pancerza: +++\nWytłumienie: +';
Lang.pl.Tytan2_desc = 'Ewidentny przykład nazwania broni nad wyrost. Nie ma\nw niej ani grama tytanu, a jej możliwości nie kojarzą się\nwcale z mocą bogów-olbrzymów ze starożytnej mitologii.\nJest za to ekstremalnie niecelna, ciężka i średnio\nwytrzymała. Ma jednak przyzwoity zasięg i zadaje w miarę\nsatysfakcjonujące obrażenia. Została stworzona po Violet\nFallu przez Bractwo Neptuna. Nie wyprodukowano wielu\negzemplarzy, bo i nie było takiej potrzeby. Karabiny\nmaszynowe są niezbyt popularne w czasach, gdy tak trudno\no amunicję.';

Lang.en.Tytan3_name = 'Light machine gun Titan-3 Alfa';
Lang.en.Tytan3_info = 'Light machine gun Titan-3 Alfa\nOnly for Lidia\nPrice: {price};\nAttack: 55\nRange: ++++\nAttack speed: +++++++\nArmor penetration: +++\nNoise suppression: +';
Lang.en.Tytan3_desc = "One of the earliest fruits of the Covenant and the Neptune Brotherhood's labour. A team under the leadership of navy second lieutenant Eugeniusz Włodarczyk and major Paulina Julia Orłowska created this machine gun – improved version of Titan-2. Despite shortage of materials and being understaffed, they were able to eliminate most of the flaws of its predecessor. Its still not ideal, but it's a reasonably good gun. Unfortunately, due to a short demand among other things, there were a few copies made, or rather molded into 3 Alfa version.";

Lang.pl.Tytan3_name = 'Ręczny karabin maszynowy Tytan-3 Alfa';
Lang.pl.Tytan3_info = 'Ręczny karabin maszynowy Tytan-3 Alfa\nTylko dla Lidii\nCena: {price}\nAtak: 55\nZasięg: ++++\nSzybkość: +++++++\nPrzebicie pancerza: +++\nWytłumienie: +';
Lang.pl.Tytan3_desc = 'Jeden z pierwszy owoców współpracy Przymierza z Bractwem Neptuna. Zespół pod kierownictwem podporucznika marynarki Eugeniusza Włodarczyka i major Pauliny Julii Orłowskiej stworzył ten oto karabin, ulepszoną wersję Tytana-2. Mimo małej ilości sprzętu, ludzi oraz czasu udało im się wyeliminować większość problemów poprzednika. Wiele brakuje do ideału, ale to już naprawdę przyzwoita spluwa. Niestety, ze względu m.in. na małe zapotrzebowanie stworzono, a właściwie przerobiono na model 3 Alfa, stosunkowo niewiele egzemplarzy Tytana.';

// Łuki

Lang.en.Anglik_name = 'Englishman';
Lang.en.Anglik_info = 'Englishman\nFor Weronika Only\nPrice: {price};\nAttack: 60\nRange: +++\nAttack speed: ++++\nArmor penetration: ++++\nNoise suppression: ++++++';
Lang.en.Anglik_desc = "This weapon is based on English longbow, hence its name. It's not the best weapon of all time, but if I got my hands on it, I wouldn't complain. The range is far from the worst, it is cheap and pretty accessible. It requires some strength to operate, so it is not a weapon for wimps.";

Lang.pl.Anglik_name = 'Anglik';
Lang.pl.Anglik_info = 'Anglik\nTylko dla Weroniki\nCena: {price}\nAtak: 60\nZasięg: +++\nSzybkość: ++++\nPrzebicie pancerza: ++++\nWytłumienie: ++++++';
Lang.pl.Anglik_desc = 'Broń wzorowana była na wyobrażeniu długiego łuku angielskiego, stąd nazwa. Nie jest to najlepsza broń jaką widziałem, ale gdybym miał do dyspozycji tylko ją, nie narzekałbym. Anglik ma  znośny zasięg, za wiele nie kosztuje, a i nie tak trudno go dostać. Wymaga jednak sporej siły, nie jest więc bronią dla mięczaków.';

Lang.en.Mountain_bow_name = 'Mountain bow';
Lang.en.Mountain_bow_info = 'Mountain bow\nFor Weronika Only\nPrice: {price};\nAttack: 75\nRange: ++++\nAttack speed: ++\nArmor penetration: +++++\nNoise suppression: ++++++';
Lang.en.Mountain_bow_desc = "Such bows were quite popular in the Sudetes, hence the name 'mountain bow'. They are used mostly for hunting of a special kind of mutants. This type lives in the highest parts of mountains. They leave their lair to kidnap people. It is vital that the creature is caught fast, as there is still a chance of saving the victim. Reportedly, the mountain bow is priceless.";

Lang.pl.Mountain_bow_name = 'Łuk górski';
Lang.pl.Mountain_bow_info = 'Łuk górski\nTylko dla Weroniki\nCena: {price}\nAtak: 75\nZasięg: ++++\nSzybkość: ++\nPrzebicie pancerza: +++++\nWytłumienie: ++++++';
Lang.pl.Mountain_bow_desc = 'Takie łuki są dosyć popularne w Sudetach, dlatego zaczęto je określać mianem górskich. Używa się ich przede wszystkim do polowania na pewien konkretny typ mutantów. Chodzi o maszkary żyjące w okolicach najwyższych szczytów górskich, które opuszczają tylko w celu polowania na ludzi. Wtedy bardzo ważne jest, by dorwać takiego potworka jak najszybciej, co daje szansę na uratowanie jego ofiary. Podobno łuk górski świetnie sprawdza się w trakcie takich zadań.';

Lang.en.Glass_bow_name = 'Sports friberglass bow';
Lang.en.Glass_bow_info = 'Sports friberglass bow\nFor Weronika Only\nPrice: {price};\nAttack: 90\nRange: ++++\nAttack speed: ++\nArmor penetration: +++++++\nNoise suppression: ++++++';
Lang.en.Glass_bow_desc = "A bow could have been legally obtained in Poland, as opposed to, for example, a crossbow. As a result, a large number of these was manufactured after the apocalypse. This fine product is the top shelf stuff. Once an expensive toy for archery enthusiasts or professional sportsmen, now – a deadly weapon. You may not bring a helicopter down with it, but you can't have everything.";

Lang.pl.Glass_bow_name = 'Łuk sportowy z włókna szklanego';
Lang.pl.Glass_bow_info = 'Łuk sportowy z włókna szklanego\nTylko dla Weroniki\nCena: {price}\nAtak: 90\nZasięg: ++++\nSzybkość: ++\nPrzebicie pancerza: +++++++\nWytłumienie: ++++++';
Lang.pl.Glass_bow_desc = 'Łuki, w przeciwieństwie do np. kusz, można było legalnie nabyć w Polsce, więc pewna ich liczba ostała się po apokalipsie. Ten z włókna szklanego jest akurat produktem z górnej półki. Kiedyś drogie cacko dla najbardziej zamożnych entuzjastów łucznictwa lub zawodowych sportowców, a teraz śmiercionośna broń i postrach mutków. Helikoptera co prawda z tego nie zestrzelisz, ale nie można mieć wszystkiego.';

// Noże

Lang.en.Noz_wojskowy_name = 'Army knife mark 2016A';
Lang.en.Noz_wojskowy_info = 'Army knife mark 2016A\nFor Weronika Only\nPrice: {price};\nAttack: 50\nRange: +\nAttack speed: +++++\nArmor penetration: +++\nNoise suppression: +++++++';
Lang.en.Noz_wojskowy_desc = "This Polish knife is an improved version of a much older weapon made in 1998. It was designed as a perfect combat weapon, created for the intelligence and commandos. It has been much improved, incredibly well-balanced and painfully sharp knive. The chemically blackened carbon spring steel increases the durability. A flawless weapon, maybe except for the price.";

Lang.pl.Noz_wojskowy_name = 'Nóż wojskowy wz. 2016A';
Lang.pl.Noz_wojskowy_info = 'Nóż wojskowy wz. 2016A\nTylko dla Weroniki\nCena: {price}\nAtak: 50\nZasięg: +\nSzybkość: +++++\nPrzebicie pancerza: +++\nWytłumienie: +++++++';
Lang.pl.Noz_wojskowy_desc = 'Ten polski nóż to ulepszona wersja dużo starszej konstrukcji zaprojektowanej w 1998 roku. Stworzony jako idealna broń do walki, a przeznaczony dla oddziałów zwiadu oraz komandosów. Jest to właściwie mocno podrasowany, świetnie wyważony i cholernie ostry sztylet. Dodatkowo czerniona chemicznie hartowana stal sprężynowa gwarantuje solidność, a wad nie stwierdzono. No może poza ceną.';

Lang.en.Yoroi_name = 'Yoroi-dōshi';
Lang.en.Yoroi_info = 'Yoroi-dōshi\nFor Weronika Only\nPrice: {price};\nAttack: 60\nRange: +\nAttack speed: ++++++\nArmor penetration: +++\nNoise suppression: +++++++';
Lang.en.Yoroi_desc = "I have no idea how you found IT, but it does not matter. What you have on your hands is a variant of tantō, a Japanese dagger, called yoroi-dōshi. You have two options now: either sell it at a good price, or learn how to use it. Is it worth it? You decide. You need to know, however, that this sharp as hell knife was used mostly to cut through armor, so it is great against natural mutant protection.";

Lang.pl.Yoroi_name = 'Yoroi-dōshi';
Lang.pl.Yoroi_info = 'Yoroi-dōshi\nTylko dla Weroniki\nCena: {price}\nAtak: 60\nZasięg: +\nSzybkość: ++++++\nPrzebicie pancerza: +++\nWytłumienie: +++++++';
Lang.pl.Yoroi_desc = 'Nie wiem jak udało ci się TO znaleźć, ale nieważne. Dysponujesz bowiem odmianą tantō, czyli takiego japońskiego sztyletu, zwaną yoroi-dōshi. Masz teraz dwie możliwości: albo pozbyć się tego za dobrą cenę, albo nauczyć się tym walczyć. Czy warto? To twoja decyzja. Wiedz jednak, że ten piekielnie ostry nóż służył przede wszystkim do przebijania zbroi, więc powinien radzić sobie też z naturalnym pancerzem mutantów.';

Lang.en.Omega_name = 'Omega v3 dagger';
Lang.en.Omega_info = 'Omega v3 dagger\nFor Weronika Only\nPrice: {price};\nAttack: 80\nRange: +\nAttack speed: ++++++\nArmor penetration: ++++\nNoise suppression: +++++++';
Lang.en.Omega_desc = "To effectively attack with this dagger you need to be very close, but that's as much as it goes. It's very light and well-balanced, and made from durable polymers as well. Omega v3 is the king on knives. Every potential target with no firearms will think twice about attacking when they see its sophisticatedly twisted blade.";

Lang.pl.Omega_name = 'Sztylet Omega v3';
Lang.pl.Omega_info = 'Sztylet Omega v3\nTylko dla Weroniki\nCena: {price}\nAtak: 80\nZasięg: +\nSzybkość: ++++++\nPrzebicie pancerza: ++++\nWytłumienie: +++++++';
Lang.pl.Omega_desc = 'Do skutecznego ataku wymaga naprawdę bliskiego podejścia, ale to wyczerpuje listę problemów dotyczących tego sztyletu. Niezwykle lekki i dobrze wyważony, wykonany z super wytrzymałych polimerów, Omega v3 jest królem w swojej klasie. Każdy choć trochę ogarnięty, a nie mający broni palnej, widząc ten „nożyk” o finezyjnie skręconym ostrzu poważnie zastanowi się przed atakiem.';

// Pancerze

Lang.en.czarny_skorzany_plaszcz_z_kapturem_name = 'Black mantle with a hoodie';
Lang.en.czarny_skorzany_plaszcz_z_kapturem_info = 'Black mantle with a hoodie\nPrice: {price}\nDefence: 5';
Lang.en.czarny_skorzany_plaszcz_z_kapturem_desc = "Such a dark mantle, with a dark hoodie that casts a dark\nshadow on your face is something. It makes you instantly\nfeel more mysterious, cunning and cool. You can serve\na sly smile of a first class motherfucker to those jackasses\nin leather jackets, and they know their place. But seriously –\nconsider buying a real armor.";

Lang.pl.czarny_skorzany_plaszcz_z_kapturem_name = 'Czarny skórzany płaszcz z kapturem';
Lang.pl.czarny_skorzany_plaszcz_z_kapturem_info = 'Czarny skórzany płaszcz z kapturem\nCena: {price}\nObrona: 5';
Lang.pl.czarny_skorzany_plaszcz_z_kapturem_desc = "Taki płaszcz z mrocznym kapturem, spływającym\nmrocznym cieniem na twą mroczną twarz to jest coś.\nOd razu czujesz się jakoś tak bardziej tajemniczo, bardziej\npodstępnie, bardziej cool. Nosząc taki płaszcz serwujesz\nfrajerom w skórzanych kurtkach swój zajebisty uśmiech\nchamskiego skurwysyna (albo chamskiej suki)\ni już wszyscy wiedzą, z kim nie należy zadzierać.\nNo, a tak całkiem serio, może jednak przemyślisz zakup\nprawdziwego pancerza?";

Lang.en.lekki_kirys_smieciowy_name = "Light trash cuirass";
Lang.en.lekki_kirys_smieciowy_info = "Light trash cuirass\nPrice: {price}\nDefence: 15";
Lang.en.lekki_kirys_smieciowy_desc = "Light shouldn't be used to describe it. Thrash makes\nmore sense. It's just a piece of car hood formed in such\na shape as to protect the chest. It is fastened to the body\nvia leather belts, which is neither easy, nice, nor fast.";

Lang.pl.lekki_kirys_smieciowy_name = "Lekki kirys śmieciowy";
Lang.pl.lekki_kirys_smieciowy_info = "Lekki kirys śmieciowy\nCena: {price}\nObrona: 15";
Lang.pl.lekki_kirys_smieciowy_desc = "Lekki to on jest tylko z nazwy. Właściwie tylko „śmieciowy”\npasuje do niego idealnie. To po prostu dwa kawałki maski\nsamochodowej służące ochronie korpusu. Mocuje się je\nz pomocą skórzanych pasów, co zwykle nie jest ani proste,\nani miłe, ani szybkie.";

Lang.en.wojskowa_kamizelka_taktyczna_name = "Army tactical vest";
Lang.en.wojskowa_kamizelka_taktyczna_info = "Army tactical vest\nPrice: {price}\nDefence: 30";
Lang.en.wojskowa_kamizelka_taktyczna_desc = "An item worth three machine guns and a bag of ammo to it.\nThe fact is, there will be no use for your big gun\nand a shitload of ammo when a single shot from\na homemade gun will leave you in a pool of your own bodily\nfluids. This vest can stop even machine gun bullets that\nwould normally turn you into a wet stain. Make sure you keep\nthis in mind when prioritizing your equipment.";

Lang.pl.wojskowa_kamizelka_taktyczna_name = "Wojskowa kamizelka taktyczna";
Lang.pl.wojskowa_kamizelka_taktyczna_info = "Wojskowa kamizelka taktyczna\nCena: {price}\nObrona: 30";
Lang.pl.wojskowa_kamizelka_taktyczna_desc = "Przedmiot o wartości co najmniej trzech karabinów i worka\namunicji do nich. Tak naprawdę co ci po masie pestek\ni wielkiej giwerze, gdy po jednym trafieniu ze skleconego\nnaprędce samopału leżysz w kałuży własnej posoki?\nNatomiast ta kamizelka jest w stanie zatrzymać nawet kule\nkarabinowe, które normalnie zmieniłyby cię w krwawy\nochłap. Pomyśl o tym ustalając priorytety dotyczące\nekwipunku.";

Lang.en.obronca2_name = "Protector-2 Vest";
Lang.en.obronca2_info = "Protector-2 Vest\nPrice: {price}\nDefence: 45";
Lang.en.obronca2_desc = "The first bulletproof vest manufactured by the Covenant and\navailable for people outside the faction. It has several\nenhancements that will protect you against melee weapons.\nIt is fairly expensive in comparison to its counterparts from\nbefore the apocalypse, and heavy on top of that. Still,\nit's a better solution than a sheet of metal tied to your chest.";

Lang.pl.obronca2_name = "Kamizelka Obrońca-2";
Lang.pl.obronca2_info = "Kamizelka Obrońca-2\nCena: {price}\nObrona: 45";
Lang.pl.obronca2_desc = "Pierwsza kamizelka kuloodporna tworzona przez\nPrzymierze, a dostępna dla osób spoza frakcji. Posiada\nkilka wzmocnień, które mają pomóc także w przypadku ataku\nbronią białą. Dosyć droga w porównaniu do tworów sprzed\napokalipsy, a do tego bardzo ciężka. Mimo tego nadal dużo\nlepsza, niż kawał blachy przywiązany do klaty.";

Lang.en.zbroja_plytowa_name = "Krakow plate armor";
Lang.en.zbroja_plytowa_info = "Krakow plate armor\nPrice: {price}\nDefence: 60";
Lang.en.zbroja_plytowa_desc = "This awfully heavy armor is one of the easiest ones to get. It will provide you with a decent protection in a world of firearm ammo shortage. Yes – many sane (for today's standards) people voluntarily get themselves locked in this. True, it decreases your mobility. Thanks to it, however, no mutant teeth nor claw are a threat. Neither a sword nor an arrow can easily go through it. Of course, if you encounter someone with a machine gun, you can only say your prayers, but life is full of give and take.";

Lang.pl.zbroja_plytowa_name = "Krakowska zbroja płytowa";
Lang.pl.zbroja_plytowa_info = "Krakowska zbroja płytowa\nCena: {price}\nObrona: 60";
Lang.pl.zbroja_plytowa_desc = "Ta piekielnie ciężka zbroja jest jednym z najłatwiej dostępnych pancerzy. Zapewni ci w miarę solidną ochronę w świecie, gdzie o amunicje do broni palnej trudno. Tak, wielu normalnie myślących ludzi – jak na standardy tego świata, oczywiście – daje się w nią zapuszkować. Fakt, ogranicza to twoją mobilność. Jednocześnie jednak nie straszne ci ni zęby, ni pazury mutantów, a i mieczem czy strzałą ubić cię trudno. Oczywiście, jeśli natrafisz na kogoś z kałachem, to możesz się najwyżej pomodlić, ale coś za coś.";

Lang.en.zbroja_z_demigora_name = "Demigor breastplate";
Lang.en.zbroja_z_demigora_info = "Demigor breastplate\nOptional mission reward\nPrice: {price}\nDefence: 80";
Lang.en.zbroja_z_demigora_desc = "You're looking at a breastplate made of Demigors' armor. This is a fine example of one Lady Esmeralda's armorsmith. It is easily recognizable by the symbol of black unicorn placed on the left epaulet. That type of armor not only looks good in Krakow and the vicinity, but is impossibly durable too. It will blunt knives, break spears and fracture hammers. You can go as far as taking a hail of bullets, like some killer-robot from the future. So don't complain about its weight, nor the lingering smell of a dead Demigor, because you're not likely to find a better protection.";

Lang.pl.zbroja_z_demigora_name = "Napierśnik z Demigora";
Lang.pl.zbroja_z_demigora_info = "Napierśnik z Demigora\nNagroda za misję dodatkową\nCena: {price}\nObrona: 80";
Lang.pl.zbroja_z_demigora_desc = "Podziwiasz właśnie napierśnik płytowy wykonany z płyt pancerza Demigorów. To wspaniały pokaz umiejętności płatnerskich niejakiej Lady Esmeraldy. Łatwo poznać to po symbolu przedstawiającym głowę czarnego jednorożca, umieszczonym pod lewym naramiennikiem. Zbroja tego typu nie tylko dobrze wygląda w Krakowie i okolicach, ale jest też nieziemsko wytrzymała. Stępią się na niej noże, złamią włócznie, pękną młoty. Ba, nawet kule przyjmiesz na klatę, jakbyś był jakimś pieprzonym robotem-zabójcą z przyszłości. Dlatego nie narzekaj na ciężar i nadal wyczuwalny smród martwego Demigora, bo lepszej ochrony raczej nie znajdziesz.";

// boostery

Lang.pl.attack_boost_name = "Wzmacniacz";
Lang.pl.attack_boost_info = "Wzmacniacz\nCena: {price}\nZwiększa na stałe wartość ataku postaci o 5\nBy użyć, przeciągnij na portret postaci\nJednorazowego użytku";
Lang.pl.attack_boost_desc = "To taki super steryd. Każde jego zażycie powoduje niemal\nnatychmiastowy przyrost masy, siły i wytrzymałości mięśni.\nPo zaledwie jednej dawce nie staniesz się od razu jakimś\nwielkim siłaczem, ale dużo łatwiej poradzisz sobie w walce\nz plugastwem, którego wszędzie teraz pełno.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.pl.attack_boost2_name = "Wzmacniacz V2";
Lang.pl.attack_boost2_info = "Wzmacniacz V2\nCena: {price}\nZwiększa na stałe wartość ataku postaci o 15\nBy użyć, przeciągnij na portret postaci\nJednorazowego użytku";
Lang.pl.attack_boost2_desc = "To po prostu ulepszona wersja Wzmacniacza wykonana\nna bazie oczyszczonych violek. Jeśli tylko masz\nodpowiednią ilość funduszy lepiej zażywać to cudo, bo daje\ndużo lepsze efekty.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.en.attack_boost_name = "Booster";
Lang.en.attack_boost_info = "Booster\nPrice: {price}\nPermanently increase character attack by 5";
Lang.en.attack_boost_desc = "It is a sort of super-steroid. Each dose almost immediately\nincreases the body mass, strength and durability\nof the muscles. One dose won't make you a Hulk, but it will\nsurely help you fight the ever-present grime.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.en.attack_boost2_name = "Booster V2";
Lang.en.attack_boost2_info = "Booster V2\nPrice: {price}\nPermanently increase character attack by 15";
Lang.en.attack_boost2_desc = "A new-and-improved version of Booster based on distilled\nViols. If you have enough funds to spare, take the stuff,\nas it gives you so much better results.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.pl.defence_boost_name = "Adamant";
Lang.pl.defence_boost_info = "Adamant\nCena: {price}\nZwiększa na stałe wartość obrony postaci o 2\nBy użyć, przeciągnij na portret postaci\nJednorazowego użytku";
Lang.pl.defence_boost_desc = "Bardzo przydatny specyfik. Każda dawka powoduje\nniewielkie wzmocnienie skóry, kości i układu\nodpornościowego co przekłada się na lepszą ochronę przed\nobrażeniami najróżniejszego typu.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.pl.defence_boost2_name = "Adamant V2";
Lang.pl.defence_boost2_info = "Adamant V2\nCena: {price}\nZwiększa na stałe wartość obrony postaci o 5\nBy użyć, przeciągnij na portret postaci\nJednorazowego użytku";
Lang.pl.defence_boost2_desc = "Udoskonalona receptura Adamantu. Polecana wszystkim,\nktórzy nie przepadają za poparzeniami, sikaniem krwią\ni oglądaniem swoich narządów wewnętrznych poza ciałem.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.en.defence_boost_name = "Adamant";
Lang.en.defence_boost_info = "Adamant\nPrice: {price}\nPermanently increase character defence by 2";
Lang.en.defence_boost_desc = "A very useful formula. Each does will increase slightly\nthe skin, bones and immune system, which in turn gives you\na better protection against all sorts of injuries.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.en.defence_boost2_name = "Adamant V2";
Lang.en.defence_boost2_info = "Adamant V2\nPrice: {price}\nPermanently increase character defence by 5";
Lang.en.defence_boost2_desc = "A perfected Adamant formula. The leading brand among\nanyone not too keen on burns, bloody pee and seeing your\ninternal organs outside the body.";
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.pl.life_boost_name = "Vita";
Lang.pl.life_boost_info = "Vita\nCena: {price}\nZwiększa na stałe maksymalne zdrowie postaci o 50\nBy użyć, przeciągnij na portret postaci\nJednorazowego użytku";
Lang.pl.life_boost_desc = "Po tym cudeńku wydajność i wytrzymałość twojego\norganizmu odczuwalnie wzrosną. Vita przesunie odrobinę\ngranicę między „jeszcze dam radę”, a „jestem już trupem”.\nW skrócie będziesz w stanie wytrzymać kilka dodatkowych\nciosów zanim padniesz na glebę."
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.pl.life_boost2_name = "Vita V2";
Lang.pl.life_boost2_info = "Vita V2\nCena: {price}\nZwiększa na stałe maksymalne zdrowie postaci o 150\nBy użyć, przeciągnij na portret postaci\nJednorazowego użytku";
Lang.pl.life_boost2_desc = "Wzmocniona wersja Vity znacząco wzmacniająca\nwytrzymałość organizmu. Każde jej zażycie to trochę jak\nkrok w stronę nieśmiertelności."
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.en.life_boost_name = "Vita";
Lang.en.life_boost_info = "Vita\nPrice: {price}\nPermanently increase character maximum health by 50";
Lang.en.life_boost_desc = "This baby will make your efficiency and stamina\nsignificantly higher. Vita will push the boundary between\n'I can make it' and 'I'm dead'. In other words, you can take\na few extra punches before collapsing."
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";

Lang.en.life_boost2_name = "Vita V2";
Lang.en.life_boost2_info = "Vita V2\nPrice: {price}\nPermanently increase character maximum health by 150";
Lang.en.life_boost2_desc = "A strengthened version of Vita that tremendously influences\nthe stamina. Each sip takes you closer to immortality."
//"Pierwszy ogólnie dostępny specyfik na bazie nieoczyszczonych violek. Jego stworzenie przypisuje się hakerowi o pseudonimie A, który zaprezentował zastrzyk zdrowia jako przykład przydatności violek. Każdy, kto zaaplikuje sobie dożylnie to cudeńko, na paręnaście minut podniesie zdolności regeneracyjne swojego organizmu. Konkretnie to będzie mógł obserwować, jak w ekspresowym tempie zrastają mu się bebechy albo znika rana po potencjalnie bardzo poważnym cięciu. Pamiętaj jednak, że wzięcie dwóch dawek naraz nie spowoduje jeszcze większego przyśpieszenia regeneracji. Do tego widząc efekty możesz dojść do wniosku, że nie można cię zabić. To bzdura. Głowa nie odrośnie jak ktoś ci ją odrąbie, kumasz?";
