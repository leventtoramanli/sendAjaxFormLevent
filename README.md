# sendAjaxFormLevent
JQuery form göndermek için tek bir küçük kütüphane üzerinden ayrıntılı form gönderme gelen sonuçları okuma adına bir çalışma.

Örnek

<form name="form" id="form" enctype="multipart/form-data" method="post" action="javascript:void(0)">
  <input type="text" name="name" required>
  <input type="text" name="name2" required>
  <button type="submit" name="save" id="save">Save</button>
 </form>
 
 <script>
  $('#form').submit(function(){fg({form_name:"form"});});
 </script>
 
 ########################3
 
 default değerler olarak şimdilik bunları girdim default değerleri değiştirmek için fg({array içerisine ekleme yapmak yeterli})
 "form_name":"",
 "extra":"",
 "button":"",
 "yonlendir":"null",
 "adres":"ajax_islem.php"
 
 
 
 
 
