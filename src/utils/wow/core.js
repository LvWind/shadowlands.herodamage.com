import ClassSpec from '../../assets/wow-data/ClassSpec.json'
import Legendaries from '../../assets/wow-data/Legendaries.json'
import Talents from '../../assets/wow-data/Talent.json'
import Trinkets from '../../assets/wow-data/Trinket.json'

/**
 * Get the class id from the class string
 * @param wowClass
 * @returns {*}
 */
export function getWowClassId (wowClass) {
  return ClassSpec[wowClass].classId
}

/**
 * Get the class color from the class string
 * @param wowClass
 * @returns {*}
 */
export function getWowClassColor (wowClass) {
  return ClassSpec[wowClass].classColor
}

/**
 * Get the class id and the spec id from the class and spec string
 * @param wowClass
 * @param spec
 * @returns {{classId, specId: *}}
 */
export function getWowClassIdAndSpecId (wowClass, spec) {
  const classSpec = ClassSpec[wowClass]
  const classId = classSpec.classId
  const specId = classSpec.specIds[spec]
  return { classId, specId }
}

/**
 *
 * @param wowClass
 * @param spec
 * @returns {*}
 */
export function getTalentsTree (wowClass, spec) {
  const { classId, specId } = getWowClassIdAndSpecId(wowClass, spec)
  const classTalents = Talents.mapping[classId]
  return Object.assign({}, classTalents[specId])
}

/**
 *
 * @param talentSpellIds
 * @returns {string}
 */
export function getTalentsMappingFromSpellIds (talentSpellIds) {
  let mapping = ''
  for (const talentSpellId of talentSpellIds) {
    mapping += Talents.spellIdsToColumn[talentSpellId]
  }
  return mapping
}

/**
 *
 * @param mappingA
 * @param mappingB
 * @returns {string}
 */
export function getTalentsMappingDifference (mappingA, mappingB) {
  let mapping = ''
  for (let i = 0; i < mappingA.length; i++) {
    const columnA = mappingA.charAt(i)
    const columnB = mappingB.charAt(i)
    mapping += columnA === columnB ? '0' : columnB
  }
  return mapping
}

/**
 *
 * @param legendaryName
 * @returns {*}
 */
export function getLegendaryInformation (legendaryName) {
  return Legendaries[legendaryName]
}

/**
 *
 * @param trinketName
 * @returns {*}
 */
export function getTrinketInformation (trinketName) {
  return Trinkets[trinketName]
}
