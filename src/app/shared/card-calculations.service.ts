import { Injectable } from '@angular/core';

@Injectable()
export class CardCalculationsService {

  constructor() { }

  calculateProgress(dashboardInfo: any, totalSets: number) {
    let countArray = [];
    for (var letter in dashboardInfo.Letters) {
      dashboardInfo.Letters[letter] = dashboardInfo.Letters[letter] - totalSets;

      if (dashboardInfo.Letters[letter] > 0) {
        countArray.push(letter);
      }
    }

    return Math.round((countArray.length/6) * 100);
  }

  calculateTotalSets(dashboardInfo: any) {
    let countArray = [];
    let totalSets;

    for (var letter in dashboardInfo.Letters) {
      countArray.push(dashboardInfo.Letters[letter]);
    }

    if (countArray.length === 6) {
      totalSets = countArray.reduce((a, b) => {
        return Math.min(a, b);
      });
    } else {
      totalSets = 0;
    }

    return totalSets;
  }

}
