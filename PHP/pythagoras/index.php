<?php
function pythagoras($a, $b)
{
  return $a ** 2 + $b ** 2;
}

$a = 6;
$b = 9;
$c = pythagoras($a, $b);

echo " a = $a \n";
echo " b = $b \n";
echo "c² = {$a}² + {$b}² \n";
echo "   = $c \n";
echo " c = " . number_format(sqrt($c), 1);
?>
