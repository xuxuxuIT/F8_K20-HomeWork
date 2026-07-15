const examResults = [
  { student: "An", scores: [8.5, 7, 9, 6.5] },
  { student: "Bình", scores: [10, 9.5, 8, 10] },
  { student: "Chi", scores: [5, 4.5, 6, 5.5] },
  { student: "Duy", scores: [7, 7, 7, 7] },
];

// Ham 1
function getAverage(scores) {
  let tong = 0;
  for (const score of scores) {
    tong += score;
  }
  return Number((tong / scores.length).toFixed(1));
}

console.log(getAverage([8.5, 7, 9, 6.5]));
console.log(getAverage([10, 9.5, 8, 10]));

//ham 2
function classifyStudent(average) {
  if (average >= 9) {
    return "Xuất sắc";
  } else if (average >= 8) {
    return "Giỏi";
  } else if (average >= 6.5) {
    return "Khá";
  } else if (average >= 5) {
    return "Trung bình";
  }
  return "Yếu";
}

console.log(classifyStudent(9.4));
console.log(classifyStudent(7.8));

//Ham 3
function isValidScore(score) {
  return Number.isFinite(score) && score >= 0 && score <= 10;
}

console.log(isValidScore(8.5));
console.log(isValidScore(-1));
console.log(isValidScore(Infinity));
console.log(isValidScore(NaN));

// Ham 4
function getReportCard(examResults) {
  const result = [];
  for (const x of examResults) {
    const average = getAverage(x.scores);
    result.push({
      student: x.student,
      average: average,
      classification: classifyStudent(average),
    });
  }
  return result;
}

const report = getReportCard(examResults);

console.log(report);
