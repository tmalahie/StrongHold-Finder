function solve(form) {
	var x1 = form.x1.value*1, z1 = form.z1.value*1, theta1 = form.theta1.value*1, x2 = form.x2.value*1, z2 = form.z2.value*1, theta2 = form.theta2.value*1;
	theta1 = (theta1+90)*Math.PI/180; // On convertit en radians et coordonnées polaires classiques
	theta2 = (theta2+90)*Math.PI/180;
	var a1 = Math.cos(theta1), b1 = -Math.cos(theta2), c1 = x2-x1;
	var a2 = Math.sin(theta1), b2 = -Math.sin(theta2), c2 = z2-z1;
	
	var delta = a1*b2 - a2*b1;
	var xS = (c1*b2 - c2*b1)/delta;
	var zS = (a1*c2 - a2*c1)/delta;
	
	document.getElementById("xS").innerHTML = x1 + xS*a1;
	document.getElementById("zS").innerHTML = z1 + xS*a2;
	document.getElementById("result_after").style.display = "block";
	document.getElementById("result_before").style.display = "none";

    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $("#step4").offset().top - 63
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
	
	return false;
}