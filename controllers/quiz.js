var quizzer = {name:"general", A1:"not answered", A2:"not answered", A3:"not answered", A4:"not answered", A5:"not answered", A6:"not answered", A7:"not answered", A8:"not answered", A9:"not answered", A10:"not answered", score:0};
var new_quizzer = {name:"general", A1:"not answered", A2:"not answered", A3:"not answered", A4:"not answered", A5:"not answered", A6:"not answered", A7:"not answered", A8:"not answered", A9:"not answered", A10:"not answered", score:0};

exports.index = function(req, res) {
  res.render('quiz', {
    title: 'quiz'
  });
};

exports.quizGet = function(req, res) {
  res.render('quiz', {
    title: 'Quiz'
  });
  quizzer = new_quizzer;
};

exports.ssGet = function(req, res) {
  var scores = "1. ";
  if (quizzer.A1 === "Marmota monax") {
    scores += "correct! -- 2. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A1 + ") -- 2. "; }

  if (quizzer.A2 === "6") {
    scores += "correct! -- 3. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A2 + ") -- 3. "; }

  if (quizzer.A3 === "Woodchucks") {
    scores += "correct! -- 4. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A3 + ") -- 4. "; }

  if (quizzer.A4 === "683 logs") {
    scores += "correct! -- 5. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A4 + ") -- 5. "; }

  if (quizzer.A5 === "I Got You Babe") {
    scores += "correct! -- 6. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A5 + ") -- 6. "; }

  if (quizzer.A6 === "Being a groundhog") {
    scores += "correct! -- 7. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A6 + ") -- 7. "; }

  if (quizzer.A7 === "They chuck wood") {
    scores += "correct! -- 8. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A7 + ") -- 8. "; }

  if (quizzer.A8 === "True") {
    scores += "correct! -- 9. "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A8 + ") -- 9. "; }

  if (quizzer.A9 === "Grass and vegetation") {
    scores += "correct! -- 10. ";  }
  else {
    scores += "incorrect (your answer: " + quizzer.A9 + ") -- 10. "; }

  if (quizzer.A10 === "10 wood") {
    scores += "correct! "; }
  else {
    scores += "incorrect (your answer: " + quizzer.A10 + ")  "; }

  res.send("Your score: " + quizzer.score + "/10 --- " + scores);

};


exports.Q1Get = function(req, res) {
  res.render('quiz_pages/Q1', {
    title: 'Question 1'
  });
};


exports.Q2Get = function(req, res) {
  res.render('quiz_pages/Q2', {
    title: 'Question 2'
  });
};

exports.Q3Get = function(req, res) {
  res.render('quiz_pages/Q3', {
    title: 'Question 3'
  });
};

exports.Q4Get = function(req, res) {
  res.render('quiz_pages/Q4', {
    title: 'Question 4'
  });
};

exports.Q5Get = function(req, res) {
  res.render('quiz_pages/Q5', {
    title: 'Question 5'
  });
};

exports.Q6Get = function(req, res) {
  res.render('quiz_pages/Q6', {
    title: 'Question 6'
  });
};

exports.Q7Get = function(req, res) {
  res.render('quiz_pages/Q7', {
    title: 'Question 7'
  });
};

exports.Q8Get = function(req, res) {
  res.render('quiz_pages/Q8', {
    title: 'Question 8'
  });
};

exports.Q9Get = function(req, res) {
  res.render('quiz_pages/Q9', {
    title: 'Question 9'
  });
};

exports.Q10Get = function(req, res) {
  res.render('quiz_pages/Q10', {
    title: 'Question 10'
  });
};

exports.resultsGet = function(req, res) {
  res.render('quiz_pages/perf_results', {
    title: 'Mediocre Results'
  });
};





/*  ----  QUESTION SPECIFIC ROUTING  ----  */

/* ---- QUESTION 1 ---- */
exports.Q1aGet = function(req, res) {
  if (quizzer.A1 === "Marmota monax") {
    --quizzer.score;
  }
  quizzer.A1 = "Groundhoggy mcgroundhogface";
  res.render('quiz_pages/Q2', {
    title: 'Question 1'
  });
};

exports.Q1bGet = function(req, res) {
  if (quizzer.A1 !== "Marmota monax") {  // CORRECT
    quizzer.A1 = "Marmota monax";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q2', {
    title: 'Question 2'
  });
};

exports.Q1cGet = function(req, res) {
  if (quizzer.A1 === "Marmota monax") {
    --quizzer.score;
  }
  quizzer.A1 = "Ytu brutus";
  res.render('quiz_pages/Q2', {
    title: 'Question 2'
  });
};

exports.Q1dGet = function(req, res) {
  if (quizzer.A1 === "Marmota monax") {
    --quizzer.score;
  }
  quizzer.A1 = "Hors d’œuvre";
  res.render('quiz_pages/Q2', {
    title: 'Question 2'
  });
};

