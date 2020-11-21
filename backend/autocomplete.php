<?php

require 'sql.php';

if(isset($_POST['query']))
{
    $output = '';
    $sql_query = "SELECT company_name FROM companies WHERE company_name LIKE '%".$_POST["query"]."%' OR company_category LIKE '%".$_POST["query"]."%' LIMIT 3";
    $result = mysqli_query($conn, $sql_query);
    $output = "<ul class='suggestions-list'>";
    if(mysqli_num_rows($result) > 0)
    {
        while($row = mysqli_fetch_array($result))
        {
            $output .= "<li>".$row["company_name"]."</li>";
        }
    }
    $output .= "</ul>";
}

?>