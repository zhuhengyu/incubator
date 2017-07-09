require(['foo'], function(foo) {
	const add = foo.currying(function(a, b) {
		return a + b;
	});
	alert(add(1, 2));
	alert(add(1)(2));
});