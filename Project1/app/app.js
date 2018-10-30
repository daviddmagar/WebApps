// the provided Firebase config for accessing our Firebase NoSQL database
var config = {
    apiKey: "AIzaSyBthC9BLzwfHrmp1xiFk1rglVDqYQ5rB-s",
    authDomain: "cs-3033-fa18.firebaseapp.com",
    databaseURL: "https://cs-3033-fa18.firebaseio.com",
    projectId: "cs-3033-fa18",
    storageBucket: "cs-3033-fa18.appspot.com",
    messagingSenderId: "494659703474"
};
// initialize the firebase app
firebase.initializeApp(config);

var products = [];


// use JQuery to call your code after the document.ready event
$(function () {

    $(".form-check").change(function () {
        checkPrice(products);
        checkAvailable(products);
        checkRating(products);
    });


    // save the firebase database to a variable named database
    var database = firebase.database();
    // use database to access "departments/books"
    database.ref("departments/books").once("value").then(function (snapshot) {
        // save the snapshot value to a local variable named data
        var data = snapshot.val();
        // log the data
        console.log(data);
        // use JQuery to create a div "row" element
        var row = $('<div class="row"></div>');
        // get all product names by using Object.keys, and iterate over with forEach
        Object.keys(data["products"]).forEach(function (key) {
            // save book to a local variable named book
            var book = data["products"][key];
            // log the book
            console.log(book);
            // push the book to products
            products.push(book);
            // use JQuery to create an h1 element with the text of the book's name
            // the h1 element should have id="book["id"]"
            var title = book["name"];
            var id = book["id"];
            var availability = book["stock"];
            var price = book["price"];
            var rating = book["rating"];
            var bookHTML1 = $('<h1 id="' + book["id"] + '"></h1>').text(book["name"]);
            var bookHTML2 = $('<h1 id="' + book["price"] + '"></h1>').text(book["price"]);
            var bookHTML3 = $('<h1 id="' + book["rating"] + '"></h1>').text(book["rating"]);

            var listingHTML = "<h3>" + title + "</h3>\n<p>Price: $" + price + "<br>Rating: " + rating + "<br>Stock: " + availability + "</p>";

            //var bookHTML = bookHTML1.concat(bookHTML2.concat(bookHTML3));
            // use JQuery to create a div "col" element
            divHTML = "<div class=\"col\" id=\"" + id + "\"></div>"
            var col = $(divHTML);
            // append the book to the "col" element
            col.append(listingHTML);
            // append the "col" element to the "row" element
            row.append(col);
            // end forEach
        });
        // use JQuery to append the "row" element to the "container" element
        $(".container").append(row);
    });
    // end then
});



function checkRating(products) {

    //TODO: check availbility checkboxes
    products.forEach(function (product) {
        id = product["id"];
    //  $("#" + id).show();

        //TODO: check rating checkboxes
        if ($("#two").is(":checked") && $("#one").is(":checked") && $("#zero").is(":checked")) {
            if (product["rating"] < 0 || product["rating"] > 2) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#two").is(":checked") && $("#one").is(":checked")) {
            if (product["rating"] < 1) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#two").is(":checked") && $("#zero").is(":checked")) {
            if (product["rating"] == 1) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#one").is(":checked") && $("#zero").is(":checked")) {
            if (product["rating"] == 2) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#two").is(":checked")) {
            if (product["rating"] < 2) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }
            // end if
        } else if ($("#one").is(":checked")) {
            if (product["rating"] < 1 || product["rating"] > 1) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }
            // end if
        } else if ($("#zero").is(":checked")) {
            if (product["rating"] > 0) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }
            // end if
        // } else {
        //     $("#" + id).show();
        }

        // end forEach
    })

//   return products;
}

function checkAvailable(products) {
    // $("#" + id).show();
    //TODO: check availbility checkboxes
    products.forEach(function (product) {
        id = product["id"];
        //TODO: check if the product has a product["rating"] of <2
        if ($("#availableBox").is(":checked")) {
            if ($("#unavailableBox").is(":checked")) {
                $("#" + id).show();
            }
            else if (product["stock"] == 0) {
                $("#" + id).hide();
            }
        }
        else if ($("#unavailableBox").is(":checked")) {
            if ($("#availableBox").is(":checked")) {
                $("#" + id).show();
            }
            else if (product["stock"] > 0) {
                $("#" + id).hide();
            }
        }
        // else {
        //     $("#" + id).show();
        // }
    })
    
}

function checkPrice(products) {

    //TODO: check availbility checkboxes
    products.forEach(function (product) {
        id = product["id"];
        $("#" + id).show();
        //TODO: check if the product has a product["rating"] of <2

        //TODO: check price checkboxes
        if ($("#fiftyDollars").is(":checked") && $("#twentyfiveDollars").is(":checked") && $("#zeroDollars").is(":checked")) {
            if (product["price"] < 0 || product["price"] > 100) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#fiftyDollars").is(":checked") && $("#twentyfiveDollars").is(":checked")) {
            if (product["price"] < 25) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#fiftyDollars").is(":checked") && $("#zeroDollars").is(":checked")) {
            if (product["price"] >= 25 && product["price"] < 50) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#twentyfiveDollars").is(":checked") && $("#zeroDollars").is(":checked")) {
            if (product["price"] > 50) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }

        } else if ($("#fiftyDollars").is(":checked")) {
            if (product["price"] < 50) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }
            // end if
        } else if ($("#twentyfiveDollars").is(":checked")) {
            if (product["price"] < 25 || product["price"] > 50) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }
            // end if
        } else if ($("#zeroDollars").is(":checked")) {
            if (product["price"] > 25) {
                // TODO: use JQuery to select the product element with id=product["id"].
                // don't forget to prepend "#" to use the id selector
                // TODO: hide the product element with .hide()                
                $("#" + id).hide();
            }
            // end if
        } 

        // end forEach
    })
    // end click handler
}

// end document.read JQuery function