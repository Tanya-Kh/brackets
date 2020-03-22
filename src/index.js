module.exports = function check(str, bracketsConfig) {
    var strArray = str.split('');

    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (strArray[i] === bracketsConfig[j][0]) {
                if (strArray[i + 1] === bracketsConfig[j][1]) {
                    delete strArray[i];
                    delete strArray[i + 1];
                    strArray = strArray.filter(x => x !== undefined);
                    i = -1;
                    j = -1;
                }
            }
        }
    }
    if (strArray.length === 0) {
        return true;
    } else {
        return false;
    }
}



