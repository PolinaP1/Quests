const findingsfiltering = [
    {
        id: "1", 
        img: "TipFilter", //название изображения для фильтра "Тип"
        designation: "Тип", //название фильтра
        //данные в выпадающем  списке
        insides: [
            {inside: "С актерами"},
            {inside: "Без актеров"}
        ]
    },
    {
        id: "2",
        img: "ViewFilter", //название изображения для фильтра "Вид"
        designation: "Вид",//название фильтра
        //данные в выпадающем  списке
        insides: [
            {inside: "Страшные"},
            {inside: "Не страшные"}
        ]
    },
    {
        id: "3",
        img: "PlayersFilter",//название изображения для фильтра "Игроки"
        designation: "Игроки",//название фильтра
        //данные в выпадающем  списке
        insides: [
            {inside: "2"},
            {inside: "3"},
            {inside: "4"},
            {inside: "5"}
        ]
    },
    {
        id: "4",
        img: "AgeFilter",//название изображения для фильтра "Возраст"
        designation: "Возраст",//название фильтра
        //данные в выпадающем  списке
        insides: [
            {inside: "14+"},
            {inside: "16+"},
            {inside: "18+"}
        ]
    }
]
//экспортирование утилиты
export default findingsfiltering