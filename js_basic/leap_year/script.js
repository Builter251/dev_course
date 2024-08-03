document.addEventListener('DOMContentLoaded', () => {
    const yearSingle = document.querySelector('#yearSingle');
    const resultSingle = document.querySelector('#calculatorSingle .result');
    const btnSingle = document.querySelector('#calculatorSingle button');

    const yearRangeStart = document.querySelector('#yearRangeStart');
    const yearRangeFinish = document.querySelector('#yearRangeFinish');
    const resultRange = document.querySelector('#calculatorRange .result');
    const btnRange = document.querySelector('#calculatorRange button');

    function validateYear(inputElement) {
        const year = +(inputElement.value);
        return Number.isInteger(year) && year > 0; // 사용자 입력값이 양의 정수인지 확인
    }

    function calcLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    btnSingle.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateYear(yearSingle)) {
            const year = +(yearSingle.value);
            resultSingle.textContent = calcLeapYear(year) ? `${year}년은 윤년입니다.` : `${year}년은 윤년이 아닙니다.`;
        } else {
            resultSingle.textContent = '올바른 연도를 입력해주십시오.';
        }
    });

    btnRange.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateYear(yearRangeStart) && validateYear(yearRangeFinish)) {
            const listLeapYears = [];
            let yearStart = +(yearRangeStart.value);
            const yearFinish = +(yearRangeFinish.value);

            if (yearFinish > yearStart) {
                while (yearStart <= yearFinish) {
                    if (calcLeapYear(yearStart)) {
                        listLeapYears.push(yearStart);
                    }
                    ++yearStart;
                }

                resultRange.textContent = listLeapYears.length > 0 ? listLeapYears.join('년, ') + '년' : '윤년이 없습니다.';
            } else {
                resultRange.textContent = '올바른 연도를 입력해주십시오.'; // 시작년도가 종료년도보다 큼
            }
        } else {
            resultRange.textContent = '올바른 연도를 입력해주십시오.'; // 입력갑 양의 정수 아님
        }
    });
});
