


$(document).ready(function(){
    $('.slike').hide();
    $('.footer-social').hide();
    $('.widget p').hide();
    $('.widget footer-social a i').hide();
    

    //dugme za prikaz slika
    $("#PrikaziSlike").click(function () {
        $('.slike').slideToggle('slow');
        $(this).text(function () {
            $(this).text(($(this).text() == 'Show pictures') ? 'Hide pictures' : 'Show pictures')
        })
    })

    //hover preko slika doktora
    $('.hoverSlike').hover(
        function(){
            $(this).css('border','1px solid #03fcfc'); 
        },
        function(){
            $(this).css('border','none'); 
        }
    );

    //klikom na dugme ide se gore
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $("#idiGore").show(450);
        }
        else{
            $("#idiGore").hide(450);
        }
        });
        $('#idiGore').click(function(e) {
            e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        })

    //klikom na sliku doktora izlazi tekst
    $('#hoverSlika1').click(function(){
        $('.prvi ').slideToggle('slow');
    });
    $('#hoverSlika2').click(function(){
        $('.drugi ').slideToggle('slow');
    });
    $('#hoverSlika3').click(function(){
        $('.treci ').slideToggle('slow');
    });

    
    
    slajder();

   /* $('#slike').cycle({
        fx: 'scrollDown',
        speedIn: 2500,
        speedOut: 500,
        timeout: 0,
        next: '#slike'
      }); */
      
       

   
});

function slajder() {
    var trenutni = $('#slike .aktivna').fadeOut();
    var sledeci = trenutni.next().length ? trenutni.next().fadeIn() :
    trenutni.parent().children(':first').fadeIn();
    trenutni.removeClass('aktivna');
    sledeci.addClass('aktivna');
    setTimeout(slajder, 3500);
   } 