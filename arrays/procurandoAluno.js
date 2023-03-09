const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 9, 7.5, 8];

const alunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(alunosEMedias[0].includes(aluno)) {
        console.log(`O aluno ${aluno} está cadastrado`);

        const indice = alunosEMedias[0].indexOf(aluno);//Puxa qual é o INDICE do Aluno se for correto
        console.log(`O indice do aluno é ${indice}`)
    } else {
        console.log('O aluno não está cadastraado')
    }
}

exibeNomeENota('João')