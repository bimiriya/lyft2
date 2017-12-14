$(document).ready(function() {
    $("#splasher").append("<div id='splash' class='text-center'><h1>Lyft</h1></div>").delay(2000).fadeOut("slow");
    $("#home").append("<div class='container'><div class='row'><div class='col-xs-12'><h2>Lyft</h2></div></div><div class='row'><div class='col-xs-12'><h1>Lyft Lyfe</h1></div></div><div class='row'><div class='col-xs-6 text-right'><button>LOG IN</button></div><div class='col-xs-6'><button id='signup'>SIGN UP</button></div></div></div>").show(3000);

    $("#signup").click(function() {
        $("#home").hide();
        $("#signup-page").append("<div class='container'><div class='row'><div class='col-xs-12 text-center'><span class='glyphicon glyphicon-circle-arrow-left'></span><h2>Sign up</h2><h4>Join now for free ride credit</h4></div></div><div class='row'><div class='col-xs-4 text-right'><select><option>CL</option><option>MEX</option><option>VEN</option><option>US</option></select></div><div class='col-xs-8'><input type='number'></div></div><div class='row'><div class='col-xs-12'><p>We'll send a text to verify your phon</p></div></div><div class='row'><div class='col-xs-12'><button id='signup-next'>NEXT</button></div></div></div>")

        $("#signup-next").click(function() {
            if ($("#signup-page input") !== 0) {
                $("#signup-next").click(function() {
                    var x = Math.floor((Math.random() * 1000) + 1);
                    alert("Your code is " + x);
                    $("#signup-page").hide();

                    $("#verify-code").append("<div class='container'><div class='row'><div class='col-xs-12'><span class='glyphicon glyphicon-circle-arrow-left'></span><h2>Verify phone number</h2><h3>Join now for free ride credit</h3></div></div><div class='row'><div class='col-xs-12'><span>LAB</span><input type='number' maxlength='3'></div></div><div class='row'><div class='col-xs-12'><p>Enter the code sent to +52</p></div></div><div class='row'><div class='col-xs-12'><button id='resend-btn'>Resend code</button></div></div><div class='row'><div class='col-xs-12'><button id='verify-next'>NEXT</button></div></div></div>");
                    $("#resend-btn").click(function() {
                        var x = Math.floor((Math.random() * 1000) + 1);
                        alert("Your code is " + x);
                    })
                    $("#verify-next").click(function() {
                        if ($("#verify-code input") !== 0) {
                            $("#verify-code").hide();
                            $("#signup-form").append("<div class='container'><div class='row'><div class='col-xs-12'><span class='glyphicon glyphicon-circle-arrow-left'></span><h2>Sign Up</h2><h4>Join now for free credit</h4></div></div><div class='row'><div class='col-xs-12'><div class='input-group'><div class='col-xs-6'><span class='input-group-addon' id='basic-addon1'><span class='glyphicon glyphicon-user'></span></span><input class='form-control' placeholder='First Name' aria-describedby='basic-addon1'></div><div class='col-xs-6'><input class='form-control' placeholder='Last Name' aria-describedby='basic-addon1'></div></div><div class='input-group'><div class='col-xs-12'><span class='input-group-addon' id='basic-addon1'><span class='glyphicon glyphicon-envelope'></span></span><input class='form-control' placeholder='Email' aria-describedby='basic-addon1'></div></div></div></div><div class='row'><div class='col-xs-12'><input type='checkbox'><span>I agree to Lyft's <a href=''>Terms of Service</a></span></div></div><div class='row'><div class='col-xs-12'><button id='signup-form-next'>NEXT</button></div></div></div>");

                            $("#signup-form-next").click(function() {
                                if ($(".form-control") !== "") {
                                    $("#signup-form").hide();
                                    $("#ok").append("<div id='splash' class='text-center'><h1>Lyft</h1><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/76217-200.png'></div>")
                                } else {
                                    $("#signup-form-next").attr("disabled",true);
                                }
                            })
                        } else {
                            $("#verify-next").attr("disabled",true);
                        }
                    })
                })
            } else {
                $("#signup-next").attr("disabled", true);
            }
        })

    })
})