const INIT = 'Probablemente usted posee'

const MYOPIA = 'Miopía'
const HYPEROPIA = 'Hipermetropía'
const ASTIGMATISM = 'Astigmatismo'
const NORMAL = 'Normal'

const MYOPIA_CHARACTERISTICS = `la visión lejana de los objetos se torna borroso o distorcionado 
                                para usted. Los rayos de la luz se enfocan antes de la retina, 
                                debido a que la forma de su globo ocular se presenta más alargada
                                horizontalmente, no es totalmente esférica.`
const HYPEROPIA_CHARACTERISTICS = `la visión cercana de los objetos se torna borroso o distorcionado 
                                para usted. Los rayos de la luz se enfocan después de la retina, 
                                debido a que la forma de su globo ocular se presenta más alargada 
                                verticalmente, no es totalmente esférica.`
const ASTIGMATISM_CHARACTERISTICS = `la visión lejana y cercana de los objetos se torna borroso o 
                                distorcionado para usted. Los rayos de la luz se enfocan en más de 
                                un punto de la retina, debido a que la córnea no presenta la misma 
                                curvatura en todas sus zonas.`
const NORMAL_CHARACTERISTICS = `por lo que no tendrá ningún síntoma referido a la visión borrosa.`

const getTitle = (problem) => {
    return `Ojo ${problem}`
}

const getEnd = (problem) => {
    if (problem === NORMAL) {
        return 'Usted puede observar la comparación entre un ojo normal y los ojos con problemas visuales mediante una gráfica.'
    }
    return `Usted puede observar la comparación entre un ojo normal y uno con ${problem} mediante una gráfica.`
}

const getDescription = (problem) => {
    let description = `${INIT} ${problem}, `
    switch (problem) {
        case MYOPIA:
            description += `${MYOPIA_CHARACTERISTICS} ${getEnd(MYOPIA)}`
            break
        case HYPEROPIA:
            description += `${HYPEROPIA_CHARACTERISTICS} ${getEnd(HYPEROPIA)}`
            break
        case ASTIGMATISM:
            description += `${ASTIGMATISM_CHARACTERISTICS} ${getEnd(ASTIGMATISM)}`
            break
        default:
            description = `${INIT} un ojo ${problem}, ${NORMAL_CHARACTERISTICS} ${getEnd(
                NORMAL
            )}`
    }
    return description
}

const RESULTS = [
    {
        title: `${getTitle(MYOPIA)}`,
        description: `${getDescription(MYOPIA)}`,
    },
    {
        title: `${getTitle(HYPEROPIA)}`,
        description: `${getDescription(HYPEROPIA)}`,
    },
    {
        title: `${getTitle(ASTIGMATISM)}`,
        description: `${getDescription(ASTIGMATISM)}`,
    },
    {
        title: `${getTitle(NORMAL)}`,
        description: `${getDescription(NORMAL)}`,
    },
]

export const MOM_DAD_NORMAL = { value: NORMAL, text: 'No padece ningún problema visual' }
export const MOM_DAD_MYOPIA = { value: MYOPIA, text: MYOPIA }
export const MOM_DAD_HYPEROPIA = { value: HYPEROPIA, text: HYPEROPIA }
export const MOM_DAD_ASTIGMATISM = { value: ASTIGMATISM, text: ASTIGMATISM }

export const getProblemArray = (momProblem, dadProblem) => {
    let problemArray = []
    momProblem === MYOPIA ? problemArray.push(1) : problemArray.push(0)
    dadProblem === MYOPIA ? problemArray.push(1) : problemArray.push(0)
    momProblem === HYPEROPIA ? problemArray.push(1) : problemArray.push(0)
    dadProblem === HYPEROPIA ? problemArray.push(1) : problemArray.push(0)
    momProblem === ASTIGMATISM ? problemArray.push(1) : problemArray.push(0)
    dadProblem === ASTIGMATISM ? problemArray.push(1) : problemArray.push(0)

    return problemArray
}

export default RESULTS
