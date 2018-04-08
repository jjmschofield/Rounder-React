export class RoundsState {
  constructor() {
    this.roundsById = {};
    this.fetchInProgress = false;
    this.fetchError = false;
    this.featched = false;
    this.putInProgress = false;
    this.putError = false;
  }
}

Object.freeze(RoundsState);
export default RoundsState;
