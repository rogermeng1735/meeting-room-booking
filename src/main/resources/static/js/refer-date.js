$(function() {
	$('.delete').click(function(){
		var reservationId = $('#rsvId').attr('value');
		var reservationDate = $('#rsvDate').attr('value');
		document.getElementById('deleteId').value = reservationId;
		document.getElementById('reservationDate').value = reservationDate;
	});
});