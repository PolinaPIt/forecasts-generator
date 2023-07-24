/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

const forecastBtn = document.querySelector('.forecast-btn');
const prediction = document.querySelector('.current-forecast h1');
const probability = document.querySelector('.current-forecast p');
const forecastItem = document.querySelector('#forecast-item');
const forcasts = document.querySelector('.forecasts');

forecastBtn.addEventListener('click', predict);

    /* Подставляй текст нового предсказания в .current-forecast h1 */
    /* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

    function predict() {

        const value = getRandomValue(6);
        let predictionText;
        let probabilityText;

        switch (value) {
            case 0:
            predictionText = 'К концу текущего года твои доходы увеличатся в 3 раза.';
            break;
            case 1:
            predictionText = 'Сегодня вечером ты услышишь признание в любви от любимого человека.';
            break;
            case 2:
            predictionText = 'Твой ребенок вырастет замечательным счастливым человеком.';
            break;
            case 3:
            predictionText = 'Через 3 месяца исполнится твоя заветная мечта.';
            break;
            case 4:
            predictionText = 'Твоя работа будет тебя наполнять и вдохновлять.';
            break;
            case 5:
            predictionText = 'Тебе подарят шикарный букет.';
            break;
        }

        /* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
        /* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

        if (predictionText) {
            console.log(predictionText);
            prediction.textContent = predictionText;
            
            const percent = getRandomValue(101);
            probabilityText = `Вероятность: ${percent}%`;
            console.log(probabilityText);
            probability.textContent = probabilityText;
            
            const listItem = addInListByTemplate(predictionText, probabilityText);
            forecasts.prepend(listItem);
        }

        /* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

        function getRandomValue(max) {
            return Math.floor(Math.random() * max);
        }


        /* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
        /* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

        function addInListByTemplate(predictionText, probabilityText) {
            const listItem = forecastItem.content.cloneNode(true);
            listItem.querySelector('.forecast-item h3').textContent = predictionText;
            listItem.querySelector('.forecast-item p').textContent = probabilityText;
            return listItem;
        }
    }

