$(function() {
	var btnCalculate = $('button[type="button"]');
	var inputAmount = $('input[name="amount"]');
	var inputValuation = $('input[name="valuation"]');
	var inputInversion = $('input[name="inversion"]');
	var inputPeriod = $('input[name="period"]');
	var resultsDiv = $('.results');
	var amount = 0;
	var valuation = 0;
	var tmp = 0;
	var inversion = 0;
	var period = 0;
	// process data
	btnCalculate.on('click',function(){
		// set vars
		var results = new Array();
		period = inputPeriod.val();
		inversion = inputInversion.val();
		amount = inputAmount.val();
		valuation = (inputValuation.val()/100);
		if($.isNumeric(period) && $.isNumeric(inversion) && $.isNumeric(amount) && $.isNumeric(valuation)){
			// fetch 12 month
			for (var i = 0; i < period; i++) {
				// tmp
				tmp = (parseFloat(amount)*parseFloat(valuation));
				// month
				if(i>0){
					amount = (parseFloat(amount)+parseFloat(tmp)+parseFloat(inversion));
				}else{
					amount = (parseFloat(amount)+parseFloat(tmp));
				}
				results.push(amount);
			}
			// show in view
			resultsDiv.css({display : 'block'}).empty();
			$.each(results, function(index, val) {

				resultsDiv.append('<p>MES '+parseInt(index+1)+': <strong>'+val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')+'</strong></p>');
			});

		}else{
			resultsDiv.css({display : 'block'}).html('<div class="error">¡LO SENTIMOS! Falta completar un dato.</div>');
			console.error('¡LO SENTIMOS! Falta completar un dato.')			
		}
	});
});