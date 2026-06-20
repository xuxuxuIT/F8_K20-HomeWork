function analyzeClass(scores) {
  let invalidCount = 0;

  let xuatSac = 0;
  let gioi = 0;
  let kha = 0;
  let trungBinh = 0;
  let yeu = 0;

  let validCount = 0;
  let sum = 0;

  let maxScore;
  let minScore;

  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];

    if (score < 0 || score > 10) {
      invalidCount++;
      continue;
    }

    validCount++;
    sum += score;

    if (validCount === 1) {
      maxScore = score;
      minScore = score;
    } else {
      if (score > maxScore) {
        maxScore = score;
      }

      if (score < minScore) {
        minScore = score;
      }
    }

    if (score >= 9) {
      xuatSac++;
    } else if (score >= 8) {
      gioi++;
    } else if (score >= 6.5) {
      kha++;
    } else if (score >= 5) {
      trungBinh++;
    } else {
      yeu++;
    }
  }

  let average = 0;

  if (validCount > 0) {
    average = sum / validCount;

    average = Math.round(average * 100) / 100;
  }

  let nhanXet = "";

  if (xuatSac + gioi + kha > validCount / 2) {
    nhanXet = "Lớp học tốt";
  } else if (yeu > validCount / 2) {
    nhanXet = "Cần cải thiện";
  } else {
    nhanXet = "Lớp học ở mức ổn";
  }

  return {
    xuatSac,
    gioi,
    kha,
    trungBinh,
    yeu,
    diemCaoNhat: maxScore,
    diemThapNhat: minScore,
    diemTrungBinh: average,
    diemKhongHopLe: invalidCount,
    nhanXet,
  };
}
const scores = [9, 7, -2, 5.5, 10, 4, 11, 6.5, 8];

console.log(analyzeClass(scores));
