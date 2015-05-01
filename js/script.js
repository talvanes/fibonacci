$(document).ready(function(){
	// Default options
	$("#number").attr("max", Number.MAX_VALUE);
	$("#two").css("display", "none");

	// input[type=radio] OnChange event
	$("input[type=radio]").on("change", function(){
		var checkd = $("input[type=radio]:checked").val();
		switch(checkd){
			case "nth":
				$("#one").css("display", "none");
				$("#two").css("display", "inline");
				break;
			case "n":
				$("#one").css("display", "inline");
				$("#two").css("display", "none");
				break;
		}
	});

	// button OnClick event
	$(":button").click(function(){

		$("#result").html("");

		// Fibonacci sequence (initial values)
		var sequence = [1, 1];
		var _last = sequence[0],
				_this = sequence[1],
				_next;

		var number = parseInt($("#number").val());

		var checkd = $("input[type=radio]:checked").val();
		switch(checkd){
			case "nth":
				// Generate sequence until nth number
				if(number > 2){
					for(var index = 1; (index <= number) && (_next < Infinity); index += 1){
						// Fibonacci: next = this + last
						_next = _this + _last;
						sequence.push(_next);
						_last = _this;
						_this = _next;
					}
				}
				break;
			case "n":
				// Generate sequence until number n
				if(number > 2){
					for(var index = 1; (sequence[index] <= number); index += 1){
					// Do sequence only if number > 2
					// (number = 0 or number = 1 should output [1 1])
						// Fibonacci: next = this + last
						_next = _this + _last;
						_last = _this;
						_this = _next;
						if((_next <= number)) sequence.push(_next);
					}
				}
				break;
		}

		// Traverse array generated
		for(var i = 0; (i < number) && (sequence[i] !== undefined); i += 1){
			$("#result").append("<span class='number'>" + sequence[i] + "</span>");
		}
	});
});
