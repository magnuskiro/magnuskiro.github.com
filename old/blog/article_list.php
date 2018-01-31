<!-- List -->
    <div class="col-lg-3">
        <h4>Arikkler:</h4>
<div>
<?PHP
if ($handle = opendir('articles')) {
# echo "Directory handle: $handle\n";
    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
        if ( ! preg_match ( "/\w/", $entry ) ) continue;
        echo '<a href="?'.$entry.'" >'.$entry.'</a><br />';
    }
}
?>
</div>
    </div>

