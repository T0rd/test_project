export default function() {
  this.get('/events', function(db, request){
	let events = [{
	  type: 'events',
	  id: 1,
	  attributes:{
	  title: 'First trip',
	  shortdescribe: 'Visit London',
	  describe: 'Meet old friend. Look at the Times river.'
	              }
	       }, {
          type: 'events',
          id: 2,
          attributes:{
          title: 'Second trip',
          shortdescribe: 'Visit France',
          describe: 'Watch Euro 2016. Make photoes with football players.'
                      }
               },
	  {
          type: 'events',
          id: 3,
          attributes:{
          title: 'Third trip',
          shortdescribe: 'Visit Tokyo',
          describe: 'See another culture.'
 }
      }];

    if(request.queryParams.title !== undefined) {
      let filteredEvents = events.filter(function(i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return { data: filteredEvents };
    } else {
      return { data: events };
    }
  });
}  
// These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

