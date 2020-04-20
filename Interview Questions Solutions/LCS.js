/* 
    LOWEST COMMON SUBSEQUENCE AMONG 2 STRINGS
*/

function LCS(str1, str2) {
    const obj1 = {}, obj2 = {};
    let count=0;

    const arr1 = str1.split('');
    arr1.forEach(key => {
        if (obj1[key]) {
            obj1[key]++;
        } else obj1[key] = 1;
    })
    
    const arr2 = str2.split('');
    arr2.forEach(key => {
        if (obj2[key]) {
            obj2[key]++;
        } else obj2[key] = 1;
    });

    const values1 = Object.keys(obj1);
    values1.forEach(value => {
        let abc = 0;
        if (obj2[value]) {
            abc = Math.min(obj1[value], obj2[value]);
        }
        count+=abc;
    })

    return count;
}

console.log(LCS('AGGTAB', 'GXTXAYB'));