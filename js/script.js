$(function () { 

	/*initialize Highchart*/
    let myChart = Highcharts.chart('highchart', {
        chart: {
            type: 'areaspline'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        title: {
            text: ''
        },       
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
                
            },
        series: [
            {
            name: 'Upload',
            data: [["Jan", 67],["Feb", 91],["Mar", 36],["Apr", 150],["May", 28],["Jun", 123],["Jul", 38]],
            color: "#ffce54"
            },
            {
            name: 'Download',
            data: [["Jan", 59],["Feb", 49],["Mar", 45],["Apr", 94],["May", 76],["Jun", 22],["Jul", 31]],
            color: "#01b6ad"
            }
        ]
    });
    $(".highcharts-credits").html("");

    Sortable.create(listWithHandle, {
      animation: 100
    });

	let animationFunc = function(){
		console.log("Start anime run");

		anime({
			targets: '.progress',
			value: function(){return anime.random(40, 100)},
			
			delay: function(el, i, l) {
			  return i * 500;
			},
			duration: 1500,
			elasticity: 200,
			complete: function(){setTimeout(animationFunc, 2000)}
		});
	};

	animationFunc();
});

$(document).ready(function(){
	$("#btn-send-message").on("click", function(){
		let text = $("#input-msg").val();

		let lastChild = $(".chatbox-messagebox").children().last().attr("class").split(' ');

		let sideClass, element;

		/*decide if message is left or right*/
		if(lastChild.indexOf("msg-right") > 0){
			sideClass = "msg-left";

			element = 
						crel2('div', 
						    crel2('div', ["class", "chatbox-message-avatar"], 
						    	crel2('i', ["class", "fa fa-user fa-3x", "aria-hidden", "true"]),
					    	),
							    crel2('div', ["class", "chatbox-message-wrapper msgwrap-left"], 
							    	crel2('div', ["class", "chatbox-message-timestamp"],
							    		crel2('a', "Admin "),
							    		crel2('i', "on July 08, 2017 12:02")
							    	),
							    	crel2('div', ["class", "chatbox-message-text"], text)
				    			)
						);
		}
		else{
			sideClass = "msg-right";

			element = 
						crel2('div', 
						    crel2('div', ["class", "chatbox-message-wrapper msgwrap-right"], 
						    	crel2('div', ["class", "chatbox-message-timestamp"],
						    		crel2('a', "Admin "),
						    		crel2('i', "on July 08, 2017 12:02")
						    	),
						    	crel2('div', ["class", "chatbox-message-text"], text)
			    			),
						    crel2('div', ["class", "chatbox-message-avatar"], 
						    	crel2('i', ["class", "fa fa-user fa-3x", "aria-hidden", "true"]),
					    	)						   
						);
		}

   		$('.chatbox-messagebox').append(
   		  $('<div/>')
   		    .addClass("chatbox-message " + sideClass)
   		    .append(element)
   		);		
	});
});