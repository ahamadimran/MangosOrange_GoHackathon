<?php
$hostName = "localhost";
$userName = "root";
$password = "";
$databaseName = "gohackathondb";
 $conn = new mysqli($hostName, $userName, $password, $databaseName);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>


<?php

// If submit button is clicked
if (isset($_POST['submit'])) {
    
    // get name from the form when submitted
    $name = $_POST['name'];
	$email = $_POST['email'];
    $number = $_POST['number'];
	$message = $_POST['message'];
    
    // Insert the submitted data from the form into the table
    $insertquery = "INSERT INTO contactus(name, email, number, message) 
                    VALUES('$name','$email', '$number', '$message')";
                    
                    // Execute insert query
					$iquery = mysqli_query($conn, $insertquery);
                    console.log($iquery);
                    if ($iquery) {
                        ?>
                        <div class="alert alert-success alert-dismissible fade show text-center">
                            <a class="close" data-dismiss="alert" aria-label="close">
                                ×
							</a>
							<strong>Success!</strong> Data submitted successfully.
						</div>
						<?php
                        }
                        else {
                            ?>
                            <div class="alert alert-danger alert-dismissible fade show text-center">
								<a class="close" data-dismiss="alert" aria-label="close">
                                    ×
								</a>
								<strong>Failed!</strong> Try Again!
							</div>
                            <?php
                            }
						}// end if
					?>