class Question {
  constructor(id, question, correct_answer, incorrect_answers) {
    this.question = question;
    this.correct_answer = correct_answer;
    this.incorrect_answers = incorrect_answers;
    this.id = id;
  }

  shuffle_option() {
    //yates shuffling
    const arr = this.incorrect_answers.concat(this.correct_answer);
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    return shuffle(arr);
  }
  arrange() {
    //arranging the question object...
    return {
      id: this.id, //inserting id
      question: this.question,
      options: this.shuffle_option(),
      correct_answer: this.correct_answer,
    };
  }
}

export const modifyResult = (data, id) => {
  const { question, incorrect_answers, correct_answer } = data;
  const p = new Question(id, question, correct_answer, incorrect_answers);
  return p.arrange();
};

// const final = result.map((i, key) => deal(i, key));
// console.log(final);
