//array dos filmes que selecionanos
const arrMovie = [
    {ptbr: 'Centopéia Humana ', ingles:'human centipede'},
    {ptbr: 'Camisinha Assassinas', ingles:'Kondom des Grauens'},
    {ptbr: 'Rubber, Pneu Assassino', ingles:'Rubber'},
    {ptbr: 'Ataque dos tomates assassinos', ingles:'Attack of the Killer Tomatoes'},
    {ptbr: 'Sharknado', ingles:'Sharknado'},
    {ptbr: 'Ataque dos vermes Malditos', ingles:'Tremors'},
    {ptbr: 'Cinderela Baiana', ingles:'cinderela baiana '},
    {ptbr: 'Vagina Dentada', ingles:'Teeth'},
    {ptbr: 'Malditas Aranhas', ingles:'Eight Legged Freaks'},
    {ptbr: 'slender man', ingles:'slender man'},
    {ptbr: 'Dragon Ball evolution', ingles:'DragonBall evolution'},
    {ptbr: 'Pink Flamingos', ingles:'Pink Flamingos'},
    {ptbr: 'À Meia-Noite Levarei Sua Alma', ingles:'At midnight I will take your soul '},
    {ptbr: 'Caderno da Morte', ingles:'death Note'},
    {ptbr: "Velocipastor", ingles: "Velocipastor"},
    {ptbr: "Os maus mortos ", ingles : "the evil dead"}
]


function moldeCard(objeto) {
    return `<li data-title="${objeto.Title}"><img src="${objeto.Poster}"></li>`
}

