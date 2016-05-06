// http://www.html5rocks.com/en/tutorials/webaudio/intro/
// http://www.html5rocks.com/en/tutorials/webaudio/games/
//
// przekodowywanie muzyki do formatu ogg vorbis
// avconv -i 204535__setuniman__melancholic-outro-1d49.mp3 -acodec libvorbis out.ogg

AudioController = function() {

  var context;
  var cache = {};
  var helpers = Helpers();
  var theme;

  if (!localStorage.sound) {
    localStorage.sound = true;
  }

  if (!localStorage.music) {
    localStorage.music = true;
  }

    try {
      // Fix up for prefixing
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
      context = new AudioContext();
    }
    catch(e) {
      // alert('Web Audio API is not supported in this browser');
    }

  helpers.array_each(assets.audio, function(a) { preload(a); });

  that = {
    context: context,
    cache: cache,
    play: play,
    play_theme: play_theme,
    is_music_on: is_music_on,
    music_on: music_on,
    music_off: music_off,
    is_sound_on: is_sound_on,
    sound_on: sound_on,
    sound_off: sound_off,
  };

  return that;

  function preload(asset) {
    var audio = new Audio();
    audio.src = asset;
    audio.controls = false;
    audio.autoplay = false;
    cache[asset] = audio;

    return audio;
  }

  function is_music_on() {
    return localStorage.music !== "false";
  }
  function music_on() {
    localStorage.music = true;
    play_theme(global_config.game_theme_src, global_config.game_theme_volume, true);
  }
  function music_off() {
    localStorage.music = false;
    theme && theme.pause();
  }

  function is_sound_on() {
    return localStorage.sound !== "false";
  }
  function sound_on() {
    localStorage.sound = true;
  }
  function sound_off() {
    localStorage.sound = false;
  }

  // function preload(asset) {
  //   var request = new XMLHttpRequest();
  //   request.open('GET', asset, true);
  //   request.responseType = 'arraybuffer';

  //   // Decode asynchronously
  //   request.onload = function() {
  //     context.decodeAudioData(request.response, 
  //       function(buffer) {
  //         cache[asset] = buffer;
  //       }, 
  //       function() {
  //         console.log("error", arguments);
  //       }
  //     );
  //   };
  //   request.send();
  // }

  function load(asset) {
    if (cache[asset]) {
      return cache[asset];
    }

    return preload(asset);
  }

  function play(asset, volume, loop) {

    // jesli dzwieki wylaczone to nie gramy
    if (!is_sound_on()) {
      return;
    }

    volume = volume || 1;
    try {
      var audio = load(asset);
      var clone = audio.cloneNode();
      clone.volume = volume * global_config.master_sound_volume;
      if (loop) {
        clone.loop = true;
      }
      clone.play();
      return clone;
    } catch (e) {
      console.log("Nie udalo sie zagrac dzwieku "+asset, e);
    }
  }

  function play_theme(asset, volume, loop) {
    if (!is_music_on()) {
      return;
    }

    volume = volume || 1;
    try {
      var audio = load(asset);
      var clone = audio.cloneNode();
      clone.volume = volume * global_config.master_theme_volume;
      if (loop) {
        clone.loop = true;
      }
      clone.play();
      theme = clone;
      return clone;
    } catch (e) {
      console.log("Nie udalo sie zagrac dzwieku "+asset, e);
    }
  }

};
