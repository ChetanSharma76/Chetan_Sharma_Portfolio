import axios from "axios";
import * as cheerio from "cheerio";

interface CodingStats {
  leetcode: number;
  codeforces: number;
  codechef: number;
}

export async function fetchCodingStats(usernames: {
  leetcode: string;
  codeforces: string;
  codechef: string;
}): Promise<CodingStats> {
  const stats = { leetcode: 0, codeforces: 0, codechef: 0 };

  try {
    // 1. LeetCode (Official GraphQL API)
    if (usernames.leetcode) {
      const query = `
        query userProblemsSolved($username: String!) {
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `;
      const lcResponse = await axios.post("https://leetcode.com/graphql", {
        query,
        variables: { username: usernames.leetcode },
      });
      
      const acStats = lcResponse.data.data.matchedUser?.submitStats?.acSubmissionNum;
      if (acStats) {
        // The first item in the array is usually "All"
        const allStats = acStats.find((s: any) => s.difficulty === "All");
        stats.leetcode = allStats ? allStats.count : 0;
      }
    }

    // 2. Codeforces (Official API - user.status)
    // We fetch submissions and count unique 'OK' verdicts
    if (usernames.codeforces) {
      const cfResponse = await axios.get(
        `https://codeforces.com/api/user.status?handle=${usernames.codeforces}&from=1&count=10000`
      );
      if (cfResponse.data.status === "OK") {
        const submissions = cfResponse.data.result;
        const solvedProblems = new Set();
        
        submissions.forEach((sub: any) => {
          if (sub.verdict === "OK") {
            // Create a unique ID for the problem (ContestID + Index, e.g., 4A)
            solvedProblems.add(`${sub.problem.contestId}${sub.problem.index}`);
          }
        });
        stats.codeforces = solvedProblems.size;
      }
    }

    // 3. CodeChef (Web Scraping)
    // CodeChef doesn't have a public API for this, so we scrape the profile
    if (usernames.codechef) {
      const ccResponse = await axios.get(`https://www.codechef.com/users/${usernames.codechef}`);
      const $ = cheerio.load(ccResponse.data);
      
      // Look for the "Fully Solved" count in their specific HTML structure
      // Note: This selector might need updating if CodeChef changes their UI
      const solvedText = $(".rating-data-section:contains('Fully Solved') h3").text();
      // Extract number from text like "Fully Solved (150)"
      const match = solvedText.match(/\d+/);
      stats.codechef = match ? parseInt(match[0], 10) : 0;
    }

  } catch (error) {
    console.error("Error fetching coding stats:", error);
    // Return whatever we managed to fetch, zeros for others
  }

  return stats;
}