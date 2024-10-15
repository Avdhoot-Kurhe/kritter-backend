class College {  
    constructor(name, location, fees, ranking) {  
        this.name = name;  
        this.location = location;  
        this.fees = fees;  
        this.ranking = ranking;  
    }  
}  

function filterAndRankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {  
    const filteredColleges = [];  
    for (const college of colleges) {
        if (college.location === preferredLocation && college.fees <= maxFees) {  
            const score = (college.ranking * rankingWeight) + (college.fees / maxFees * feesWeight);  
            filteredColleges.push({ college, score });  
        }  
    }  

    filteredColleges.sort((a, b) => a.score - b.score);  

    return filteredColleges;  
}  

const colleges = [  
    new College("College A", "New York", 20000, 1),  
    new College("College B", "California", 15000, 2),  
    new College("College C", "New York", 25000, 3),  
    new College("College D", "New York", 10000, 4)  
];  

const preferredLocation = "New York";  
const maxFees = 20000;  
const rankingWeight = 2;  
const feesWeight = 1;  

const result = filterAndRankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);  

for (const { college, score } of result) {  
    console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${score.toFixed(2)}`);  
}