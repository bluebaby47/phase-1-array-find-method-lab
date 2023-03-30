// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(season => season.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  