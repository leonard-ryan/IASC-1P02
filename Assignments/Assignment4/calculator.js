function calculateFantasyPoints() {
            // Point values for each stat
            const pointsPerGoal = 3;
            const pointsPerAssist = 2;
            const pointsPerShot = 0.5;
            const pointsPerHit = 0.5;
            const pointsPerPlusMinus = 0.5;
            const pointsPerBlockedShot = 0.5;
            const pointsPerPPPoint = 0.5;
            const pointsPerSHPoint = 1;

            // Get input values
            const goals = parseInt(document.getElementById('goals').value) || 0;
            const assists = parseInt(document.getElementById('assists').value) || 0;
            const shots = parseInt(document.getElementById('shots').value) || 0;
            const hits = parseInt(document.getElementById('hits').value) || 0;
            const plusMinus = parseInt(document.getElementById('plusMinus').value) || 0;
            const blockedShots = parseInt(document.getElementById('blockedShots').value) || 0;
            const ppPoints = parseInt(document.getElementById('ppPoints').value) || 0;
            const shPoints = parseInt(document.getElementById('shPoints').value) || 0;

            // Calculate total points
            const totalPoints = (goals * pointsPerGoal) +
                                (assists * pointsPerAssist) +
                                (shots * pointsPerShot) +
                                (hits * pointsPerHit) +
                                (plusMinus * pointsPerPlusMinus) +
                                (blockedShots * pointsPerBlockedShot) +
                                (ppPoints * pointsPerPPPoint) +
                                (shPoints * pointsPerSHPoint);

            // Display result
            document.getElementById('result').innerText = `Total Fantasy Points: ${totalPoints}`;
        }
