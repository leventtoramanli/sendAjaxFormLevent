
//Loader
function loader_ac(){$('#genel_load').fadeIn(200);}
function loader_kapa(){$('#genel_load').fadeOut(200);}

//Buton işlemleri
function btnD(x){$("#"+x).attr("disabled", true);}
function btnE(x){$("#"+x).attr("disabled", false);}

function eMsg(){
  $('#ggMessage').removeClass('bg-success');
  $('#ggMessage').addClass('bg-danger');
  $('#ggHeader').html('Error');
}
function sMsg(){
  $('#ggMessage').removeClass('bg-danger');
  $('#ggMessage').addClass('bg-success');
  $('#ggHeader').html('Success');
}

function fg(form_name){
  var first=0;
  var defaults = {
    "form_name":"",
    "extra":"",
    "button":"",
    "yonlendir":"null",
    "adres":"ajax_islem.php"
  }
  for(var i in defaults){
    if(typeof form_name[i] === 'undefined'){
      form_name[i]=defaults[i];
    }
  }
  if(form_name['button']==""){form_name['button']=form_name['form_name']+"_b";}
  if(form_name['extra']==""){form_name['extra']="&islem="+form_name['form_name'];}
    var form=$('#'+form_name['form_name']);
    $.ajax({
      type:'POST',
      url:'ajax_islem.php',
      data:form.serialize()+"&islem="+form_name['extra'],
      dataType:'JSON',
      global:false,
      cache:false,
      encode:true,
      beforeSend:function(data){
        btnD(form_name['button']);
        loader_ac();
      },
      success:function(gg){
        btnE(form_name['button']);
        $('#ggBody').html(gg.mesaj);
        if(gg.hata=="1"){eMsg();}else{sMsg();}
        $('#ggMessage').fadeIn(400).delay(2000).fadeOut(400);
        first=1;
        if(form_name['yonlendir']!="null"){
          window.location.href=form_name['yonlendir'];
        }
      }
    })
    .done(function(gg){
      loader_kapa();
      first=0;
    })
    .fail(function(gg){
      loader_kapa();
    });

}
