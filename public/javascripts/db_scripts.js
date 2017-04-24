(function() {

    $('.update_button').click(function(){
        var self = this;
        var update_data = $(this).closest('.item').find('.update_data');
        update_data.slideToggle();
        var span = $(this).closest('.item').find('span');
        
        var name = span.eq(0).find('b').text();
        update_data.find("form #client_name").val(name);
        
        var email = span.eq(1).find('b').text();
        update_data.find("form #client_email").val(email);
        
        var message = span.eq(2).find('b').text();
        update_data.find("form #client_message").val(message);
        
        
        update_data.find('form #update_data').click(function(e) {
            e.preventDefault();
            
            var client_name = update_data.find('form #client_name').val();
            var client_email = update_data.find('form #client_email').val();
            var client_message = update_data.find('form #client_message').val();
            var client_id = span.eq(3).find('b').text();
            
            $.ajax({
                url: '/update',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    client_name: client_name,
                    client_email: client_email,
                    client_message: client_message,
                    client_id: client_id
                }),
                success: function(res){
                    update_data.find('form #client_name').val('');
                    update_data.find('form #client_email').val('');
                    update_data.find('form #client_message').val('');
                    $(self).click();
                }
            });
             
        });
    });

})();


(function() {
    
    $('.delete_button').click(function() {
        
        var id = $(this).closest('.item').find('span').eq(3).find('b').text();
        
        $.ajax({
            url: '/delete',
            method: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({
                id: id
            })
        });
        
    });
    
})();