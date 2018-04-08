export class RoundsState {
  constructor() {
    this.roundsById = {};
    this.fetchInProgress = false;
    this.fetchError = false;
    this.featched = false;
  }
}

Object.freeze(RoundsState);
export default RoundsState;
