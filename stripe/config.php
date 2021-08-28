<?php
    require_once "stripe-php-master/init.php";

    $stripeDetails = array(
        "secretKey" => "sk_test_51JTMk8CbaEnnmnCRV0Cv7EhOv4EW37WierUg7XlTviIWVQyvrCCOt8oY35VN2WFcuNLiEWwk0akQI4d3DO8QTluJ00OsxuuJTX",
        "publishableKey" => "pk_test_51JTMk8CbaEnnmnCRKuxJuJnJkgw5R4ztsIKbrPaanzb31782jKn4yPSP0vwuMsWdevFzpdMZL4oDWRSc8RxIg3Ew0013ghNJbS"
    );

    \Stripe\Stripe::setApiKey($stripeDetails["secretKey"]);
?>