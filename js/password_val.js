jQuery(document).ready(function($){
    $('#ch_pwd_confirm, #ch_pwd').on('keyup', function(){ 

    	// enter the ids of the pw inputs you are using
    	var pw_id = 'ch_pwd';

    	var pw_id_conf = 'ch_pwd_confirm';


    	///++++ start code ++++///

        var psswrd_a = $('#'+pw_id).val();

        var psswrd_b = $('#'+pw_id_conf).val();

        if( psswrd_a != psswrd_b ){
            //console.log('no match' + psswrd_a +' --- '+ psswrd_b );
            $('.ch_pwd_confirm').text('your passwords must match');

            $('#ch_pwd_confirm, #ch_pwd').css({
                                        'border-color':'red',
                                        'background-color':'rgba(255,255,255,.2)'
                                        });
            
            if( psswrd_a.length > 5 ){
                var pw_length = '';
            }else{
                var pw_length = ' You must enter a password at least 6 characters long';
            }

			//check for digits		   
			if( !/\d/.test( psswrd_a ) ){
				var digit_chk = ' You must enter at least 1 number';
			}else{
				var digit_chk = '';
			}

			//check for lowercase
			if( !/[a-z]/.test( psswrd_a ) ){
				var lc_chk = ' You must enter at least 1 lowercase letter';
			}else{
				var lc_chk = '';
			}

			//check for uppercase
			if( !/[A-Z]/.test( psswrd_a ) ){
				var uc_chk = ' You must enter at least 1 uppercase letter';
			}else{
				var uc_chk = '';
			}

			//check for special chars
			if( !/[^0-9a-zA-Z]/.test( psswrd_a ) ){
				var spchars_chk = ' You must enter at least 1 special character';
			}else{
				var spchars_chk = '';
			}

			//this sets the error message
			$('.ch_pwd.error').text( pw_length + digit_chk + lc_chk + uc_chk + spchars_chk ); 

            $('#t_submit').prop('disabled', true);

        }else if( psswrd_a == psswrd_b ){
            //console.log('yep it is a match' + psswrd_a +' --- '+ psswrd_b );
             $('.ch_pwd_confirm').text('');

            if( psswrd_a.length > 5 ){
                    $('#ch_pwd_confirm, #ch_pwd').css({
                        'border-color':'rgba(0,255,0,.9)',
                        'background-color':'rgba(0,255,0,.1)'
                    });

                    $('.ch_pwd.error').text('');
            }else{
                $('.ch_pwd.error').text('You must enter a password at least 6 characters long');
            }

             $('#practioner_submit').prop('disabled', false);
        }        

    });


});