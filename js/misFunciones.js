function traerInformacion() {
    $.ajax({
        url: "https://gb7c68d9feb78e7-partyroom.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        }

    });
}

function pintarRespuesta(items) {
    $("#resultado").empty();
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}
function guardarInformacion(items){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb7c68d9feb78e7-partyroom.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/json;charset=utf-8",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacion(items){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb7c68d9feb78e7-partyroom.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/json;charset=utf-8",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb7c68d9feb78e7-partyroom.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        datatype:"JSON",
        contentType:"application/json;charset=utf-8",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}