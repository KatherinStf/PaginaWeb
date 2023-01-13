<?php
require('fpdf/fpdf.php');

class PDF extends FPDF
{

// Cabecera de página
function Header()
{
     // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Movernos a la derecha titulo
    $this->Cell(60);
    // Título
    $this->Cell(70,10,'Reporte de Productos',0,0,'C');
    // Salto de línea
    $this->Ln(20);


    $this->SetFont('Arial','B',9);
    
    $this->Cell(20,10,'Codigo', 1, 0, 'C', 0);
	$this->Cell(50,10,'Nombre', 1, 0, 'C', 0);
    $this->Cell(30,10,'Marca', 1, 0, 'C', 0);
    $this->Cell(30,10,'cantidad', 1, 0, 'C', 0);
    $this->Cell(20,10,'Precio', 1, 1, 'C', 0);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,utf8_decode('Página ').$this->PageNo().'/{nb}',0,0,'C');
}
}


 require 'consulta-reportes.php';
 $consulta = "SELECT * FROM productos";
 $resultado = $mysqli->query($consulta);


$pdf = new PDF();
$pdf-> AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Arial','',9);

while($row = $resultado->fetch_assoc()){
	$pdf->Cell(20,10,utf8_decode($row['id_productos']), 1, 0, 'C', 0);
	$pdf->Cell(50,10,utf8_decode( $row['nombre']), 1, 0, 'L', 0);
	$pdf->Cell(30,10,utf8_decode( $row['marca']), 1, 0, 'C', 0);
    $pdf->Cell(30,10,utf8_decode( $row['cantidad']), 1, 0, 'C', 0);
    $pdf->Cell(20,10,utf8_decode( $row['precio']), 1, 1, 'C', 0);
}



$pdf->Output();
?>