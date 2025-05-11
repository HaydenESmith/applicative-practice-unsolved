/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { data } from "../data/data";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const yearCounts = {};

  for (const asteroid of data.asteroids) {
    if (yearCounts[asteroid.discoveryYear]) {
      yearCounts[asteroid.discoveryYear]++;
    } else {
      yearCounts[asteroid.discoveryYear] = 1;
    }
  }
  const yearArray = Object.entries(yearCounts).map(([year, count]) => ({
    year: Number(year),
    count: count,
  }));
  const mostDiscoveries = maxBy(yearArray, (entry) => entry.count);
  return mostDiscoveries.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
