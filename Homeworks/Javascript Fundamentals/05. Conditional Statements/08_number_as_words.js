function numberAsWords(input) {
    var number = +input[0];
    var result = '';
    var onesLow = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var onesUp = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var tensLow = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ];
    var tensUp = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', ];
    var teensLow = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var teensUp = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var hundreds = number / 100 | 0;
    var tens = (number / 10) % 10 | 0;
    var ones = number % 10;
    if (hundreds === 0 && tens === 0) {
        result = onesUp[ones];
    } else if (hundreds === 0) {
        if (tens === 1) {
            result = teensUp[ones];
        } else {
            if (ones === 0) {
                result = tensUp[tens];
            } else {
                result = tensUp[tens] + ' ' + onesLow[ones];
            }
        }
    } else {
        if (tens === 0 && ones === 0) {
            result = onesUp[hundreds] + ' hundred';
        } else if (ones === 0) {
            result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens];
        } else if (tens === 0) {
            result = onesUp[hundreds] + ' hundred' + ' and ' + onesLow[ones];
        } else {
            if (tens === 1 && ones >= 1) {
                result = onesUp[hundreds] + ' hundred' + ' and ' + teensLow[ones];
            } else {
                result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens] + ' ' + onesLow[ones];
            }
        }
    }
    console.log(result);
}

numberAsWords(['0']);
numberAsWords(['9']);
numberAsWords(['10']);
numberAsWords(['12']);
numberAsWords(['19']);
numberAsWords(['25']);
numberAsWords(['98']);
numberAsWords(['273']);
numberAsWords(['400']);
numberAsWords(['501']);
numberAsWords(['617']);
numberAsWords(['711']);
numberAsWords(['999']);