/* ----- QUESTION 2  ------ */
exports.Q2aGet = function(req, res) {
  if (quizzer.A2 === "6") {
    --quizzer.score;
  }
  quizzer.A2 = "One too many";
  res.render('quiz_pages/Q3', {
    title: 'Question 3'
  });
};

exports.Q2bGet = function(req, res) {
  if (quizzer.A2 === "6") {
    --quizzer.score;
  }
  quizzer.A2 = "0";
  res.render('quiz_pages/Q3', {
    title: 'Question 3'
  });
};

exports.Q2cGet = function(req, res) {  // CORRECT
  if (quizzer.A2 !== "6") {
    quizzer.A2 = "6";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q3', {
    title: 'Question 3'
  });
};

exports.Q2dGet = function(req, res) {
  if (quizzer.A2 === "6") {
    --quizzer.score;
  }
  quizzer.A2 = "9";
  res.render('quiz_pages/Q3', {
    title: 'Question 3'
  });
};


/* ---- QUESTION 3 ---- */
exports.Q3aGet = function(req, res) {
  if (quizzer.A3 === "Woodchucks") {
    --quizzer.score;
  }
  quizzer.A3 = "Bears";
  res.render('quiz_pages/Q4', {
    title: 'Question 4'
  });
};

exports.Q3bGet = function(req, res) { // CORRECT
  if (quizzer.A3 !== "Woodchucks") {
    quizzer.A3 = "Woodchucks";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q4', {
    title: 'Question 4'
  });
};

exports.Q3cGet = function(req, res) {
  if (quizzer.A3 === "Woodchucks") {
    --quizzer.score;
  }
  quizzer.A3 = "Business Owners";
  res.render('quiz_pages/Q4', {
    title: 'Question 4'
  });
};

exports.Q3dGet = function(req, res) {
  if (quizzer.A3 === "Woodchucks") {
    --quizzer.score;
  }
  quizzer.A3 = "Dirt Enthusiasts";
  res.render('quiz_pages/Q4', {
    title: 'Question 4'
  });
};

/* ---- QUESTION 4 ---- */
exports.Q4aGet = function(req, res) {
  if (quizzer.A4 === "683 logs") {
    --quizzer.score;
  }
  quizzer.A4 = "I can't do math";
  res.render('quiz_pages/Q5', {
    title: 'Question 5'
  });
};

exports.Q4bGet = function(req, res) {
  if (quizzer.A4 === "683 logs") {
    --quizzer.score;
  }
  quizzer.A4 = "I don't have a calculator";
  res.render('quiz_pages/Q5', {
    title: 'Question 5'
  });
};

exports.Q4cGet = function(req, res) {
  if (quizzer.A4 === "683 logs") {
    --quizzer.score;
  }
  quizzer.A4 = "2 logs";
  res.render('quiz_pages/Q5', {
    title: 'Question 5'
  });
};

exports.Q4dGet = function(req, res) { // CORRECT
  if (quizzer.A4 !== "683 logs") {
    quizzer.A4 = "683 logs";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q5', {
    title: 'Question 5'
  });
};


/* --- QUESTION 5 --- */
exports.Q5aGet = function(req, res) {
  if (quizzer.A5 === "I Got You Babe") {
    --quizzer.score;
  }
  quizzer.A5 = "Black Magic Woman";
  res.render('quiz_pages/Q6', {
    title: 'Question 6'
  });
};

exports.Q5bGet = function(req, res) { // CORRECT
  if (quizzer.A5 !== "I Got You Babe") {
    quizzer.A5 = "I Got You Babe";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q6', {
    title: 'Question 6'
  });
};

exports.Q5cGet = function(req, res) {
  if (quizzer.A5 === "I Got You Babe") {
    --quizzer.score;
  }
  quizzer.A5 = "Tie a Yellow Ribbon";
  res.render('quiz_pages/Q6', {
    title: 'Question 6'
  });
};

exports.Q5dGet = function(req, res) {
  if (quizzer.A5 === "I Got You Babe") {
    --quizzer.score;
  }
  quizzer.A5 = "Spinning Wheel";
  res.render('quiz_pages/Q6', {
    title: 'Question 6'
  });
};


/* ---- QUESTION 6 ---- */
exports.Q6aGet = function(req, res) {
  if (quizzer.A6 !== "Being a groundhog") {  // CORRECT
    quizzer.A6 = "Being a groundhog";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q7', {
    title: 'Question 7'
  });
};

exports.Q6bGet = function(req, res) {
  if (quizzer.A6 === "Being a groundhog") {
    --quizzer.score;
  }
  quizzer.A6 = "Winning the Nobel Peace Prize in 1998";
  res.render('quiz_pages/Q7', {
    title: 'Question 7'
  });
};

