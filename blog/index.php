<!DOCTYPE html>
<html lang="en">

<?PHP include 'head.php'; ?>

<body>

<?PHP include 'nav.php'; ?>

<!-- container -->
<div class="container">

    <?PHP include 'article_list.php'; ?>

	<!-- Content -->
    <div class="col-lg-9">
        <div>
<?PHP
	$url = $_SERVER["REQUEST_URI"];
	# if url contains '#', load the named article
	if ( preg_match("/\?/", $url ) ){
		$path_parts = explode('?', $url);
		#echo var_dump($path_parts);
		$article = $path_parts[1];
	}
    # else: take the lates edited article
    else {
    	$all_files = scandir("articles/",1);
    	#echo var_dump($all_files); 
    	$article = $all_files[0];
	}
	include "articles/".$article;
?>
		</div>
    </div>

</div> 
<!-- /container -->

<?PHP include '../google_analytics.php'; ?>

</body>
</html>


