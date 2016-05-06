Mechanics.prototype.config = {
  // konfiguracja predkości poruszania się
  // kolejne klucze tablicy odpowiadają kolejnym poziomom współczynnika
  base_speed: [0.25, 0.2857142857142857, 0.3333333333333333, 0.4, 0.5, 0.6666666666666667, 0.7, 0.75, 0.8, 0.85, 0.9, 1.0, 1.1, 1.25, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.25, 2.5, 2.75, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0, 8.0, 9.0],
  base_speed_multiplier: 1,
  // konfiguracja predkości biegania
  // kolejne klucze tablicy odpowiadają kolejnym poziomom współczynnika
  base_run: [0.25, 0.2857142857142857, 0.3333333333333333, 0.4, 0.5, 0.6666666666666667, 0.7, /* Zmienione specjalnie pod Zarażonego */ 0.55, 0.8, 0.85, 0.9, 1.0, 1.1, 1.25, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.25, 2.5, 2.75, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0, 8.0, 9.0],
  base_run_multiplier: 3,
  // konfiguracja szybkości ataku
  base_attack_speed: [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.75, 1.5, 1.25, 1.1, 1.0, 0.975, 0.95, 0.925, 0.9, 0.875, 0.85, 0.825, 0.8, 0.775, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25],
  base_attack_speed_multiplier: 0.35, // mniej równa się częściej
  // ile życia przypada na punkt vigoury
  base_life_multiplier: 4,
  // modyfikatory zbroi
  base_defence_modifier:
    [ 
      { 0: 0, 1: 1, 4: 4, 8: 8, 16: 16, 32: 32, 64: 64 },
      { 0: 0, 1: 0, 4: 1, 8: 4, 16: 8,  32: 16, 64: 32 },
      { 0: 0, 1: 0, 4: 0, 8: 1, 16: 4,  32: 8,  64: 16 },
      { 0: 0, 1: 0, 4: 0, 8: 0, 16: 1,  32: 4,  64: 8  },
      { 0: 0, 1: 0, 4: 0, 8: 0, 16: 0,  32: 1,  64: 4  },
      { 0: 0, 1: 0, 4: 0, 8: 0, 16: 0,  32: 0,  64: 1  },
      { 0: 0, 1: 0, 4: 0, 8: 0, 16: 0,  32: 0,  64: 0  }
    ],
  // modyfikator szybkości rozwoju (zależne od inteligencji)
  base_development: [0.25, 0.38, 0.5, 0.57, 0.63, 0.69, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.7, 2.9, 3.1, 3.3, 3.5],
  base_development_multiplier: 10,
  base_abilities_levels: [1200, 400, 1200, 1600, 2400, 3200, 4800, 6200],
  base_factors_levels: [0, 0, 0, 0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7600, 8800, 10000, 11200, 12400, 13600, 14800, 16000, 17600, 19200, 20800, 24000, 26000, 30000, 0, 0, 0, 0, 0, 0],
  base_vigour_levels: [0, 0, 0, 0, 3200, 6400, 9600, 12800, 16000, 19200, 22400, 25600, 30400, 35200, 40000, 44800, 49600, 54400, 59200, 64000, 70400, 76800, 83200, 96000, 104000, 120000, 0, 0, 0, 0, 0, 0],

};
