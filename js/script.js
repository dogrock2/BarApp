$(document).ready(function () {
   

    $('#rndBtn').on('click', function(){
        $.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', function (data) {
            console.log(data.drinks[0]);
            $('#drinkNameDiv').html('<div drnkId="'+data.drinks[0].idDrink+'"><span id="nameOfDrink">'+data.drinks[0].strDrink+'</span></div><hr>');
            $('#drinkImg').html('<img src="'+data.drinks[0].strDrinkThumb+'" class="imageDrink" alt="No Image Avail">');
            $('#mixData').empty();
            $('#rateSpan').html("Rate:");
            $('#starRated').empty();
            for(let x = 0; x < 5; x++)
                 $('#starRated').append("<span class='mx-1'><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></span>");
            $('#mixData').append('<div><b>Category: </b><i>' +data.drinks[0].strCategory+'</i></div>');
            $('#mixData').append('<div><b>Glass Type: </b><i>' +data.drinks[0].strGlass+'</i></div>');
            $('#mixData').append('<div><b>Drink Type: </b><i>' +data.drinks[0].strAlcoholic+'</i></div>');
            $('#mixData').append('<div><b>Ingredients: </b></div>');
            $('#txtAreaDiv').empty();
            $('#txtAreaDiv').append("<label for=\"commentsTxtArea\"><b>Comments:</b></label>");
            $('#txtAreaDiv').append("<textarea class=\"form-control\" id=\"commentsTxtArea\" rows=\"3\"></textarea>");
            $('#txtAreaDiv').append('<div id="txtAreaBtnDiv" class="text-center"></div>')
            $('#txtAreaBtnDiv').empty();
            $('#txtAreaBtnDiv').append('<button class="btn btn-info txt-center m-2">Save</button>');
            $('#txtAreaBtnDiv').append('<button class="btn btn-danger txt-center m-2">Delete</button>');
            setIngredients(data);
        }).then(function(data){
            $('#instr').empty();
            $('#instr').append('<hr><div><i>'+ data.drinks[0].strInstructions +' </i></div>');
        });

    });

    function setIngredients(data) {
        const ingredientsArr = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3, data.drinks[0].strIngredient4,
                                data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, 
                                data.drinks[0].strIngredient9, data.drinks[0].strIngredient10, data.drinks[0].strIngredient11, data.drinks[0].strIngredient12, 
                                data.drinks[0].strIngredient13,data.drinks[0].strIngredient14, data.drinks[0].strIngredient15 ];

        const strMeasureArr = [data.drinks[0].strMeasure1, data.drinks[0].strMeasure2, data.drinks[0].strMeasure3, data.drinks[0].strMeasure4, data.drinks[0].strMeasure5,
                               data.drinks[0].strMeasure6, data.drinks[0].strMeasure7, data.drinks[0].strMeasure8, data.drinks[0].strMeasure9, data.drinks[0].strMeasure10, 
                               data.drinks[0].strMeasure11, data.drinks[0].strMeasure12, data.drinks[0].strMeasure13, data.drinks[0].strMeasure14, data.drinks[0].strMeasure15];
        $('#ingredientName').empty();
        $('#ingredientMeasurement').empty();
        for(let i = 0; i < 15; i++){
            if(ingredientsArr[i] !== null && (ingredientsArr[i])){
             $('#ingredientName').append('<div id="ingreContDiv'+[i]+'" class="row"></div>');
             $('#ingreContDiv'+[i]).append('<div class="col-6 measureDiv1"><i>' +ingredientsArr[i]+":"+'</i></div>');
            }
            if(strMeasureArr[i] !== null && (strMeasureArr[i])){
                $('#ingreContDiv'+[i]).append('<div class="col-6 measureDiv2 text-left"><i>' +strMeasureArr[i]+'</i></div>');
            }
        }
            
    }

});