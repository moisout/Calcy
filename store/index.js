export const state = () => ({
  calculationString: '',
  resultString: ''
})

export const mutations = {
  addCharacter (state, character) {
    state.calculationString += character
    state.resultString += character
  },
  removeCharacter (state) {
    state.calculationString = state.calculationString.substring(0, state.calculationString.length - 1)
  },
  setInput (state, input) {
    state.calculationString = input
  }
}
