<?php

    // configuration
    require("../includes/config.php"); 
    $id = $_SESSION["id"];
    // if user reached page via GET (as by clicking a link or via redirect)
    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        // else render form
        render("questionnaire_form.php",NULL, NULL, NULL, ["title" => "Log In"]);
    }

    // else if user reached page via POST (as by submitting a form via POST)
    else if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        CS50::query("CREATE TABLE IF NOT EXISTS $id");
         //$rows = CS50::query("INSERT IGNORE INTO users (username, hash) VALUES(?, ?)", $_POST["username"], password_hash($_POST["password"], PASSWORD_DEFAULT));;
        CS50::query("insert into $id values(?,?)");
    }

?>
