const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 9, 7.5, 8];

const alunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(alunosEMedias[0].includes(aluno)) {
        console.log(`O aluno ${aluno} está cadastrado`);
        const [alunos, medias] = alunosEMedias;//é bem mais legível criar uma VARIAVEL
        
        const indice = alunos.indexOf(aluno);//Puxa qual é o INDICE do Aluno se for correto
        console.log(`O indice do aluno é ${indice}`)
    } else {
        console.log('O aluno não está cadastrado')
    }
}
exibeNomeENota('Gabriel')