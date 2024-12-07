<?php
$pastebin_url = "https://pastebin.com/raw/URxqMTFh";
$sözler = file($pastebin_url, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
if ($sözler) {
    echo $sözler[array_rand($sözler)];
} else {
    echo "Bugün söz bulamadım! 😅";
}
?>
