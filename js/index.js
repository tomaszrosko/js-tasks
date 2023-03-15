const currentDay = document.querySelector('.current-day')
const fact = document.querySelector('.fact')

const facts = [
    'W Polsce hoduje się ponad 120 milionów kur. Czy wiedzieliście, że są one najbliższymi krewnymi dinozaura T-Rexa? W 2007 roku potwierdziły to testy DNA.',
    '10 tysięcy lat temu żyły leniwce wielkości dzisiejszego słonia.',
    'Najmniejszym ptakiem na świecie jest koliber. Jako jedyny potrafi latać do tyłu. Te niezwykłe ptaki są również rekordzistami w prędkości poruszania skrzydełkami. Najmniejsze osobniki potrafią wykonać około 90 machnięć na sekundę.',
    'Hipopotam nilowy może ważyć ponad 4 tony. Aż 25% jego wagi stanowi gruba na 4 cm skóra. Istny czołg. Nic dziwnego, że hipopotamy nie mają naturalnych wrogów.',
    'Największym zabójcą ludzi wśród zwierząt jest… komar. Szacuje się, że za ich sprawą rocznie umiera ponad 2 miliony osób. Na szczęście komary występujące w Polsce, mimo że są uciążliwe, nie stwarzają dla nas zagrożenia.',
    'Wśród ptaków niezwykłym okazem jest Jerzyk Zwyczajny. Ciężko w to uwierzyć, ale potrafi bez przerwy znajdować się w powietrzu ponad 2 lata. Zastanawiacie się jak to możliwe? Jerzyk Zwyczajny opracował taka taktykę, że gdy czuje się zmęczony, wznosi się na wysokość ponad 3 tysięcy metrów i swobodnie szybując ucina krótkie drzemki.',
    'Jednym z największych gryzoni jest jeżozwierz, mający na swym ciele ponad 30 000 ostrych jak brzytwa kolców.',
    'Czy wiedzieliście, że płeć krokodyla zależy od temperatury w jakiej znajdowało się jajko? W niskiej wykluwają się samice, a w wysokiej samce.',
    'Rozpędzony kangur wykonuje bez większego problemu skoki o długości około 9 metrów. Dla porównania rekord świata w skoku dal mężczyzn wynosi 8,95 m.',
    'Dużo osób może to zdziwić, ale kameleon tak naprawdę nie dostosowuje swojej barwy do otoczenia. Na jego skórze znajdują się nano-kryształki, które w różny sposób odbijają fale światła, w zależności od jego nastroju.',
    'Najszybszym zwierzęciem lądowym jest gepard. Aż trudno w to uwierzyć, ale potrafi rozpędzić się do 110 km/h w 3 sekundy. Niewiele jest samochodów sportowych, które mogą pochwalić się takim wynikiem.',
    'W dżunglach Ameryki Południowej żyją mrówki mające długość 2,5 cm. Ból po ich ukąszeniu, utrzymujący się przez 24 godziny, można porównać z postrzałem z pistoletu.',
    'Krowę zna każdy, ale czy wiedzieliście, że w ciągu doby potrafi wytworzyć ponad 150 litrów śliny?',
    'Jednym z najbardziej niesamowitych zwierząt na świecie jest dziobak. Jest to jeden z dwóch znanych ssaków, który składa jaja.',
    'Dla wielu osób może być to zaskoczeniem, ale kruki są jednymi z najinteligentniejszych zwierząt na świecie. Na równi stawiane są z szympansami i delfinami. Co ciekawe potrafią doskonale naśladować mowę ludzką. Po odpowiednim szkoleniu radzą sobie z tym lepiej od większości papug.',
    'Niedźwiedź polarny tak naprawdę nie jest biały. To złudzenie optyczne spowodowane odbijającym się światłem od jego przezroczystej sierści.',
    'Każde z ośmiu ramion ośmiornicy ma oddzielne neurony. Mówiąc prościej każde jej ramię „myśli” oddzielnie.',
    'Pszczoły podczas szukania kwiatów mogą oddalić się od ula na odległość aż 5 km, doskonale zapamiętując drogę powrotną.',
    'Każdy zna dźwięk jaki wydaje pies – „hau-hau”. Czy wiedzieliście, że w zależności od kraju różnie się go zapisuje? W Chinach „wang-wang”, w Czechach „haff-haff”, w Hiszpanii „guau-guau”, we Włoszech „bau-bau”.',



]

const day = new Date()
currentDay.textContent = (day.toLocaleDateString("default", {weekday: "long"}))

const showRandom = () => {
    const number = Math.floor(Math.random() * facts.length)
    console.log(number);

    fact.textContent = facts[number];


}

showRandom();