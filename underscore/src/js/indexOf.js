import createIndexFinder from '../utils/createIndexFinder'
import findIndex from './findIndex'
import sortedIndex from './sortedIndex'

const indexOf = createIndexFinder(1, findIndex, sortedIndex)

export default indexOf
