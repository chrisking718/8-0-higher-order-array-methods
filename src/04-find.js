const songs = [
  {
    title: "Berlin Tsukin",
    album: "Bi-To Te-Pu",
    artist: "Taiyo Ky",
    runtimeInSeconds: 193,
  },
  {
    title: "Up",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "Sebastian Kamae",
    runtimeInSeconds: 120,
  },
  {
    title: "Daylight",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "hiyasu",
    runtimeInSeconds: 154,
  },
  {
    title: "Dormancy",
    album: "Dormancy",
    artist: "Arcade Portal",
    runtimeInSeconds: 126,
  },
  {
    title: "Pineapple Jam",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "Saib",
    runtimeInSeconds: 186,
  },
  {
    title: "Samui Sunrise",
    album: "Samui Sunrise",
    artist: "Saib",
    runtimeInSeconds: 204,
  },
  {
    title: "Regular Guy",
    album: "Regular Guy",
    artist: "Peanut",
    runtimeInSeconds: 215,
  },
  {
    title: "In the Middle of Nowhere",
    album: "It's OK",
    artist: "Soulaced",
    runtimeInSeconds: 123,
  },
  {
    title: "Pink Elephants",
    album: "Waterfalls",
    artist: "Timestreet",
    runtimeInSeconds: 171,
  },
  {
    title: "Kyona",
    album: "Kyona",
    artist: "Two Sleepy",
    runtimeInSeconds: 188,
  },
];

/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findPinkElephantsByTimestreet(songs) {
  return found = songs.find(({title})=> title === "Pink Elephants")
  
}

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstSongUnderThreeMinutes(songs) {
  return found = songs.find(({runtimeInSeconds})=> runtimeInSeconds < 180)
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstTitleTrack(songs) {
  return (found = songs.find(({title,album})=> title === album))
}

findFirstTitleTrack(songs)

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
