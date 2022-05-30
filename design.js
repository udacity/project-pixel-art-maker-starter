"colorPicker" = document.querySelector("colorPicker")

// Select color input
function addColor();
let color = ("colorPicker").val();
if ((this).attr("style")) {
    (this).removeAttr("style")
    else :
        (this).attr("style", "backgroundColor:" + color);
    ("td").click
};
// Select size input
("sizePicker").submit;

function makeGrid(event): {
    event.preventDefault();
    height = ("inputHeight").val();
    width = ("inputWidth").val();
    makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    for (var i = 1; i <= height; i++); {
        ("pixelCanvas").append("<tr id=table" + i + "></tr>")
        for (var j = 1; j <= width; j++) {
            ("table" + i).append("<td></td>");
        };
    };
    // Your code goes here!
    function makeGrid(height, width) {
        // clears any previously created table
        ("tr").remove();
        // draws by drag & drop
        ("pixelCanvas").on("mousedown", "td", function() {
            //event.preventDefault();
            mouseDrag = true;
        });

        ("pixelCanvas").on("mousemove", "td", function() {
            color = ("colorPicker").val();
            if (mouseDrag) {
                (this).css("background-color", color);
            }
        });
        $("pixelCanvas").on("mouseup mouseleave dragstart", function() {
            mouseDrag = false;
        });

        // erases canvas
        ("erase").click(function eraseTable() {
            ("tr").remove();
        });

        //erases drawing when you click clear
        ("clear").click(function eraseTable() {
            ("td").removeAttr("style");
        });
        ("td").removeAttr("style");
    });