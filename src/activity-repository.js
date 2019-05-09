class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}