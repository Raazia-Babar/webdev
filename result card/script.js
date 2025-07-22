// Full result data with Quality Points from the transcript
const resultData = {
    // 1st Semester Fall 2023
    "CS101": { name: "Programming Fundamentals", marks: 85, grade: "A", creditHours: 4, qualityPoints: 16 },
    "GE102": { name: "Application of ICT", marks: 74, grade: "B+", creditHours: 3, qualityPoints: 11.1 },
    "GE103": { name: "Discrete Structures", marks: 68, grade: "B", creditHours: 3, qualityPoints: 9 },
    "GE104": { name: "Calculus and Analytic Geometry", marks: 80, grade: "A", creditHours: 3, qualityPoints: 12 },
    "GE105": { name: "Functional English", marks: 84, grade: "A", creditHours: 3, qualityPoints: 12 },
  
    // 2nd Semester Spring 2024
    "CS102": { name: "Object Oriented Programming", marks: 85, grade: "A", creditHours: 4, qualityPoints: 16 },
    "CS103": { name: "Database Systems", marks: 61, grade: "C", creditHours: 4, qualityPoints: 9.2 },
    "CS104": { name: "Digital Logic Design", marks: 80, grade: "A", creditHours: 3, qualityPoints: 12 },
    "MT101": { name: "Multivariable Calculus", marks: 74, grade: "B+", creditHours: 3, qualityPoints: 11.1 },
    "MT102": { name: "Linear Algebra", marks: 66, grade: "B", creditHours: 3, qualityPoints: 9.3 },
  
    // 3rd Semester Fall 2024
    "CS201": { name: "Data Structures", marks: 68, grade: "B", creditHours: 4, qualityPoints: 13.6 },
    "CS202": { name: "Information Security", marks: 64, grade: "B", creditHours: 3, qualityPoints: 9 },
    "CS203": { name: "Artificial Intelligence", marks: 77, grade: "B+", creditHours: 3, qualityPoints: 10.2 },
    "CS204": { name: "Computer Networks", marks: 70, grade: "B", creditHours: 3, qualityPoints: 9 },
    "CS205": { name: "Software Engineering", marks: 74, grade: "B+", creditHours: 3, qualityPoints: 11.1 },
    "MT201": { name: "Probability & Statistics", marks: 80, grade: "A", creditHours: 3, qualityPoints: 12 },
    "FIA-00292": { name: "Arabic for Understanding Quran", marks: 88, grade: "A", creditHours: 3, qualityPoints: 12 }
  };
  
  function searchResult() {
    const code = document.getElementById("courseCodeInput").value.toUpperCase();
    const container = document.getElementById("resultContainer");
    container.innerHTML = "";
  
    const result = resultData[code];
    if (result) {
      container.innerHTML = `
        <h3>${code} - ${result.name}</h3>
        <p>Marks: ${result.marks}</p>
        <p>Grade: ${result.grade}</p>
        <p>Credit Hours: ${result.creditHours}</p>
        <p>Quality Points: ${result.qualityPoints}</p>
      `;
    } else {
      container.innerHTML = "<p>No result found for the entered course code.</p>";
    }
  }
  
  function showAllResults() {
    const container = document.getElementById("resultContainer");
    container.innerHTML = "";
  
    for (const code in resultData) {
      const res = resultData[code];
      container.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px 0;">
          <h3>${code} - ${res.name}</h3>
          <p>Marks: ${res.marks}</p>
          <p>Grade: ${res.grade}</p>
          <p>Credit Hours: ${res.creditHours}</p>
          <p>Quality Points: ${res.qualityPoints}</p>
        </div>
      `;
    }
  }
  