if(isset($_POST['islem'])){
$islem=$_POST['islem'];
$cikis['mesaj']="";$cikis['hata']=0;
switch ($islem){
  case 'form': $cikis['mesaj']="İşlemleri başlattınız"; break;
  default: $cikis['mesaj']="Hatalı işlem yaptınız";$cikis['hata']=1;
}
}else{$cikis['mesaj']="Hatalı işlem yaptınız";$cikis['hata']=1;}
//ob_clean(); // php hata vermesi durumunda json çıktısında hatalar oluşmaması için dosyanız hazır olduktan sonra kullanılabilir.
header('Content-Type: application/json');
$json=json_encode($cikis);
echo $json;
