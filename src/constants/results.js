const INIT = 'Probablemente usted posee'

const MYOPIA = 'Miopía'
const HYPEROPIA = 'Hipermetropía'
const ASTIGMATISM = 'Astigmatismo'
const NORMAL = 'un ojo normal'

const MYOPIA_CHARACTERISTICS = `Características de la ${MYOPIA}.`
const HYPEROPIA_CHARACTERISTICS = `la visión cercana de los objetos se torna borroso o distorcionado 
                                para usted. Los rayos de la luz se enfocan después de la retina, 
                                debido a que la forma de su globo ocular se presenta más alargada 
                                verticalmente, no es totalmente esférica.`
const ASTIGMATISM_CHARACTERISTICS = `Características del ${ASTIGMATISM}.`
const NORMAL_CHARACTERISTICS = `Características de ${NORMAL}.`

const getTitle = (problem) => {
    return `Ojo ${problem}`
}

const getEnd = (problem) => {
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
            description = `${NORMAL_CHARACTERISTICS} ${getEnd(NORMAL)}`
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

export default RESULTS
