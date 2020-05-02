(function () {
    'use strict';

    // mapOrder 함수 표현식
    const mapOrder = (array, order, key) => {
        array.sort((a, b) => {
            const A = a[key];
            const B = b[key];

            // 두 수의 index를 비교하여 1 또는 -1을 리턴합니다.
            if (order.indexOf(A) > order.indexOf(B)) {
                return 1;
            } else {
                return -1;
            }
        });
        // 함수 호출부에 들어왔던 array를 솔팅하여 1 또는 -1을 리턴해줍니다.
        return array;
    };

    const countryArray = [
        { id: 'zh', label: '중국' },
        { id: 'ru', label: '러시아' },
        { id: 'ko', label: '한국' },
    ];

    const countryOrder = ['en', 'ko', 'ru', 'zh']; // 해당 순서로 정렬하고자 합니다.

    const orderedArray = mapOrder(countryArray, countryOrder, 'id'); // id에 따라서 매칭하여 어레이를 다시 반환합니다.

    // Json.Stringify를 통하여 깊은 복사를 실행합니다.
    console.log('Ordered:', JSON.stringify(orderedArray));
})();
