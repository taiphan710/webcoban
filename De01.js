$(document).ready(function(){
    $("#pictureCar img").mouseenter(function(){
        $(this).animate({height:"+=100px"});
    });
    $("#pictureCar img").mouseout(function(){
        $(this).animate({height:"110px"});
    });
    var changeCar="Ford";
    $("#selBrand").change(function(){
        changeCar=$("#selBrand").val();
        switch(changeCar)
        {
            case "Ford":
                $("#anhChinh").attr("src","Images/ford_red.jpg");
                $("#anh1").attr("src","Images/ford_red.jpg");
                $("#anh2").attr("src","Images/ford_blue.jpg");
                $("#anh3").attr("src","Images/ford_yellow.jpg");
                $("#anh4").attr("src","Images/ford_white.jpg");
                break;
            case "Honda":
                $("#anhChinh").attr("src","Images/honda_red.jpg");
                $("#anh1").attr("src","Images/honda_red.jpg");
                $("#anh2").attr("src","Images/honda_blue.jpg");
                $("#anh3").attr("src","Images/honda_yellow.jpg");
                $("#anh4").attr("src","Images/honda_white.jpg");
                break;
            case "Toyota":
                $("#anhChinh").attr("src","Images/toyota_red.jpg");
                $("#anh1").attr("src","Images/toyota_red.jpg");
                $("#anh2").attr("src","Images/toyota_blue.jpg");
                $("#anh3").attr("src","Images/toyota_yellow.jpg");
                $("#anh4").attr("src","Images/toyota_white.jpg");
                break;
            case "Hyundai":
                $("#anhChinh").attr("src","Images/hyundai_red.jpg");
                $("#anh1").attr("src","Images/hyundai_red.jpg");
                $("#anh2").attr("src","Images/hyundai_blue.jpg");
                $("#anh3").attr("src","Images/hyundai_yellow.jpg");
                $("#anh4").attr("src","Images/hyundai_white.jpg");
                break;
        }
    })
    var mau="đỏ";
    $("td div").click(function(){
        var color=$(this).css("background-color");
        switch(color){
            case "rgb(0, 0, 255)": 
                mau = "xanh dương";
                switch(changeCar)
                {
                    case "Ford":
                        $("#anhChinh").attr("src","Images/ford_blue.jpg");
                        break;
                    case "Honda":
                        $("#anhChinh").attr("src","Images/honda_blue.jpg");
                        break;
                    case "Toyota":
                        $("#anhChinh").attr("src","Images/toyota_blue.jpg");
                        break;
                    case "Hyundai":
                        $("#anhChinh").attr("src","Images/hyundai_blue.jpg");
                        break;
                } 
                break;
            case "rgb(255, 0, 0)": 
                mau = "đỏ" ;
                switch(changeCar)
                {
                    case "Ford":
                        $("#anhChinh").attr("src","Images/ford_red.jpg");
                        break;
                    case "Honda":
                        $("#anhChinh").attr("src","Images/honda_red.jpg");
                        break;
                    case "Toyota":
                        $("#anhChinh").attr("src","Images/toyota_red.jpg");
                        break;
                    case "Hyundai":
                        $("#anhChinh").attr("src","Images/hyundai_red.jpg");
                        break;
                } 
                break;
            case "rgb(255, 255, 0)": 
                mau = "vàng" ;
                switch(changeCar)
                {
                    case "Ford":
                        $("#anhChinh").attr("src","Images/ford_yellow.jpg");
                        break;
                    case "Honda":
                        $("#anhChinh").attr("src","Images/honda_yellow.jpg");
                        break;
                    case "Toyota":
                        $("#anhChinh").attr("src","Images/toyota_yellow.jpg");
                        break;
                    case "Hyundai":
                        $("#anhChinh").attr("src","Images/hyundai_yellow.jpg");
                        break;
                } 
                break;
            case "rgb(255, 255, 255)": 
                mau = "trắng" ;
                switch(changeCar)
                {
                    case "Ford":
                        $("#anhChinh").attr("src","Images/ford_white.jpg");
                        break;
                    case "Honda":
                        $("#anhChinh").attr("src","Images/honda_white.jpg");
                        break;
                    case "Toyota":
                        $("#anhChinh").attr("src","Images/toyota_white.jpg");
                        break;
                    case "Hyundai":
                        $("#anhChinh").attr("src","Images/hyundai_white.jpg");
                        break;
                } 
                break;
        }
    });
    $("#buy").click(function(){
       var loaiXe=$("#selBrand").val();
       var soLuong=$("#soLuong").val();
       kq="Bạn đặt mua "+soLuong+" xe "+loaiXe+" màu "+mau;
       $("#kq").html(kq);
    });
})
