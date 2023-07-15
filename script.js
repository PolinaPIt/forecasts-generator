/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

const forecastBtn = document.querySelector('.forecast-btn');
const prediction = document.querySelector('.current-forecast h1');
const probability = document.querySelector('.current-forecast p');
const forecastItem = document.querySelector('#forecast-item');
const forcasts = document.querySelector('.forecasts');

forecastBtn.addEventListener('click', predict()) {

    /* Подставляй текст нового предсказания в .current-forecast h1 */
    /* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

    const predictionText = `${value}`;
    prediction.textContent = predictionText;

    const value = getRandomValue(6);

    switch (value) {
        case 0:
            console.log('К концу текущего года твои доходы увеличатся в 3 раза.');
            break;
        case 1:
            console.log('Сегодня вечером ты услышишь признание в любви от любимого человека.');
            break;
        case 2:
            console.log('Твой ребенок вырастет замечательным счастливым человеком.');
            break;
        case 3:
            console.log('Через 3 месяца исполнится твоя заветная мечта.');
            break;
        case 4:
            console.log('Твоя работа будет тебя наполнять и вдохновлять.');
            break;
        case 5:
            console.log('Тебе подарят шикарный букет.');
            break;
    }

    prediction.append(predictionText);

    /* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
    /* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

    const persent = getRandomValue(101);
    const probabilityText = `Вероятность: ${persent}%`;
    probability.textContent = probabilityText;

    /* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

    function getRandomValue(max) {
        return Math.floor(Math.random() * `${max}`);
    }

    probability.append(probabilityText);

    /* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

    for (let i = 0; i > 0, i++) {

        /* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

        function addInListByTemplate(predictionText, probabilityText) {
            const list = forecastItem.content.cloneNode(true);
            list.querySelector('.forecast-item h3').textContent = predictionText;
            list.querySelector('.forecast-item p').textContent = probabilityText;
            return list;
        }

        const list = addInListByTemplate(predictionText, probabilityText);
        forcasts.prepend(list);
    }
}
