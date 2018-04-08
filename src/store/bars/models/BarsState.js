export class BarsState {
  constructor() {
    this.barsById = {};
    this.fetchInProgress = false;
    this.fetchError = false;
    this.featched = false;
  }
}

Object.freeze(BarsState);
export default BarsState;
