<?php 



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    ECHO "This is a POST method";
} else {
    ECHO "This is not a POST method.";
}