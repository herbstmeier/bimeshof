class News {
    date = ''
    title = ''

    constructor(date,title) {
        this.date = date
        this.title = title
    }
}

const news = [
    new News('29.01.2023','Kennenlerntreffen'),
    new News('29.04.2023','Helfertag Gewächshäuser bepflanzen'),
    new News('24.06.2023','Sonnwendfeier'),
    new News('16.09.2023','Kartoffelernte')
]

export {news}