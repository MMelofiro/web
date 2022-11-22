<?php
    $destino=$POST["sv76735405@idat.edu.pe"];

    $nombre=$POST["nombre"];
    $correo=$POST["correo"];
    $celular=$POST["celular"];
    $comentario=$POST["comentario"];

    $contenido="Nombres y Apellidos: ".$nombres."\nCorreo electrónico: ".$correo."\nCelular: ".$celular."\nComentarios: ".$comentario;

    mail($destino,"Mensaje Importante",$contenido);

    echo "<script>alert('¡Gracias por su mensaje!');</script>";
    echo "<script>window.location.href=('index.html');</script>";
?>