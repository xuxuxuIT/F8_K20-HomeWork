const players = [
  {
    id: 1,
    name: "DragonSlayer",
    scores: [120, 85, 200, 95],
    level: 8,
    badge: "gold",
  },
  { id: 2, name: "NightWolf", scores: [60, 75, 50], level: 5, badge: null },
  {
    id: 3,
    name: "StarQueen",
    scores: [300, 250, 180, 90, 120],
    level: 12,
    badge: "diamond",
  },
  { id: 4, name: "IronFist", scores: [40, 30], level: 2, badge: null },
  {
    id: 5,
    name: "ShadowBlade",
    scores: [150, 200, 175],
    level: 9,
    badge: "silver",
  },
];
// Ham 1
function getTotalScore(player) {
  let tong = 0;
  for (const score of player.scores) {
    tong += score;
  }
  return tong;
}

console.log(getTotalScore(players[0])); // 500
console.log(getTotalScore(players[1])); // 185

//Ham 2
function getRanking(players) {
  const result = [];

  for (let i = 0; i < players.length; i++) {
    result.push({
      name: players[i].name,
      totalScore: getTotalScore(players[i]),
      badge: players[i].badge === null ? "none" : players[i].badge,
    });
  }

  result.sort(function (a, b) {
    return b.totalScore - a.totalScore;
  });

  for (let i = 0; i < result.length; i++) {
    result[i].rank = i + 1;
  }
  return result;
}

console.log(getRanking(players));

// Ham 3
function getTopPlayers(players, n) {
  let result = [];

  for (const player of players) {
    let tong = 0;

    for (const score of player.scores) {
      tong += score;
    }

    result.push({
      name: player.name,
      totalScore: tong,
    });
  }

  result.sort(function (a, b) {
    return b.totalScore - a.totalScore;
  });

  let topPlayers = [];

  for (let i = 0; i < n; i++) {
    topPlayers.push(result[i].name);
  }

  return topPlayers;
}
console.log(getTopPlayers(players, 3));
//Ham 4
function formatPlayerCard(player) {
  const totalScore = getTotalScore(player);
  let badge = "";

  if (player.badge === "diamond") {
    badge = "💎 DIAMOND";
  } else if (player.badge === "gold") {
    badge = "🏅 GOLD";
  } else if (player.badge === "silver") {
    badge = "🥈 SILVER";
  }

  if (badge) {
    return `${player.name} | Lv.${player.level} | ${totalScore} điểm | ${badge}`;
  }

  return `${player.name} | Lv.${player.level} | ${totalScore} điểm`;
}
console.log(formatPlayerCard(players[0]));
