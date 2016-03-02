
jQuery(document).ready( $ => {
	var $input = $('#input'),
	    $results = $('#result');

	var keyups = Rx.Observable.fromEvent($input, 'keyup')
	    .map(e =>  e.target.value )
	    .filter(text => text.length > 2);
	var throttled = keyups.throttle(500);
	var suggestions = throttled.distinctUntilChanged();
// });

	suggestions.subscribe(data => {
			console.log("helloworl" + data);
		   
		    /* Do something with the data like binding */
		    $results.empty();
		   
		    $.each([...data], (_, value) => $('<p>' + value + '</p>').appendTo($results));
		}, error => {
	    /* handle any errors */
		    $results.empty();
		    $('<p>Error: ' + error + '</p>').appendTo($results);
	});
});