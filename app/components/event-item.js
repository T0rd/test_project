import Ember from 'ember';

export default Ember.Component.extend({
	isDescribeShowing: false,
	actions: {
	describeShow() {
	 this.set('isDescribeShowing', true);
	 		},
	describeHide() {
	 this.set('isDescribeShowing', false);
			}
		}
});
