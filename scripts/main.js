$(function (){
	
	var $orders = $('#orders');
	
	$.ajax({
		type: 'GET',
		url: 'http://localhost:1234/semi/rest/orders/allOrders',
		crossDomain: true,
		success: function(orders){
			$.each(orders, function(i, order){
				$orders.append('<li>order id: ' + order.order_id + ' restaurant_id: ' + order.restaurant_id + ' @' + order.time + '</li>');
			});
		}
	});
})

$(function(){
	
	$('#submit').on('click', function(){
		var order = $('#order').val();
		var restaurant = $('#restaurant').val();
		$.ajax({
			type: 'POST',
			url: 'http://localhost:1234/semi/rest/orders/add',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
                           order_id: order,
                           restaurant_id: restaurant
                    }),
			success: function(msg){
				console.log("posted");
			},
			error: function(xhr, res, text){
				console.log(text);
			}
		});
	});
})