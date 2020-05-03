$(function () {
    $("#my-game").click(function () {
            fetch('https://pokeapi.co/api/v2/pokemon/1/')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    var img_link = data["sprites"]["front_default"]

                    var chars = ["name", "base_experience", "weight"];
                    console.log(data)
                    for (var i = 0; i < chars.length; i++) {
                        var obj = chars[i];
                        var strin = data[obj].toString().toUpperCase()
                        $("#" + obj).text(strin);
                    }
                    $("#img-pokemon").attr("src", img_link);
                });
            $("#my-profile-div").attr("style", "display: none;");
            $("#my-game-div").attr("style", "display:  inline;");
        }
    )
});