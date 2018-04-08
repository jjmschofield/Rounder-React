export class RoundsState {
  constructor() {
    this.roundsById = {};
    this.fetchInProgress = false;
    this.fetchError = false;
  }
}

Object.freeze(RoundsState);
export default RoundsState;
