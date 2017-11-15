const Scrabble = {
  score: function(word) {

    const POINTS = {
      A: 1, B: 3, C: 3, D: 2, E: 1, F: 4,
      G: 2, H: 4, I: 1, J: 8, K: 5, L: 1,
      M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
      S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
      Y: 4, Z: 10
    };

    let letters = word.toUpperCase().split('');
    let totalScore = 0;

    letters.forEach(function(letter) {
      if (!(letter in POINTS)) {
        throw 'Word includes an invalid character.'
      };
      totalScore += POINTS[letter];
    });

    if (word.length > 7) {
      throw 'Word is too long.';
    } else if (word.length === 0) {
      throw 'Word is too short.';
    } else if (word.length === 7) {
      totalScore += 50;
    };

    return totalScore;
  },

  highestScoreFrom: function(arrayOfWords) {
    let firstWord = arrayOfWords[0];
    let secondWord = arrayOfWords[1];

    if (arrayOfWords.length === 0 || !Array.isArray(arrayOfWords)) {
      throw 'No words have been played.';
    } else if (arrayOfWords.length === 1) {
      return firstWord;
    };

    let firstWordScore = this.score(firstWord);
    let secondWordScore = this.score(secondWord);

    if (firstWordScore > secondWordScore) {
      return firstWord;
    } else if (firstWordScore < secondWordScore) {
      return secondWord;
    } else if (firstWordScore === secondWordScore) {
      if (firstWord.length === 7 ) {
        return firstWord;
      } else if (secondWord.length == 7) {
        return secondWord;
      } else if (firstWord.length < secondWord.length) {
        return firstWord;
      } else if (secondWord.length < firstWord.length) {
        return secondWord;
      } else if (firstWord.length === secondWord.length) {
        return firstWord;
      };
    }
  }
};

Scrabble.Player = class {
  // TODO: implement the Player class
};

module.exports = Scrabble;
