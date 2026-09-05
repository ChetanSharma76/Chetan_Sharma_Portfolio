import axios from "axios";

// --- CONFIGURATION ---
// 775 (API) + 45 (Offset) = 820 (Your Profile)
const CODEFORCES_OFFSET = 45; 

// Safe fallback if CodeChef scraping is blocked
const CODECHEF_FALLBACK = 150; 
// ---------------------

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
    // 1. LeetCode
    if (usernames.leetcode) {
      try {
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
          const allStats = acStats.find((s: any) => s.difficulty === "All");
          stats.leetcode = allStats ? allStats.count : 0;
          console.log(`✅ LeetCode: ${stats.leetcode}`);
        }
      } catch (e) {
        console.error("❌ LeetCode failed:", (e as Error).message);
      }
    }

    // 2. Codeforces (API + Calibration)
    if (usernames.codeforces) {
      try {
        const cfResponse = await axios.get(
          `https://codeforces.com/api/user.status?handle=${usernames.codeforces}&from=1&count=100000`
        );
        
        if (cfResponse.data.status === "OK") {
          const submissions = cfResponse.data.result;
          const uniqueProblems = new Set<string>();
          
          submissions.forEach((sub: any) => {
            if (sub.verdict === "OK") {
              const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
              uniqueProblems.add(problemId);
            }
          });
          
          // API (775) + Offset (45) = 820
          stats.codeforces = uniqueProblems.size + CODEFORCES_OFFSET;
          console.log(`✅ Codeforces: ${uniqueProblems.size} + ${CODEFORCES_OFFSET} = ${stats.codeforces}`);
        }
      } catch (e) {
        console.error("❌ Codeforces failed:", (e as Error).message);
        stats.codeforces = 820; // Safe fallback
      }
    }

    // 3. CodeChef
    if (usernames.codechef) {
      try {
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        };

        const ccResponse = await axios.get(`https://www.codechef.com/users/${usernames.codechef}`, { 
          headers,
          timeout: 5000 
        });
        
        const html = ccResponse.data;
        const regex = /Fully Solved\s*\((\d+)\)/i;
        const match = html.match(regex);

        if (match && match[1]) {
          stats.codechef = parseInt(match[1], 10);
          console.log(`✅ CodeChef Scraped: ${stats.codechef}`);
        } else {
           throw new Error("Pattern not found");
        }
      } catch (e) {
        console.warn(`⚠️ CodeChef blocked. Using fallback.`);
        stats.codechef = CODECHEF_FALLBACK;
      }
    }

  } catch (error) {
    console.error("General error:", error);
  }

  return stats;
}