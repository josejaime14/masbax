function postComment() {
	var nombre = document.getElementById('nombre');
	var comentario = document.getElementById('comentario');
    var nuevoComentario = document.createElement("div");
    var nuevoComentarioNombre = document.createElement("div");
    var nuevoComentarioTexto = document.createElement("div");
    var salto = document.createElement("BR");

    nuevoComentario.className = "comentario";
    nuevoComentarioNombre.className = "comentario-nombre";
    nuevoComentarioTexto.className = "comentario-texto";

    nuevoComentarioNombre.appendChild(document.createTextNode(nombre.value + ": "));
    nuevoComentarioTexto.appendChild(document.createTextNode(comentario.value));
    nuevoComentario.appendChild(nuevoComentarioNombre);
    nuevoComentario.appendChild(nuevoComentarioTexto);
    nuevoComentario.appendChild(salto);

    document.getElementById('comment-section').appendChild(nuevoComentario);

}