exports.Q6cGet = function(req, res) {
  if (quizzer.A6 === "Being a groundhog") {
    --quizzer.score;
  }
  quizzer.A6 = "His Rasputin impersonation";
  res.render('quiz_pages/Q7', {
    title: 'Question 7'
  });
};

exports.Q6dGet = function(req, res) {
  if (quizzer.A6 === "Being a groundhog") {
    --quizzer.score;
  }
  quizzer.A6 = "Inventing the DVD rewinder";
  res.render('quiz_pages/Q7', {
    title: 'Question 7'
  });
};

/* QUESTION 7 */
exports.Q7aGet = function(req, res) {
  if (quizzer.A7 === "They chuck wood") {
    --quizzer.score;
  }
  quizzer.A7 = "They regularly shave off the bottoms of their teeth every morning after they wake up";
  res.render('quiz_pages/Q8', {
    title: 'Question 8'
  });
};

exports.Q7bGet = function(req, res) {
  if (quizzer.A7 === "They chuck wood") {
    --quizzer.score;
  }
  quizzer.A7 = "They have special groundhog dentists that take care of their teeth for them during yearly checkups";
  res.render('quiz_pages/Q8', {
    title: 'Question 8'
  });
};

exports.Q7cGet = function(req, res) {
  if (quizzer.A7 === "They chuck wood") {
    --quizzer.score;
  }
  quizzer.A7 = "They take teeth control, which provides hormones to slow (and even stop) the growth of their teeth";
  res.render('quiz_pages/Q8', {
    title: 'Question 8'
  });
};

exports.Q7dGet = function(req, res) {
  if (quizzer.A7 !== "They chuck wood") {  // CORRECT
    quizzer.A7 = "They chuck wood";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q8', {
    title: 'Question 8'
  });
};

/* ---- QUESTION 8 ---- */
exports.Q8aGet = function(req, res) {
  if (quizzer.A8 !== "True") {
    quizzer.A8 = "True";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q9', {
    title: 'Question 9'
  });
};

exports.Q8bGet = function(req, res) {
  if (quizzer.A8 === "True") {
    --quizzer.score;
  }
  quizzer.A8 = "False";
  res.render('quiz_pages/Q9', {
    title: 'Question 9'
  });
};


/* --- QUESTION 9 ---- */
exports.Q9aGet = function(req, res) {
  if (quizzer.A9 === "Grass and vegetation") {
    --quizzer.score;
  }
  quizzer.A9 = "Protein bars (for the gainz)";
  res.render('quiz_pages/Q10', {
    title: 'Question 10'
  });
};

exports.Q9bGet = function(req, res) {
  if (quizzer.A9 !== "Grass and vegetation") { // CORRECT
    quizzer.A9 = "Grass and vegetation";
    ++quizzer.score;
  }
  res.render('quiz_pages/Q10', {
    title: 'Question 10'
  });
};

exports.Q9cGet = function(req, res) {
  if (quizzer.A9 === "Grass and vegetation") {
    --quizzer.score;
  }
  quizzer.A9 = "None pizza, left beef";
  res.render('quiz_pages/Q10', {
    title: 'Question 10'
  });
};

exports.Q9dGet = function(req, res) {
  if (quizzer.A9 === "Grass and vegetation") {
    --quizzer.score;
  }
  quizzer.A9 = "Juice";
  res.render('quiz_pages/Q10', {
    title: 'Question 10'
  });
};



/* ---- QUESTION 10 ---- */
exports.Q10aGet = function(req, res) {
  if (quizzer.A10 !== "10 wood") {    // CORRECT
    quizzer.A10 = "10 wood";
    ++quizzer.score;
  }
  if (quizzer.score === 10) {
    res.render('quiz_pages/perf_results', {
      title: 'results'
    });
  }
  else {
    res.render('quiz_pages/gen_results', {
      title: 'results'
    });
  }
};

exports.Q10bGet = function(req, res) {
  if (quizzer.A10 === "10 wood") {
    --quizzer.score;
  }
  quizzer.A10 = "3.429 dirt";
  if (quizzer.score === 10) {
    res.render('quiz_pages/perf_results', {
      title: 'results'
    });
  }
  else {
    res.render('quiz_pages/gen_results', {
      title: 'results'
    });
  }
};

exports.Q10cGet = function(req, res) {
  if (quizzer.A10 === "10 wood") {
    --quizzer.score;
  }
  quizzer.A10 = "Woodchuck";
  if (quizzer.score === 10) {
    res.render('quiz_pages/perf_results', {
      title: 'results'
    });
  }
  else {
    res.render('quiz_pages/gen_results', {
      title: 'results'
    });
  }
};

exports.Q10dGet = function(req, res) {
  if (quizzer.A10 === "10 wood") {
    --quizzer.score;
  }
  if (quizzer.score === 10) {
    res.render('quiz_pages/perf_results', {
      title: 'results'
    });
  }
  else {
    res.render('quiz_pages/gen_results', {
      title: 'results'
    });
  }
};





