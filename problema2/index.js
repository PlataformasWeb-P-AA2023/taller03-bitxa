$(document).ready(()=>{
    var fecha_nacimiento;

    $("#fecha_nacimiento").datepicker(
        {
            inline: true,
            showOtherMonths: true,
            changeYear: true,
            showOtherYears: true,
        
            dayNamesMin: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            dateFormat: "dd(/mm/yy",
            onSelect: (selected_date)=>{
                fecha_nacimiento = selected_date;
            }
        }
    );

    $("#enviar_button").click(()=>{
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        $("#message").text("Datos ingresados correctamente");
        $("#nombres_message").text(nombre +" "+ apellido);
        $("#fecha_message").text(fecha_nacimiento);
        

    })
})