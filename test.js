
const fs = require('fs');

function decodeYValue(base, value) {
    let baseValue = parseInt(base);  
    return parseInt(value, baseValue); 
}


function lagrangeInterpolation(roots, k) {
    let constantTerm = 0;

    
    for (let i = 0; i < k; i++) {
        let xi = roots[i][0];
        let yi = roots[i][1];
        let li = 1; 
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = roots[j][0];
                li *= (0 - xj) / (xi - xj); 
            }
        }
       
        constantTerm += yi * li;
    }

    return constantTerm;
}

fs.readFile('test_case.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonData = JSON.parse(data);

    const n = jsonData.keys.n;
    const k = jsonData.keys.k;

    const roots = [];
    for (let key in jsonData) {
        if (!isNaN(key)) {  
            let x = parseInt(key);  
            let base = jsonData[key].base;
            let value = jsonData[key].value;
            let y = decodeYValue(base, value);  
            roots.push([x, y]);
        }
    }

   
    const constantTerm = lagrangeInterpolation(roots, k);
    console.log(`The constant term 'c' is: ${constantTerm}`);
});
