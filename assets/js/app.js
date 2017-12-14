$(document).ready(function() {
    $("#splash").append("<div class='container'><div class='row'><div class='col-xs-8 col-xs-offset-2'><div id='splash-img'></div></div></div></div>").delay(2000).fadeOut("slow");
    $("#home").append("<div class='container'><div class='row'><div class='col-xs-4 col-xs-offset-4 text-center'><div id='home-header-img'></div></div></div><div class='row'><div class='col-xs-10 col-xs-offset-1 text-center'><div id='home-img'></div></div></div><div class='row'><div class='col-xs-6 text-right'><button class='btn btn-default'>LOG IN</button></div><div class='col-xs-6'><button class='btn btn-default' id='signup'>SIGN UP</button></div></div></div>");
    $("#home").delay(4000).show();

    $("#signup").click(function() {
        $("#home").hide();
        $("#signup-page").append("<div class='container'><div class='row'><div class='col-xs-12 text-center'></span><div class='header'><h2>Sign up</h2><h4>Join now for free ride credit</h4></div></div></div><div class='row'><div class='col-xs-4 text-right'><select><option>CL</option><option>MEX</option><option>VEN</option><option>US</option></select></div><div class='col-xs-8'><input type='number'></div></div><div class='row'><div class='col-xs-12 text-center'><p>We'll send a text to verify your phone</p></div></div></div><button class='next-btn' id='signup-next'>NEXT</button><span class='glyphicon glyphicon-circle-arrow-left'>")

        var pages = $("section").length;
        var pagePos = 1;
    
        $(".glyphicon-circle-arrow-left").click(function() {
            $("#signup-page").hide();
            $("#home").show();
        })

        $("#signup-next").click(function() {

            if ($("#signup-page input").val() != "") {
                $("#signup-next").click(function() {
                    var x = Math.floor((Math.random() * 1000) + 1);
                    alert("Your code is " + x);
                    $("#signup-page").hide();

                    $("#verify-code").append("<div class='container'><div class='row'><div class='col-xs-12 text-center'><div class='header'><h2>Verify phone number</h2><h3>Join now for free ride credit</h3></div></div></div><div class='row'><div class='col-xs-12 text-center'><span>LAB</span><input type='number' maxlength='3'></div></div><div class='row'><div class='col-xs-12 text-center'><p>Enter the code sent to +52</p></div></div><div class='row'><div class='col-xs-12 text-center'><button id='resend-btn'>Resend code</button></div></div></div><button class='next-btn' id='verify-next'>NEXT</button><span class='glyphicon glyphicon-circle-arrow-left'></span>");
                    
                    $(".glyphicon-circle-arrow-left").click(function() {
                        $("#verify-code").hide();
                        $("#signup-page").show();
                    })

                    $("#resend-btn").click(function() {
                        var x = Math.floor((Math.random() * 1000) + 1);
                        alert("Your code is " + x);
                    })
                    $("#verify-next").click(function() {
                        if ($("#verify-code input").val() != "") {
                            $("#verify-code").hide();
                            $("#signup-form").append("<div class='container'><div class='row'><div class='col-xs-12 text-center'><h2>Sign Up</h2><h4>Join now for free credit</h4></div></div><div class='row'><div class='col-xs-12'><div class='input-group'><div class='col-xs-6'><span class='input-group-addon' id='sizing-addon1'><span class='glyphicon glyphicon-user'></span></span><input class='form-control' placeholder='First Name' aria-describedby='basic-addon1'></div><div class='col-xs-6'><input class='form-control' placeholder='Last Name' aria-describedby='basic-addon1'></div></div><div class='input-group'><div class='col-xs-12'><span class='input-group-addon' id='basic-addon1'><span class='glyphicon glyphicon-envelope'></span></span><input class='form-control' placeholder='Email' aria-describedby='basic-addon1'></div></div></div></div><div class='row'><div class='col-xs-12'><input type='checkbox'><span>I agree to Lyft's <a href=''>Terms of Service</a></span></div></div></div><button class='next-btn' id='signup-form-next'>NEXT</button><span class='glyphicon glyphicon-circle-arrow-left'></span>");

                            $(".glyphicon-circle-arrow-left").click(function() {
                                $("#signup-form").hide();
                                $("#verify-code").show();
                            })

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